'use client';

import { useState, useEffect } from 'react';

import HeroSection from '../components/HeroSection';
import WorkSection from '../components/WorkSection';
import AboutSection from '../components/AboutSection';
import IntroAnimation from '../components/IntroAnimation';
import MotionSection from '@/components/MotionSection';

export default function Home() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsIntroComplete(true);
  };

  useEffect(() => {
    if (!isIntroComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      window.scrollTo(0, 0);
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isIntroComplete]);

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
            <WorkSection />
          </div>
        </>
      )}
    </main>
  );
}
