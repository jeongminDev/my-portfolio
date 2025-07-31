'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

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
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;
