import { ReactNode } from 'react';

import { cn } from '@/shared/lib';

import type { ActivityType } from '../model/types';

interface ActivityCardProps {
  activity: ActivityType;
  currentApplicant?: number;
  actions?: ReactNode;
  className?: string;
}

const ActivityCard = ({
  activity,
  currentApplicant = 0,
  actions,
  className,
}: ActivityCardProps) => (
  <section
    className={cn(
      'border-border-variant w-full rounded-lg border bg-white px-6 py-5 transition-colors duration-200',
      className,
    )}
  >
    <header className={cn('flex items-center justify-between')}>
      <h2 className={cn('text-neutral-dark text-[1.5rem] leading-[1.2] font-semibold')}>
        {activity.name}
      </h2>
      <p className={cn('text-neutral-dark text-[1.5rem] leading-[1.2] font-semibold')}>
        {currentApplicant}/{activity.maxApplicant}
      </p>
    </header>

    <ul
      className={cn(
        'text-secondary-slate mt-2 list-disc space-y-0.5 pl-5.25 text-[0.875rem] leading-[1.4] font-normal',
      )}
    >
      {activity.description.split('\n').map((line, i) => (
        <li key={i}>{line}</li>
      ))}
    </ul>

    <p className={cn('text-secondary-slate mt-2 text-[0.875rem] leading-[1.4] font-normal')}>
      {activity.activityDate}
    </p>

    {actions && <div className={cn('mt-4 flex justify-end gap-2')}>{actions}</div>}
  </section>
);

export default ActivityCard;
