import { cn } from '@/shared/lib';

import type { ProgramComponentTypes } from '../model/types';

interface ProgramComponent extends ProgramComponentTypes {
  isSelected?: boolean;
  disableHover?: boolean;
  onClick?: () => void;
}

const ProgramCard = ({
  title,
  content,
  date,
  personnel,
  isSelected = false,
  disableHover = false,
  onClick,
}: ProgramComponent) => {
  return (
    <section
      className={cn(
        'w-155.5 max-w-155.5 rounded-lg border bg-white px-6 py-5',
        !disableHover && 'cursor-pointer transition-colors duration-200 hover:bg-[#EFF4FF]',
        isSelected
          ? 'border-[#2563EB]'
          : cn('border-border-variant', !disableHover && 'hover:border-[#7C91A9]'),
      )}
      onClick={onClick}
    >
      <header className={cn('flex items-center justify-between')}>
        <h2
          className={cn(
            'text-[1.5rem] leading-[1.2] font-semibold',
            isSelected ? 'text-[#2563EB]' : 'text-neutral-dark',
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            'text-[1.5rem] leading-[1.2] font-semibold',
            isSelected ? 'text-[#2563EB]' : 'text-neutral-dark',
          )}
        >
          {personnel}/18
        </p>
      </header>

      <ul
        className={cn(
          'text-secondary-slate mt-2 list-disc space-y-0.5 pl-5.25 text-[0.875rem] leading-[1.4] font-normal',
        )}
      >
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p className={cn('text-secondary-slate mt-2 text-[0.875rem] leading-[1.4] font-normal')}>
        {date}
      </p>
    </section>
  );
};

export default ProgramCard;
