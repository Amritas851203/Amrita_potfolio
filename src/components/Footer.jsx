import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 bg-brand-darker">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <div className="text-2xl font-bold mb-2">Amrita Singh<span className="text-brand-primary">.</span></div>
          <p className="text-gray-500 text-sm">Building modern web experiences with clean UI and scalable systems.</p>
        </div>

        {/* Links */}
        <div className="flex gap-12 text-sm text-gray-400">
           <div className="flex flex-col gap-2">
              <span className="text-white font-bold mb-2">Navigation</span>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
           </div>
           <div className="flex flex-col gap-2">
              <span className="text-white font-bold mb-2">Social</span>
              <a href="https://github.com" className="hover:text-white flex items-center gap-2 transition-colors"><Github size={14}/> Github</a>
              <a href="https://linkedin.com" className="hover:text-white flex items-center gap-2 transition-colors"><Linkedin size={14}/> Linkedin</a>
              <a href="https://twitter.com" className="hover:text-white flex items-center gap-2 transition-colors"><Twitter size={14}/> Twitter</a>
           </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-600">
          © 2026 Amrita Singh. Built with React & Tailwind v4.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
