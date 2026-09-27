import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech — Information Technology',
      yearStage: '3rd Year',
      institution: 'GGSIPU',
      scoreLabel: 'CGPA',
      scoreValue: '9.3',
      isHighlight: true,
      icon: <GraduationCap size={22} />,
      detail: 'Pursuing core Information Technology curriculum with emphasis on full-stack development, software engineering, and database systems.',
    },
    {
      degree: 'Class 12 — Senior Secondary',
      yearStage: 'Science Stream',
      institution: 'CBSE Board',
      scoreLabel: 'Score',
      scoreValue: '82%',
      isHighlight: false,
      icon: <Award size={22} />,
      detail: 'Completed senior secondary education with focus on Mathematics, Physics, and Computer Science foundation.',
    },
    {
      degree: 'Class 10 — Secondary School',
      yearStage: 'All Subjects',
      institution: 'CBSE Board',
      scoreLabel: 'Score',
      scoreValue: '91.6%',
      isHighlight: false,
      icon: <BookOpen size={22} />,
      detail: 'Completed secondary schooling with academic distinction and consistent performance across all coursework.',
    },
  ];

  return (
    <section id="education" className="section-container scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <span className="section-label">Education</span>
        <h2 className="heading-section mt-2 mb-2">
          Academic <span style={{ color: '#5B4BDB' }}>Background</span>
        </h2>
        <p className="text-paragraph max-w-xl">
          Strong academic track record combining computer science foundations with hands-on software development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className={`card flex flex-col justify-between ${
              edu.isHighlight ? 'ring-1 ring-[#5B4BDB]/30 bg-gradient-to-b from-white to-[#FAF9FF]' : ''
            }`}
            style={{ padding: '1.5rem' }}
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0"
                  style={{
                    backgroundColor: edu.isHighlight ? '#EDE9FF' : '#F3F4F6',
                    color: edu.isHighlight ? '#5B4BDB' : '#374151',
                  }}
                >
                  {edu.icon}
                </div>

                {/* Score Badge */}
                <div
                  className="px-3 py-1 rounded-lg text-right"
                  style={{
                    backgroundColor: edu.isHighlight ? '#EDE9FF' : '#F9FAFB',
                    border: edu.isHighlight ? '1px solid #DDD6FE' : '1px solid #E5E7EB',
                  }}
                >
                  <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider leading-none">
                    {edu.scoreLabel}
                  </span>
                  <span
                    className={`text-base font-extrabold leading-tight block mt-0.5 ${
                      edu.isHighlight ? 'text-[#5B4BDB]' : 'text-gray-900'
                    }`}
                  >
                    {edu.scoreValue}
                  </span>
                </div>
              </div>

              <h3
                className="text-base text-gray-900 leading-snug mb-1"
                style={{ fontWeight: 700 }}
              >
                {edu.degree}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-[#5B4BDB]">
                  {edu.institution}
                </span>
                <span className="text-gray-300">·</span>
                <span className="text-xs text-gray-500 font-medium">
                  {edu.yearStage}
                </span>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                {edu.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
