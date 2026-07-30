import { cn } from '@/shared/lib';
import { AnimateOnView, buttonVariants } from '@/shared/ui';

import SectionLabel from './SectionLabel';

const HomeSection5 = () => {
  return (
    <section className={cn('flex w-full flex-col items-end gap-20')}>
      <AnimateOnView className={cn('flex flex-col gap-4')}>
        <SectionLabel label="More" />
        <h2 className={cn('text-neutral-dark text-[4rem] leading-[1.5] font-bold')}>
          <span className={cn('block')}>GSM에 대해 더 알아보고 싶나요?</span>
          <span className={cn('block')}>
            입학 지원 서비스 <span className={cn('text-brand-primary')}>Hello, GSM</span> 도
            있습니다
          </span>
        </h2>
      </AnimateOnView>
      <AnimateOnView delay={200} className={cn('flex justify-end')}>
        <a
          href="https://www.hellogsm.kr"
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ variant: 'default', size: 'pill' }), 'w-125')}
        >
          Hello, GSM으로
        </a>
      </AnimateOnView>
    </section>
  );
};

export default HomeSection5;
