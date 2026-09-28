import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowLeft, 
  CheckCircle2, 
  MessageCircle, 
  Layers,
  Zap,
  TrendingUp,
  ShieldCheck,
  Code2
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '../data/content';
import { StatCounter } from './StatCounter';
import { ImageReveal } from './ImageReveal';

gsap.registerPlugin(ScrollTrigger);

export const AboutPage: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start']
  });

  const ghostY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const el = titleRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const handleNavigate = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { about, founder, brand } = siteContent;

  return (
    <div className="bg-[#0B0B0E] text-[#F5F6FA] min-h-screen">
      
      {/* 1. HERO (DARK #0B0B0E): Headline sobre a missão da empresa */}
      <section 
        ref={headerRef}
        className="relative pt-32 sm:pt-40 md:pt-48 pb-28 sm:pb-36 bg-[#0B0B0E] text-[#F5F6FA] overflow-hidden"
      >
        {/* Subtle Ghost Typography */}
        <motion.div
          style={{ y: ghostY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-display font-bold text-[clamp(90px,22vw,320px)] tracking-[-0.04em] text-white/[0.02] uppercase leading-none select-none">
            {brand.shortName}
          </span>
        </motion.div>

        {/* Minimal dot background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#F5F6FA 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
          
          {/* Top Bar Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 text-xs font-mono tracking-widest uppercase">
            <a
              href="/"
              onClick={(e) => handleNavigate(e, '/')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-white/80 hover:text-white hover:border-[#00D4FF]/50 transition-all cursor-pointer group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform text-[#00D4FF]" />
              <span>Voltar ao Início</span>
            </a>

            <div className="flex items-center gap-2 text-[#9496A6]">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              <span>{brand.locationFull}</span>
            </div>
          </div>

          {/* Section Category Badge */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span>{about.tag}</span>
          </div>

          {/* H1 Monumental em General Sans: Headline sobre a missão da empresa */}
          <div className="max-w-5xl mb-6 sm:mb-8">
            <h1
              ref={titleRef}
              className="font-display font-bold text-[clamp(2.5rem,6.5vw,7.2rem)] leading-[1.04] tracking-[-0.02em] text-[#F5F6FA]"
            >
              Especialistas em soluções digitais e criação de sites de alta conversão<span className="text-[#00D4FF]">.</span>
            </h1>
          </div>

          {/* Subtexto Editorial */}
          <p className="font-body text-[#9496A6] text-base sm:text-xl md:text-[1.375rem] max-w-3xl leading-relaxed mb-10 sm:mb-12">
            {about.subtext}
          </p>

          {/* Tech Stack Pills / Indicators */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/70">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <Code2 size={13} className="text-[#00D4FF]" />
              <span>React & TypeScript</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <Zap size={13} className="text-[#00D4FF]" />
              <span>Carregamento Sub-Segundo</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <TrendingUp size={13} className="text-[#00D4FF]" />
              <span>Foco em Alta Conversão</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <ShieldCheck size={13} className="text-[#00D4FF]" />
              <span>Código Proprietário Seguro</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. BLOCO INSTITUCIONAL COM FOTO DO FUNDADOR (LIGHT #F5F6FA) */}
      <section 
        id="institucional"
        className="py-20 sm:py-28 md:py-36 bg-[#F5F6FA] text-[#0B0B0E] rounded-t-[3.2rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-20 relative shadow-[0_-30px_70px_rgba(0,0,0,0.35)] border-t border-black/[0.06]"
      >
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Foto Real & Nome do Fundador */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group w-full max-w-sm">
                
                {/* Photo Frame Container (Radius 3.2rem) */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-[3.2rem] p-2 bg-[#0B0B0E] border border-black/10 shadow-2xl overflow-hidden">
                  <ImageReveal
                    src={founder.image}
                    alt={founder.alt}
                    className="w-full h-full object-cover rounded-[2.8rem]"
                  />
                  {/* Subtle accent tag */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#0B0B0E]/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-[#00D4FF] tracking-wider uppercase z-10">
                    {brand.locationShort}
                  </div>
                </div>

                {/* Nome e Cargo do Fundador — Mateus Gorin, Fundador & Desenvolvedor Web */}
                <div className="mt-6 space-y-1">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0B0B0E] tracking-tight">
                    {founder.name}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#555660] font-semibold">
                    {founder.role}
                  </p>
                </div>

                {/* Micro-destaques profissionais vindos de data/content.ts */}
                <div className="mt-6 p-4 rounded-[1.8rem] bg-white border border-black/10 text-xs font-mono text-[#555660] text-left space-y-2 shadow-sm">
                  {founder.credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#00D4FF] shrink-0" />
                      <span className={idx === 0 ? "text-[#0B0B0E] font-semibold" : ""}>{cred}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Right: Texto Institucional */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                  <span>Sobre Nós</span>
                </div>

                <h2 className="font-display font-bold text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08] tracking-[-0.02em] text-[#0B0B0E]">
                  Design sofisticado aliado a resultados mensuráveis.
                </h2>
              </div>

              {/* Texto Institucional Oficial Solicitado vindo de data/content.ts */}
              <div className="font-body text-base sm:text-lg text-[#555660] leading-relaxed space-y-4">
                <p className="text-[#0B0B0E] font-medium text-lg sm:text-xl leading-relaxed">
                  {about.institutionalLead}
                </p>
                <p>
                  {about.institutionalBody}
                </p>
              </div>

              {/* 3 Pilares Metodológicos em Mini Cards vindos de data/content.ts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-[1.6rem] bg-white border border-black/10 space-y-2 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center mb-1">
                    <Layers size={16} />
                  </div>
                  <div className="font-display font-bold text-base text-[#0B0B0E]">{about.pillars[0].title}</div>
                  <p className="font-body text-xs text-[#555660] leading-snug">
                    {about.pillars[0].desc}
                  </p>
                </div>

                <div className="p-5 rounded-[1.6rem] bg-white border border-black/10 space-y-2 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center mb-1">
                    <Zap size={16} />
                  </div>
                  <div className="font-display font-bold text-base text-[#0B0B0E]">{about.pillars[1].title}</div>
                  <p className="font-body text-xs text-[#555660] leading-snug">
                    {about.pillars[1].desc}
                  </p>
                </div>

                <div className="p-5 rounded-[1.6rem] bg-white border border-black/10 space-y-2 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center mb-1">
                    <TrendingUp size={16} />
                  </div>
                  <div className="font-display font-bold text-base text-[#0B0B0E]">{about.pillars[2].title}</div>
                  <p className="font-body text-xs text-[#555660] leading-snug">
                    {about.pillars[2].desc}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* 3. BLOCO DE ESTATÍSTICAS (3 COLUNAS, HAIRLINE DIVIDER) vindas de data/content.ts */}
          <div className="mt-20 sm:mt-24 pt-12 sm:pt-16 border-t border-black/10">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10 border-y border-black/10 py-10 sm:py-12">
              
              {about.statistics.map((stat, idx) => (
                <div key={idx} className="px-4 sm:px-8 py-6 md:py-0 text-center md:text-left flex flex-col justify-center">
                  <div className="flex items-baseline justify-center md:justify-start gap-1">
                    <span className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0B0B0E] tracking-tight">
                      <StatCounter value={stat.value} />
                    </span>
                    <span className="text-[#00D4FF] font-display font-bold text-2xl sm:text-3xl">.</span>
                  </div>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-[#0B0B0E] mt-2">
                    {stat.label}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#555660] mt-1 max-w-xs mx-auto md:mx-0">
                    {stat.desc}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* 4. CTA FINAL (DARK #0B0B0E — TRANSIÇÃO ROUNDED-T 6.4REM) */}
      <section 
        id="cta-final"
        className="py-24 sm:py-32 md:py-40 bg-[#0B0B0E] text-[#F5F6FA] rounded-t-[3.2rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-30 relative shadow-[0_-35px_80px_rgba(0,0,0,0.6)] border-t border-white/10"
      >
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
          
          <div className="rounded-[3.2rem] bg-[#121216] border border-white/10 p-8 sm:p-14 lg:p-20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00D4FF] uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span>{about.cta.tag}</span>
              </div>
              
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F5F6FA] tracking-tight">
                {about.cta.title}
              </h2>
              
              <p className="font-body text-base sm:text-lg text-[#9496A6] leading-relaxed">
                {about.cta.desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto justify-center">
              <a
                href={brand.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#00D4FF] text-[#0B0B0E] font-display font-semibold text-sm uppercase tracking-wider hover:bg-[#3be0ff] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md cursor-pointer"
              >
                <MessageCircle size={18} />
                <span>{about.cta.buttonPrimary}</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="/projetos"
                onClick={(e) => handleNavigate(e, '/projetos')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                {about.cta.buttonSecondary}
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
