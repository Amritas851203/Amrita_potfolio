import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech IT',
      institution: 'GGSIPU',
      year: 'Active',
      icon: <GraduationCap size={24} />,
      color: 'cyan'
    },
    {
      degree: '12th Grade',
      institution: 'CBSE',
      year: 'Score: 82%',
      icon: <Award size={24} />,
      color: 'purple'
    }
  ];

  return (
    <section id="education" className="section-container mb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-left mb-12"
      >
        <h2 className="heading-hero mb-4">Academic <span className="text-brand-secondary">Background</span></h2>
        <p className="text-paragraph">I combine academic rigor with practical engineering experience.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card flex flex-row items-center gap-6"
          >
            <div className="bg-brand-primary/20 p-4 rounded-2xl text-brand-primary">
              {edu.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{edu.degree}</h3>
              <p className="text-brand-secondary/80 font-medium mb-1">{edu.institution}</p>
              <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">{edu.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
