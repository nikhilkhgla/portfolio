import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Menu, X, Github, Linkedin, FileDown, Orbit } from 'lucide-react';
import { useSectionNav } from '@/react-app/hooks/useSectionNav';

const SECTIONS = [
  { name: 'About', id: 'about' },
  { name: 'Work', id: 'projects' },
  { name: 'Experience', id: 'experience' },
];

const PAGES = [
  { name: 'Services', to: '/services' },
  { name: 'Contact', to: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const goTo = useSectionNav();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    goTo(id);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-white/10 glass-strong' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3" onClick={() => window.scrollTo({ top: 0 })}>
          <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500">
            <Orbit className="h-5 w-5 text-white" />
            <span className="absolute -inset-1 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 opacity-40 blur transition-opacity group-hover:opacity-70" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Nikhil<span className="text-gradient"> Khandelwal</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {SECTIONS.map(({ name, id }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-indigo-100/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              {name}
            </button>
          ))}
          {PAGES.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-indigo-100/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://github.com/nikhilkhgla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-lg text-indigo-100/80 transition-colors hover:bg-white/5 hover:text-cyan-300"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-khandelwal-3972a9217"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-lg text-indigo-100/80 transition-colors hover:bg-white/5 hover:text-cyan-300"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="ml-1 flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
          >
            <FileDown className="h-4 w-4" />
            Resume
          </a>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 glass-strong md:hidden">
          <div className="space-y-1 px-4 py-5">
            {SECTIONS.map(({ name, id }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className="block w-full rounded-lg px-4 py-3 text-left font-medium text-indigo-100/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {name}
              </button>
            ))}
            {PAGES.map(({ name, to }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full rounded-lg px-4 py-3 text-left font-medium text-indigo-100/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-3 font-semibold text-white"
            >
              <FileDown className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
