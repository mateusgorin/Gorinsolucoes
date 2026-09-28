import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowLeft, 
  Zap, 
  Eye, 
  Bot, 
  Search, 
  Code2, 
  MessageCircle, 
  ChevronDown, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Send 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const serviceIcons = [Zap, Eye, Bot, Search, Code2, MessageCircle];

const servicesData = siteContent.services.items.map((item, idx) => ({
  ...item,
  icon: serviceIcons[idx]
}));

const methodologySteps = siteContent.services.methodologySteps;

export const ServicesPage: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  // Expanded cards state (defaults to first card open for instant discovery)
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    "01": true
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'VELOCIDADE QUE CONVERTE (Sites e Landing Pages)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumber = "5561981290099";

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start']
  });

  const ghostY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const el = titleRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const toggleCard = (number: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [number]: !prev[number]
    }));
  };

  const handleNavigateHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageText = `*SOLICITAÇÃO DE ORÇAMENTO GRÁTIS // GORIN SOLUÇÕES*\n\n` +
      `*Nome:* ${formData.name || 'Não informado'}\n` +
      `*WhatsApp:* ${formData.phone || 'Não informado'}\n` +
      `*Serviço de Interesse:* ${formData.service}\n` +
      `*Mensagem:* ${formData.message || 'Gostaria de receber uma proposta comercial gratuita.'}\n\n` +
      `_Enviado através da página de Serviços Gorin Soluções_`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;

    setTimeout(() => {
      window.open(url, '_blank');
      setIsSubmitting(false);
    }, 200);
  };

  return (
    <div className="bg-[#0B0B0E] text-[#F5F6FA] min-h-screen">
      
      {/* 1. HEADER DE SEÇÃO (DARK #0B0B0E) */}
      <section 
        ref={headerRef}
        className="relative pt-32 sm:pt-40 md:pt-48 pb-28 sm:pb-36 bg-[#0B0B0E] text-[#F5F6FA] overflow-hidden"
      >
        {/* Subtle Ghost Typography */}
        <motion.div
          style={{ y: ghostY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-display font-bold text-[clamp(90px,22vw,320px)] tracking-[-0.04em] text-white/[0.02] uppercase leading-none select-none">
            SERVIÇOS
          </span>
        </motion.div>

        {/* Minimal dot background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#F5F6FA 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
          
          {/* Top Bar: Back to Home & Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 text-xs font-mono tracking-widest uppercase">
            <a
              href="/"
              onClick={handleNavigateHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-white/80 hover:text-white hover:border-[#00D4FF]/50 transition-all cursor-pointer group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform text-[#00D4FF]" />
              <span>Voltar ao Início</span>
            </a>

            <div className="flex items-center gap-2 text-[#9496A6]">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              <span>Gorin Soluções // Engenharia de Software & IA</span>
            </div>
          </div>

          {/* Category Badge */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span>Nossas Soluções Digitais</span>
          </div>

          {/* Título "Serviços" Monumental em General Sans (8.8rem desktop / 4.8rem mobile) */}
          <div className="max-w-5xl mb-6 sm:mb-8">
            <h1
              ref={titleRef}
              className="font-display font-bold text-[clamp(3rem,8vw,8.8rem)] leading-[1.0] tracking-[-0.02em] text-[#F5F6FA]"
            >
              Serviços<span className="text-[#00D4FF]">.</span>
            </h1>
          </div>

          {/* Subtexto exato solicitado */}
          <p className="font-body text-[#9496A6] text-base sm:text-xl md:text-[1.375rem] max-w-3xl leading-relaxed mb-10 sm:mb-12">
            Desenvolvemos sites de alta conversão, sistemas web e identidades digitais que combinam design sofisticado com resultados mensuráveis.
          </p>

          {/* Credibility Pills Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-mono">
            <div>
              <div className="text-[#00D4FF] font-bold text-2xl sm:text-3xl font-display">6</div>
              <div className="text-[#9496A6] mt-0.5">Pilares Especializados</div>
            </div>
            <div>
              <div className="text-[#F5F6FA] font-bold text-2xl sm:text-3xl font-display">0.7s</div>
              <div className="text-[#9496A6] mt-0.5">Carregamento Médio</div>
            </div>
            <div>
              <div className="text-[#F5F6FA] font-bold text-2xl sm:text-3xl font-display">99+</div>
              <div className="text-[#9496A6] mt-0.5">Score Core Web Vitals</div>
            </div>
            <div>
              <div className="text-[#F5F6FA] font-bold text-2xl sm:text-3xl font-display">24/7</div>
              <div className="text-[#9496A6] mt-0.5">Automação com IA</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. LISTA DE 6 SERVIÇOS EM CARDS EXPANSÍVEIS (LIGHT #F5F6FA — TRANSIÇÃO ROUNDED-T 6.4REM) */}
      <section 
        id="servicos-cards"
        className="py-24 sm:py-32 md:py-40 bg-[#F5F6FA] text-[#0B0B0E] rounded-t-[3.2rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-20 relative shadow-[0_-30px_70px_rgba(0,0,0,0.35)] border-t border-black/[0.06] scroll-mt-20"
      >
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
          
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span>Estrutura Completa de Soluções</span>
            </div>

            <h2 className="font-display font-bold text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.08] tracking-[-0.02em] text-[#0B0B0E] mb-6">
              Como transformamos seu negócio no digital.
            </h2>

            <p className="font-body text-[#555660] text-base sm:text-lg md:text-xl leading-relaxed">
              Clique em cada serviço para expandir os entregáveis técnicos, métricas comprovadas e especificações de engenharia.
            </p>
          </div>

          {/* Cards Expansíveis (Cards Grandes: radius 3.2rem) */}
          <div className="space-y-6">
            {servicesData.map((service, idx) => {
              const Icon = service.icon;
              const isExpanded = !!expandedCards[service.number];

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`rounded-[3.2rem] transition-all duration-400 border overflow-hidden ${
                    isExpanded 
                      ? 'bg-white border-black/30 shadow-xl ring-1 ring-[#00D4FF]/30' 
                      : 'bg-white/90 border-black/10 hover:border-black/25 shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Card Header Clickable Trigger */}
                  <div
                    onClick={() => toggleCard(service.number)}
                    className="p-8 sm:p-10 md:p-12 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 select-none"
                  >
                    <div className="flex items-start gap-6 sm:gap-8">
                      {/* Simple Geometric Icon (No mascot) */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[1.6rem] bg-[#0B0B0E] text-[#00D4FF] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <Icon size={26} />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-[#00D4FF] font-semibold tracking-wider uppercase">
                            // {service.number} — {service.category}
                          </span>
                        </div>

                        {/* Exact Title provided by user */}
                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0B0B0E] tracking-tight">
                          {service.number} — {service.title}
                        </h3>

                        {/* Exact Description provided by user */}
                        <p className="font-body text-base sm:text-lg text-[#555660] leading-relaxed max-w-3xl pt-1">
                          {service.desc}
                        </p>
                      </div>
                    </div>

                    {/* Expand/Collapse Trigger Button */}
                    <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                      <span className="hidden sm:inline-block font-mono text-xs uppercase tracking-wider text-[#555660]">
                        {isExpanded ? 'Recolher Detalhes' : 'Ver Entregáveis'}
                      </span>
                      <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isExpanded 
                          ? 'bg-[#0B0B0E] text-white border-black rotate-180' 
                          : 'bg-[#F5F6FA] text-[#0B0B0E] border-black/10 hover:border-black/30'
                      }`}>
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Body */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 sm:px-10 md:px-12 pb-8 sm:pb-10 pt-2 border-t border-black/10">
                          
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
                            
                            {/* Deliverables Checklist */}
                            <div className="lg:col-span-8 space-y-4">
                              <span className="font-mono text-xs text-[#0B0B0E] uppercase tracking-wider font-semibold block">
                                O que está incluído nesta entrega:
                              </span>
                              
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                {service.deliverables.map((item, dIdx) => (
                                  <div key={dIdx} className="flex items-start gap-2.5 p-3.5 rounded-[1.2rem] bg-[#F5F6FA] border border-black/5 text-xs sm:text-sm font-body text-[#2A2B32]">
                                    <CheckCircle2 size={16} className="text-[#00D4FF] shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Action Card */}
                            <div className="lg:col-span-4 rounded-[2rem] bg-[#0B0B0E] text-[#F5F6FA] p-6 space-y-4 shadow-md">
                              <div className="space-y-1">
                                <span className="font-mono text-[11px] text-[#00D4FF] uppercase tracking-wider">
                                  Garantia Técnica
                                </span>
                                <p className="font-display font-bold text-base text-[#F5F6FA]">
                                  {service.metrics}
                                </p>
                              </div>

                              <a
                                href="#orcamento-gratis"
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, service: `${service.number} — ${service.title}` }));
                                }}
                                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#00D4FF] text-[#0B0B0E] font-display font-semibold text-xs uppercase tracking-wider hover:bg-[#3ce0ff] transition-all cursor-pointer shadow-sm"
                              >
                                <span>Solicitar este serviço</span>
                                <ArrowUpRight size={14} />
                              </a>
                            </div>

                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. SEÇÃO DE PROCESSO / METODOLOGIA (DARK #0B0B0E, STICKY — TRANSIÇÃO ROUNDED-T 6.4REM) */}
      <section 
        id="metodologia-servicos"
        className="py-24 sm:py-32 md:py-40 bg-[#0B0B0E] text-[#F5F6FA] rounded-t-[3.2rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-30 relative shadow-[0_-30px_70px_rgba(0,0,0,0.45)] border-t border-white/10 scroll-mt-20"
      >
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Sticky Header on Left */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 lg:self-start">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span>Processo & Metodologia</span>
              </div>

              <h2 className="font-display font-bold text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.08] tracking-[-0.02em] text-[#F5F6FA]">
                Como executamos seus serviços do briefing ao ar.
              </h2>

              <p className="font-body text-[#9496A6] text-base sm:text-lg leading-relaxed">
                Um método sem rodeios ou reuniões burocráticas. Aceleramos as etapas iniciais com inteligência artificial e finalizamos com rigor de código puro.
              </p>

              <div className="p-6 rounded-[2rem] bg-[#141418] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#00D4FF]">
                  <span>CRONOGRAMA FECHADO</span>
                  <span className="text-white/60">BRASÍLIA DF</span>
                </div>
                <div className="font-display font-bold text-2xl text-[#F5F6FA]">
                  Entrega em 5 a 10 dias úteis
                </div>
                <p className="font-body text-xs text-[#9496A6]">
                  Acompanhamento direto com os engenheiros responsáveis pelo seu projeto, sem intermediários.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#orcamento-gratis"
                  className="inline-flex items-center gap-2 font-display font-semibold text-xs uppercase tracking-wider text-[#00D4FF] hover:text-white transition-colors group"
                >
                  <span>Solicitar orçamento grátis agora</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Steps Revealed on Scroll on Right (Cards Grandes: radius 3.2rem) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {methodologySteps.map((stepItem, idx) => (
                <motion.div
                  key={stepItem.step}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-[3.2rem] bg-[#121216] border border-white/10 p-8 sm:p-10 md:p-12 hover:border-white/25 transition-all duration-300 relative overflow-hidden group shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#00D4FF] font-semibold tracking-wider uppercase">
                          // {stepItem.tag}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 font-mono text-[11px]">
                          {stepItem.time}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F6FA] tracking-tight pt-1">
                        {stepItem.title}
                      </h3>
                    </div>

                    <div className="w-12 h-12 rounded-[1.6rem] bg-white/[0.04] border border-white/10 text-[#00D4FF] flex items-center justify-center font-display font-bold text-lg group-hover:bg-[#00D4FF] group-hover:text-[#0B0B0E] transition-colors duration-300 shrink-0">
                      {stepItem.step}
                    </div>
                  </div>

                  <p className="font-body text-[#9496A6] text-base sm:text-lg leading-relaxed">
                    {stepItem.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. CTA FINAL (DARK #0B0B0E — TRANSIÇÃO ROUNDED-T 6.4REM): Exato solicitado */}
      <section 
        id="orcamento-gratis"
        className="py-24 sm:py-32 md:py-40 bg-[#0B0B0E] text-[#F5F6FA] rounded-t-[3.2rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-40 relative shadow-[0_-35px_80px_rgba(0,0,0,0.6)] border-t border-white/10 scroll-mt-20"
      >
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
          
          <div className="rounded-[3.2rem] bg-[#121216] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Chamada Forte & Botão "Solicitar orçamento grátis" */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-xs text-[#00D4FF] uppercase tracking-wider font-semibold">
                    // Iniciar Agora
                  </span>
                  
                  {/* Título exato solicitado */}
                  <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F5F6FA] tracking-tight leading-[1.08]">
                    {siteContent.services.cta.title}
                  </h2>

                  {/* Subtexto exato solicitado */}
                  <p className="font-body text-base sm:text-lg text-[#9496A6] leading-relaxed">
                    {siteContent.services.cta.desc}
                  </p>

                  {/* Botão de Destaque "Solicitar orçamento grátis" */}
                  <div className="pt-2">
                    <a
                      href={siteContent.brand.whatsappDefaultUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-[#00D4FF] text-[#0B0B0E] font-display font-semibold text-sm sm:text-base tracking-wide hover:bg-[#3de0ff] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_10px_30px_rgba(0,212,255,0.2)] group cursor-pointer"
                    >
                      <MessageCircle size={18} />
                      <span>{siteContent.services.cta.buttonText}</span>
                      <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="space-y-3.5 pt-6 border-t border-white/10 font-mono text-xs text-[#9496A6]">
                  <div className="flex items-center gap-3">
                    <Clock size={15} className="text-[#00D4FF] shrink-0" />
                    <span>Resposta média: ~30 min em horário comercial</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={15} className="text-[#00D4FF] shrink-0" />
                    <span>Avaliação técnica sem compromisso</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Formulário Interativo de Proposta Técnica */}
              <div className="lg:col-span-7 bg-[#17171D] border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-xl">
                <div className="mb-6 space-y-1">
                  <span className="font-mono text-xs text-[#00D4FF] uppercase tracking-wider font-semibold">
                    // Orçamento Detalhado
                  </span>
                  <h4 className="font-display font-bold text-xl sm:text-2xl text-[#F5F6FA] tracking-tight">
                    Envie os dados do seu projeto
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#9496A6]">
                    Retornamos com direcionamento técnico e estimativa clara em até 24 horas.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label htmlFor="service-pick" className="block font-mono text-xs uppercase tracking-wider text-[#9496A6] mb-2">
                      Serviço Selecionado *
                    </label>
                    <select
                      id="service-pick"
                      value={formData.service}
                      onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#F5F6FA] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all font-body text-sm cursor-pointer"
                    >
                      {servicesData.map(s => (
                        <option key={s.number} value={`${s.number} — ${s.title}`} className="bg-[#17171D] text-[#F5F6FA]">
                          {s.number} — {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="user-name" className="block font-mono text-xs uppercase tracking-wider text-[#9496A6] mb-2">
                      Seu Nome ou Empresa *
                    </label>
                    <input
                      type="text"
                      id="user-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Ex: João da Silva / Construtora Alfa"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#F5F6FA] placeholder:text-white/30 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all font-body text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="user-phone" className="block font-mono text-xs uppercase tracking-wider text-[#9496A6] mb-2">
                      WhatsApp para Contato *
                    </label>
                    <input
                      type="tel"
                      id="user-phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="Ex: (61) 99999-9999"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#F5F6FA] placeholder:text-white/30 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all font-body text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="user-message" className="block font-mono text-xs uppercase tracking-wider text-[#9496A6] mb-2">
                      Detalhes da sua Demanda
                    </label>
                    <textarea
                      id="user-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Ex: Preciso renovar a presença digital da minha empresa com entrega rápida e foco em captação..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#F5F6FA] placeholder:text-white/30 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all font-body text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#00D4FF] text-[#0B0B0E] font-display font-semibold text-sm uppercase tracking-wider hover:bg-[#3ce0ff] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'Redirecionando...' : 'Solicitar orçamento grátis'}</span>
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
