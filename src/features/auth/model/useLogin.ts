export const authUrl = {
  kakaoLogin: () => `/api/v1/auth/kakao`,
  googleLogin: () => `/api/v1/auth/google`,
} as const;

//임시 URL, API 명세 보고 수정 필요
export const useLogin = () => {
  const handleKakaoLogin = () => {
    window.location.href = authUrl.kakaoLogin();
  };

  const handleGoogleLogin = () => {
    window.location.href = authUrl.googleLogin();
  };

  return { handleKakaoLogin, handleGoogleLogin };
};
