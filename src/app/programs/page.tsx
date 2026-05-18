import { getActivityList } from '@/entities/activity';
import { ProgramsPage } from '@/views/programs';

const Programs = async () => {
  const result = await getActivityList();

  return <ProgramsPage activities={result?.data ?? []} />;
};

export default Programs;
