import { activityUrl } from '@/shared/api';
import { get } from '@/shared/api/fetcher';

import { ActivityListResponseType } from '../model/types';

const getActivityList = async (): Promise<ActivityListResponseType | undefined> =>
  get<ActivityListResponseType>(activityUrl.getActivityList());

export default getActivityList;
