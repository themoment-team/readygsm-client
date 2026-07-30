import { cn } from '@/shared/lib';
import { buttonVariants } from '@/shared/ui';

import SectionLabel from './SectionLabel';

const HomeSection5 = () => {
  return (
    <section className={cn('flex w-full flex-col items-end gap-20')}>
      <div className={cn('flex w-full flex-col gap-4')}>
        <SectionLabel label="More" />
        <h2 className={cn('text-neutral-dark text-[4rem] leading-[1.5] font-bold')}>
          <span className={cn('block')}>GSM에 대해 더 알아보고 싶나요?</span>
          <span className={cn('block')}>
            입학 지원 서비스 <span className={cn('text-brand-primary')}>Hello, GSM</span> 도
            있습니다
          </span>
        </h2>
      </div>
      <a
        href="https://www.hellogsm.kr"
        target="_blank"
        rel="noreferrer"
        className={cn(buttonVariants({ variant: 'default', size: 'pill' }), 'w-125')}
      >
        Hello, GSM으로
      </a>
    </section>
  );
};

export default HomeSection5;
