import React from 'react';
import { motion } from 'framer-motion';
import { Gift, CheckCircle2, Zap } from 'lucide-react';
import { Button } from './ui/Button';

export const LeadMagnet: React.FC = () => {
  const m = motion as any;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-secondary/5 skew-y-3 transform origin-right" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto bg-cyber-black border border-cyber-secondary/30 clip-corner p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-[0_0_50px_rgba(112,0,255,0.1)]">
          
          <div className="flex-1">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-cyber-secondary/10 border border-cyber-secondary/30 text-cyber-secondary font-mono text-xs uppercase tracking-widest clip-corner-sm">
                <Gift size={14} /> Oferta Exclusiva
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-cyber-white mb-6 leading-tight">
                Sua Presença Digital está <span className="text-cyber-secondary">Gerando Lucro?</span>
              </h2>
              
              <p className="text-cyber-gray text-lg mb-8 leading-relaxed">
                Ganhe uma <strong>Consultoria de Diagnóstico Gratuita de 15 minutos</strong>. Vamos analisar seu site atual (ou sua ideia) e apontar exatamente onde você está perdendo dinheiro.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Análise de Velocidade e Performance",
                  "Checklist de SEO para sua região",
                  "Dicas de UX para aumentar conversão",
                  "Plano de ação imediato"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-cyber-white font-mono text-sm">
                    <CheckCircle2 size={18} className="text-cyber-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Button href="#contact" variant="primary" className="bg-cyber-secondary border-cyber-secondary hover:bg-cyber-white hover:text-black" icon>
                QUERO MINHA CONSULTORIA GRÁTIS
              </Button>
            </m.div>
          </div>
          
          <div className="flex-1 relative hidden md:block">
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-cyber-secondary/20 blur-[60px] rounded-full animate-pulse" />
              <div className="relative border-2 border-cyber-secondary/30 p-10 clip-corner bg-cyber-slate/20 backdrop-blur-sm text-center">
                <Zap size={80} className="text-cyber-secondary mx-auto mb-6 animate-bounce" />
                <div className="text-5xl font-bold text-cyber-white mb-2 font-mono">100%</div>
                <div className="text-cyber-secondary font-mono text-sm uppercase tracking-widest">Gratuito & Sem Compromisso</div>
                
                <div className="mt-8 pt-8 border-t border-cyber-secondary/20">
                  <p className="text-cyber-gray text-xs font-mono italic">
                    "Ajudamos empresas a melhorarem seus leads com ajustes estratégicos."
                  </p>
                </div>
              </div>
            </m.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
