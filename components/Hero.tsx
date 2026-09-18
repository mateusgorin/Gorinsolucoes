import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import MagneticButton from './MagneticButton';

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
        <h1 className="font-archivo font-black tracking-tight text-[#0B0B0C] text-[clamp(2.5rem,6.8vw,5.75rem)] leading-[0.98] uppercase mb-8">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden py-0.5">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ 
                  duration: isMobile ? 0.45 : 0.65, 
                  delay: (isMobile ? 0.05 : 0.1) + i * (isMobile ? 0.06 : 0.08), 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className={`block ${i === 3 ? 'text-[#0B0B0C]' : 'text-[#0B0B0C]'}`}
              >
                {i === 3 ? (
                  <span className="relative inline-block">
                    {line}
                    <span className="absolute left-0 bottom-1 w-full h-[4px] bg-[#00D4FF] -z-10" />
                  </span>
                ) : (
                  line
                )}
              </motion.span>
            </span>
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
            className="inline-flex items-center justify-center px-8 py-4 rounded-[6px] font-archivo font-bold text-sm tracking-tight border border-black/15 text-[#0B0B0C] hover:border-black bg-transparent hover:bg-black/[0.02] hover:scale-[1.025] active:scale-[0.98] transition-all cursor-pointer"
          >
            Ver portfólio
          </a>
        </motion.div>
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

