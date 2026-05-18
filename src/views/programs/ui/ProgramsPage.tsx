import { getActivityList } from '@/entities/activity';
import { ApplicationForm } from '@/widgets/applicationSection';
import { HomeProgramSection } from '@/widgets/homeProgramSection';

const ProgramsPage = async () => {
  const result = await getActivityList();
  return (
    <div className="mx-auto flex h-[calc(100vh-6.25rem)] w-7xl justify-center gap-9 py-9">
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-[1.5rem] font-bold">학과 체험 선택</p>
          <p className="text-[0.875rem]">
            신청 이후 선택한 체험을 변경할 수 없으니 신중히 선택해주세요.
          </p>
        </div>
        <HomeProgramSection activities={result?.data ?? []} />
      </div>
      {/* <CompletionMessage
        title="학과 체험 신청이 완료되었습니다"
        description="신청한 학과 체험은 신청 조회에서 확인해주세요."
      /> */}
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-[1.5rem] font-bold">체험 신청자 정보 작성</p>
          <p className="text-[0.875rem]">
            신청 이후 정보 수정이 불가하니 정보를 정확히 입력해 주세요.
          </p>
        </div>
        <ApplicationForm />
      </div>
    </div>
  );
};

export default ProgramsPage;
