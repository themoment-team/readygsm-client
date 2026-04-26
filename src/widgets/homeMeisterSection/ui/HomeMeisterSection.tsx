import Image from 'next/image';

import ChevronDoubleDownIcon from '@/shared/assets/ChevronDoubleDownIcon';
import GSMTitle from '@/shared/assets/GSMTitle';

const HomeMeisterSection = () => {
  return (
    <section className="bg-neutral-dark relative flex h-[calc(100vh-6.25rem)] w-full flex-col items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <Image
          src="/images/themoment.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 backdrop-blur-[6.35px]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #292b2f 0%, transparent 17.788%, transparent 81.25%, #292b2f 100%),
              linear-gradient(180deg, transparent 0%, rgba(41, 43, 47, 0.745) 60.577%, #292b2f 100%)
            `,
          }}
        />
      </div>
      <div className="relative z-10 flex w-7xl flex-1 flex-col gap-[22.62rem] text-white">
        <GSMTitle />
        <div className="flex flex-col gap-[7.12rem] text-xl leading-[1.4]">
          <div className="flex flex-col gap-4">
            <div className="text-5xl leading-normal font-bold">
              <p>단순한 개발자를 넘어</p>
              <p>
                세상을 바꾸는 <span className="text-brand-primary">마이스터(Meister)</span>의 길
              </p>
            </div>
            <p>학과 체험 접수 기간 : 2024. 7. 14 (화) ~ 2024. 7. 28 (화), 오전 9시 ~ 오후 4시</p>
          </div>
          <div className="relative z-10 mb-12 flex items-center gap-[0.88rem]">
            <p className="text-center">스크롤 해서 더 알아보기</p>
            <ChevronDoubleDownIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMeisterSection;
