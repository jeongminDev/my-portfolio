import { motion } from 'framer-motion';

const WritingSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      id="writing"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="text-xl mb-8">
        <strong className="font-bold text-2xl">
          “👨‍💻개발자의 성장은 코드 너머의 이야기로부터 시작된다.”
        </strong>
        <br />
        나의 경험, 고민, 성장 과정을 담은 짧은 에세이를 통해 개발자 변정민의
        진짜 저를 소개합니다.🙇‍♂️
      </div>
      <motion.div className="space-y-4" variants={containerVariants}>
        <motion.div
          className="border py-8 px-4 rounded-lg bg-gray-200"
          variants={itemVariants}
        >
          <h3 className="font-bold mb-4 text-2xl flex items-end gap-x-1">
            <span className="text-4xl text-gray-400">Q.</span> 프론트엔드
            개발자가 되고 싶은 이유?
          </h3>
          <p className="text-lg text-black">
            <span className="inline-block px-2 py-1 rounded-md bg-white font-semibold">
              사용자 경험을 시각적으로 구현하고 직접 반응을 확인
            </span>
            할 수 있는 직무에 매력을 느껴 프론트엔드 개발자가 되기로
            결심했습니다. 처음에는 웹디자이너로 시작했지만, 퍼블리싱 과정에서
            점점{' '}
            <span className="inline-block px-2 py-1 rounded-md bg-white font-semibold">
              상호작용 구현
            </span>
            에 더 깊이 흥미를 느꼈습니다. 지금은 JavaScript와 React를 중심으로
            사용자 중심의 화면을{' '}
            <span className="inline-block px-2 py-1 rounded-md bg-white font-semibold">
              기획부터 구현
            </span>
            까지 주도적으로 만들 수 있는 개발자로 성장하고 있습니다.
          </p>
        </motion.div>
        <motion.div
          className="border py-8 px-4 rounded-lg bg-gray-200"
          variants={itemVariants}
        >
          <h3 className="font-bold mb-4 text-2xl">
            Q. 작업 중 제일 중요하게 생각하는 것은?
          </h3>
          <p className="text-lg text-black">
            <span className="inline-block px-2 py-1 rounded-md bg-white font-semibold">
              사용자의 입장에서 사고하는 습관
            </span>
            을 가장 중요하게 여깁니다. 디자인이 아무리 예뻐도, 사용자가 원하는
            흐름에 맞지 않으면 좋은 UI가 될 수 없다고 생각합니다. 그래서 항상
            &apos;왜 이 기능이 필요한가?&apos;, &apos;어떻게 하면 더 직관적으로
            느낄까?&apos;를 먼저 고민한 뒤 개발을 시작합니다. 작은 버튼 하나에도
            의미를 담고,{' '}
            <span className="inline-block px-2 py-1 rounded-md bg-white font-semibold">
              일관된 인터랙션
            </span>
            과 흐름을 유지하는 데 집중합니다.
          </p>
        </motion.div>
        <motion.div
          className="border py-8 px-4 rounded-lg bg-gray-200"
          variants={itemVariants}
        >
          <h3 className="font-bold mb-4 text-2xl">
            Q. 협업 중 겪은 가장 큰 어려움은?
          </h3>
          <p className="text-lg text-black">
            <span className="inline-block px-2 py-1 rounded-md bg-white font-semibold">
              커뮤니케이션 미스
            </span>
            로 인해 작업 우선순위가 엇갈려 일정이 꼬였던 적이 있었습니다. 특히
            기획, 디자인, 개발이 따로 움직이던 팀에서{' '}
            <span className="inline-block px-2 py-1 rounded-md bg-white font-semibold">
              중간 연결 역할이 사라지며 혼란
            </span>
            이 생겼죠. 그 상황에서 제가 먼저 나서서 Figma에 명확한 컴포넌트
            설명을 정리하고, GitHub Issue로 역할 분담을 명확히 했습니다.
            이후에는{' '}
            <span className="inline-block px-2 py-1 rounded-md bg-white font-semibold">
              하루 1회 스크럼
            </span>
            과 커뮤니케이션 도구 정리를 통해 일정과 품질 모두 안정화시킬 수
            있었습니다.
          </p>
        </motion.div>
        <motion.div
          className="border py-8 px-4 rounded-lg bg-gray-200"
          variants={itemVariants}
        >
          <h3 className="font-bold mb-4 text-2xl">
            Q. 사용자 피드백을 반영한 경험은?
          </h3>
          <p className="text-lg text-black">
            Doodle Play 프로젝트에서 사용자가{' '}
            <span className="inline-block px-2 py-1 rounded-md bg-white font-semibold">
              “그림이 너무 빨리 사라진다”
            </span>
            는 피드백을 주셨습니다. 이 문제를 해결하기 위해 설정 메뉴에{' '}
            <span className="inline-block px-2 py-1 rounded-md bg-white font-semibold">
              유지 시간 조절
            </span>{' '}
            기능을 추가하고, canvas 상태 저장 기능을 도입했습니다. 피드백을 받고
            곧바로 반영한 결과, 다음 테스트에서 사용자 만족도가 크게
            향상되었습니다. 이후부터는
            <span className="inline-block px-2 py-1 rounded-md bg-white font-semibold">
              {' '}
              사용자 시점에서 기능을 점검하고 개선하는 습관
            </span>
            이 자연스럽게 자리 잡았습니다.
          </p>
        </motion.div>
        <motion.div
          className="border py-8 px-4 rounded-lg bg-gray-200"
          variants={itemVariants}
        >
          <h3 className="font-bold mb-4 text-2xl">
            Q. 개발 중 가장 보람 있었던 순간은?
          </h3>
          <p className="text-lg text-black">
            Training Diary를 배포한 후 한 사용자가 “이 앱 덕분에 운동 루틴을
            유지할 수 있었다”는 DM을 보내주셨을 때 정말 큰 보람을 느꼈습니다.
            단순히 기능 구현이 아니라,{' '}
            <span className="inline-block px-2 py-1 rounded-md bg-white font-semibold">
              실제 누군가의 행동을 변화
            </span>
            시키는 서비스를 만들었다는 점이 인상 깊었습니다. 그 이후로는
            기술적인 완성도뿐만 아니라{' '}
            <span className="inline-block px-2 py-1 rounded-md bg-white font-semibold">
              사람 중심의 개발
            </span>
            을 목표로 삼고 있습니다.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WritingSection;
