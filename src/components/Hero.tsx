import React from 'react';
import { 
  ArrowRight, 
  Briefcase, 
  Linkedin, 
  Github,
  Instagram, 
  Mail,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onHireMe: () => void;
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onHireMe, onExplorePortfolio }) => {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Minimal background tint */}
      <div 
        className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#F5F2EB] to-transparent pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col items-start text-left">
            
            {/* Location line */}
            <div className="flex items-center gap-2 text-sm text-[#737373] mb-5">
              <MapPin className="w-4 h-4 text-[#FFB800] shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
              <span className="mx-1 text-[#D4D0C8]">·</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-emerald-700 font-medium">Open to opportunities</span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 
              id="hero-heading"
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-[#1A1A1A] tracking-tight leading-[1.06] mb-5"
            >
              Hi, I'm{' '}
              <span className="text-[#FFB800]">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Role line */}
            <p className="text-lg sm:text-xl font-semibold text-[#3A3A3A] mb-5">
              {PERSONAL_INFO.title}
            </p>

            {/* Short bio */}
            <p className="text-base sm:text-lg text-[#525252] leading-relaxed max-w-xl mb-8">
              B.Tech CSE student at UCEK building ML models, data dashboards, and full-stack AI apps.
              Currently interning at DCube AI Solutions. Active in Unstop, IEDC, MuLearn, and IEEE.
            </p>

            {/* Edu credential — clean row, no stars */}
            <div 
              id="hero-social-proof-badge"
              className="flex items-center gap-3 p-3 bg-white border border-[#EBE6DC] rounded-xl shadow-xs mb-8"
            >
              <div className="w-9 h-9 rounded-lg bg-[#FFB800]/15 flex items-center justify-center">
                <GraduationCap className="w-4.5 h-4.5 text-[#B27B00]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]">{PERSONAL_INFO.rating}</p>
                <p className="text-xs text-[#737373]">{PERSONAL_INFO.reviewsCount}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                id="hero-portfolio-btn"
                onClick={onExplorePortfolio}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-md active:scale-95 group"
              >
                <span>See My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              <button
                id="hero-hire-me-btn"
                onClick={onHireMe}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FFB800] text-[#1A1A1A] hover:bg-[#E5A93B] text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-md active:scale-95"
              >
                <Briefcase className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-medium text-[#A3A3A3] mr-1">Find me on</span>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-linkedin"
                aria-label="Amarnath Sujith on LinkedIn"
                className="w-9 h-9 rounded-lg bg-white border border-[#E5E0D6] flex items-center justify-center text-[#525252] hover:text-[#1A1A1A] hover:border-[#FFB800] transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-github"
                aria-label="Amarnath Sujith on GitHub"
                className="w-9 h-9 rounded-lg bg-white border border-[#E5E0D6] flex items-center justify-center text-[#525252] hover:text-[#1A1A1A] hover:border-[#FFB800] transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="hero-social-email"
                aria-label="Email Amarnath Sujith"
                className="w-9 h-9 rounded-lg bg-white border border-[#E5E0D6] flex items-center justify-center text-[#525252] hover:text-[#FFB800] hover:border-[#FFB800] transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-instagram"
                aria-label="Amarnath Sujith on Instagram"
                className="w-9 h-9 rounded-lg bg-white border border-[#E5E0D6] flex items-center justify-center text-[#525252] hover:text-[#E4405F] hover:border-[#E4405F] transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

          </div>



        </div>
      </div>
    </section>
  );
};
