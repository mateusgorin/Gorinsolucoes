import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ShieldCheck } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  project: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Laís",
    role: "Proprietária",
    project: "Brinca Móvel Oficial",
    content: "O site da BrincaMóvel ficou simplesmente incrível: extremamente profissional, completo, cheio de detalhes e com uma estética impecável. Cada funcionalidade foi pensada com muito cuidado, desde os efeitos visuais até a experiência de navegação. Além do resultado, o atendimento do Mateus Gorin foi atencioso do início ao fim, trazendo ideias e sugestões estratégicas. Indico de olhos fechados."
  },
  {
    name: "Thiago e Jéssica",
    role: "Proprietários",
    project: "Brito Oliveira Assessoria",
    content: "Excelente trabalho no desenvolvimento do nosso site. Desde o início, o atendimento foi muito profissional e atencioso, entendendo exatamente o que precisávamos. O site ficou rápido, funcional e elegante, do jeito que imaginávamos. A comunicação foi clara durante todo o processo e qualquer ajuste foi feito com agilidade."
  },
  {
    name: "Vanessa",
    role: "Proprietária",
    project: "Amorim Ergonomia",
    content: "Procurei a Gorin Soluções para criação do nosso portal corporativo. O Mateus alinhou todas as ideias com muita dedicação. O site ficou rápido, estruturado e visualmente impecável. Após a publicação obtivemos um salto expressivo em contatos comerciais de clientes qualificados."
  },
  {
    name: "Leide",
    role: "Proprietária",
    project: "Mãos de Leide",
    content: "Fui muito surpreendida com a qualidade da entrega! O site ficou acolhedor, bem organizado, com informações claras e navegação intuitiva. Conseguiu traduzir perfeitamente a essência de cuidado, bem-estar e leveza do meu trabalho. Excelente profissional."
  },
  {
    name: "Larissa",
    role: "Proprietária",
    project: "Marmitaria Ventura",
    content: "O site ficou moderno, organizado e muito funcional. Ele conseguiu traduzir exatamente o que precisávamos: um canal onde o cliente encontra tudo de forma rápida, com acesso direto ao WhatsApp e cardápio online. Transmite muito profissionalismo e confiança."
  }
];

export const Testimonials: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section 
      id="testimonials" 
      className="py-28 sm:py-36 bg-[#F5F6FA] text-[#0B0B0E] rounded-t-[4rem] -mt-16 z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.06)] border-t border-black/10 relative scroll-mt-20"
    >
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6 border-b border-black/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase mb-3 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span>04 // Prova Social & Autoridade</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0B0B0E] tracking-[-0.02em]">
              Avaliações de Clientes
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-[#555660] max-w-md">
            Parcerias baseadas em compromisso técnico, atenção aos mínimos detalhes e entrega de resultados comerciais mensuráveis.
          </p>
        </div>

        {/* Testimonials Grid (Cards Grandes: radius 3.2rem = 32px) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {displayedTestimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-[32px] bg-white border border-black/10 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-8 right-8 text-black/[0.06] w-10 h-10 pointer-events-none" />

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#00D4FF] text-[#00D4FF]" />
                  ))}
                </div>

                <p className="font-body text-[#555660] text-sm sm:text-base leading-relaxed">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-5 border-t border-black/10 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-base text-[#0B0B0E]">
                    {t.name}
                  </h4>
                  <p className="font-mono text-xs text-[#555660]">
                    {t.project}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-mono text-[#0B0B0E] bg-[#F5F6FA] px-2.5 py-1 rounded-full border border-black/10">
                  <ShieldCheck size={12} className="text-[#00D4FF]" />
                  <span>VERIFICADO</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {testimonials.length > 3 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center px-7 py-3 rounded-full font-display font-semibold text-xs uppercase tracking-wider border border-black/15 text-[#0B0B0E] hover:border-black bg-white transition-all cursor-pointer shadow-sm"
            >
              {showAll ? 'Mostrar Menos Avaliações' : `Ver Todas as ${testimonials.length} Avaliações`}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
