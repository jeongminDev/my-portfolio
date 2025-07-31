'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  IoCloseCircleOutline,
  IoArrowBack,
  IoArrowForward,
} from 'react-icons/io5';

export interface ProjectCardProps {
  name: string;
  date: string;
  thumbnail?: string;
  images?: string[];
  notionUrl?: string;
  githubUrl?: string;
  webUrl?: string;
  figmaUrl?: string;
  summary?: string;
  techStack?: string[];
  techStackByCategory?: {
    frontend: string[];
    backend: string[];
    styling: string[];
    testing: string[];
    collaboration: string[];
    [key: string]: string[];
  };
  role?: string;
  result?: string;
}

const ProjectCard = ({
  name,
  date,
  thumbnail,
  images,
  notionUrl,
  githubUrl,
  webUrl,
  figmaUrl,
  summary,
  techStack,
  techStackByCategory,
  role,
  result,
}: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const openLightbox = (imageUrl: string) => setSelectedImage(imageUrl);
  const closeLightbox = () => setSelectedImage(null);

  const handleImageNavigation = (direction: 'prev' | 'next') => {
    if (!images) return;
    const newIndex =
      direction === 'prev' ? currentImageIndex - 1 : currentImageIndex + 1;
    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentImageIndex(newIndex);
      const imageElement = document.getElementById(`project-image-${newIndex}`);
      imageElement?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

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
              className="bg-custom-bg rounded-lg shadow-xl p-8 max-w-[85%] w-full text-text-primary cursor-auto max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center pr-8">
                <h2 className="text-2xl font-bold mb-4">{`${
                  images && images?.length >= 1 ? 'Project 정보' : '요약 정보'
                }`}</h2>
                {thumbnail && (
                  <button
                    onClick={closeModal}
                    className="transition-colors text-6xl"
                  >
                    <IoCloseCircleOutline />
                  </button>
                )}
              </div>

              <strong className="text-xl font-semibold mb-4">{name}</strong>
              <p className="text-sm text-text-primary">{date}</p>

              {images && (
                <div className="relative">
                  <div
                    ref={scrollContainerRef}
                    className="flex gap-5 overflow-x-auto py-4 flex-nowrap"
                  >
                    {images.map((image, index) => (
                      <Image
                        id={`project-image-${index}`}
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
                  <button
                    onClick={() => handleImageNavigation('prev')}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    disabled={currentImageIndex === 0}
                  >
                    <IoArrowBack />
                  </button>
                  <button
                    onClick={() => handleImageNavigation('next')}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    disabled={currentImageIndex === images.length - 1}
                  >
                    <IoArrowForward />
                  </button>
                </div>
              )}
              <div
                className={`${
                  thumbnail
                    ? 'flex gap-x-4 justify-left'
                    : 'grid grid-cols-[1fr_1fr_1fr]'
                } mt-4 items-center`}
              >
                {notionUrl &&
                  (thumbnail && thumbnail?.length > 0 ? (
                    <a
                      href={notionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-accent-pink transition-colors"
                    >
                      Notion
                    </a>
                  ) : (
                    <a
                      href={notionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-accent-pink transition-colors"
                    >
                      # Notion
                    </a>
                  ))}
                {githubUrl &&
                  (thumbnail && thumbnail?.length > 0 ? (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-accent-pink transition-colors"
                    >
                      GitHub
                    </a>
                  ) : (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-accent-pink transition-colors"
                    >
                      # GitHub
                    </a>
                  ))}
                {webUrl &&
                  (thumbnail && thumbnail.length > 0 ? (
                    <a
                      href={webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-accent-pink transition-colors"
                    >
                      Web
                    </a>
                  ) : (
                    <a
                      href={webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-accent-pink transition-colors"
                    >
                      # Web
                    </a>
                  ))}
                {figmaUrl &&
                  (thumbnail && thumbnail.length > 0 ? (
                    <a
                      href={figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-accent-pink transition-colors"
                    >
                      Figma
                    </a>
                  ) : (
                    <a
                      href={figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-accent-pink transition-colors"
                    >
                      # Figma
                    </a>
                  ))}
              </div>

              {!thumbnail && (
                <div className="text-right">
                  <button
                    onClick={closeModal}
                    className="mt-8 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                  >
                    닫기
                  </button>
                </div>
              )}

              {summary && (
                <div className="text-sm text-text-primary mt-4">
                  <strong className="block mb-1">기획 배경</strong>
                  <p>{summary}</p>
                </div>
              )}

              {techStack && (
                <div className="text-sm text-text-primary mt-4">
                  <strong className="block mb-1">기술 스택</strong>
                  <ul className="flex flex-wrap gap-2 text-sm text-text-primary">
                    {techStack.map((stack, index) => (
                      <li
                        key={index}
                        className="bg-gray-100 px-2 py-1 rounded shadow-sm text-xs"
                      >
                        {stack}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {techStackByCategory && (
                <div className="text-sm text-text-primary mt-4">
                  <strong className="block mb-1">기술 스택</strong>
                </div>
              )}

              {techStackByCategory &&
                Object.entries(techStackByCategory).map(
                  ([category, tools]) =>
                    tools &&
                    tools.length > 0 && (
                      <div key={category} className="mb-4">
                        <h4 className="text-sm font-semibold capitalize">
                          {category}
                        </h4>
                        <ul className="flex flex-wrap gap-2 text-sm text-text-primary">
                          {tools.map((tool) => (
                            <li
                              key={tool}
                              className="bg-gray-100 px-2 py-1 rounded shadow-sm text-xs"
                            >
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ),
                )}

              {role && (
                <div className="text-sm text-text-primary mt-4">
                  <strong className="block mb-1">주요 역할</strong>
                  <p className="whitespace-pre-line">{role}</p>
                </div>
              )}

              {result && (
                <div className="text-sm text-text-primary mt-4">
                  <strong className="block mb-1">성과 및 학습</strong>
                  <p className="whitespace-pre-line">{result}</p>
                </div>
              )}
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
