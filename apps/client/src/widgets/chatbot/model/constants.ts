import type { ChatMessageType } from './types';

export const CHATBOT_GREETING: ChatMessageType = {
  id: 'greeting',
  role: 'bot',
  content:
    '안녕하세요! Ready, GSM 챗봇이에요.\n학과 체험이나 입학설명회에 대해 궁금한 점을 물어보세요.',
};

/** SSE 연동 전까지 사용하는 임시 응답 */
export const CHATBOT_PENDING_ANSWER = '답변 기능은 아직 연동 중이에요. 조금만 기다려주세요!';
