import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, ExternalLink, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Ecosystems = () => {
  const ecosystems = [
    {
      title: 'TechEra',
      role: 'Co-Founder',
      description: 'Co-leading a student-driven tech community focused on innovation, hackathons, and real-world exposure.',
      icon: '/assets/techera_logo.png',
      links: [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/company/techeraa/', icon: <Linkedin size={18} /> },
        { label: 'Instagram', url: 'https://www.instagram.com/tech__eraa', icon: <Instagram size={18} /> },
        { label: 'WhatsApp', url: 'https://chat.whatsapp.com/L5i3gkwI7gSErhUivmShMO?mode=wwc', icon: <MessageCircle size={18} /> }
      ]
    },
    {
      title: 'GraphEra',
      role: 'Founder',
      description: 'Creative digital agency providing design, branding, and web development services.',
      icon: '/assets/graphera_logo.png',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/thegraphera?igsh=cjFvbWZidDlrNDg5', icon: <Instagram size={18} /> },
        { label: 'WhatsApp', url: 'https://chat.whatsapp.com/K6iQEn1acOIDtLBXsebSgh?mode=gi_t', icon: <MessageCircle size={18} /> }
      ]
    }
  ];

  return (
    <section id="ecosystems" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-left mb-16"
      >
        <h2 className="heading-hero mb-4">Building <span className="text-brand-secondary">Ecosystems</span></h2>
        <p className="text-paragraph">I don't just build apps; I create interconnected digital worlds that drive growth.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12">
        {ecosystems.map((eco, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card flex flex-col md:flex-row gap-8 items-center md:items-start"
          >
            {/* Left: Circular Logo */}
            <div className="w-40 h-40 flex-shrink-0 relative">
              <div className="absolute inset-2 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-full blur-md opacity-30 animate-pulse" />
              <img 
                src={eco.icon} 
                alt={eco.title} 
                className="w-full h-full object-cover rounded-full border-2 border-white/20 relative z-10"
              />
            </div>

            {/* Right: Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-3xl font-bold text-white">{eco.title}</h3>
                <span className="text-brand-primary font-bold text-sm uppercase tracking-widest bg-brand-primary/10 px-4 py-1 rounded-full">{eco.role}</span>
              </div>
              <p className="text-paragraph mb-8 text-lg">{eco.description}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {eco.links.map((link, lIdx) => (
                  <a 
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-6 py-2 rounded-xl transition-all"
                  >
                    {link.icon} {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Ecosystems;
