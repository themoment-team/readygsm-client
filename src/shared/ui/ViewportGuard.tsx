'use client';

import { ReactNode } from 'react';

import { useMediaQuery } from '@/shared/hooks';

import { Modal } from './Modal';

const UNSUPPORTED_VIEWPORT_QUERY = '(max-width: 1023px)';

interface ViewportGuardProps {
  children: ReactNode;
}

const ViewportGuard = ({ children }: ViewportGuardProps) => {
  const isUnsupportedViewport = useMediaQuery(UNSUPPORTED_VIEWPORT_QUERY);

  if (isUnsupportedViewport) {
    return (
      <Modal isOpen className="px-6 py-8 text-center">
        <p className="text-neutral-dark text-lg font-semibold">PC 환경에서 이용해주세요</p>
        <p className="text-secondary-slate mt-2 text-sm">
          이 서비스는 1024px 이상의 화면에서 이용해주세요.
        </p>
      </Modal>
    );
  }

  return <>{children}</>;
};

export { ViewportGuard };
