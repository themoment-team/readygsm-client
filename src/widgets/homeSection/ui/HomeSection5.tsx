import Link from 'next/link';

import { cn } from '@/shared/lib';
import { AnimateOnView } from '@/shared/ui';

const HomeSection5 = () => {
  return (
    <div
      className={cn(
        'text-neutral-dark flex w-7xl flex-col justify-center gap-30 py-90 text-[2.25rem] leading-[2.7rem] font-bold',
      )}
    >
      <AnimateOnView>
        <div>아직 잘 모르겠다면...</div>
        <div>
          <span className={cn('bg-brand-primary px-1 leading-[1.2] text-white')}>
            광주소프트웨어마이스터고
          </span>
          에서 학과 체험은 어떨까요?
        </div>
      </AnimateOnView>
      <AnimateOnView className="flex flex-row gap-9">
        <div>
          내가 정말&nbsp;
          <span className={cn('bg-brand-primary px-1 leading-[1.2] text-white')}>개발자</span>
          &nbsp;가 적성일까?
        </div>
        <Link href="/programs" className={cn('text-brand-primary cursor-pointer underline')}>
          학과 체험을 통해 확인해보세요!
        </Link>
      </AnimateOnView>
    </div>
  );
};

export default HomeSection5;
