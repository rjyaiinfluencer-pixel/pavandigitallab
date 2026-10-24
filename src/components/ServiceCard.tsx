import React from 'react';
import {
  Video,
  Globe,
  HeartHandshake,
  Cake,
  CreditCard,
  Music,
  MapPin,
  Sparkles,
  Users,
  Smartphone,
  Share2,
  BarChart3,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import { ServiceItem } from '../types';
import { getWhatsAppServiceUrl } from '../data/config';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onSelect: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onSelect }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Video':
        return <Video className="w-5 h-5 text-[#35B978]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#35B978]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#35B978]" />;
      case 'Cake':
        return <Cake className="w-5 h-5 text-[#35B978]" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-[#35B978]" />;
      case 'Music':
        return <Music className="w-5 h-5 text-[#35B978]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#35B978]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#35B978]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#35B978]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#35B978]" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-[#35B978]" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#35B978]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#35B978]" />;
    }
  };

  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <div
      onClick={() => onSelect(service)}
      className="group relative rounded-2xl bg-[#FFFFFF] border-2 border-[#B8E8C8] hover:border-[#35B978] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_36px_rgba(6,69,45,0.18)] hover:-translate-y-1 cursor-pointer text-left"
    >
      {/* Top Bar: Editorial index & domain icon */}
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-[#B8E8C8]">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#DDF5E3] border border-[#B8E8C8] flex items-center justify-center transition-colors group-hover:bg-[#35B978] group-hover:text-[#FFFFFF]">
              {getIcon(service.iconName)}
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#35B978] font-bold block">{service.category}</span>
              <span className="text-xs text-[#06452D]/70 tabular-nums font-semibold">Service #{formattedIndex}</span>
            </div>
          </div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#DDF5E3] text-[#06452D] border border-[#B8E8C8]">
            {service.badgeText}
          </span>
        </div>

        {/* Card Title & Short Description */}
        <div className="pt-4 space-y-2">
          <h3 className="text-xl font-extrabold text-[#06452D] group-hover:text-[#35B978] transition-colors leading-snug">
            {service.title}
          </h3>
          <p className="text-sm text-[#06452D]/85 leading-relaxed font-normal">
            {service.shortDesc}
          </p>
        </div>

        {/* Quick Highlights / Deliverables snapshot */}
        <div className="pt-4 pb-2 space-y-1.5">
          {service.deliverables.slice(0, 2).map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-[#06452D]/80">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#35B978] shrink-0 mt-0.5" />
              <span className="truncate font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Actions Bottom Strip */}
      <div className="pt-5 mt-4 border-t border-[#B8E8C8] flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(service);
          }}
          className="text-xs font-bold text-[#35B978] hover:text-[#06452D] flex items-center gap-1.5 transition-colors group/link"
        >
          <span>View Details & Previews</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
        </button>

        <a
          href={getWhatsAppServiceUrl(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          title="Direct WhatsApp Enquiry"
          className="p-2 rounded-lg bg-[#48C987] hover:bg-[#35B978] text-[#06452D] hover:text-[#FFFFFF] transition-all shadow-sm"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
