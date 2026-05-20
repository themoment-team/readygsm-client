import { cn } from '@/shared/lib';

interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => (
  <div className={cn('flex flex-col gap-2')}>
    <h1 className={cn('text-neutral-dark text-[1.5rem] font-semibold')}>{title}</h1>
    {description && <p className={cn('text-secondary-slate text-[0.875rem]')}>{description}</p>}
  </div>
);

export { SectionHeader };
