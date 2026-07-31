import Image from 'next/image';

import { cn } from '@/shared/lib';
import { AnimateOnView } from '@/shared/ui';

import SectionLabel from './SectionLabel';

const HomeSection4 = () => {
  return (
    <section className={cn('w-full')}>
      <AnimateOnView className={cn('relative xl:flex xl:items-start xl:gap-12')}>
        <div
          className={cn(
            'absolute top-0 right-0 h-83 w-90 overflow-hidden rounded-[1.5rem]',
            'xl:relative xl:h-auto xl:shrink-0 xl:self-stretch',
          )}
        >
          <Image src="/images/home-pride.png" alt="" fill className={cn('object-cover')} />
        </div>
        <div className={cn('flex flex-col gap-12 pt-53 xl:flex-1 xl:pt-0')}>
          <div className={cn('flex flex-col gap-4')}>
            <SectionLabel label="Pride" />
            <h2 className={cn('text-neutral-dark text-[4rem] leading-[1.5] font-bold')}>
              수상 경력
            </h2>
          </div>
          <div className={cn('text-neutral-dark flex flex-col gap-6 font-bold')}>
            <p className={cn('text-[1.25rem] leading-[1.5]')}>
              실력은 결과로 증명합니다. GSM 학생들은 소프트웨어 분야 각종 대회에서 꾸준히 수상하며
              실력을 입증해 왔습니다. 제89회 전국기능경기대회 은상, 그리고 제47회
              국제기능올림픽대회(프랑스) 수상까지
            </p>
            <p className={cn('text-brand-primary text-[2rem] leading-[1.5]')}>
              — 대한민국을 넘어 세계 무대에서 인정받은 실력입니다.
            </p>
          </div>
        </div>
      </AnimateOnView>
    </section>
  );
};

export default HomeSection4;
