import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Filter, Eye, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

interface ProjectsProps {
  onContact: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Web & AI', 'Data Science & ML', 'Predictive Analytics', 'Full Stack'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE6] border border-[#E2DDD2] text-[#B27B00] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
              <span>Selected Projects</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight leading-tight">
              Featured <span className="text-[#FFB800]">Technical Projects</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#525252] max-w-md leading-relaxed">
            Real-world software platforms and data models. Each project represents a synthesis of analytical precision, machine learning algorithms, and functional web design.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1 bg-[#EFECE6] rounded-full border border-[#E5E0D6]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#1A1A1A] text-white shadow-xs'
                    : 'text-[#525252] hover:text-[#1A1A1A] hover:bg-[#E5E0D6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-3xl border border-[#EAE6DF] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#1A1A1A]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Impact Metric Floating Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 rounded-full bg-[#1A1A1A]/85 backdrop-blur-md text-[#FFB800] text-xs font-bold border border-white/10 shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    {project.impactMetric}
                  </span>
                </div>

                {/* Category & Year Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1A1A1A] text-xs font-semibold shadow-xs">
                    {project.year}
                  </span>
                </div>

                {/* Overlay hover prompt */}
                <div className="absolute inset-0 bg-[#1A1A1A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#1A1A1A] text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-3.5 h-3.5 text-[#FFB800]" />
                    <span>Explore Details</span>
                  </span>
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFB800] text-[#1A1A1A] hover:bg-[#E5A93B] text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#737373]">
                      {project.client}
                    </span>
                    <span className="text-xs font-semibold text-[#B27B00]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1A1A] group-hover:text-[#B27B00] transition-colors line-clamp-1 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#525252] line-clamp-2 mb-5 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Tags and CTA link */}
                <div className="pt-4 border-t border-[#F0ECE4] flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-[#F4F1EB] text-[11px] font-medium text-[#525252]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFB800]/15 text-[#B27B00] hover:bg-[#FFB800] hover:text-[#1A1A1A] text-xs font-bold transition-all"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <div className="flex items-center gap-1 text-xs font-bold text-[#1A1A1A] group-hover:text-[#FFB800] transition-colors">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onContact={onContact}
        />
      )}
    </section>
  );
};
