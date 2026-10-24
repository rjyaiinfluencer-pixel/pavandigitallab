import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { APP_CONFIG, getGeneralWhatsAppUrl } from '../data/config';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isServiceDetailOpen?: boolean;
  onBackToHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  isServiceDetailOpen,
  onBackToHome,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Our Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'profile', label: 'My Profile' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (isServiceDetailOpen && onBackToHome) {
      onBackToHome();
      setTimeout(() => {
        onNavigate(id);
      }, 100);
    } else {
      onNavigate(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06452D]/95 backdrop-blur-md border-b border-[#35B978]/30 py-3.5 shadow-md shadow-[#032D1D]/50'
          : 'bg-[#06452D] py-4 border-b border-[#35B978]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48C987] rounded-lg"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#48C987] to-[#35B978] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <div className="w-full h-full bg-[#06452D] rounded-[7px] flex items-center justify-center font-bold text-[#FFFFFF] text-sm tracking-wider">
                PDL
              </div>
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight text-[#FFFFFF] whitespace-nowrap shrink-0 block">
                PAVAN <span className="text-[#48C987]">DIGITAL</span> LAB
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links - White text with bright green highlight */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeSection === item.id && !isServiceDetailOpen;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors whitespace-nowrap shrink-0 text-left py-1 relative ${
                    isActive
                      ? 'text-[#48C987] font-semibold'
                      : 'text-[#FFFFFF]/90 hover:text-[#FFFFFF]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#48C987] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: WhatsApp Enquiry Button in Bright Green with Dark Forest Green Text */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#06452D] bg-[#48C987] hover:bg-[#35B978] rounded-lg shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <span>Enquire on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#06452D]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#FFFFFF] hover:bg-[#032D1D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48C987]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#48C987]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border border-[#35B978]/40 bg-[#06452D]/98 backdrop-blur-xl rounded-2xl px-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2 py-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#032D1D] text-[#48C987] font-semibold'
                      : 'text-[#FFFFFF]/90 hover:text-[#FFFFFF] hover:bg-[#032D1D]/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 mt-1 border-t border-[#35B978]/30">
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-[#06452D] bg-[#48C987] hover:bg-[#35B978] rounded-lg shadow-sm"
                >
                  <span>Chat on WhatsApp ({APP_CONFIG.whatsappNumber})</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#06452D]" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
