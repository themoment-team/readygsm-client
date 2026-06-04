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
      'flex min-h-[calc(100vh-6.25rem-11.3125rem)] flex-col items-center justify-center gap-2 bg-white',
    )}
  >
    <h1 className={cn('text-brand-primary text-[3rem] font-bold')}>{title}</h1>
    {description && <p className={cn('text-secondary-slate text-[1.5rem]')}>{description}</p>}
    {children}
  </main>
);

export { EmptyState };
