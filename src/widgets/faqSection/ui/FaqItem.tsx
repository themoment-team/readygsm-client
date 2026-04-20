import { ArrowIcon } from '@/shared/assets';
import { cn } from '@/shared/lib';

interface FaqItemType {
  question: string;
  answer: string;
}

interface FaqItemProps {
  item: FaqItemType;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ item, index, isOpen, onToggle }: FaqItemProps) => (
  <li
    className={cn(
      'overflow-hidden rounded-lg border transition-[border-color] duration-300',
      isOpen ? 'border-brand-primary' : 'border-border-variant',
    )}
  >
    <button
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${index}`}
      className={cn(
        'flex w-full items-center gap-2.5 px-6 pt-5 text-left',
        isOpen ? 'pb-0' : 'pb-5 hover:bg-[#EFF4FF]',
      )}
      onClick={onToggle}
    >
      <span className={cn('text-brand-primary shrink-0 text-sm leading-5 font-medium')}>Q.</span>
      <span className={cn('text-neutral-dark flex-1 text-sm leading-5 font-medium')}>
        {item.question}
      </span>
      <span className={cn('ml-4 shrink-0')}>
        <ArrowIcon color={isOpen ? 'var(--brand-primary)' : 'var(--neutral-dark)'} />
      </span>
    </button>
    <div
      id={`faq-answer-${index}`}
      className={cn(
        'grid transition-[grid-template-rows] duration-300',
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
      )}
    >
      <div className={cn('flex gap-2.5 overflow-hidden px-6', isOpen && 'pt-2.5 pb-5')}>
        <span className={cn('invisible shrink-0 text-sm')} aria-hidden="true">
          Q.
        </span>
        <p
          className={cn(
            'text-secondary-slate text-base leading-[1.6rem] font-normal tracking-[0.03rem]',
          )}
        >
          {item.answer}
        </p>
      </div>
    </div>
  </li>
);

export default FaqItem;
