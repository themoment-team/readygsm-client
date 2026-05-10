import { useMutation } from '@tanstack/react-query';

import { UserRoleType } from '@/entities/user';
import { ApiResponseType, patch, utilityUrl } from '@/shared/api';

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
