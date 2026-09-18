import React from 'react';
import { motion } from 'framer-motion';
import { Gift, CheckCircle2, Zap } from 'lucide-react';
import MagneticButton from './MagneticButton';

export const LeadMagnet: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAF9] border-t border-black/10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="bg-white border border-black/10 rounded-[6px] p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 shadow-sm">
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-[#FAFAF9] border border-black/10 text-[#0B0B0C] font-mono text-xs uppercase tracking-wider rounded-full">
                <Gift size={14} className="text-[#00D4FF]" /> 
                <span className="font-semibold">Oferta Exclusiva</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-archivo font-black text-[#0B0B0C] mb-6 leading-[1.05] uppercase tracking-tight">
                Sua Presença Digital está <span className="relative inline-block">
                  Gerando Lucro?
                  <span className="absolute left-0 bottom-1 w-full h-[4px] bg-[#00D4FF] -z-10" />
                </span>
              </h2>
              
              <p className="text-[#52525B] text-base md:text-lg mb-8 leading-relaxed font-sans">
                Ganhe uma <strong className="text-[#0B0B0C]">Consultoria de Diagnóstico Gratuita de 15 minutos</strong>. Vamos analisar seu site atual (ou sua ideia) e apontar exatamente onde você está perdendo dinheiro.
              </p>
              
              <ul className="space-y-3.5 mb-10">
                {[
                  "Análise de Velocidade e Performance",
                  "Checklist de SEO para sua região",
                  "Dicas de UX para aumentar conversão",
                  "Plano de ação imediato"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#0B0B0C] font-mono text-xs sm:text-sm">
                    <CheckCircle2 size={16} className="text-[#00D4FF] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <MagneticButton href="#contact">
                QUERO MINHA CONSULTORIA GRÁTIS
              </MagneticButton>
            </motion.div>
          </div>
          
          <div className="flex-1 relative hidden md:block w-full max-w-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-black/10 p-10 rounded-[6px] bg-[#FAFAF9] text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white border border-black/10 flex items-center justify-center mx-auto mb-6">
                <Zap size={32} className="text-[#0B0B0C]" />
              </div>
              <div className="text-6xl font-archivo font-black text-[#0B0B0C] mb-2 tracking-tight">100%</div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#71717A] font-semibold">
                Gratuito & Sem Compromisso
              </div>
              
              <div className="mt-8 pt-6 border-t border-black/10">
                <p className="text-[#71717A] text-xs font-mono italic leading-relaxed">
                  "Ajudamos empresas a melhorarem seus leads com ajustes estratégicos."
                </p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

