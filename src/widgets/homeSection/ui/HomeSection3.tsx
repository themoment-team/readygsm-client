import { cn } from '@/shared/lib';

import { journeySteps } from '../model/journeySteps';
import JourneyRail from './JourneyRail';

const HomeSection3 = () => {
  return (
    <section className={cn('relative flex w-full')}>
      <JourneyRail />
      <div className={cn('flex flex-1 flex-col gap-18 pl-187')}>
        <h2 className={cn('text-neutral-dark text-[3rem] leading-[1.5] font-bold')}>
          <span className={cn('block')}>처음이여도 걱정하지 마세요.</span>
          <span className={cn('block')}>
            우리 대다수가 <span className={cn('text-brand-primary')}>처음이었습니다.</span>
          </span>
        </h2>
        <div className={cn('flex w-150 flex-col gap-12')}>
          {journeySteps.map((step) => (
            <div key={step.number} className={cn('flex flex-col gap-6')}>
              <div className={cn('text-neutral-dark flex flex-col gap-2 font-bold')}>
                <p className={cn('text-[1rem] leading-[1.5]')}>
                  <span className={cn('text-brand-primary')}>{step.number}</span> - {step.label}
                </p>
                <p className={cn('text-[2.5rem] leading-[1.5]')}>{step.title}</p>
              </div>
              <p className={cn('text-[1.25rem] leading-[1.5] font-normal text-[#70757e]')}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;
