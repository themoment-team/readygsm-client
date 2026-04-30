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
        'flex',
        'flex-col',
        'items-center',
        'md:items-start',
        'w-full',
        'bg-[#F3F6FF]',
        'py-60',
        'sm:gap-30',
        'gap-20',
      )}
    >
      <h1
        className={cn(
          'text-[#473B6B]',
          'text-5xl',
          'font-bold',
          'px-0',
          'sm:px-15',
          'md:px-32',
          'xl:px-50',
          'fhd:px-[20rem]',
          'uhd:px-[22.5rem]',
          'text-center',
          'md:text-left',
          'leading-[3.85rem]',
        )}
      >
        <span className={cn('text-[#7C58E9]')}>더모먼트팀</span>은
        <br />
        아래의 비전을 가지고 활동해요.
      </h1>
      <div className={cn('flex', 'w-full', 'justify-center')}>
        <div className={cn('flex', 'w-full', 'justify-center', 'flex-wrap', 'gap-4')}>
          {Elements.map((element, index) => (
            <div
              key={index}
              className={cn(
                'flex',
                'justify-left',
                'w-119',
                'sm:h-50',
                'h-fit',
                'rounded-2xl',
                'bg-white',
                'shadow-lg',
                'px-8',
                'py-8',
              )}
            >
              <div className={cn('text-[1.75rem]', 'leading-10', 'font-bold', 'text-left')}>
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
