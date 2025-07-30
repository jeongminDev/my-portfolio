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
      <h2 className="text-2xl font-bold mb-8">Writing</h2>
      <motion.div className="space-y-4" variants={containerVariants}>
        {/* Add your writing items here */}
        <motion.div className="border-b pb-4" variants={itemVariants}>
          <h3 className="font-bold">Article 1</h3>
          <p className="text-sm text-gray-500">Date</p>
        </motion.div>
        <motion.div className="border-b pb-4" variants={itemVariants}>
          <h3 className="font-bold">Article 2</h3>
          <p className="text-sm text-gray-500">Date</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WritingSection;
