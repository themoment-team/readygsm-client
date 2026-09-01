'use client';

import { useState } from 'react';

import { MessageCircle, X } from 'lucide-react';

import { cn } from '@shared/lib';

const ChatbotLauncher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-expanded={isOpen}
      aria-label={isOpen ? '챗봇 닫기' : '챗봇 열기'}
      className={cn(
        'fixed right-6 bottom-6 z-50 lg:right-10 lg:bottom-10',
        'flex size-14 cursor-pointer items-center justify-center rounded-full',
        'bg-brand-primary text-pure-white',
        'shadow-[0_0.25rem_1rem_rgba(74,128,248,0.35)]',
        'transition-[background-color,transform,box-shadow] duration-200',
        'hover:bg-brand-primary/90 hover:scale-105',
        'active:scale-95',
        'focus-visible:ring-brand-primary/30 outline-none focus-visible:ring-4',
      )}
    >
      {isOpen ? <X size={26} strokeWidth={2} /> : <MessageCircle size={26} strokeWidth={2} />}
    </button>
  );
};

export default ChatbotLauncher;
