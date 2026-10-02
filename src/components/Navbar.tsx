import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'services', 'projects', 'blogs', 'about', 'testimonials'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'About Me', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF9F5]/90 backdrop-blur-md shadow-xs border-b border-[#EAE6DF]/80 py-3.5'
          : 'bg-[#FBF9F5]/60 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#EFECE6]/80 p-1.5 rounded-full border border-[#E5E0D6] shadow-2xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#1A1A1A] text-white shadow-xs'
                      : 'text-[#525252] hover:text-[#1A1A1A] hover:bg-[#E5E0D6]/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk CTA */}
          <div className="flex items-center gap-3 ml-auto md:ml-0">
            <button
              id="nav-lets-talk-btn"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-md hover:ring-2 hover:ring-[#FFB800]/50 active:scale-95 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800] transition-transform group-hover:rotate-12" />
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FFB800]" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="nav-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-lg text-[#1A1A1A] hover:bg-[#EFECE6] transition-colors focus:outline-hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-b border-[#EAE6DF] bg-[#FBF9F5] px-6 py-5 shadow-lg animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 text-sm font-semibold rounded-lg text-[#262626] hover:bg-[#EFECE6] hover:text-[#1A1A1A] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#A3A3A3] text-xs">→</span>
              </a>
            ))}
            <div className="pt-3 border-t border-[#EAE6DF] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-full bg-[#FFB800] text-[#1A1A1A] font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-xs"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let's Talk — Start a Project</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
