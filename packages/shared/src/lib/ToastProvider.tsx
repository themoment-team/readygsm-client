'use client';

import { ToastContainer } from 'react-toastify';

import { CloseIcon, InfoIcon } from '@shared/assets';

// 커스텀 스타일이 라이브러리 기본 스타일을 덮어쓰도록 기본 스타일을 먼저 불러온다.
import 'react-toastify/dist/ReactToastify.css';
import '@shared/assets/toast/toast.css';

const ICON_FILL_BY_TYPE: Record<string, string> = {
  error: '#F04636',
  warning: '#D97706',
};

const ToastProvider = () => (
  <ToastContainer
    position="top-right"
    icon={({ type }) => <InfoIcon fill={ICON_FILL_BY_TYPE[type] ?? '#16A34A'} />}
    closeButton={<CloseIcon />}
    pauseOnHover={false}
  />
);

export default ToastProvider;
