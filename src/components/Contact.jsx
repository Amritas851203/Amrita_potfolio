import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container pb-32">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        {/* Left: Contact Info & Visual */}
        <div className="flex-1 w-full">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: -0 }}
            viewport={{ once: true }}
            className="heading-hero mb-8"
          >
            Let's Build Your <span className="text-brand-primary">Ecosystem</span>
          </motion.h2>
          
          <div className="space-y-6 mb-12 text-left">
            {[
              { icon: <Mail />, text: 'amritasingh38381@gmail.com' },
              { icon: <MapPin />, text: 'Delhi, India' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 text-paragraph hover:text-white transition-colors"
              >
                <div className="text-brand-primary p-3 bg-brand-primary/10 rounded-xl">
                  {item.icon}
                </div>
                <span className="text-lg font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Visual Asset (MANDATORY) */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative hidden md:block"
          >
            <img 
              src="/assets/amrita.jpg" 
              alt="Amrita Singh" 
              className="rounded-3xl glow-shadow h-[300px] w-full object-cover grayscale opacity-50"
            />
          </motion.div>
        </div>

        {/* Right: Premium Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full glass-card p-10"
        >
          <form className="space-y-6 text-left">
            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-widest text-brand-secondary/70">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-widest text-brand-secondary/70">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-widest text-brand-secondary/70">Message</label>
              <textarea 
                rows="4" 
                placeholder="How can we build the future?" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-primary outline-none transition-all resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3">
              <Send size={20} /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
