import React, { useState } from 'react';
import { Sparkles, ArrowRight, Clock, Calendar } from 'lucide-react';
import { BLOGS } from '../data/portfolioData';
import { BlogItem } from '../types';
import { BlogModal } from './BlogModal';

export const Blogs: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  return (
    <section id="blogs" className="py-20 md:py-28 bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE6] border border-[#E2DDD2] text-[#B27B00] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
              <span>Thought Leadership & Articles</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight leading-tight">
              Design <span className="text-[#FFB800]">Perspectives</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#525252] max-w-md leading-relaxed">
            Essays on product design strategy, multi-platform design systems, cognitive ergonomics, and the evolving frontier of AI-native user interfaces.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
            <article
              key={blog.id}
              id={`blog-card-${blog.id}`}
              onClick={() => setSelectedBlog(blog)}
              className="group bg-white rounded-3xl border border-[#EAE6DF] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
            >
              {/* Cover Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#1A1A1A]">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#1A1A1A]/80 backdrop-blur-md text-[#FFB800] text-xs font-bold border border-white/10 shadow-xs">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#737373] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {blog.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#1A1A1A] group-hover:text-[#B27B00] transition-colors leading-snug mb-3">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-[#525252] line-clamp-3 leading-relaxed font-normal mb-6">
                    {blog.summary}
                  </p>
                </div>

                {/* Read more footer */}
                <div className="pt-4 border-t border-[#F0ECE4] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#737373]">
                    Read Full Article
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F4F1EB] group-hover:bg-[#FFB800] group-hover:text-[#1A1A1A] text-[#1A1A1A] flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {selectedBlog && (
        <BlogModal
          blog={selectedBlog}
          onClose={() => setSelectedBlog(null)}
        />
      )}
    </section>
  );
};
