import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib';
import { AnimateOnView, buttonVariants } from '@/shared/ui';

const KO_DAYS = ['일', '월', '화', '수', '목', '금', '토'] as const;

const formatKoreanPeriod = (start: string, end: string): string => {
  const formatDateTime = (value: string) => {
    const date = new Date(value);
    const hours = date.getHours();
    const period = hours < 12 ? '오전' : '오후';
    const hour = hours % 12 === 0 ? 12 : hours % 12;

    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}. (${KO_DAYS[date.getDay()]}) ${period} ${hour}시`;
  };

  return `${formatDateTime(start)} ~ ${formatDateTime(end)}`;
};

interface HomeSection1Props {
  start?: string;
  end?: string;
}

const HomeSection1 = ({ start, end }: HomeSection1Props) => {
  const activityPeriod =
    start && end ? formatKoreanPeriod(start, end) : '접수 기간 정보가 없습니다.';

  return (
    <section className={cn('flex w-full flex-col')}>
      <AnimateOnView className={cn('flex flex-col items-center gap-[3.875rem]')}>
        <Image
          src="/images/home-wordmark.svg"
          alt="광주소프트웨어마이스터고"
          width={1920}
          height={165}
          priority
          unoptimized
          className={cn('h-auto w-full')}
        />
        <div
          className={cn('text-neutral-dark flex flex-col items-center gap-4 text-center xl:gap-6')}
        >
          <h1 className={cn('text-[3rem] leading-[1.2] font-bold xl:text-[4.5rem]')}>
            <span className={cn('block')}>단순한 개발자를 넘어 세상을 바꾸는</span>
            <span className={cn('block')}>
              <span className={cn('text-brand-primary')}>마이스터(Meister)</span>의 길
            </span>
          </h1>
          <p className={cn('text-[1rem] leading-[1.4] font-medium')}>
            학과 체험 접수 기간 : {activityPeriod}
          </p>
        </div>
        <Link
          href="/programs"
          className={cn(
            buttonVariants({ variant: 'default', size: 'pillSm' }),
            'w-95',
            'xl:h-17 xl:w-125 xl:text-[1.25rem] xl:font-semibold',
          )}
        >
          학과 체험 신청하기
        </Link>
      </AnimateOnView>
      <AnimateOnView
        className={cn(
          'relative mt-[6.9375rem] h-125 w-full overflow-hidden rounded-[1.5rem] xl:mt-[12.6875rem]',
        )}
      >
        <Image
          src="/images/home-band.png"
          alt=""
          fill
          priority
          className={cn('object-cover object-center')}
        />
      </AnimateOnView>
    </section>
  );
};

export default HomeSection1;
