import { useState, useEffect } from 'react';
import { Menu, X, Code, User, Briefcase, Mail, Instagram, Github, Linkedin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <Code className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl blur opacity-30 animate-pulse"></div>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 transition-colors">
                Nikhil Khandelwal
              </span>
              <div className="flex items-center space-x-2 mt-1">
                <a
                  href="https://github.com/nikhilkhgla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded transition-colors text-gray-600 hover:text-blue-600"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nikhil-khandelwal-3972a9217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded transition-colors text-gray-600 hover:text-blue-600"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/nikhil_khandelwal_02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded transition-colors text-gray-600 hover:text-pink-600"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'About', id: 'about', icon: User },
              { name: 'Skills', id: 'skills', icon: Code },
              { name: 'Projects', id: 'projects', icon: Briefcase },
              { name: 'Contact', id: 'contact', icon: Mail }
            ].map(({ name, id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{name}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {[
              { name: 'About', id: 'about', icon: User },
              { name: 'Skills', id: 'skills', icon: Code },
              { name: 'Projects', id: 'projects', icon: Briefcase },
              { name: 'Contact', id: 'contact', icon: Mail }
            ].map(({ name, id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
