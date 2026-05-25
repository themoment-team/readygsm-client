import { useMutation, useQueryClient } from '@tanstack/react-query';

import { revalidateActivityList } from '@/entities/activity/api/revalidateActivityList';
import { activityQueryKeys } from '@/entities/activity/model/useGetActivityList';
import { activityUrl, patch } from '@/shared/api';

import type { toActivityBaseReqDto } from './types';

type ActivityReqDto = ReturnType<typeof toActivityBaseReqDto>;

const usePatchActivityMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (dto: ActivityReqDto) => patch(activityUrl.patchActivity(id), dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: activityQueryKeys.getActivityList() });
      revalidateActivityList();
    },
  });
};

export const usePatchActivity = (id: number) => {
  const { mutate: patchActivity, isPending } = usePatchActivityMutation(id);
  return { patchActivity, isPending };
};
