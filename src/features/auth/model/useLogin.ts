import { getOAuthUrl } from '@/entities/auth';

export const useLogin = () => {
  const handleGoogleLogin = () => {
    sessionStorage.setItem('oauth_provider', 'google');
    window.location.href = getOAuthUrl('google');
  };

  const handleKakaoLogin = () => {
    sessionStorage.setItem('oauth_provider', 'kakao');
    window.location.href = getOAuthUrl('kakao');
  };

  return { handleGoogleLogin, handleKakaoLogin };
};
