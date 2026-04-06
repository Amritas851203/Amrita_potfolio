import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Connections', value: '500+', icon: <Users size={20}/> },
    { label: 'Internship', value: 'Experience', icon: <Zap size={20}/> },
    { label: 'Community', value: 'Leadership', icon: <Target size={20}/> }
  ];

  return (
    <section id="about" className="section-container">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        {/* Left: Professional Image */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="flex-1 w-full"
        >
          <div className="relative group">
            <img 
              src="/assets/amrita.jpg" 
              alt="Amrita Singh" 
              className="rounded-3xl glow-shadow h-[500px] w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute -bottom-6 -right-6 glass-card p-6 border-brand-primary/50">
              <span className="text-4xl font-bold text-brand-primary tracking-tighter">Passion</span>
              <p className="text-white font-medium uppercase tracking-widest text-sm">Frontend Developer</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Structured Bio */}
        <div className="flex-1 text-left">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="heading-hero mb-8"
          >
            Professional <span className="text-brand-primary">Background</span>
          </motion.h2>
          
          <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
          >
            <p className="text-paragraph mb-12">
              Passionate frontend developer with hands-on experience in building responsive and scalable web applications. Currently working as a MERN stack intern and actively contributing to tech communities and startups.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {stats.map((stat, index) => (
                <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 + (index * 0.1) }}
                   className="glass-card flex flex-col items-center justify-center text-center p-6 border-white/5"
                >
                   <div className="text-brand-primary mb-3">{stat.icon}</div>
                   <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                   <div className="text-xs uppercase font-bold text-brand-secondary/70 tracking-widest mt-1">{stat.label}</div>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
