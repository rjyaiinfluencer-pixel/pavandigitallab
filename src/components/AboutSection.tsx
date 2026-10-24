import React from 'react';
import { Sparkles, Video, Globe, HeartHandshake, TrendingUp, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG } from '../data/config';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Cinematic Storytelling & Viral Reels',
      desc: 'Crafting high-retention video hooks, rhythmic motion graphics, and color grading that capture viewer curiosity in the first 3 seconds.',
      icon: <Video className="w-5 h-5 text-[#48C987]" />,
    },
    {
      num: '02',
      title: 'High-Converting Web Architecture',
      desc: 'Designing fast, accessible, mobile-first websites integrated with direct WhatsApp lead funnels and clean technical SEO fundamentals.',
      icon: <Globe className="w-5 h-5 text-[#35B978]" />,
    },
    {
      num: '03',
      title: 'Bespoke Invitation Artistry',
      desc: 'Transforming family milestones with royal digital wedding suites, animated birthday videos, and interactive Google Maps venue pins.',
      icon: <HeartHandshake className="w-5 h-5 text-[#48C987]" />,
    },
    {
      num: '04',
      title: 'Data-Driven Local & Social Reach',
      desc: 'Optimizing Google Maps business profiles for #1 local pack rankings and running Meta ad campaigns that deliver measurable return on ad spend.',
      icon: <TrendingUp className="w-5 h-5 text-[#35B978]" />,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative scroll-mt-20 bg-[#06452D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#032D1D] border border-[#B8E8C8]/40 text-xs font-semibold text-[#DDF5E3]">
              <Sparkles className="w-3.5 h-3.5 text-[#48C987]" />
              <span>ABOUT THE CREATIVE STUDIO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
              Where Creative Vision Meets{' '}
              <span className="text-[#35B978]">
                Digital Execution.
              </span>
            </h2>

            <p className="text-base text-[#DDF5E3] leading-relaxed font-normal">
              <strong className="text-[#FFFFFF] font-semibold">{APP_CONFIG.brandName}</strong> was founded on a simple principle: every brand, local business, and family milestone deserves high-caliber digital presentation without unnecessary corporate red tape or exorbitant agency markups.
            </p>

            <p className="text-sm text-[#DDF5E3]/90 leading-relaxed font-normal">
              Whether you need a high-energy promotional reel that stops thumbs on Instagram, a lightning-fast responsive website that converts visitors into WhatsApp inquiries, an unforgettable royal wedding e-invitation with Google Maps integration, or a complete digital marketing overhaul, we deliver polished, broadcast-quality assets built for modern screens.
            </p>

            {/* Direct Value Badges */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-3 text-sm text-[#FFFFFF]">
                <CheckCircle2 className="w-4 h-4 text-[#48C987] shrink-0" />
                <span>Direct collaboration with the founder — no bureaucratic agency layers</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#FFFFFF]">
                <CheckCircle2 className="w-4 h-4 text-[#48C987] shrink-0" />
                <span>Fast 24 to 72 hour turnaround options on urgent creative deliveries</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#FFFFFF]">
                <CheckCircle2 className="w-4 h-4 text-[#48C987] shrink-0" />
                <span>Multi-format exports optimized for WhatsApp, Instagram, and web</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#B8E8C8] hover:border-[#35B978] hover:shadow-[0_10px_30px_rgba(53,185,120,0.25)] transition-all duration-300 hover:-translate-y-1 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#06452D] border border-[#B8E8C8]/40 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-mono text-[#35B978] font-bold">{pillar.num}</span>
                </div>
                <h3 className="text-base font-bold text-[#06452D] leading-snug">{pillar.title}</h3>
                <p className="text-xs text-[#06452D]/80 leading-relaxed font-normal">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
