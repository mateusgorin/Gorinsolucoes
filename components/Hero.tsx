import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  // Fix: Use casted motion to bypass environment-specific type errors
  const m = motion as any;

  // Configuração da animação de carregamento futurista
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<'initial' | 'loading' | 'complete'>('initial');

  useEffect(() => {
    if (isInView) {
      // Fase 1: Início (Circuitos e Ponto de Luz) - 1s
      const phase1Timeout = setTimeout(() => {
        setPhase('loading');
      }, 1000);

      // Fase 2: Carregamento (0 a 100%) - 4s
      const duration = 4000; 
      const startTime = Date.now();
      
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(Math.round((elapsed / duration) * 100), 100);
        
        setCount(progress);
        
        if (progress >= 100) {
          clearInterval(timer);
          setPhase('complete');
        }
      }, 30);

      return () => {
        clearTimeout(phase1Timeout);
        clearInterval(timer);
      };
    }
  }, [isInView]);

  const logoUrl = "https://i.postimg.cc/K8CZPX21/Picsart-26-03-23-23-16-05-033.png";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
      {/* Cyber Grid & Background */}
      <div className="absolute inset-0 z-0 bg-cyber-black transition-colors duration-300">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-20 perspective-1000 transform-gpu" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent" />
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 max-w-6xl w-full">
          
          {/* Text Content */}
          <m.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <m.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-cyber-primary/30 bg-cyber-primary/5 rounded-none clip-corner-sm"
            >
              <span className="w-2 h-2 bg-green-500 animate-ping" />
              <span className="font-mono text-xs text-cyber-primary uppercase tracking-widest">Disponível para Projetos</span>
            </m.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tighter text-cyber-white mb-6 leading-[1.1]">
              ESPECIALISTAS EM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary filter drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">SOLUÇÕES DIGITAIS E CRIAÇÃO DE SITES DE ALTA CONVERSÃO</span>
            </h1>
            
            <m.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-cyber-gray text-sm md:text-base max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed border-l-2 border-cyber-secondary/50 pl-4"
            >
              <span className="text-cyber-primary">{">>>"}</span> Desenvolvimento Web de Alta Performance.
              <br/>
              Ajudamos empresas e profissionais a fortalecer sua presença digital com sites rápidos, modernos, com design exclusivo e otimizados para o Google.
            </m.p>
            
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
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

          {/* Visual Element / HUD - Futuristic Loading Animation */}
          <m.div 
            ref={statsRef}
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0]
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="flex-1 w-full max-w-lg relative"
          >
            <div className="relative aspect-square">
              {/* Rotating Square (Border & Background) */}
              <m.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-cyber-primary/20 bg-cyber-slate/50 clip-corner backdrop-blur-sm box-glow overflow-hidden"
              >
                {/* HUD Decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-primary" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-primary" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-primary" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-primary" />
              </m.div>

              {/* Static Center Content */}
              <div className="relative w-full h-full flex items-center justify-center p-8 z-10">
                <div className="text-center flex flex-col items-center justify-center">
                  {/* Logo Container */}
                  <div className="relative w-[140px] h-[140px] mb-4 flex items-center justify-center">
                    {/* Initial Light Point */}
                    {phase === 'initial' && (
                      <m.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.8] }}
                        className="absolute w-4 h-4 bg-cyber-primary rounded-full blur-md"
                      />
                    )}

                    {/* The Pig Logo */}
                    <m.img 
                      src={logoUrl}
                      alt="Gorin Logo"
                      referrerPolicy="no-referrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: Math.max(0, (count - 30) / 70),
                        scale: phase === 'complete' ? [1, 1.05, 1] : 1,
                        filter: `drop-shadow(0 0 ${count / 5}px rgba(0, 240, 255, ${count / 100}))`
                      }}
                      transition={{ 
                        opacity: { duration: 0.2 },
                        scale: phase === 'complete' ? { duration: 2, repeat: Infinity } : { duration: 0.5 }
                      }}
                      className={`w-full h-full object-contain relative z-20 ${phase === 'complete' ? 'animate-pulse' : ''}`}
                    />
                  </div>

                  {/* Stats Text */}
                  <div className="font-mono text-3xl font-bold text-cyber-white tracking-widest tabular-nums">
                    {count}%
                  </div>
                  
                  <m.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: phase === 'complete' ? 1 : 0.6 }}
                    className="font-mono text-[11px] md:text-xs text-cyber-secondary uppercase tracking-[0.2em] mt-1"
                  >
                    {phase === 'complete' ? 'Performance Otimizada' : 'Sincronizando Sistemas...'}
                  </m.div>
                  
                  {/* Progress Bar (Bottom) */}
                  <div className="w-32 h-3 bg-cyber-slate/30 mx-auto mt-4 overflow-hidden">
                    <m.div 
                      className="h-full bg-cyber-primary box-glow"
                      initial={{ width: "0%" }}
                      animate={{ width: `${count}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* HUD Scanning Line */}
            {phase === 'loading' && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden clip-corner">
                <div className="w-full h-[2px] bg-cyber-primary/30 shadow-[0_0_15px_rgba(0,240,255,0.5)] animate-scan" />
              </div>
            )}
          </m.div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-cyber-primary/50 hover:text-cyber-primary transition-colors" aria-label="Rolar para baixo">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};