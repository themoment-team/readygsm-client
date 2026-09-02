import { RotateCw } from 'lucide-react';

import { cn } from '@shared/lib';

import type { ChatMessageType } from '@/entities/chat';

import { CHAT_FAIL_MESSAGE } from '../model/failMessage';
import TypingIndicator from './TypingIndicator';

interface ChatMessageProps {
  message: ChatMessageType;
  onRetry: () => void;
}

const ChatMessage = ({ message, onRetry }: ChatMessageProps) => {
  const isUser = message.role === 'user';
  const isEmptyStreaming = message.status === 'streaming' && message.content.length === 0;

  return (
    <div className={cn('flex w-full flex-col gap-1.5', isUser ? 'items-end' : 'items-start')}>
      {isEmptyStreaming ? (
        <TypingIndicator />
      ) : (
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
      )}

      {message.status === 'truncated' && (
        <span className={cn('text-slate-utility px-1 text-xs leading-4')}>
          답변이 길어 잘렸어요
        </span>
      )}

      {message.status === 'failed' && message.failReason && (
        <div className={cn('flex items-center gap-2 px-1')}>
          <span className={cn('text-error-red text-xs leading-4')}>
            {CHAT_FAIL_MESSAGE[message.failReason]}
          </span>
          {message.failReason !== 'unauthorized' && (
            <button
              type="button"
              onClick={onRetry}
              className={cn(
                'text-brand-primary flex cursor-pointer items-center gap-1 text-xs leading-4 font-semibold',
                'hover:underline',
              )}
            >
              <RotateCw size={12} strokeWidth={2.5} />
              다시 시도
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
