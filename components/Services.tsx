import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { 
  Layout, 
  Search, 
  Zap, 
  MessageSquare, 
  ShieldCheck, 
  Layers,
  Rocket,
  MousePointer2,
  Bot,
  Code2,
  FileCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const mainPillars = [
  {
    title: "VELOCIDADE QUE CONVERTE",
    desc: "Um site lento perde cliente antes mesmo de ele ler a primeira linha. Entregamos sites que carregam instantaneamente e ranqueiam melhor no Google.",
    icon: Zap,
    stat: "99/100"
  },
  {
    title: "DESIGN QUE GUIA O CLIENTE",
    desc: "Cada botão, cor e espaço tem um propósito: levar seu visitante até o contato. Não é só estética — é estratégia visual.",
    icon: Layout,
    stat: "UX/UI"
  },
  {
    title: "SEU SITE TRABALHA POR VOCÊ",
    desc: "Integramos IA para responder clientes, qualificar leads e personalizar conteúdo — mesmo quando você está offline.",
    icon: Bot,
    stat: "FUTURE"
  }
];

const services = [
  {
    icon: Layout,
    title: "Design Único & Responsivo",
    desc: "Interface criada do zero com identidade visual exclusiva e que funciona perfeitamente em celular, tablet e desktop.",
    category: "INCLUSO"
  },
  {
    icon: Zap,
    title: "Carregamento Instantâneo",
    desc: "Seu site carrega em frações de segundo, sem travamentos, mesmo com animações e imagens.",
    category: "VELOZ"
  },
  {
    icon: Search,
    title: "Visibilidade no Google",
    desc: "Otimizado para aparecer nas buscas do Google + integração completa com Google Meu Negócio.",
    category: "RANQUEADO"
  },
  {
    icon: MessageSquare,
    title: "Contato Direto com Clientes",
    desc: "Botão de WhatsApp direto + Instagram conectado para você responder e fechar negócios na hora.",
    category: "RÁPIDO"
  },
  {
    icon: ShieldCheck,
    title: "Confiança e Proteção Total",
    desc: "Avaliações reais em destaque + certificado SSL e proteção total de segurança.",
    category: "SAFE"
  },
  {
    icon: Code2,
    title: "TECNOLOGIA DE PONTA",
    desc: "Desenvolvido com React, TypeScript e Vite — as mesmas tecnologias usadas por grandes empresas. Rápido, estável e fácil de evoluir.",
    category: "FUTURO"
  }
];

const processSteps = [
  { step: "01", title: "BRIEFING", icon: MessageSquare, desc: "Análise profunda do seu negócio e objetivos." },
  { step: "02", title: "PROPOSTA", icon: FileCheck, desc: "Escopo, prazo e investimento definidos com clareza." },
  { step: "03", title: "DESIGN", icon: MousePointer2, desc: "Prototipagem da interface focada em UX/UI." },
  { step: "04", title: "BUILD", icon: Code2, desc: "Codificação limpa com tecnologias de elite." },
  { step: "05", title: "TESTES", icon: ShieldCheck, desc: "Validação completa de performance, SEO e responsividade antes de publicar." },
  { step: "06", title: "ENTREGA & TREINAMENTO", icon: Rocket, desc: "Publicação do projeto + você aprende a gerenciar seu site com autonomia." }
];

export const Services: React.FC = () => {
  const m = motion as any;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(4);
  const [isPaused, setIsPaused] = React.useState(false);
  const pauseTimerRef = React.useRef<any>(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % processSteps.length);
  }, []);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + processSteps.length) % processSteps.length);
  }, []);

  const startAutoPause = () => {
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  };

  const handleManualNext = () => {
    nextSlide();
    startAutoPause();
  };

  const handleManualPrev = () => {
    prevSlide();
    startAutoPause();
  };

  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Calculate visible steps for the carousel
  // For a smooth infinite-like feel or just clamping
  // Let's use a simple translation based on currentIndex

  return (
    <section id="services" className="pt-24 pb-12 bg-cyber-black relative scroll-mt-24 transition-colors duration-300">
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="SOLUÇÕES COMPLETAS" 
          subtitle="O QUE ENTREGAMOS" 
        />

        {/* 1. Pilares de Destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
          {mainPillars.map((pillar, idx) => (
            <m.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-cyber-slate/50 border-l-4 border-cyber-primary p-8 clip-corner shadow-[0_10px_30px_rgba(0,0,0,0.5)] group hover:bg-cyber-primary/10 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <pillar.icon className="w-12 h-12 text-cyber-primary group-hover:scale-110 transition-transform" />
                <span className="font-mono text-cyber-secondary font-bold text-lg">{pillar.stat}</span>
              </div>
              <h3 className="text-xl font-mono font-bold text-cyber-white mb-4 tracking-tighter">{pillar.title}</h3>
              <p className="text-cyber-gray text-base leading-relaxed">{pillar.desc}</p>
            </m.div>
          ))}
        </div>

        {/* 2. Grade de Serviços Detalhada */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <Layers className="text-cyber-secondary" />
            <h3 className="font-mono text-cyber-white tracking-widest uppercase border-b border-cyber-secondary/30 pb-2">
              Tudo que seu site já vem incluso
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative bg-cyber-slate/20 border border-cyber-primary/10 p-6 clip-corner-sm hover:border-cyber-primary/60 transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex justify-between items-center mb-5">
                  <div className="p-2.5 bg-cyber-primary/10 text-cyber-primary group-hover:bg-cyber-primary group-hover:text-black transition-all">
                    <service.icon size={24} />
                  </div>
                  <span className="font-mono text-[10px] text-cyber-primary tracking-widest border border-cyber-primary/40 px-2.5 py-1 bg-cyber-primary/5">
                    {service.category}
                  </span>
                </div>
                
                <h4 className="text-base font-mono font-bold text-cyber-white mb-3 tracking-wide group-hover:text-cyber-primary transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-cyber-gray text-sm font-sans leading-relaxed opacity-90 group-hover:opacity-100">
                  {service.desc}
                </p>
                
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-cyber-primary/20 group-hover:border-cyber-primary transition-colors" />
              </m.div>
            ))}
          </div>
        </div>

        {/* 3. Fluxo de Processo (Carousel) */}
        <div className="pt-24 pb-12 border-y border-cyber-primary/10 bg-cyber-dark/40 backdrop-blur-sm px-4 sm:px-16 clip-corner relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-cyber-primary/20">PROCESS_TRACKER_V2</div>
          
          <div 
            className="relative group/carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              if (!pauseTimerRef.current) setIsPaused(false);
            }}
          >
            {/* Navigation Arrows - Positioned outside the cards area */}
            <button 
              onClick={handleManualPrev}
              className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 bg-cyber-black/80 border border-cyber-primary/30 text-cyber-primary hover:bg-cyber-primary hover:text-black transition-all opacity-0 group-hover/carousel:opacity-100 hidden sm:block"
              aria-label="Previous step"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={handleManualNext}
              className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 bg-cyber-black/80 border border-cyber-primary/30 text-cyber-primary hover:bg-cyber-primary hover:text-black transition-all opacity-0 group-hover/carousel:opacity-100 hidden sm:block"
              aria-label="Next step"
            >
              <ChevronRight size={28} />
            </button>

            <div className="overflow-hidden py-6 -my-6">
              <m.div 
                className="flex"
                animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {processSteps.map((step, idx) => (
                  <div 
                    key={idx}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    <div className="relative flex flex-col items-center text-center group h-[220px] justify-start">
                      <div className="mb-6 relative">
                        <div className="w-16 h-16 bg-cyber-black border-2 border-cyber-secondary/30 rounded-full flex items-center justify-center group-hover:border-cyber-primary transition-colors z-10 relative">
                          <step.icon className="w-8 h-8 text-cyber-secondary group-hover:text-cyber-primary transition-colors" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-cyber-primary text-black font-mono text-xs font-bold px-1.5 py-0.5">
                          {step.step}
                        </div>
                        {/* Connector line - only show if not the last item in the full list */}
                        {idx < processSteps.length - 1 && (
                          <div className="hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-gradient-to-r from-cyber-secondary/30 to-transparent -translate-y-1/2 z-0" />
                        )}
                      </div>
                      <h4 className="font-mono font-bold text-cyber-white mb-2 tracking-widest uppercase text-sm sm:text-base">{step.title}</h4>
                      <p className="text-cyber-gray text-xs sm:text-sm leading-snug max-w-[200px]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </m.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <m.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-10 border border-cyber-primary/30 bg-cyber-primary/5 text-center max-w-4xl mx-auto clip-corner relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-cyber-grid bg-[size:20px_20px] opacity-10 group-hover:opacity-20 transition-opacity" />
          <h3 className="text-3xl font-mono font-bold text-cyber-white mb-4 relative z-10 uppercase tracking-tighter">PRONTO PARA EVOLUIR SUA PRESENÇA DIGITAL?</h3>
          <p className="font-sans text-cyber-gray text-lg mb-8 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Criamos soluções digitais completas, unindo design, tecnologia e performance para estruturar negócios no ambiente digital com segurança e eficiência.
          </p>
          <Button 
            href="#contact" 
            variant="primary"
            className="px-10 py-4 relative z-10"
          >
            SOLICITAR ORÇAMENTO GRÁTIS <Zap size={18} className="ml-2" />
          </Button>
        </m.div>
      </div>
    </section>
  );
};