'use client';

import { useState } from 'react';

import { cn } from '@/shared/lib';

import FaqItem from './FaqItem';

interface FaqItemType {
  question: string;
  answer: string;
}

const faqList: FaqItemType[] = [
  {
    question: '학과 체험 확정 문자는 언제 오나요?',
    answer:
      '학과 체험 확정 문자는 현재 신청자 확인 이후 순차적으로 발송될 예정입니다. 정확한 발송 시점은 내부 상황에 따라 다소 변동될 수 있으나, 일반적으로 신청 마감 후 4일 이내에 안내드리고 있습니다. 조금만 기다려 주시기 바랍니다.',
  },
  {
    question: '신청 후 취소가 가능한가요?',
    answer:
      '신청 취소는 마감일 전까지 가능합니다. 마감일 이후에는 취소가 불가능하오니 신중하게 신청해 주시기 바랍니다.',
  },
  {
    question: '1인당 신청 가능한 학과 수는 몇 개인가요?',
    answer: '1인당 최대 1개의 학과를 신청하실 수 있습니다.',
  },
  {
    question: '현장 접수도 가능한가요?',
    answer: '현장 접수는 불가능하며, 온라인 사전 신청을 통해서만 참여하실 수 있습니다.',
  },
  {
    question: '학과 체험 당일 준비물이 있나요?',
    answer:
      '별도의 준비물은 없습니다. 편안한 복장으로 참석해 주시면 됩니다. 다만 확정 문자를 수신한 경우 해당 문자를 지참해 주시기 바랍니다.',
  },
  {
    question: '보호자 동반이 가능한가요?',
    answer:
      '보호자 동반은 가능하나 체험 공간의 특성상 일부 제한이 있을 수 있습니다. 현장 안내에 따라 주시기 바랍니다.',
  },
  {
    question: '신청 인원이 초과되면 어떻게 되나요?',
    answer: '신청 인원이 초과될 경우 선착순으로 마감되며, 추가 신청은 불가능합니다.',
  },
];

const FaqSection = () => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]));

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <main
      className={cn(
        'flex h-[calc(100vh-6.25rem-11.3125rem)] flex-col items-center bg-white px-4 pt-9 pb-12',
      )}
    >
      <div className={cn('w-full max-w-150')}>
        <h1 className={cn('text-neutral-dark text-2xl font-semibold')}>자주 묻는 질문</h1>
        <p className={cn('text-secondary-slate mt-2 mb-9 text-sm font-normal')}>
          자주 묻는 질문을 여기서 클릭하여 자세히 확인할 수 있습니다.
        </p>
        <ul className={cn('flex flex-col gap-4')}>
          {faqList.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndexes.has(index)}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default FaqSection;
