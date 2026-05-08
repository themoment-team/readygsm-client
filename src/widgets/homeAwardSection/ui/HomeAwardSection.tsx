import Image from 'next/image';

import { cn } from '@/shared/lib';
import { AnimateOnView } from '@/shared/ui';

const awardGroups = [
  {
    title: '소프트웨어 분야 각종 대회 수상',
    items: ['빛가람 에너지벨리', 'SW경진대회', '교육공공데이터 분석활용대회', 'AI 프론티어 챌린지'],
    image: '/images/homeImage1.png',
  },
  {
    title: '제 59회 전국기능경기대회 은탑 수상',
    items: [
      '모바일 로보틱스 금메달',
      'IT 네트워크시스템 금메달',
      '클라우드 컴퓨팅 은메달',
      '사이버 보안 은메달',
    ],
    image: '/images/homeImage2.png',
  },
  {
    title: '제 47회 국제기능올림픽대회 (프랑스) 수상',
    items: ['모바일 로보틱스 금메달 및 은메달', '클라우드 컴퓨팅 금메달'],
    image: '/images/homeImage3.png',
  },
];

const HomeAwardSection = () => {
  return (
    <div className={cn('relative flex w-full flex-col items-center pt-90')}>
      <div className={cn('absolute top-90 right-0 -z-10 flex flex-col gap-12')}>
        {awardGroups.map((group) => (
          <AnimateOnView key={group.image}>
            <Image
              src={group.image}
              alt={group.title}
              width={459}
              height={197}
              className={cn('rounded-lg object-cover')}
            />
          </AnimateOnView>
        ))}
      </div>
      <div className={cn('flex w-7xl items-start justify-between')}>
        <h2 className={cn('text-neutral-dark shrink-0 text-4xl leading-normal font-bold')}>
          <AnimateOnView>각종 대회 수상 경력</AnimateOnView>
        </h2>
        <div className={cn('flex w-151 flex-col gap-12')}>
          {awardGroups.map((group) => (
            <div key={group.title} className={cn('flex flex-col gap-2.5')}>
              <h3 className={cn('text-brand-primary text-4xl leading-[1.2] font-bold')}>
                <AnimateOnView>{group.title}</AnimateOnView>
              </h3>
              <ul className={cn('list-disc pl-9')}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={cn('text-secondary-slate text-2xl leading-normal font-medium')}
                  >
                    <AnimateOnView>{item}</AnimateOnView>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAwardSection;
