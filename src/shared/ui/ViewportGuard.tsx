'use client';

import { ReactNode } from 'react';

import Image from 'next/image';

import { useMediaQuery } from '@/shared/hooks';
import { cn } from '@/shared/lib';

const UNSUPPORTED_VIEWPORT_QUERY = '(max-width: 1023px)';

interface ViewportGuardProps {
  children: ReactNode;
}

const ViewportGuard = ({ children }: ViewportGuardProps) => {
  const isUnsupportedViewport = useMediaQuery(UNSUPPORTED_VIEWPORT_QUERY);

  if (isUnsupportedViewport) {
    return (
      <div
        className={cn(
          'bg-pure-white fixed inset-0 z-50 flex flex-col items-center justify-center gap-7',
        )}
      >
        <Image
          src="/images/readygsm.png"
          alt=""
          width={150}
          height={158}
          className={cn('h-auto w-40')}
        />
        <p className={cn('text-secondary-slate text-center text-xl leading-7')}>
          원활한 원서접수를 위하여
          <br />
          <span className={cn('text-brand-primary')}>PC(전체 화면 모드)</span>로 접속해 주시기
          바랍니다.
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export { ViewportGuard };
