'use client';

import Image from 'next/image';

import { BottomArrow, SmallTheMomentIcon } from '@/shared/assets';
import { cn, scrollToElement } from '@/shared/lib';

const TeamSection1 = () => {
  const scrollToSection2 = () => {
    scrollToElement('#section2');
  };
  return (
    <div className={cn('relative h-[calc(100vh-4.625rem)] w-full overflow-hidden')}>
      <Image
        src={'/images/themoment.jpg'}
        fill
        alt="더모먼트 팀 배경"
        sizes="100vw"
        className={cn('scale-110 object-cover')}
        priority
      />
      <div className={cn('absolute inset-0 bg-black/40 backdrop-blur-[0.7rem]')} />
      <div
        className={cn(
          'absolute inset-0 flex h-full w-full items-center justify-center text-center',
        )}
      >
        <div
          className={cn(
            'absolute top-1/2 flex -translate-y-[calc(50%+8.5rem)] transform flex-col items-center justify-center',
          )}
        >
          <div className={cn('flex h-17 w-17 items-center justify-center drop-shadow-lg')}>
            <SmallTheMomentIcon />
          </div>
          <p className={cn('text-4xl leading-normal font-medium text-white')}>the_moment</p>
        </div>

        <div className={cn('flex flex-col items-center justify-center gap-5')}>
          <p className={cn('text-8xl leading-normal font-bold text-white')}>
            순간의 가치를 비춰내다.
          </p>
        </div>
        <div className={cn('absolute bottom-14 z-3 flex flex-col items-center gap-1')}>
          <p
            onClick={scrollToSection2}
            className={cn('font-600 cursor-pointer text-2xl leading-7 text-white')}
          >
            스크롤 해서 더 알아보기
          </p>
          <div onClick={scrollToSection2} className={cn('animate-bounce cursor-pointer')}>
            <BottomArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection1;
