import { getOAuthUrl } from '@/entities/auth';

export const useLogin = () => {
  const saveReturnUrl = () => {
    sessionStorage.setItem('oauth_return_url', window.location.pathname);
  };

  const handleGoogleLogin = () => {
    saveReturnUrl();
    sessionStorage.setItem('oauth_provider', 'google');
    window.location.href = getOAuthUrl('google');
  };

  const handleKakaoLogin = () => {
    saveReturnUrl();
    sessionStorage.setItem('oauth_provider', 'kakao');
    window.location.href = getOAuthUrl('kakao');
  };

  return { handleGoogleLogin, handleKakaoLogin };
};
