import { cn } from '@shared/lib';

import type { ChatMessageType } from '../model/types';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === 'user';

  return (
    <div className={cn('flex w-full', isUser ? 'justify-end' : 'justify-start')}>
      <p
        className={cn(
          'max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 whitespace-pre-wrap',
          isUser
            ? 'bg-brand-primary text-pure-white rounded-tr-sm'
            : 'bg-pure-white text-neutral-dark border-neutral-light rounded-tl-sm border border-solid',
        )}
      >
        {message.content}
      </p>
    </div>
  );
};

export default ChatMessage;
