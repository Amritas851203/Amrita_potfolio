import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Calendar, Network, Rocket, Linkedin, Instagram, MessageCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechEraPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatWeDo = [
    { title: 'Hackathons', icon: <Rocket className="text-purple-400" />, desc: 'Organizing high-energy coding competitions to solve real-world problems.' },
    { title: 'Tech Events', icon: <Calendar className="text-blue-400" />, desc: 'Workshops, seminars, and speaker sessions featuring industry experts.' },
    { title: 'Networking', icon: <Network className="text-pink-400" />, desc: 'Connecting students with mentors, recruiters, and fellow innovators.' },
    { title: 'Skill Building', icon: <Users className="text-cyan-400" />, desc: 'Hands-on training sessions for the latest technologies and tools.' }
  ];

  const stats = [
    { value: '500+', label: 'Innovators' },
    { value: 'Multiple', label: 'Events' },
    { value: 'Growing', label: 'Community' }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800'
  ];

  return (
    <div className="pt-24 pb-20 bg-brand-darker min-h-screen">
      <div className="section-container">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-12 group transition-colors"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Section 1: HERO */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">TechEra</span>
            </h1>
            <h2 className="text-2xl text-white/80 font-semibold mb-6">Student Tech Ecosystem</h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              TechEra is a student-driven tech community focused on empowering students through hackathons, events, and real-world opportunities.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-[80px] animate-pulse" />
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/10 p-2 relative z-10">
              <img 
                src="/assets/techera_logo.png" 
                alt="TechEra Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Section 2: WHAT WE DO */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What <span className="text-purple-400">We Do</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: IMPACT */}
        <div className="mb-32">
          <div className="glass-card py-16 px-8 flex flex-col md:flex-row justify-around gap-12 text-center border-purple-500/10">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <h2 className="text-5xl font-bold text-white mb-2">{stat.value}</h2>
                <p className="text-purple-400 font-semibold tracking-widest uppercase text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: GALLERY */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Community <span className="text-purple-400">Gallery</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-3xl overflow-hidden glass-card p-0 border-white/5 h-64 group"
              >
                <img 
                  src={img} 
                  alt="Hackathon Collaboration" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 5: CONNECT */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to <span className="text-purple-400">Join Us?</span></h2>
          <p className="text-gray-400 mb-12 text-lg">Be part of the next big thing in student innovation. Connect with us on our platforms.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://www.linkedin.com/company/techeraa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-[#0077b5] text-white px-8 py-4 rounded-xl border border-white/10 transition-all font-semibold"
            >
              <Linkedin size={24} /> LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/tech__eraa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white px-8 py-4 rounded-xl border border-white/10 transition-all font-semibold"
            >
              <Instagram size={24} /> Instagram
            </a>
            <a 
              href="https://chat.whatsapp.com/L5i3gkwI7gSErhUivmShMO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-[#25D366] text-white px-8 py-4 rounded-xl border border-white/10 transition-all font-semibold"
            >
              <MessageCircle size={24} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechEraPage;
