import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Codepen, Globe, Database, Smartphone, Palette, Shield, Cpu } from 'lucide-react';

const Skills = () => {
  const skillsList = [
    { name: 'Frontend', icon: <Layout />, description: 'HTML, CSS, JavaScript, React' },
    { name: 'Backend Basics', icon: <Database />, description: 'Node.js, MongoDB' },
    { name: 'Tools', icon: <Cpu />, description: 'Git, VS Code' },
    { name: 'Design', icon: <Palette />, description: 'UI/UX, Graphic Design' }
  ];

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-left mb-16"
      >
        <h2 className="heading-hero mb-4">Core <span className="text-brand-secondary">Expertise</span></h2>
        <p className="text-paragraph">I provide a specialized set of high-end technical skills for building professional digital products.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {skillsList.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass-card hover:border-brand-primary/50 group text-center p-8 flex flex-col items-center justify-center"
          >
            <div className="text-brand-primary mb-4 p-4 bg-brand-primary/10 rounded-2xl group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2 leading-tight">{skill.name}</h3>
            <p className="text-xs text-paragraph uppercase tracking-widest">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
