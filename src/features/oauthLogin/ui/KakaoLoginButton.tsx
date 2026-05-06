'use client';

import { cn } from '@/shared/lib';

import { getOAuthUrl } from '../model/oauthUrl';

const KakaoLoginButton = () => {
  const handleClick = () => {
    sessionStorage.setItem('oauth_provider', 'kakao');
    window.location.href = getOAuthUrl('kakao');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        'flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-transparent bg-[#FEE500] px-6 text-sm font-semibold text-[#191919] transition-colors hover:bg-[#FEE500]/90',
      )}
    >
      카카오로 로그인
    </button>
  );
};

export default KakaoLoginButton;
