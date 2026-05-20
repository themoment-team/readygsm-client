import { getActivityList } from '@/entities/activity';
import { getMyApplication } from '@/entities/application';
import { getMyInfo } from '@/entities/user';
import { ProgramsPage } from '@/views/programs';

const Programs = async () => {
  const result = await getActivityList();
  const user = await getMyInfo();
  const isLoggedIn = !!user && user.role !== 'UNAUTHENTICATED';

  const application = isLoggedIn ? await getMyApplication(user.id) : undefined;

  return (
    <ProgramsPage
      activities={result?.data ?? []}
      isLoggedIn={isLoggedIn}
      application={!!application}
    />
  );
};

export default Programs;
