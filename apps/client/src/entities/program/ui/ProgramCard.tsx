import { type ActivityType, MAX_RESERVE_APPLICANT } from '@shared/entities/activity';
import { cn } from '@shared/lib';

interface ProgramCardProps extends Pick<
  ActivityType,
  'name' | 'description' | 'activityDate' | 'maxApplicant' | 'currentApplicant'
> {
  isSelected?: boolean | undefined;
  isReserved?: boolean;
  reserveOrder?: number | null;
  disableHover?: boolean;
  hideApplicant?: boolean;
  onClick?: () => void;
}

const ProgramCard = ({
  name,
  description,
  activityDate,
  maxApplicant,
  currentApplicant,
  isSelected,
  isReserved,
  reserveOrder,
  disableHover = false,
  hideApplicant = false,
  onClick,
}: ProgramCardProps) => {
  const reserveApplicant = Math.max(currentApplicant - maxApplicant, 0);
  const isReserveFull = reserveApplicant >= MAX_RESERVE_APPLICANT;
  const isApplyDisabled = !hideApplicant && isReserved === undefined && isReserveFull;
  const showReserveWarning =
    !hideApplicant && (isReserved !== undefined ? isReserved : currentApplicant >= maxApplicant);
  const isInteractive = onClick !== undefined;
  const reserveBadgeText =
    isReserved && reserveOrder != null ? `예비신청 ${reserveOrder}번` : '예비 신청';

  return (
    <section
      className={cn(
        'relative w-full max-w-155.5 rounded-lg border bg-white px-6 py-5',
        !disableHover &&
          isInteractive &&
          !isApplyDisabled &&
          'cursor-pointer transition-colors duration-200 hover:bg-[#EFF4FF]',
        isApplyDisabled
          ? 'border-border-variant cursor-not-allowed opacity-50'
          : isSelected === true
            ? 'border-[#2563EB]'
            : isSelected === false
              ? 'opacity-50'
              : cn('border-border-variant', !disableHover && 'hover:border-[#7C91A9]'),
      )}
    >
      <header
        className={cn('flex flex-col items-start gap-2 sm:flex-row sm:justify-between sm:gap-4')}
      >
        <h2
          className={cn(
            'min-w-0 text-[1.5rem] leading-[1.2] font-semibold wrap-anywhere sm:flex-1',
            isSelected ? 'text-[#2563EB]' : 'text-neutral-dark',
          )}
        >
          {isInteractive ? (
            <button
              type="button"
              aria-disabled={isApplyDisabled}
              aria-pressed={isSelected === true}
              onClick={isApplyDisabled ? undefined : onClick}
              className={cn(
                'appearance-none border-0 bg-transparent p-0 text-left font-[inherit] leading-[inherit]',
                "after:absolute after:inset-0 after:z-10 after:content-['']",
                'focus-visible:after:outline-brand-primary focus-visible:after:outline-2 focus-visible:after:outline-offset-2',
              )}
            >
              {name}
            </button>
          ) : (
            name
          )}
        </h2>
        {!hideApplicant && (
          <p
            className={cn(
              'shrink-0 text-[1.5rem] leading-[1.2] font-semibold whitespace-nowrap',
              isApplyDisabled || showReserveWarning ? 'text-error-red' : 'text-brand-primary',
            )}
          >
            {isApplyDisabled
              ? '신청불가'
              : showReserveWarning
                ? reserveBadgeText
                : `${currentApplicant}/${maxApplicant}`}
          </p>
        )}
      </header>

      <p
        className={cn(
          'text-secondary-slate mt-2 text-[0.875rem] leading-[1.4] font-normal whitespace-pre-line',
        )}
      >
        {description}
      </p>

      <p className={cn('text-secondary-slate mt-2 text-[0.875rem] leading-[1.4] font-normal')}>
        {activityDate}
      </p>

      {isApplyDisabled ? (
        <p className={cn('text-error-red mt-2 text-[0.875rem] leading-[1.4] font-normal')}>
          예비신청 정원 마감으로 신청이 불가합니다
        </p>
      ) : (
        showReserveWarning && (
          <p className={cn('text-error-red mt-2 text-[0.875rem] leading-[1.4] font-normal')}>
            예비 신청의 경우, 신청이 확정되지 않으면 확정 안내 문자가 발송되지 않을 수 있습니다.
          </p>
        )
      )}
    </section>
  );
};

export default ProgramCard;
