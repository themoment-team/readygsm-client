export const NAV_LINKS = {
  client: [
    { href: '/', label: '홈', icon: false, isExternal: false },
    { href: '/programs', label: '학과 체험 신청', icon: false, isExternal: false },
    { href: '/applications', label: '신청 조회', icon: false, isExternal: false },
    { href: '/faq', label: '자주 묻는 질문', icon: false, isExternal: false },
    {
      href: 'https://themoment-landing.hellogsm.kr/',
      label: '더모먼트',
      icon: true,
      isExternal: true,
    },
  ],
} as const;
