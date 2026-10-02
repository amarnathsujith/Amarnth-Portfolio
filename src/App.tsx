import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import { Blogs } from './components/Blogs';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Data Science & Machine Learning');

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    const element = document.getElementById('contact');
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

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
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
    <div className="min-h-screen bg-[#FBF9F5] text-[#1A1A1A] flex flex-col selection:bg-[#FFB800]/30 selection:text-[#1A1A1A]">
      {/* Sticky Top Navigation */}
      <Navbar onOpenContact={() => scrollToContact()} />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero 
          onHireMe={() => scrollToContact()}
          onExplorePortfolio={scrollToProjects}
        />

        {/* 2. Services Section: How I Bring Ideas to Life */}
        <Services 
          onSelectService={(serviceName) => scrollToContact(serviceName)}
        />

        {/* 3. Projects / Portfolio Showcase */}
        <Projects 
          onContact={() => scrollToContact()}
        />

        {/* 4. About Me & Design Philosophy */}
        <AboutMe 
          onContact={() => scrollToContact()}
        />

        {/* 5. Blogs / Insights Section */}
        <Blogs />

        {/* 6. Social Proof & Testimonials */}
        <Testimonials />

        {/* 7. Contact / Let's Talk Section */}
        <ContactSection 
          key={selectedService}
          initialService={selectedService}
        />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => scrollToContact()} />
    </div>
  );
}
