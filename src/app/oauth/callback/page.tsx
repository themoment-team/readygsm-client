import { Suspense } from 'react';

import { OauthCallbackPage } from '@/views/oauthCallback';

// TODO: 로그인 실패 시 에러 처리 모달 추가
const OauthCallbackRoute = () => (
  <Suspense>
    <OauthCallbackPage />
  </Suspense>
);

export default OauthCallbackRoute;
