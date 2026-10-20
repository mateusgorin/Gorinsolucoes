import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, MessageCircle, ArrowUpRight } from 'lucide-react';
import { articlesData, Article } from '../data/articles';
import { MagneticCta } from './MagneticCta';

interface BlogPageProps {
  onBack: () => void;
  whatsappUrl: string;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onBack, whatsappUrl }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = [
    'Todos',
    'Inteligência Artificial',
    'Engenharia Web',
    'Performance',
    'Design & UX',
    'Conversão & Vendas',
  ];

  const filteredArticles = selectedCategory === 'Todos'
    ? articlesData
    : articlesData.filter(a => a.category === selectedCategory);

  const handleOpenArticle = (article: Article) => {
    setActiveArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setActiveArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white pt-20 pb-28">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5 px-6 h-20 flex items-center justify-between">
        {activeArticle ? (
          <button
            onClick={handleBackToList}
            className="group flex items-center gap-2.5 text-sm font-semibold text-black hover:text-[#00D4FF] transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center group-hover:-translate-x-0.5 transition-transform">
              <ArrowLeft size={16} />
            </div>
            <span>Voltar ao Blog</span>
          </button>
        ) : (
          <button
            onClick={onBack}
            className="group flex items-center gap-2.5 text-sm font-semibold text-black hover:text-[#00D4FF] transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center group-hover:-translate-x-0.5 transition-transform">
              <ArrowLeft size={16} />
            </div>
            <span className="font-bold tracking-tighter uppercase text-base">GORIN<span className="text-[#00D4FF]">.</span></span>
          </button>
        )}

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-xs font-mono uppercase tracking-widest text-black/50">
            Blog
          </span>
          <MagneticCta
            onClick={onBack}
            variant="outline"
            className="!px-4 !py-2 !text-xs font-sans font-medium cursor-pointer"
          >
            Voltar ao Início
          </MagneticCta>
        </div>
      </header>

      {/* ARTICLE INLINE READER VIEW (NO POPUP / INLINE FULL PAGE) */}
      {activeArticle ? (
        <main className="max-w-4xl mx-auto px-6 pt-10">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Breadcrumb / Top Category */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-medium border border-black/20 text-black uppercase tracking-wider">
                {activeArticle.category}
              </span>
              <span className="text-black/30">·</span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-black/60">
                <Calendar size={13} />
                <span>{activeArticle.date}</span>
              </div>
              <span className="text-black/30">·</span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-black/60">
                <Clock size={13} />
                <span>{activeArticle.readTime}</span>
              </div>
            </div>

            {/* Monumental Article Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black leading-[1.08] mb-8">
              {activeArticle.title}
            </h1>

            {/* Lead Excerpt */}
            <p className="text-lg md:text-2xl text-black/75 font-normal leading-relaxed mb-10 pb-8 border-b border-black/10">
              {activeArticle.excerpt}
            </p>

            {/* 3D Hero Artwork Cover */}
            <div className="w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-[16/10] bg-slate-100 mb-12 shadow-sm">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Rich Editorial Body */}
            <div className="space-y-6 text-black/85 text-lg md:text-xl leading-relaxed mb-16 max-w-3xl">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx} className="first-of-type:font-medium">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Commercial CTA Card inside Article */}
            <div className="bg-[#0B0B0C] text-white p-8 md:p-12 rounded-[2rem] mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Quer um site assim para o seu negócio?
                </h3>
                <p className="text-white/70 text-sm md:text-base max-w-lg">
                  Me chame no WhatsApp e conversamos sobre prazo, o que você precisa e quanto custa.
                </p>
              </div>
              <MagneticCta
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="inverse"
                className="!py-4 !px-8 !text-sm whitespace-nowrap cursor-pointer shrink-0"
              >
                Falar com o Mateus
              </MagneticCta>
            </div>

            {/* Back Button & Related Articles Footer */}
            <div className="pt-8 border-t border-black/10 flex items-center justify-between">
              <button
                onClick={handleBackToList}
                className="group flex items-center gap-2 text-sm font-semibold text-black hover:text-[#00D4FF] transition-colors cursor-pointer"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>Voltar a todos os artigos</span>
              </button>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xs font-mono uppercase text-black/50 hover:text-black transition-colors cursor-pointer"
              >
                ↑ Topo da página
              </button>
            </div>
          </motion.article>
        </main>
      ) : (
        /* ARTICLES DIRECTORY LIST (GORIN 2-COLUMN DESIGN PATTERN) */
        <main className="gorin-container pt-8 md:pt-12">
          {/* Headline */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <span className="block mb-3 text-xs md:text-sm font-mono uppercase tracking-widest text-black/50">
              Blog · Gorin Soluções
            </span>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">
              Blog
            </h1>
            <p className="text-black/70 text-base md:text-xl leading-relaxed">
              Textos curtos, em linguagem simples, sobre site, Google e atendimento pelo WhatsApp.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 md:gap-3 overflow-x-auto pb-4 mb-14 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-black text-white shadow-md'
                    : 'bg-black/[0.04] text-black/70 hover:bg-black/[0.08] hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid (2 Columns on Desktop, Gorin Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-16 md:gap-y-20">
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                onClick={() => handleOpenArticle(article)}
                className="group cursor-pointer flex flex-col select-none"
                data-cursor-text="Ler"
              >
                {/* 3D Artwork Cover Card (Rounded corners, no outer container borders) */}
                <div className="relative aspect-[16/10] w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Category Pill Tag */}
                <div className="mt-6 mb-3">
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-medium border border-black/25 text-black uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                {/* Article Title */}
                <h2 className="text-2xl md:text-[2rem] font-semibold tracking-tight text-black group-hover:text-[#0E7490] transition-colors leading-[1.22] mb-3">
                  {article.title}
                </h2>

                {/* Date */}
                <span className="text-sm font-mono text-black/50">
                  {article.date}
                </span>
              </motion.article>
            ))}
          </div>
        </main>
      )}
    </div>
  );
};
