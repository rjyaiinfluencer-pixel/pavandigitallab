import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { APP_CONFIG, getGeneralWhatsAppUrl } from '../data/config';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 relative bg-[#06452D]/95 backdrop-blur-md border border-[#B8E8C8]/50 text-left px-3.5 py-2 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.6)] text-xs text-[#FFFFFF] max-w-[200px] flex items-start justify-between gap-2">
          <div className="space-y-0.5">
            <span className="font-bold text-[#48C987] block text-[11px]">Online Now</span>
            <span className="text-[11px] text-[#DDF5E3]">Chat directly with Pavan on WhatsApp</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#DDF5E3] hover:text-[#FFFFFF] p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button: Bright Green background (#48C987) and Dark Forest Green icon (#06452D) */}
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Pavan Digital Lab"
        className="group relative w-14 h-14 rounded-full bg-[#48C987] hover:bg-[#35B978] text-[#06452D] flex items-center justify-center shadow-[0_0_25px_rgba(72,201,135,0.45)] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#48C987]/50"
      >
        {/* Subtle breathing ripple glow */}
        <span
          className="absolute inset-0 rounded-full bg-[#48C987]/40 animate-ping opacity-75 pointer-events-none"
          style={{ animationDuration: '3s' }}
        />
        <MessageCircle className="w-7 h-7 fill-current relative z-10 transition-transform group-hover:scale-110 text-[#06452D]" />
      </a>
    </div>
  );
};
