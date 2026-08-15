import { cn } from '@shared/lib';

interface SectionLabelProps {
  label: string;
}

const SectionLabel = ({ label }: SectionLabelProps) => {
  return (
    <div className={cn('flex items-center gap-4')}>
      <span className={cn('bg-brand-primary size-2 shrink-0 rounded-full')} />
      <p className={cn('text-neutral-dark text-xs leading-[1.2] font-bold lg:text-2xl')}>{label}</p>
    </div>
  );
};

export default SectionLabel;
