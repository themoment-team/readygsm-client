import type { InfoSectionType } from '@/entities/schoolInfo';

export const schoolInfoSections: InfoSectionType[] = [
  {
    title: '글로벌 마인드 역량 강화 활동',
    cards: [
      {
        category: 'Major',
        descriptions: ['학기/방학 중', '외부 기관과 연계한', '전공역량 강화 캠프 운영'],
      },
      {
        category: 'Experience',
        descriptions: [
          '싱가포르 국외체험학습',
          '일본 국제교류 현장학습',
          '미국 실리콘벨리 글로벌 현장학습',
        ],
      },
      {
        category: 'Foreign',
        descriptions: ['외국어 능력 향상을 위한', '토익사관학교 운영 및', '다채로운 인문학 특강'],
      },
    ],
  },
  {
    title: '전공교과 교육과정',
    cards: [
      {
        category: 'Software',
        descriptions: ['데이터베이스 프로그래밍', '응용 프로그래밍', '네트워크 프로그래밍'],
      },
      {
        category: 'IoT',
        descriptions: [
          '산업용 전자 기기 SW 개발',
          '가전 기기 시스템 SW 개발',
          '로봇 하드웨어 설계',
        ],
      },
      {
        category: 'AI',
        descriptions: ['빅 데이터 분석', '인공지능 모델링', '알고리즘 설계'],
      },
    ],
  },
];
