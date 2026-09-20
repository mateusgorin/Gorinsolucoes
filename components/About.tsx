import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';

const AnimatedCounter = ({ value }: { value: string }) => {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(count, numericValue, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
    }
  }, [inView, count, numericValue]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export const About: React.FC = () => {
  const stats = [
    { label: 'PROJETOS ENTREGUES', value: '10+' },
    { label: 'SATISFAÇÃO GARANTIDA', value: '100%' },
    { label: 'BASE OPERACIONAL', value: 'BSB DF' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-[#FAFAF9] border-t border-black/10 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Founder Profile */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-56 h-56 md:w-64 md:h-64 mb-6">
                <div className="relative w-full h-full rounded-full p-1 border border-black/15 bg-white overflow-hidden shadow-sm">
                  <img 
                    src="/images/mateus-gorin.webp"
                    alt="Mateus Gorin" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-full transition-all duration-500"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-archivo font-black text-2xl tracking-tight text-[#0B0B0C] uppercase">
                  MATEUS GORIN
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-[#71717A]">
                  Fundador & Desenvolvedor Web
                </p>
              </div>
            </motion.div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7">
            <SectionHeading 
              title="SOBRE O GORIN" 
              subtitle="01 — SOBRE NÓS" 
              align="left"
            />
            
            <div className="space-y-6 text-[#3F3F46] text-base md:text-lg leading-relaxed font-sans">
              <p>
                <strong className="text-[#0B0B0C] font-semibold">Gorin Soluções</strong> é uma agência de tecnologia especialista em Web Design e UX, focada em criar experiências digitais que geram resultados.
              </p>
              <p>
                Sediados em Brasília, desenvolvemos sites, landing pages e sistemas web com foco em design moderno, usabilidade e alta conversão. Utilizamos tecnologias de ponta (React, TypeScript) para garantir que sua empresa se destaque da concorrência com velocidade e segurança.
              </p>
            </div>

            {/* Editorial Stats - 1px hairline dividers */}
            <div className="grid grid-cols-3 gap-6 mt-12 border-t border-b border-black/10 py-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-left">
                  <p className="text-3xl lg:text-4xl font-archivo font-black text-[#0B0B0C] tracking-tight mb-1">
                    {stat.value.match(/\d/) ? <AnimatedCounter value={stat.value} /> : stat.value}
                  </p>
                  <p className="text-[10px] md:text-xs text-[#71717A] font-mono uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {["CRIAÇÃO DE SITES", "RESPONSIVIDADE", "SEO TÉCNICO", "PERFORMANCE"].map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 bg-white border border-black/10 text-xs font-mono text-[#0B0B0C] rounded-[4px] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#00D4FF]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
