import React from 'react';
import { Sparkles, Heart, Compass, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, STATS, DESIGN_PHILOSOPHY, SKILL_TAGS } from '../data/portfolioData';

interface AboutMeProps {
  onContact: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onContact }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#EFECE6]/50 border-y border-[#E5E0D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2DDD2] text-[#B27B00] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>About Amarnath Sujith</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight leading-tight mb-6">
            Designing at the Crossroads of <span className="text-[#FFB800]">Behavior & Craft</span>
          </h2>
          <p className="text-base sm:text-lg text-[#525252] leading-relaxed">
            I believe that the most impactful products are those that feel so natural, the interface almost dissolves. Over the past decade, I've partnered with seed-stage innovators and global Fortune 500 enterprises to turn complex algorithmic architectures into delightfully human products.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#E5E0D6] shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#1A1A1A] mb-1">
                <span className="text-[#FFB800]">{stat.value}</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#1A1A1A] mb-0.5">
                {stat.label}
              </p>
              <p className="text-[11px] text-[#737373]">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Design Philosophy Grid */}
        <div className="mb-16">
          <h3 className="font-display font-bold text-2xl text-[#1A1A1A] mb-8">
            My Design Philosophy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DESIGN_PHILOSOPHY.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-7 rounded-3xl border border-[#E5E0D6] shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FBF9F5] border border-[#E5E0D6] flex items-center justify-center text-[#FFB800] mb-5">
                    {idx === 0 && <Heart className="w-5 h-5 fill-[#FFB800]/20 text-[#B27B00]" />}
                    {idx === 1 && <Compass className="w-5 h-5 text-[#B27B00]" />}
                    {idx === 2 && <TrendingUp className="w-5 h-5 text-[#B27B00]" />}
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#1A1A1A] mb-2.5">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#525252] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Tools Pills */}
        <div className="bg-white p-8 rounded-3xl border border-[#E5E0D6] shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-md">
            <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-2">
              Capabilities & Specialized Toolkit
            </h3>
            <p className="text-sm text-[#525252]">
              Hands-on mastery from exploratory ethnographic research through design token governance and production-ready React component specs.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 flex-1 lg:justify-end">
            {SKILL_TAGS.map((skill, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FBF9F5] border border-[#E5E0D6] text-xs font-semibold text-[#1A1A1A]"
              >
                <CheckCircle className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
