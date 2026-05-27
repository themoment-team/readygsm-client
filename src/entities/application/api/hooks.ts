import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { type ApiResponseType, applicationUrl, del, get, post } from '@/shared/api';

import type { ApplicationType, PostApplicationMutationInput } from '../model/types';

export const applicationQueryKeys = {
  getMyApplication: (userId: number) => ['application', 'my', userId] as const,
  getAllApplications: (activityId: number) =>
    ['application', 'admin', 'list', { activityId }] as const,
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

export const useGetAdminApplications = (activityId: number | null) =>
  useQuery({
    queryKey: applicationQueryKeys.getAllApplications(activityId ?? 0),
    queryFn: () =>
      get<ApiResponseType<ApplicationType[]>>(applicationUrl.getAllApplications(activityId!)),
    select: (res) => res.data,
    enabled: activityId !== null,
  });

export const useDeleteAdminApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => del<void>(applicationUrl.deleteApplication(id)),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['application', 'admin', 'list'],
      });
    },
  });
};
