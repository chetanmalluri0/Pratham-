import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isTalkModalOpen, setIsTalkModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sticky Top Navigation Bar */}
      <Navbar onOpenTalkModal={() => setIsTalkModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenTalkModal={() => setIsTalkModalOpen(true)} />

        {/* 2. Featured Projects Slider & Grid */}
        <ProjectsSection />

        {/* 3. Services Offered */}
        <ServicesSection onOpenTalkModal={() => setIsTalkModalOpen(true)} />

        {/* 4. About Section */}
        <AboutSection onOpenTalkModal={() => setIsTalkModalOpen(true)} />

        {/* 5. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Booking / "Let's Talk" Modal */}
      <ContactModal
        isOpen={isTalkModalOpen}
        onClose={() => setIsTalkModalOpen(false)}
      />
    </div>
  );
}
