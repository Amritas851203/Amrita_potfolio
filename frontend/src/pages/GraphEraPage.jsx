import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Palette, Layout, BadgeCheck, PencilLine,
  Zap, DollarSign, Award, Target, Instagram, MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GraphEraPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { title: 'Graphic Design', icon: <Palette style={{ color: '#DB4BAA' }} size={22} />, desc: 'Stunning visuals, logos, and marketing materials tailored to your brand.' },
    { title: 'Website Development', icon: <Layout style={{ color: '#5B4BDB' }} size={22} />, desc: 'Premium, responsive websites that convert visitors into customers.' },
    { title: 'Branding', icon: <BadgeCheck style={{ color: '#0A66C2' }} size={22} />, desc: 'Solid identity and branding strategies for startups and individuals.' },
    { title: 'Academic Projects', icon: <PencilLine style={{ color: '#E55555' }} size={22} />, desc: 'Professional assistance with UI design and frontend development for college projects.' },
  ];

  const whyUs = [
    { title: 'Fast Delivery', icon: <Zap style={{ color: '#D97706' }} size={22} />, desc: 'We value your time and deliver high-quality work within deadlines.' },
    { title: 'Affordable', icon: <DollarSign style={{ color: '#059669' }} size={22} />, desc: 'Get premium services at student-friendly and startup-friendly prices.' },
    { title: 'High Quality', icon: <Award style={{ color: '#EA580C' }} size={22} />, desc: 'Our designs and code meet the highest industry standards.' },
    { title: 'Client Focused', icon: <Target style={{ color: '#DC2626' }} size={22} />, desc: 'Your vision is our priority. We iterate until you are satisfied.' },
  ];

  const workPreview = [
    'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1581291518062-c13f8acd439c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="section-container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-12 group transition-colors font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Section 1: HERO */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-left"
          >
            <span className="section-label">Creative Agency</span>
            <h1 className="heading-hero mt-4 mb-5">
              Graph<span style={{ color: '#DB4BAA' }}>Era</span>
            </h1>
            <h2 className="text-xl text-gray-600 font-semibold mb-5">Creative Digital Agency</h2>
            <p className="text-paragraph max-w-xl">
              GraphEra is a creative agency delivering high-end design, branding, and web solutions
              for clients and students.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div
              className="w-52 h-52 md:w-64 md:h-64 rounded-3xl overflow-hidden border"
              style={{ borderColor: '#E5E7EB', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}
            >
              <img
                src="/assets/graphera_logo.png"
                alt="GraphEra Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Section 2: SERVICES */}
        <div className="mb-24">
          <h2 className="heading-section mb-10 text-center">
            Our <span style={{ color: '#DB4BAA' }}>Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="card"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}
                >
                  {service.icon}
                </div>
                <h3 className="text-base text-gray-900 mb-2" style={{ fontWeight: 700 }}>
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: WHY GRAPHERA */}
        <div className="mb-24">
          <h2 className="heading-section mb-10 text-center">
            Why <span style={{ color: '#DB4BAA' }}>Choose Us?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="card text-center"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 mx-auto"
                  style={{ backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}
                >
                  {item.icon}
                </div>
                <h3 className="text-base text-gray-900 mb-2" style={{ fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 4: WORK PREVIEW */}
        <div className="mb-24">
          <h2 className="heading-section mb-10 text-center">
            <span style={{ color: '#DB4BAA' }}>Creative</span> Showcase
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workPreview.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="rounded-2xl overflow-hidden h-56 group"
                style={{ border: '1px solid #E5E7EB' }}
              >
                <img
                  src={img}
                  alt="GraphEra Work"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 5: CONNECT */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label">Work With Us</span>
          <h2 className="heading-section mt-4 mb-4">
            Work with <span style={{ color: '#DB4BAA' }}>GraphEra</span>
          </h2>
          <p className="text-paragraph mb-10">
            Whether it's a student project or a corporate identity, we bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/thegraphera"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl border font-semibold text-sm transition-all hover:border-pink-400 hover:text-pink-600 hover:bg-pink-50"
              style={{ border: '1.5px solid #E5E7EB', color: '#374151' }}
            >
              <Instagram size={20} /> Instagram
            </a>
            <a
              href="https://chat.whatsapp.com/K6iQEn1acOIDtLBXsebSgh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl border font-semibold text-sm transition-all hover:border-green-500 hover:text-green-600 hover:bg-green-50"
              style={{ border: '1.5px solid #E5E7EB', color: '#374151' }}
            >
              <MessageCircle size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphEraPage;
