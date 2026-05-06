'use client';

import { cn } from '@/shared/lib';

import { getOAuthUrl } from '../model/oauthUrl';

const GoogleLoginButton = () => {
  const handleClick = () => {
    sessionStorage.setItem('oauth_provider', 'google');
    window.location.href = getOAuthUrl('google');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        'border-border-variant bg-pure-white text-neutral-dark hover:bg-soft-gray flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border px-6 text-sm font-semibold transition-colors',
      )}
    >
      Google로 로그인
    </button>
  );
};

export default GoogleLoginButton;
