import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { BLOGS } from '../data/portfolioData';
import { BlogItem } from '../types';
import { BlogModal } from './BlogModal';

export const Blogs: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  return (
    <section id="blogs" className="py-20 md:py-28 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#B27B00] mb-3">Writing</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight">
              Things I've written about
            </h2>
          </div>
          <p className="text-sm text-[#525252] max-w-sm leading-relaxed">
            Notes on ML experiments, project breakdowns, and what I've learned building with data and code.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {BLOGS.map((blog) => (
            <article
              key={blog.id}
              id={`blog-card-${blog.id}`}
              onClick={() => setSelectedBlog(blog)}
              className="group bg-white rounded-xl border border-[#EAE6DF] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Cover Image — no floating badge */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#F4F1EB]">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Category chip — one, clean */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-white text-[#1A1A1A] text-[11px] font-semibold shadow-xs">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-[#A3A3A3] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {blog.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {blog.readTime}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#1A1A1A] group-hover:text-[#B27B00] transition-colors leading-snug mb-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-[#525252] line-clamp-3 leading-relaxed mb-5 flex-1">
                  {blog.summary}
                </p>

                <div className="pt-4 border-t border-[#F0ECE4] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#737373]">Read article</span>
                  <div className="w-7 h-7 rounded-lg bg-[#F4F1EB] group-hover:bg-[#FFB800] flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-[#1A1A1A] transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {selectedBlog && (
        <BlogModal
          blog={selectedBlog}
          onClose={() => setSelectedBlog(null)}
        />
      )}
    </section>
  );
};
