import React from 'react';
import { 
  Award, 
  Star, 
  ArrowRight, 
  Briefcase, 
  Linkedin, 
  Dribbble, 
  Instagram, 
  Twitter,
  MapPin,
  CheckCircle2,
  Sparkles
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
      {/* Subtle Background Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB800]/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#E5A93B]/8 rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio, Typography, Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tagline Badge */}
            <div 
              id="hero-award-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6] border border-[#E2DDD2] text-[#1A1A1A] text-xs sm:text-sm font-semibold mb-6 shadow-2xs"
            >
              <Award className="w-4 h-4 text-[#E5A93B]" />
              <span>{PERSONAL_INFO.tagline}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
            </div>

            {/* Main Heading */}
            <h1 
              id="hero-heading"
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] tracking-tight leading-[1.08] mb-4"
            >
              I'm <span className="text-[#FFB800] relative inline-block underline decoration-[#FFB800]/40 decoration-wavy decoration-2 underline-offset-8">
                Amarnath Sujith
              </span>
            </h1>

            {/* Subtitle with Location Pin */}
            <div className="flex items-center gap-2 text-lg sm:text-xl font-medium text-[#525252] mb-6">
              <MapPin className="w-5 h-5 text-[#FFB800] shrink-0" />
              <span>{PERSONAL_INFO.title} based in <strong className="text-[#1A1A1A] font-semibold">USA</strong></span>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-[#525252] leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.bio}
            </p>

            {/* Social Proof Badge: 4.9/5 - 350+ Reviews */}
            <div 
              id="hero-social-proof-badge"
              className="flex flex-wrap items-center gap-3 p-3.5 bg-white/80 border border-[#EBE6DC] rounded-2xl shadow-xs mb-8"
            >
              {/* Client Avatars Stack */}
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FBF9F5] object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                  alt="Client Reviewer 1"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FBF9F5] object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Client Reviewer 2"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FBF9F5] object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                  alt="Client Reviewer 3"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FBF9F5] object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Client Reviewer 4"
                />
              </div>

              {/* Rating & Review Info */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                  ))}
                  <span className="text-xs font-bold text-[#1A1A1A] ml-1">
                    {PERSONAL_INFO.rating}
                  </span>
                </div>
                <span className="text-xs font-medium text-[#737373]">
                  {PERSONAL_INFO.reviewsCount}
                </span>
              </div>
            </div>

            {/* Action Buttons: Portfolio & Hire Me */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                id="hero-portfolio-btn"
                onClick={onExplorePortfolio}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] text-sm font-bold tracking-wide shadow-md transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-[#FFB800]/50 active:scale-95 group"
              >
                <span>Portfolio</span>
                <ArrowRight className="w-4 h-4 text-[#FFB800] transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                id="hero-hire-me-btn"
                onClick={onHireMe}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FFB800] text-[#1A1A1A] hover:bg-[#E5A93B] text-sm font-bold tracking-wide shadow-md transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-[#1A1A1A]/20 active:scale-95 group"
              >
                <Briefcase className="w-4 h-4" />
                <span>Hire Me</span>
              </button>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#737373] mr-1">
                Follow:
              </span>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-linkedin"
                aria-label="Amarnath Sujith on LinkedIn"
                className="w-10 h-10 rounded-full bg-white border border-[#E5E0D6] flex items-center justify-center text-[#525252] hover:text-[#1A1A1A] hover:border-[#FFB800] hover:bg-[#FFB800]/10 transition-all duration-200 shadow-2xs hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-dribbble"
                aria-label="Amarnath Sujith on Dribbble"
                className="w-10 h-10 rounded-full bg-white border border-[#E5E0D6] flex items-center justify-center text-[#525252] hover:text-[#EA4C89] hover:border-[#EA4C89] hover:bg-[#EA4C89]/10 transition-all duration-200 shadow-2xs hover:scale-105"
              >
                <Dribbble className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-instagram"
                aria-label="Amarnath Sujith on Instagram"
                className="w-10 h-10 rounded-full bg-white border border-[#E5E0D6] flex items-center justify-center text-[#525252] hover:text-[#E4405F] hover:border-[#E4405F] hover:bg-[#E4405F]/10 transition-all duration-200 shadow-2xs hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-twitter"
                aria-label="Amarnath Sujith on Twitter/X"
                className="w-10 h-10 rounded-full bg-white border border-[#E5E0D6] flex items-center justify-center text-[#525252] hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-all duration-200 shadow-2xs hover:scale-105"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Styled Portrait Showcase Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              
              {/* Backing decorative frame */}
              <div 
                className="absolute inset-0 bg-[#FFB800]/20 rounded-3xl transform rotate-3 transition-transform duration-500 hover:rotate-1"
                aria-hidden="true"
              />
              <div 
                className="absolute inset-0 bg-[#1A1A1A] rounded-3xl transform -rotate-2 transition-transform duration-500 hover:-rotate-1 opacity-10"
                aria-hidden="true"
              />

              {/* Main Portrait Card */}
              <div 
                id="hero-portrait-card"
                className="relative bg-white p-3 sm:p-4 rounded-3xl border border-[#E5E0D6] shadow-xl overflow-hidden"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-4/5 bg-[#EAE5DC]">
                  {/* Portrait photo */}
                  <img
                    src="/assets/profile.jpg"
                    alt="Amarnath Sujith - Product Designer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 filter contrast-105"
                  />

                  {/* Gradient overlay for aesthetic depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-80" />

                  {/* Bottom overlay text on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#FFB800]">
                          Design Director
                        </p>
                        <h3 className="text-lg font-bold font-display text-white">
                          Amarnath Sujith
                        </h3>
                      </div>
                      <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[11px] font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Available Now
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badge 1: 10+ Years Experience */}
                <div 
                  id="hero-badge-experience"
                  className="absolute -top-3 -left-3 sm:-left-5 bg-[#1A1A1A] text-white p-3 rounded-2xl shadow-xl border border-[#333] flex items-center gap-3 animate-in fade-in duration-500"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFB800] text-[#1A1A1A] flex items-center justify-center font-display font-extrabold text-base">
                    10+
                  </div>
                  <div className="pr-1">
                    <p className="text-xs font-bold text-white leading-tight">Years Craft</p>
                    <p className="text-[10px] text-[#A3A3A3]">Product & UX</p>
                  </div>
                </div>

                {/* Floating Metric Badge 2: 140+ Projects Shipped */}
                <div 
                  id="hero-badge-projects"
                  className="absolute -bottom-3 -right-3 sm:-right-4 bg-white text-[#1A1A1A] p-3 rounded-2xl shadow-xl border border-[#E5E0D6] flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] text-[#FFB800] flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold font-display leading-tight text-[#1A1A1A]">140+ Works</p>
                    <p className="text-[10px] text-[#737373] font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 inline" />
                      Shipped to Market
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
