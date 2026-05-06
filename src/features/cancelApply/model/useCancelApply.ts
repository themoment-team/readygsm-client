import { useMutation } from '@tanstack/react-query';

import { del } from '@/shared/api';

//임시 URL, API 명세 보고 수정 필요
export const cancelApplyUrl = {
  deleteApply: (applicationId: number) => `/api/v1/apply/${applicationId}`,
} as const;

const useDeleteApply = (applicationId: number) =>
  useMutation({
    mutationFn: () => del(cancelApplyUrl.deleteApply(applicationId)),
  });

export const useCancelApply = (applicationId: number) => {
  const { mutate: cancelApply, isPending } = useDeleteApply(applicationId);
  return { cancelApply, isPending };
};
