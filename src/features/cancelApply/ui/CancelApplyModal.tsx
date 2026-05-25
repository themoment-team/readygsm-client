'use client';

import { useCancelApply } from '@/features/cancelApply/model/useCancelApply';
import { ConfirmModal } from '@/shared/ui';

interface CancelApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: number;
  activityId: number;
}

const CancelApplyModal = ({ isOpen, onClose, userId, activityId }: CancelApplyModalProps) => {
  const { cancelApply, isPending } = useCancelApply(userId, activityId);

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={() => cancelApply(undefined, { onSuccess: onClose })}
      title="학과 체험 취소"
      description="정말 학과 체험을 취소하시겠습니까?"
      isPending={isPending}
    />
  );
};

export default CancelApplyModal;
