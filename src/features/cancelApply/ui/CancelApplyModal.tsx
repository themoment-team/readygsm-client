import { useCancelApply } from '@/features/cancelApply/model/useCancelApply';
import { Button, Modal } from '@/shared/ui';

interface CancelApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: number;
  activityId: number;
}

const CancelApplyModal = ({ isOpen, onClose, userId, activityId }: CancelApplyModalProps) => {
  const { cancelApply, isPending } = useCancelApply(userId, activityId);

  const handleConfirm = () => {
    cancelApply(undefined, { onSuccess: onClose });
  };

  return (
    <Modal isOpen={isOpen} onClose={isPending ? undefined : onClose} className="w-120 px-6 py-5">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-neutral-dark text-2xl font-semibold">학과 체험 취소</h2>
          <p className="text-secondary-slate text-sm">정말 학과 체험을 취소하시겠습니까?</p>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outlineDanger" size="sm" onClick={onClose}>
            취소
          </Button>
          <Button variant="danger" size="sm" disabled={isPending} onClick={handleConfirm}>
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CancelApplyModal;
