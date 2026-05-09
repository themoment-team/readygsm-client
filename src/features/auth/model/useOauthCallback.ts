'use client';

import { useEffect } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';

import { getRedirectUri, type OAuthProviderType, usePostAuth } from '@/entities/auth';
import { userQueryKeys } from '@/entities/user';

export const useOauthCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();
  const { mutate: postAuth } = usePostAuth();

  useEffect(() => {
    const code = searchParams.get('code');
    const provider = sessionStorage.getItem('oauth_provider') as OAuthProviderType | null;

    if (!code || !provider) {
      router.replace('/');
      return;
    }

    postAuth(
      { provider, code, redirectUri: getRedirectUri() },
      {
        onSuccess: () => {
          sessionStorage.removeItem('oauth_provider');
          queryClient.invalidateQueries({ queryKey: userQueryKeys.getMyInfo() });
          // TODO: useGetMyInfo로 role 확인 후 ADMIN이면 router.replace('/admin')으로 분기
          router.replace('/');
        },
        onError: () => {
          sessionStorage.removeItem('oauth_provider');
          router.replace('/');
        },
      },
    );
  }, []);
};
