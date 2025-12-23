
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Terminal } from 'lucide-react';

export const About: React.FC = () => {
  // Fix: Use casted motion to bypass environment-specific type errors
  const m = motion as any;

  const stats = [
    { label: 'ANOS_MERCADO', value: '01' },
    { label: 'PROJETOS_ENTREGUES', value: '02' },
    { label: 'SATISFAÇÃO', value: '100%' },
  ];

  return (
    <section id="about" className="py-24 relative bg-cyber-dark scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
             {/* Cyber Frame for Image */}
             <div className="relative max-w-md mx-auto">
               <div className="absolute -inset-4 bg-gradient-to-r from-cyber-primary to-cyber-secondary opacity-30 blur-lg" />
               <div className="relative border border-cyber-primary/30 bg-cyber-black clip-corner p-2">
                 {/* Decorative Lines */}
                 <div className="absolute top-4 left-0 w-full h-[1px] bg-cyber-primary/20" />
                 <div className="absolute bottom-4 left-0 w-full h-[1px] bg-cyber-primary/20" />
                 
                 <div className="aspect-square bg-cyber-slate/30 clip-corner-sm flex items-center justify-center relative overflow-hidden group">
                   <div className="absolute inset-0 bg-cyber-primary/5 group-hover:bg-cyber-primary/10 transition-colors duration-500" />
                   <img 
                     src="https://i.ibb.co/Qv3Rc65t/file-00000000779c720eb195c4193062f3a9.png" 
                     alt="Gorin Soluções Logo" 
                     className="w-3/4 h-3/4 object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:scale-110 transition-transform duration-500"
                   />
                 </div>
                 
                 {/* Tech Overlay */}
                 <div className="absolute bottom-6 right-6 bg-black/90 border border-cyber-primary/50 p-2 font-mono text-xs text-cyber-primary flex items-center gap-2 backdrop-blur-md shadow-lg z-10">
                   LOCALIZAÇÃO: BRASÍLIA/DF
                 </div>
               </div>
             </div>
          </m.div>

          <div className="order-1 lg:order-2">
            <SectionHeading 
              title="SOBRE A GORIN" 
              subtitle="QUEM_SOMOS" 
              align="left"
            />
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-sans border-l border-cyber-primary/10 pl-6">
              <p>
                <span className="text-cyber-primary font-mono">&lt;Missão&gt;</span> A <strong>Gorin Soluções</strong> é uma agência de tecnologia especialista em Web Design e UX, focada em criar experiências digitais que geram resultados.
              </p>
              <p>
                Sediados em <strong>Brasília</strong>, desenvolvemos sites, landing pages e sistemas web com foco em design moderno, usabilidade e alta conversão. Utilizamos tecnologias de ponta (React, TypeScript) para garantir que sua empresa se destaque da concorrência com velocidade e segurança.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 border-t border-cyber-primary/20 pt-8">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl lg:text-4xl font-mono font-bold text-white mb-1 text-glow">{stat.value}</p>
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
