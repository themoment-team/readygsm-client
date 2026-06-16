import { useMutation, useQueryClient } from '@tanstack/react-query';

import { activityQueryKeys, revalidateActivityList } from '@/entities/activity';
import { applicationQueryKeys } from '@/entities/application';
import { applicationUrl, del } from '@/shared/api';

export const useDeleteApplicant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => del<void>(applicationUrl.deleteApplication(id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: applicationQueryKeys.allAdminApplications() });
      queryClient.invalidateQueries({ queryKey: activityQueryKeys.getActivityList() });
      revalidateActivityList();
    },
  });
};
