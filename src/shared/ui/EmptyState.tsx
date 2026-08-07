import { ReactNode } from 'react';

import { cn } from '@/shared/lib';

interface EmptyStateProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

const EmptyState = ({ title, description, children }: EmptyStateProps) => (
  <main
    className={cn(
      'flex flex-col items-center justify-center bg-white px-6 text-center',
      'min-h-111.25 gap-4',
      'lg:min-h-[calc(100vh-6.25rem-11.3125rem)] lg:gap-2',
    )}
  >
    <h1 className={cn('text-brand-primary text-2xl leading-[1.2] font-bold lg:text-[3rem]')}>
      {title}
    </h1>
    {description && (
      <p className={cn('text-secondary-slate text-sm leading-[1.2] lg:text-[1.5rem]')}>
        {description}
      </p>
    )}
    {children}
  </main>
);

export { EmptyState };
