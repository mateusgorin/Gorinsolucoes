import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

interface ServiceItem {
  number: string;
  category: string;
  title: string;
  desc: string;
}

const consolidatedServices: ServiceItem[] = [
  {
    number: "01",
    category: "PERFORMANCE // 99/100",
    title: "VELOCIDADE QUE CONVERTE",
    desc: "Um site lento perde clientes antes mesmo da primeira impressão. Desenvolvemos páginas ultra velozes que carregam instantaneamente, retêm visitantes e alcançam as melhores posições nas buscas do Google."
  },
  {
    number: "02",
    category: "UX/UI // ESTRATÉGIA VISUAL",
    title: "DESIGN QUE GUIA O CLIENTE",
    desc: "Cada botão, espaçamento e tipografia tem um propósito: conduzir o visitante até a ação de compra ou contato. Unimos estética refinada internacional a fluxos de navegação testados para máxima conversão."
  },
  {
    number: "03",
    category: "AUTOMAÇÃO // IA INTEGRADA",
    title: "SEU SITE TRABALHA POR VOCÊ",
    desc: "Integramos inteligência artificial para atendimento automatizado, qualificação inteligente de leads e respostas instantâneas 24 horas por dia, 7 dias por semana — mesmo enquanto sua equipe descansa."
  },
  {
    number: "04",
    category: "SEO // BUSCAS ORGÂNICAS",
    title: "VISIBILIDADE NO GOOGLE",
    desc: "Arquitetura otimizada para os mecanismos de busca (SEO técnico), marcação de dados Schema.org e integração completa com Google Meu Negócio para atrair clientes qualificados todos os dias."
  },
  {
    number: "05",
    category: "ENGENHARIA // ELITE STACK",
    title: "TECNOLOGIA DE PONTA & SEGURANÇA",
    desc: "Construído sobre stack moderna (React, TypeScript, Vite e Tailwind CSS) — a mesma engenharia adotada pelas maiores empresas globais. Rápido, seguro, escalável, com certificado SSL e zero vulnerabilidades."
  },
  {
    number: "06",
    category: "CONEXÃO // VENDAS DIRETAS",
    title: "CONTATO DIRETO COM CLIENTES",
    desc: "Integração direta com WhatsApp, formulários interativos com validação instantânea e conexões com redes sociais para fechar novos negócios sem atrito e sem intermediários."
  }
];

