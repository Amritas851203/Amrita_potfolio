import React from 'react';
import { Linkedin, Github, Instagram, MessageCircle, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} />,
    link: 'https://www.linkedin.com/in/amrita-singh-579262331/',
    className: 'social-btn-linkedin',
  },
  {
    name: 'GitHub',
    icon: <Github size={20} />,
    link: 'https://github.com/Amritas851203',
    className: 'social-btn-github',
  },
  {
    name: 'Instagram',
    icon: <Instagram size={20} />,
    link: 'https://www.instagram.com/amrita_singh.leads',
    className: 'social-btn-instagram',
  },
  {
    name: 'WhatsApp',
    icon: <MessageCircle size={20} />,
    link: 'https://wa.me/918512031847?text=Hi%20Amrita%2C%20I%20saw%20your%20portfolio',
    className: 'social-btn-whatsapp',
  },
  {
    name: 'Email',
    icon: <Mail size={20} />,
    link: 'mailto:amritasingh38381@gmail.com',
    className: 'social-btn-email',
  },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-4 flex-wrap items-center">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-btn ${social.className}`}
        >
          <span className="flex items-center gap-2">
            {social.icon}
            <span className="text-sm font-medium tracking-wide">{social.name}</span>
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
