import React from 'react';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, PERSONAL_INFO } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div 
        className="absolute bottom-0 right-10 w-96 h-96 bg-[#FFB800]/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#FFB800] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Social Proof & Endorsements</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Trusted by <span className="text-[#FFB800]">Visionary Leaders</span>
            </h2>
          </div>

          {/* Rating Summary Block */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 shrink-0">
            <div className="text-right">
              <div className="flex items-center gap-1 justify-end">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>
              <p className="text-sm font-extrabold text-white mt-1">
                {PERSONAL_INFO.rating} / 5.0
              </p>
              <p className="text-[11px] text-[#A3A3A3]">
                {PERSONAL_INFO.reviewsCount}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              id={`testimonial-${testimonial.id}`}
              className="bg-white/[0.03] hover:bg-white/[0.05] p-7 sm:p-8 rounded-3xl border border-white/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#FFB800]/40" />
                </div>

                {/* Quote Text */}
                <p className="text-base sm:text-lg text-[#E5E5E5] leading-relaxed italic mb-8 font-normal">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.clientName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#FFB800]/60 shrink-0"
                  />
                  <div>
                    <h3 className="font-display font-bold text-sm sm:text-base text-white flex items-center gap-1.5">
                      {testimonial.clientName}
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB800]" />
                    </h3>
                    <p className="text-xs text-[#A3A3A3]">
                      {testimonial.role}, <span className="text-[#E5E5E5]">{testimonial.company}</span>
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono text-[#D4D4D4]">
                  {testimonial.projectType}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
