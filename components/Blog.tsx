import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { ArrowRight, BookOpen, ChevronUp, X, Zap, Clock, Tag } from 'lucide-react';

const articles = [
  {
    title: "Por que seu site não está vendendo?",
    excerpt: "Descubra os 5 erros fatais que afastam clientes e como corrigi-los para aumentar sua conversão hoje mesmo.",
    fullContent: "Muitos empresários acreditam que basta ter um site para as vendas acontecerem. No entanto, existem erros invisíveis que matam a conversão. \n\n1. Falta de clareza na proposta de valor: O cliente não entende o que você faz em 5 segundos.\n2. Velocidade de carregamento lenta: Cada segundo de espera reduz sua conversão em 7%.\n3. Ausência de CTAs claros: O visitante não sabe qual o próximo passo deve dar.\n4. Design não responsivo: Se o site é ruim no celular, você perde 60% do tráfego.\n5. Falta de prova social: Sem depoimentos, o cliente não confia no seu serviço.\n\nCorrigir esses pontos é o primeiro passo para transformar seu site em uma máquina de vendas real.",
    date: "24 FEV, 2025",
    category: "ESTRATÉGIA",
    readTime: "5 min"
  },
  {
    title: "O poder da velocidade no Google",
    excerpt: "Como o tempo de carregamento influencia diretamente no seu ranking e por que milissegundos valem ouro.",
    fullContent: "O Google prioriza a experiência do usuário acima de tudo. Se seu site demora mais de 3 segundos para carregar, você está perdendo mais de 50% dos seus visitantes antes mesmo deles verem sua oferta. \n\nSites rápidos têm taxas de rejeição menores e conversões significativamente maiores. No mercado atual, velocidade não é mais um diferencial, é um requisito básico de sobrevivência. Utilizamos tecnologias de ponta como Vite, React e compressão de imagens inteligente para garantir que seu site carregue de forma instantânea, garantindo a melhor posição possível nos motores de busca.",
    date: "20 FEV, 2025",
    category: "SEO",
    readTime: "4 min"
  },
  {
    title: "Design que converte: Guia Prático",
    excerpt: "Aprenda a usar a psicologia das cores e o layout estratégico para guiar seu cliente até o botão de compra.",
    fullContent: "Design não é apenas sobre estética; é sobre psicologia aplicada ao consumo. O uso correto de cores, espaços em branco e hierarquia visual guia o olhar do usuário de forma subconsciente.\n\nUm botão de destaque deve ter uma cor contrastante que 'salte' aos olhos. O texto deve ser escaneável, com títulos fortes e parágrafos curtos. Cada elemento visual deve ter um único propósito: levar o usuário à ação desejada (CTA). Quando o design é estratégico, a venda acontece de forma natural e fluida.",
    date: "15 FEV, 2025",
    category: "DESIGN",
    readTime: "6 min"
  },
  {
    title: "Quanto custa um site profissional?",
    excerpt: "Quebre o mito de “site caro”, explique o que influencia no preço e mostre por que o barato sai caro. Esse artigo atrai gente quase pronta para comprar.",
    fullContent: "O preço de um site varia conforme a complexidade, funcionalidades e o nível de personalização exigido. Um site 'barato' feito com templates genéricos pode custar muito caro a longo prazo devido à falta de performance, bugs constantes e ausência de SEO.\n\nUm site profissional é um investimento estratégico que se paga através da autoridade de marca e geração constante de leads qualificados. Ao investir em um projeto exclusivo, você garante segurança, escalabilidade e uma ferramenta que realmente trabalha para o seu negócio 24 horas por dia.",
    date: "26 FEV, 2025",
    category: "SEO",
    readTime: "5 min"
  },
  {
    title: "Site bonito ou site que vende? Entenda a diferença",
    excerpt: "Mostre que estética sem estratégia não gera resultado e que conversão vem de decisão, não só de design. Excelente para educar e posicionar você como especialista.",
    fullContent: "Um site bonito pode ser apenas uma obra de arte digital sem utilidade comercial. Um site que vende foca inteiramente na jornada do cliente e na resolução de problemas.\n\nEle responde às dúvidas do visitante antes mesmo delas serem formuladas, quebra objeções com provas sociais e facilita o contato imediato. A beleza deve servir à estratégia de conversão, não o contrário. Se o seu site é lindo mas o telefone não toca, você tem um portfólio, não uma ferramenta de vendas.",
    date: "26 FEV, 2025",
    category: "ESTRATÉGIA",
    readTime: "4 min"
  },
  {
    title: "Botão de WhatsApp realmente aumenta vendas?",
    excerpt: "Explique, com exemplos práticos, como o WhatsApp reduz atrito, aumenta contatos e por que é essencial no mercado brasileiro.",
    fullContent: "No Brasil, o WhatsApp é a ferramenta de comunicação número um. Ter um botão de contato rápido reduz drasticamente o atrito entre o interesse inicial do cliente e a conversão final.\n\nEle humaniza o atendimento, gera confiança imediata e permite fechar vendas complexas em tempo real através de uma conversa direta. Diferente de formulários estáticos que podem demorar horas para serem respondidos, o WhatsApp oferece a gratificação instantânea que o consumidor moderno exige. É, sem dúvida, o recurso com maior ROI (Retorno sobre Investimento) para sites de serviços.",
    date: "26 FEV, 2025",
    category: "CONVERSÃO",
    readTime: "3 min"
  }
];

