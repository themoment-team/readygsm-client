import Image from 'next/image';

import { cn } from '@/shared/lib';
import { AnimateOnView } from '@/shared/ui';

import SectionLabel from './SectionLabel';

const HomeSection4 = () => {
  return (
    <section className={cn('w-full')}>
      <AnimateOnView
        className={cn(
          'relative flex flex-col gap-12',
          'lg:block',
          'xl:flex xl:flex-row xl:items-start xl:gap-12',
        )}
      >
        <div
          className={cn(
            'relative aspect-[380/351] w-full overflow-hidden rounded-[1.5rem]',
            'lg:absolute lg:top-0 lg:right-0 lg:aspect-auto lg:h-83 lg:w-90',
            'xl:relative xl:h-auto xl:w-90 xl:shrink-0 xl:self-stretch',
          )}
        >
          <Image src="/images/home-pride.png" alt="" fill className={cn('object-cover')} />
        </div>
        <div className={cn('flex flex-col gap-12 lg:pt-53 xl:flex-1 xl:pt-0')}>
          <div className={cn('flex flex-col gap-4')}>
            <SectionLabel label="Pride" />
            <h2
              className={cn('text-neutral-dark text-2xl leading-normal font-bold lg:text-[4rem]')}
            >
              수상 경력
            </h2>
          </div>
          <div className={cn('text-neutral-dark flex flex-col gap-6 font-bold')}>
            <p className={cn('text-sm leading-normal lg:text-xl')}>
              실력은 결과로 증명합니다. GSM 학생들은 소프트웨어 분야 각종 대회에서 꾸준히 수상하며
              실력을 입증해 왔습니다. 제89회 전국기능경기대회 은상, 그리고 제47회
              국제기능올림픽대회(프랑스) 수상까지
            </p>
            <p className={cn('text-brand-primary text-base leading-normal lg:text-[2rem]')}>
              — 대한민국을 넘어 세계 무대에서 인정받은 실력입니다.
            </p>
          </div>
        </div>
      </AnimateOnView>
    </section>
  );
};

export default HomeSection4;
