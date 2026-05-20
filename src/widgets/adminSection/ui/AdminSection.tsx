'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Plus } from 'lucide-react';

import { ActivityCard, type ActivityType } from '@/entities/activity';
import { DeleteActivityModal } from '@/features/manageActivity';
import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui';

interface AdminSectionProps {
  activities: ActivityType[];
}

const AdminSection = ({ activities }: AdminSectionProps) => {
  const router = useRouter();
  const [deleteTarget, setDeleteTarget] = useState<ActivityType | null>(null);

  return (
    <main
      className={cn(
        'flex min-h-[calc(100vh-6.25rem-11.3125rem)] flex-col items-center bg-white px-4 py-12',
      )}
    >
      <div className={cn('flex w-full max-w-155.5 flex-col gap-6')}>
        <h1 className={cn('text-neutral-dark text-[1.5rem] font-semibold')}>학과 체험 추가</h1>

        <div className={cn('flex flex-col gap-4')}>
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              className={cn('min-h-44 hover:border-[#7C91A9]')}
              actions={
                <>
                  <Button
                    variant="outlineDanger"
                    size="sm"
                    onClick={() => setDeleteTarget(activity)}
                  >
                    학과 체험 삭제
                  </Button>
                  <Button
                    variant="outlinePrimary"
                    size="sm"
                    onClick={() => router.push(`/admin/form/${activity.id}`)}
                  >
                    학과 체험 수정
                  </Button>
                </>
              }
            />
          ))}

          <button
            type="button"
            onClick={() => router.push('/admin/form')}
            className={cn(
              'border-border-variant flex min-h-44 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border bg-white px-6 py-5 transition-colors duration-200 hover:border-[#7C91A9] hover:bg-[#EFF4FF]',
            )}
          >
            <p className={cn('text-secondary-slate text-sm')}>프로젝트 등록</p>
            <Plus className={cn('text-secondary-slate size-6')} />
          </button>
        </div>
      </div>

      {deleteTarget && (
        <DeleteActivityModal
          isOpen={!!deleteTarget}
          onClose={() => setDeleteTarget(null)}
          activity={deleteTarget}
        />
      )}
    </main>
  );
};

export default AdminSection;
