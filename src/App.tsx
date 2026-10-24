/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { ProfileSection } from './components/ProfileSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { SERVICES_DATA } from './data/services';
import { ServiceItem, ProjectItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Sync hash routing for service detail pages: #service/<slug>
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#service/')) {
        const slug = hash.replace('#service/', '');
        const found = SERVICES_DATA.find((s) => s.slug === slug);
        if (found) {
          setSelectedService(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      } else if (hash.startsWith('#')) {
        const sectionId = hash.replace('#', '');
        if (['home', 'services', 'projects', 'about', 'contact', 'profile'].includes(sectionId)) {
          setSelectedService(null);
          setActiveSection(sectionId);
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    if (selectedService) return;

    const sections = ['home', 'services', 'projects', 'about', 'contact', 'profile'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedService]);

  const handleNavigate = (sectionId: string) => {
    setSelectedService(null);
    setActiveSection(sectionId);
    window.location.hash = `#${sectionId}`;

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    window.location.hash = `#service/${service.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToServices = () => {
    setSelectedService(null);
    window.location.hash = '#services';
    setTimeout(() => {
      const el = document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedService(null);
    setSelectedProject(project);
    window.location.hash = '#projects';
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#06452D] text-[#FFFFFF] flex flex-col font-sans selection:bg-[#48C987] selection:text-[#06452D]">
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isServiceDetailOpen={!!selectedService}
        onBackToHome={() => setSelectedService(null)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {selectedService ? (
          /* Dedicated Service Detail Page */
          <ServiceDetailPage
            service={selectedService}
            onBack={handleBackToServices}
            onSelectProject={handleSelectProject}
          />
        ) : (
          /* Full Agency Homepage */
          <>
            <div id="home">
              <Hero
                onExploreServices={() => handleNavigate('services')}
                onViewProjects={() => handleNavigate('projects')}
              />
            </div>

            <ServicesSection onSelectService={handleSelectService} />

            <PortfolioSection
              selectedProject={selectedProject}
              onClearSelectedProject={() => setSelectedProject(null)}
            />

            <AboutSection />

            {/* Profile Section immediately before the footer */}
            <ProfileSection />

            <ContactSection />
          </>
        )}
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectService={handleSelectService}
      />
    </div>
  );
}
