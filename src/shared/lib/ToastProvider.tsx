'use client';

import { ToastContainer } from 'react-toastify';

import { CloseIcon, InfoIcon } from '@/shared/assets';

import '@/shared/assets/toast/toast.css';
import 'react-toastify/dist/ReactToastify.css';

const ToastProvider = () => (
  <ToastContainer position="top-right" icon={<InfoIcon />} closeButton={<CloseIcon />} />
);

export default ToastProvider;
