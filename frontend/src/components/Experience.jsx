import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Megaphone } from 'lucide-react';

const experiences = [
  {
    icon: Code2,
    company: 'Edubuk',
    role: 'MERN Stack Developer Intern',
    badge: 'Internship',
    badgeStyle: { backgroundColor: '#EDE9FF', color: '#5B4BDB' },
    description:
      'Working on production modules for scalable learning platforms, creating responsive user interfaces with React and building RESTful APIs using Node.js, Express, and MongoDB.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    icon: Code2,
    company: 'Veenero',
    role: 'Full Stack Developer Intern',
    badge: 'Internship',
    badgeStyle: { backgroundColor: '#EDE9FF', color: '#5B4BDB' },
    description:
      'Engaged in full-stack development initiatives, building end-to-end features, optimizing frontend components, and collaborating on modern web application architecture.',
    tags: ['JavaScript', 'React', 'REST APIs', 'Full Stack'],
  },
  {
    icon: Users,
    company: 'TechEra',
    role: 'Co-Founder',
    badge: 'Community',
    badgeStyle: { backgroundColor: '#F0FDF4', color: '#16A34A' },
    description:
      'Co-leading a student-driven tech community organizing events, hackathons, and developer sessions to foster peer learning and growth.',
    tags: ['Leadership', 'Event Management', 'Team Collaboration'],
  },
  {
    icon: Megaphone,
    company: 'eDC IIT Delhi & Persevex',
    role: 'Campus Ambassador',
    badge: 'Leadership',
    badgeStyle: { backgroundColor: '#FFF7ED', color: '#C2410C' },
    description:
      'Selected as campus ambassador promoting entrepreneurship, outreach, and student engagement across academic and professional communities.',
    tags: ['Outreach', 'Student Engagement', 'Communication'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-container scroll-mt-20" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <span className="section-label">Experience</span>
        <h2 className="heading-section mt-2 mb-2">
          Professional <span style={{ color: '#5B4BDB' }}>Experience</span>
        </h2>
        <p className="text-paragraph max-w-xl">
          Practical development experience across product development internships and tech community leadership.
        </p>
      </motion.div>

      {/* Unified 2×2 grid — all 4 cards use identical structure and styling */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              className="card flex flex-col justify-between"
              style={{ padding: '1.5rem' }}
            >
              {/* Top: icon + name + role + badge */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EDE9FF', color: '#5B4BDB' }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-gray-900 leading-snug">
                        {exp.company}
                      </h3>
                      <p className="text-xs font-semibold text-[#5B4BDB] leading-tight">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex-shrink-0"
                    style={exp.badgeStyle}
                  >
                    {exp.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  {exp.description}
                </p>
              </div>

              {/* Bottom: tags */}
              <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-gray-100">
                {exp.tags.map((tag, ti) => (
                  <span key={ti} className="tag text-[11px] py-0.5 px-2">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
