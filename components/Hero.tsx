import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';
import GorinHeroAnimation from './GorinHeroAnimation';

export const Hero: React.FC = () => {
  // Fix: Use casted motion to bypass environment-specific type errors
  const m = motion as any;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const customEasing = [0.22, 1, 0.36, 1];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24 bg-[#0a0a0a]"
    >
      {/* Cyber Grid & Background */}
      <m.div 
        className="absolute inset-0 z-0"
        style={{ y: y1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: customEasing }}
      >
        <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-10 perspective-1000 transform-gpu" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00D4FF]/5 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7B2FBE]/5 rounded-full blur-[100px] opacity-30 delay-1000" />
      </m.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          
          {/* Text Content */}
          <m.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.1 }
              }
            }}
            className="flex-1 text-center lg:text-left"
          >
            <m.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEasing } }
              }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-cyber-primary/30 bg-cyber-primary/5 rounded-none clip-corner-sm"
            >
              <span className="w-2 h-2 bg-green-500 animate-ping" />
              <span className="font-mono text-xs text-cyber-primary uppercase tracking-widest">Disponível para Projetos</span>
            </m.div>
            
            <m.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEasing } }
              }}
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tighter text-cyber-white mb-6 leading-[1.1]"
            >
              ESPECIALISTAS EM 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary filter drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">SOLUÇÕES DIGITAIS E CRIAÇÃO DE SITES DE ALTA CONVERSÃO</span>
            </m.h1>
            
            <m.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEasing } }
              }}
              className="font-mono text-cyber-gray text-sm md:text-base max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed border-l-2 border-cyber-secondary/50 pl-4"
            >
              <span className="text-cyber-primary">{">>>"}</span> Desenvolvimento Web de Alta Performance.
              <br/>
              Ajudamos empresas e profissionais a fortalecer sua presença digital com sites rápidos, modernos, com design exclusivo e otimizados para o Google.
            </m.p>
            
            <m.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEasing } }
              }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <Button 
                href="#contact" 
                icon 
                variant="primary"
                className="px-6 py-3 text-sm md:text-base"
              >
                SOLICITAR ORÇAMENTO GRÁTIS
              </Button>
            </m.div>
          </m.div>

          {/* Visual Element - The New Cyber HUD Animation */}
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: customEasing }}
            className="flex-1 w-full max-w-2xl relative"
          >
            <div className="relative aspect-square w-full">
              <GorinHeroAnimation mascotSrc="https://i.postimg.cc/HxYDgcDC/Picsart-26-03-23-23-16-05-033.png" />
            </div>
          </m.div>

        </div>
      </div>

      <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="text-[#00D4FF]/50 hover:text-[#00D4FF] transition-colors" aria-label="Rolar para baixo">
          <ChevronDown size={32} />
        </a>
      </m.div>
    </section>
  );
};

export default Hero;
