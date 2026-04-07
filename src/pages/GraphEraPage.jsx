import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Palette, Layout, BadgeCheck, PencilLine, Zap, DollarSign, Award, Target, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const GraphEraPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { title: 'Graphic Design', icon: <Palette className="text-pink-400" />, desc: 'Stunning visuals, logos, and marketing materials tailored to your brand.' },
    { title: 'Website Development', icon: <Layout className="text-purple-400" />, desc: 'Premium, responsive websites that convert visitors into customers.' },
    { title: 'Branding', icon: <BadgeCheck className="text-blue-400" />, desc: 'Solid identity and branding strategies for startups and individuals.' },
    { title: 'Academic Projects', icon: <PencilLine className="text-rose-400" />, desc: 'Professional assistance with UI design and frontend development for college projects.' }
  ];

  const whyUs = [
    { title: 'Fast Delivery', icon: <Zap className="text-yellow-400" />, desc: 'We value your time and deliver high-quality work within deadlines.' },
    { title: 'Affordable', icon: <DollarSign className="text-green-400" />, desc: 'Get premium services at student-friendly and startup-friendly prices.' },
    { title: 'High Quality', icon: <Award className="text-orange-400" />, desc: 'Our designs and code meet the highest industry standards.' },
    { title: 'Client Focused', icon: <Target className="text-red-400" />, desc: 'Your vision is our priority. We iterate until you are satisfied.' }
  ];

  const workPreview = [
    'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1581291518062-c13f8acd439c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=800'
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">GraphEra</span>
            </h1>
            <h2 className="text-2xl text-white/80 font-semibold mb-6">Creative Digital Agency</h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              GraphEra is a creative agency delivering high-end design, branding, and web solutions for clients and students.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-rose-500/20 rounded-full blur-[80px] animate-pulse" />
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/10 p-2 relative z-10 overflow-hidden">
              <img 
                src="/assets/graphera_logo.png" 
                alt="GraphEra Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Section 2: SERVICES */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-rose-400">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: WHY GRAPHERA */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why <span className="text-rose-400">Choose Us?</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-rose-500/30 transition-colors"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 4: WORK PREVIEW */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"><span className="text-rose-400">Creative</span> Showcase</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workPreview.map((img, idx) => (
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
                  alt="Work Example" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 5: CONNECT */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Work with <span className="text-rose-400">GraphEra</span></h2>
          <p className="text-gray-400 mb-12 text-lg">Whether it's a student project or a corporate identity, we bring your ideas to life.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://www.instagram.com/thegraphera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white px-8 py-4 rounded-xl border border-white/10 transition-all font-semibold"
            >
              <Instagram size={24} /> Instagram
            </a>
            <a 
              href="https://chat.whatsapp.com/K6iQEn1acOIDtLBXsebSgh" 
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

export default GraphEraPage;
