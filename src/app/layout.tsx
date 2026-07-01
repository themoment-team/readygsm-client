import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';

import {
  cn,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  TanStackProvider,
  ToastProvider,
} from '@/shared/lib';
import { pretendard } from '@/shared/styles';
import { ViewportGuard } from '@/shared/ui';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import '@/shared/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    '광주소프트웨어마이스터고등학교',
    '광주소프트웨어마이스터고',
    'GSM',
    'Ready GSM',
    '학과 체험',
    '학과 체험 신청',
    '입학설명회',
    '소프트웨어 마이스터고',
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: ['/images/opengraph-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/opengraph-image.png'],
  },
  verification: {
    google: 'vdWefvqjIbTnZs7zhDUSD1kwC',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
      <body className={pretendard.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c'),
          }}
        />
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
