import { getActivityList } from '@/entities/activity';
import {} from '@/shared/ui';
import { ApplicationForm } from '@/widgets/applicationSection';
import { HomeProgramSection } from '@/widgets/homeProgramSection';

const ProgramsPage = async () => {
  const result = await getActivityList();
  return (
    <div className="flex min-h-screen w-155.5 items-center justify-center">
      <HomeProgramSection activities={result?.data ?? []} />
      {/* <CompletionMessage
        title="학과 체험 신청이 완료되었습니다"
        description="신청한 학과 체험은 신청 조회에서 확인해주세요."
      /> */}
      <ApplicationForm />
    </div>
  );
};

export default ProgramsPage;
