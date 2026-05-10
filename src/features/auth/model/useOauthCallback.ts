'use client';

import { useEffect, useRef } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';

import { getRedirectUri, type OAuthProviderType, usePostAuth } from '@/entities/auth';
import { userQueryKeys, type UserType } from '@/entities/user';
import { type ApiResponseType, get, userUrl } from '@/shared/api';

export const useOauthCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();
  const { mutate: postAuth } = usePostAuth();
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    const code = searchParams.get('code');
    const provider = sessionStorage.getItem('oauth_provider') as OAuthProviderType | null;

    if (!code || !provider) {
      router.replace('/');
      return;
    }

    postAuth(
      { provider, code, redirectUri: getRedirectUri() },
      {
        onSuccess: async () => {
          sessionStorage.removeItem('oauth_provider');

          const response = await queryClient.fetchQuery({
            queryKey: userQueryKeys.getMyInfo(),
            queryFn: () => get<ApiResponseType<UserType>>(userUrl.getMyInfo()),
          });

          const isAdminRole = response.data.role === 'ADMIN' || response.data.role === 'ROOT';
          router.replace(isAdminRole ? '/admin' : '/');
        },
        onError: () => {
          sessionStorage.removeItem('oauth_provider');
          router.replace('/');
        },
      },
    );
  }, []);
};
