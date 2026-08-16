import type { Metadata } from 'next';

import { TanStackProvider, ToastProvider } from '@shared/lib';
import { pretendard } from '@shared/styles';

import { Header } from '@/widgets/header';

import './globals.css';

export const metadata: Metadata = {
  title: '관리자',
  robots: {
    index: false,
    follow: false,
  },
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
          <Header />
          {children}
          <ToastProvider />
        </TanStackProvider>
      </body>
    </html>
  );
};

export default RootLayout;
