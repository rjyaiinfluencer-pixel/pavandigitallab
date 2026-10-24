import React from 'react';
import { ArrowUp, Instagram, MessageCircle, Mail } from 'lucide-react';
import { APP_CONFIG, getGeneralWhatsAppUrl } from '../data/config';
import { SERVICES_DATA } from '../data/services';
import { ServiceItem } from '../types';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#032D1D] border-t border-[#B8E8C8]/30 text-left pt-16 pb-12 relative overflow-hidden">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#35B978]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#48C987] p-[1.5px] shadow-[0_0_12px_rgba(72,201,135,0.3)]">
                <div className="w-full h-full bg-[#06452D] rounded-[7px] flex items-center justify-center font-bold text-[#FFFFFF] text-sm">
                  PDL
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#FFFFFF]">
                PAVAN <span className="text-[#48C987]">DIGITAL</span> LAB
              </span>
            </div>

            <p className="text-xs font-mono text-[#DDF5E3]">
              “{APP_CONFIG.tagline}”
            </p>

            <p className="text-xs text-[#DDF5E3] max-w-sm leading-relaxed">
              Full-service digital studio providing high-impact promotional videos, modern websites, royal wedding and birthday invitations, visiting cards, and performance digital marketing.
            </p>

            {/* Quick Contacts */}
            <div className="space-y-1.5 text-xs text-[#DDF5E3] pt-2">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#48C987]" />
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFFFFF] transition-colors font-mono"
                >
                  WhatsApp: {APP_CONFIG.whatsappNumber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#48C987]" />
                <a
                  href={APP_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFFFFF] transition-colors font-mono"
                >
                  Instagram: {APP_CONFIG.instagramHandle}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#48C987]" />
                <a
                  href={`mailto:${APP_CONFIG.email}`}
                  className="hover:text-[#FFFFFF] transition-colors font-mono"
                >
                  {APP_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#DDF5E3]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  Services Catalog (12)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  Our Work & Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  About Pavan Digital Lab
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('profile')}
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  Founder Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  Contact & Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* 12 Services Quick Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
              Our 12 Core Services
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[11px] text-[#DDF5E3]">
              {SERVICES_DATA.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => onSelectService(srv)}
                  className="text-left hover:text-[#48C987] transition-colors truncate"
                  title={srv.title}
                >
                  • {srv.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#B8E8C8]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DDF5E3]/70">
          <div>
            © {new Date().getFullYear()} Pavan Digital Lab. All rights reserved. Emerald & Mint Green Edition.
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#06452D] hover:bg-[#48C987] text-[#DDF5E3] hover:text-[#06452D] border border-[#B8E8C8]/40 transition-colors shadow-sm font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-current" />
          </button>
        </div>
      </div>
    </footer>
  );
};
