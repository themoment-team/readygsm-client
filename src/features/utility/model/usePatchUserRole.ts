import { useMutation } from '@tanstack/react-query';

import { ApiResponseType, patch, utilityUrl } from '@/shared/api';

type UserRoleType = 'UNAUTHENTICATED' | 'USER' | 'ADMIN' | 'ROOT';

interface PatchUserRoleParamsType {
  email: string;
  role: UserRoleType;
}

const usePatchUserRoleMutation = () =>
  useMutation({
    mutationFn: ({ email, role }: PatchUserRoleParamsType) =>
      patch<ApiResponseType<string>>(utilityUrl.patchUserRole(), undefined, {
        params: { email, role },
      }),
  });

export const usePatchUserRole = () => {
  const { mutate: patchUserRole, isPending } = usePatchUserRoleMutation();
  return { patchUserRole, isPending };
};
