import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Globe, MessageCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import techeraLogo from '../assets/Techera_logo.png';
import grapheraLogo from '../assets/GraphEraa_logo.png';

const Ecosystems = () => {
  const navigate = useNavigate();

  const ventures = [
    {
      name: 'TechEra',
      roleBadge: 'CO-FOUNDER',
      description:
        'Co-founded a student-driven technology community focused on innovation, hackathons, developer events, and real-world technical exposure.',
      logo: techeraLogo,
      path: '/techera',
      buttonText: 'Explore Community',
      tags: ['Innovation', 'Hackathons', 'Developer Events', 'Tech Exposure'],
      socials: [
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/company/techeraa/',
          icon: <Linkedin size={18} />,
        },
        {
          label: 'Instagram',
          url: 'https://www.instagram.com/tech__eraa',
          icon: <Instagram size={18} />,
        },
        {
          label: 'Community WhatsApp',
          url: 'https://chat.whatsapp.com/L5i3gkwI7gSErhUivmShMO?mode=wwc',
          icon: <MessageCircle size={18} />,
        },
      ],
    },
    {
      name: 'GraphEra',
      roleBadge: 'FOUNDER',
      description:
        'Building a digital technology venture focused on modern web development, branding, UI/UX, and digital solutions.',
      logo: grapheraLogo,
      path: '/graphera',
      buttonText: 'View Venture',
      tags: ['Web Development', 'UI/UX Design', 'Branding', 'Digital Solutions'],
      socials: [
        {
          label: 'Website',
          url: '/graphera',
          isInternal: true,
          icon: <Globe size={18} />,
        },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/amritas851/',
          icon: <Linkedin size={18} />,
        },
      ],
    },
  ];

  return (
    <section
      id="ventures"
      className="section-container scroll-mt-20"
      style={{ paddingTop: '2rem', paddingBottom: '1.5rem' }}
    >
      <div id="ecosystems" className="relative -top-24 pointer-events-none" />

      {/* ── Section Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <span className="section-label">VENTURES</span>
        <h2 className="heading-section mt-2 mb-2">
          Building <span style={{ color: '#5B4BDB' }}>Digital Communities</span>
        </h2>
        <p className="text-paragraph max-w-2xl">
          Beyond development, I build and contribute to technology communities and digital ventures.
        </p>
      </motion.div>

      {/* ── Venture Cards (Balanced 2-Column Grid) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {ventures.map((venture, index) => (
          <motion.div
            key={venture.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.45 }}
            className="group relative bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-[0_16px_36px_rgba(91,75,219,0.08)] hover:border-[#5B4BDB]/45 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Top / Identity */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div
                  onClick={() => navigate(venture.path)}
                  className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-gray-200/80 bg-white p-1.5 shadow-sm flex-shrink-0 flex items-center justify-center overflow-hidden cursor-pointer transition-transform duration-300 group-hover:scale-105"
                  title={`View ${venture.name}`}
                >
                  <img
                    src={venture.logo}
                    alt={venture.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3
                      onClick={() => navigate(venture.path)}
                      className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight cursor-pointer group-hover:text-[#5B4BDB] transition-colors duration-200"
                    >
                      {venture.name}
                    </h3>
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EDE9FF] text-[#5B4BDB] border border-[#5B4BDB]/15">
                      {venture.roleBadge}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium mt-1">
                    {index === 0 ? 'Tech Community & Exposure' : 'Digital Studio & Engineering'}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-[0.9375rem] leading-relaxed mb-5">
                {venture.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {venture.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#F8F7FF] text-[#5B4BDB] border border-[#EDE9FF]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 mt-auto">
              <button
                onClick={() => navigate(venture.path)}
                className="inline-flex items-center gap-2 bg-[#5B4BDB] hover:bg-[#4A3CC7] text-white text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-xl shadow-sm hover:shadow-[0_4px_16px_rgba(91,75,219,0.25)] transition-all duration-200 group/btn cursor-pointer"
              >
                <span>{venture.buttonText}</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover/btn:translate-x-1"
                />
              </button>

              <div className="flex items-center gap-2">
                {venture.socials.map((social, sIdx) => {
                  if (social.isInternal) {
                    return (
                      <button
                        key={sIdx}
                        onClick={() => navigate(social.url)}
                        title={social.label}
                        className="w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-600 hover:text-[#5B4BDB] hover:border-[#5B4BDB]/40 hover:bg-[#EDE9FF]/30 flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
                      >
                        {social.icon}
                      </button>
                    );
                  }
                  return (
                    <a
                      key={sIdx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      className="w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-600 hover:text-[#5B4BDB] hover:border-[#5B4BDB]/40 hover:bg-[#EDE9FF]/30 flex items-center justify-center transition-all duration-200 shadow-sm"
                    >
                      {social.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Ecosystems;
