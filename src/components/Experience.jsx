import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend & Backend Tech Intern (MERN Stack)',
      company: 'Edubuk',
      period: 'Feb 2026 – Present',
      description: 'Working on scalable learning platforms and product modules using MERN stack.',
      skills: ['MongoDB', 'React', 'Node.js']
    },
    {
      title: 'Campus Ambassador',
      company: 'Persevex',
      period: 'Jan 2026 – Present',
      description: 'Selected as Campus Ambassador responsible for outreach and engagement.',
    },
    {
      title: 'Campus Ambassador',
      company: 'eDC IIT Delhi',
      period: 'Dec 2025 – Present',
      description: 'Promoting entrepreneurship initiatives and student engagement.',
    },
    {
      title: 'Co-Founder',
      company: 'TechEra',
      period: 'Sep 2025 – Present',
      description: 'Co-leading a student-driven tech community organizing events, hackathons, and networking opportunities.',
    },
    {
      title: 'Founder',
      company: 'GraphEra',
      period: 'Mar 2025 – Present',
      description: 'Running a creative design and digital services agency delivering branding and web solutions.',
    }
  ];

  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-left mb-12"
      >
        <h2 className="heading-hero mb-4">Professional <span className="text-brand-primary">Journey</span></h2>
        <p className="text-paragraph">Building the future of digital interaction through high-end engineering.</p>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="bg-brand-primary/20 p-4 rounded-2xl text-brand-primary">
              <Briefcase size={24} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                <span className="text-brand-primary font-medium">{exp.period}</span>
              </div>
              <p className="text-brand-secondary/80 font-medium mb-4">{exp.company}</p>
              <p className="text-paragraph">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
