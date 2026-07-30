export interface JourneyStepType {
  number: string;
  label: string;
  title: string;
  description: string;
}

export const journeySteps: JourneyStepType[] = [
  {
    number: '01',
    label: 'Start from zero',
    title: '코딩이 처음인 당신에게',
    description:
      "처음이어도 걱정하지 마세요. GSM에 온 선배들도 대부분 '변수'가 뭔지조차 몰랐던 평범한 중학생이었습니다. 중요한 건 시작할 때의 실력이 아니라 배우고 싶은 마음. 우리는 여러분이 0에서 시작해도 끝까지 함께 갑니다.",
  },
  {
    number: '02',
    label: 'Meister',
    title: '단순한 개발자를 넘어',
    description:
      '코드를 배우는 것을 넘어 문제를 발견하고 해결하는 진짜 실력을 키웁니다. 여기서 보내는 3년이 곧 여러분 커리어의 시작입니다.',
  },
  {
    number: '03',
    label: 'Prove',
    title: '실력을 결과로',
    description:
      '단순 이론만 배우는 것이 아닌 실제 프로젝트를 진행합니다. 단순히 웹사이트로 학교 내의 불편사항을 해결하는 것이 아닌 세상을 바꾸는 첫걸음을 내딛습니다.',
  },
  {
    number: '04',
    label: 'Mentoring',
    title: '도움받고 도움주는',
    description:
      '모르는 건 언제든 물어보세요. GSM에는 같은 길을 먼저 걸어본 선배들이 있습니다. 에러 하나에 밤새 막혔던 경험, 처음 코드가 돌아갔을 때의 짜릿함 — 다 겪어본 선배들이 옆에서 알려줍니다. 궁금한 걸 부끄러워하지 않아도 되는 곳, 물어볼수록 빠르게 크는 곳입니다.',
  },
  {
    number: '05',
    label: 'Experience',
    title: '고민되시나요?',
    description:
      "'내가 정말 개발자가 적성일까?' 고민된다면 학과 체험에서 여러분의 가능성을 만나보세요. 목록은 로그인 없이 둘러볼 수 있고, 신청은 로그인 후 진행됩니다.",
  },
];
