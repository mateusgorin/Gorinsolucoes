import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  // GSAP line-by-line entrance animation for main headline
  useEffect(() => {
    const el = heroTitleRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const lineSpans = el.querySelectorAll('.hero-line-inner');
      if (lineSpans.length > 0) {
        gsap.fromTo(
          lineSpans,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  // Requirement 5: Leve efeito de paralaxe (moves alguns pixels verticalmente, desativado em mobile)
  const ghostY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Editorial structured lines for headline
  const lines = [
    'Especialistas em',
    'soluções digitais e',
    'criação de sites de',
    'alta conversão'
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-32 sm:pt-36 pb-20 bg-[#FAFAF9] text-center"
    >
      {/* Requirement 5: Palavra-marca gigante fantasma ("GORIN") em cinza claro translúcido */}
      <motion.div 
        style={{ y: isMobile ? 0 : ghostY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-archivo font-black text-[clamp(90px,22vw,320px)] tracking-tighter text-[#0B0B0C]/[0.035] uppercase leading-none">
          GORIN
        </span>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Status Indicator: Disponível para projetos (pulsing green dot) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-8 border border-black/10 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs text-[#0B0B0C]/80 font-medium tracking-wider uppercase">
            Disponível para projetos
          </span>
        </motion.div>

        {/* Giant Headline in Archivo (Weight 800-900, clamp, manual line rhythm) */}
        <h1 
          ref={heroTitleRef}
          className="font-archivo font-black tracking-tight text-[#0B0B0C] text-[clamp(2.5rem,6.8vw,5.75rem)] leading-[0.98] uppercase mb-8"
        >
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden py-0.5">
              <span className="block hero-line-inner">
                {line}
              </span>
            </div>
          ))}
        </h1>

        {/* Subtitle / Value proposition */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.4 : 0.6, delay: isMobile ? 0.3 : 0.5 }}
          className="font-mono text-[#71717A] text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          <span className="text-[#0B0B0C] font-semibold">{'>>>'}</span> Desenvolvimento Web de Alta Performance.{' '}
          Ajudamos empresas e profissionais a fortalecer sua presença digital com sites rápidos, modernos e otimizados para o Google.
        </motion.p>

        {/* Calls to Action */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.4 : 0.6, delay: isMobile ? 0.4 : 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton href="#contact">
            Solicitar orçamento grátis
          </MagneticButton>
          
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-archivo font-bold text-sm tracking-tight border border-black/15 text-[#0B0B0C] hover:border-black bg-transparent hover:bg-black/[0.02] hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
          >
            Ver portfólio
          </a>
        </motion.div>
      </div>

      {/* Cuberto Rotating Agency Stamp Badge */}
      <div className="absolute bottom-8 left-8 hidden lg:block select-none pointer-events-none">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="w-full h-full text-[#0B0B0C]"
            viewBox="0 0 140 140"
          >
            <path
              id="heroBadgePath"
              d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
              fill="none"
            />
            <text className="font-mono text-[9.5px] uppercase tracking-[0.24em] fill-current font-bold">
              <textPath href="#heroBadgePath" startOffset="0%">
                GORIN SOLUÇÕES • WEB DESIGN • HIGH PERFORMANCE •
              </textPath>
            </text>
          </motion.svg>
          <div className="absolute w-3.5 h-3.5 rounded-full bg-[#00D4FF] shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
        </div>
      </div>

      {/* Scroll indicator, bottom-right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 right-8 hidden md:flex items-center gap-2 font-mono text-xs text-[#71717A]"
      >
        <span>Scroll para explorar</span>
        <ChevronDown size={14} className="text-[#0B0B0C] animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;

