import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Card = ({ children, className, delay = 0 }: CardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut', delay },
    },
  };

  return (
    <motion.div
      className={`p-2 border-4 border-header-start rounded-2xl bg-custom-bg shadow-sm h-full ${className}`}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
};

export default Card;
