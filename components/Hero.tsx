import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Zap, Code2, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '../data/content';
import { MeshPanel } from './MeshPanel';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const ghostY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // GSAP ScrollTrigger masked reveal for headline
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const lineSpans = el.querySelectorAll('.hero-line');
      if (lineSpans.length > 0) {
        gsap.fromTo(
          lineSpans,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  const { hero, brand } = siteContent;

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-start pt-32 sm:pt-40 md:pt-48 pb-28 sm:pb-36 bg-[#0B0B0E] text-[#F5F6FA] overflow-hidden"
    >
      {/* MeshPanel behind hero for depth */}
      <MeshPanel intensity={0.6} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Subtle Ghost Typography */}
      <motion.div
        style={{ y: ghostY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-display font-bold text-[clamp(100px,24vw,340px)] tracking-[-0.04em] text-white/[0.02] uppercase leading-none select-none">
          {brand.shortName}
        </span>
      </motion.div>

      {/* Subtle grid pattern without full glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#F5F6FA 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      {/* Main Container - 128rem (max-w-[1280px]) */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col">
        
        {/* Eyebrow style label above headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-6 uppercase font-medium"
          style={{
            fontSize: '0.8rem',
            letterSpacing: '0.15em',
            color: 'var(--accent-cyan)',
          }}
        >
          <span
            className="inline-block rounded-full"
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: 'var(--accent-cyan)',
            }}
          />
          <span>{brand.locationFull} · Agência de Desenvolvimento Web &amp; IA</span>
        </motion.div>

        {/* Monumental Headline: H1 */}
        <div className="max-w-5xl mb-6 sm:mb-8 overflow-hidden">
          <h1
            ref={titleRef}
            className="font-display font-bold text-[clamp(2.75rem,5vw+1rem,5.5rem)] leading-[1.05] tracking-[-0.02em] text-[#F5F6FA]"
          >
            {hero.headlineLines.map((line, idx) => (
              <span key={idx} className="block overflow-hidden">
                <span className="hero-line block">
                  {line}
                  {idx === hero.headlineLines.length - 1 && (
                    <span className="text-[#00D4FF]">.</span>
                  )}
                </span>
              </span>
            ))}
          </h1>
        </div>

        {/* Subtexto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[1.15rem] leading-[1.6] max-w-3xl mb-10 sm:mb-12"
          style={{ color: 'var(--text-muted-dark)' }}
        >
          {hero.subtext}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-16 sm:mb-20"
        >
          {/* Main CTA: Fale com a gente */}
          <a
            href={brand.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00D4FF] text-[#0B0B0E] font-display font-semibold text-sm sm:text-base tracking-wide hover:bg-[#3fe0ff] hover:shadow-[0_8px_25px_rgba(0,212,255,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
          >
            <span>{hero.ctaPrimary}</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Secondary CTA: Ver Projetos */}
          <a
            href="#cases"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/15 bg-white/[0.03] text-[#F5F6FA] font-display font-medium text-sm sm:text-base tracking-wide hover:border-white/35 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer"
          >
            <span>{hero.ctaSecondary}</span>
          </a>

          {/* Direct response commitment badge */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#9496A6] sm:ml-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
            <span>{hero.responseCommitment}</span>
          </div>
        </motion.div>

        {/* Editorial Metrics & Architecture Bar (Cards Grandes: radius 3.2rem) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-[3.2rem] bg-[#121216] border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: 3 Core Pillars */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              
              <div className="sm:pr-4 pt-4 sm:pt-0">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] mb-1.5">
                  <Zap size={14} />
                  <span>{hero.pillars[0].tag}</span>
                </div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-[#F5F6FA] tracking-tight">
                  {hero.pillars[0].value}
                </div>
                <p className="font-body text-xs text-[#9496A6] mt-1 leading-snug">
                  {hero.pillars[0].desc}
                </p>
              </div>

              <div className="sm:px-4 pt-4 sm:pt-0">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] mb-1.5">
                  <ShieldCheck size={14} />
                  <span>{hero.pillars[1].tag}</span>
                </div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-[#F5F6FA] tracking-tight">
                  {hero.pillars[1].value}
                </div>
                <p className="font-body text-xs text-[#9496A6] mt-1 leading-snug">
                  {hero.pillars[1].desc}
                </p>
              </div>

              <div className="sm:pl-4 pt-4 sm:pt-0">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] mb-1.5">
                  <Code2 size={14} />
                  <span>{hero.pillars[2].tag}</span>
                </div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-[#F5F6FA] tracking-tight">
                  {hero.pillars[2].value}
                </div>
                <p className="font-body text-xs text-[#9496A6] mt-1 leading-snug">
                  {hero.pillars[2].desc}
                </p>
              </div>

            </div>

            {/* Right: Operational Status Callout with subtle accent line */}
            <div className="md:col-span-5 bg-[#17171D] border border-white/10 rounded-[1.6rem] p-5 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#9496A6] uppercase tracking-wider">
                  {hero.operationalStatus}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] font-mono text-[10px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                  ONLINE
                </span>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#F5F6FA] leading-relaxed">
                Desenvolvemos sites institucionais, landing pages de alta conversão, portais corporativos e automações de atendimento com IA.
              </p>
              <div className="flex items-center gap-3 pt-1 border-t border-white/10 text-[11px] font-mono text-[#9496A6]">
                <span className="text-[#F5F6FA]">Atendimento Direto</span>
                <span>·</span>
                <span>Sem Intermediários</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
