import React, { useState } from 'react';
import { ArrowUpRight, Eye, ExternalLink, Github } from 'lucide-react';
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
    <section id="projects" className="py-20 md:py-28 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#B27B00] mb-3">Selected Work</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight">
              Projects I've built
            </h2>
          </div>
          <p className="text-sm text-[#525252] max-w-sm leading-relaxed">
            ML models, full-stack apps, and data platforms — each solving a specific, real problem.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap border ${
                activeCategory === cat
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                  : 'bg-white text-[#525252] border-[#E5E0D6] hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-xl border border-[#EAE6DF] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image — no floating badges, clean */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F4F1EB]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Year pill — clean, top-right */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 rounded-md bg-white/90 text-[#1A1A1A] text-[11px] font-semibold">
                    {project.year}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1A1A1A]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-[#1A1A1A] text-xs font-bold shadow-md">
                    <Eye className="w-3.5 h-3.5 text-[#FFB800]" />
                    View Case Study
                  </span>
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FFB800] text-[#1A1A1A] text-xs font-bold shadow-md hover:bg-[#E5A93B]"
                    >
                      Live Site
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A3A3A3]">
                    {project.client}
                  </span>
                  <span className="text-[11px] font-semibold text-[#B27B00]">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#1A1A1A] group-hover:text-[#B27B00] transition-colors mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-[#525252] line-clamp-2 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-[#F0ECE4] flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-[#F4F1EB] text-[11px] font-medium text-[#525252]"
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
                        className="text-xs font-semibold text-[#B27B00] hover:text-[#1A1A1A] transition-colors flex items-center gap-1"
                      >
                        Live
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <ArrowUpRight className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#FFB800] transition-colors" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

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
