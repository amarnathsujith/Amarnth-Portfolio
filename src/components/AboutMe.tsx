import React from 'react';
import { GraduationCap, Briefcase, CheckCircle, Code } from 'lucide-react';
import { PERSONAL_INFO, STATS, EDUCATION, EXPERIENCES, DESIGN_PHILOSOPHY, SKILL_TAGS } from '../data/portfolioData';

interface AboutMeProps {
  onContact: () => void;
}

// Group skills by category
const SKILL_GROUPS = [
  { label: 'Languages', skills: ['Python', 'SQL', 'JavaScript', 'C', 'C++'] },
  { label: 'ML / Data', skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras', 'XGBoost', 'LightGBM'] },
  { label: 'Visualization', skills: ['Power BI', 'Tableau', 'Matplotlib', 'Excel'] },
  { label: 'Web & Backend', skills: ['React.js', 'Next.js', 'Flask', 'Django', 'HTML/CSS'] },
  { label: 'Databases', skills: ['PostgreSQL', 'MySQL', 'Supabase'] },
  { label: 'AI & Tools', skills: ['Generative AI', 'Computer Vision', 'CNNs', 'AI Agents', 'AutoML', 'Git & GitHub', 'Google Colab'] },
];

export const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#EFECE6]/50 border-y border-[#E5E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Split: Bio Left / Stats Right ──────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

          {/* Left: Bio */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#B27B00] mb-3">About Me</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight mb-6">
              Building with data and code —<br className="hidden sm:block" />
              one problem at a time.
            </h2>
            <div className="space-y-4 text-base text-[#525252] leading-relaxed max-w-2xl">
              <p>
                I'm a third-year Computer Science student at{' '}
                <span className="font-semibold text-[#1A1A1A]">University College of Engineering, Kariavattom (UCEK)</span>,
                focused on applied machine learning, data analytics, and full-stack development.
              </p>
              <p>
                On the technical side, I work across the data stack — from EDA and predictive modelling in Python to interactive dashboards in Power BI, and full-stack apps using React, Next.js, and Supabase.
                I've built real products like{' '}
                <span className="font-semibold text-[#1A1A1A]">Impulse</span> (AI placement prep platform),{' '}
                <span className="font-semibold text-[#1A1A1A]">SafeSchools</span> (evacuation routing system),
                and an insurance cost prediction ML model.
              </p>
              <p>
                Beyond code, I lead communities: President of{' '}
                <span className="font-semibold text-[#1A1A1A]">Unstop Igniters UCEK</span>, ex-CEO of{' '}
                <span className="font-semibold text-[#1A1A1A]">Legacy IEDC</span>, ex-Campus Lead at{' '}
                <span className="font-semibold text-[#1A1A1A]">MuLearn</span>, and ex-Technical Co-Lead at{' '}
                <span className="font-semibold text-[#1A1A1A]">IEEE SBC UCEK</span>.
              </p>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 content-start">
            {STATS.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white p-5 rounded-xl border border-[#E5E0D6] shadow-2xs"
              >
                <div className="font-display font-extrabold text-3xl text-[#FFB800] mb-1">
                  {stat.value}
                </div>
                <p className="text-sm font-semibold text-[#1A1A1A] mb-0.5">{stat.label}</p>
                <p className="text-[11px] text-[#737373] leading-snug">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Education & Experience Timeline ────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

          {/* Education */}
          <div className="bg-white p-8 rounded-2xl border border-[#E5E0D6]">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-lg bg-[#FFB800]/15 flex items-center justify-center">
                <GraduationCap className="w-4.5 h-4.5 text-[#B27B00]" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#1A1A1A]">Education</h3>
            </div>

            <div className="space-y-7">
              {EDUCATION.map((item, idx) => (
                <div key={idx} className="relative pl-5 border-l-2 border-[#FFB800]/30">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#FFB800]" />
                  <div className="flex items-start justify-between gap-2 mb-0.5">
                    <h4 className="font-semibold text-sm text-[#1A1A1A] leading-snug">{item.degree}</h4>
                    <span className="px-2 py-0.5 rounded bg-[#FBF9F5] text-[11px] font-semibold text-[#B27B00] border border-[#E5E0D6] shrink-0">
                      {item.score}
                    </span>
                  </div>
                  <p className="text-xs text-[#737373]">{item.institution} · {item.period}</p>
                  {item.details && <p className="text-xs text-[#A3A3A3] mt-1">{item.details}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white p-8 rounded-2xl border border-[#E5E0D6]">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-lg bg-[#1A1A1A] flex items-center justify-center">
                <Briefcase className="w-4.5 h-4.5 text-[#FFB800]" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#1A1A1A]">Experience & Leadership</h3>
            </div>

            <div className="space-y-7 max-h-[460px] overflow-y-auto pr-1">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-5 border-l-2 border-[#E5E0D6]">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#1A1A1A]" />
                  <div className="flex items-start justify-between gap-2 mb-0.5">
                    <h4 className="font-semibold text-sm text-[#1A1A1A] leading-snug">{exp.role}</h4>
                    <span className="px-2 py-0.5 rounded bg-[#1A1A1A] text-white text-[10px] font-bold uppercase tracking-wide shrink-0">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[#B27B00] mb-1.5">{exp.organization} · {exp.period}</p>
                  <ul className="space-y-1">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className="text-xs text-[#525252] leading-relaxed flex items-start gap-1.5">
                        <span className="text-[#FFB800] mt-0.5 shrink-0">·</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Skills Grid ─────────────────────────────────────── */}
        <div className="bg-white p-8 rounded-2xl border border-[#E5E0D6]">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-9 h-9 rounded-lg bg-[#FBF9F5] border border-[#E5E0D6] flex items-center justify-center">
              <Code className="w-4.5 h-4.5 text-[#B27B00]" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-[#1A1A1A]">Technical Skills</h3>
              <p className="text-xs text-[#737373]">What I actually use day-to-day</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {SKILL_GROUPS.map((group, gIdx) => (
              <div key={gIdx}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A3A3A3] mb-2.5">{group.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-[#F4F1EB] text-xs font-medium text-[#3A3A3A] border border-[#E8E4DA]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
