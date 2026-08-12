import { useMutation, useQueryClient } from '@tanstack/react-query';

import { activityUrl, del } from '@shared/api';
import { revalidateActivityList } from '@shared/entities/activity/api/revalidateActivityList';
import { activityQueryKeys } from '@shared/entities/activity/model/useGetActivityList';

const useDeleteActivityMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => del(activityUrl.deleteActivity(id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: activityQueryKeys.getActivityList() });
      revalidateActivityList();
    },
  });
};

export const useDeleteActivity = (id: number) => {
  const { mutate: deleteActivity, isPending } = useDeleteActivityMutation(id);
  return { deleteActivity, isPending };
};
