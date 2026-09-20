import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Star, Quote, ShieldCheck, BookOpen, ChevronUp } from 'lucide-react';

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
    content: "Mateus Gorin, preciso deixar registrado o quanto fiquei impressionada com o seu trabalho. O site da BrincaMóvel ficou simplesmente incrível extremamente profissional, completo, cheio de detalhes e com uma estética impecável. Cada funcionalidade foi pensada com muito cuidado, desde os efeitos visuais até a experiência de quem navega pelo site. Dá pra sentir o nível de excelência em cada parte.\n\nAlém do resultado final, quero destacar o seu atendimento: você foi muito atencioso do início ao fim, sempre aberto a ouvir, perguntar, ajustar e melhorar. Em nenhum momento fez algo “no automático”. Pelo contrário, trouxe ideias, sugestões, dicas estratégicas e sempre buscou entregar o melhor, não apenas o combinado. É raro encontrar um profissional tão comprometido. Dá pra ve que você não cria sites, você constrói experiências. Indico seu trabalho de olhos fechados."
  },
  {
    name: "THIAGO E JÉSSICA",
    role: "Proprietários",
    project: "Proprietários Brito Oliveira",
    content: "Quero agradecer pelo excelente trabalho no desenvolvimento do meu site. Desde o início, o atendimento foi muito profissional e atencioso, sempre entendendo exatamente o que eu precisava. O site ficou rápido e funcional, do jeito que eu imaginava, sem complicação desnecessária.\n\nA comunicação foi clara durante todo o processo e qualquer ajuste que pedi foi feito com agilidade. Dá pra perceber o cuidado e o conhecimento no que faz. Fiquei muito satisfeito com o resultado final e com certeza recomendo para quem precisa de um site bem feito e profissional."
  },
  {
    name: "LEIDE",
    role: "Proprietária",
    project: "Proprietária Mãos de Leide",
    content: "O Mateus me procurou inicialmente para uma sessão de massagem relaxante, devido a uma dor lombar. Durante nosso atendimento, ele compartilhou que trabalhava com criação de sites, e acabei comentando meu desejo de ter um, embora não soubesse nem por onde começar. Confiei no seu trabalho e fui surpreendida! O site ficou acolhedor, bem organizado, com informações claras e uma navegação super intuitiva. Ele conseguiu traduzir perfeitamente a essência da massagem: cuidado, bem-estar e leveza. Sou muito grata pelo resultado. Excelente profissional!"
  },
  {
    name: "VANESSA",
    role: "Proprietária",
    project: "Proprietária Amorim Ergonomia",
    content: "Procurei a Gorin Soluções para criação do site, tinha uma ideia de como ficaria mas ao longo da criação o Mateus foi alinhando junto comigo as ideias, o site ficou perfeito, rápido e visualmente impecável. O trabalho foi feito com atenção aos detalhes e muita dedicação. Após a criação do site obtive bastante resultados e muitos clientes. Recomendo de olhos fechados."
  },
  {
    name: "LARISSA",
    role: "Proprietária",
    project: "Proprietária Marmoraria Ventura",
    content: "Quero deixar aqui meu agradecimento e reconhecimento pelo trabalho incrível que o Mateus Gorin fez no site da nossa marmitaria.\n\nO site ficou simplesmente perfeito: moderno, organizado e, principalmente, muito funcional. Ele conseguiu traduzir exatamente o que precisávamos — um espaço onde o cliente encontra tudo de forma rápida, como acesso ao WhatsApp, pedidos, Instagram e localização.\n\nAlém disso, o site transmite profissionalismo e confiança, o que faz toda a diferença para quem está conhecendo nosso negócio pela primeira vez.\n\nO Gorin foi extremamente atencioso, paciente e cuidadoso em cada detalhe. O projeto foi feito com carinho e com uma qualidade de trabalho de alto nível.\n\nCom certeza recomendo o trabalho dele para qualquer empresa que queira se posicionar melhor no digital e ter uma presença online bonita e eficiente.\n\nMuito obrigada por tudo!!! 🫶🏼"
  }
];

const TestimonialCard = React.forwardRef<HTMLDivElement, { testimonial: Testimonial; idx: number; showAll: boolean }>(({ testimonial, idx, showAll }, ref) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  const maxLength = 380;
  const isLong = testimonial.content.length > maxLength;
  const displayContent = isExpanded ? testimonial.content : testimonial.content.slice(0, maxLength);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, delay: showAll ? 0 : idx * 0.1 }}
      className="group h-full flex flex-col"
    >
      <div className={`flex-1 border border-black/10 bg-white rounded-[20px] md:rounded-[24px] p-8 relative transition-all duration-300 ease-out flex flex-col hover:border-black/30 hover:scale-[1.02] hover:shadow-lg cursor-pointer shadow-sm ${
        isExpanded ? 'h-auto min-h-[400px]' : 'h-[400px]'
      }`}>
        
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 text-black/5 pointer-events-none">
          <Quote size={40} />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={15} className="fill-[#00D4FF] text-[#00D4FF]" />
          ))}
        </div>

        {/* Content */}
        <div className={`flex-grow ${isExpanded ? '' : 'overflow-hidden'} mb-6`}>
          <p className="text-[#3F3F46] leading-relaxed font-sans text-sm md:text-base whitespace-pre-line">
            "{displayContent}{!isExpanded && isLong ? '...' : ''}"
            {isLong && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#0B0B0C] font-semibold underline underline-offset-4 ml-1.5 hover:text-[#00D4FF] cursor-pointer inline-flex items-center text-xs font-mono"
              >
                {isExpanded ? 'ver menos ↑' : 'ver mais →'}
              </button>
            )}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-black/10 pt-5 mt-auto">
          <div>
            <h4 className="font-archivo font-bold text-sm text-[#0B0B0C] uppercase tracking-tight">
              {testimonial.name}
            </h4>
            <p className="text-[#71717A] text-[11px] font-mono uppercase tracking-wider">
              {testimonial.project}
            </p>
          </div>
          
          <div className="flex items-center gap-1 text-[10px] font-mono text-[#0B0B0C] bg-[#FAFAF9] px-3 py-1 border border-black/10 rounded-full">
            <ShieldCheck size={12} className="text-[#00D4FF]" />
            <span>VERIFICADO</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export const Testimonials: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  React.useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isPortrait = height > width;

      if (width < 768) {
        setVisibleCount(2); // Mobile
      } else if (width < 1024) {
        if (isPortrait) {
          setVisibleCount(4);
        } else {
          setVisibleCount(3);
        }
      } else {
        setVisibleCount(3);
      }
    };

    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, visibleCount);

  return (
    <section id="testimonials" className="pt-28 md:pt-36 pb-24 md:pb-32 bg-[#FAFAF9] relative scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <SectionHeading 
          title="DEPOIMENTOS REAIS" 
          subtitle="04 — CLIENTES & FEEDBACK" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((testimonial, idx) => (
              <TestimonialCard 
                key={testimonial.name} 
                testimonial={testimonial} 
                idx={idx} 
                showAll={showAll} 
              />
            ))}
          </AnimatePresence>
        </div>

        {testimonials.length > visibleCount && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-black/15 bg-white text-[#0B0B0C] font-mono text-xs font-bold uppercase tracking-wider rounded-[4px] hover:bg-[#0B0B0C] hover:text-white transition-all shadow-sm cursor-pointer"
            >
              {showAll ? (
                <>VER MENOS <ChevronUp size={16} /></>
              ) : (
                <><BookOpen size={16} /> VER TODOS OS DEPOIMENTOS</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
