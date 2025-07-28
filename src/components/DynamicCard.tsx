import { motion } from 'framer-motion';

const DynamicCard = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' as const, delay: 0.4 },
    },
  };

  return (
    <motion.div
      className="p-6 border border-gray-light rounded-2xl bg-white/50 shadow-sm h-full flex items-center justify-center"
      variants={cardVariants}
    >
      <motion.div
        className="w-48 h-48 bg-gradient-to-br from-accent-soft-pink to-accent-pink rounded-lg flex items-center justify-center"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <p className="text-white font-bold text-lg">Portfolio</p>
      </motion.div>
    </motion.div>
  );
};

export default DynamicCard;
