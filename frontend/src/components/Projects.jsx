import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import studentPortalImg from '../assets/student_portal.png';
import portfolioImg from '../assets/portfolio_website.png';
import mernAppImg from '../assets/mern_app.png';

const projects = [
  {
    title: 'Student Portal',
    category: 'Web Application',
    description:
      'A dedicated platform for students to manage coursework, grades, and campus resources with a clean, modern UI.',
    image: studentPortalImg,
    features: ['Student & Faculty Login', 'Assignment & Grade Tracking', 'Responsive & Modern UI'],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    category: 'Personal Project',
    description:
      'A premium, high-performance portfolio showcasing professional work and skills with smooth animations.',
    image: portfolioImg,
    features: ['Responsive & Minimal Design', 'Smooth Animations', 'Optimized Performance'],
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'MERN App',
    category: 'Full Stack Project',
    description:
      'A robust and scalable full-stack application built using MongoDB, Express, React, and Node.js with authentication and a modern dashboard.',
    image: mernAppImg,
    features: ['JWT Authentication', 'RESTful APIs', 'Interactive Dashboard'],
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-container section-alt scroll-mt-20"
      style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
    >
      {/* ── Section Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"
      >
        <div>
          <span className="section-label">Work</span>
          <h2 className="heading-section mt-2 mb-2">
            Featured <span style={{ color: '#5B4BDB' }}>Projects</span>
          </h2>
          <p className="text-paragraph max-w-xl">
            A selection of projects I've built while learning, experimenting, and solving real-world problems.
          </p>
        </div>
        <a
          href="#projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap self-start sm:self-auto pb-1"
          style={{ color: '#5B4BDB', borderBottom: '1px solid #5B4BDB' }}
        >
          View All Projects <ArrowRight size={14} />
        </a>
      </motion.div>

      {/* ── 3-column card grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="group flex flex-col bg-white rounded-2xl border border-gray-200/80 overflow-hidden"
            style={{
              boxShadow: '0 2px 12px -4px rgba(0,0,0,0.06), 0 1px 4px -2px rgba(0,0,0,0.04)',
            }}
          >
            {/* Project image */}
            <div className="relative h-44 overflow-hidden flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Category badge over image */}
              <span
                className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                style={{ backgroundColor: 'rgba(255,255,255,0.92)', color: '#5B4BDB' }}
              >
                {project.category}
              </span>
            </div>

            {/* Card body — flex-col + justify-between keeps buttons pinned to bottom */}
            <div className="flex flex-col flex-1 p-5">
              {/* Name + description */}
              <div className="mb-3">
                <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-1.5">
                  {project.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-1 mb-4">
                {project.features.map((feat, fi) => (
                  <li key={fi} className="flex items-center gap-1.5 text-[12px] text-gray-600">
                    <CheckCircle2 size={12} className="flex-shrink-0" style={{ color: '#5B4BDB' }} />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag, ti) => (
                  <span key={ti} className="tag text-[11px] py-0.5 px-2">{tag}</span>
                ))}
              </div>

              {/* Buttons — mt-auto pins them to the bottom */}
              <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-100">
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12px] font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#5B4BDB' }}
                >
                  Live Demo <ExternalLink size={11} />
                </a>
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12px] font-semibold text-gray-700 border border-gray-200 bg-white hover:border-gray-300 transition-colors"
                >
                  <Github size={13} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
