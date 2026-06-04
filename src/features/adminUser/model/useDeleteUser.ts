import { useMutation } from '@tanstack/react-query';

import { del } from '@/shared/api';

//임시 URL, API 명세 보고 수정 필요

export const adminUserUrl = {
  deleteUser: (userId: number) => `/api/v1/admin/users/${userId}`,
} as const;

const useDeleteUserMutation = (userId: number) =>
  useMutation({
    mutationFn: () => del(adminUserUrl.deleteUser(userId)),
  });

export const useDeleteUser = (userId: number) => {
  const { mutate: deleteUser, isPending } = useDeleteUserMutation(userId);
  return { deleteUser, isPending };
};