export const Blog: React.FC = () => {
  const m = motion as any;
  const [showAll, setShowAll] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  // Bloquear scroll quando o modal estiver aberto
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedArticle]);

  const toggleShowAll = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAll(!showAll);
  };

  const visibleArticles = showAll ? articles : articles.slice(0, 3);

  return (
    <section id="blog" className="py-24 bg-cyber-dark relative scroll-mt-24 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="CONHECIMENTO ESTRATÉGICO" subtitle="NOSSO BLOG" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleArticles.map((article, idx) => (
              <m.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: showAll ? 0 : idx * 0.1 }}
                className="group bg-cyber-black border border-cyber-primary/10 clip-corner p-6 hover:border-cyber-primary transition-all flex flex-col h-full"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono text-cyber-primary border border-cyber-primary/30 px-2 py-1 uppercase tracking-widest">
                    {article.category}
                  </span>
                  <span className="text-[10px] font-mono text-cyber-gray">{article.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-cyber-white mb-4 group-hover:text-cyber-primary transition-colors leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-cyber-gray text-sm mb-6 flex-grow leading-relaxed">
                  {article.excerpt}
                </p>
                
                <button 
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-2 text-xs font-mono text-cyber-primary hover:text-cyber-white transition-colors text-left cursor-pointer"
                >
                  LER ARTIGO COMPLETO <ArrowRight size={14} />
                </button>
              </m.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={toggleShowAll}
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyber-primary/30 text-cyber-primary font-mono text-sm hover:bg-cyber-primary hover:text-black transition-all clip-corner-sm"
          >
            {showAll ? (
              <>VER MENOS <ChevronUp size={18} /></>
            ) : (
              <> <BookOpen size={18} /> VER TODOS OS ARTIGOS</>
            )}
          </button>
        </div>
      </div>

      {/* Modal de Leitura do Artigo */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <m.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-cyber-black border border-cyber-primary/30 clip-corner overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,240,255,0.2)]"
            >
              {/* Header do Modal */}
              <div className="p-6 border-b border-cyber-primary/10 flex justify-between items-center bg-cyber-slate/20">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-cyber-primary/10 text-cyber-primary rounded-none border border-cyber-primary/20">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs text-cyber-primary uppercase tracking-widest">Leitura Completa</h4>
                    <p className="text-[10px] text-cyber-gray font-mono uppercase">{selectedArticle.category} // {selectedArticle.date}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 text-cyber-gray hover:text-cyber-primary transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Conteúdo do Modal */}
              <div className="flex-grow overflow-y-auto p-8 sm:p-12 custom-scrollbar">
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-center gap-6 mb-8 text-[10px] font-mono text-cyber-secondary uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Clock size={12} /> {selectedArticle.readTime} de leitura</span>
                    <span className="flex items-center gap-1"><Tag size={12} /> {selectedArticle.category}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-cyber-white mb-8 leading-tight">
                    {selectedArticle.title}
                  </h2>

                  <div className="prose prose-invert max-w-none">
                    <p className="text-cyber-gray text-lg leading-relaxed whitespace-pre-line font-sans">
                      {selectedArticle.fullContent}
                    </p>
                  </div>

                  <div className="mt-12 pt-8 border-t border-cyber-primary/10">
                    <div className="bg-cyber-primary/5 border border-cyber-primary/20 p-6 clip-corner-sm">
                      <h4 className="font-mono text-cyber-white font-bold mb-2 uppercase tracking-widest text-sm">Gostou do conteúdo?</h4>
                      <p className="text-cyber-gray text-sm mb-4">Podemos aplicar essas estratégias no seu projeto hoje mesmo.</p>
                      <button 
                        onClick={() => {
                          setSelectedArticle(null);
                          const element = document.getElementById('contact');
                          if (element) {
                            setTimeout(() => {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }, 300);
                          }
                        }}
                        className="inline-flex items-center gap-2 text-cyber-primary font-mono text-xs hover:text-cyber-white transition-colors"
                      >
                        FALAR COM UM ESPECIALISTA <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
