import { useMutation, useQueryClient } from '@tanstack/react-query';

import { activityQueryKeys, revalidateActivityList } from '@/entities/activity';
import { del } from '@/shared/api';

export const cancelApplyUrl = {
  deleteApply: () => '/v1/application/cancel',
} as const;

const useDeleteApply = (userId: number, activityId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => del(cancelApplyUrl.deleteApply(), { params: { userId, activityId } }),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: activityQueryKeys.getActivityList() });
      await revalidateActivityList();
    },
  });
};

export const useCancelApply = (userId: number, activityId: number) => {
  const { mutate: cancelApply, isPending } = useDeleteApply(userId, activityId);
  return { cancelApply, isPending };
};
