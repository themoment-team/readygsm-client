import Link from 'next/link';

import { cn } from '@/shared/lib';
import { AnimateOnView, buttonVariants } from '@/shared/ui';

import { journeySteps } from '../model/journeySteps';
import JourneyRail from './JourneyRail';

const HomeSection3 = () => {
  return (
    <section className={cn('relative flex w-full')}>
      <JourneyRail />
      <div className={cn('flex min-w-0 flex-1 flex-col gap-12 lg:gap-18 xl:pl-[42.2%] 2xl:pl-187')}>
        <AnimateOnView>
          <h2
            className={cn('text-neutral-dark text-[1.5rem] leading-[1.5] font-bold lg:text-[3rem]')}
          >
            <span className={cn('block')}>처음이여도 걱정하지 마세요.</span>
            <span className={cn('block')}>
              우리 대다수가 <span className={cn('text-brand-primary')}>처음이었습니다.</span>
            </span>
          </h2>
        </AnimateOnView>
        <div className={cn('flex w-full flex-col gap-6 lg:max-w-150 lg:gap-12')}>
          {journeySteps.map((step) => (
            <AnimateOnView key={step.number} className={cn('flex flex-col gap-4 lg:gap-6')}>
              <div className={cn('text-neutral-dark flex flex-col gap-2 font-bold')}>
                <p className={cn('text-[0.75rem] leading-[1.5] lg:text-[1rem]')}>
                  <span className={cn('text-brand-primary')}>{step.number}</span> - {step.label}
                </p>
                <p className={cn('text-[1rem] leading-[1.5] lg:text-[2.5rem]')}>{step.title}</p>
              </div>
              <p
                className={cn(
                  'text-[0.875rem] leading-[1.5] font-normal text-[#70757e] lg:text-[1.25rem]',
                )}
              >
                {step.description}
              </p>
              {step.cta && (
                <Link
                  href={step.cta.href}
                  className={cn(
                    buttonVariants({ variant: 'default', size: 'pillSm' }),
                    'self-end lg:w-full',
                  )}
                >
                  {step.cta.label}
                </Link>
              )}
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;
