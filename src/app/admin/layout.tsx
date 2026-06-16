import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '관리자',
  robots: {
    index: false,
    follow: false,
  },
};

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default AdminLayout;
