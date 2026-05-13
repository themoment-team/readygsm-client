import { cn } from '@/shared/lib';

interface CompletionMessageProps {
  title: string;
  description: string;
}

const CompletionMessage = ({ title, description }: CompletionMessageProps) => {
  return (
    <div className={cn('flex size-full flex-col items-center justify-center gap-4 text-center')}>
      <p className={cn('text-brand-primary text-[3rem] leading-none font-bold')}>{title}</p>
      <p className={cn('text-secondary-slate text-2xl leading-none font-normal')}>{description}</p>
    </div>
  );
};

export default CompletionMessage;
