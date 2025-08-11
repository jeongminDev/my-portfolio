'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaHome } from 'react-icons/fa';
import { FiMail, FiRss } from 'react-icons/fi';
import ContactModal from './ContactModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="w-screen p-4 md:p-8 flex justify-between items-center bg-transparent fixed left-0 right-0 top-0 z-[10]">
        <h1 className="hidden md:flex text-xl font-bold text-text-primary">
          <Link href="/">BYEON JEONG MIN</Link>
        </h1>
        {/* 웹용 nav */}
        <nav className="hidden md:flex gap-6 text-lg">
          <Link
            href="https://github.com/jeongminDev"
            className="text-text-primary hover:opacity-70 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://velog.io/@bjm4256"
            className="text-text-primary hover:opacity-70 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Velog
          </Link>
          <button
            onClick={openModal}
            className="text-text-primary hover:opacity-70 transition-opacity"
          >
            Contact
          </button>
        </nav>

        <h1 className="flex md:hidden text-xl font-bold text-text-primary">
          <Link
            href="/"
            className="text-text-primary hover:opacity-70 transition-opacity"
          >
            <FaHome />
          </Link>
        </h1>

        {/* 모바일 nav */}
        <nav className="flex md:hidden gap-4 text-2xl">
          <Link
            href="https://github.com/jeongminDev"
            className="text-text-primary hover:opacity-70 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://velog.io/@bjm4256"
            className="text-text-primary hover:opacity-70 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiRss />
          </Link>
          <button
            onClick={openModal}
            className="text-text-primary hover:opacity-70 transition-opacity"
          >
            <FiMail />
          </button>
        </nav>
      </header>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;
