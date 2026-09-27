import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="bg-white"
      style={{ borderTop: '1px solid #E5E7EB' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Brand */}
        <div>
          <div
            className="text-lg text-gray-900 mb-1"
            style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Amrita Singh
            <span style={{ color: '#5B4BDB' }}>.</span>
          </div>
          <p className="text-xs text-gray-400">
            Building modern web experiences with clean UI and scalable systems.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-10 text-sm text-gray-500">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-700 text-gray-800 uppercase tracking-wider mb-1" style={{ fontWeight: 700 }}>
              Navigation
            </span>
            <a href="/#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="/#experience" className="hover:text-gray-900 transition-colors">Experience</a>
            <a href="/#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="/#skills" className="hover:text-gray-900 transition-colors">Skills</a>
            <a href="/#education" className="hover:text-gray-900 transition-colors">Education</a>
            <a href="/#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-700 text-gray-800 uppercase tracking-wider mb-1" style={{ fontWeight: 700 }}>
              Social
            </span>
            <a
              href="https://github.com/Amritas851203"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <Github size={13} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/amrita-singh-579262331/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={13} /> LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <Twitter size={13} /> Twitter
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400">
          © 2026 Amrita Singh.<br className="md:hidden" /> Built with React & Tailwind v4.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
