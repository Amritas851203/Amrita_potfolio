import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import studentPortalImg from '../assets/student_portal.png';
import portfolioImg from '../assets/portfolio_website.png';
import mernAppImg from '../assets/mern_app.png';

const Projects = () => {
  const projects = [
    {
      title: 'Student Portal',
      description: 'A dedicated platform for students to manage coursework, grades, and campus resources with a clean, modern UI.',
      image: studentPortalImg,
      tags: ['React', 'Full Stack', 'Tailwind'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A premium, high-performance 3D portfolio showcasing professional work and skills with immersive glassmorphism.',
      image: portfolioImg,
      tags: ['React', 'Framer Motion', '3D UI'],
      github: '#',
      demo: '#'
    },
    {
      title: 'MERN App',
      description: 'A robust and scalable full-stack application built using MongoDB, Express, React, and Node.js for modern web utility.',
      image: mernAppImg,
      tags: ['MERN', 'API', 'Database'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-left mb-16"
      >
        <h2 className="heading-hero mb-4">Featured <span className="text-brand-primary">Projects</span></h2>
        <p className="text-paragraph">Explore a selection of high-performance digital solutions built for the future.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card group overflow-hidden"
          >
            {/* Image (MANDATORY) */}
            <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href={project.github} className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md">
                  <Github size={20} />
                </a>
                <a href={project.demo} className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
            <p className="text-paragraph mb-6 line-clamp-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-xs font-bold text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
