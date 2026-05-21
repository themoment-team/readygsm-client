import { getActivityList } from '@/entities/activity';
import getMyApplication from '@/entities/application/api/getMyApplication';
import getMyInfo from '@/entities/user/api/getMyInfo';
import { ProgramsPage } from '@/views/programs';

const Programs = async () => {
  const [result, user] = await Promise.all([getActivityList(), getMyInfo()]);
  const isLoggedIn = !!user && user.role !== 'UNAUTHENTICATED';

  const application = isLoggedIn ? await getMyApplication(user.id) : undefined;

  return (
    <ProgramsPage
      activities={result?.data ?? []}
      isLoggedIn={isLoggedIn}
      application={!!application}
      userId={user?.id}
    />
  );
};

export default Programs;
