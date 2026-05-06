import { useDeleteUser } from '@/features/adminUser/model/useDeleteUser';
import { Button, Modal } from '@/shared/ui';

interface DeleteUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: number;
}

const DeleteUserModal = ({ isOpen, onClose, userId }: DeleteUserModalProps) => {
  const { deleteUser, isPending } = useDeleteUser(userId);

  const handleConfirm = () => {
    deleteUser(undefined, { onSuccess: onClose });
  };

  return (
    <Modal isOpen={isOpen} onClose={isPending ? undefined : onClose} className="w-120 px-6 py-5">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-neutral-dark text-2xl font-semibold">신청자 정보 삭제</h2>
          <p className="text-secondary-slate text-sm">정말 신청자 정보를 삭제하시겠습니까?</p>
        </div>
        <div className="flex justify-end gap-4">
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

export default DeleteUserModal;
