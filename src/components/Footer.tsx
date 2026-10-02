import React from 'react';
import { ArrowUp, Heart, Linkedin, Dribbble, Instagram, Twitter, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'About Me', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <footer className="bg-[#141414] text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Top Banner Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFB800] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Build Something Remarkable</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Ready to elevate your digital experience?
            </h3>
          </div>
          <button
            onClick={onOpenContact}
            className="px-8 py-4 rounded-full bg-[#FFB800] text-[#1A1A1A] hover:bg-[#E5A93B] font-bold text-sm tracking-wide shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 shrink-0"
          >
            Start a Conversation
          </button>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FFB800] text-[#1A1A1A] flex items-center justify-center font-display font-extrabold text-xs">
                AS
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-sm text-[#A3A3A3] max-w-sm leading-relaxed">
              {PERSONAL_INFO.title}. Crafting high-converting, empathetic interfaces for market-leading digital companies worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#FFB800] hover:text-[#1A1A1A] text-white/80 border border-white/10 flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble portfolio"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#EA4C89] hover:text-white text-white/80 border border-white/10 flex items-center justify-center transition-all"
              >
                <Dribbble className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E4405F] hover:text-white text-white/80 border border-white/10 flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter profile"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#1DA1F2] hover:text-white text-white/80 border border-white/10 flex items-center justify-center transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#D4D4D4] hover:text-[#FFB800] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Quick details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
              Base & Contact
            </h4>
            <p className="text-sm text-[#D4D4D4]">
              {PERSONAL_INFO.location}
            </p>
            <p className="text-sm font-semibold text-[#FFB800]">
              {PERSONAL_INFO.email}
            </p>
            <p className="text-xs text-[#737373]">
              Response within 24h guaranteed.
            </p>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Crafted with care & precision.
          </p>

          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            aria-label="Scroll back to top"
            className="flex items-center gap-2 text-[#A3A3A3] hover:text-[#FFB800] transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#FFB800] group-hover:text-[#1A1A1A] flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
