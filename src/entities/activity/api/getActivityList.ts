import { activityUrl } from '@/shared/api';
import { apiFetcher } from '@/shared/api/fetcher';

import { ActivityListResponseType } from '../model/types';

const getActivityList = async (): Promise<ActivityListResponseType | undefined> =>
  apiFetcher<ActivityListResponseType>({
    endpoint: activityUrl.getActivityList(),
    context: 'getActivityList',
    errorMessage: '학과체험 목록 조회 실패:',
    tags: ['activity-list'],
  });

export default getActivityList;
