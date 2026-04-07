import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, ExternalLink, Instagram, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Ecosystems = () => {
  const navigate = useNavigate();
  const ecosystems = [
    {
      title: 'TechEra',
      role: 'Co-Founder',
      description: 'Co-leading a student-driven tech community focused on innovation, hackathons, and real-world exposure.',
      icon: '/assets/techera_logo.png',
      path: '/techera',
      buttonText: 'Explore Community',
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
      path: '/graphera',
      buttonText: 'Explore Services',
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
            className="glass-card flex flex-col md:flex-row gap-8 items-center md:items-start group transition-all duration-500 hover:border-purple-500/50"
          >
            {/* Left: Circular Logo */}
            <div className="w-40 h-40 flex-shrink-0 relative cursor-pointer" onClick={() => navigate(eco.path)}>
              <div className="absolute inset-2 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-full blur-md opacity-30 animate-pulse group-hover:opacity-50" />
              <img 
                src={eco.icon} 
                alt={eco.title} 
                className="w-full h-full object-cover rounded-full border-2 border-white/20 relative z-10"
              />
            </div>

            {/* Right: Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-3xl font-bold text-white group-hover:text-brand-secondary transition-colors cursor-pointer" onClick={() => navigate(eco.path)}>{eco.title}</h3>
                <span className="text-brand-primary font-bold text-sm uppercase tracking-widest bg-brand-primary/10 px-4 py-1 rounded-full">{eco.role}</span>
              </div>
              <p className="text-paragraph mb-8 text-lg">{eco.description}</p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {/* Explore Button */}
                <button 
                  onClick={() => navigate(eco.path)}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:border-brand-secondary hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] group-hover:translate-y-[-2px] cursor-pointer"
                >
                  {eco.buttonText} <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </button>

                <div className="flex gap-4">
                  {eco.links.map((link, lIdx) => (
                    <a 
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/70 bg-white/5 hover:bg-white/10 hover:text-white p-3 rounded-xl transition-all"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Ecosystems;
