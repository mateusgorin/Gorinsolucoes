import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/content';
import { StatCounter } from './StatCounter';
import { ImageReveal } from './ImageReveal';

export const About: React.FC = () => {
  const { about, founder, brand } = siteContent;

  return (
    <section 
      id="about" 
      className="py-24 sm:py-32 md:py-40 relative bg-[#121216] text-[#F5F6FA] rounded-t-[3.2rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-20 shadow-[0_-30px_70px_rgba(0,0,0,0.6)] border-t border-white/10 scroll-mt-20"
    >
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Founder Profile — Mateus Gorin — Fundador & Desenvolvedor Web */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-56 h-56 md:w-64 md:h-64 mb-6">
                <div className="relative w-full h-full rounded-full p-1.5 border border-white/15 bg-[#141418] overflow-hidden shadow-2xl">
                  <ImageReveal 
                    src={founder.image} 
                    alt={founder.alt} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-2 right-6 px-3.5 py-1 bg-[#18181D] border border-white/15 text-[#F5F6FA] rounded-full text-[11px] font-mono tracking-wider shadow-md z-10">
                  {brand.locationShort}
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-display font-bold text-2xl tracking-[-0.02em] text-[#F5F6FA]">
                  {founder.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-[#9496A6]">
                  {founder.role}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span>{about.tag}</span>
            </div>

            {/* Texto Exato Solicitado vindo de data/content.ts */}
            <div className="space-y-4 text-[#F5F6FA] text-base md:text-lg leading-relaxed font-body font-normal">
              <p className="text-lg md:text-xl font-medium leading-relaxed text-[#F5F6FA]">
                {about.institutionalFull}
              </p>
            </div>

            {/* Stats - Hairline Dividers (10+ Projetos entregues | 100% Satisfação garantida | BSB DF Base operacional) */}
            <div className="grid grid-cols-3 gap-6 mt-10 border-t border-b border-white/10 py-8">
              {about.statistics.map((stat, idx) => (
                <div key={idx} className="text-left">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F5F6FA] tracking-tight mb-1">
                    {stat.value.match(/\d/) ? <StatCounter value={stat.value} /> : stat.value}
                  </p>
                  <p className="text-[10px] md:text-xs text-[#9496A6] font-mono tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Capability Indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {[
                "Web Design & UX",
                "React & TypeScript",
                "Sites & Landing Pages",
                "Sistemas Web",
                "Alta Conversão"
              ].map((pill, i) => (
                <span 
                  key={i} 
                  className="px-3.5 py-1.5 bg-white/[0.04] border border-white/10 text-xs font-sans text-[#F5F6FA] rounded-full flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                  {pill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
