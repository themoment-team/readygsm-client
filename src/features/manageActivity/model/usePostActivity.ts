import { useMutation, useQueryClient } from '@tanstack/react-query';

import { revalidateActivityList } from '@/entities/activity/api/revalidateActivityList';
import { activityQueryKeys } from '@/entities/activity/model/useGetActivityList';
import { activityUrl, post } from '@/shared/api';

import type { toActivityBaseReqDto, toActivityFirstCreateReqDto } from './types';

type ActivityReqDto =
  | ReturnType<typeof toActivityFirstCreateReqDto>
  | ReturnType<typeof toActivityBaseReqDto>;

const usePostActivityMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (dto: ActivityReqDto) => post(activityUrl.postActivity(), dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: activityQueryKeys.getActivityList() });
      revalidateActivityList();
    },
  });
};

export const usePostActivity = () => {
  const { mutate: postActivity, isPending } = usePostActivityMutation();
  return { postActivity, isPending };
};
