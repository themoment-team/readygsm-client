import { InfoCard } from '@/entities/schoolInfo';
import { cn } from '@/shared/lib';
import { AnimateOnView } from '@/shared/ui';

import { schoolInfoSections } from '../../homeSection/model/schoolInfoData';

const HomeSection2 = () => {
  return (
    <div className={cn('flex flex-col items-center pt-50')} id="homeSection2">
      <div className={cn('flex w-7xl flex-col gap-20')}>
        <AnimateOnView>
          <div className={cn('text-brand-primary text-4xl leading-[120%] font-bold')}>
            Curriculum
          </div>
        </AnimateOnView>
        <div className={cn('flex w-full flex-col gap-20')}>
          {schoolInfoSections.map((section, index) => (
            <section key={index} className={cn('flex flex-col gap-6')}>
              <h2 className={cn('text-neutral-dark text-[2.25rem] leading-normal font-bold')}>
                <AnimateOnView>{section.title}</AnimateOnView>
              </h2>
              <div className={cn('flex gap-[1.44rem]')}>
                {section.cards.map((card, index) => (
                  <AnimateOnView delay={200} key={index}>
                    <InfoCard category={card.category} descriptions={card.descriptions} />
                  </AnimateOnView>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
