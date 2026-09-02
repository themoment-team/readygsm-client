'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { getApiErrorStatus } from '@shared/api';

import {
  type ChatFailReasonType,
  type ChatMessageType,
  clearStoredChatSession,
  getStoredChatSessionId,
  setStoredChatSessionId,
  usePostChatSession,
} from '@/entities/chat';

import { askChat } from './askChat';

export const CHAT_MESSAGE_MAX_LENGTH = 500;

const CHAT_GREETING: ChatMessageType = {
  id: 'greeting',
  role: 'bot',
  status: 'done',
  content:
    '안녕하세요! Ready, GSM 챗봇이에요.\n학과 체험이나 입학설명회에 대해 궁금한 점을 물어보세요.',
};

type SessionResultType =
  | { ok: true; sessionId: string }
  | { ok: false; reason: ChatFailReasonType };

interface UseChatStreamOptions {
  userId: number;
  onUnauthorized: () => void;
}

export const useChatStream = ({ userId, onUnauthorized }: UseChatStreamOptions) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([CHAT_GREETING]);
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const isAbortedRef = useRef(false);
  const lastQuestionRef = useRef('');
  const { mutateAsync: issueSession } = usePostChatSession();

  const updateMessage = useCallback((id: string, patch: Partial<ChatMessageType>) => {
    setMessages((prev) =>
      prev.map((message) => (message.id === id ? { ...message, ...patch } : message)),
    );
  }, []);

  const createSession = useCallback(async (): Promise<SessionResultType> => {
    try {
      const res = await issueSession();
      const { sessionId } = res.data;
      setStoredChatSessionId(userId, sessionId);
      return { ok: true, sessionId };
    } catch (error) {
      const status = getApiErrorStatus(error);
      const reason: ChatFailReasonType =
        status === 401 ? 'unauthorized' : status === 429 ? 'rate_limited' : 'connection_lost';
      return { ok: false, reason };
    }
  }, [issueSession, userId]);

  const runStream = useCallback(
    async (question: string, botId: string) => {
      const controller = new AbortController();
      abortRef.current = controller;
      isAbortedRef.current = false;

      const stored = getStoredChatSessionId(userId);
      let session: SessionResultType = stored
        ? { ok: true, sessionId: stored }
        : await createSession();

      if (!session.ok) return session.reason;

      const onToken = (token: string) =>
        setMessages((prev) =>
          prev.map((message) =>
            message.id === botId ? { ...message, content: message.content + token } : message,
          ),
        );

      let result = await askChat({
        sessionId: session.sessionId,
        message: question,
        signal: controller.signal,
        onToken,
      });

      /** 세션이 만료됐거나 다른 사용자에게 묶인 경우 — 재발급 후 같은 질문을 한 번만 재시도한다 */
      if (result.type === 'fail' && result.reason === 'session_expired' && !isAbortedRef.current) {
        clearStoredChatSession();
        session = await createSession();

        if (!session.ok) return session.reason;

        updateMessage(botId, { content: '' });
        result = await askChat({
          sessionId: session.sessionId,
          message: question,
          signal: controller.signal,
          onToken,
        });
      }

      if (result.type === 'done') {
        updateMessage(botId, {
          status: result.finishReason === 'length' ? 'truncated' : 'done',
        });
        return null;
      }

      return result.reason;
    },
    [createSession, updateMessage, userId],
  );

  const send = useCallback(
    async (question: string) => {
      if (isStreaming) return;

      const trimmed = question.trim();
      if (!trimmed || trimmed.length > CHAT_MESSAGE_MAX_LENGTH) return;

      const key = Date.now();
      const botId = `bot-${key}`;
      lastQuestionRef.current = trimmed;

      setMessages((prev) => [
        ...prev,
        { id: `user-${key}`, role: 'user', content: trimmed, status: 'done' },
        { id: botId, role: 'bot', content: '', status: 'streaming' },
      ]);
      setIsStreaming(true);

      const failReason = await runStream(trimmed, botId);

      setIsStreaming(false);
      abortRef.current = null;

      /** 사용자가 직접 중단한 경우는 실패가 아니다 — 받은 답변만 남긴다 */
      if (isAbortedRef.current) {
        updateMessage(botId, { status: 'done' });
        return;
      }

      if (failReason) {
        updateMessage(botId, { status: 'failed', failReason });
        if (failReason === 'unauthorized') onUnauthorized();
      }
    },
    [isStreaming, onUnauthorized, runStream, updateMessage],
  );

  const abort = useCallback(() => {
    isAbortedRef.current = true;
    abortRef.current?.abort();
  }, []);

  const retry = useCallback(() => {
    if (!lastQuestionRef.current) return;

    /** 실패한 답변 버블을 걷어내고 같은 질문을 다시 보낸다 */
    setMessages((prev) => {
      const lastFailedIndex = prev.findLastIndex((message) => message.status === 'failed');
      return lastFailedIndex === -1 ? prev : prev.slice(0, lastFailedIndex - 1);
    });
    send(lastQuestionRef.current);
  }, [send]);

  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  return { messages, isStreaming, send, abort, retry };
};
