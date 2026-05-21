import { useMutation, useQuery } from '@tanstack/react-query';

import { type ApiResponseType, applicationUrl, get, post } from '@/shared/api';

import type { ApplicationType, PostApplicationMutationInput } from '../model/types';

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

export const usePostApplication = () =>
  useMutation({
    mutationFn: ({ userId, activityId, ...body }: PostApplicationMutationInput) =>
      post<ApiResponseType<ApplicationType>>(applicationUrl.postApplication(), body, {
        params: { userId, activityId },
      }),
  });
