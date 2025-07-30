import { ProjectCardProps } from '@/components/ProjectCard';

export const projects: ProjectCardProps[] = [
  {
    name: 'Doodle Play',
    date: '2024.10 ~ 2025.01',
    thumbnail: '/projectImage/doodleplay.png',
    images: [
      '/projectImage/doodleplay.png',
      '/projectImage/doodleplay_02.png',
      '/projectImage/doodleplay_03.png',
    ],
    notionUrl:
      'https://jm-front.notion.site/Doodle-Play-1c2fcc0bc00b806085fae7886a9a2b63?pvs=4',
    githubUrl: 'https://github.com/DoodlePlay/Frontend',
    webUrl: 'https://www.doodleplay.xyz/',
    figmaUrl:
      "https://www.figma.com/design/1ZCji1TU18PFMzwbLtL32j/Two-Meet's-team-library?node-id=2317-191&t=3ET9eArK5Bbqwqah-1",
    summary:
      '웹소켓 기반의 실시간 그림 퀴즈 플랫폼 - 높은 수준의 사용자 경험 기술적 도전과 창의적 재미를 동시에 구현하기 위해, 웹 애플리케이션의 형태로 웹 게임을 기획',
    techStackByCategory: {
      frontend: ['React', 'Next.js', 'Typescript', 'Zustand'],
      backend: ['Firebase Realtime DB', 'Socket.io'],
      styling: ['TailwindCSS', 'Framer-motion'],
      collaboration: ['Figma', 'GitHub', 'Vercel'],
      testing: ['Vitest'],
    },
    role: `- 게임방 UI/UX 디자인 및 화면 설계 (Figma 기반)
    - fabric.js를 활용한 실시간 드로잉 기능 개발
    - Socket.IO를 활용한 실시간 그림 동기화 및 멀티 사용자 통신 구조 설계- 게임 아이템 효과 구현 및 사용자 반응 기반 애니메이션 적용 (폭탄, 반전 등)
    - PR 기반 CI/CD 파이프라인 구성 및 Vercel 자동 배포 구현
    `,
    result: `- 3개월 MVP 구축 및 배포 완료(https://www.doodleplay.xyz)
    - Next.js SSR 환경에서 상태 관리 및 렌더링 이슈 해결 경험
    - GitHub PR 기반 협업 프로세스 도입 및 코드 리뷰 문화 정착
    - 사용자 피드백 기반 UI/UX 개선 → 그림판/아이템 사용성 개선
    `,
  },
  {
    name: 'Training Diary(트.다)',
    date: '2024. 06 ~ 2024. 08',
    thumbnail: '/projectImage/trainingDiary_bg.png',
    images: [
      '/projectImage/trainingDiary.png',
      '/projectImage/trainingDiary_02.png',
      '/projectImage/trainingDiary_03.png',
    ],
    notionUrl: 'https://...',
    summary: '웹소켓 기반의 실시간 그림 퀴즈 플랫폼',
    techStack: ['Next.js', 'Zustand', 'Firebase', 'Socket.io'],
    role: '프론트엔드 전반 및 실시간 통신 개발',
    result: '완성도 높은 실시간 UX 구현 경험',
  },
  {
    name: 'wheeltalk(바퀴달린 수다)',
    date: '2024. 05 ~ 2024. 07',
    thumbnail: '/projectImage/wheeltalk.png',
    images: [
      '/projectImage/wheeltalk.png',
      '/projectImage/wheeltalk_02.png',
      '/projectImage/wheeltalk_03.png',
    ],
    notionUrl: '',
    summary: '',
    techStack: [],
    role: '',
    result: '',
  },
  {
    name: 'APMETALABS 회사 홈페이지',
    date: '2023. 01 ~ 2023. 05',
    thumbnail: '/projectImage/teamap_co_kr.png',
    images: [
      '/projectImage/teamap_co_kr.png',
      '/projectImage/teamap_co_kr_2.png',
      '/projectImage/teamap_co_kr_3.png',
    ],
    notionUrl: '',
    summary: '',
    techStack: [],
    role: '',
    result: '',
  },
  {
    name: '루브루숭의(반응형) 분양 홈페이지',
    date: '2022. 07 ~ 2023. 01',
    thumbnail: '/projectImage/luvlu_01.png',
    images: [
      '/projectImage/luvlu_01.png',
      '/projectImage/luvlu_02.png',
      '/projectImage/luvlu_03.png',
    ],
    notionUrl: '',
    summary: '',
    techStack: [],
    role: '',
    result: '',
  },
];
