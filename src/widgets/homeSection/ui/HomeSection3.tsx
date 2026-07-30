import { cn } from '@/shared/lib';

const HomeSection3 = () => {
  return (
    <section className={cn('relative flex w-full')}>
      <div className={cn('flex flex-1 flex-col gap-18 pl-187')}>
        <h2 className={cn('text-neutral-dark text-[3rem] leading-[1.5] font-bold')}>
          <span className={cn('block')}>처음이여도 걱정하지 마세요.</span>
          <span className={cn('block')}>
            우리 대다수가 <span className={cn('text-brand-primary')}>처음이었습니다.</span>
          </span>
        </h2>
      </div>
    </section>
  );
};

export default HomeSection3;
