export type ChatRoleType = 'user' | 'bot';

export type ChatFinishReasonType = 'stop' | 'length';

export type ChatFailReasonType =
  | 'unauthorized'
  | 'session_expired'
  | 'rate_limited'
  | 'bad_request'
  | 'upstream_interrupted'
  | 'idle_timeout'
  | 'connection_lost';

export type ChatMessageStatusType = 'streaming' | 'done' | 'truncated' | 'failed';

export interface ChatMessageType {
  id: string;
  role: ChatRoleType;
  content: string;
  status?: ChatMessageStatusType;
  failReason?: ChatFailReasonType;
}

export interface ChatSessionType {
  sessionId: string;
}
