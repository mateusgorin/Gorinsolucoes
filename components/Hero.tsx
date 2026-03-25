import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  // Fix: Use casted motion to bypass environment-specific type errors
  const m = motion as any;

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

          {/* Visual Element / Cyberpunk Animated Container */}
          <m.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-lg relative flex items-center justify-center"
          >
            <m.div 
              className="relative w-full max-w-[480px] aspect-square flex items-center justify-center" 
              style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
              animate={{
                rotateX: [2, -2, 2],
                rotateY: [-2, 2, -2],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              
              {/* 3D Depth Glow Floor */}
              <div className="absolute w-[120%] h-[120%] rounded-full bg-cyber-primary/20 blur-[100px] pointer-events-none" 
                   style={{ animation: 'glow-pulse-3d 8s ease-in-out infinite', transformStyle: 'preserve-3d' }} />

              {/* Binary Rain Background (Contained) */}
              <div className="absolute w-[60%] h-[60%] overflow-hidden opacity-10 pointer-events-none z-10">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="binary-rain-column animate-rain"
                    style={{ 
                      left: `${i * 12.5 + 6}%`, 
                      animationDuration: `${2 + Math.random() * 3}s`, 
                      animationDelay: `${Math.random() * 2}s` 
                    }}
                  >
                    {"0101101001010110100101011010010101101001".split('').join('\n')}
                  </div>
                ))}
              </div>

              {/* Rotating Rhombus 1 (Purple - Largest) */}
              <div className="absolute w-[82%] h-[82%] neon-border-purple cyber-cut-corners animate-rotate-1" />
              
              {/* Rotating Rhombus 2 (White - Innermost) */}
              <div className="absolute w-[72%] h-[72%] neon-border-white cyber-cut-corners animate-rotate-2" />

              {/* Central Logo Container */}
              <div className="relative w-[58%] h-[58%] flex items-center justify-center z-20" style={{ transformStyle: 'preserve-3d' }}>
                
                {/* 3D Rotating Square Frame (Orbiting) - Cyan with cut corners */}
                <div className="absolute w-[110%] h-[110%] neon-border-cyan cyber-cut-corners bg-cyber-black/20 backdrop-blur-md animate-3d-frame" />

                {/* Logo (Static position, independent animation) */}
                <m.img 
                  src={logoUrl}
                  alt="Gorin Logo"
                  referrerPolicy="no-referrer"
                  className="w-[75%] h-[75%] object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.4)] relative z-30"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotateY: [-5, 5, -5],
                    rotateX: [5, -5, 5],
                    z: 20,
                    filter: [
                      'drop-shadow(0 0 10px rgba(0,240,255,0.3))',
                      'drop-shadow(0 0 20px rgba(0,240,255,0.5))',
                      'drop-shadow(0 0 10px rgba(0,240,255,0.3))'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

            </m.div>
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