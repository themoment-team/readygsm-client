import type { ActivityType } from '@/entities/activity';
import { cn } from '@/shared/lib';

interface ProgramCardProps extends Pick<
  ActivityType,
  'name' | 'description' | 'activityDate' | 'maxApplicant' | 'currentApplicant'
> {
  isSelected?: boolean | undefined;
  disableHover?: boolean;
  onClick?: () => void;
}

const ProgramCard = ({
  name,
  description,
  activityDate,
  maxApplicant,
  currentApplicant,
  isSelected,
  disableHover = false,
  onClick,
}: ProgramCardProps) => {
  const reservePersonnel = maxApplicant - currentApplicant;

  return (
    <section
      className={cn(
        'w-155.5 max-w-155.5 rounded-lg border bg-white px-6 py-5',
        !disableHover && 'cursor-pointer transition-colors duration-200 hover:bg-[#EFF4FF]',
        isSelected === true
          ? 'border-[#2563EB]'
          : isSelected === false
            ? 'opacity-50'
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
          {name}
        </h2>
        <p
          className={cn(
            'text-[1.5rem] leading-[1.2] font-semibold',
            isSelected ? 'text-[#2563EB]' : 'text-neutral-dark',
          )}
        >
          {reservePersonnel > 0 ? `${currentApplicant}/${maxApplicant}` : '예비 신청'}
        </p>
      </header>

      <p className={cn('text-secondary-slate mt-2 text-[0.875rem] leading-[1.4] font-normal')}>
        {description}
      </p>

      <p className={cn('text-secondary-slate mt-2 text-[0.875rem] leading-[1.4] font-normal')}>
        {activityDate}
      </p>
    </section>
  );
};

export default ProgramCard;
