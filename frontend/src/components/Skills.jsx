import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench, ArrowRight } from 'lucide-react';
import skillsIllustration from '../assets/skills_illustration.png';

const Skills = () => {
  const skillsCategories = [
    {
      title: 'Frontend',
      description: 'Building modern and responsive user interfaces.',
      icon: <Layout size={19} className="text-[#5B4BDB]" />,
      skills: [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Responsive UI', icon: 'https://api.iconify.design/material-symbols:devices.svg?color=%235B4BDB' },
      ],
    },
    {
      title: 'Backend',
      description: 'Developing scalable and secure server-side applications.',
      icon: <Server size={19} className="text-[#5B4BDB]" />,
      skills: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'REST APIs', icon: 'https://api.iconify.design/material-symbols:api-rounded.svg?color=%235B4BDB' },
        { name: 'Authentication', icon: 'https://api.iconify.design/material-symbols:lock-outline.svg?color=%235B4BDB' },
        { name: 'JWT', icon: 'https://cdn.simpleicons.org/jsonwebtokens/000000' },
        { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
      ],
    },
    {
      title: 'Programming & DB',
      description: 'Languages, databases and core computer science concepts.',
      icon: <Database size={19} className="text-[#5B4BDB]" />,
      skills: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Data Structures', icon: 'https://api.iconify.design/material-symbols:schema-outline.svg?color=%235B4BDB' },
        { name: 'Algorithms', icon: 'https://api.iconify.design/material-symbols:account-tree-outline.svg?color=%235B4BDB' },
        { name: 'OOP Concepts', icon: 'https://api.iconify.design/material-symbols:deployed-code-outline.svg?color=%235B4BDB' },
      ],
    },
    {
      title: 'Tools & Workflow',
      description: 'Tools and platforms I use for development and deployment.',
      icon: <Wrench size={19} className="text-[#5B4BDB]" />,
      skills: [
        { name: 'Git & GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
        { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/000000' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section-container scroll-mt-20"
      style={{ paddingTop: '1.75rem', paddingBottom: '1.25rem' }}
    >
      {/* ── Section Header with Right-Aligned 3D Illustration ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-7">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-xl"
        >
          <span className="section-label">SKILLS</span>
          <h2 className="heading-section mt-2 mb-2">
            Technical <span style={{ color: '#5B4BDB' }}>Skills</span>
          </h2>
          <p className="text-paragraph text-sm sm:text-base leading-relaxed">
            Core technologies, frameworks, and developer tools I use to build modern, scalable and production-ready web applications.
          </p>
        </motion.div>

        {/* 3D Developer Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="hidden md:flex justify-end flex-shrink-0"
        >
          <div className="relative w-64 lg:w-80 h-36 lg:h-44 flex items-center justify-end">
            <img
              src={skillsIllustration}
              alt="Developer Skills Illustration"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* ── Skill Category Cards (4 Equal Columns on Desktop) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-stretch">
        {skillsCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.08, duration: 0.4 }}
            className="group relative bg-white border border-gray-200/90 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-[0_14px_32px_rgba(91,75,219,0.08)] hover:border-[#5B4BDB]/45 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Category Header */}
            <div>
              <div className="flex items-start justify-between gap-3 mb-4 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EDE9FF] text-[#5B4BDB] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 tracking-tight leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-[0.72rem] text-gray-500 leading-tight mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="w-5 h-5 rounded-full bg-[#EDE9FF]/80 text-[#5B4BDB] flex items-center justify-center flex-shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                  <ArrowRight size={11} />
                </div>
              </div>

              {/* Skills Row Items */}
              <div className="flex flex-col gap-2">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#F8FAFC] hover:bg-[#EDE9FF]/30 border border-gray-100/70 hover:border-[#EDE9FF] transition-all duration-150 group/row"
                  >
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-4.5 h-4.5 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[0.8125rem] font-medium text-gray-700 group-hover/row:text-gray-900 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
