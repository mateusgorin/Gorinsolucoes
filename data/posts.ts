export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "SEO" | "Performance" | "Automação" | "Tecnologia" | "Processos";
  tag: string;
  date: string;
  readTime: string;
  image: string;
  isPlaceholder?: boolean;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  content?: string[];
}

/**
 * 3 posts placeholder de exemplo (títulos genéricos sobre SEO, performance e automação)
 * Estrutura CMS-Ready para integração futura com Headless CMS, Markdown ou API externa.
 */
export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "seo-tecnico-indexacao-google-schema-org",
    title: "SEO Técnico: Como arquitetura semântica e Schema.org garantem topo no Google",
    excerpt: "Estratégias fundamentais de otimização de busca técnica, sitemaps limpos e marcação estruturada para ranqueamento de empresas e serviços locais.",
    category: "SEO",
    tag: "SEO // INDEXAÇÃO & SCHEMA.ORG",
    date: "24 de Março, 2026",
    readTime: "4 min de leitura",
    image: "/images/showcase-feature-2.webp",
    isPlaceholder: true,
    author: {
      name: "Gorin Soluções",
      role: "Equipe de Engenharia"
    },
    content: [
      "Ter um site visualmente atraente não é suficiente se os robôs de busca do Google não conseguirem interpretar a hierarquia de conteúdo com precisão semântica.",
      "A marcação estruturada com Schema.org permite que os mecanismos de pesquisa compreendam exatamente os serviços prestados, horários de funcionamento, avaliações de clientes e área de cobertura em Brasília e em todo o Brasil.",
      "Ao aliar tags semânticas HTML5 puras a um sitemap XML dinâmico e metadados OpenGraph para WhatsApp e redes sociais, seu site atinge os melhores índices de indexação orgânica sem depender exclusivamente de anúncios pagos."
    ]
  },
  {
    id: "post-2",
    slug: "performance-web-core-web-vitals-carregamento-sub-segundo",
    title: "Performance Web: Por que cada milissegundo de carregamento define suas vendas",
    excerpt: "Como o carregamento instantâneo em menos de um segundo reduz a taxa de rejeição no celular e maximiza a taxa de conversão em leads.",
    category: "Performance",
    tag: "PERFORMANCE // CORE WEB VITALS 99+",
    date: "18 de Março, 2026",
    readTime: "5 min de leitura",
    image: "/images/showcase-feature-1.webp",
    isPlaceholder: true,
    author: {
      name: "Gorin Soluções",
      role: "Equipe de Engenharia"
    },
    content: [
      "Pesquisas globais comprovam que mais de 53% dos usuários móveis abandonam uma página que demora mais de 3 segundos para carregar no smartphone.",
      "Muitos sites perdem potenciais clientes antes mesmo da primeira leitura porque estão sobrecarregados de scripts pesados, construtores visuais de arrastar-e-soltar e dezenas de plugins de terceiros.",
      "Ao desenvolver sobre a moderna stack React 19 com compilação ultra veloz via Vite e imagens WebP compactadas, garantimos carregamento sub-segundo e score 99+ no Google Lighthouse, retendo a atenção do visitante no momento crítico da decisão."
    ]
  },
  {
    id: "post-3",
    slug: "automacao-processos-ia-conversao-comercial",
    title: "Automação com IA: Como transformar seu site em um canal comercial ativo 24/7",
    excerpt: "Integração de inteligência artificial generativa, APIs de WhatsApp e fluxos automáticos para atendimento rápido e qualificação de clientes.",
    category: "Automação",
    tag: "IA APLICADA // AUTOMAÇÃO & WHATSAPP",
    date: "12 de Março, 2026",
    readTime: "4 min de leitura",
    image: "/images/showcase-feature-3.webp",
    isPlaceholder: true,
    author: {
      name: "Gorin Soluções",
      role: "Equipe de Engenharia"
    },
    content: [
      "A velocidade de resposta no primeiro contato é um dos fatores mais determinantes para fechar um negócio no ambiente digital contemporâneo.",
      "A automação com inteligência artificial não substitui o atendimento humano afetuoso, mas elimina o tempo de espera nas primeiras perguntas, qualificando a demanda do cliente instantaneamente a qualquer hora do dia ou da noite.",
      "Conectar formulários inteligentes e WhatsApp Business API diretamente aos modelos de IA permite coletar orçamentos detalhados e direcionar propostas prontas para a equipe comercial fechar com máxima agilidade."
    ]
  }
];

/**
 * Função CMS-Ready: permite carregar posts de uma API externa (Contentful, Sanity, Strapi, Firestore ou arquivos locais)
 */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  // Simulação de hook assíncrono para integração futura com Headless CMS
  return Promise.resolve(blogPosts);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return Promise.resolve(blogPosts.find(p => p.slug === slug));
}
