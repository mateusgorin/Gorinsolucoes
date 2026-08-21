import React, { useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import HeroAccent from './HeroAccent';
import MagneticButton from './MagneticButton';

export const Hero: React.FC = () => {
  const m = motion as any;
  const customEasing = [0.22, 1, 0.36, 1];

  // Cursor-tracked spotlight behind the headline — motion values so the
  // glow follows the mouse without re-rendering the component every frame.
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(40);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}% ${mouseY}%, rgba(0,212,255,0.10), transparent 70%)`;

  const sectionRef = useRef<HTMLElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  // Each line is wrapped in an overflow-hidden mask; the inner span slides
  // up from below on load — the "kinetic type reveal" from the reference.
  const lines = [
    { text: 'Especialistas em', gradient: false },
    { text: 'soluções digitais e', gradient: true },
    { text: 'criação de sites de', gradient: true },
    { text: 'alta conversão', gradient: true },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-16 bg-[#0a0a0a] text-center"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-[0.05]" />
        <div className="grain-overlay" />
        <m.div className="absolute inset-0" style={{ background: spotlight }} />
        <HeroAccent mascotSrc="https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto/v1785030686/Picsart-26-03-23-23-16-05-033_fowe3s.webp" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: customEasing }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-cyber-primary/30 bg-cyber-primary/5 clip-corner-sm"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full opacity-80" />
          <span className="font-mono text-xs text-cyber-primary tracking-[0.2em] uppercase">Disponível para projetos</span>
        </m.div>

        <h1 className="font-sans font-bold tracking-tight text-4xl md:text-6xl lg:text-7xl leading-[1.15] mb-8">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: customEasing }}
                className={`block pb-1.5 ${
                  line.gradient
                    ? 'bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary to-cyber-secondary'
                    : 'text-cyber-white'
                }`}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <m.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: customEasing }}
          className="font-mono text-cyber-gray text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed"
        >
          <span className="text-cyber-primary">{'>>>'}</span> Desenvolvimento Web de Alta Performance.{' '}
          Ajudamos empresas e profissionais a fortalecer sua presença digital com sites rápidos, modernos e otimizados para o Google.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: customEasing }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton href="#contact">
            Solicitar orçamento grátis
          </MagneticButton>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg font-sans font-semibold text-sm border border-white/15 text-cyber-white hover:border-cyber-primary/50 hover:bg-white/5 transition-colors"
          >
            Ver portfólio
          </a>
        </m.div>
      </div>

      {/* Scroll indicator, bottom-right — matches reference placement */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 right-8 hidden md:flex items-center gap-2 font-mono text-xs text-cyber-gray"
      >
        Scroll para explorar
        <ChevronDown size={14} className="text-cyber-primary" />
      </m.div>
    </section>
  );
};

export default Hero;
