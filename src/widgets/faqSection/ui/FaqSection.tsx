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
    question: '학과 체험은 한 번만 신청 가능한가요?',
    answer: '학과 체험은 분기마다 한번씩 총 3번 신청 가능합니다.',
  },
  {
    question: '3번의 학과 체험을 다 같은 과목으로 신청이 가능한가요?',
    answer:
      '3번 모두 동일한 과목으로 신청하는 것은 불가능합니다.\n학과 체험은 최대 3회까지 신청할 수 있으나, 각각 다른 과목으로 선택해야 합니다.',
  },
  {
    question: '여러 개의 학과체험을 한분기에 신청할 수 있나요?',
    answer:
      '한 분기에는 1개의 학과 체험만 신청 가능합니다.\n동일 기간에 여러 체험이 동시에 진행되기 때문에 중복 참여가 불가능합니다.',
  },
  {
    question: '전 분기에 신청했던 학과체험을 다시 신청하게 된다면 어떻게 되나요?',
    answer: '자동으로 학과체험 신청이 취소 처리됩니다.',
  },
  {
    question: '이름이나 개인정보를 잘못 기입한 경우 수정이 가능한가요?',
    answer:
      '개인정보는 시스템에서 직접 수정이 불가능합니다.\n잘못 입력하신 경우 아래 교무실로 연락 주시면 확인 후 안내해 드립니다.\n교무실 062)949-6800 (08:30~16:30)',
  },
  {
    question: '학과 체험 확정 문자는 언제 오나요?',
    answer:
      '학과 체험 확정 문자는 신청자 검토가 완료된 후 순차적으로 발송됩니다.\n신청 인원 및 내부 일정에 따라 발송 시점이 달라질 수 있으며, 일반적으로 신청 마감 이후 안내됩니다.',
  },
  {
    question: '신청한 학과 체험을 변경할 수 있나요?',
    answer:
      '신청 완료 후에는 체험 내용을 직접 변경할 수 없습니다.\n변경을 원하실 경우, 기존 신청을 취소한 뒤 다시 신청해야 합니다.\n단, 재신청 시 정원이 마감된 경우 예비 신청으로 전환될 수 있으며 이 경우 최종 참여가 어려울 수 있으니 신중하게 신청해 주세요.',
  },
];

const FaqSection = () => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

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
        'flex min-h-[calc(100vh-6.25rem-11.3125rem)] flex-col items-center bg-white px-4 pt-9 pb-12',
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
