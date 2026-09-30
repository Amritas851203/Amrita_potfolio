import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, Send, Heart } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Amritas851203', icon: <Github size={16} /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amrita-singh-579262331/', icon: <Linkedin size={16} /> },
    { label: 'Twitter (X)', href: 'https://x.com/Amrita8512', icon: <Twitter size={16} /> },
    { label: 'Instagram', href: 'https://www.instagram.com/amrita_singh.leads', icon: <Instagram size={16} /> },
  ];

  const tags = ['MERN Stack', 'React', 'Next.js', 'Web Development'];

  return (
    <footer style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #1a1040 50%, #0f0c29 100%)', position: 'relative', overflow: 'hidden' }}>

      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '-60px', left: '-60px',
        width: '260px', height: '260px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(91,75,219,0.25) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-40px', right: '15%',
        width: '200px', height: '200px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,110,245,0.20) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '30%', right: '-30px',
        width: '140px', height: '140px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(91,75,219,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-black text-white mb-2 tracking-tight">
              Amrit<span style={{ color: '#7C6EF5' }}>a.</span>
            </div>
            <p className="text-sm mb-4" style={{ color: '#a0aec0', lineHeight: '1.6' }}>
              Building modern web experiences with clean UI and scalable systems.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1"
                  style={{ backgroundColor: 'rgba(91,75,219,0.18)', color: '#a78bfa', border: '1px solid rgba(91,75,219,0.3)' }}
                >
                  <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#7C6EF5', display: 'inline-block' }} />
                  {tag}
                </span>
              ))}
            </div>

            {/* Social icon circles */}
            <div className="flex gap-3">
              {[
                { href: 'https://github.com/Amritas851203', icon: <Github size={15} /> },
                { href: 'https://www.linkedin.com/in/amrita-singh-579262331/', icon: <Linkedin size={15} /> },
                { href: 'https://x.com/Amrita8512', icon: <Twitter size={15} /> },
                { href: 'https://www.instagram.com/amrita_singh.leads', icon: <Instagram size={15} /> },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full transition-all hover:scale-110"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    color: '#cbd5e0',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(91,75,219,0.4)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#cbd5e0'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: '#a0aec0' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = '#a0aec0'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Social */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 tracking-wide">Social</h4>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 text-sm transition-colors"
                    style={{ color: '#a0aec0' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = '#a0aec0'}
                  >
                    <span style={{ color: '#7C6EF5' }}>{s.icon}</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-white mb-2 tracking-wide">Let's Stay Connected</h4>
            <p className="text-sm mb-5" style={{ color: '#a0aec0', lineHeight: '1.6' }}>
              Get in touch for opportunities, collaborations or just to say hi! 💜
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div
                className="flex items-center gap-2 flex-1 px-3 py-2 rounded-xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <Mail size={14} style={{ color: '#7C6EF5', flexShrink: 0 }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-transparent text-sm outline-none w-full"
                  style={{ color: '#fff' }}
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #5B4BDB 0%, #7C6EF5 100%)' }}
              >
                {subscribed ? 'Sent!' : (<><span>Subscribe</span> <Send size={13} /></>)}
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 mb-6" style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#718096' }}>
            © 2026 Amrita Singh. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs" style={{ color: '#718096' }}>
            <Heart size={12} style={{ color: '#7C6EF5', fill: '#7C6EF5' }} />
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
