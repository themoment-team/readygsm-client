'use client';

import { useState } from 'react';

import { cn } from '@/shared/lib';
import { ApplicantManagementTable } from '@/widgets/applicantManagement';
import { ApplicantManagementSidebar } from '@/widgets/applicantManagementSidebar';

const ApplicantManagementPage = () => {
  const [selectedActivityId, setSelectedActivityId] = useState<number | null>(null);

  return (
    <div className={cn('flex min-h-screen w-full px-[3rem]')}>
      {/* 사이드바 */}
      <aside className={cn('w-55 shrink-0 px-4 py-10')}>
        <ApplicantManagementSidebar
          selectedActivityId={selectedActivityId}
          onSelectActivity={setSelectedActivityId}
        />
      </aside>

      {/* 본문 */}
      <main className={cn('flex max-w-[80rem] flex-1 flex-col p-8')}>
        <ApplicantManagementTable activityId={selectedActivityId} />
      </main>
    </div>
  );
};

export default ApplicantManagementPage;
