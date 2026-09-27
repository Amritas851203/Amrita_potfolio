import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Users, Calendar, Network, Rocket,
  Linkedin, Instagram, MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TechEraPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatWeDo = [
    { title: 'Hackathons', icon: <Rocket style={{ color: '#5B4BDB' }} size={22} />, desc: 'Organizing high-energy coding competitions to solve real-world problems.' },
    { title: 'Tech Events', icon: <Calendar style={{ color: '#0A66C2' }} size={22} />, desc: 'Workshops, seminars, and speaker sessions featuring industry experts.' },
    { title: 'Networking', icon: <Network style={{ color: '#DB4BAA' }} size={22} />, desc: 'Connecting students with mentors, recruiters, and fellow innovators.' },
    { title: 'Skill Building', icon: <Users style={{ color: '#059669' }} size={22} />, desc: 'Hands-on training sessions for the latest technologies and tools.' },
  ];

  const stats = [
    { value: '500+', label: 'Innovators' },
    { value: 'Multiple', label: 'Events' },
    { value: 'Growing', label: 'Community' },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800',
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
            <span className="section-label">Student Community</span>
            <h1 className="heading-hero mt-4 mb-5">
              Tech<span style={{ color: '#5B4BDB' }}>Era</span>
            </h1>
            <h2 className="text-xl text-gray-600 font-semibold mb-5">Student Tech Ecosystem</h2>
            <p className="text-paragraph max-w-xl">
              TechEra is a student-driven tech community focused on empowering students through
              hackathons, events, and real-world opportunities.
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
                src="/assets/techera_logo.png"
                alt="TechEra Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Section 2: WHAT WE DO */}
        <div className="mb-24">
          <h2 className="heading-section mb-10 text-center">
            What <span style={{ color: '#5B4BDB' }}>We Do</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whatWeDo.map((item, idx) => (
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

        {/* Section 3: IMPACT */}
        <div className="mb-24">
          <div
            className="rounded-2xl py-14 px-8"
            style={{ backgroundColor: '#F9F7FF', border: '1px solid #EDE9FF' }}
          >
            <div className="flex flex-col md:flex-row justify-around gap-10 text-center">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <h2
                    className="text-5xl mb-2"
                    style={{ fontWeight: 800, color: '#5B4BDB', letterSpacing: '-0.04em' }}
                  >
                    {stat.value}
                  </h2>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4: GALLERY */}
        <div className="mb-24">
          <h2 className="heading-section mb-10 text-center">
            Community <span style={{ color: '#5B4BDB' }}>Gallery</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((img, idx) => (
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
                  alt="TechEra Community Event"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 5: CONNECT */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label">Join Us</span>
          <h2 className="heading-section mt-4 mb-4">
            Ready to <span style={{ color: '#5B4BDB' }}>Join?</span>
          </h2>
          <p className="text-paragraph mb-10">
            Be part of the next big thing in student innovation. Connect with us on our platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/techeraa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl border font-semibold text-sm transition-all hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-blue-50"
              style={{ border: '1.5px solid #E5E7EB', color: '#374151' }}
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/tech__eraa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl border font-semibold text-sm transition-all hover:border-pink-400 hover:text-pink-600 hover:bg-pink-50"
              style={{ border: '1.5px solid #E5E7EB', color: '#374151' }}
            >
              <Instagram size={20} /> Instagram
            </a>
            <a
              href="https://chat.whatsapp.com/L5i3gkwI7gSErhUivmShMO"
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

export default TechEraPage;
