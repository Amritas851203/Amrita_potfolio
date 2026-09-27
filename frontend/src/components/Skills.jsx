import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
        { name: 'Responsive UI', icon: 'https://api.iconify.design/material-symbols:devices.svg?color=%235B4BDB' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'REST APIs', icon: 'https://api.iconify.design/material-symbols:api-rounded.svg?color=%235B4BDB' },
      ],
    },
    {
      title: 'Programming & DB',
      skills: [
        { name: 'Java Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Data Structures', icon: 'https://api.iconify.design/material-symbols:schema-outline.svg?color=%235B4BDB' },
      ],
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git & GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
        { name: 'Vercel / Netlify', icon: 'https://cdn.simpleicons.org/vercel/000000' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section-container section-alt scroll-mt-20"
      style={{ paddingTop: '1.5rem' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-12"
      >
        <span className="section-label">Expertise</span>
        <h2 className="heading-section mt-3 mb-4">
          Technical <span style={{ color: '#5B4BDB' }}>Skills</span>
        </h2>
        <p className="text-paragraph max-w-xl">
          Core technologies, frameworks, and developer tools applied in building production-ready web applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.08, duration: 0.4 }}
            className="card bg-white"
          >
            {/* Category header */}
            <div
              className="mb-4 pb-3"
              style={{ borderBottom: '1px solid #F3F4F6' }}
            >
              <h3
                className="text-xs font-700 uppercase tracking-wider"
                style={{ color: '#5B4BDB', fontWeight: 700, letterSpacing: '0.08em' }}
              >
                {category.title}
              </h3>
            </div>

            <div className="flex flex-col gap-2.5">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div
                    className="w-7 h-7 rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden p-1"
                    style={{ backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
