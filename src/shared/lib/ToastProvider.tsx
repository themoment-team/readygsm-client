'use client';

import { ToastContainer } from 'react-toastify';

import { CloseIcon, InfoIcon } from '@/shared/assets';

import '@/shared/assets/toast/toast.css';
import 'react-toastify/dist/ReactToastify.css';

const ICON_FILL_BY_TYPE: Record<string, string> = {
  error: '#F04636',
  warning: '#D97706',
};

const ToastProvider = () => (
  <ToastContainer
    position="top-right"
    icon={({ type }) => <InfoIcon fill={ICON_FILL_BY_TYPE[type] ?? '#16A34A'} />}
    closeButton={<CloseIcon />}
  />
);

export default ToastProvider;
