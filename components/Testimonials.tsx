import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Star, Quote, ShieldCheck, Lock, Loader2 } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  project: string;
  isLocked?: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "LAÍS",
    role: "Proprietária",
    project: "Proprietária Brinca Móvel",
    content: "Mateus Gorin, preciso deixar registrado o quanto fiquei impressionada com o seu trabalho. O site da BrincaMóvel ficou simplesmente incrível, extremamente profissional, completo, cheio de detalhes e com uma estética impecável. Cada funcionalidade foi pensada com muito cuidado, desde os efeitos visuais até a experiência de quem navega pelo site. Dá pra sentir o nível de excelência em cada parte.\n\nAlém do resultado final, quero destacar o seu atendimento: você foi muito atencioso do início ao fim, sempre aberto a ouvir, perguntar, ajustar e melhorar. Trouxe ideias, sugestões estratégicas e sempre buscou entregar o melhor. É raro encontrar um profissional tão comprometido. Você não cria sites, você constrói experiências. Indico seu trabalho de olhos fechados!"
  },
  {
    name: "VANESSA",
    role: "Proprietária",
    project: "Proprietária Amorim Ergonomia",
    content: "RELATO_EM_BREVE...",
    isLocked: true
  },
  {
    name: "LEIDE",
    role: "Proprietária",
    project: "Proprietária Mãos de Leide",
    content: "RELATO_EM_BREVE...",
    isLocked: true
  }
];

export const Testimonials: React.FC = () => {
  const m = motion as any;

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-cyber-dark scroll-mt-24">
      {/* Grid background adjustment */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-5 z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="DEPOIMENTOS REAIS" 
          subtitle="O QUE DIZEM MEUS CLIENTES" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <m.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group h-full"
            >
              <div className={`h-full border p-8 clip-corner relative transition-all duration-500 flex flex-col ${
                testimonial.isLocked 
                  ? 'bg-cyber-black/40 border-white/5 grayscale opacity-60' 
                  : 'bg-cyber-slate/30 border-cyber-primary/20 hover:border-cyber-primary hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]'
              }`}>
                
                {/* Quote Icon */}
                <div className={`absolute top-4 right-4 ${testimonial.isLocked ? 'text-white/5' : 'text-cyber-primary/10 group-hover:text-cyber-primary/30'} transition-colors`}>
                  <Quote size={48} />
                </div>

                {/* Stars/Status */}
                <div className="flex gap-1 mb-6">
                  {testimonial.isLocked ? (
                    <div className="flex items-center gap-2 font-mono text-[10px] text-gray-500">
                      <Loader2 size={14} className="animate-spin" /> STATUS: AGUARDANDO_DADOS
                    </div>
                  ) : (
                    [...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-cyber-primary text-cyber-primary drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" />
                    ))
                  )}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  {testimonial.isLocked ? (
                    <div className="flex flex-col items-center justify-center h-32 space-y-4 opacity-30">
                       <Lock size={32} />
                       <p className="font-mono text-xs tracking-widest uppercase">Conteúdo Bloqueado</p>
                    </div>
                  ) : (
                    <p className="text-gray-300 italic mb-8 leading-relaxed font-sans text-sm md:text-base whitespace-pre-line">
                      "{testimonial.content}"
                    </p>
                  )}
                </div>

                {/* Footer */}
                <div className={`flex items-center justify-between border-t pt-6 ${testimonial.isLocked ? 'border-white/5' : 'border-cyber-primary/10'}`}>
                  <div>
                    <h4 className={`font-mono font-bold tracking-wider ${testimonial.isLocked ? 'text-gray-500' : 'text-white'}`}>{testimonial.name}</h4>
                    <p className="text-cyber-secondary text-[10px] font-mono uppercase tracking-tighter">
                      {testimonial.project}
                    </p>
                  </div>
                  
                  {!testimonial.isLocked && (
                    <div className="flex items-center gap-1 text-[9px] font-mono text-green-400 bg-green-400/5 px-2 py-0.5 border border-green-400/20">
                      <ShieldCheck size={10} />
                      FEEDBACK_REAL
                    </div>
                  )}
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* Floating elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyber-primary/5 rounded-full blur-[80px] pointer-events-none" />
      </div>
    </section>
  );
};