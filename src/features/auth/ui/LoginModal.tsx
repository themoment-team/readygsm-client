import GoogleIcon from '@/shared/assets/GoogleIcon';
import KakaoIcon from '@/shared/assets/KakaoIcon';
import { Modal } from '@/shared/ui';

import { useLogin } from '../model/useLogin';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const { handleKakaoLogin, handleGoogleLogin } = useLogin();

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="p-6">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-neutral-dark text-2xl font-semibold tracking-[-0.144px]">로그인</h2>
        <div className="flex flex-col gap-3">
          <button
            className="flex w-75 cursor-pointer items-center justify-center gap-4 rounded-lg bg-[#fee500] py-4 pr-8 pl-7"
            onClick={handleKakaoLogin}
          >
            <KakaoIcon />
            <span className="text-lg font-semibold text-[rgba(0,0,0,0.85)]">카카오로 시작하기</span>
          </button>
          <button
            className="border-neutral-light bg-pure-white flex w-75 cursor-pointer items-center justify-center gap-4 rounded-lg border border-solid py-4 pr-8 pl-7"
            onClick={handleGoogleLogin}
          >
            <GoogleIcon />
            <span className="text-lg font-semibold text-[#374151]">Google 계정으로 시작하기</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
