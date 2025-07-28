import { motion } from 'framer-motion';

const ProjectsCard = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.2 } },
  };

  return (
    <motion.div
      className="p-6 border border-gray-light rounded-2xl bg-white/50 shadow-sm h-full"
      variants={cardVariants}
    >
      <h3 className="font-bold text-lg mb-4 text-text-primary">Featured Projects</h3>
      <ul className="space-y-2 text-text-primary/90">
        <li className="hover:text-accent-pink transition-colors cursor-pointer">Project A - E-commerce Platform</li>
        <li className="hover:text-accent-pink transition-colors cursor-pointer">Project B - Interactive Dashboard</li>
        <li className="hover:text-accent-pink transition-colors cursor-pointer">Project C - Company Website</li>
        <li className="hover:text-accent-pink transition-colors cursor-pointer">Project D - Mobile App</li>
      </ul>
    </motion.div>
  );
};

export default ProjectsCard;
