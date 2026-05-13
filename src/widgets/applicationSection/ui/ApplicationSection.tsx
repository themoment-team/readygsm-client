'use client';

import { useState } from 'react';

import { useGetActivityById } from '@/entities/activity';
import { useGetMyApplication } from '@/entities/application';
import { ProgramCard } from '@/entities/program';
import { useGetMyInfo } from '@/entities/user';
import { CancelApplyModal } from '@/features/cancelApply';
import { Button } from '@/shared/ui';

const ApplicationSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: user, isLoading: isUserLoading } = useGetMyInfo();
  const isLoggedIn = !!user && user.role !== 'UNAUTHENTICATED';
  const { data: application, isLoading: isApplicationLoading } = useGetMyApplication(
    user?.id ?? 0,
    isLoggedIn,
  );
  const { data: activity, isLoading: isActivityLoading } = useGetActivityById(
    application?.activityId ?? 0,
    !!application,
  );

  if (isUserLoading || isApplicationLoading || isActivityLoading) return null;

  if (!user || user.role === 'UNAUTHENTICATED') {
    return (
      <main className="flex min-h-[calc(100vh-6.25rem-11.3125rem)] flex-col items-center justify-center gap-2 bg-white">
        <h1 className="text-brand-primary text-[3rem] font-bold">로그인이 필요한 기능입니다</h1>
        <p className="text-secondary-slate text-[1.5rem]">
          학과 체험 신청 조회는 로그인이 필요한 기능입니다. 로그인 후 이용해주세요
        </p>
      </main>
    );
  }

  if (!application) {
    return (
      <main className="flex min-h-[calc(100vh-6.25rem-11.3125rem)] flex-col items-center justify-center gap-2 bg-white">
        <h1 className="text-brand-primary text-[3rem] font-bold">
          학과 체험을 아직 신청하지 않았습니다
        </h1>
        <p className="text-secondary-slate text-[1.5rem]">
          학과 체험을 아직 신청하지 않은 상태입니다. 학과 체험을 신청하거나 로그인된 계정을
          확인해주세요.
        </p>
      </main>
    );
  }

  return (
    <main className="flex min-h-[calc(100vh-6.25rem-11.3125rem)] flex-col items-center bg-white px-4 py-12">
      <div className="flex w-full max-w-155.5 flex-col gap-9">
        {activity && (
          <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-neutral-dark text-[1.5rem] font-semibold">
                신청한 학과 체험 정보
              </h1>
              <p className="text-secondary-slate text-[0.875rem]">
                로그인된 계정으로 신청된 학과 체험을 확인할 수 있습니다.
              </p>
            </div>
            <ProgramCard
              title={activity.name}
              content={[activity.description]}
              date={activity.activityDate}
              personnel={activity.maxApplicant}
              disableHover
            />
          </section>
        )}

        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-neutral-dark text-[1.5rem] font-semibold">신청자 정보</h1>
            <p className="text-secondary-slate text-[0.875rem]">
              학과 체험을 신청한 사람의 정보를 불러옵니다.
            </p>
          </div>
          <div className="border-border-variant w-full rounded-lg border bg-white px-6 py-5">
            <div className="grid grid-cols-2 gap-4">
              <dl className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <dt className="text-secondary-slate w-14 shrink-0 text-sm">이름</dt>
                  <dd className="text-neutral-dark text-sm font-medium">{application.name}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-secondary-slate w-14 shrink-0 text-sm">학번</dt>
                  <dd className="text-neutral-dark text-sm font-medium">
                    {application.grade}학년 {application.classNumber}반{' '}
                    {String(application.number).padStart(2, '0')}번
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-secondary-slate w-14 shrink-0 text-sm">학교명</dt>
                  <dd className="text-neutral-dark text-sm font-medium">
                    {application.schoolName}
                  </dd>
                </div>
              </dl>
              <dl className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <dt className="text-secondary-slate w-24 shrink-0 text-sm">전화번호</dt>
                  <dd className="text-neutral-dark text-sm font-medium">
                    {application.phoneNumber}
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-secondary-slate w-24 shrink-0 text-sm">보호자 전화번호</dt>
                  <dd className="text-neutral-dark text-sm font-medium">
                    {application.familyPhoneNumber}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <Button variant="outlineDanger" size="full" onClick={() => setIsModalOpen(true)}>
          학과 체험 취소
        </Button>
      </div>

      <CancelApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userId={application.userId}
        activityId={application.activityId}
      />
    </main>
  );
};

export default ApplicationSection;
