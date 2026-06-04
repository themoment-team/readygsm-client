import { getActivityList } from '@/entities/activity';
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
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <HomeSection1 start={start} end={end} />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
    </div>
  );
};

export default HomePage;
