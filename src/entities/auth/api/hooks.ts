import { useMutation } from '@tanstack/react-query';

import { post } from '@/shared/api';

import type { OAuthProviderType, PostAuthBodyType } from '../model/types';

export const authUrl = {
  postAuth: (provider: OAuthProviderType) => `/v1/auth/${provider}`,
} as const;

export const usePostAuth = () =>
  useMutation({
    mutationFn: ({ provider, ...body }: PostAuthBodyType & { provider: OAuthProviderType }) =>
      post<void>(authUrl.postAuth(provider), body),
  });
