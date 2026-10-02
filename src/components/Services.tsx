import React, { useState } from 'react';
import { 
  ChevronDown, 
  Layers, 
  Layout, 
  Smartphone, 
  GitBranch, 
  Palette, 
  Check, 
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  // Default first service open
  const [openServiceId, setOpenServiceId] = useState<string>('ui-ux');

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'ui-ux':
        return <Layers className="w-5 h-5" />;
      case 'web-design':
        return <Layout className="w-5 h-5" />;
      case 'mobile-app':
        return <Smartphone className="w-5 h-5" />;
      case 'wireframing':
        return <GitBranch className="w-5 h-5" />;
      case 'design-systems':
        return <Palette className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const toggleAccordion = (id: string) => {
    setOpenServiceId(prev => (prev === id ? '' : id));
  };

  return (
    <section 
      id="services" 
      className="py-20 md:py-28 bg-[#1A1A1A] text-white relative overflow-hidden"
    >
      {/* Background accents */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFB800]/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#FFB800]/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#FFB800] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Services & Expertise</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              How I Bring <span className="text-[#FFB800]">Ideas to Life</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A3A3A3] max-w-md leading-relaxed">
            A comprehensive, battle-tested design workflow spanning rapid conceptual wireframing, high-impact aesthetic systems, and scalable design token architectures.
          </p>
        </div>

        {/* Interactive Accordion List */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {SERVICES.map((service: ServiceItem) => {
            const isOpen = openServiceId === service.id;
            return (
              <div 
                key={service.id}
                id={`service-item-${service.id}`}
                className={`transition-colors duration-300 ${
                  isOpen ? 'bg-white/5' : 'hover:bg-white/[0.02]'
                }`}
              >
                {/* Accordion Header / Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(service.id)}
                  aria-expanded={isOpen}
                  aria-controls={`service-content-${service.id}`}
                  className="w-full py-7 px-4 sm:px-6 flex items-center justify-between text-left focus:outline-hidden group cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-8 min-w-0 pr-4">
                    {/* Number Badge */}
                    <span className="font-mono text-sm font-semibold text-[#FFB800]/80 tracking-widest shrink-0">
                      {service.number}
                    </span>

                    {/* Icon container */}
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-[#FFB800] text-[#1A1A1A] shadow-md shadow-[#FFB800]/20' 
                        : 'bg-white/10 text-[#FFB800] group-hover:bg-white/15'
                    }`}>
                      {getServiceIcon(service.id)}
                    </div>

                    {/* Title & Subtitle */}
                    <div className="min-w-0">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#FFB800] transition-colors truncate">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A3A3A3] line-clamp-1 mt-0.5 font-normal">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Arrow Indicator */}
                  <div className="shrink-0 flex items-center gap-3">
                    <span className="hidden lg:inline text-xs font-mono text-[#A3A3A3]">
                      {service.timeline}
                    </span>
                    <div className={`w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#FFB800] text-[#1A1A1A] border-[#FFB800]' : 'text-white/80 group-hover:border-white/50'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Accordion Expandable Content */}
                {isOpen && (
                  <div 
                    id={`service-content-${service.id}`}
                    className="px-4 sm:px-6 pb-8 pt-2 animate-in fade-in duration-300"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-white/10">
                      
                      {/* Detailed Description */}
                      <div className="lg:col-span-6 flex flex-col justify-between">
                        <div>
                          <p className="text-base text-[#D4D4D4] leading-relaxed mb-6 font-normal">
                            {service.description}
                          </p>

                          {service.highlight && (
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-semibold mb-6">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Key Focus: {service.highlight}</span>
                            </div>
                          )}
                        </div>

                        {/* Inquire CTA for this specific service */}
                        <div className="pt-2">
                          <button
                            onClick={() => onSelectService(service.title)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFB800] text-[#1A1A1A] hover:bg-[#E5A93B] font-bold text-xs sm:text-sm tracking-wide transition-transform active:scale-95 group"
                          >
                            <span>Inquire for {service.title}</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>

                      {/* Deliverables Checklist */}
                      <div className="lg:col-span-4 bg-white/[0.03] p-5 rounded-2xl border border-white/10">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3] mb-3">
                          Typical Deliverables
                        </h4>
                        <ul className="space-y-2.5">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E5E5E5]">
                              <div className="w-4 h-4 rounded-full bg-[#FFB800]/20 text-[#FFB800] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Timeline & Tools Info */}
                      <div className="lg:col-span-2 flex flex-col gap-4">
                        <div className="bg-white/[0.03] p-4 rounded-xl border border-white/10">
                          <div className="flex items-center gap-2 text-xs font-mono text-[#A3A3A3] mb-1">
                            <Clock className="w-3.5 h-3.5 text-[#FFB800]" />
                            <span>Timeline</span>
                          </div>
                          <p className="text-sm font-bold text-white">
                            {service.timeline}
                          </p>
                        </div>

                        <div className="bg-white/[0.03] p-4 rounded-xl border border-white/10">
                          <h4 className="text-xs font-mono text-[#A3A3A3] mb-2">
                            Core Tools
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {service.tools.map((tool, idx) => (
                              <span 
                                key={idx} 
                                className="px-2 py-1 rounded-md bg-white/10 text-[11px] font-medium text-white/90"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
