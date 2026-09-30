import React, { useRef, useState } from 'react';
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

/* ── 3D Tilt Card ─────────────────────────────────────────────────────────── */
const TILT_MAX = 14; // max degrees of tilt
const SCALE_ON_HOVER = 1.035;

function TiltCard({ children, className, style }) {
  const cardRef = useRef(null);
  const rafRef = useRef(null);
  const [transform, setTransform] = useState({
    rotX: 0,
    rotY: 0,
    glowX: 50,
    glowY: 50,
    scale: 1,
    active: false,
  });

  const handleMouseMove = (e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotY = ((x - cx) / cx) * TILT_MAX;
      const rotX = -((y - cy) / cy) * TILT_MAX;
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      setTransform({ rotX, rotY, glowX, glowY, scale: SCALE_ON_HOVER, active: true });
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setTransform({ rotX: 0, rotY: 0, glowX: 50, glowY: 50, scale: 1, active: false });
  };

  const cardStyle = {
    ...style,
    transform: `perspective(700px) rotateX(${transform.rotX}deg) rotateY(${transform.rotY}deg) scale(${transform.scale})`,
    transition: transform.active
      ? 'transform 0.08s ease-out'
      : 'transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)',
    willChange: 'transform',
    position: 'relative',
    overflow: 'hidden',
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Radial glow shimmer that follows the cursor */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          borderRadius: 'inherit',
          background: `radial-gradient(circle at ${transform.glowX}% ${transform.glowY}%, rgba(91,75,219,0.13) 0%, transparent 65%)`,
          opacity: transform.active ? 1 : 0,
          transition: 'opacity 0.35s ease',
        }}
      />
      {/* Specular highlight on the top-left edge */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          borderRadius: 'inherit',
          background: `linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 50%)`,
          opacity: transform.active ? 1 : 0,
          transition: 'opacity 0.35s ease',
        }}
      />
      <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>{children}</div>
    </div>
  );
}

/* ── Projects Section ─────────────────────────────────────────────────────── */
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.45 }}
            style={{ perspective: '700px' }}
          >
            <TiltCard
              className="group flex flex-col bg-white rounded-2xl border border-gray-200/80"
              style={{
                boxShadow: '0 2px 12px -4px rgba(0,0,0,0.06), 0 1px 4px -2px rgba(0,0,0,0.04)',
                height: '100%',
              }}
            >
              {/* Project image */}
              <div className="relative h-44 overflow-hidden flex-shrink-0 rounded-t-2xl">
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

              {/* Card body */}
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

                {/* Buttons */}
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
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
