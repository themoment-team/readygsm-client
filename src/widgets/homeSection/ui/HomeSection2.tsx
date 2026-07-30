import { cn } from '@/shared/lib';

import SectionLabel from './SectionLabel';

const HomeSection2 = () => {
  return (
    <section className={cn('flex w-full flex-col gap-12')}>
      <div className={cn('flex flex-col gap-4')}>
        <SectionLabel label="Curriculum" />
        <h2 className={cn('text-neutral-dark text-[4rem] leading-[1.5] font-bold')}>
          학교 · 학과 소개와 <span className={cn('text-brand-primary')}>교육과정</span>
        </h2>
      </div>
    </section>
  );
};

export default HomeSection2;
