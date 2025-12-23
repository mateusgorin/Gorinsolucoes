
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronDown, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  // Fix: Use casted motion to bypass environment-specific type errors
  const m = motion as any;

  // Configuração da animação de contagem
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });
  const [count, setCount] = useState(20);

  useEffect(() => {
    if (isInView) {
      const duration = 2500; 
      const steps = 100 - 20;
      const intervalTime = duration / steps;
      
      let start = 20;
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= 100) clearInterval(timer);
      }, intervalTime);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Cyber Grid & Background */}
      <div className="absolute inset-0 z-0 bg-cyber-black">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-20 perspective-1000 transform-gpu" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent" />
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
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
              className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-cyber-primary/30 bg-cyber-primary/5 rounded-none clip-corner-sm"
            >
              <span className="w-2 h-2 bg-green-500 animate-ping" />
              <span className="font-mono text-xs text-cyber-primary uppercase tracking-widest">Disponível para Projetos</span>
            </m.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tighter text-white mb-6 leading-tight">
              CRIAÇÃO DE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary filter drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                SITES_WEB
              </span>
            </h1>
            
            <m.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-gray-400 text-sm md:text-base max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed border-l-2 border-cyber-secondary/50 pl-4"
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
              <Button href="#contact" icon variant="primary">CONTATO</Button>
              <Button href="#projects" variant="outline">VER PORTFÓLIO</Button>
            </m.div>
          </m.div>

          {/* Visual Element / HUD */}
          <m.div 
            ref={statsRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-lg relative animate-float-slow"
          >
            <div className="relative aspect-square border border-cyber-primary/20 bg-cyber-slate/50 clip-corner p-8 backdrop-blur-sm box-glow">
              {/* HUD Decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-primary" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-primary" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-primary" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-primary" />

              {/* Animated Center Content */}
              <div className="w-full h-full flex items-center justify-center relative">
                 <div className="absolute inset-0 border border-cyber-secondary/20 rounded-full animate-[spin_10s_linear_infinite]" />
                 <div className="absolute inset-4 border border-cyber-primary/20 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
                 
                 <div className="text-center z-10 space-y-2">
                   <Zap className={`w-16 h-16 text-cyber-primary mx-auto transition-all duration-300 ${isInView ? 'animate-pulse drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]' : ''}`} />
                   <div className="font-mono text-4xl font-bold text-white tracking-widest tabular-nums">
                     {count}%
                   </div>
                   <div className="font-mono text-xs text-cyber-secondary uppercase">Performance Otimizada</div>
                   
                   {/* Loading Bar */}
                   <div className="w-32 h-1 bg-cyber-slate mx-auto mt-2 overflow-hidden rounded-full">
                     <m.div 
                       className="h-full bg-cyber-primary box-glow"
                       initial={{ width: "20%" }}
                       animate={{ width: `${count}%` }}
                       transition={{ duration: 0.1 }}
                     />
                   </div>
                 </div>
              </div>
            </div>
            
            {/* Background geometric shapes */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-cyber-secondary/20 clip-corner bg-cyber-secondary/5" />
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
