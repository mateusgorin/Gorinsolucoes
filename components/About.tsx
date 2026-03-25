import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Terminal } from 'lucide-react';

export const About: React.FC = () => {
  // Fix: Use casted motion to bypass environment-specific type errors
  const m = motion as any;

  const stats = [
    { label: 'PROJETOS_ENTREGUES', value: '7+' },
    { label: 'SATISFAÇÃO_GARANTIDA', value: '100%' },
    { label: 'DF', value: 'BSB' },
  ];

  return (
    <section id="about" className="py-24 relative bg-cyber-dark transition-colors duration-300 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1 flex flex-col items-center"
          >
             {/* Founder Profile */}
             <div className="flex flex-col items-center text-center group">
               <div className="relative w-56 h-56 md:w-64 md:h-64 mb-6">
                 {/* Gradient Glow Halo */}
                 <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#8B00FF] to-[#00FFFF] opacity-40 blur-2xl group-hover:opacity-60 transition-opacity duration-500" />
                 
                 {/* Gradient Border Container */}
                 <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-r from-[#8B00FF] to-[#00FFFF] shadow-[0_0_30px_rgba(0,255,255,0.2)] overflow-hidden transition-transform duration-500 group-hover:scale-105">
                   <div className="w-full h-full rounded-full bg-cyber-black overflow-hidden">
                     <img 
                       src="https://i.postimg.cc/wjRnzCYs/IMG-20260323-WA0090.jpg" 
                       alt="Mateus Gorin" 
                       className="w-full h-full object-cover"
                       referrerPolicy="no-referrer"
                     />
                   </div>
                 </div>
               </div>
               <div className="space-y-1">
                 <h3 className="text-cyber-white font-mono font-bold text-2xl tracking-[0.2em] uppercase">MATEUS GORIN</h3>
                 <p className="text-cyber-secondary font-mono text-sm uppercase tracking-[0.3em]">Fundador & Desenvolvedor Web</p>
               </div>
             </div>
          </m.div>

          <div className="order-1 lg:order-2">
            <SectionHeading 
              title="SOBRE O GORIN" 
              subtitle="QUEM_SOMOS" 
              align="left"
            />
            
            <div className="space-y-6 text-cyber-gray text-lg leading-relaxed font-sans border-l border-cyber-primary/10 pl-6">
              <p>
                <span className="text-cyber-primary font-mono">&lt;Missão&gt;</span> Gorin Soluções é uma agência de tecnologia especialista em Web Design e UX, focada em criar experiências digitais que geram resultados.
              </p>
              <p>
                Sediados em Brasília, desenvolvemos sites, landing pages e sistemas web com foco em design moderno, usabilidade e alta conversão. Utilizamos tecnologias de ponta (React, TypeScript) para garantir que sua empresa se destaque da concorrência com velocidade e segurança.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 border-t border-cyber-primary/20 pt-8">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl lg:text-4xl font-mono font-bold text-cyber-white mb-1 text-glow">{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-cyber-secondary font-mono tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
               {["CRIAÇÃO DE SITES", "RESPONSIVIDADE", "SEO TÉCNICO", "PERFORMANCE"].map((tag, i) => (
                 <span key={i} className="px-3 py-1 bg-cyber-primary/5 border border-cyber-primary/30 text-xs font-mono text-cyber-primary flex items-center gap-2 clip-corner-sm hover:bg-cyber-primary/20 transition-colors cursor-crosshair">
                   <Terminal size={12} />
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