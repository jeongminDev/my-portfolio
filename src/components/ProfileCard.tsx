import { motion } from 'framer-motion';
import Image from 'next/image';

const ProfileCard = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      className="p-6 border border-gray-light rounded-2xl bg-white/50 shadow-sm h-full flex flex-col items-center text-center justify-center"
      variants={cardVariants}
    >
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-gray-lighter">
        <Image src="/placeholder-profile.svg" alt="Profile Picture" width={128} height={128} className="object-cover" />
      </div>
      <h1 className="text-2xl font-bold text-text-primary">BYEON JEONG MIN</h1>
      <p className="text-text-primary/80">Frontend Developer</p>
      <div className="mt-4 text-sm text-text-primary/70">
        <p>contact@your-email.com</p>
        <p>+82 10-1234-5678</p>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
