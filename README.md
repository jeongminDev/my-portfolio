# 🎨 프론트엔드 개발자 변정민 포트폴리오

안녕하세요! 프론트엔드 개발자 변정민의 개인 포트폴리오 프로젝트입니다.  
저의 기술 스택, 진행했던 프로젝트, 그리고 저에 대한 소개를 담고 있습니다. Next.js, TypeScript, Tailwind CSS를 기반으로 동적이고 반응형인 웹사이트를 제작했습니다.

🔗 **[포트폴리오 바로가기](https://jeongmin-dev-portfolio.vercel.app/)** (이곳에 배포된 링크를 추가하세요.)

---

## ✨ 주요 기능

- **🎬 동적 Hero 섹션**: `mainCover_video.mp4`를 활용한 비디오 배경으로 첫인상을 강조했습니다.
- **🧑‍💻 소개 (About)**: 저의 경험과 기술 스택을 소개하는 섹션입니다.
- **🛠️ 프로젝트 (Work)**: `projects.ts` 데이터 기반으로 프로젝트 카드를 동적으로 생성하여, 제가 진행한 프로젝트들을 상세 내용과 함께 보여줍니다.
- **📞 연락처 (Contact)**: `EmailJS`와 Next.js API Route (`/api/send-email`)를 연동하여 저에게 직접 이메일을 보낼 수 있는 모달창 기능입니다.
- **📜 이력서 및 포트폴리오 다운로드**: PDF 형식의 이력서와 포트폴리오를 다운로드할 수 있는 링크를 제공합니다.
- **🔼 맨 위로 가기 (Scroll To Top)**: 사용자의 편의를 위해 페이지 최상단으로 이동하는 버튼을 추가했습니다.
- **📱 반응형 디자인**: Tailwind CSS를 사용하여 모바일, 태블릿, 데스크톱 등 모든 디바이스에서 최적화된 화면을 제공합니다.

---

## 🚀 기술 스택

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **Linting**: ESLint
- **Deployment**: Vercel

---

## 📂 프로젝트 구조

```
my-portfolio/
├── public/                 # 이미지, 비디오 등 정적 에셋
│   ├── projectImage/       # 프로젝트별 이미지
│   └── ...
├── src/
│   ├── app/                # Next.js App Router (페이지, 레이아웃, API)
│   │   ├── api/send-email/ # Contact Form을 위한 API Route
│   │   └── page.tsx        # 메인 페이지
│   ├── components/         # 재사용 가능한 React 컴포넌트
│   └── data/               # 프로젝트 정보 등 정적 데이터
├── next.config.ts          # Next.js 설정
├── tailwind.config.js      # Tailwind CSS 설정
└── package.json            # 프로젝트 의존성 관리
```

---

## 🏁 시작하기

로컬 환경에서 프로젝트를 실행하려면 다음 단계를 따르세요.

1.  **저장소 복제**

    ```bash
    git clone https://github.com/your-username/my-portfolio.git
    ```

2.  **프로젝트 폴더로 이동**

    ```bash
    cd my-portfolio
    ```

3.  **의존성 설치**

    ```bash
    npm install
    ```

4.  **개발 서버 실행**

    ```bash
    npm run dev
    ```

5.  브라우저에서 `http://localhost:3000` 주소로 접속하여 확인합니다.

---

## ✍️ 만든이

- **이름**: 변정민 (Byeon Jeong Min)
- **이메일**: jeongmin4256@gmail.com
- **GitHub**: https://github.com/jeongminDev
