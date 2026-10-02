import React from 'react';
import { Sparkles, Cpu, Compass, TrendingUp, CheckCircle, GraduationCap, Briefcase, Users } from 'lucide-react';
import { PERSONAL_INFO, STATS, EDUCATION, EXPERIENCES, DESIGN_PHILOSOPHY, SKILL_TAGS } from '../data/portfolioData';

interface AboutMeProps {
  onContact: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = () => {
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
            Pioneering Intelligence through <span className="text-[#FFB800]">Data & Code</span>
          </h2>
          <p className="text-base sm:text-lg text-[#525252] leading-relaxed">
            {PERSONAL_INFO.bio}
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

        {/* Education & Experience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <div className="bg-white p-8 rounded-3xl border border-[#E5E0D6] shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#FFB800]/15 text-[#B27B00] flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-[#1A1A1A]">Education</h3>
                <p className="text-xs text-[#737373]">Academic background & qualifications</p>
              </div>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((item, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-[#FFB800]/40 pb-2">
                  <div className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-[#FFB800] border-2 border-white" />
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-bold text-sm sm:text-base text-[#1A1A1A]">{item.degree}</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FBF9F5] text-xs font-semibold text-[#B27B00] border border-[#E5E0D6] shrink-0">
                      {item.score}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[#525252] mb-1">{item.institution} • {item.period}</p>
                  {item.details && <p className="text-xs text-[#737373]">{item.details}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Internships & Work Experience */}
          <div className="bg-white p-8 rounded-3xl border border-[#E5E0D6] shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] text-[#FFB800] flex items-center justify-center font-bold">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-[#1A1A1A]">Internships & Leadership</h3>
                <p className="text-xs text-[#737373]">Professional experience & community leadership</p>
              </div>
            </div>

            <div className="space-y-6 max-h-[460px] overflow-y-auto pr-2 scrollbar-thin">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-[#1A1A1A]/30 pb-2">
                  <div className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-[#1A1A1A] border-2 border-white" />
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-bold text-sm sm:text-base text-[#1A1A1A]">{exp.role}</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#1A1A1A] text-white text-[10px] font-bold tracking-wide uppercase shrink-0">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#B27B00] mb-2">{exp.organization} ({exp.period})</p>
                  <ul className="space-y-1">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className="text-xs text-[#525252] leading-relaxed flex items-start gap-1.5">
                        <span className="text-[#FFB800] text-sm leading-none mt-0.5">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Philosophy Grid */}
        <div className="mb-16">
          <h3 className="font-display font-bold text-2xl text-[#1A1A1A] mb-8">
            Technical Philosophy & Engineering Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DESIGN_PHILOSOPHY.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-7 rounded-3xl border border-[#E5E0D6] shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FBF9F5] border border-[#E5E0D6] flex items-center justify-center text-[#FFB800] mb-5">
                    {idx === 0 && <Cpu className="w-5 h-5 text-[#B27B00]" />}
                    {idx === 1 && <Compass className="w-5 h-5 text-[#B27B00]" />}
                    {idx === 2 && <Users className="w-5 h-5 text-[#B27B00]" />}
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
              Technical Stack & Specialized Skills
            </h3>
            <p className="text-sm text-[#525252]">
              Proficient across Python, Machine Learning, Data Analytics, Full-Stack Web Development, Databases, and AI Automation tools.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 flex-1 lg:justify-end">
            {SKILL_TAGS.map((skill, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF9F5] border border-[#E5E0D6] text-xs font-semibold text-[#1A1A1A]"
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
