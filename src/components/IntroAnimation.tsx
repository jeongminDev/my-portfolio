'use client';

import { motion } from 'framer-motion';

interface IntroAnimationProps {
  onAnimationComplete: () => void;
}

export default function IntroAnimation({
  onAnimationComplete,
}: IntroAnimationProps) {
  return (
    <div className="fixed z-[100] left-0 top-0 w-full flex items-center justify-center flex-row h-screen bg-gradient-to-br from-gradient-end to-gradient-start">
      <motion.div
        className="text-center -mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        onAnimationComplete={onAnimationComplete}
      >
        <h1 className="block text-6xl md:text-9xl font-bold text-white mb-2 md:mb-8">
          Front-End
        </h1>
        <p className="text-2xl md:text-6xl font-medium">
          프론트엔드 개발자{' '}
          <strong className="text-3xl md:text-7xl font-bold">변정민</strong>{' '}
          입니다.
        </p>
      </motion.div>
    </div>
  );
}
