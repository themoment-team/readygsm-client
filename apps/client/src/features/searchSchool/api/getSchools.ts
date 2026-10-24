import { get } from '@shared/api';

import type { SchoolSearchResponseType, SchoolType } from '../model/types';

const schoolUrl = {
  getSchools: () => 'https://open.neis.go.kr/hub/schoolInfo',
} as const;

export const getSchools = async (keyword: string, signal: AbortSignal): Promise<SchoolType[]> => {
  const data = await get<SchoolSearchResponseType>(schoolUrl.getSchools(), {
    params: {
      KEY: process.env.NEXT_PUBLIC_NEIS_API_KEY,
      Type: 'json',
      SCHUL_NM: keyword,
      SCHUL_KND_SC_NM: '중학교',
    },
    signal,
    withCredentials: false,
  });

  return data.schoolInfo?.[1]?.row ?? [];
};
