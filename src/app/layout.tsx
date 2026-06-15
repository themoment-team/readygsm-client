import type { Metadata } from 'next';

import { cn, TanStackProvider, ToastProvider } from '@/shared/lib';
import { pretendard } from '@/shared/styles';
import { ViewportGuard } from '@/shared/ui';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import '@/shared/styles/globals.css';

export const metadata: Metadata = {
  title: 'Ready, GSM',
  description: '광주소프트웨어마이스터고등학교 학과체험 신청 서비스',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <TanStackProvider>
          <ViewportGuard>
            <Header />
            <div className={cn('flex-1')}>{children}</div>
            <Footer />
          </ViewportGuard>
          <ToastProvider />
        </TanStackProvider>
      </body>
    </html>
  );
};

export default RootLayout;
