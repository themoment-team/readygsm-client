import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '마이페이지',
  robots: {
    index: false,
    follow: false,
  },
};

const ApplicationsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default ApplicationsLayout;
