'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  thumbnail?: string;
  images?: string[];
  name: string;
  date: string;
  notionUrl?: string;
  githubUrl?: string;
  webUrl?: string;
}

const ProjectCard = ({
  thumbnail,
  images,
  name,
  date,
  notionUrl,
  githubUrl,
  webUrl,
}: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null); // Ensure lightbox is also closed
  };

  const openLightbox = (imageUrl: string) => setSelectedImage(imageUrl);
  const closeLightbox = () => setSelectedImage(null);

  useEffect(() => {
    const body = document.body;
    if (isModalOpen || selectedImage) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    return () => {
      body.style.overflow = 'auto';
    };
  }, [isModalOpen, selectedImage]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    };

    scrollContainer.addEventListener('wheel', handleWheel);
    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, [isModalOpen]);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <>
      <li
        className="bg-custom-bg transition cursor-pointer border hover:shadow-md hover:border-2 rounded-2xl shadow hover:bg-opacity-50"
        onClick={openModal}
      >
        {thumbnail && (
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={thumbnail}
              alt="project thumbnail"
              width={800}
              height={100}
            ></Image>
          </div>
        )}
        <div className="p-4">
          <p
            className={`${
              thumbnail
                ? 'text-xl font-semibold my-5'
                : 'text-sm font-semibold mb-4'
            }`}
          >
            {name}
          </p>
          <p className="text-sm text-text-second">{date}</p>
        </div>
      </li>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-custom-bg rounded-lg shadow-xl p-8 pr-0 max-w-[85%] w-full text-text-primary cursor-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">요약 정보</h2>
              <strong className="text-xl font-semibold mb-4">{name}</strong>
              <p className="text-sm text-text-primary mb-6">{date}</p>

              <div
                ref={scrollContainerRef}
                className="flex gap-5 overflow-x-auto py-4 flex-nowrap"
              >
                {images?.map((image, index) => (
                  <Image
                    key={index}
                    width={600}
                    height={100}
                    src={image}
                    alt={`project image 0${index + 1}`}
                    className="shadow-md rounded-lg flex-shrink-0 cursor-pointer"
                    onClick={() => openLightbox(image)}
                  />
                ))}
              </div>

              <div className="space-y-4 mt-4">
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

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-[60] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative w-auto h-auto max-w-[90vw] max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                src={selectedImage}
                alt="Selected project image"
                layout="intrinsic"
                width={1920}
                height={1080}
                objectFit="contain"
                className="max-h-[90vh] w-auto"
              />
            </motion.div>
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
