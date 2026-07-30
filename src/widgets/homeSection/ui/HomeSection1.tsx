import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib';
import { buttonVariants } from '@/shared/ui';

const HomeSection1 = () => {
  return (
    <section className={cn('flex w-full flex-col')}>
      <div className={cn('flex flex-col items-center gap-[3.875rem]')}>
        <Image
          src="/images/home-wordmark.svg"
          alt="광주소프트웨어마이스터고"
          width={1920}
          height={165}
          priority
          unoptimized
          className={cn('h-auto w-full')}
        />
        <h1 className={cn('text-neutral-dark text-center text-[4.5rem] leading-[1.2] font-bold')}>
          <span className={cn('block')}>단순한 개발자를 넘어 세상을 바꾸는</span>
          <span className={cn('block')}>
            <span className={cn('text-brand-primary')}>마이스터(Meister)</span>의 길
          </span>
        </h1>
        <Link
          href="/programs"
          className={cn(buttonVariants({ variant: 'default', size: 'pill' }), 'w-125')}
        >
          학과 체험 신청하기
        </Link>
      </div>
      <div className={cn('relative mt-[12.6875rem] h-125 w-full overflow-hidden rounded-[1.5rem]')}>
        <Image
          src="/images/home-band.png"
          alt=""
          fill
          priority
          className={cn('object-cover object-center')}
        />
      </div>
    </section>
  );
};

export default HomeSection1;