// Padrões geométricos em SVG refinados - 4 variações na cor ciano #00D4FF
const renderGeometricPattern = (patternIndex: number, cardId: number) => {
  switch (patternIndex) {
    case 0:
      // 1) Barras verticais em gradiente
      return (
        <svg 
          viewBox="0 0 440 360" 
          className="w-full h-full text-[#00D4FF]"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id={`slatGrad-${cardId}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.5" />
            </linearGradient>
            <radialGradient id={`slatGlow-${cardId}`} cx="85%" cy="50%" r="65%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect x="0" y="0" width="440" height="360" fill={`url(#slatGlow-${cardId})`} />

          {Array.from({ length: 14 }).map((_, i) => {
            const x = 90 + i * 23;
            const w = 12;
            const progress = i / 13;
            const opacity = 0.2 + progress * 0.8;
            return (
              <g key={i}>
                <rect 
                  x={x} 
                  y={30} 
                  width={w} 
                  height={300} 
                  rx={w / 2}
                  fill={`url(#slatGrad-${cardId})`} 
                  fillOpacity={Number(opacity.toFixed(3))}
                />
                <line 
                  x1={x + 2} 
                  y1={35} 
                  x2={x + 2} 
                  y2={325} 
                  stroke="#00D4FF" 
                  strokeWidth="0.75" 
                  strokeOpacity={Number((opacity * 0.7).toFixed(3))} 
                />
              </g>
            );
          })}
        </svg>
      );

    case 1:
      // 2) Triângulo com círculos concêntricos
      return (
        <svg 
          viewBox="0 0 440 360" 
          className="w-full h-full text-[#00D4FF]"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="220,40 370,290 70,290" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
          <polygon points="220,80 340,280 100,280" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4" />
          <polygon points="220,130 300,270 140,270" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
          <polygon points="220,180 260,260 180,260" stroke="currentColor" strokeWidth="1" strokeOpacity="0.8" />
          <circle cx="220" cy="180" r="110" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="220" cy="180" r="75" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6" strokeDasharray="3 3" />
          <circle cx="220" cy="180" r="45" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
          <circle cx="220" cy="180" r="18" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
          <line x1="220" y1="40" x2="220" y2="290" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 3" />
        </svg>
      );

    case 2:
      // 3) Círculos concêntricos com ponto central
      return (
        <svg 
          viewBox="0 0 440 360" 
          className="w-full h-full text-[#00D4FF]"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <ellipse cx="230" cy="180" rx="170" ry="140" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <ellipse cx="230" cy="180" rx="140" ry="115" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="5 5" />
          <ellipse cx="230" cy="180" rx="110" ry="90" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5" />
          <ellipse cx="230" cy="180" rx="80" ry="65" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" strokeDasharray="3 3" />
          <ellipse cx="230" cy="180" rx="50" ry="40" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
          <circle cx="230" cy="180" r="24" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.9" fill="currentColor" fillOpacity="0.2" />
          <circle cx="230" cy="180" r="6" fill="currentColor" fillOpacity="1" />
          <line x1="60" y1="180" x2="400" y2="180" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.4" strokeDasharray="4 4" />
          <line x1="230" y1="30" x2="230" y2="330" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.4" strokeDasharray="4 4" />
        </svg>
      );

    case 3:
    default:
      // 4) Grade diagonal de pontos
      return (
        <svg 
          viewBox="0 0 440 360" 
          className="w-full h-full text-[#00D4FF]"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          {Array.from({ length: 11 }).map((_, r) =>
            Array.from({ length: 13 }).map((_, c) => {
              const cx = 90 + c * 24 + (r % 2 === 0 ? 12 : 0);
              const cy = 40 + r * 26;
              const dist = Math.hypot(c - 6, r - 5);
              const opacity = Math.max(0.15, 0.9 - dist * 0.08);
              return (
                <circle
                  key={`${r}-${c}`}
                  cx={cx}
                  cy={cy}
                  r={r % 3 === 0 ? 3 : 2}
                  fill="currentColor"
                  fillOpacity={Number(opacity.toFixed(2))}
                />
              );
            })
          )}
        </svg>
      );
  }
};

interface ServiceCardProps {
  service: ServiceItem;
  idx: number;
  isFirst: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, idx, isFirst }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isScrolledActive, setIsScrolledActive] = useState<boolean>(isFirst);
  const [isManualActive, setIsManualActive] = useState<boolean | null>(null);

  // A primeira coluna NUNCA encolhe. Para as outras, respeita o estado do scroll ou toggle manual.
  const effectiveActive = isFirst ? true : (isManualActive !== null ? isManualActive : isScrolledActive);

  useEffect(() => {
    // Se for o primeiro card, ele permanece sempre expandido (nunca encolhe)
    if (isFirst) {
      setIsScrolledActive(true);
      return;
    }

    const card = cardRef.current;
    if (!card) return;

    // Histerese inteligente para transição 100% suave e sem tremidas (jitter/flutter):
    // - Expande ao entrar na zona superior (topo <= 70% da viewport)
    // - Só encolhe quando recua bem para baixo (topo >= 88% da viewport)
    // Esse intervalo de 18% impede qualquer oscilação ou tremor de altura durante a rolagem
    const checkScroll = () => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const topRelative = rect.top / vh;

      if (topRelative <= 0.70) {
        setIsScrolledActive(true);
      } else if (topRelative >= 0.88) {
        setIsScrolledActive(false);
        setIsManualActive(null);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    
    // Suporte ao Lenis se disponível
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.on('scroll', checkScroll);
    }

    checkScroll();

    return () => {
      window.removeEventListener('scroll', checkScroll);
      if (lenis) {
        lenis.off('scroll', checkScroll);
      }
    };
  }, [isFirst]);

  return (
    <div
      ref={cardRef}
      onClick={() => {
        if (!isFirst) {
          setIsManualActive((prev) => (prev === null ? !isScrolledActive : !prev));
        }
      }}
      className={`w-full relative overflow-hidden rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 md:p-10 select-none transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isFirst ? 'cursor-default' : 'cursor-pointer'
      } ${
        effectiveActive
          ? 'bg-[#091C24] border border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]'
          : 'bg-[#E6E6E8] hover:bg-[#DDDDE0] border border-black/5 shadow-none'
      }`}
      style={{ willChange: 'background-color, border-color' }}
    >
      {/* Padrão geométrico de fundo na direita com transição suave de opacidade */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-full sm:w-[50%] md:w-[45%] pointer-events-none overflow-hidden select-none transition-opacity duration-700 ease-out ${
          effectiveActive ? 'opacity-25' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        {renderGeometricPattern(idx % 4, idx)}
      </div>

      <div className="relative z-10 flex flex-col justify-between">
        {/* Cabeçalho do Card: Categoria (quando ativo) + Título + Número */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 pr-2 sm:pr-4">
            {/* Categoria: Revelada no estado ativo com altura e opacidade suaves */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                effectiveActive ? 'max-h-8 opacity-100 mb-2.5' : 'max-h-0 opacity-0 mb-0'
              }`}
            >
              <p className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-[#00D4FF] uppercase">
                {service.category}
              </p>
            </div>

            {/* Título: Transiciona suavemente de cor, sem reflow brusco de tamanho */}
            <h3
              className={`font-archivo font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tight leading-tight transition-colors duration-500 ${
                effectiveActive ? 'text-[#FAFAF9]' : 'text-[#18181B]'
              }`}
            >
              {service.title}
            </h3>
          </div>

          {/* Número no canto superior direito */}
          <span
            className={`font-mono font-bold text-xl sm:text-2xl md:text-3xl tracking-wider shrink-0 transition-colors duration-500 ${
              effectiveActive ? 'text-[#00D4FF]' : 'text-[#71717A]'
            }`}
          >
            {service.number}
          </span>
        </div>

        {/* Corpo expansível em grid animado a 60fps sem tremidas */}
        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            effectiveActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
          style={{ willChange: 'grid-template-rows' }}
        >
          <div className="overflow-hidden min-h-0">
            <div
              className={`pt-4 sm:pt-6 transition-all duration-500 ease-out ${
                effectiveActive
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              {/* Parágrafo de Descrição */}
              <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal">
                {service.desc}
              </p>

              {/* Link Saiba Mais com seta circular */}
              <div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    const target = document.querySelector('#contact');
                    if (target) {
                      const lenis = (window as any).__lenis;
                      if (lenis) {
                        lenis.scrollTo(target, { offset: -40, duration: 1.1 });
                      } else {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold text-white hover:text-[#00D4FF] transition-colors group/link"
                >
                  <span>Saiba mais</span>
                  <span className="w-8 h-8 rounded-full border border-white/30 group-hover/link:border-[#00D4FF] flex items-center justify-center transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5">
                    <ArrowUpRight size={15} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section 
      id="services" 
      className="pt-20 md:pt-28 pb-8 md:pb-12 bg-[#FAFAF9] border-t border-black/10 relative scroll-mt-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10 mb-10 sm:mb-12">
        {/* Cabeçalho de Seção Editorial (02 — O QUE FAZEMOS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#71717A] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00D4FF] rounded-full shadow-[0_0_8px_rgba(0,212,255,0.7)]" />
              02 — O QUE FAZEMOS
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-archivo font-black text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-[#0B0B0C] tracking-tight uppercase leading-snug">
              Desenvolvemos sites de alta conversão, sistemas web e identidades digitais que combinam design sofisticado com resultados mensuráveis.
            </h2>
          </div>
        </div>
      </div>

      {/* Lista de Serviços Estilo Cuberto: espaçamento reduzido pela metade */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col gap-1.5 sm:gap-2">
          {consolidatedServices.map((service, idx) => (
            <ServiceCard 
              key={service.number} 
              service={service} 
              idx={idx} 
              isFirst={idx === 0} 
            />
          ))}
        </div>
      </div>

      {/* CTA Section Final: distância reduzida pela metade */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-20 mt-8 sm:mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 md:p-16 border border-black/10 bg-white text-center max-w-4xl mx-auto rounded-[24px] md:rounded-[32px] shadow-sm relative z-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 border border-black/10 bg-[#FAFAF9] rounded-full">
            <span className="w-2 h-2 bg-[#00D4FF] rounded-full" />
            <span className="font-mono text-[11px] text-[#0B0B0C] uppercase tracking-wider font-semibold">
              PRÓXIMO PASSO
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-archivo font-black text-[#0B0B0C] mb-4 uppercase tracking-tight">
            PRONTO PARA EVOLUIR SUA PRESENÇA DIGITAL?
          </h3>
          <p className="font-sans text-[#52525B] text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            Criamos soluções digitais completas, unindo design, tecnologia e performance para estruturar negócios no ambiente digital com segurança e eficiência.
          </p>
          <div className="flex justify-center">
            <MagneticButton href="#contact">
              SOLICITAR ORÇAMENTO GRÁTIS
            </MagneticButton>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Services;
