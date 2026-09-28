import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/content';

export const Services: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const { services } = siteContent;

  return (
    <section 
      id="services" 
      className="py-24 sm:py-32 md:py-40 bg-[#F5F6FA] text-[#0B0B0E] rounded-t-[3.2rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-30 shadow-[0_-30px_70px_rgba(0,0,0,0.12)] border-t border-black/10 relative scroll-mt-20"
    >
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Layout Grid with Sticky Header within the long section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: STICKY Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span>{services.tag}</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] text-[#0B0B0E]">
              {services.homeTitle}
            </h2>

            <p className="font-body text-[#555660] text-sm sm:text-base leading-relaxed">
              {services.subtext}
            </p>

            <div className="pt-4 hidden lg:block">
              <a 
                href="/servicos"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/servicos');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 font-display font-semibold text-xs uppercase tracking-wider text-[#0B0B0E] hover:text-[#00D4FF] transition-colors group cursor-pointer"
              >
                <span>Ver catálogo completo</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#00D4FF]" />
              </a>
            </div>
          </div>

          {/* Right Column: Scrollable Services Cards (Radius 3.2rem = 32px) */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            {services.items.map((service, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  key={service.number}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full rounded-[32px] p-6 sm:p-8 md:p-10 transition-all duration-300 border cursor-pointer ${
                    isActive 
                      ? 'bg-[#0B0B0E] text-[#F5F6FA] border-black/20 shadow-xl'
                      : 'bg-white text-[#0B0B0E] border-black/10 hover:border-black/25 shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className={`font-mono text-xs uppercase tracking-widest font-semibold ${
                        isActive ? 'text-[#00D4FF]' : 'text-[#555660]'
                      }`}>
                        {service.category}
                      </p>
                      <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl tracking-[-0.02em] leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <span className={`font-mono text-xl sm:text-2xl font-bold ${
                      isActive ? 'text-[#00D4FF]' : 'text-black/30'
                    }`}>
                      {service.number}
                    </span>
                  </div>

                  {/* Expandable Body */}
                  <div className={`grid transition-all duration-300 ease-out overflow-hidden ${
                    isActive ? 'grid-rows-[1fr] mt-5 pt-5 border-t border-white/10 opacity-100' : 'grid-rows-[0fr] mt-0 pt-0 opacity-0'
                  }`}>
                    <div className="min-h-0 space-y-4">
                      <p className="font-body text-[#9496A6] text-sm sm:text-base leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.deliverables.map((item, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-white/90"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
