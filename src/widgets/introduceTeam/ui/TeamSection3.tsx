import { cn } from '@/shared/lib';

const Elements = [
  {
    description: (
      <>
        사용자의 니즈를 고민하고 모든 일에 <br />
        높은 비즈니스 임팩트를 창출해요 🚀
      </>
    ),
  },
  {
    description: (
      <>
        사용자의 순간을 한층 더 혁신하는데 <br />
        최적의 장소 ⛳️
      </>
    ),
  },
  {
    description: (
      <>
        사용자의 순간을 깊이 통찰하고, <br />
        순간의 가치를 비춰내요 🌟
      </>
    ),
  },
] as const;

const TeamSection3 = () => {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center gap-20 bg-[#F3F6FF] py-60 sm:gap-30 md:items-start',
      )}
    >
      <h1
        className={cn(
          'fhd:px-[20rem] uhd:px-[22.5rem] px-0 text-center text-5xl leading-[3.85rem] font-bold text-[#473B6B] sm:px-15 md:px-32 md:text-left xl:px-50',
        )}
      >
        <span className={cn('text-[#7C58E9]')}>더모먼트팀</span>은
        <br />
        아래의 비전을 가지고 활동해요.
      </h1>
      <div className={cn('flex w-full justify-center')}>
        <div className={cn('flex w-full flex-wrap justify-center gap-4')}>
          {Elements.map((element, index) => (
            <div
              key={index}
              className={cn(
                'justify-left flex h-fit w-119 rounded-2xl bg-white px-8 py-8 shadow-lg sm:h-50',
              )}
            >
              <div className={cn('text-left text-[1.75rem] leading-10 font-bold')}>
                {element.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection3;
