import { cookies, headers } from 'next/headers';

import { type ApiResponseType, applicationUrl } from '@/shared/api';

import type { ApplicationType } from '../model/types';

const getMyApplication = async (userId: number): Promise<ApplicationType | undefined> => {
  try {
    const cookieStore = await cookies();
    const headerStore = await headers();
    const host = headerStore.get('host');
    const proto = headerStore.get('x-forwarded-proto') ?? 'http';
    const res = await fetch(
      `${proto}://${host}/api${applicationUrl.getMyApplication()}?userId=${userId}`,
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
