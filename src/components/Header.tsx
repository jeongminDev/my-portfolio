import Link from 'next/link';
import { FaGithub, FaHome } from 'react-icons/fa';
import { FiMail, FiRss } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="w-screen p-4 md:p-8 flex justify-between items-center bg-transparent fixed left-0 right-0 top-0 z-[10]">
      <h1 className="hidden md:flex text-xl font-bold text-text-primary">
        <Link href="/">BYEON JEONG MIN</Link>
      </h1>
      {/* Desktop Navigation */}
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
        <Link
          href="mailto:jeongmin4256@gmail.com"
          className="text-text-primary hover:opacity-70 transition-opacity"
        >
          Contact
        </Link>
      </nav>

      <h1 className="flex md:hidden text-xl font-bold text-text-primary">
        <Link
          href="/"
          className="text-text-primary hover:opacity-70 transition-opacity"
        >
          <FaHome />
        </Link>
      </h1>

      {/* Mobile Navigation */}
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
        <Link
          href="mailto:jeongmin4256@gmail.com"
          className="text-text-primary hover:opacity-70 transition-opacity"
        >
          <FiMail />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
