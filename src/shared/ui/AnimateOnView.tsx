import { ReactNode } from 'react';

import useInView from '@/shared/hooks/useInView';
import { cn } from '@/shared/lib';

interface AnimateOnViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimateOnView = ({ children, className, delay = 0 }: AnimateOnViewProps) => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        'w-full transition-all duration-800 ease-out',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default AnimateOnView;
