import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowLeft, 
  Zap, 
  ExternalLink, 
  MessageCircle
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData, CaseStudy } from '../data/projects';
import { ImageReveal } from './ImageReveal';

gsap.registerPlugin(ScrollTrigger);

export const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  
  const headerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start']
  });

  const ghostY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Handle URL query parameters for direct case linking: /projetos?case=amorim-ergonomia
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const caseSlug = params.get('case');
    if (caseSlug) {
      const found = projectsData.find(p => p.slug === caseSlug);
      if (found) {
        setSelectedCase(found);
      }
    } else {
      setSelectedCase(null);
    }
  }, []);

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
  }, [selectedCase]);

  const handleSelectCase = (project: CaseStudy) => {
    setSelectedCase(project);
    const newUrl = `/projetos?case=${project.slug}`;
    window.history.pushState({ caseSlug: project.slug }, '', newUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToGrid = () => {
    setSelectedCase(null);
    window.history.pushState({}, '', '/projetos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const categories = [
    { id: 'todos', name: 'Todos os Projetos' },
    { id: 'sites', name: 'Sites Institucionais' },
    { id: 'sistemas', name: 'Sistemas Web' },
    { id: 'ecommerce', name: 'E-Commerce' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'todos') return true;
    if (activeCategory === 'sites') return project.category === 'Site Institucional';
    if (activeCategory === 'sistemas') return project.category === 'Sistema Web';
    if (activeCategory === 'ecommerce') return project.category === 'E-commerce';
    return true;
  });

  const totalDelivered = projectsData.length;

  // =========================================================================
  // VIEW 2: DETALHE DO CASE STUDY INDIVIDUAL
  // Estrutura solicitada: Hero do projeto, Problema, Solução, Resultado, Galeria
  // =========================================================================
  if (selectedCase) {
    const whatsappCaseUrl = `https://wa.me/5561981290099?text=${encodeURIComponent(
      `Olá! Vi o case do *${selectedCase.title}* no site da Gorin Soluções e gostaria de solicitar um projeto com padrão similar para minha empresa.`
    )}`;

    return (
      <div className="bg-[#0B0B0E] text-[#F5F6FA] min-h-screen">
        
        {/* CASE HERO (DARK #0B0B0E) */}
        <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#0B0B0E] text-[#F5F6FA] overflow-hidden">
          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
            
            {/* Top Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12">
              <button
                onClick={handleBackToGrid}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-white/80 hover:text-white hover:border-[#00D4FF]/50 transition-all cursor-pointer group font-mono text-xs uppercase"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform text-[#00D4FF]" />
                <span>Voltar ao Portfólio</span>
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-[#9496A6]">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span>CASE STUDY // {selectedCase.year}</span>
              </div>
            </div>

            {/* Category Tag */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span>{selectedCase.category}</span>
            </div>

            {/* Monumental Case Title: General Sans */}
            <h1 className="font-display font-bold text-[clamp(2.5rem,6.5vw,6rem)] leading-[1.02] tracking-[-0.02em] text-[#F5F6FA] mb-6">
              {selectedCase.title}
            </h1>

            {/* Client & Tagline */}
            <p className="font-body text-[#9496A6] text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed mb-8">
              {selectedCase.desc}
            </p>

            {/* Meta Pill Bar & External Link */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <div className="px-4 py-2 rounded-full bg-[#141418] border border-white/10 text-xs font-mono text-white/80 flex items-center gap-2">
                <span className="text-[#00D4FF]">Cliente:</span>
                <span>{selectedCase.client}</span>
              </div>

              <div className="px-4 py-2 rounded-full bg-[#141418] border border-white/10 text-xs font-mono text-white/80 flex items-center gap-2">
                <Zap size={14} className="text-[#00D4FF]" />
                <span>{selectedCase.metrics}</span>
              </div>

              {selectedCase.link && selectedCase.link !== 'internal' && selectedCase.link !== '#' && (
                <a
                  href={selectedCase.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#00D4FF] text-[#0B0B0E] hover:bg-[#3be0ff] transition-all font-display text-xs font-semibold uppercase tracking-wider shadow-sm ml-auto"
                >
                  <span>Visitar Projeto no Ar</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            {/* Large Hero Image (Radius 3.2rem) */}
            <div className="mt-12 rounded-[3.2rem] overflow-hidden border border-white/15 aspect-[16/9] bg-[#17171D] shadow-2xl relative">
              <ImageReveal
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>
        </section>

        {/* O PROBLEMA & A SOLUÇÃO (LIGHT #F5F6FA — TRANSIÇÃO ROUNDED-T 6.4REM) */}
        <section className="py-24 sm:py-32 bg-[#F5F6FA] text-[#0B0B0E] rounded-t-[4rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-20 relative shadow-[0_-30px_70px_rgba(0,0,0,0.35)] border-t border-black/[0.06]">
          <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left: O Problema */}
              <div className="lg:col-span-6 rounded-[3.2rem] bg-white border border-black/10 p-8 sm:p-12 shadow-sm space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#555660] uppercase tracking-wider font-semibold">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>01 // O Desafio Anterior</span>
                </div>

                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0B0B0E] tracking-tight">
                  O Problema
                </h2>

                <p className="font-body text-[#555660] text-base sm:text-lg leading-relaxed">
                  {selectedCase.problem}
                </p>

                <div className="p-4 rounded-[1.6rem] bg-[#F5F6FA] border border-black/[0.08] text-xs font-mono text-[#555660]">
                  Gargalo superado com reformulação integral da presença digital.
                </div>
              </div>

              {/* Right: A Solução */}
              <div className="lg:col-span-6 rounded-[3.2rem] bg-white border border-black/10 p-8 sm:p-12 shadow-sm space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] uppercase tracking-wider font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                  <span>02 // Engenharia Aplicada</span>
                </div>

                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0B0B0E] tracking-tight">
                  A Solução da Gorin
                </h2>

                <p className="font-body text-[#555660] text-base sm:text-lg leading-relaxed">
                  {selectedCase.solution}
                </p>

                <div className="pt-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#0B0B0E] font-semibold block mb-2">
                    Stack Utilizada no Projeto:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.stack.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-[#0B0B0E] text-[#F5F6FA] text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* O RESULTADO (Card Grande em Destaque) */}
            <div className="mt-12 rounded-[3.2rem] bg-[#0B0B0E] text-[#F5F6FA] p-8 sm:p-12 lg:p-14 border border-black/10 shadow-xl">
              <div className="max-w-3xl space-y-4 mb-8">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] uppercase tracking-wider font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                  <span>03 // Impacto Comercial Comprovado</span>
                </div>

                <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F5F6FA] tracking-tight">
                  Resultados Alcançados
                </h2>

                <p className="font-body text-[#9496A6] text-base sm:text-lg">
                  Métricas reais e ganhos operacionais entregues após o deploy da solução.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
                {selectedCase.results.map((res, rIdx) => (
                  <div key={rIdx} className="p-6 rounded-[2rem] bg-[#141418] border border-white/10 space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center font-mono text-sm font-bold">
                      0{rIdx + 1}
                    </div>
                    <p className="font-body text-sm sm:text-base text-white/90 leading-relaxed">
                      {res}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* GALERIA DO PROJETO (DARK #0B0B0E — TRANSIÇÃO ROUNDED-T 6.4REM) */}
        <section className="py-24 sm:py-32 bg-[#0B0B0E] text-[#F5F6FA] rounded-t-[4rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-30 relative shadow-[0_-30px_70px_rgba(0,0,0,0.5)] border-t border-white/10">
          <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
            
            <div className="max-w-2xl mb-14 sm:mb-16">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase mb-4 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span>04 // Registros Visuais</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F5F6FA] tracking-tight">
                Galeria do Projeto
              </h2>

              <p className="font-body text-[#9496A6] text-base sm:text-lg mt-3">
                Interface construída com foco em hierarquia tipográfica pura e precisão em cada detalhe.
              </p>
            </div>

            {/* Gallery Grid (Radius 3.2rem) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {selectedCase.gallery.map((imgSrc, gIdx) => (
                <div
                  key={gIdx}
                  className={`rounded-[3.2rem] overflow-hidden border border-white/10 bg-[#16161C] shadow-xl group relative ${
                    gIdx === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[16/11]'
                  }`}
                >
                  <ImageReveal
                    src={imgSrc}
                    alt={`${selectedCase.title} - Tela ${gIdx + 1}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              ))}
            </div>

            {/* CTA Final do Case */}
            <div className="mt-20 p-8 sm:p-14 rounded-[3.2rem] bg-[#121216] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div className="space-y-2 max-w-xl text-center md:text-left">
                <span className="font-mono text-xs text-[#00D4FF] uppercase font-semibold">
                  // Deseja um resultado equivalente?
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F6FA]">
                  Vamos construir o projeto da sua empresa.
                </h3>
                <p className="font-body text-sm sm:text-base text-[#9496A6]">
                  Desenvolvimento com inteligência artificial, código puro e entrega rápida em Brasília e em todo o Brasil.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <button
                  onClick={handleBackToGrid}
                  className="px-6 py-3.5 rounded-full border border-white/15 text-white/80 hover:text-white font-mono text-xs uppercase tracking-wider"
                >
                  Ver Outros Projetos
                </button>

                <a
                  href={whatsappCaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00D4FF] text-[#0B0B0E] font-display font-semibold text-xs uppercase tracking-wider hover:bg-[#3be0ff] transition-all shadow-md cursor-pointer"
                >
                  <MessageCircle size={16} />
                  <span>Falar sobre este Case</span>
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>
    );
  }

  // =========================================================================
  // VIEW 1: PORTFÓLIO PRINCIPAL (HEADER DARK + CONTADOR + GRID LIGHT COM HOVER SCALE)
  // =========================================================================
  return (
    <div className="bg-[#0B0B0E] text-[#F5F6FA] min-h-screen">
      
      {/* 1. HEADER (DARK #0B0B0E): Título "Projetos" + Contador */}
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
            PROJETOS
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
          
          {/* Top Bar: Back to Home + Counter Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 text-xs font-mono tracking-widest uppercase">
            <a
              href="/"
              onClick={handleNavigateHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-white/80 hover:text-white hover:border-[#00D4FF]/50 transition-all cursor-pointer group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform text-[#00D4FF]" />
              <span>Voltar ao Início</span>
            </a>

            {/* Contador de Projetos Entregues */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#141418] border border-white/10 text-white/90">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              <span><strong>10+ projetos entregues</strong> // BRASÍLIA & BRASIL</span>
            </div>
          </div>

          {/* Section Category */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span>Portfólio de Obras & Engenharia</span>
          </div>

          {/* Título "Projetos" Monumental na Escala do Design System (8.8rem desktop / 4.8rem mobile) */}
          <div className="max-w-5xl mb-6 sm:mb-8">
            <h1
              ref={titleRef}
              className="font-display font-bold text-[clamp(3rem,8vw,8.8rem)] leading-[1.0] tracking-[-0.02em] text-[#F5F6FA]"
            >
              Projetos<span className="text-[#00D4FF]">.</span>
            </h1>
          </div>

          {/* Subtexto Editorial de Apoio */}
          <p className="font-body text-[#9496A6] text-base sm:text-xl md:text-[1.375rem] max-w-3xl leading-relaxed mb-10 sm:mb-12">
            Uma seleção completa de sites institucionais, sistemas corporativos customizados e plataformas digitais desenvolvidas com inteligência artificial e rigor estético autoral.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-mono">
            <div>
              <div className="text-[#00D4FF] font-bold text-2xl sm:text-3xl font-display">{totalDelivered}+</div>
              <div className="text-[#9496A6] mt-0.5">Obras Finalizadas</div>
            </div>
            <div>
              <div className="text-[#F5F6FA] font-bold text-2xl sm:text-3xl font-display">99+</div>
              <div className="text-[#9496A6] mt-0.5">Core Web Vitals Médio</div>
            </div>
            <div>
              <div className="text-[#F5F6FA] font-bold text-2xl sm:text-3xl font-display">0.7s</div>
              <div className="text-[#9496A6] mt-0.5">Carregamento Médio</div>
            </div>
            <div>
              <div className="text-[#F5F6FA] font-bold text-2xl sm:text-3xl font-display">100%</div>
              <div className="text-[#9496A6] mt-0.5">Código Puro & Sem CMS</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. GRID DE PROJETOS (LIGHT #F5F6FA — TRANSIÇÃO ROUNDED-T 6.4REM) */}
      <section 
        id="catalogo-projetos"
        className="py-24 sm:py-32 md:py-40 bg-[#F5F6FA] text-[#0B0B0E] rounded-t-[4rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-20 relative shadow-[0_-30px_70px_rgba(0,0,0,0.35)] border-t border-black/[0.06]"
      >
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
          
          {/* Filter Tabs Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-16 pb-6 border-b border-black/10">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full font-display text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#0B0B0E] text-[#F5F6FA] shadow-sm'
                      : 'bg-white text-[#555660] hover:text-[#0B0B0E] border border-black/10'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="font-mono text-xs text-[#555660]">
              Exibindo <strong className="text-[#0B0B0E]">{filteredProjects.length}</strong> de {totalDelivered} cases
            </div>
          </div>

          {/* Grid de Projetos: Cards Grandes com imagem de capa, nome do cliente, categoria, hover scale + reveal de detalhes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: (idx % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleSelectCase(project)}
                className="group flex flex-col rounded-[3.2rem] bg-white border border-black/10 overflow-hidden shadow-sm hover:shadow-2xl hover:border-black/30 transition-all duration-500 cursor-pointer"
              >
                {/* Imagem de Capa com Leve Scale no Hover (Cards Grandes: radius 3.2rem) */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#18181D]">
                  <ImageReveal
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-5 left-5 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#0B0B0E]/85 backdrop-blur-md text-white font-mono text-[10px] tracking-wider uppercase border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Metrics Badge */}
                  <div className="absolute bottom-5 left-5 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0B0B0E] font-mono text-[11px] font-semibold border border-black/10 shadow-sm flex items-center gap-1.5">
                      <Zap size={13} className="text-[#00D4FF]" />
                      <span>{project.metrics}</span>
                    </span>
                  </div>

                  {/* Action Icon on Top Right */}
                  <div className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white text-[#0B0B0E] flex items-center justify-center shadow-lg group-hover:bg-[#00D4FF] group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Detalhes do Card: Nome do Cliente, Categoria e Reveal de Detalhes no Hover */}
                <div className="p-8 sm:p-10 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#555660]">
                      <span className="uppercase tracking-wider font-semibold">{project.client}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0B0B0E] tracking-tight group-hover:text-[#00D4FF] transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-body text-sm sm:text-base text-[#555660] leading-relaxed pt-1">
                      {project.desc}
                    </p>
                  </div>

                  {/* Reveal de Detalhes: Stack Tags + Botão Ver Case Completo */}
                  <div className="pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-full bg-[#F5F6FA] border border-black/[0.08] text-[11px] font-mono text-[#555660]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 font-display font-semibold text-xs uppercase tracking-wider text-[#0B0B0E] group-hover:text-[#00D4FF] transition-colors">
                      <span>Ver Case Completo</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner Callout */}
          <div className="mt-20 sm:mt-28 p-8 sm:p-12 rounded-[3.2rem] bg-[#0B0B0E] text-[#F5F6FA] flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl border border-black/10">
            <div className="space-y-2 text-center sm:text-left max-w-xl">
              <span className="font-mono text-xs text-[#00D4FF] uppercase font-semibold">
                // Seu projeto pode ser o próximo
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F6FA]">
                Pronto para colocar sua marca em outro patamar?
              </h3>
              <p className="font-body text-sm sm:text-base text-[#9496A6]">
                Desenvolvemos seu site institucional ou sistema web sob medida em até 10 dias úteis.
              </p>
            </div>

            <a
              href="/#contato"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/#contato');
                window.dispatchEvent(new PopStateEvent('popstate'));
                setTimeout(() => {
                  const target = document.getElementById('contato');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00D4FF] text-[#0B0B0E] font-display font-semibold text-xs uppercase tracking-wider hover:bg-[#3be0ff] transition-all shrink-0 cursor-pointer shadow-md"
            >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
