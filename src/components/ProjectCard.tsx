'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  name: string;
  date: string;
  notionUrl?: string;
  githubUrl?: string;
  webUrl?: string;
}

const ProjectCard = ({
  name,
  date,
  notionUrl,
  githubUrl,
  webUrl,
}: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <>
      <li
        className="hover:text-accent-pink bg-custom-bg transition cursor-pointer border hover:shadow-md hover:border-2 rounded-lg p-4 shadow hover:bg-opacity-50"
        onClick={openModal}
      >
        {name}
        <br />
        {date}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-custom-bg rounded-lg shadow-xl p-8 max-w-lg w-full text-text-primary"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold mb-4">요약 정보</h2>
                <strong className="text-xl font-semibold mb-4">{name}</strong>
                <p className="text-sm text-text-primary mb-6">{date}</p>

                <div className="space-y-4">
                  {notionUrl && (
                    <a
                      href={notionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-accent-pink transition-colors"
                    >
                      Notion
                    </a>
                  )}
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-accent-pink transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {webUrl && (
                    <a
                      href={webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-accent-pink transition-colors"
                    >
                      Web
                    </a>
                  )}
                </div>

                <button
                  onClick={closeModal}
                  className="mt-8 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                >
                  닫기
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    </>
  );
};

export default ProjectCard;
