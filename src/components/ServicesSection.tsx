import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/services';
import { ServiceCard } from './ServiceCard';
import { ServiceItem } from '../types';
import { Sparkles, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = [
    'All',
    'Video Production',
    'Digital Engineering',
    'Creative Design',
    'Branding & Print',
    'Audio Production',
    'Influencer & PR',
    'Paid Performance',
    'Organic Growth',
  ];

  const filteredServices =
    filterCategory === 'All'
      ? SERVICES_DATA
      : SERVICES_DATA.filter(
          (s) =>
            s.category.toLowerCase().includes(filterCategory.toLowerCase()) ||
            filterCategory.toLowerCase().includes(s.category.toLowerCase())
        );

  return (
    <section id="services" className="py-20 lg:py-28 relative scroll-mt-20 bg-[#06452D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#032D1D] border border-[#B8E8C8]/40 text-xs font-semibold text-[#DDF5E3]">
            <Sparkles className="w-3.5 h-3.5 text-[#48C987]" />
            <span>FULL-SUITE DIGITAL CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight">
            Tailored Creative & Digital Solutions
          </h2>

          <p className="text-base text-[#DDF5E3]/90 leading-relaxed font-normal">
            From high-converting promotional videos and modern websites to royal wedding cards, custom personal songs, and ROI-focused digital ad campaigns.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <div className="inline-flex items-center p-1.5 rounded-xl bg-[#032D1D] border border-[#B8E8C8]/30 flex-wrap justify-center gap-1">
            {categories.map((cat) => {
              const isActive = filterCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#35B978] text-[#06452D] font-bold shadow-sm'
                      : 'text-[#DDF5E3] hover:text-[#FFFFFF] hover:bg-[#06452D]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 12 Services Grid (Clean White Cards with Soft Green Borders on Deep Forest Green) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onSelect={onSelectService}
            />
          ))}
        </div>

        {/* Combo Package Banner: Fresh Mint card with deep forest text */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#DDF5E3] border-2 border-[#B8E8C8] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#35B978] border border-[#B8E8C8] flex items-center justify-center shrink-0 text-[#06452D]">
              <Layers className="w-5 h-5 text-[#06452D]" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#06452D]">Need a custom combo package?</h4>
              <p className="text-xs text-[#06452D]/80 font-medium">
                Bundle website creation with social media reels and Google Maps setup for maximum savings.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectService(SERVICES_DATA[0])}
            className="px-5 py-2.5 text-xs font-bold text-[#FFFFFF] bg-[#06452D] hover:bg-[#032D1D] rounded-xl transition-colors whitespace-nowrap shadow-sm"
          >
            Explore Video + Web Bundles
          </button>
        </div>
      </div>
    </section>
  );
};
