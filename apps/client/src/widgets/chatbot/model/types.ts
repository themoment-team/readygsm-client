export type ChatRoleType = 'user' | 'bot';

export interface ChatMessageType {
  id: string;
  role: ChatRoleType;
  content: string;
}
