import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Clock, Calendar, ArrowLeft, Sparkles, Code2, Layers, Cpu } from 'lucide-react';

import { articlesData, Article } from '../data/articles';

interface BlogPageProps {
  onBack: () => void;
  whatsappUrl: string;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onBack, whatsappUrl }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = ['Todos', 'Inteligência Artificial', 'Engenharia Web', 'Performance', 'Design & UX', 'Conversão & Vendas'];

  const filteredArticles = selectedCategory === 'Todos' 
    ? articlesData 
    : articlesData.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white pt-16 pb-20">
      {/* Top Navbar Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/10 px-6 py-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold text-black hover:text-[#00D4FF] transition-colors cursor-pointer"
        >
          <ArrowLeft size={18} />
          <span>Voltar ao Início</span>
        </button>
        <span className="font-bold text-lg tracking-tight uppercase">
          GORIN<span className="text-[#00D4FF]">.</span> BLOG
        </span>
      </div>

      <div className="cuberto-container pt-4 md:pt-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="caption-label block mb-2 text-xs md:text-sm font-mono uppercase tracking-widest text-black/50">
            Insights &amp; Artigos · Gorin Soluções
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-3">
            Blog &amp; Conhecimento
          </h1>
          <p className="text-black/70 text-base md:text-lg leading-relaxed">
            Notícias, bastidores de engenharia, inteligência artificial e estratégias para dominar o mercado digital.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 md:gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
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

        {/* Articles Grid (2 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredArticles.map((article) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setActiveArticle(article)}
              className="group cursor-pointer flex flex-col bg-white rounded-3xl overflow-hidden border border-black/10 hover:shadow-2xl transition-all duration-500"
              data-cursor-text="Ler"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded-full uppercase tracking-wider">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-black/50 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {article.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-black group-hover:text-[#0E7490] transition-colors mb-3 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-black/70 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveArticle(null)}
            className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white text-black rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Header Image */}
              <div className="relative aspect-[21/9] w-full overflow-hidden bg-black/10">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Fechar"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Article Body */}
              <div className="p-6 md:p-12 space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#0E7490] uppercase tracking-wider mb-3">
                    <span>{activeArticle.category}</span>
                    <span>·</span>
                    <span>{activeArticle.date}</span>
                    <span>·</span>
                    <span>{activeArticle.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
                    {activeArticle.title}
                  </h2>
                </div>

                <div className="space-y-4 text-black/80 text-base md:text-lg leading-relaxed pt-2 border-t border-black/10">
                  {activeArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-8 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="CtaButton -fill !py-3.5 !px-7 !text-sm flex items-center gap-2"
                  >
                    <span>Falar sobre seu projeto com a Gorin</span>
                    <ArrowUpRight size={16} />
                  </a>

                  <button
                    onClick={() => setActiveArticle(null)}
                    className="text-xs font-mono text-black/60 hover:text-black transition-colors cursor-pointer"
                  >
                    Fechar artigo
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
