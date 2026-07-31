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
          'bg-pure-white relative z-10 -mt-45 flex flex-col gap-60 rounded-t-[1.5rem] px-20 pt-20 pb-[10.6875rem]',
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
