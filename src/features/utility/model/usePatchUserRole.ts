import { useMutation } from '@tanstack/react-query';

import { patch, utilityUrl } from '@/shared/api';

import type { UserRoleFormType } from './types';

const usePatchUserRoleMutation = () =>
  useMutation({
    mutationFn: (dto: UserRoleFormType) => patch(utilityUrl.patchUserRole(), dto),
  });

export const usePatchUserRole = () => {
  const { mutate: patchUserRole, isPending } = usePatchUserRoleMutation();
  return { patchUserRole, isPending };
};
