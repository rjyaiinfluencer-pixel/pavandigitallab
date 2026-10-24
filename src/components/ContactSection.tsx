import React, { useState } from 'react';
import {
  MessageCircle,
  Instagram,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { APP_CONFIG, getGeneralWhatsAppUrl } from '../data/config';
import { SERVICES_DATA } from '../data/services';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0].title);
  const [requirements, setRequirements] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter your WhatsApp contact number.');
      return;
    }
    if (!requirements.trim()) {
      setErrorMsg('Please describe your project requirements.');
      return;
    }

    const message = `Hi Pavan Digital Lab,\n\nI want to discuss a new project with you.\n\n• Name: ${name.trim()}\n• WhatsApp Number: ${phone.trim()}\n• Service Selected: ${selectedService}\n• Project Requirements: ${requirements.trim()}`;

    const whatsappUrl = `https://wa.me/${APP_CONFIG.whatsappRawNumber}?text=${encodeURIComponent(message)}`;

    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative scroll-mt-20 bg-[#DDF5E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#06452D] border border-[#B8E8C8] text-xs font-semibold text-[#FFFFFF]">
            <Sparkles className="w-3.5 h-3.5 text-[#48C987]" />
            <span>DIRECT CLIENT INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#06452D] tracking-tight">
            Let’s Bring Your Vision To Life
          </h2>
          <p className="text-sm sm:text-base text-[#06452D]/80">
            Connect directly with Pavan Digital Lab on WhatsApp or submit your project details below for an immediate response.
          </p>
        </div>

        {/* 2-Column Split: Form and Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Instant WhatsApp Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#FFFFFF] border border-[#B8E8C8] p-6 sm:p-10 shadow-xl text-left">
            <div className="pb-6 border-b border-[#B8E8C8] mb-6 space-y-1">
              <h3 className="text-xl font-bold text-[#06452D] flex items-center gap-2">
                <span>Start Your Project Enquiry</span>
                <span className="text-xs font-semibold text-[#35B978] font-mono">(Direct WhatsApp Delivery)</span>
              </h3>
              <p className="text-xs text-[#06452D]/80">
                Submitting this form prepares your exact requirements and connects you directly with Pavan on WhatsApp.
              </p>
            </div>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-[#DDF5E3] border border-[#35B978] flex items-start gap-3 text-left">
                <CheckCircle2 className="w-5 h-5 text-[#35B978] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-sm font-bold text-[#06452D] block">Enquiry Prepared & WhatsApp Opened!</span>
                  <p className="text-xs text-[#06452D]/80">
                    If WhatsApp didn’t open automatically,{' '}
                    <a
                      href={getGeneralWhatsAppUrl(`Hi Pavan, I am ${name}. I submitted an enquiry for ${selectedService}: ${requirements}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-bold text-[#06452D]"
                    >
                      click here to launch chat manually
                    </a>.
                  </p>
                </div>
              </div>
            )}

            {errorMsg && (
              <div className="mb-6 p-3.5 rounded-xl bg-rose-50 border border-rose-300 flex items-center gap-2.5 text-xs text-rose-800">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#06452D] font-semibold mb-1.5">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#B8E8C8] text-[#06452D] placeholder-[#06452D]/40 focus:outline-none focus:border-[#35B978] text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[#06452D] font-semibold mb-1.5">WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#B8E8C8] text-[#06452D] placeholder-[#06452D]/40 focus:outline-none focus:border-[#35B978] text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#06452D] font-semibold mb-1.5">Select Service *</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#B8E8C8] text-[#06452D] focus:outline-none focus:border-[#35B978] text-xs sm:text-sm"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.title} className="bg-white text-[#06452D]">
                      {srv.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#06452D] font-semibold mb-1.5">Project Requirements & Timeline *</label>
                <textarea
                  required
                  rows={4}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Tell us about your brand, preferred design style, deadline, and specific deliverables..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#B8E8C8] text-[#06452D] placeholder-[#06452D]/40 focus:outline-none focus:border-[#35B978] text-xs sm:text-sm leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#48C987] hover:bg-[#35B978] text-[#06452D] font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(72,201,135,0.3)] transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Submit & Chat on WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Right Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Primary WhatsApp Card */}
            <div className="rounded-3xl bg-[#FFFFFF] border border-[#B8E8C8] p-6 sm:p-7 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#06452D] border border-[#B8E8C8]/40 flex items-center justify-center text-[#FFFFFF]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#35B978] uppercase tracking-wider block font-bold">
                    FASTEST RESPONSE
                  </span>
                  <h4 className="text-lg font-bold text-[#06452D]">Direct WhatsApp Contact</h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#06452D]/80 leading-relaxed font-normal">
                Connect directly with founder Pavan for immediate quotes, delivery timelines, and project reviews.
              </p>

              <div className="p-3 rounded-xl bg-[#DDF5E3]/60 border border-[#B8E8C8] text-center font-mono font-bold text-[#06452D] text-base">
                {APP_CONFIG.whatsappNumber}
              </div>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#48C987] hover:bg-[#35B978] text-[#06452D] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(72,201,135,0.3)] transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            {/* Instagram Contact Card */}
            <div className="rounded-3xl bg-[#FFFFFF] border border-[#B8E8C8] p-6 sm:p-7 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#06452D] border border-[#B8E8C8]/40 flex items-center justify-center text-[#FFFFFF]">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#35B978] uppercase tracking-wider block font-bold">
                    SOCIAL PORTFOLIO
                  </span>
                  <h4 className="text-lg font-bold text-[#06452D]">Instagram DM & Updates</h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#06452D]/80 leading-relaxed font-normal">
                Watch our latest reel edits, client releases, and design behind-the-scenes on Instagram.
              </p>

              <div className="p-3 rounded-xl bg-[#DDF5E3]/60 border border-[#B8E8C8] text-center font-mono font-bold text-[#06452D] text-sm">
                {APP_CONFIG.instagramHandle}
              </div>

              <a
                href={APP_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-transparent hover:bg-[#06452D] text-[#06452D] hover:text-[#FFFFFF] border border-[#35B978] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02]"
              >
                <Instagram className="w-4 h-4" />
                <span>Visit Instagram Profile</span>
              </a>
            </div>

            {/* Email & Location Card */}
            <div className="rounded-2xl bg-[#FFFFFF] border border-[#B8E8C8] p-5 space-y-2.5 text-xs text-[#06452D] shadow-md">
              <div className="flex items-center gap-2 font-medium">
                <Mail className="w-4 h-4 text-[#35B978]" />
                <span className="font-mono">{APP_CONFIG.email}</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <MapPin className="w-4 h-4 text-[#35B978]" />
                <span>{APP_CONFIG.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
