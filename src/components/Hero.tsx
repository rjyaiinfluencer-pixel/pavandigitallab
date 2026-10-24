import React, { useState } from 'react';
import { Play, Sparkles, Layers, ArrowRight, TrendingUp, Monitor, Film, Share2 } from 'lucide-react';
import { APP_CONFIG } from '../data/config';

interface HeroProps {
  onExploreServices: () => void;
  onViewProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onViewProjects }) => {
  const [activeTab, setActiveTab] = useState<'video' | 'web' | 'marketing'>('video');
  const [isPlayingReel, setIsPlayingReel] = useState(true);

  return (
    <div className="relative">
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-[#35B978]">
        {/* Subtle mint and deep forest lighting accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-[#DDF5E3]/30 via-white/10 to-transparent blur-[130px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-12 right-12 w-96 h-96 bg-[#06452D]/15 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#DDF5E3]/30 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7 text-left space-y-6">
              {/* Top Greeting Kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06452D] border border-[#B8E8C8]/40 text-xs font-semibold tracking-wider text-[#DDF5E3] uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#48C987] animate-spin" style={{ animationDuration: '6s' }} />
                <span>{APP_CONFIG.welcomeKicker}</span>
              </div>

              {/* Main Headline: Dark forest green for first part, White or mint for highlighted words */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#06452D] tracking-tight leading-[1.1] text-balance">
                Transforming Ideas Into{' '}
                <span className="text-[#FFFFFF] underline decoration-[#DDF5E3] decoration-wavy decoration-2">
                  Digital Experiences.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#06452D] max-w-2xl font-semibold leading-relaxed">
                {APP_CONFIG.heroSupportingText}
              </p>

              {/* CTA Buttons: Bright green with dark forest text for primary; transparent with forest green border for secondary */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onExploreServices}
                  className="px-6 py-3.5 text-sm font-extrabold text-[#06452D] bg-[#48C987] hover:bg-[#DDF5E3] rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 group whitespace-nowrap border border-[#06452D]/20"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#06452D]" />
                </button>

                <button
                  onClick={onViewProjects}
                  className="px-6 py-3.5 text-sm font-bold text-[#06452D] bg-transparent hover:bg-[#06452D]/10 border-2 border-[#06452D] rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <Layers className="w-4 h-4 text-[#06452D]" />
                  <span>View Our Projects</span>
                </button>
              </div>

              {/* Statistics */}
              <div className="pt-6 border-t border-[#06452D]/20 grid grid-cols-3 gap-4 max-w-xl">
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#06452D] tracking-tight tabular-nums">12+</span>
                  <span className="text-xs font-bold text-[#06452D]/85">Creative Services</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#06452D] tracking-tight tabular-nums">4K</span>
                  <span className="text-xs font-bold text-[#06452D]/85">Reels & Video Polish</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#06452D] tracking-tight tabular-nums">100%</span>
                  <span className="text-xs font-bold text-[#06452D]/85">WhatsApp Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Column: Creative Dashboard in Dark Green, Mint & Clean White */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl bg-[#032D1D] p-4 sm:p-5 border-2 border-[#B8E8C8]/40 shadow-2xl overflow-hidden">
                  {/* Visualizer Header Tabs */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#35B978]/30">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#48C987]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#35B978]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#DDF5E3]" />
                      <span className="text-xs text-[#FFFFFF] font-mono pl-2">pavan-creative-suite.pdl</span>
                    </div>
                    <div className="flex items-center gap-1 bg-[#06452D] p-0.5 rounded-lg border border-[#35B978]/40 text-[11px]">
                      <button
                        onClick={() => setActiveTab('video')}
                        className={`px-2 py-1 rounded transition-colors ${
                          activeTab === 'video'
                            ? 'bg-[#35B978] text-[#06452D] font-bold shadow-sm'
                            : 'text-[#DDF5E3] hover:text-[#FFFFFF]'
                        }`}
                      >
                        Reels
                      </button>
                      <button
                        onClick={() => setActiveTab('web')}
                        className={`px-2 py-1 rounded transition-colors ${
                          activeTab === 'web'
                            ? 'bg-[#35B978] text-[#06452D] font-bold shadow-sm'
                            : 'text-[#DDF5E3] hover:text-[#FFFFFF]'
                        }`}
                      >
                        Web
                      </button>
                      <button
                        onClick={() => setActiveTab('marketing')}
                        className={`px-2 py-1 rounded transition-colors ${
                          activeTab === 'marketing'
                            ? 'bg-[#35B978] text-[#06452D] font-bold shadow-sm'
                            : 'text-[#DDF5E3] hover:text-[#FFFFFF]'
                        }`}
                      >
                        Growth
                      </button>
                    </div>
                  </div>

                  {/* Tab 1: Video Editing & Reel Mock */}
                  {activeTab === 'video' && (
                    <div className="pt-4 space-y-4">
                      <div className="relative aspect-[16/10] bg-[#06452D] rounded-xl border border-[#35B978]/40 overflow-hidden flex items-center justify-center p-3">
                        <div className="relative w-36 h-full bg-[#032D1D] rounded-lg border border-[#48C987]/40 overflow-hidden shadow-md flex flex-col justify-between p-2">
                          {/* Reel Header */}
                          <div className="flex items-center justify-between text-[10px] text-[#FFFFFF]/80">
                            <span className="font-semibold text-[#DDF5E3]">@pavan.digital</span>
                            <span className="text-xs text-[#48C987] font-bold">⚡ LIVE</span>
                          </div>

                          {/* Center Hook Graphic */}
                          <div className="text-center py-2">
                            <div className="inline-block px-2 py-0.5 rounded bg-[#35B978]/30 text-[#DDF5E3] text-[10px] font-bold mb-1 border border-[#48C987]/40">
                              PROMO REEL
                            </div>
                            <p className="text-[11px] font-extrabold text-[#FFFFFF] leading-tight">
                              Cinematic Edits That Go Viral
                            </p>
                          </div>

                          {/* Interactive Play Toggle & Audio Wave */}
                          <div className="flex items-center justify-between pt-1 border-t border-[#35B978]/30 text-[10px]">
                            <button
                              onClick={() => setIsPlayingReel(!isPlayingReel)}
                              className="w-5 h-5 rounded-full bg-[#48C987] text-[#06452D] flex items-center justify-center hover:bg-[#DDF5E3] transition-colors"
                            >
                              <Play className={`w-2.5 h-2.5 ${isPlayingReel ? 'text-[#06452D] fill-current' : ''}`} />
                            </button>
                            <div className="flex items-end gap-0.5 h-3">
                              <span className="w-1 bg-[#48C987] rounded-full animate-pulse h-2" />
                              <span className="w-1 bg-[#DDF5E3] rounded-full animate-pulse h-3" />
                              <span className="w-1 bg-[#FFFFFF] rounded-full animate-pulse h-1.5" />
                              <span className="w-1 bg-[#35B978] rounded-full animate-pulse h-2.5" />
                            </div>
                            <span className="text-[#FFFFFF]/90 tabular-nums font-bold">4.8k ❤️</span>
                          </div>
                        </div>

                        {/* Side Edit Panel */}
                        <div className="flex-1 pl-4 space-y-2 text-left hidden sm:block">
                          <div className="text-[11px] font-semibold text-[#FFFFFF] flex items-center gap-1.5">
                            <Film className="w-3.5 h-3.5 text-[#48C987]" />
                            <span>Timeline Sequencing</span>
                          </div>
                          <div className="space-y-1.5">
                            <div className="h-2 bg-[#032D1D] rounded overflow-hidden border border-[#35B978]/30">
                              <div className="h-full bg-gradient-to-r from-[#48C987] to-[#DDF5E3] w-3/4 rounded" />
                            </div>
                            <div className="h-2 bg-[#032D1D] rounded overflow-hidden border border-[#35B978]/30">
                              <div className="h-full bg-gradient-to-r from-[#DDF5E3] to-[#35B978] w-1/2 rounded" />
                            </div>
                            <div className="h-2 bg-[#032D1D] rounded overflow-hidden border border-[#35B978]/30">
                              <div className="h-full bg-[#48C987] w-5/6 rounded" />
                            </div>
                          </div>
                          <div className="text-[10px] text-[#DDF5E3] pt-1 flex justify-between">
                            <span>FPS: 60fps Ultra</span>
                            <span className="text-[#FFFFFF] font-bold">4K Render Ready</span>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Controls */}
                      <div className="p-2.5 bg-[#06452D] rounded-xl border border-[#35B978]/40 flex items-center justify-between text-xs text-[#FFFFFF]">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#48C987] animate-ping" />
                          <span className="text-[11px] font-medium text-[#FFFFFF]">Audio Sync & Color Pacing</span>
                        </div>
                        <span className="text-[10px] text-[#DDF5E3] font-mono">00:15 / 00:30</span>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Website Wireframe & Design Mock */}
                  {activeTab === 'web' && (
                    <div className="pt-4 space-y-3">
                      <div className="aspect-[16/10] bg-[#06452D] rounded-xl border border-[#35B978]/40 p-3 flex flex-col justify-between">
                        {/* Browser Bar */}
                        <div className="flex items-center gap-2 pb-2 border-b border-[#35B978]/30 text-[11px] text-[#DDF5E3] font-mono">
                          <Monitor className="w-3.5 h-3.5 text-[#48C987]" />
                          <span className="text-[#FFFFFF] truncate">https://your-business.com</span>
                          <span className="ml-auto text-[#48C987] text-[10px] font-bold">99.8% Speed</span>
                        </div>

                        {/* Mockup Wireframe Elements */}
                        <div className="space-y-2 py-2">
                          <div className="flex items-center justify-between">
                            <div className="h-4 w-28 bg-[#48C987]/50 rounded" />
                            <div className="h-3 w-16 bg-[#DDF5E3]/50 rounded" />
                          </div>
                          <div className="h-8 bg-[#032D1D] rounded-lg p-1.5 flex items-center justify-between border border-[#35B978]/30">
                            <div className="space-y-1">
                              <div className="h-2 w-32 bg-[#FFFFFF]/80 rounded" />
                              <div className="h-1.5 w-20 bg-[#DDF5E3]/60 rounded" />
                            </div>
                            <div className="h-5 px-2 bg-[#48C987] text-[#06452D] rounded text-[9px] font-bold flex items-center">
                              Enquire
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="h-10 bg-[#032D1D] rounded border border-[#35B978]/30 p-1">
                              <div className="h-1.5 w-10 bg-[#48C987]/70 rounded mb-1" />
                              <div className="h-1 w-14 bg-[#DDF5E3]/50 rounded" />
                            </div>
                            <div className="h-10 bg-[#032D1D] rounded border border-[#35B978]/30 p-1">
                              <div className="h-1.5 w-10 bg-[#DDF5E3]/70 rounded mb-1" />
                              <div className="h-1 w-14 bg-[#DDF5E3]/50 rounded" />
                            </div>
                            <div className="h-10 bg-[#032D1D] rounded border border-[#35B978]/30 p-1">
                              <div className="h-1.5 w-10 bg-[#FFFFFF]/60 rounded mb-1" />
                              <div className="h-1 w-14 bg-[#DDF5E3]/50 rounded" />
                            </div>
                          </div>
                        </div>

                        <div className="text-[10px] text-[#DDF5E3] flex items-center justify-between pt-1 border-t border-[#35B978]/30">
                          <span>Mobile First Responsive</span>
                          <span className="text-[#FFFFFF] font-bold">Clean TSX + Tailwind</span>
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#06452D] rounded-xl border border-[#35B978]/40 flex items-center justify-between text-xs text-[#FFFFFF]">
                        <span>WhatsApp Click-to-Chat Ready</span>
                        <span className="text-[#48C987] font-mono font-bold text-[11px]">Instant Leads</span>
                      </div>
                    </div>
                  )}

                  {/* Tab 3: Digital Marketing Growth Visualizer */}
                  {activeTab === 'marketing' && (
                    <div className="pt-4 space-y-3">
                      <div className="aspect-[16/10] bg-[#06452D] rounded-xl border border-[#35B978]/40 p-3.5 flex flex-col justify-between">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5 text-[#FFFFFF] font-semibold">
                            <TrendingUp className="w-3.5 h-3.5 text-[#48C987]" />
                            <span>Campaign ROAS Scaling</span>
                          </div>
                          <span className="text-[#DDF5E3] font-mono text-[11px] font-bold">+340% Traffic</span>
                        </div>

                        {/* Mint & Emerald Green Graph curve */}
                        <div className="h-24 w-full flex items-end gap-2 pt-2 px-1">
                          <div className="flex-1 bg-[#35B978]/40 rounded-t h-[20%] transition-all" />
                          <div className="flex-1 bg-[#35B978]/55 rounded-t h-[35%] transition-all" />
                          <div className="flex-1 bg-[#35B978]/70 rounded-t h-[45%] transition-all" />
                          <div className="flex-1 bg-[#48C987]/80 rounded-t h-[60%] transition-all" />
                          <div className="flex-1 bg-[#DDF5E3]/90 rounded-t h-[78%] transition-all" />
                          <div className="flex-1 bg-gradient-to-t from-[#48C987] to-[#DDF5E3] rounded-t h-[96%] transition-all shadow-md shadow-[#48C987]/40" />
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#35B978]/30 text-[10px]">
                          <div>
                            <span className="text-[#DDF5E3] block">Avg. ROAS</span>
                            <span className="text-[#FFFFFF] font-bold text-xs">4.2x Return</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[#DDF5E3] block">Lead Cost</span>
                            <span className="text-[#48C987] font-bold text-xs">-38% Lower</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#06452D] rounded-xl border border-[#35B978]/40 flex items-center justify-between text-xs text-[#FFFFFF]">
                        <span className="flex items-center gap-1.5">
                          <Share2 className="w-3.5 h-3.5 text-[#48C987]" />
                          <span>Meta Ads + Google Maps Pack</span>
                        </span>
                        <span className="text-[#DDF5E3] font-semibold text-[11px]">Active Funnel</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating accent badge */}
                <div className="absolute -bottom-4 -left-4 bg-[#06452D] border-2 border-[#48C987] rounded-xl px-3.5 py-2 shadow-xl flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#48C987] flex items-center justify-center text-[#06452D] font-black text-xs">
                    PDL
                  </div>
                  <div>
                    <span className="block text-[11px] font-extrabold text-[#FFFFFF] leading-tight">Creative & Performance</span>
                    <span className="block text-[10px] text-[#DDF5E3]">Engineered by Pavan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Announcement Bar in Deep Forest Green with White text and Mint separators */}
      <div className="bg-[#06452D] border-y border-[#35B978]/40 py-3 overflow-hidden shadow-inner">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6 text-xs sm:text-sm font-bold text-[#FFFFFF]">
          <span>PROMOTIONAL VIDEOS & REELS</span>
          <span className="text-[#DDF5E3] text-base">✦</span>
          <span>WEBSITE CREATION & SEO</span>
          <span className="text-[#DDF5E3] text-base">✦</span>
          <span>ROYAL WEDDING & BIRTHDAY INVITATIONS</span>
          <span className="text-[#DDF5E3] text-base">✦</span>
          <span>GOOGLE MAPS #1 LOCAL PACK</span>
          <span className="text-[#DDF5E3] text-base">✦</span>
          <span>META & UGC PERFORMANCE ADS</span>
          <span className="text-[#DDF5E3] text-base">✦</span>
          <span>PERSONAL SONGS & JINGLES</span>
          <span className="text-[#DDF5E3] text-base">✦</span>
          <span>SOCIAL MEDIA MANAGEMENT</span>
          <span className="text-[#DDF5E3] text-base">✦</span>
          <span>AI MARKETING & GROWTH ARCHITECTURE</span>
          <span className="text-[#DDF5E3] text-base">✦</span>

          {/* Repeated for continuous smooth marquee */}
          <span>PROMOTIONAL VIDEOS & REELS</span>
          <span className="text-[#DDF5E3] text-base">✦</span>
          <span>WEBSITE CREATION & SEO</span>
          <span className="text-[#DDF5E3] text-base">✦</span>
          <span>ROYAL WEDDING & BIRTHDAY INVITATIONS</span>
          <span className="text-[#DDF5E3] text-base">✦</span>
          <span>GOOGLE MAPS #1 LOCAL PACK</span>
          <span className="text-[#DDF5E3] text-base">✦</span>
          <span>META & UGC PERFORMANCE ADS</span>
          <span className="text-[#DDF5E3] text-base">✦</span>
          <span>PERSONAL SONGS & JINGLES</span>
          <span className="text-[#DDF5E3] text-base">✦</span>
          <span>SOCIAL MEDIA MANAGEMENT</span>
          <span className="text-[#DDF5E3] text-base">✦</span>
          <span>AI MARKETING & GROWTH ARCHITECTURE</span>
          <span className="text-[#DDF5E3] text-base">✦</span>
        </div>
      </div>
    </div>
  );
};
