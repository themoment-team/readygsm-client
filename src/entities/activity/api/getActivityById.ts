import { activityUrl, type ApiResponseType } from '@/shared/api';

import type { ActivityType } from '../model/types';

const getActivityById = async (id: number): Promise<ActivityType | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${activityUrl.getActivityById(id)}`,
      { cache: 'no-store' },
    );
    if (!res.ok) return undefined;
    const json = (await res.json()) as ApiResponseType<ActivityType>;
    return json.data;
  } catch {
    return undefined;
  }
};

export default getActivityById;
