import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Sparkles, 
  Clock, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService || 'Data Science & Machine Learning');
  const [budget, setBudget] = useState('Full-Time Role');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = ['Full-Time Role', 'Internship', 'Project / Freelance', 'Advisory'];
  const serviceOptions = [
    'Data Science & Machine Learning',
    'Full-Stack Web & AI Applications',
    'Data Visualization & BI Dashboards',
    'Generative AI & AI Agents',
    'Technical Leadership & Mentorship',
    'Other Opportunities'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE6] border border-[#E2DDD2] text-[#B27B00] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight leading-tight mb-4">
            Have a project in mind? <span className="text-[#FFB800]">Let's Talk.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#525252] leading-relaxed">
            Whether you are launching a greenfield venture, scaling an established product, or rethinking your design system architecture, I'm here to bring precision and clarity to your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Availability Box */}
            <div className="p-6 rounded-3xl bg-white border border-[#EAE6DF] shadow-xs">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Current Status
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-[#1A1A1A] mb-1">
                Available for New Projects
              </h3>
              <p className="text-xs text-[#737373] leading-relaxed">
                Accepting select design leadership engagements and multi-week product sprints for 2026.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="contact-direct-email"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#EAE6DF] hover:border-[#FFB800] hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FBF9F5] border border-[#E5E0D6] flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#FFB800] group-hover:text-[#1A1A1A] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#737373] font-medium uppercase tracking-wider">Email Address</p>
                  <p className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#FFB800] transition-colors">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                id="contact-direct-phone"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#EAE6DF] hover:border-[#FFB800] hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FBF9F5] border border-[#E5E0D6] flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#FFB800] group-hover:text-[#1A1A1A] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#737373] font-medium uppercase tracking-wider">Direct Line</p>
                  <p className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#FFB800] transition-colors">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#EAE6DF]">
                <div className="w-12 h-12 rounded-xl bg-[#FBF9F5] border border-[#E5E0D6] flex items-center justify-center text-[#1A1A1A]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#737373] font-medium uppercase tracking-wider">Location</p>
                  <p className="text-sm font-bold text-[#1A1A1A]">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="p-4 rounded-2xl bg-[#EFECE6]/70 border border-[#E5E0D6] flex items-center gap-3 text-xs text-[#525252]">
              <Clock className="w-4 h-4 text-[#FFB800] shrink-0" />
              <span>Typical initial response time: <strong>Within 12-24 hours</strong>.</span>
            </div>

          </div>

          {/* Right Column: Interactive Proposal & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-[#EAE6DF] shadow-md relative">
              {isSubmitted ? (
                <div className="py-12 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#FFB800]/20 text-[#1A1A1A] mx-auto flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-[#FFB800]" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1A1A1A] mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#525252] max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <strong>{name || 'Friend'}</strong>. I have received your project inquiry regarding <strong>{service}</strong> and will reach back out to you at <strong>{email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] text-xs font-bold transition-all"
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Elena Fisher"
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#E5E0D6] focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/30 text-sm text-[#1A1A1A] placeholder-[#A3A3A3] outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#E5E0D6] focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/30 text-sm text-[#1A1A1A] placeholder-[#A3A3A3] outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-2">
                      Primary Service Required
                    </label>
                    <select
                      id="contact-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#E5E0D6] focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/30 text-sm text-[#1A1A1A] outline-hidden transition-all"
                    >
                      {serviceOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-2">
                      Engagement / Opportunity Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {budgetOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setBudget(opt)}
                          className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all text-center ${
                            budget === opt
                              ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-2xs'
                              : 'bg-[#FBF9F5] text-[#525252] border-[#E5E0D6] hover:border-[#FFB800]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-2">
                      Project Goals & Context *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your product, timeline, current blockers, or target launch dates..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#E5E0D6] focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/30 text-sm text-[#1A1A1A] placeholder-[#A3A3A3] outline-hidden transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] hover:shadow-lg hover:ring-2 hover:ring-[#FFB800]/50 font-bold text-sm tracking-wide transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting Inquiry...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#FFB800] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        <span>Send Project Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#737373]">
                    Your privacy is guaranteed. Non-disclosure agreements (NDAs) signed prior to project kickoff.
                  </p>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
