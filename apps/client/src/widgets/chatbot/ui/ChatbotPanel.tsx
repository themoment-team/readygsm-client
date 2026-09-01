'use client';

import { useEffect, useRef, useState } from 'react';

import { ArrowUp, X } from 'lucide-react';

import { cn } from '@shared/lib';

import { CHATBOT_GREETING, CHATBOT_PENDING_ANSWER } from '../model/constants';
import type { ChatMessageType } from '../model/types';
import ChatMessage from './ChatMessage';

interface ChatbotPanelProps {
  onClose: () => void;
}

const ChatbotPanel = ({ onClose }: ChatbotPanelProps) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([CHATBOT_GREETING]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const isSendable = input.trim().length > 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isSendable) return;

    const question = input.trim();
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, role: 'user', content: question },
      { id: `bot-${Date.now()}`, role: 'bot', content: CHATBOT_PENDING_ANSWER },
    ]);
    setInput('');
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-label="Ready, GSM 챗봇"
      className={cn(
        'fixed right-6 bottom-23 z-50 lg:right-10 lg:bottom-27',
        'flex w-[calc(100vw-3rem)] max-w-90 flex-col overflow-hidden',
        'h-[min(31.25rem,calc(100dvh-12rem))]',
        'bg-ghost-white border-neutral-light rounded-2xl border border-solid',
        'shadow-[0_0.5rem_2rem_rgba(0,5,28,0.16)]',
        'animate-in fade-in slide-in-from-bottom-4 duration-200',
      )}
    >
      <div className={cn('bg-brand-primary text-pure-white flex items-center gap-3 px-5 py-4')}>
        <div className={cn('flex flex-1 flex-col gap-0.5')}>
          <span className={cn('text-base leading-5 font-semibold')}>Ready, GSM 챗봇</span>
          <span className={cn('text-xs leading-4 opacity-80')}>
            학과 체험 · 입학설명회 무엇이든 물어보세요
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="챗봇 닫기"
          className={cn(
            'flex size-8 cursor-pointer items-center justify-center rounded-full',
            'transition-colors hover:bg-white/20',
          )}
        >
          <X size={20} strokeWidth={2} />
        </button>
      </div>

      <div ref={scrollRef} className={cn('flex flex-1 flex-col gap-3 overflow-y-auto p-4')}>
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className={cn(
          'bg-pure-white border-neutral-light flex items-center gap-2 border-t border-solid p-3',
        )}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="궁금한 점을 입력해주세요"
          aria-label="질문 입력"
          className={cn(
            'bg-base-fill text-neutral-dark placeholder:text-slate-utility',
            'h-11 min-w-0 flex-1 rounded-full px-4 text-sm outline-none',
            'focus-visible:ring-brand-primary/30 focus-visible:ring-2',
          )}
        />
        <button
          type="submit"
          disabled={!isSendable}
          aria-label="질문 보내기"
          className={cn(
            'flex size-11 shrink-0 items-center justify-center rounded-full transition-colors',
            isSendable
              ? 'bg-brand-primary text-pure-white hover:bg-brand-primary/90 cursor-pointer'
              : 'bg-base-fill text-slate-utility cursor-not-allowed',
          )}
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </button>
      </form>
    </div>
  );
};

export default ChatbotPanel;
