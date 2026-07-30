import { cn } from '@/shared/lib';

interface SectionLabelProps {
  label: string;
}

const SectionLabel = ({ label }: SectionLabelProps) => {
  return (
    <div className={cn('flex items-center gap-4')}>
      <span className={cn('bg-brand-primary size-2 shrink-0 rounded-full')} />
      <p className={cn('text-neutral-dark text-[1.5rem] leading-[1.2] font-bold')}>{label}</p>
    </div>
  );
};

export default SectionLabel;
