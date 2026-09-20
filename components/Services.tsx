import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

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

// Padrões geométricos em SVG refinados e ambientes — gradientes suaves e baixíssima saturação
const renderGeometricPattern = (patternIndex: number, cardId: number) => {
  switch (patternIndex) {
    case 0:
      // Slats verticais com iluminação ambiente e gradiente suave (máx 0.22 de opacidade)
      return (
        <svg 
          viewBox="0 0 440 360" 
          className="w-full h-full text-[#00D4FF]"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id={`slatGrad-${cardId}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.14" />
              <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.08" />
            </linearGradient>
            <radialGradient id={`slatGlow-${cardId}`} cx="85%" cy="50%" r="65%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Gradiente de ambiência de fundo suave */}
          <rect x="0" y="0" width="440" height="360" fill={`url(#slatGlow-${cardId})`} />

          {Array.from({ length: 14 }).map((_, i) => {
            const x = 90 + i * 23;
            const w = 12;
            const progress = i / 13;
            const opacity = 0.04 + Math.pow(progress, 1.2) * 0.18;
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
      // Triângulo e geometria com gradiente difuso (máx 0.22 de opacidade)
      return (
        <svg 
          viewBox="0 0 440 360" 
          className="w-full h-full text-[#00D4FF]"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id={`triGrad-${cardId}`} x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.01" />
            </linearGradient>
            <radialGradient id={`triGlow-${cardId}`} cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambiência radial suave */}
          <rect x="0" y="0" width="440" height="360" fill={`url(#triGlow-${cardId})`} />

          <polygon points="220,40 370,290 70,290" stroke="currentColor" strokeWidth="1" strokeOpacity="0.08" />
          <polygon points="220,80 340,280 100,280" fill={`url(#triGrad-${cardId})`} />
          <polygon points="220,120 310,270 130,270" stroke="currentColor" strokeWidth="1" strokeOpacity="0.14" strokeDasharray="4 4" />
          <polygon points="220,165 280,260 160,260" stroke="currentColor" strokeWidth="1" strokeOpacity="0.22" />
          <polygon points="220,205 255,255 185,255" fill={`url(#triGrad-${cardId})`} stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.18" />
          <line x1="220" y1="40" x2="220" y2="290" stroke="currentColor" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="3 3" />
          <circle cx="220" cy="180" r="110" stroke="currentColor" strokeWidth="1" strokeOpacity="0.06" />
          <circle cx="220" cy="180" r="65" stroke="currentColor" strokeWidth="1" strokeOpacity="0.10" />
        </svg>
      );

    case 2:
      // Círculos e órbitas concêntricas com gradiente radial ambiente (máx 0.25 de opacidade)
      return (
        <svg 
          viewBox="0 0 440 360" 
          className="w-full h-full text-[#00D4FF]"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id={`circleCore-${cardId}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#00D4FF" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id={`circleAura-${cardId}`} cx="52%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambiência difusa */}
          <rect x="0" y="0" width="440" height="360" fill={`url(#circleAura-${cardId})`} />

          <ellipse cx="230" cy="180" rx="170" ry="140" stroke="currentColor" strokeWidth="1" strokeOpacity="0.05" />
          <ellipse cx="230" cy="180" rx="140" ry="115" stroke="currentColor" strokeWidth="1" strokeOpacity="0.08" strokeDasharray="5 5" />
          <ellipse cx="230" cy="180" rx="110" ry="90" stroke="currentColor" strokeWidth="1" strokeOpacity="0.14" />
          <ellipse cx="230" cy="180" rx="80" ry="65" stroke="currentColor" strokeWidth="1" strokeOpacity="0.20" strokeDasharray="3 3" />
          <ellipse cx="230" cy="180" rx="50" ry="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
          <circle cx="230" cy="180" r="32" fill={`url(#circleCore-${cardId})`} />
          <circle cx="230" cy="180" r="10" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.22" fill={`url(#circleCore-${cardId})`} />
        </svg>
      );

    case 3:
    default:
      // Grade diagonal e arcos em perspectiva com gradiente suave (máx 0.23 de opacidade)
      return (
        <svg 
          viewBox="0 0 440 360" 
          className="w-full h-full text-[#00D4FF]"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id={`archGrad-${cardId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.01" />
            </linearGradient>
            <radialGradient id={`archAura-${cardId}`} cx="60%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambiência difusa */}
          <rect x="0" y="0" width="440" height="360" fill={`url(#archAura-${cardId})`} />

          {Array.from({ length: 6 }).map((_, i) => {
            const inset = 24 + i * 22;
            const opacity = 0.05 + (i / 5) * 0.18;
            return (
              <rect
                key={i}
                x={100 + inset}
                y={40 + inset * 0.7}
                width={260 - inset * 1.5}
                height={260 - inset * 1.4}
                rx={40 - i * 4}
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity={Number(opacity.toFixed(3))}
                strokeDasharray={i === 2 ? "4 4" : "none"}
                fill={i === 4 ? `url(#archGrad-${cardId})` : "none"}
              />
            );
          })}

          {/* Linhas diagonais discretas de profundidade */}
          <line x1="80" y1="320" x2="380" y2="40" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.07" strokeDasharray="3 3" />
          <line x1="120" y1="340" x2="420" y2="60" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.05" />
        </svg>
      );
  }
};

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const itemElements = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    if (itemElements.length === 0) return;

    const ctx = gsap.context(() => {
      itemElements.forEach((el, i) => {
        if (i === 0) return; // Exceto o primeiro card

        const fill = el.querySelector('.card__fill');
        const title = el.querySelector('.card__title');
        const num = el.querySelector('.card__num');
        const bg = el.querySelector('.card__bg');

        // Scrub perfeitamente sincronizado com o mesmo start ('top 75%') e end ('top 35%')
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            end: 'top 35%',
            scrub: 0.5,
          },
        });

        // O escurecimento do fundo (fill) e a revelação do padrão ambiente (bg)
        // avançam exatamente na mesma taxa proporcional (offset 0, duration 1, ease: 'none')
        if (fill) {
          tl.to(fill, { backgroundColor: '#0B0B0C', ease: 'none', duration: 1 }, 0);
        }
        if (bg) {
          tl.to(bg, { opacity: 1, ease: 'none', duration: 1 }, 0);
        }
        if (title) {
          tl.to(title, { color: '#FAFAF9', ease: 'none', duration: 1 }, 0);
        }
        if (num) {
          tl.to(num, { color: '#00D4FF', opacity: 1, ease: 'none', duration: 1 }, 0);
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-24 md:py-32 bg-[#FAFAF9] border-t border-black/10 relative scroll-mt-24 overflow-hidden"
    >
      {/* Estilos CSS nativos acelerados por hardware - Zero jitter e interpolação contínua pelo GSAP */}
      <style>{`
        .service-card {
          position: relative;
          width: 100%;
          border-radius: 22px;
          overflow: hidden;
          user-select: none;
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: box-shadow 0.4s ease, border-color 0.4s ease;
        }
        @media (min-width: 640px) {
          .service-card {
            border-radius: 26px;
          }
        }
        @media (min-width: 768px) {
          .service-card {
            border-radius: 32px;
          }
        }
        .service-card:hover {
          box-shadow: 0 12px 30px -8px rgba(0, 0, 0, 0.12);
        }

        /* Camada de Fundo (Fill) */
        .service-card .card__fill {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background-color: #ECECEF;
          pointer-events: none;
        }
        .service-card.is-first .card__fill {
          background-color: #0B0B0C;
        }

        /* Título */
        .service-card .card__title {
          color: #18181B;
        }
        .service-card.is-first .card__title {
          color: #FAFAF9;
        }

        /* Número do serviço */
        .service-card .card__num {
          color: #71717A;
          opacity: 0.45;
        }
        .service-card.is-first .card__num {
          color: #00D4FF;
          opacity: 1;
        }

        /* Arte Geométrica no Fundo */
        .service-card .card__bg {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100%;
          opacity: 0;
          pointer-events: none;
          overflow: hidden;
        }
        @media (min-width: 640px) {
          .service-card .card__bg {
            width: 60%;
          }
        }
        @media (min-width: 768px) {
          .service-card .card__bg {
            width: 50%;
          }
        }
        .service-card.is-first .card__bg {
          opacity: 1;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Cabeçalho estilo Cuberto (What We Do) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 md:mb-20 items-baseline">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#71717A] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00D4FF] rounded-full" />
              02 — O QUE FAZEMOS
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-archivo font-black text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-[#0B0B0C] tracking-tight uppercase leading-snug">
              Desenvolvemos sites de alta conversão, sistemas web e identidades digitais que combinam design sofisticado com resultados mensuráveis.
            </h2>
          </div>
        </div>

        {/* Lista de cards em Stack */}
        <div 
          ref={itemsContainerRef}
          className="w-full relative pb-12 flex flex-col gap-3 sm:gap-4 md:gap-5"
        >
          {consolidatedServices.map((service, idx) => {
            const isFirst = idx === 0;

            return (
              <div
                key={service.number}
                ref={(el) => { itemRefs.current[idx] = el; }}
                className={`service-card ${isFirst ? 'is-first shadow-xl' : ''}`}
              >
                {/* Camada de Fundo (Fill) */}
                <div className="card__fill" />

                {/* Camada de Arte Geométrica (Fundo à direita) */}
                <div className="card__bg">
                  {renderGeometricPattern(idx % 4, idx)}
                </div>

                {/* Conteúdo do Card */}
                <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
                  
                  {/* Linha de Cabeçalho: Categoria/Título à esquerda, Número à direita */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#00D4FF] uppercase block">
                        {service.category}
                      </span>
                      <h3 className="card__title font-archivo font-black text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] uppercase tracking-tight leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    <span className="card__num font-mono text-base sm:text-lg md:text-xl font-bold tracking-tight flex-shrink-0">
                      {service.number}
                    </span>
                  </div>

                  {/* Conteúdo estático sempre visível: Parágrafo e Link */}
                  <div className="pt-5 sm:pt-6 md:pt-8 max-w-xl">
                    <p className="font-sans text-sm sm:text-base md:text-lg text-[#D4D4D8] leading-relaxed mb-6 sm:mb-8 font-normal">
                      {service.desc}
                    </p>

                    <div>
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.stopPropagation();
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
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-[#0B0B0C] font-archivo font-bold text-xs tracking-wider uppercase hover:bg-[#00D4FF] transition-all duration-300 group/btn shadow-md hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span>Solicitar Orçamento</span>
                        <ArrowUpRight 
                          size={16} 
                          className="text-[#0B0B0C] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" 
                        />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 p-10 md:p-16 border border-black/10 bg-white text-center max-w-4xl mx-auto rounded-[24px] md:rounded-[32px] shadow-sm relative z-20"
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
