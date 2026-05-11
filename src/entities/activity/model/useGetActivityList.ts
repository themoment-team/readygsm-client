import { useQuery } from '@tanstack/react-query';

import { activityUrl, get } from '@/shared/api';

import { ActivityListResponseType } from './types';

export const activityQueryKeys = {
  getActivityList: () => ['activity', 'list'] as const,
} as const;

const useGetActivityList = () =>
  useQuery({
    queryKey: activityQueryKeys.getActivityList(),
    queryFn: () => get<ActivityListResponseType>(activityUrl.getActivityList()),
  });

export default useGetActivityList;
