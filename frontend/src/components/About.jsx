import React from 'react';
import { motion } from 'framer-motion';
import { Code, Target, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="scroll-mt-16 pt-10 pb-8 sm:pt-12 sm:pb-8 bg-[#FAFAFA] border-t border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ================= LEFT COLUMN: PHOTO (45% = 5.5 / 5 cols) ================= */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            {/* Layered soft lavender background plate */}
            <div
              className="absolute -inset-2.5 sm:-inset-3.5 rounded-3xl opacity-60 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, #EDE9FF 0%, #F5F3FF 60%, #EDE9FF 100%)',
                transform: 'rotate(-2deg)',
                zIndex: 0,
              }}
            />

            {/* Decorative sketch sparkles on top-left of photo */}
            <div
              className="absolute -top-3.5 -left-2 text-[#5B4BDB] hidden sm:block pointer-events-none"
              style={{ zIndex: 25 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 3C6 6 4 8 2 8M10 5C10 8 9 10 7 11M3 13C5 12 7 12 9 13"
                  stroke="#5B4BDB"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Photo Card Container */}
            <div
              className="relative z-10 w-full max-w-[340px] sm:max-w-[360px] p-2 bg-white rounded-3xl shadow-lg border border-gray-200 transition-transform duration-300 hover:-translate-y-1"
              style={{
                boxShadow: '0 16px 36px -12px rgba(91, 75, 219, 0.12), 0 8px 18px -8px rgba(0,0,0,0.05)',
              }}
            >
              <div className="overflow-hidden rounded-2xl bg-gray-100 relative">
                <img
                  src="/assets/amrita.jpg"
                  alt="Amrita Singh"
                  className="w-full h-[400px] sm:h-[450px] object-cover"
                  style={{
                    objectPosition: 'center 20%',
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}
                />
              </div>

              {/* Floating Badge: Bottom Right */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.2 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 bg-white rounded-2xl p-2.5 sm:p-3 border border-gray-200 shadow-md flex items-center gap-2.5 max-w-[210px]"
                style={{
                  boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.08)',
                  zIndex: 20,
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#EDE9FF', color: '#5B4BDB' }}
                >
                  <Briefcase size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 leading-tight">
                    Frontend Developer
                  </h4>
                  <p className="text-[9.5px] font-semibold text-gray-400 uppercase tracking-wider mt-0.5">
                    ASPIRING FULL STACK ENGINEER
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CONTENT (55% = 7 cols) ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-1">
            {/* 1. Small Pill: ABOUT ME */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3.5"
              style={{
                backgroundColor: '#EDE9FF',
                color: '#5B4BDB',
                letterSpacing: '0.08em',
              }}
            >
              <span>ABOUT ME</span>
            </motion.div>

            {/* 2. Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.4 }}
              className="text-gray-900 tracking-tight mb-4"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
              }}
            >
              Engineering with curiosity, <br />
              <span style={{ color: '#5B4BDB' }}>building with intent.</span>
            </motion.h2>

            {/* 3. Description */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="space-y-2.5 text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-5 max-w-2xl"
            >
              <p>
                I am a <strong>3rd-year B.Tech Information Technology</strong> student at <strong>GGSIPU</strong> with a <strong>9.3 CGPA</strong>, passionate about building reliable, performant, and user-centric web applications.
              </p>
              <p>
                My experience includes a <strong>MERN Stack Developer</strong> internship at <strong>Edubuk</strong> and a <strong>Full Stack Developer</strong> internship at <strong>Veenero</strong>. I enjoy turning ideas into real-world solutions through clean UI, efficient backend systems and modern technologies.
              </p>
            </motion.div>

            {/* 4. Information Cards (Side by Side) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22, duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-4.5"
            >
              {/* Card 1: What I Build */}
              <div className="p-3.5 rounded-xl bg-white border border-gray-200/90 shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5 text-gray-900 font-bold text-xs sm:text-sm">
                  <div className="w-5 h-5 rounded-md bg-[#EDE9FF] flex items-center justify-center text-[#5B4BDB]">
                    <Code size={13} />
                  </div>
                  <span>What I Build</span>
                </div>
                <p className="text-[11.5px] text-gray-500 leading-relaxed">
                  Responsive web apps, clean dashboards, and full-stack MERN platforms with intuitive UX.
                </p>
              </div>

              {/* Card 2: Growth Direction */}
              <div className="p-3.5 rounded-xl bg-white border border-gray-200/90 shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5 text-gray-900 font-bold text-xs sm:text-sm">
                  <div className="w-5 h-5 rounded-md bg-[#EDE9FF] flex items-center justify-center text-[#5B4BDB]">
                    <Target size={13} />
                  </div>
                  <span>Growth Direction</span>
                </div>
                <p className="text-[11.5px] text-gray-500 leading-relaxed">
                  Deepening backend scalability, REST APIs, state architectures, and robust full-stack development practices.
                </p>
              </div>
            </motion.div>

            {/* Core Strengths strip */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-4 w-full"
            >
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Core Strengths</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { num: '01', label: 'Full Stack Development' },
                  { num: '02', label: 'Clean UI & UX' },
                  { num: '03', label: 'Problem Solving' },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-gray-200/90 shadow-2xs"
                  >
                    <span className="text-[10px] font-bold" style={{ color: '#5B4BDB' }}>{item.num}</span>
                    <span className="text-[12px] font-semibold text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Focus areas end cleanly here without duplicate stats and tech stack */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
