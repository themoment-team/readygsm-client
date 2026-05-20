import { ReactNode } from 'react';

import { cn } from '@/shared/lib';

interface FormFieldProps {
  label: string;
  error?: string;
  children: ReactNode;
}

const FormField = ({ label, error, children }: FormFieldProps) => (
  <div className={cn('flex flex-col gap-1')}>
    <label className={cn('text-neutral-dark text-sm font-medium')}>{label}</label>
    {children}
    {error && <p className={cn('text-error-red text-xs')}>{error}</p>}
  </div>
);

export { FormField };
