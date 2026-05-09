'use client';

import { useOauthCallback } from '@/features/auth';

const OauthCallbackPage = () => {
  useOauthCallback();
  return null;
};

export default OauthCallbackPage;
