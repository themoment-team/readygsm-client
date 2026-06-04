'use client';

import { useOauthCallback } from '@/features/auth';
import { cn } from '@/shared/lib';

const OauthCallbackPage = () => {
  useOauthCallback();

  return (
    <div className={cn('flex h-screen flex-col items-center justify-center gap-5')}>
      <div
        className={cn(
          'border-brand-primary h-10 w-10 animate-spin rounded-full border-4 border-t-transparent',
        )}
      />
      <p className={cn('text-neutral-dark text-base font-medium')}>로그인 처리 중입니다..</p>
    </div>
  );
};

export default OauthCallbackPage;
