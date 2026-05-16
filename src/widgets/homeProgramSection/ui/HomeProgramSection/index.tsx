import { getActivityList } from '@/entities/activity';
import { cn } from '@/shared/lib';

import ProgramList from './ProgramList';

const HomeProgramSection = async () => {
  const result = await getActivityList();
  const activities = result?.data ?? [];

  return (
    <main
      className={cn(
        'flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-4 py-8 md:py-12',
      )}
    >
      <ProgramList programs={activities} />
    </main>
  );
};

export default HomeProgramSection;
