import { cn } from '@shared/lib';

interface CompletionMessageProps {
  title: string;
  description: string;
}

const CompletionMessage = ({ title, description }: CompletionMessageProps) => {
  return (
    <div
      className={cn(
        'flex size-full min-h-[calc(100vh-6.25rem-11.3125rem)] flex-col items-center justify-center gap-4 px-6 text-center',
      )}
    >
      <p className={cn('text-brand-primary text-2xl leading-[1.2] font-bold lg:text-[3rem]')}>
        {title}
      </p>
      <p className={cn('text-secondary-slate text-sm leading-[1.4] font-normal lg:text-2xl')}>
        {description}
      </p>
    </div>
  );
};

export default CompletionMessage;
