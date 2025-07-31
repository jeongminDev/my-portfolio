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
      className="mb-16"
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
            점점 상호작용 구현에 더 깊이 흥미를 느꼈습니다. 지금은 JavaScript와
            React를 중심으로 사용자 중심의 화면을 기획부터 구현까지 주도적으로
            만들 수 있는 개발자로 성장하고 있습니다.
          </p>
        </motion.div>
        <motion.div
          className="border py-8 px-4 rounded-lg bg-gray-200"
          variants={itemVariants}
        >
          <h3 className="font-bold mb-4 text-2xl">
            Q. 작업 중 제일 중요하게 생각하는 것은?
          </h3>
          <p className="text-base text-gray-500">Date</p>
        </motion.div>
        <motion.div
          className="border py-8 px-4 rounded-lg bg-gray-200"
          variants={itemVariants}
        >
          <h3 className="font-bold mb-4 text-2xl">
            Q. 협업 중 겪은 가장 큰 어려움은?
          </h3>
          <p className="text-base text-gray-500">Date</p>
        </motion.div>
        <motion.div
          className="border py-8 px-4 rounded-lg bg-gray-200"
          variants={itemVariants}
        >
          <h3 className="font-bold mb-4 text-2xl">
            Q. 사용자 피드백을 반영한 경험은?
          </h3>
          <p className="text-base text-gray-500">Date</p>
        </motion.div>
        <motion.div
          className="border py-8 px-4 rounded-lg bg-gray-200"
          variants={itemVariants}
        >
          <h3 className="font-bold mb-4 text-2xl">
            Q. 개발 중 가장 보람 있었던 순간은?
          </h3>
          <p className="text-base text-gray-500">Date</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WritingSection;
