import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Star, Quote, ShieldCheck } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    name: "LAÍS",
    role: "Proprietária",
    project: "Brinca Móvel",
    content: "O novo site superou todas as expectativas. A velocidade de carregamento é impressionante e o design moderno trouxe um novo patamar de profissionalismo para nossa marca."
  },
  {
    name: "LEIDE",
    role: "Proprietária",
    project: "Mãos de Leide",
    content: "Excelente trabalho. Recebo elogios constantes dos clientes sobre a facilidade de navegação e a beleza do site. A Gorin Soluções entendeu perfeitamente minha necessidade."
  },
  {
    name: "VANESSA",
    role: "Proprietária",
    project: "Amorim Ergonomia",
    content: "Profissionalismo impecável. O site desenvolvido otimizou nossa presença digital e a entrega foi feita com total suporte. Recomendo para quem busca qualidade."
  }
];

export const Testimonials: React.FC = () => {
  const m = motion as any;

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-cyber-black scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyber-primary/5 z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="DEPOIMENTOS REAIS" 
          subtitle="O QUE DIZEM MEUS CLIENTES" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <m.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="h-full bg-cyber-slate/30 border border-cyber-primary/20 p-8 clip-corner relative hover:border-cyber-primary/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                
                {/* Quote Icon Decoration */}
                <div className="absolute top-4 right-4 text-cyber-primary/10 group-hover:text-cyber-primary/30 transition-colors">
                  <Quote size={40} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-cyber-primary text-cyber-primary drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 italic mb-8 leading-relaxed font-sans relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Footer / Meta */}
                <div className="flex items-center justify-between border-t border-cyber-primary/10 pt-6">
                  <div>
                    <h4 className="text-white font-mono font-bold tracking-wider">{testimonial.name}</h4>
                    <p className="text-cyber-secondary text-[10px] font-mono uppercase">{testimonial.role} | {testimonial.project}</p>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 text-[9px] font-mono text-green-400 bg-green-400/5 px-2 py-0.5 border border-green-400/20">
                      <ShieldCheck size={10} />
                      VERIFIED_FEEDBACK
                    </div>
                  </div>
                </div>

                {/* Decorative scanning line animation on hover */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-full h-[1px] bg-cyber-primary/50 absolute top-0 animate-scan" />
                </div>
              </div>
            </m.div>
          ))}
        </div>
        
        {/* Statistics or Trust Badges below testimonials if desired */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
           {/* Aqui poderiam entrar mini logotipos ou selos de confiança */}
        </div>
      </div>
    </section>
  );
};