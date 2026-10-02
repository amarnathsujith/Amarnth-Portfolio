import React from 'react';
import { X, Clock, Calendar, Share2, Sparkles } from 'lucide-react';
import { BlogItem } from '../types';

interface BlogModalProps {
  blog: BlogItem | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
    >
      <div 
        className="relative w-full max-w-3xl bg-[#FBF9F5] text-[#1A1A1A] rounded-3xl shadow-2xl border border-[#E5E0D6] overflow-hidden max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE6DF] bg-white">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#EFECE6] text-xs font-semibold text-[#525252]">
              {blog.category}
            </span>
            <span className="text-xs font-medium text-[#737373]">
              • {blog.readTime}
            </span>
          </div>
          <button
            id="blog-modal-close-btn"
            onClick={onClose}
            aria-label="Close article reader"
            className="w-9 h-9 rounded-full bg-[#EFECE6] hover:bg-[#1A1A1A] hover:text-white transition-colors flex items-center justify-center text-[#525252]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div>
            <h2 
              id="blog-modal-title"
              className="font-display font-extrabold text-2xl sm:text-3xl text-[#1A1A1A] mb-4 leading-snug"
            >
              {blog.title}
            </h2>

            <div className="flex items-center gap-4 text-xs font-medium text-[#737373] pb-4 border-b border-[#EAE6DF]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {blog.readTime}
              </span>
              <span>By {blog.author}</span>
            </div>
          </div>

          {/* Cover image */}
          <div className="rounded-2xl overflow-hidden aspect-16/9 bg-[#1A1A1A]">
            <img 
              src={blog.coverImage} 
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article paragraphs */}
          <div className="space-y-4 text-base text-[#404040] leading-relaxed pt-2">
            {blog.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Takeaway Box */}
          <div className="p-6 rounded-2xl bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#1A1A1A]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B27B00] mb-2">
              <Sparkles className="w-4 h-4 text-[#FFB800]" />
              <span>Core Takeaway</span>
            </div>
            <p className="text-sm font-medium italic text-[#262626]">
              "Great design isn't about making everything frictionless; it's about matching friction to the gravity of the decision being made."
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white border-t border-[#EAE6DF] flex items-center justify-between">
          <span className="text-xs text-[#737373]">
            Published by Amarnath Sujith • Design Insights
          </span>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: blog.title, text: blog.summary, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Article link copied to clipboard!");
              }
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EFECE6] hover:bg-[#1A1A1A] hover:text-white text-xs font-semibold text-[#525252] transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>

      </div>
    </div>
  );
};
