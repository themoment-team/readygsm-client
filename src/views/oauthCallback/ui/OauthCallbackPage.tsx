'use client';

import { useOauthCallback } from '@/features/oauthLogin';

const OauthCallbackPage = () => {
  useOauthCallback();
  return null;
};

export default OauthCallbackPage;
