import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-8 flex justify-between items-center bg-transparent fixed left-0 right-0 top-0 z-[10]">
      <h1 className="text-xl font-bold text-text-primary">
        <Link href="/">BYEON JEONG MIN</Link>
      </h1>
      <nav className="flex gap-6 text-lg">
        <Link
          href="https://github.com/jeongminDev"
          className="text-text-primary hover:opacity-70 transition-opacity"
          target="blank"
        >
          GitHub
        </Link>
        <Link
          href="https://velog.io/@bjm4256"
          className="text-text-primary hover:opacity-70 transition-opacity"
          target="blank"
        >
          Velog
        </Link>
        <Link
          href="/contact"
          className="text-text-primary hover:opacity-70 transition-opacity"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
