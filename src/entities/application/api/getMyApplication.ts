import { cookies } from 'next/headers';

import { type ApiResponseType, applicationUrl } from '@/shared/api';

import type { ApplicationType } from '../model/types';

const getMyApplication = async (userId: number): Promise<ApplicationType | undefined> => {
  try {
    const cookieStore = await cookies();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${applicationUrl.getMyApplication()}?userId=${userId}`,
      {
        headers: { Cookie: cookieStore.toString() },
        cache: 'no-store',
      },
    );
    if (!res.ok) return undefined;
    const json = (await res.json()) as ApiResponseType<ApplicationType>;
    return json.data;
  } catch {
    return undefined;
  }
};

export default getMyApplication;
