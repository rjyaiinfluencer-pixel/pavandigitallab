import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Sparkles,
  MessageCircle,
  Play,
  RotateCw,
  ExternalLink,
  Laptop,
  Smartphone,
  MapPin,
  Music,
  Star,
  Flame,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { ServiceItem, ProjectItem } from '../types';
import { getWhatsAppServiceUrl } from '../data/config';
import { INITIAL_PROJECTS } from '../data/projects';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onBack: () => void;
  onSelectProject?: (project: ProjectItem) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onSelectProject,
}) => {
  const [videoAspect, setVideoAspect] = useState<'9:16' | '16:9'>('9:16');
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');
  const [cardSide, setCardSide] = useState<'front' | 'back'>('front');
  const [birthdayTheme, setBirthdayTheme] = useState<'prince' | 'superhero' | 'neon'>('prince');
  const [weddingStyle, setWeddingStyle] = useState<'royal_gold' | 'peacock' | 'botanical'>('royal_gold');
  const [isPlayingSong, setIsPlayingSong] = useState(false);
  const [influencerTier, setInfluencerTier] = useState<'micro' | 'mid' | 'macro'>('micro');

  const whatsappUrl = getWhatsAppServiceUrl(service.title);

  const relatedProjects = INITIAL_PROJECTS.filter((p) => {
    if (service.slug.includes('video') && p.category === 'Promotional Videos') return true;
    if (service.slug.includes('website') && p.category === 'Websites') return true;
    if (service.slug.includes('wedding') && p.category === 'Wedding Invitations') return true;
    if (service.slug.includes('birthday') && p.category === 'Birthday Invitations') return true;
    if (service.slug.includes('business') && p.category === 'Business Cards') return true;
    if (service.slug.includes('song') && p.category === 'Personal Songs') return true;
    if (
      service.slug.includes('marketing') ||
      service.slug.includes('maps') ||
      service.slug.includes('collab') ||
      service.slug.includes('influencer') ||
      service.slug.includes('ugc') ||
      service.slug.includes('social')
    ) {
      return p.category === 'Digital Marketing' || p.category === 'Promotional Videos';
    }
    return false;
  }).slice(0, 3);

  const renderInteractiveShowcase = () => {
    switch (service.sampleMockType) {
      case 'video':
        return (
          <div className="rounded-2xl bg-[#032D1D] border border-[#B8E8C8]/40 p-4 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#B8E8C8]/30 text-xs">
              <span className="font-semibold text-[#FFFFFF] flex items-center gap-2">
                <Play className="w-3.5 h-3.5 fill-current text-[#48C987]" />
                <span>Interactive Reel & Commercial Player</span>
              </span>
              <div className="flex items-center gap-1 bg-[#06452D] p-1 rounded-lg border border-[#B8E8C8]/30">
                <button
                  onClick={() => setVideoAspect('9:16')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    videoAspect === '9:16' ? 'bg-[#48C987] text-[#06452D] font-bold' : 'text-[#DDF5E3]'
                  }`}
                >
                  9:16 Reels
                </button>
                <button
                  onClick={() => setVideoAspect('16:9')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    videoAspect === '16:9' ? 'bg-[#48C987] text-[#06452D] font-bold' : 'text-[#DDF5E3]'
                  }`}
                >
                  16:9 Commercial
                </button>
              </div>
            </div>

            <div
              className={`mx-auto bg-[#06452D] rounded-xl border border-[#B8E8C8]/40 relative overflow-hidden flex flex-col justify-between p-4 shadow-xl transition-all duration-300 ${
                videoAspect === '9:16' ? 'w-full max-w-[280px] h-[440px]' : 'w-full h-[320px]'
              }`}
            >
              <div className="flex items-center justify-between z-10 text-[#FFFFFF] text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#48C987] flex items-center justify-center font-black text-[#06452D] text-[10px]">
                    PDL
                  </div>
                  <span className="font-semibold text-xs">@pavan.digital.lab</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#032D1D] text-[10px] text-[#DDF5E3] border border-[#B8E8C8]/40">
                  4K 60FPS
                </span>
              </div>

              <div className="text-center z-10 space-y-2 py-4">
                <div className="inline-block px-3 py-1 rounded-full bg-[#35B978]/20 text-[#FFFFFF] text-xs font-bold border border-[#35B978]/40">
                  TRENDING PROMO
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-[#FFFFFF] drop-shadow-md">
                  Luxury Brand Showcase
                </h4>
                <p className="text-xs text-[#DDF5E3] drop-shadow">
                  High-speed dynamic transitions & viral sound sync
                </p>
              </div>

              <div className="z-10 space-y-3 pt-2 border-t border-[#B8E8C8]/30">
                <div className="flex items-center justify-between text-xs text-[#FFFFFF]">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                      className="w-8 h-8 rounded-full bg-[#48C987] text-[#06452D] flex items-center justify-center hover:bg-[#35B978] transition-all shadow-md"
                    >
                      <Play className={`w-3.5 h-3.5 fill-current ${!isPlayingVideo ? 'opacity-80' : ''}`} />
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-8 h-8 rounded-full bg-[#032D1D] hover:bg-[#06452D] text-[#FFFFFF] flex items-center justify-center transition-colors border border-[#B8E8C8]/40"
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#DDF5E3]" />}
                    </button>
                  </div>
                  <div className="flex items-end gap-1 h-4">
                    <span className="w-1 bg-[#48C987] rounded-full animate-bounce h-3" />
                    <span className="w-1 bg-[#35B978] rounded-full animate-bounce h-4" />
                    <span className="w-1 bg-[#FFFFFF] rounded-full animate-bounce h-2" />
                    <span className="w-1 bg-[#48C987] rounded-full animate-bounce h-3.5" />
                  </div>
                  <span className="text-[11px] font-mono text-[#DDF5E3]">00:18 / 00:30</span>
                </div>
                <div className="w-full bg-[#032D1D] h-1.5 rounded-full overflow-hidden border border-[#B8E8C8]/30">
                  <div className="bg-gradient-to-r from-[#35B978] to-[#48C987] h-full w-[60%] rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            <div className="text-center text-xs text-[#DDF5E3] pt-2">
              Preview format for Instagram Reels, YouTube Shorts, and Meta Sponsored Ads.
            </div>
          </div>
        );

      case 'website':
        return (
          <div className="rounded-2xl bg-[#032D1D] border border-[#B8E8C8]/40 p-4 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#B8E8C8]/30 text-xs">
              <span className="font-semibold text-[#FFFFFF] flex items-center gap-2">
                <Laptop className="w-3.5 h-3.5 text-[#48C987]" />
                <span>Responsive Website Mockup Preview</span>
              </span>
              <div className="flex items-center gap-1 bg-[#06452D] p-1 rounded-lg border border-[#B8E8C8]/30">
                <button
                  onClick={() => setDeviceView('desktop')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1 ${
                    deviceView === 'desktop' ? 'bg-[#48C987] text-[#06452D] font-bold' : 'text-[#DDF5E3]'
                  }`}
                >
                  <Laptop className="w-3 h-3" />
                  <span>Desktop</span>
                </button>
                <button
                  onClick={() => setDeviceView('mobile')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1 ${
                    deviceView === 'mobile' ? 'bg-[#48C987] text-[#06452D] font-bold' : 'text-[#DDF5E3]'
                  }`}
                >
                  <Smartphone className="w-3 h-3" />
                  <span>Mobile</span>
                </button>
              </div>
            </div>

            <div
              className={`mx-auto bg-[#06452D] rounded-xl border border-[#B8E8C8]/40 overflow-hidden shadow-xl transition-all duration-300 ${
                deviceView === 'desktop' ? 'w-full max-w-xl' : 'w-full max-w-[280px]'
              }`}
            >
              <div className="bg-[#032D1D] px-3 py-2 border-b border-[#B8E8C8]/30 flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#48C987]/40" />
                  <span className="w-2 h-2 rounded-full bg-[#48C987]/70" />
                  <span className="w-2 h-2 rounded-full bg-[#35B978]" />
                </div>
                <div className="flex-1 bg-[#06452D] rounded px-2 py-0.5 text-[10px] text-[#DDF5E3] font-mono truncate">
                  https://dr-srinivas-dental.com
                </div>
              </div>

              <div className="p-4 space-y-3 text-left">
                <div className="flex items-center justify-between pb-2 border-b border-[#B8E8C8]/30">
                  <span className="text-xs font-bold text-[#FFFFFF]">Dr. Srinivas Dental Care</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#35B978]/20 text-[#DDF5E3] border border-[#35B978]/40">
                    Online Booking
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#032D1D] border border-[#B8E8C8]/30 space-y-1.5">
                  <span className="text-[10px] font-bold text-[#48C987] uppercase tracking-wider block">
                    Premier Clinic
                  </span>
                  <h5 className="text-sm font-extrabold text-[#FFFFFF] leading-tight">
                    Transforming Smiles With Painless Laser Dentistry
                  </h5>
                  <p className="text-[11px] text-[#DDF5E3]">
                    Trusted by 2,000+ happy families. Book in 30 seconds.
                  </p>
                  <div className="pt-2">
                    <button className="px-3 py-1 bg-[#48C987] text-[#06452D] text-[10px] font-bold rounded shadow">
                      WhatsApp Appointment
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] text-[#DDF5E3]">
                  <div className="p-2 rounded bg-[#032D1D] border border-[#B8E8C8]/30">
                    <span className="block font-bold text-[#FFFFFF]">Root Canal & Implants</span>
                    <span className="text-[#DDF5E3]/80">Same-day procedures</span>
                  </div>
                  <div className="p-2 rounded bg-[#032D1D] border border-[#B8E8C8]/30">
                    <span className="block font-bold text-[#FFFFFF]">Teeth Whitening</span>
                    <span className="text-[#DDF5E3]/80">Instant laser results</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-xs text-[#DDF5E3] pt-1">
              Includes mobile-first UX, speed optimization, and WhatsApp lead integration.
            </div>
          </div>
        );

      case 'wedding':
        return (
          <div className="rounded-2xl bg-[#032D1D] border border-[#B8E8C8]/40 p-4 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#B8E8C8]/30 text-xs">
              <span className="font-semibold text-[#FFFFFF] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#48C987]" />
                <span>Luxury Wedding Invitation Card Styles</span>
              </span>
              <div className="flex items-center gap-1 bg-[#06452D] p-1 rounded-lg border border-[#B8E8C8]/30">
                <button
                  onClick={() => setWeddingStyle('royal_gold')}
                  className={`px-2 py-1 rounded text-xs transition-colors ${
                    weddingStyle === 'royal_gold' ? 'bg-[#48C987] text-[#06452D] font-bold' : 'text-[#DDF5E3]'
                  }`}
                >
                  Royal Gold
                </button>
                <button
                  onClick={() => setWeddingStyle('peacock')}
                  className={`px-2 py-1 rounded text-xs transition-colors ${
                    weddingStyle === 'peacock' ? 'bg-[#48C987] text-[#06452D] font-bold' : 'text-[#DDF5E3]'
                  }`}
                >
                  Peacock Telugu
                </button>
                <button
                  onClick={() => setWeddingStyle('botanical')}
                  className={`px-2 py-1 rounded text-xs transition-colors ${
                    weddingStyle === 'botanical' ? 'bg-[#48C987] text-[#06452D] font-bold' : 'text-[#DDF5E3]'
                  }`}
                >
                  Botanical
                </button>
              </div>
            </div>

            <div className="max-w-md mx-auto rounded-xl p-6 bg-[#FFFFFF] border border-[#B8E8C8] shadow-2xl text-center space-y-3 relative overflow-hidden">
              <div className="text-[#35B978] text-xs tracking-widest font-serif uppercase font-bold">
                || Sri Prasannanjaneya Prasanna ||
              </div>
              <div className="w-12 h-[1px] bg-[#35B978] mx-auto" />
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#06452D] tracking-wide">
                Sai Krishna <span className="text-[#35B978] font-sans">&</span> Meghana
              </h4>
              <p className="text-xs text-[#06452D]/80 font-serif italic">
                Cordially invite you and your family to celebrate their holy wedding ceremony
              </p>

              <div className="py-2 px-4 rounded-lg bg-[#DDF5E3] border border-[#B8E8C8] inline-block text-xs text-[#06452D]">
                <div className="font-bold text-[#06452D]">Auspicious Sumuhurtham</div>
                <div className="text-[11px] text-[#06452D]/90">Sunday, 15th November 2026 at 9:42 AM</div>
              </div>

              <div className="text-xs text-[#06452D] space-y-1 pt-1">
                <div className="font-semibold text-[#06452D]">Sri Venkateswara Convention Hall</div>
                <div className="text-[#06452D]/70 text-[11px]">Bypass Road, Guntur, Andhra Pradesh</div>
              </div>

              <div className="pt-2 flex justify-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#48C987] text-[#06452D] font-bold text-[10px] flex items-center gap-1 shadow-sm">
                  <MapPin className="w-3 h-3 text-[#06452D]" />
                  <span>Open Venue in Google Maps</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-[#06452D] text-[#FFFFFF] text-[10px]">
                  RSVP on WhatsApp
                </span>
              </div>
            </div>

            <div className="text-center text-xs text-[#DDF5E3] pt-1">
              Delivered in high-res WhatsApp-friendly PDF and animated musical video formats.
            </div>
          </div>
        );

      case 'business_card':
        return (
          <div className="rounded-2xl bg-[#032D1D] border border-[#B8E8C8]/40 p-4 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#B8E8C8]/30 text-xs">
              <span className="font-semibold text-[#FFFFFF] flex items-center gap-2">
                <RotateCw className="w-3.5 h-3.5 text-[#48C987]" />
                <span>3D Flip Visiting Card & Smart QR vCard</span>
              </span>
              <button
                onClick={() => setCardSide(cardSide === 'front' ? 'back' : 'front')}
                className="px-3 py-1 rounded-lg bg-[#48C987] text-[#06452D] font-bold text-xs hover:bg-[#35B978] transition-colors flex items-center gap-1.5"
              >
                <RotateCw className="w-3 h-3" />
                <span>Flip to {cardSide === 'front' ? 'Back' : 'Front'}</span>
              </button>
            </div>

            <div className="max-w-md mx-auto aspect-[1.75/1] rounded-2xl bg-[#FFFFFF] border-2 border-[#B8E8C8] p-6 shadow-xl flex flex-col justify-between text-left relative overflow-hidden transition-all duration-300">
              {cardSide === 'front' ? (
                <>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#48C987] p-[1.5px]">
                      <div className="w-full h-full bg-[#06452D] rounded-[9px] flex items-center justify-center font-black text-[#FFFFFF] text-sm">
                        PDL
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#35B978] font-bold">
                      Smart NFC & QR
                    </span>
                  </div>
                  <div>
                    <h5 className="text-lg font-extrabold text-[#06452D] tracking-tight">
                      T Pavan Durga Vara Prasad
                    </h5>
                    <p className="text-xs text-[#35B978] font-bold">
                      Founder & Creative Director
                    </p>
                  </div>
                  <div className="text-[10px] text-[#06452D]/80 border-t border-[#B8E8C8] pt-2 flex justify-between font-medium">
                    <span>PAVAN DIGITAL LAB</span>
                    <span>pavandigitallab@gmail.com</span>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-between h-full">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#06452D] block">SCAN TO SAVE CONTACT</span>
                    <p className="text-[10px] text-[#06452D]/80 max-w-[180px]">
                      Point phone camera to save WhatsApp number & view portfolio instantly.
                    </p>
                    <div className="text-[10px] text-[#35B978] font-mono font-bold pt-2">
                      +91 9573313317
                    </div>
                  </div>
                  <div className="w-24 h-24 bg-[#06452D] text-[#FFFFFF] rounded-lg p-1.5 shadow-md flex flex-col items-center justify-center">
                    <div className="w-full h-full border border-dashed border-[#B8E8C8] rounded flex items-center justify-center font-mono text-[9px] font-bold text-[#FFFFFF] text-center leading-tight">
                      [QR vCard]
                      <br />
                      PAVAN LAB
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center text-xs text-[#DDF5E3] pt-1">
              Delivered in 300 DPI CMYK print-ready vector files (PDF/AI) plus digital vCard.
            </div>
          </div>
        );

      case 'song':
        return (
          <div className="rounded-2xl bg-[#032D1D] border border-[#B8E8C8]/40 p-4 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#B8E8C8]/30 text-xs">
              <span className="font-semibold text-[#FFFFFF] flex items-center gap-2">
                <Music className="w-3.5 h-3.5 text-[#48C987]" />
                <span>Personal Song Project & Audio Visualizer</span>
              </span>
              <span className="text-[#DDF5E3] text-xs">Studio Mix Master</span>
            </div>

            <div className="max-w-md mx-auto rounded-xl p-5 bg-[#06452D] border border-[#B8E8C8]/40 shadow-xl space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#48C987] flex items-center justify-center text-[#06452D] shadow-md shrink-0">
                  <Music className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="text-base font-bold text-[#FFFFFF]">“Nee Sneham Thoti”</h5>
                  <p className="text-xs text-[#DDF5E3] font-medium">Silver Jubilee Tribute Track</p>
                  <p className="text-[10px] text-[#DDF5E3]/70">Telugu Acoustic & Vocal Melody</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#032D1D] border border-[#B8E8C8]/30 text-xs text-[#FFFFFF]/90 italic text-center">
                “iravai aidu vasanthala prematho... mana intiki velugai nilichina devatha...”
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs text-[#FFFFFF]">
                  <button
                    onClick={() => setIsPlayingSong(!isPlayingSong)}
                    className="w-9 h-9 rounded-full bg-[#48C987] text-[#06452D] font-bold flex items-center justify-center transition-transform hover:scale-105"
                  >
                    <Play className="w-4 h-4 fill-current ml-0.5 text-[#06452D]" />
                  </button>
                  <div className="flex items-end gap-1 h-6 flex-1 px-4">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <span
                        key={i}
                        className={`w-1 rounded-full ${
                          i % 2 === 0 ? 'bg-[#48C987]' : 'bg-[#35B978]'
                        } ${isPlayingSong ? 'animate-pulse' : 'opacity-40'}`}
                        style={{ height: `${Math.max(20, (i * 17) % 100)}%` }}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[11px] text-[#DDF5E3]">03:42</span>
                </div>
              </div>
            </div>

            <div className="text-center text-xs text-[#DDF5E3] pt-1">
              Custom lyrics with your names and memories, recorded with studio vocals and photo video montage.
            </div>
          </div>
        );

      default:
        return (
          <div className="rounded-2xl bg-[#032D1D] border border-[#B8E8C8]/40 p-6 text-center space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#35B978]/20 text-[#DDF5E3] flex items-center justify-center mx-auto border border-[#35B978]/40">
              <Sparkles className="w-6 h-6 text-[#48C987]" />
            </div>
            <h4 className="text-lg font-bold text-[#FFFFFF]">{service.tagline}</h4>
            <p className="text-sm text-[#FFFFFF]/85 max-w-lg mx-auto">
              {service.fullDesc}
            </p>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#06452D] text-xs text-[#DDF5E3] border border-[#B8E8C8]/40">
              Customized strategy tailored specifically for your brand
            </div>
          </div>
        );
    }
  };

  return (
    <div className="py-24 sm:py-28 relative bg-[#06452D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Navigation Strip */}
        <div className="flex items-center justify-between pb-6 border-b border-[#B8E8C8]/30">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFFFFF] hover:text-[#48C987] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Services</span>
          </button>

          <span className="text-xs font-mono text-[#FFFFFF] px-3 py-1 rounded-full bg-[#032D1D] border border-[#B8E8C8]/40">
            {service.category}
          </span>
        </div>

        {/* Hero Title & Introduction */}
        <div className="space-y-4 text-left">
          <div className="inline-block px-3 py-1 rounded-md bg-[#032D1D] text-xs font-bold text-[#DDF5E3] border border-[#B8E8C8]/40">
            {service.badgeText}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight">
            {service.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#DDF5E3] font-medium max-w-3xl">
            {service.tagline}
          </p>
          <p className="text-base text-[#FFFFFF]/85 leading-relaxed max-w-3xl pt-2">
            {service.fullDesc}
          </p>
        </div>

        {/* Dedicated Service Showcase */}
        <div>
          <div className="mb-4 text-left">
            <h3 className="text-lg font-bold text-[#FFFFFF] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#48C987]" />
              <span>Interactive Service Showcase & Realistic Previews</span>
            </h3>
            <p className="text-xs text-[#DDF5E3]">
              Explore dynamic simulated samples, formats, and design variations for {service.title}.
            </p>
          </div>
          {renderInteractiveShowcase()}
        </div>

        {/* Two-Column Grid: What's Included & Customer Benefits (Clean White Cards #FFFFFF) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {/* Deliverables Card */}
          <div className="rounded-2xl bg-[#FFFFFF] border border-[#B8E8C8] p-6 sm:p-7 space-y-5 shadow-md">
            <h3 className="text-xl font-bold text-[#06452D] flex items-center gap-2 pb-3 border-b border-[#B8E8C8]">
              <CheckCircle2 className="w-5 h-5 text-[#35B978]" />
              <span>What Is Included in This Service</span>
            </h3>
            <ul className="space-y-3.5">
              {service.deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-[#06452D]">
                  <span className="w-5 h-5 rounded-full bg-[#DDF5E3] text-[#06452D] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits Card */}
          <div className="rounded-2xl bg-[#FFFFFF] border border-[#B8E8C8] p-6 sm:p-7 space-y-5 shadow-md">
            <h3 className="text-xl font-bold text-[#06452D] flex items-center gap-2 pb-3 border-b border-[#B8E8C8]">
              <Sparkles className="w-5 h-5 text-[#35B978]" />
              <span>Key Benefits for Your Business & Occasion</span>
            </h3>
            <ul className="space-y-3.5">
              {service.benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-[#06452D]">
                  <span className="w-5 h-5 rounded-full bg-[#DDF5E3] text-[#06452D] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ★
                  </span>
                  <span className="leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4-Step Process Workflow */}
        <div className="rounded-2xl bg-[#032D1D] border border-[#B8E8C8]/30 p-6 sm:p-8 space-y-6 text-left shadow-lg">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#48C987]" />
            <h3 className="text-xl font-bold text-[#FFFFFF]">Our 4-Step Execution Workflow</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="p-4 rounded-xl bg-[#06452D] border border-[#B8E8C8]/30 space-y-2">
                <span className="text-xs font-mono text-[#48C987] font-bold tracking-widest">{step.step}</span>
                <h4 className="text-base font-bold text-[#FFFFFF]">{step.title}</h4>
                <p className="text-xs text-[#DDF5E3] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <div className="space-y-4 text-left">
            <h3 className="text-xl font-bold text-[#FFFFFF]">Related Projects from Our Portfolio</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => onSelectProject && onSelectProject(proj)}
                  className="rounded-xl bg-[#FFFFFF] border border-[#B8E8C8] hover:border-[#35B978] p-4 space-y-2.5 transition-all hover:-translate-y-1 cursor-pointer shadow-sm"
                >
                  <span className="text-[11px] font-mono text-[#35B978] font-semibold">{proj.category}</span>
                  <h4 className="text-sm font-bold text-[#06452D] line-clamp-1">{proj.title}</h4>
                  <p className="text-xs text-[#06452D]/80 line-clamp-2">{proj.description}</p>
                  <span className="text-xs font-bold text-[#35B978] flex items-center gap-1 pt-1">
                    <span>View Project Case</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Primary CTA Box with Emerald & Mint Green styling */}
        <div className="rounded-2xl bg-[#032D1D] border border-[#B8E8C8]/50 p-8 sm:p-10 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF]">
            Ready to get started with {service.title}?
          </h3>
          <p className="text-sm sm:text-base text-[#DDF5E3] max-w-2xl mx-auto">
            Click below to instantly chat with Pavan on WhatsApp. We will discuss your exact requirements, provide quotes, and deliver fast results.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#48C987] hover:bg-[#35B978] text-[#06452D] font-extrabold text-sm sm:text-base shadow-md transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2.5"
            >
              <MessageCircle className="w-5 h-5 fill-current text-[#06452D]" />
              <span>Request This Service on WhatsApp</span>
            </a>

            <button
              onClick={onBack}
              className="px-6 py-4 rounded-xl bg-[#06452D] hover:bg-[#032D1D] text-[#FFFFFF] border border-[#B8E8C8] text-sm font-semibold transition-colors"
            >
              Back to Services
            </button>
          </div>

          <p className="text-xs text-[#DDF5E3]">
            Prefills: “Hi Pavan Digital Lab, I am interested in your {service.title}. Please share the details.”
          </p>
        </div>
      </div>
    </div>
  );
};
