import { cn } from '@shared/lib';
import { AnimateOnView, buttonVariants } from '@shared/ui';

import SectionLabel from './SectionLabel';

const HomeSection5 = () => {
  return (
    <section className={cn('flex w-full flex-col gap-12 lg:items-end lg:gap-20')}>
      <AnimateOnView className={cn('flex flex-col gap-4')}>
        <SectionLabel label="More" />
        <h2 className={cn('text-neutral-dark text-2xl leading-normal font-bold lg:text-[4rem]')}>
          <span className={cn('block')}>GSM에 대해 더 알아보고 싶나요?</span>
          <span className={cn('block')}>
            입학 지원 서비스 <br className={cn('xl:hidden')} />
            <span className={cn('text-brand-primary')}>Hello, GSM</span> 도 있습니다
          </span>
        </h2>
      </AnimateOnView>
      <AnimateOnView delay={200} className={cn('flex justify-end')}>
        <a
          href="https://www.hellogsm.kr"
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: 'default', size: 'pillSm' }),
            'lg:h-17 lg:w-125 lg:text-xl',
          )}
        >
          Hello, GSM으로
        </a>
      </AnimateOnView>
    </section>
  );
};

export default HomeSection5;
