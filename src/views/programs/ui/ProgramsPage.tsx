'use client';

import { useState } from 'react';

import { ActivityType } from '@/entities/activity';
import { cn } from '@/shared/lib';
import { ApplicationForm } from '@/widgets/applicationSection';
import { HomeProgramSection } from '@/widgets/homeProgramSection';

interface ProgramsPageProps {
  activities: ActivityType[];
}

const ProgramsPage = ({ activities }: ProgramsPageProps) => {
  const [selectedActivity, setSelectedActivity] = useState<ActivityType | null>(null);

  return (
    <div className={cn('mx-auto flex h-[calc(100vh-6.25rem)] w-7xl justify-center gap-9 py-9')}>
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
          <ApplicationForm activityId={selectedActivity.id} />
        </div>
      )}
    </div>
  );
};

export default ProgramsPage;
