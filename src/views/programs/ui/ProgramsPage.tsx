'use client';

import { useState } from 'react';

import { ActivityType } from '@/entities/activity';
import { cn } from '@/shared/lib';
import { CompletionMessage } from '@/shared/ui';
import { ApplicationForm } from '@/widgets/applicationSection';
import { HomeProgramSection } from '@/widgets/homeProgramSection';

interface ProgramsPageProps {
  activities: ActivityType[];
  isLoggedIn: boolean;
  application: boolean;
  userId?: number;
}

const ProgramsPage = ({ activities, isLoggedIn, application, userId }: ProgramsPageProps) => {
  const [selectedActivity, setSelectedActivity] = useState<ActivityType | null>(null);
  const [isApplicationCompleted, setIsApplicationCompleted] = useState(false);

  if (!isLoggedIn) {
    return (
      <CompletionMessage
        title="로그인이 필요한 기능입니다"
        description="학과 체험 신청은 로그인이 필요한 기능입니다. 로그인 후 이용해주세요"
      />
    );
  }

  if (application || isApplicationCompleted) {
    return (
      <CompletionMessage
        title="학과 체험 신청이 완료되었습니다  "
        description="신청한 학과 체험은 신청 조회에서 확인해주세요."
      />
    );
  }

  return (
    <div
      className={cn(
        'mx-auto flex w-155.5 flex-col gap-9 py-9 xl:h-[calc(100vh-6.25rem)] xl:w-7xl xl:flex-row xl:justify-center',
      )}
    >
      <div className={cn('flex flex-col gap-5')}>
        <div>
          <p className={cn('text-[1.5rem] font-bold', selectedActivity && 'opacity-[0.5]')}>
            학과 체험 선택
          </p>
          <p className={cn('text-[0.875rem]')}>
            신청 이후 선택한 체험을 변경할 수 없으니 신중히 선택해주세요.
          </p>
        </div>
        <HomeProgramSection
          activities={activities}
          selectedActivityId={selectedActivity?.id}
          onSelect={setSelectedActivity}
        />
      </div>
      {selectedActivity && (
        <div className={cn('flex flex-col gap-5')}>
          <div>
            <p className={cn('text-[1.5rem] font-bold')}>체험 신청자 정보 작성</p>
            <p className={cn('text-[0.875rem]')}>
              신청 이후 정보 수정이 불가하니 정보를 정확히 입력해 주세요.
            </p>
          </div>
          <ApplicationForm
            activityId={selectedActivity.id}
            userId={userId!}
            onSuccess={() => setIsApplicationCompleted(true)}
          />
        </div>
      )}
    </div>
  );
};

export default ProgramsPage;
