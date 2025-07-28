'use client';

import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import WorkSection from '../components/WorkSection';
import WritingSection from '../components/WritingSection';
import AboutSection from '../components/AboutSection';
import IntroAnimation from '../components/IntroAnimation';

type MotionSectionProps = {
  children: ReactNode;
};

const MotionSection = ({ children }: MotionSectionProps) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsIntroComplete(true);
  };

  return (
    <main className="relative">
      {!isIntroComplete ? (
        <IntroAnimation onAnimationComplete={handleAnimationComplete} />
      ) : (
        <>
          <HeroSection />

          <div className="p-8 md:p-16 relative z-[20] mt-[90vh] bg-white rounded-t-2xl">
            <div className="absolute left-1/2 top-5 -translate-x-1/2">
              <div className="h-1 w-14 rounded-full bg-text-primary/15"></div>
            </div>

            <MotionSection>
              <AboutSection />
            </MotionSection>
            <MotionSection>
              <WorkSection />
            </MotionSection>
            <MotionSection>
              <WritingSection />
            </MotionSection>
          </div>
        </>
      )}
    </main>
  );
}
