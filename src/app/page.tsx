import type { Metadata } from 'next';

import { HomePage } from '@/views/home';

export const metadata: Metadata = {
  description: '광주소프트웨어마이스터고등학교의 학과 체험 신청 서비스, Ready GSM에서 만나보세요.',
  alternates: {
    canonical: '/',
  },
};

const Home = () => {
  return <HomePage />;
};

export default Home;
