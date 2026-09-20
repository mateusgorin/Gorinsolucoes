import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ShowcaseItem {
  title: string;
  category: string;
  desc: string;
  image: string;
  link: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "BRINCA MÓVEL",
    category: "SITE INSTITUCIONAL",
    desc: "Plataforma completa de apresentação de serviços infantis com carregamento instantâneo e layout interativo.",
    image: "/images/brincamovel.jpg",
    link: "https://www.brincamoveloficial.com.br"
  },
  {
    title: "MÃOS DE LEIDE",
    category: "SITE INSTITUCIONAL",
    desc: "Presença digital sofisticada e otimizada para agendamentos e conversão direta no WhatsApp.",
    image: "/images/maosdeleide.jpg",
    link: "https://www.maosdeleide.com.br"
  },
  {
    title: "AMORIM ERGONOMIA",
    category: "SITE INSTITUCIONAL",
    desc: "Portal corporativo robusto para consultoria técnica com arquitetura de alta performance.",
    image: "/images/amorimergonomia.jpg",
    link: "https://www.amorimergonomia.com.br"
  }
];

export const FeaturedShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTouching, setIsTouching] = useState(false);

  // Preload all showcase images on mount to avoid delay or flashing on mobile
  useEffect(() => {
    showcaseItems.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  // Automatic carousel every 4 seconds
  // Does not pause on desktop hover, but pauses when touching on mobile
  useEffect(() => {
    if (isTouching) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isTouching]);

  const currentProject = showcaseItems[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-[#FAFAF9] border-t border-black/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header Label */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
          <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#0B0B0C] uppercase font-bold">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_rgba(0,212,255,0.6)]" />
            <span>DESTAQUES // CASOS SELECIONADOS</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#71717A]">
            <span className="text-[#0B0B0C] font-bold">0{currentIndex + 1}</span>
            <span>/</span>
            <span>0{showcaseItems.length}</span>
          </div>
        </div>

        {/* Mockup Showcase Carousel Container */}
        <div 
          className="relative w-full h-[320px] xs:h-[360px] sm:h-[420px] md:h-[520px] lg:h-[580px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#18181B] border border-black/10 shadow-xl group select-none"
          onTouchStart={() => setIsTouching(true)}
          onTouchEnd={() => setIsTouching(false)}
          onTouchCancel={() => setIsTouching(false)}
          data-cursor-text="VISITAR"
        >
          {/* Active Image with Crossfade Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={currentProject.image}
                alt={currentProject.title}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Direct Link Overlay Anchor */}
          <a
            href={currentProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
            aria-label={`Visitar site de ${currentProject.title}`}
          />

          {/* Carousel Slide Indicators Floating Inside Top Right */}
          <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10">
            {showcaseItems.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex 
                    ? 'w-6 h-2 bg-[#00D4FF]' 
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Ir para o slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Touch Pause Indicator on Mobile */}
          {isTouching && (
            <div className="absolute top-6 left-6 z-20 font-mono text-[10px] uppercase tracking-wider bg-black/70 text-white px-3 py-1 rounded-full border border-white/20">
              Pausado
            </div>
          )}
        </div>

        {/* Project Information Below Image */}
        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#71717A] uppercase">
              <span className="text-[#00D4FF] font-bold">//</span>
              <span>{currentProject.category}</span>
            </div>
            
            <h3 className="font-archivo font-black text-2xl sm:text-3xl md:text-4xl text-[#0B0B0C] tracking-tight uppercase">
              {currentProject.title}
            </h3>

            <p className="font-sans text-sm md:text-base text-[#52525B] max-w-2xl leading-relaxed">
              {currentProject.desc}
            </p>
          </div>

          <a
            href={currentProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#0B0B0C] hover:text-[#00D4FF] uppercase tracking-wider transition-colors self-start md:self-end pt-2"
          >
            <span>VISITAR SITE</span>
            <ArrowUpRight size={16} className="text-[#00D4FF]" />
          </a>
        </div>

      </div>
    </section>
  );
};
