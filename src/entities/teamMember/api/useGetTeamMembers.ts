import { useQuery } from '@tanstack/react-query';

import { get } from '@/shared/api';

import { MemberType } from '../model/types';

export const teamMemberQueryKeys = {
  getAll: () => ['teamMembers', 'list'] as const,
} as const;

export const useGetTeamMembers = () => {
  return useQuery({
    queryKey: teamMemberQueryKeys.getAll(),
    queryFn: async () => {
      const data = await get<MemberType[]>('/members');
      return data;
    },
  });
};
