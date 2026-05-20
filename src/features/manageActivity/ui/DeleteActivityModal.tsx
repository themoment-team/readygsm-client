'use client';

import { useRouter } from 'next/navigation';

import type { ActivityType } from '@/entities/activity';
import { cn } from '@/shared/lib';
import { ConfirmModal } from '@/shared/ui';

import { useDeleteActivity } from '../model/useDeleteActivity';

interface DeleteActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: ActivityType;
}

const DeleteActivityModal = ({ isOpen, onClose, activity }: DeleteActivityModalProps) => {
  const router = useRouter();
  const { deleteActivity, isPending } = useDeleteActivity(activity.id);

  const handleConfirm = () => {
    deleteActivity(undefined, {
      onSuccess: () => {
        onClose();
        router.refresh();
      },
    });
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
      title="학과 체험 삭제"
      description={
        <>
          <span className={cn('font-medium')}>{activity.name}</span>을(를) 삭제하시겠습니까?
        </>
      }
      confirmText="삭제"
      cancelVariant="outlinePrimary"
      isPending={isPending}
    />
  );
};

export default DeleteActivityModal;
