import { useMutation } from '@tanstack/react-query';

import { authUrl, post } from '@shared/api';

export const usePostSignOut = () =>
  useMutation({
    mutationFn: () => post<void>(authUrl.postSignOut()),
  });
