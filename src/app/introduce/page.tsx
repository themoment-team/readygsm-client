import type { Metadata } from 'next';

import { IntroducePage } from '@/views/introduce';

export const metadata: Metadata = {
  title: '소개',
  description: 'Ready, GSM 서비스를 만든 더모먼트팀을 소개합니다.',
  alternates: {
    canonical: '/introduce',
  },
};

const Introduce = () => {
  return <IntroducePage />;
};

export default Introduce;
