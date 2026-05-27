'use client';

import { useState } from 'react';

import { useGetActivityList } from '@/entities/activity';
import { cn } from '@/shared/lib';
import { ApplicantManagementTable } from '@/widgets/applicantManagement';
import { ApplicantManagementSidebar } from '@/widgets/applicantManagementSidebar';

const ApplicantManagementPage = () => {
  const [selectedActivityId, setSelectedActivityId] = useState<number | null>(null);
  const { data: activityList } = useGetActivityList();

  const activities = activityList?.data ?? [];
  const minId = activities.length > 0 ? Math.min(...activities.map((a) => a.id)) : null;
  const effectiveActivityId = selectedActivityId ?? minId;

  return (
    <div className={cn('flex min-h-screen w-full px-[3rem]')}>
      {/* 사이드바 */}
      <aside className={cn('w-55 shrink-0 px-4 py-10')}>
        <ApplicantManagementSidebar
          selectedActivityId={effectiveActivityId}
          onSelectActivity={setSelectedActivityId}
        />
      </aside>

      {/* 본문 */}
      <main className={cn('flex max-w-7xl flex-1 flex-col p-8')}>
        <ApplicantManagementTable activityId={effectiveActivityId} />
      </main>
    </div>
  );
};

export default ApplicantManagementPage;
