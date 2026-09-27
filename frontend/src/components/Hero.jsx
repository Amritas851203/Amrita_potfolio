import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  GraduationCap,
  Star,
  FileText,
  Award,
  Sparkles,
  ArrowUpRight,
  Quote,
} from 'lucide-react';

const Hero = () => {
  const stats = [
    {
      label: 'B.Tech (IT)',
      value: '3rd Year',
      icon: <GraduationCap size={18} className="text-[#5B4BDB]" />,
    },
    {
      label: 'CGPA',
      value: '9.3',
      icon: <Star size={18} className="text-[#5B4BDB]" />,
    },
    {
      label: 'Class 12',
      value: '82%',
      icon: <FileText size={18} className="text-[#5B4BDB]" />,
    },
    {
      label: 'Class 10',
      value: '91.6%',
      icon: <Award size={18} className="text-[#5B4BDB]" />,
    },
  ];

  const techStack = [
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'Express',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-20 sm:pt-22 pb-8 sm:pb-10 bg-white">
      {/* Subtle background lavender wash on right side */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none rounded-full blur-3xl opacity-40"
        style={{
          background: 'radial-gradient(circle, #EDE9FF 0%, #F5F3FF 60%, transparent 80%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* ================= LEFT COLUMN (55% = 7 cols) ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* 1. Main Heading - starts noticeably higher */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-gray-900 tracking-tight mb-3 mt-1"
              style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 3.4rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              Hi, I'm <br />
              <span style={{ color: '#5B4BDB' }}>Amrita</span> Singh
            </motion.h1>

            {/* 2. Introduction - 3 to 4 lines on desktop */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.35 }}
              className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-4 max-w-xl"
            >
              3rd-year B.Tech IT student and Full Stack Developer with a passion for building practical, scalable and user-focused web applications. I enjoy turning ideas into real-world solutions through clean UI, efficient backend systems and modern technologies.
            </motion.p>

            {/* 3. CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.35 }}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all shadow-sm hover:opacity-95"
                style={{
                  backgroundColor: '#5B4BDB',
                  boxShadow: '0 4px 14px rgba(91, 75, 219, 0.25)',
                }}
              >
                <span>View My Work</span>
                <span>→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-800 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                <Mail size={16} className="text-gray-500" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* 4. Academic Stats Horizontal Card - compact padding */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.35 }}
              className="w-full max-w-xl bg-white rounded-xl p-3 sm:p-3.5 border border-gray-100 mb-4"
              style={{
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                {stats.map((st, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 ${i !== 0 ? 'pt-2 sm:pt-0 sm:pl-3' : ''}`}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#F5F3FF' }}
                    >
                      {st.icon}
                    </div>
                    <div>
                      <div className="text-sm sm:text-[15px] font-extrabold text-gray-900 leading-tight">
                        {st.value}
                      </div>
                      <div className="text-[10px] font-medium text-gray-400 mt-0.5">
                        {st.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 5. Tech Stack Row - visible in first viewport */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.35 }}
              className="w-full"
            >
              <p className="text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-2">
                Tech Stack
              </p>
              {/* Marquee wrapper — overflow hidden clips the scrolling track */}
              <div className="overflow-hidden w-full">
                <div className="marquee-track items-center gap-1.5 sm:gap-2">
                  {/* First copy */}
                  {techStack.map((tech, ti) => (
                    <div
                      key={`a-${ti}`}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-gray-200/90 text-xs font-semibold text-gray-800 shadow-2xs hover:border-gray-300 transition-colors mr-1.5 sm:mr-2 flex-shrink-0"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-3.5 h-3.5 object-contain"
                      />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                  {/* Duplicate copy for seamless loop */}
                  {techStack.map((tech, ti) => (
                    <div
                      key={`b-${ti}`}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-gray-200/90 text-xs font-semibold text-gray-800 shadow-2xs hover:border-gray-300 transition-colors mr-1.5 sm:mr-2 flex-shrink-0"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-3.5 h-3.5 object-contain"
                      />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN (45% = 5 cols) ================= */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0">
            {/* Background layered organically shaped backdrop */}
            <div
              className="absolute -inset-3 sm:-inset-5 rounded-3xl opacity-50 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, #EDE9FF 0%, #F5F3FF 60%, #EDE9FF 100%)',
                transform: 'rotate(-1.5deg)',
                zIndex: 0,
              }}
            />

            {/* Decorative spark on top right */}
            <div
              className="absolute -top-3 -right-1 text-[#5B4BDB] hidden sm:block pointer-events-none"
              style={{ zIndex: 30 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
                  fill="#5B4BDB"
                  opacity="0.8"
                />
              </svg>
            </div>

            {/* Subtle handwritten annotation + arrow */}
            <div
              className="absolute -left-10 sm:-left-12 bottom-12 hidden md:flex flex-col items-center pointer-events-none"
              style={{ zIndex: 25 }}
            >
              <svg width="30" height="38" viewBox="0 0 40 50" fill="none" className="text-[#5B4BDB]">
                <path
                  d="M32 4C24 16 12 28 8 42M8 42L4 34M8 42L15 40"
                  stroke="#5B4BDB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="text-[11px] font-semibold tracking-wide text-[#5B4BDB] italic -rotate-6 whitespace-nowrap mt-0.5"
                style={{ fontFamily: 'cursive, sans-serif' }}
              >
                Internship<br />Experience
              </span>
            </div>

            {/* Central Photo Container */}
            <div
              className="relative z-10 p-2 bg-white rounded-3xl shadow-xl transition-transform duration-300 hover:-translate-y-1"
              style={{
                border: '1.5px solid #E5E7EB',
                boxShadow: '0 16px 36px -12px rgba(91, 75, 219, 0.15), 0 8px 18px -8px rgba(0,0,0,0.05)',
                width: '100%',
                maxWidth: '315px',
              }}
            >
              {/* Photo Frame - with object position centered so face is crystal clear */}
              <div className="overflow-hidden rounded-2xl bg-gray-50 relative">
                <img
                  src="/assets/amrita_first.jpg"
                  alt="Amrita Singh"
                  className="w-full h-[360px] sm:h-[400px] object-cover"
                  style={{
                    objectPosition: 'center 20%',
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}
                />
              </div>

              {/* CARD 1: Edubuk (Floating Top-Left outside frame, away from face) */}
              <motion.div
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.35 }}
                className="absolute -top-3 -left-6 sm:-left-9 bg-white rounded-xl p-2.5 border border-gray-200/90 shadow-md flex items-center justify-between gap-2.5 max-w-[155px]"
                style={{
                  boxShadow: '0 8px 20px -4px rgba(0, 0, 0, 0.08)',
                  zIndex: 20,
                }}
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-4 h-4 rounded-full bg-[#EDE9FF] flex items-center justify-center text-[9px] text-[#5B4BDB] font-bold">
                      🌀
                    </span>
                    <span className="text-[11px] font-bold text-gray-900 leading-none">
                      Edubuk
                    </span>
                  </div>
                  <p className="text-[9.5px] text-gray-500 font-medium leading-tight">
                    MERN Stack <br />Developer Intern
                  </p>
                </div>
                <ArrowUpRight size={13} className="text-[#5B4BDB] flex-shrink-0" />
              </motion.div>

              {/* CARD 2: Veenero (Floating Mid-Left outside frame, well below head level) */}
              <motion.div
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.36, duration: 0.35 }}
                className="absolute top-24 -left-6 sm:-left-9 bg-white rounded-xl p-2.5 border border-gray-200/90 shadow-md flex items-center justify-between gap-2.5 max-w-[155px]"
                style={{
                  boxShadow: '0 8px 20px -4px rgba(0, 0, 0, 0.08)',
                  zIndex: 20,
                }}
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-4 h-4 rounded-md bg-[#5B4BDB] flex items-center justify-center text-[9px] text-white font-extrabold">
                      V
                    </span>
                    <span className="text-[11px] font-bold text-gray-900 leading-none">
                      Veenero
                    </span>
                  </div>
                  <p className="text-[9.5px] text-gray-500 font-medium leading-tight">
                    Full Stack <br />Developer Intern
                  </p>
                </div>
                <ArrowUpRight size={13} className="text-[#5B4BDB] flex-shrink-0" />
              </motion.div>

              {/* CARD 3: Currently Learning - MOVED to top-right corner OUTSIDE the frame so FACE is 100% CLEAR */}
              <motion.div
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.42, duration: 0.35 }}
                className="absolute -top-4 -right-6 sm:-right-10 bg-white rounded-xl p-2.5 border border-gray-200/90 shadow-md min-w-[135px]"
                style={{
                  boxShadow: '0 10px 22px -5px rgba(0, 0, 0, 0.08)',
                  zIndex: 20,
                }}
              >
                <div className="flex items-center gap-1 mb-1.5 text-[#5B4BDB]">
                  <Sparkles size={11} />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-gray-900">
                    Currently Learning
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                    <span className="w-3 h-3 rounded-full bg-black text-white flex items-center justify-center text-[7px] font-bold">N</span>
                    <span className="text-[10px]">Next.js</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                    <span className="w-3 h-3 rounded bg-[#3178C6] text-white flex items-center justify-center text-[6px] font-bold">TS</span>
                    <span className="text-[10px]">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                    <span className="text-[#5B4BDB] text-[10px]">⬡</span>
                    <span className="text-[10px]">System Design</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                    <span className="text-gray-500 text-[9px] font-mono">&lt;/&gt;</span>
                    <span className="text-[10px]">DSA (Java)</span>
                  </div>
                </div>
              </motion.div>

              {/* CARD 4: Bottom Quote Callout (Right-bottom corner, safely below body) */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.35 }}
                className="absolute -bottom-4 -right-4 sm:-right-7 bg-white rounded-xl p-2.5 sm:p-3 border border-gray-200/90 shadow-md flex items-start gap-2 max-w-[210px]"
                style={{
                  boxShadow: '0 10px 22px -5px rgba(0, 0, 0, 0.08)',
                  zIndex: 20,
                }}
              >
                <div
                  className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#EDE9FF', color: '#5B4BDB' }}
                >
                  <Quote size={10} />
                </div>
                <p className="text-[10px] font-medium text-gray-600 leading-snug">
                  Building web applications that solve real problems and create real impact.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
