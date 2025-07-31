import React from 'react';
import { motion } from 'framer-motion';

interface StyledListItemProps {
  children: React.ReactNode;
}

const StyledListItem: React.FC<StyledListItemProps> = ({ children }) => {
  return (
    <motion.li
      className="flex items-start mb-3 cursor-default"
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="flex-shrink-0 w-5 h-5 mr-3 mt-1 bg-gray-500 rounded-md"
        variants={{
          initial: { rotate: 0, scale: 1 },
          hover: { rotate: 180, scale: 1.2 },
        }}
        viewport={{ once: false }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      ></motion.span>
      <span className="text-gray-700">{children}</span>
    </motion.li>
  );
};

export default StyledListItem;
