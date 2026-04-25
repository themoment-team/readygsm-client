import { getTeamMembers } from '@/entities/teamMember';
import { cn } from '@/shared/lib';

import TeamSection1 from './TeamSection1';
import TeamSection2 from './TeamSection2';
import TeamSection3 from './TeamSection3';
import TeamSection4 from './TeamSection4';

const IntroduceTeamPage = async () => {
  const members = await getTeamMembers();

  return (
    <main className={cn('flex flex-col')}>
      <TeamSection1 />
      <TeamSection2 />
      <TeamSection3 />
      <TeamSection4 data={members} />
    </main>
  );
};

export default IntroduceTeamPage;
