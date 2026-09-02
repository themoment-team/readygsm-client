import { type ChatFailReasonType, type ChatFinishReasonType, chatUrl } from '@/entities/chat';

/** axios 인스턴스의 baseURL과 동일한 프록시 경로 — 쿠키를 same-origin으로 실어 보내기 위함 */
const API_PROXY_PREFIX = '/api';

const FRAME_DELIMITER = '\n\n';

export type AskChatResultType =
  | { type: 'done'; finishReason: ChatFinishReasonType }
  | { type: 'fail'; reason: ChatFailReasonType };

interface AskChatOptions {
  sessionId: string;
  message: string;
  signal: AbortSignal;
  onToken: (token: string) => void;
}

const toFailReason = (status: number): ChatFailReasonType => {
  if (status === 401) return 'unauthorized';
  /** 403은 다른 사용자에게 바인딩된 세션 — 만료와 동일하게 재발급으로 복구한다 */
  if (status === 403 || status === 404) return 'session_expired';
  if (status === 429) return 'rate_limited';
  return 'bad_request';
};

interface ParsedFrame {
  event: string;
  data: string;
  hasData: boolean;
}

const parseFrame = (frame: string): ParsedFrame => {
  let event = 'message';
  const dataLines: string[] = [];

  for (const line of frame.split('\n')) {
    /** ':'로 시작하는 줄은 15초 heartbeat(: ping) — data로 오인하면 빈 조각이 섞인다 */
    if (line.startsWith(':')) continue;

    if (line.startsWith('event:')) {
      event = line.slice(6).trim();
      continue;
    }

    /**
     * SSE 명세와 달리 선행 공백을 벗기지 않는다.
     * 서버가 'data:' 뒤에 공백을 넣지 않아, 벗기면 토큰 자체의 공백이 사라진다.
     */
    if (line.startsWith('data:')) dataLines.push(line.slice(5));
  }

  /** 토큰에 줄바꿈이 있으면 서버가 data: 줄을 여러 개로 쪼개 보낸다 */
  return { event, data: dataLines.join('\n') };
};

export const askChat = async ({
  sessionId,
  message,
  signal,
  onToken,
}: AskChatOptions): Promise<AskChatResultType> => {
  let res: Response;

  try {
    res = await fetch(`${API_PROXY_PREFIX}${chatUrl.postChat()}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Session-Id': sessionId },
      body: JSON.stringify({ message }),
      credentials: 'include',
      signal,
    });
  } catch {
    return { type: 'fail', reason: 'connection_lost' };
  }

  /** 200이 아니면 SSE가 아니라 JSON 오류 본문이다 */
  if (!res.ok || !res.body) {
    return { type: 'fail', reason: toFailReason(res.status) };
  }

  const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
  let buffer = '';
  let result: AskChatResultType | null = null;

  try {
    while (!result) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += value;

      let boundary = buffer.indexOf(FRAME_DELIMITER);
      while (boundary !== -1) {
        const { event, data, hasData } = parseFrame(buffer.slice(0, boundary));
        buffer = buffer.slice(boundary + FRAME_DELIMITER.length);

        /** heartbeat(: ping)만 담긴 프레임은 data 줄이 없다 — 토큰으로 취급하지 않는다 */
        if (event === 'message') {
          if (hasData) onToken(data);
        } else if (event === 'done') {
          result = { type: 'done', finishReason: JSON.parse(data).finishReason };
          break;
        } else if (event === 'error') {
          result = { type: 'fail', reason: 'upstream_interrupted' };
          break;
        }

        boundary = buffer.indexOf(FRAME_DELIMITER);
      }
    }
  } catch {
    /** abort 포함 — 호출부가 중단 여부를 판단한다 */
    return { type: 'fail', reason: 'connection_lost' };
  } finally {
    reader.cancel().catch(() => {});
  }

  /** done도 error도 없이 닫힌 경우는 성공이 아니다 */
  return result ?? { type: 'fail', reason: 'connection_lost' };
};
