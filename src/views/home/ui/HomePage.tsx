import { getActivityList } from '@/entities/activity';
import { cn } from '@/shared/lib';
import {
  HomeSection1,
  HomeSection2,
  HomeSection3,
  HomeSection4,
  HomeSection5,
} from '@/widgets/homeSection';

const HomePage = async () => {
  const result = await getActivityList();
  const activities = result?.data ?? [];

  const start = activities[0]?.registrationStartAt;
  const end = activities[activities.length - 1]?.registrationEndAt;

  return (
    <div className={cn('mx-auto flex w-full max-w-480 flex-col')}>
      <HomeSection1 start={start} end={end} />
      <div
        className={cn(
          'bg-pure-white relative z-10 flex flex-col rounded-t-[1.5rem]',
          '-mt-86 gap-20 px-4 pt-4 pb-25',
          'lg:-mt-[22.9375rem] lg:gap-60 lg:px-9 lg:pt-[2.4375rem] lg:pb-[10.6875rem]',
          'xl:-mt-45 xl:px-20 xl:pt-20',
        )}
      >
        <div className={cn('flex flex-col gap-20')}>
          <HomeSection2 />
          <HomeSection3 />
          <HomeSection4 />
        </div>
        <HomeSection5 />
      </div>
    </div>
  );
};

export default HomePage;
