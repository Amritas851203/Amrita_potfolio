import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section-container min-h-screen flex items-center pt-32">
      <div className="flex flex-col md:flex-row items-center gap-12 w-full">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-primary font-medium tracking-widest uppercase mb-4"
          >
            Frontend Developer | Aspiring Full Stack Developer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-hero mb-6"
          >
            Hi, I'm <span className="text-brand-secondary">Amrita Singh</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-paragraph mb-8 max-w-lg"
          >
            Building modern web experiences with clean UI and scalable systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button className="btn-primary">View My Work</button>
            <button className="btn-secondary">Contact Me</button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          className="flex-1 relative"
        >
          <div className="relative z-10 w-full h-[400px] md:h-[500px]">
            <img 
              src="/assets/amrita_first.jpg" 
              alt="Amrita Singh" 
              className="rounded-3xl glow-shadow w-full h-full object-cover"
            />
          </div>
          {/* Background Decorative Glow */}
          <div className="absolute -inset-4 bg-brand-primary/20 blur-3xl -z-10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
