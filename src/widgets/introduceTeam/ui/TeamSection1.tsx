'use client';

import Image from 'next/image';

import { BottomArrow, SmallTheMomentIcon } from '@/shared/assets';
import { cn, scrollToElement } from '@/shared/lib';

const TeamSection1 = () => {
  const scrollToSection2 = () => {
    scrollToElement('#section2');
  };
  return (
    <div className={cn('relative', 'w-full', 'h-[calc(100vh-4.625rem)]', 'overflow-hidden')}>
      <Image
        src={'/images/themoment.jpg'}
        fill
        alt="더모먼트 팀 배경"
        sizes="100vw"
        className={cn('object-cover', 'blur-md', 'brightness-75', 'scale-110')}
        priority
      />
      <div className={cn('absolute', 'inset-0', 'bg-black/40')} />
      <div
        className={cn(
          'absolute',
          'inset-0',
          'w-full',
          'h-full',
          'flex',
          'justify-center',
          'items-center',
          'text-center',
        )}
      >
        <div
          className={cn(
            'absolute',
            'top-1/2',
            'transform',
            '-translate-y-[calc(50%+8.5rem)]',
            'flex',
            'flex-col',
            'justify-center',
            'items-center',
          )}
        >
          <div
            className={cn(
              'flex',
              'justify-center',
              'items-center',
              'w-17',
              'h-17',
              'drop-shadow-lg',
            )}
          >
            <SmallTheMomentIcon />
          </div>
          <p className={cn('text-[2.1875rem]', 'leading-normal', 'font-medium', 'text-white')}>
            the_moment
          </p>
        </div>

        <div className={cn('flex', 'flex-col', 'justify-center', 'items-center', 'gap-5')}>
          <p className={cn('text-[2.35rem]', 'leading-normal', 'font-bold', 'text-white')}>
            순간의 가치를 비춰내다.
          </p>
        </div>
        <div
          className={cn(
            'absolute',
            'bottom-14',
            'gap-1',
            'z-3',
            'flex',
            'flex-col',
            'items-center',
          )}
        >
          <p
            onClick={scrollToSection2}
            className={cn('text-lg', 'text-2xl', 'text-white', 'cursor-pointer')}
          >
            스크롤 해서 더 알아보기
          </p>
          <div onClick={scrollToSection2} className={cn('animate-bounce', 'cursor-pointer')}>
            <BottomArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection1;
