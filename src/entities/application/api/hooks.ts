import { useQuery } from '@tanstack/react-query';

import { type ApiResponseType, applicationUrl, get } from '@/shared/api';

import type { ApplicationType } from '../model/types';

export const applicationQueryKeys = {
  getMyApplication: (userId: number) => ['application', 'my', userId] as const,
} as const;

export const useGetMyApplication = (userId: number, enabled = true) =>
  useQuery({
    queryKey: applicationQueryKeys.getMyApplication(userId),
    queryFn: () =>
      get<ApiResponseType<ApplicationType>>(applicationUrl.getMyApplication(), {
        params: { userId },
      }),
    select: (res) => res.data,
    retry: false,
    enabled,
  });
