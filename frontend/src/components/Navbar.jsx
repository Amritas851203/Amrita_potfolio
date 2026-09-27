import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection based on actual DOM position
      const sectionIds = ['about', 'experience', 'projects', 'ventures', 'skills', 'education', 'contact'];
      const scrollPos = window.scrollY + 160;

      const sectionElements = sectionIds
        .map((id) => ({ id, el: document.getElementById(id) }))
        .filter((item) => item.el !== null)
        .sort((a, b) => a.el.offsetTop - b.el.offsetTop);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        if (sectionElements[i].el.offsetTop <= scrollPos) {
          setActiveSection(sectionElements[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Ventures', id: 'ventures' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/#' + id);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-scrolled py-2.5' : 'bg-white/95 backdrop-blur-md py-3 sm:py-3.5 border-b border-gray-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Left: Logo */}
        <a
          href="/#about"
          onClick={(e) => handleNavClick(e, 'about')}
          className="text-xl tracking-tight text-gray-900 flex items-center"
          style={{ fontWeight: 800 }}
          aria-label="Amrita Singh"
        >
          Amrita<span style={{ color: '#5B4BDB' }}>.</span>
        </a>

        {/* Desktop Nav: Center & Right */}
        <div className="hidden md:flex items-center gap-7">
          <nav className="flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-sm font-medium transition-all duration-200 relative py-1 ${
                    isActive ? 'text-[#5B4BDB] font-semibold' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: '#5B4BDB' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Subtle separator */}
          <div style={{ width: 1, height: 18, backgroundColor: '#E5E7EB' }} />

          {/* Social icons & Resume at far right */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Amritas851203"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/amrita-singh-579262331/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#0A66C2] transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white transition-all shadow-sm hover:opacity-95"
              style={{ backgroundColor: '#5B4BDB' }}
            >
              <span>Resume</span>
              <span className="text-xs">↓</span>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-gray-900 p-2 -mr-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#5B4BDB]/20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-200 shadow-lg overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`text-base font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-[#5B4BDB] bg-[#EDE9FF]/50 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#5B4BDB' }} />
                    )}
                  </a>
                );
              })}

              <div className="pt-3 mt-1 border-t border-gray-100 flex flex-wrap items-center gap-2">
                <a
                  href="https://github.com/Amritas851203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/amrita-singh-579262331/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-sm font-semibold text-white transition-opacity"
                  style={{ backgroundColor: '#5B4BDB' }}
                >
                  <span>Resume</span>
                  <span>↓</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
