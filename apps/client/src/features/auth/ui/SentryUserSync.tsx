'use client';

import { useEffect } from 'react';

import * as Sentry from '@sentry/nextjs';

import { useGetMyInfo } from '@shared/entities/user';

/**
 * 로그인 상태를 Sentry 세션에 반영해 crash-free users 지표가 집계되게 한다.
 * 로그인 직후뿐 아니라 새로고침으로 세션이 복원될 때도 적용되도록 내 정보 쿼리를 따른다.
 * 개인정보 보호를 위해 내부 ID만 전달한다.
 */
const SentryUserSync = () => {
  const { data: user } = useGetMyInfo();
  const userId = user?.id;

  useEffect(() => {
    Sentry.setUser(userId === undefined ? null : { id: userId });
  }, [userId]);

  return null;
};

export default SentryUserSync;
