import React from 'react';
import { X, ExternalLink, Sparkles, CheckCircle, ArrowRight, ShieldCheck, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onContact }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-[#FBF9F5] text-[#1A1A1A] rounded-3xl shadow-2xl border border-[#E5E0D6] overflow-hidden max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE6DF] bg-white">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#EFECE6] text-xs font-semibold text-[#525252]">
              {project.category}
            </span>
            <span className="text-xs font-medium text-[#737373]">
              • {project.year} Case Study
            </span>
          </div>
          <button
            id="modal-close-btn"
            onClick={onClose}
            aria-label="Close case study details"
            className="w-9 h-9 rounded-full bg-[#EFECE6] hover:bg-[#1A1A1A] hover:text-white transition-colors flex items-center justify-center text-[#525252]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Project Header Info */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
              <h2 
                id="case-study-title"
                className="font-display font-extrabold text-2xl sm:text-3xl text-[#1A1A1A]"
              >
                {project.title}
              </h2>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB800]/15 text-[#B27B00] border border-[#FFB800]/40 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>{project.impactMetric}</span>
              </div>
            </div>
            <p className="text-xs font-semibold text-[#737373] uppercase tracking-wider mb-4">
              Client: {project.client}
            </p>
            <p className="text-base text-[#525252] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Hero Banner Image */}
          <div className="rounded-2xl overflow-hidden aspect-16/9 bg-[#1A1A1A] relative shadow-md">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-[#EAE6DF] shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-600 mb-2 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>The Core Challenge</span>
              </div>
              <p className="text-sm text-[#525252] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#EAE6DF] shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-600 mb-2 font-bold">
                <Layers className="w-4 h-4" />
                <span>Design Strategy & Solution</span>
              </div>
              <p className="text-sm text-[#525252] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features & Craft Highlights */}
          <div className="p-6 rounded-2xl bg-[#EFECE6]/60 border border-[#E2DDD2]">
            <h3 className="font-display font-bold text-lg text-[#1A1A1A] mb-4">
              Key Design Interventions & Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#262626]">
                  <CheckCircle className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 rounded-full bg-white border border-[#E5E0D6] text-xs font-medium text-[#525252]"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 bg-white border-t border-[#EAE6DF] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#737373]">
            Need a similar product design system or mobile interface?
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onContact();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFB800] text-[#1A1A1A] hover:bg-[#E5A93B] font-bold text-xs sm:text-sm transition-all shadow-xs"
            >
              <span>Build Something Similar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
