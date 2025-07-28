import { motion } from 'framer-motion';

const WorkSection = () => {
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
      id="work"
      className="mb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="text-2xl font-bold mb-8">Work</h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
        {/* Add your project items here */}
        <motion.div className="border p-4 rounded-lg" variants={itemVariants}>
          <h3 className="font-bold">Project 1</h3>
          <p>Description of project 1.</p>
        </motion.div>
        <motion.div className="border p-4 rounded-lg" variants={itemVariants}>
          <h3 className="font-bold">Project 2</h3>
          <p>Description of project 2.</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WorkSection;
