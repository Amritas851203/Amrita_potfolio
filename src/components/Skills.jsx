import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Codepen, Globe, Database, Smartphone, Palette, Shield, Cpu } from 'lucide-react';

const Skills = () => {
  const skillsCategories = [
    {
      title: 'Architectural Frontend',
      skills: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
        { name: 'Framer Motion', icon: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg' },
        { name: 'Responsive Design', icon: 'https://api.iconify.design/material-symbols:devices.svg?color=%2360a5fa' }
      ]
    },
    {
      title: 'Scalable Backend',
      skills: [
        { name: 'Java Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'REST APIs', icon: 'https://api.iconify.design/material-symbols:api-rounded.svg?color=%2360a5fa' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
      ]
    },
    {
      title: 'Professional Stack',
      skills: [
        { name: 'Git & GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Vercel / Netlify', icon: 'https://cdn.simpleicons.org/vercel/white' },
        { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' }
      ]
    },
    {
      title: 'Strategic Creative',
      skills: [
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'UI/UX Design', icon: 'https://api.iconify.design/material-symbols:design-services-outline-rounded.svg?color=%2360a5fa' },
        { name: 'Graphic Design', icon: 'https://api.iconify.design/material-symbols:format-paint-outline-rounded.svg?color=%2360a5fa' },
        { name: 'Brand Identity', icon: 'https://api.iconify.design/material-symbols:verified-outline-rounded.svg?color=%2360a5fa' },
        { name: 'Marketing Strategy', icon: 'https://api.iconify.design/material-symbols:trending-up-rounded.svg?color=%2360a5fa' },
        { name: 'Community Architecture', icon: 'https://api.iconify.design/material-symbols:groups-outline-rounded.svg?color=%2360a5fa' }
      ]
    }
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary/80 border-l-2 border-brand-primary pl-4">
              {category.title}
            </h3>
            
            <div className="flex flex-col gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="w-10 h-10 md:w-10 md:h-10 w-8 h-8 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:border-brand-primary/50 overflow-hidden p-2">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                      loading="lazy"
                    />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
