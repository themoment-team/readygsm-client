import { cn } from '@/shared/lib';

interface CompletionMessageProps {
  title: string;
  description: string;
}

const CompletionMessage = ({ title, description }: CompletionMessageProps) => {
  return (
    <div
      className={cn(
        'flex size-full min-h-[calc(100vh-6.25rem-11.3125rem)] flex-col items-center justify-center gap-4 text-center',
      )}
    >
      <p className={cn('text-brand-primary text-[3rem] leading-[1.2] font-bold')}>{title}</p>
      <p className={cn('text-secondary-slate text-2xl leading-[1.2] font-normal')}>{description}</p>
    </div>
  );
};

export default CompletionMessage;
