import { cookies, headers } from 'next/headers';

import { type ApiResponseType, userUrl } from '@/shared/api';

import type { UserType } from '../model/types';

const getMyInfo = async (): Promise<UserType | undefined> => {
  try {
    const cookieStore = await cookies();
    const headerStore = await headers();
    const host = headerStore.get('host');
    const proto = headerStore.get('x-forwarded-proto') ?? 'http';
    const res = await fetch(`${proto}://${host}/api${userUrl.getMyInfo()}`, {
      headers: { Cookie: cookieStore.toString() },
      cache: 'no-store',
    });
    if (!res.ok) return undefined;
    const json = (await res.json()) as ApiResponseType<UserType>;
    return json.data;
  } catch {
    return undefined;
  }
};

export default getMyInfo;
