import type { Metadata } from 'next';

import { FaqPage } from '@/views/faq';

export const metadata: Metadata = {
  title: '자주 묻는 질문',
  description: '학과 체험 및 입학설명회 신청과 관련해 자주 묻는 질문을 확인해보세요.',
  alternates: {
    canonical: '/faq',
  },
};

const Faq = () => {
  return <FaqPage />;
};

export default Faq;
