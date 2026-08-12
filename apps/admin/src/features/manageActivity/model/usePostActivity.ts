import { useMutation, useQueryClient } from '@tanstack/react-query';

import { activityUrl, post } from '@shared/api';
import { revalidateActivityList } from '@shared/entities/activity/api/revalidateActivityList';
import { activityQueryKeys } from '@shared/entities/activity/model/useGetActivityList';

import type { toActivityFirstCreateReqDto, toActivityWithRegistrationReqDto } from './types';

type ActivityReqDto =
  | ReturnType<typeof toActivityFirstCreateReqDto>
  | ReturnType<typeof toActivityWithRegistrationReqDto>;

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
