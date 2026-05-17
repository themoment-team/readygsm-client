import { useQuery } from '@tanstack/react-query';

import { activityUrl, type ApiResponseType, get } from '@/shared/api';

import type { ActivityType } from './types';

export const activityByIdQueryKeys = {
  getActivityById: (id: number) => ['activity', 'detail', id] as const,
} as const;

const useGetActivityById = (id: number, enabled = true) =>
  useQuery({
    queryKey: activityByIdQueryKeys.getActivityById(id),
    queryFn: () => get<ApiResponseType<ActivityType>>(activityUrl.getActivityById(id)),
    select: (res) => res.data,
    enabled,
  });

export default useGetActivityById;
