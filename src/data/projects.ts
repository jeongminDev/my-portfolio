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
    notionUrl: 'https://jm-front.notion.site/1c2fcc0bc00b80c784b3cf77f272b641',
    githubUrl: 'https://github.com/TrainingDiary/training-diary-frontend',
    webUrl: 'https://trainingdiary.netlify.app',
    figmaUrl:
      'https://www.figma.com/design/961LpIZmE6x9saZCGy9aSr/TrainingDiary',
    summary:
      '헬스 트레이너와 회원의 효율적인 소통을 위한 서비스 - 개인 맞춤형 헬스 관리 서비스, 트레이너의 체계적 관리',
    techStackByCategory: {
      frontend: ['React', 'Typescript', 'Vite', 'Zustand', 'React Router'],
      backend: ['Axios', 'React Query', 'Firebase Cloud Messaging'],
      styling: [
        'Styled-components',
        'Framer-motion',
        'FullCalendar',
        'date-fns',
        'React Datepicker',
        'React-chartjs-2',
        'Chart.js',
      ],
      collaboration: ['Figma', 'GitHub', 'Vercel'],
      testing: ['Jest', 'React Testing Library', 'Mock Service Worker'],
    },
    role: `- 화면 설계 및 사용자 흐름 기반 서비스 기획
    - UI/UX 디자인 기여도 95% (Figma 기반 시안 설계 및 적용)
    - 퍼블리싱 및 주요 페이지 프론트엔드 개발 (홈, 운동 기록, 대시보드 등)
    `,
    result: ` - 3개월 MVP 구축 및 배포 완료
    - 상태 관리(Zustand) 및 서버 상태 연동(React Query) 구조 설계
    - MSW 기반의 API 목서버를 활용한 테스트 환경 경험
    - 사용자 니즈 기반 UI 구성 → 캘린더/차트/식단 시각화 구성
    `,
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
    notionUrl:
      'https://jm-front.notion.site/WheelTalk-833374842a814599abddecf2922d9cfb',
    githubUrl: 'https://github.com/jeongminDev/WheelTalk',
    webUrl: 'https://wheeltalkproject.web.app/',
    summary:
      '자동차에 대해 고민하고 있는 사람들을 위한 커뮤니티 - 자동차에 대해 실사용자의 피드백 등을 쉽게 확인할 수 있으며, 차량 구매를 위한 사전 정보 습득 수월',
    techStackByCategory: {
      frontend: ['React', 'Typescript', 'Vite', 'React Router'],
      backend: [
        'Firebase Realtime DB',
        'Firebase Authentication',
        'Firebase Storage',
      ],
      styling: ['TailwindCSS', 'Styled-components'],
      collaboration: ['Figma', 'GitHub'],
      testing: [],
    },
    role: `- 커뮤니티형 자동차 게시판 기획 및 전체 화면 설계
    - 게시판/댓글/이미지 업로드 기능 포함한 프론트엔드 전면 개발
    - Firebase를 활용한 사용자 인증, 글 작성, 댓글 저장 로직 구현
    - 다크 모드/화이트 모드 전환 UI 및 상태 관리 구현
    `,
    result: `- 2개월 MVP 완성 및 퍼블릭 배포
    - Firebase Authentication과 DB 구조 설계 및 연동 경험
    - 비로그인 사용자 차단 처리 및 예외 UI 구성
    - React Router 기반 SPA 라우팅 및 Firebase 실시간 반영 로직 구현
    - Tailwind 기반 테마 모드 전환 기능 구현 (다크/화이트 모드)
    - 프로젝트 기획부터 배포까지 전 과정을 혼자서 경험하며 서비스 흐름 전체 이해도 향상
    `,
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
    summary:
      '주식회사 에이피메타랩스 자사 홈페이지 - 회사 소개 및 사업 소개, 포트폴리오, contact 메일 연결',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    role: `- 홈페이지 디자인 담당 및 시안 제작(웹 디자인)
    - HTML, CSS, JavaScript 이용 웹 페이지 퍼블리싱
    `,
    result: `- 회사 브랜딩 강화 및 온라인 인지도 확보
    - 사업 및 서비스 소개를 통한 잠재 고객 유치 기반 마련
    - 웹 표준을 준수한 시멘틱 마크업 및 반응형 웹 디자인 구현
    - 디자인부터 퍼블리싱까지 전체 프로세스를 주도하며 웹 개발 역량 강화`,
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
    webUrl: 'http://www.xn--2s2ba160b32e91h.com/',
    summary:
      '루브루 숭의 더 오션 아파트 분양 정보를 제공하고, 잠재 고객의 관심 등록 및 문의를 유도하기 위한 반응형 웹사이트',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    role: `- 반응형 웹 디자인 및 퍼블리싱 담당
    - 분양 정보 페이지 및 관심고객 등록 폼 기능 구현
    `,
    result: `- 분양 문의 및 방문 예약 접수 채널 확보를 통한 영업 기회 창출
    - PC, 태블릿, 모바일 등 다양한 디바이스에 최적화된 반응형 웹 구현
    - 잠재 고객의 정보 접근성 향상 및 분양 정보 효과적 전달
    `,
  },
];
