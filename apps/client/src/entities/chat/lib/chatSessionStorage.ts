const CHAT_SESSION_KEY = 'chatSession';

interface StoredChatSession {
  userId: number;
  sessionId: string;
}

/** 세션은 발급받은 사용자에게 바인딩되므로 userId가 다르면 재사용하지 않는다 */
export const getStoredChatSessionId = (userId: number): string | null => {
  try {
    const raw = localStorage.getItem(CHAT_SESSION_KEY);
    if (!raw) return null;

    const stored = JSON.parse(raw) as StoredChatSession;
    return stored.userId === userId ? stored.sessionId : null;
  } catch {
    return null;
  }
};

export const setStoredChatSessionId = (userId: number, sessionId: string) => {
  try {
    localStorage.setItem(CHAT_SESSION_KEY, JSON.stringify({ userId, sessionId }));
  } catch {
    /* 저장에 실패해도 이번 대화는 메모리의 세션으로 이어간다 */
  }
};

export const clearStoredChatSession = () => {
  try {
    localStorage.removeItem(CHAT_SESSION_KEY);
  } catch {
    /* 삭제 실패는 무시한다 */
  }
};
