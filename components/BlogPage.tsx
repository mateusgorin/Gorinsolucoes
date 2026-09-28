import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MessageCircle,
  Database
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { blogPosts, BlogPost } from '../data/posts';

gsap.registerPlugin(ScrollTrigger);

export const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start']
  });

  const ghostY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Support direct slug query: /blog?post=slug
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const postSlug = params.get('post');
    if (postSlug) {
      const found = blogPosts.find(p => p.slug === postSlug);
      if (found) {
        setSelectedPost(found);
      }
    } else {
      setSelectedPost(null);
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
  }, [selectedPost]);

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.history.pushState({ postSlug: post.slug }, '', `/blog?post=${post.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
    window.history.pushState({}, '', '/blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const categories = [
    { id: 'todos', name: 'Todos os Conteúdos' },
    { id: 'SEO', name: 'SEO' },
    { id: 'Performance', name: 'Performance' },
    { id: 'Automação', name: 'Automação' },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    if (activeCategory === 'todos') return true;
    return post.category === activeCategory;
  });

  // =========================================================================
  // VIEW 2: LEITURA COMPLETA DO POST INDIVIDUAL (CMS-READY)
  // =========================================================================
  if (selectedPost) {
    const whatsappArticleUrl = `https://wa.me/5561981290099?text=${encodeURIComponent(
      `Olá! Li o artigo "${selectedPost.title}" no Blog da Gorin Soluções e gostaria de tirar uma dúvida para minha empresa.`
    )}`;

    return (
      <div className="bg-[#0B0B0E] text-[#F5F6FA] min-h-screen">
        
        {/* POST HERO (DARK #0B0B0E) */}
        <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#0B0B0E] text-[#F5F6FA] overflow-hidden">
          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
            
            {/* Top Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12">
              <button
                onClick={handleBackToBlog}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-white/80 hover:text-white hover:border-[#00D4FF]/50 transition-all cursor-pointer group font-mono text-xs uppercase"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform text-[#00D4FF]" />
                <span>Voltar ao Blog</span>
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-[#9496A6]">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span>CMS-READY // ARTIGO</span>
              </div>
            </div>

            {/* Category Tag */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span>{selectedPost.tag}</span>
            </div>

            {/* Post Title in General Sans */}
            <h1 className="font-display font-bold text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.06] tracking-[-0.02em] text-[#F5F6FA] mb-6 max-w-5xl">
              {selectedPost.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-white/10 text-xs font-mono text-[#9496A6]">
              <div className="flex items-center gap-2 text-white/90">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span>{selectedPost.author.name} · {selectedPost.author.role}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={13} className="text-[#00D4FF]" />
                <span>{selectedPost.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={13} className="text-[#00D4FF]" />
                <span>{selectedPost.readTime}</span>
              </div>
            </div>

            {/* Large Cover Image (Radius 3.2rem) */}
            <div className="mt-12 rounded-[3.2rem] overflow-hidden border border-white/15 aspect-[16/9] bg-[#16161C] shadow-2xl">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>
        </section>

        {/* POST BODY (LIGHT #F5F6FA — TRANSIÇÃO ROUNDED-T 6.4REM) */}
        <section className="py-24 sm:py-32 bg-[#F5F6FA] text-[#0B0B0E] rounded-t-[4rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-20 relative shadow-[0_-30px_70px_rgba(0,0,0,0.35)] border-t border-black/[0.06]">
          <div className="w-full max-w-[860px] mx-auto px-5 sm:px-8">
            
            {/* Excerpt Lead Box */}
            <div className="p-8 rounded-[2rem] bg-white border border-black/10 mb-12 shadow-sm">
              <p className="font-body text-lg sm:text-xl text-[#0B0B0E] font-medium leading-relaxed italic">
                "{selectedPost.excerpt}"
              </p>
            </div>

            {/* Paragraphs in Manrope */}
            <div className="space-y-6 font-body text-base sm:text-lg text-[#2A2B32] leading-relaxed">
              {selectedPost.content && selectedPost.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CMS Info Note */}
            <div className="mt-12 p-6 rounded-[1.6rem] bg-white border border-black/10 flex items-center justify-between text-xs font-mono text-[#555660]">
              <span>ID: {selectedPost.id} · Categoria: {selectedPost.category}</span>
              <span className="text-[#00D4FF] font-semibold">CMS-READY ARCHITECTURE</span>
            </div>

            {/* Bottom Actions */}
            <div className="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                onClick={handleBackToBlog}
                className="font-mono text-xs uppercase tracking-wider text-[#555660] hover:text-[#0B0B0E] flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>Voltar a todos os posts</span>
              </button>

              <a
                href={whatsappArticleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0B0B0E] text-[#F5F6FA] hover:bg-[#00D4FF] hover:text-[#0B0B0E] transition-all font-display text-xs font-semibold uppercase tracking-wider shadow-sm cursor-pointer"
              >
                <MessageCircle size={15} />
                <span>Conversar sobre este tema</span>
              </a>
            </div>

          </div>
        </section>

      </div>
    );
  }

  // =========================================================================
  // VIEW 1: BLOG GRID (HEADER DARK + SUBTEXTO SOLICITADO + 3 POSTS PLACEHOLDER)
  // =========================================================================
  return (
    <div className="bg-[#0B0B0E] text-[#F5F6FA] min-h-screen">
      
      {/* 1. HEADER (DARK #0B0B0E): Título "Blog" + Subtexto Exato */}
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
            BLOG
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
          
          {/* Top Bar: Back to Home + Architecture Indicator */}
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
              <span>Gorin Soluções // CMS-Ready Architecture</span>
            </div>
          </div>

          {/* Category Badge */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00D4FF] uppercase mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span>Publicações & Conhecimento</span>
          </div>

          {/* Título "Blog" Monumental em General Sans (8.8rem desktop / 4.8rem mobile) */}
          <div className="max-w-5xl mb-6 sm:mb-8">
            <h1
              ref={titleRef}
              className="font-display font-bold text-[clamp(3rem,8vw,8.8rem)] leading-[1.0] tracking-[-0.02em] text-[#F5F6FA]"
            >
              Blog<span className="text-[#00D4FF]">.</span>
            </h1>
          </div>

          {/* Subtexto exato solicitado pelo usuário */}
          <p className="font-body text-[#9496A6] text-base sm:text-xl md:text-[1.375rem] max-w-3xl leading-relaxed mb-10 sm:mb-12">
            conteúdos sobre desenvolvimento web, IA aplicada a negócios e processos de criação de sites de alta performance.
          </p>

          {/* Pill Bar com os 3 Temas Principais */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 border-t border-white/10 text-xs font-mono">
            <div className="px-4 py-2 rounded-full bg-[#141418] border border-white/10 text-white/90 flex items-center gap-2">
              <span className="text-[#00D4FF]">●</span>
              <span>SEO Técnico & Schema.org</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-[#141418] border border-white/10 text-white/90 flex items-center gap-2">
              <span className="text-[#00D4FF]">●</span>
              <span>Performance & Core Web Vitals 99+</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-[#141418] border border-white/10 text-white/90 flex items-center gap-2">
              <span className="text-[#00D4FF]">●</span>
              <span>Automação & IA Aplicada</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. GRID DE POSTS (LIGHT #F5F6FA — TRANSIÇÃO ROUNDED-T 6.4REM): 3 POSTS PLACEHOLDER */}
      <section 
        id="posts-placeholder-grid"
        className="py-24 sm:py-32 md:py-40 bg-[#F5F6FA] text-[#0B0B0E] rounded-t-[4rem] md:rounded-t-[6.4rem] -mt-16 sm:-mt-24 z-20 relative shadow-[0_-30px_70px_rgba(0,0,0,0.35)] border-t border-black/[0.06]"
      >
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
          
          {/* Header do Grid & Categorias */}
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

            <div className="font-mono text-xs text-[#555660] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>3 posts placeholder de exemplo // CMS-Ready</span>
            </div>
          </div>

          {/* Grid de 3 Posts Placeholder: Cards Grandes (radius 3.2rem) com imagem, categoria, título, data */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleSelectPost(post)}
                className="group flex flex-col rounded-[3.2rem] bg-white border border-black/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-black/30 transition-all duration-500 cursor-pointer"
              >
                {/* Imagem do Post com Leve Zoom no Hover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#18181D]">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Categoria Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#0B0B0E]/85 backdrop-blur-md text-white font-mono text-[10px] tracking-wider uppercase border border-white/10">
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0B0B0E] font-mono text-[10px] font-semibold border border-black/10">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-3">
                    {/* Data */}
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#555660]">
                      <Calendar size={13} className="text-[#00D4FF]" />
                      <span>{post.date}</span>
                    </div>

                    {/* Título do Post em General Sans */}
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B0B0E] tracking-tight leading-snug group-hover:text-[#00D4FF] transition-colors">
                      {post.title}
                    </h3>

                    {/* Resumo */}
                    <p className="font-body text-sm text-[#555660] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Rodapé do Card com Ação */}
                  <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#555660]">
                      {post.author.name}
                    </span>

                    <span className="inline-flex items-center gap-1 font-display font-semibold text-xs uppercase tracking-wider text-[#0B0B0E] group-hover:text-[#00D4FF] transition-colors">
                      <span>Ler Post</span>
                      <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* 3. ESTRUTURA PRONTA PARA RECEBER POSTS REAIS DEPOIS (CMS-READY BANNER) */}
          <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-[3.2rem] bg-[#0B0B0E] text-[#F5F6FA] border border-black/10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] uppercase font-semibold">
                  <Database size={14} />
                  <span>Estrutura CMS-Ready</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F6FA] tracking-tight">
                  Pronto para publicação de artigos e integração com CMS
                </h3>
                <p className="font-body text-sm sm:text-base text-[#9496A6] leading-relaxed">
                  Esta página está estruturada para receber posts reais a qualquer momento através de APIs de Headless CMS (Sanity, Contentful, Strapi), banco de dados Firestore ou arquivos Markdown, com tipagem TypeScript e renderização sob demanda.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:justify-end">
                <a
                  href="https://wa.me/5561981290099?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Gorin."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#00D4FF] text-[#0B0B0E] font-display font-semibold text-xs uppercase tracking-wider hover:bg-[#3ce0ff] transition-all shadow-md cursor-pointer"
                >
                  <MessageCircle size={15} />
                  <span>Falar com a Gorin</span>
                </a>

                <button
                  onClick={() => handleSelectPost(blogPosts[0])}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white/80 hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
                >
                  <span>Ver Exemplo de Artigo</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
