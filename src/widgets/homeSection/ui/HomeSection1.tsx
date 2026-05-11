'use client';

import Image from 'next/image';

import { BottomArrow, GSMTitle } from '@/shared/assets';
import { cn, scrollToElement } from '@/shared/lib';
import { AnimateOnView } from '@/shared/ui';

const KO_DAYS = ['일', '월', '화', '수', '목', '금', '토'] as const;

const formatKoreanPeriod = (start: string, end: string): string => {
  const s = new Date(start);
  const e = new Date(end);

  const formatDateTime = (d: Date) => {
    const h = d.getHours();
    const period = h < 12 ? '오전' : '오후';
    const hour = h % 12 === 0 ? 12 : h % 12;
    return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}. (${KO_DAYS[d.getDay()]}) ${period} ${hour}시`;
  };

  return `학과 체험 접수 기간 : ${formatDateTime(s)} ~ ${formatDateTime(e)}`;
};

interface HomeSection1Props {
  start?: string;
  end?: string;
}

const HomeSection1 = ({ start, end }: HomeSection1Props) => {
  const activityPeriod =
    start && end
      ? formatKoreanPeriod(start, end)
      : '학과 체험 접수 기간 : 접수 기간 정보가 없습니다.';

  const scrollToSection2 = () => {
    scrollToElement('#homeSection2');
  };
  return (
    <section
      className={cn(
        'bg-neutral-dark relative flex h-[calc(100vh-6.25rem)] w-full flex-col items-center overflow-hidden pt-16',
      )}
    >
      <div className={cn('absolute inset-0')}>
        <Image
          src="/images/themoment.jpg"
          alt=""
          fill
          priority
          className={cn('object-cover object-center')}
        />
        <div
          className={cn('absolute inset-0 backdrop-blur-[6.35px]')}
          style={{
            backgroundImage: `
              linear-gradient(90deg, #292b2f 0%, transparent 17.788%, transparent 81.25%, #292b2f 100%),
              linear-gradient(180deg, transparent 0%, rgba(41, 43, 47, 0.745) 60.577%, #292b2f 100%)
            `,
          }}
        />
      </div>
      <div className={cn('relative z-10 flex w-7xl flex-1 flex-col justify-between text-white')}>
        <AnimateOnView>
          <GSMTitle />
        </AnimateOnView>
        <div className={cn('flex flex-col gap-[7.12rem] text-xl leading-[1.4]')}>
          <AnimateOnView className="flex flex-col gap-4">
            <AnimateOnView delay={200}>
              <p className={cn('text-5xl leading-normal font-bold')}>
                <p>단순한 개발자를 넘어</p>
                <p>
                  세상을 바꾸는 <span className={cn('text-brand-primary')}>마이스터(Meister)</span>
                  의 길
                </p>
              </p>
            </AnimateOnView>
            <p>{activityPeriod}</p>
          </AnimateOnView>
          <AnimateOnView>
            <button
              onClick={scrollToSection2}
              className={cn('relative z-10 mb-12 flex cursor-pointer items-center gap-[0.88rem]')}
            >
              <p className={cn('text-center')}>스크롤 해서 더 알아보기</p>
              <div className={cn('animate-bounce')}>
                <BottomArrow />
              </div>
            </button>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;
