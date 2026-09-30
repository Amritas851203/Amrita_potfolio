import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, MessageCircle, Github, Linkedin, Instagram, Twitter, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const contactMethods = [
    {
      label: 'Email',
      value: 'amritasingh38381@gmail.com',
      href: 'mailto:amritasingh38381@gmail.com',
      icon: <Mail size={18} />,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/amrita-singh-579262331',
      href: 'https://www.linkedin.com/in/amrita-singh-579262331/',
      icon: <Linkedin size={18} />,
    },
    {
      label: 'GitHub',
      value: 'github.com/Amritas851203',
      href: 'https://github.com/Amritas851203',
      icon: <Github size={18} />,
    },
    {
      label: 'WhatsApp',
      value: '+91 8512031847',
      href: 'https://wa.me/918512031847?text=Hi%20Amrita%2C%20I%20saw%20your%20portfolio',
      icon: <MessageCircle size={18} />,
    },
    {
      label: 'Instagram',
      value: '@amrita_singh.leads',
      href: 'https://www.instagram.com/amrita_singh.leads',
      icon: <Instagram size={18} />,
    },
    {
      label: 'X (Twitter)',
      value: '@Amrita8512',
      href: 'https://x.com/Amrita8512',
      icon: <Twitter size={18} />,
    },
  ];

  return (
    <section
      id="contact"
      className="section-container section-alt scroll-mt-20"
      style={{ paddingTop: '1.75rem' }}
    >
      <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
        {/* Left: Info */}
        <div className="flex-1 w-full text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <span className="section-label">Get in Touch</span>
            <h2 className="heading-section mt-3 mb-4">
              Let's Connect &{' '}
              <span style={{ color: '#5B4BDB' }}>Collaborate</span>
            </h2>
            <p className="text-paragraph mb-8 max-w-md">
              Whether you're looking to discuss full-time roles, internships, freelance projects, or tech community initiatives, I'm always open to connecting.
            </p>
          </motion.div>

          {/* Contact Direct Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {contactMethods.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.35 }}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-gray-200 hover:border-[#5B4BDB]/40 hover:shadow-sm transition-all group"
              >
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 transition-colors group-hover:bg-[#5B4BDB] group-hover:text-white"
                  style={{ backgroundColor: '#EDE9FF', color: '#5B4BDB' }}
                >
                  {item.icon}
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-gray-800 truncate block group-hover:text-[#5B4BDB] transition-colors">
                    {item.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <MapPin size={16} className="text-[#5B4BDB]" />
            <span>Based in <strong>Delhi, India</strong> · Open to remote & on-site opportunities</span>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="hidden lg:block w-full"
          >
            <img
              src="/assets/amrita_last.jpg"
              alt="Amrita Singh"
              className="rounded-2xl w-full h-[220px] object-cover"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}
            />
          </motion.div>
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.45 }}
          className="flex-1 w-full"
        >
          <div
            className="bg-white rounded-2xl p-6 sm:p-7"
            style={{ border: '1px solid #E5E7EB', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}
          >
            <h3
              className="text-lg text-gray-900 mb-1.5"
              style={{ fontWeight: 700 }}
            >
              Send a Direct Message
            </h3>
            <p className="text-xs text-gray-400 mb-5">
              Fill in your details below and I will respond to your email promptly.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl bg-green-50 border border-green-200 text-center"
              >
                <CheckCircle2 size={32} className="mx-auto text-green-600 mb-2" />
                <h4 className="text-sm font-bold text-green-800">Message Received!</h4>
                <p className="text-xs text-green-700 mt-1">
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div>
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Message</label>
                  <textarea
                    rows="3"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share a brief overview of your inquiry or opportunity..."
                    className="form-input resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full mt-1"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* ── Quick Info Strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28, duration: 0.4 }}
            className="mt-3"
          >
            {/* Availability + response row */}
            <div className="flex items-center justify-between flex-wrap gap-2 px-1 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-semibold text-gray-600">Available for opportunities</span>
              </div>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                ⚡ Responds within <strong className="text-gray-600 ml-0.5">24 hours</strong>
              </span>
            </div>

            {/* 3 stat chips - increased size */}
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { emoji: '🎓', value: '9.3', label: 'CGPA' },
                { emoji: '💼', value: '2+', label: 'Internships' },
                { emoji: '🚀', value: '3+', label: 'Projects' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center py-2.5 px-1.5 rounded-xl"
                  style={{ backgroundColor: '#F8F7FF', border: '1px solid rgba(91,75,219,0.1)' }}
                >
                  <span className="text-lg leading-none mb-1">{s.emoji}</span>
                  <span className="text-base font-extrabold leading-tight" style={{ color: '#5B4BDB' }}>{s.value}</span>
                  <span className="text-[10.5px] text-gray-400 font-medium leading-none">{s.label}</span>
                </div>
              ))}
            </div>

            {/* ── Why Work With Me ── */}
            <div className="mt-3.5 pt-3 border-t border-gray-100">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                Why Work With Me
              </p>
              <div className="space-y-2 text-[13px] sm:text-[13.5px] text-gray-600">
                <div className="flex items-center gap-2">
                  <span>⚡</span>
                  <span>Fast learner — adapts quickly to new tech stacks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🎯</span>
                  <span>Detail-oriented with clean, maintainable code</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🤝</span>
                  <span>Team player with strong communication skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🚀</span>
                  <span>Passionate about building impactful products</span>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
