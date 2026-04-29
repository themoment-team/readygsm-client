import { getTeamMembers } from '@/entities/teamMember';
import { cn } from '@/shared/lib';
import { TeamSection1, TeamSection2, TeamSection3, TeamSection4 } from '@/widgets/introduceTeam';

const IntroducePage = async () => {
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

export default IntroducePage;
