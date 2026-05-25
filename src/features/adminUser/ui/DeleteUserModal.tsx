'use client';

import { useDeleteUser } from '@/features/adminUser/model/useDeleteUser';
import { ConfirmModal } from '@/shared/ui';

interface DeleteUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: number;
}

const DeleteUserModal = ({ isOpen, onClose, userId }: DeleteUserModalProps) => {
  const { deleteUser, isPending } = useDeleteUser(userId);

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={() => deleteUser(undefined, { onSuccess: onClose })}
      title="신청자 정보 삭제"
      description="정말 신청자 정보를 삭제하시겠습니까?"
      isPending={isPending}
    />
  );
};

export default DeleteUserModal;
