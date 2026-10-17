export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const articlesData: Article[] = [
  {
    id: 'ai-code-acceleration',
    title: 'Como a Inteligência Artificial Acelera a Velocidade de Escrita de Código e Criação de Sites',
    category: 'Inteligência Artificial',
    date: '15/10/2026',
    readTime: '4 min de leitura',
    image: '/images/showcase-feature-1.webp',
    excerpt: 'Descubra como modelos avançados de IA e assistentes de engenharia transformaram o fluxo de desenvolvimento web, reduzindo o tempo de criação de código limpo em React e TypeScript.',
    content: [
      'A inteligência artificial deixou de ser uma promessa futurista para se tornar a ferramenta mais poderosa no dia a dia de desenvolvedores de alto nível. Na Gorin Soluções, utilizamos inteligência artificial de ponta integrada ao nosso fluxo de engenharia para multiplicar a velocidade de escrita de códigos.',
      'Antigamente, criar estruturas complexas em React, configurar rotas, gerenciar estados reativos e escrever testes rigorosos demandava dias de tarefas repetitivas (boilerplate). Hoje, a IA auxilia na geração imediata de componentes modulares, validação de tipos TypeScript e otimização semântica.',
      'Isso não significa apenas entregar sites mais rápido — significa elevar o rigor técnico. Com a IA cuidando da base repetitiva, o desenvolvedor foca 100% na direção de arte, na experiência do usuário (UX) e na arquitetura de conversão comercial. O resultado para o cliente é um site autoral, robusto e entregue em tempo recorde sem sacrificar nenhuma linha de qualidade.'
    ]
  },
  {
    id: 'react-vs-wordpress',
    title: 'Websites em React vs. WordPress: Por que Empresas de Sucesso Estão Migrando',
    category: 'Engenharia Web',
    date: '10/10/2026',
    readTime: '5 min de leitura',
    image: '/images/showcase-feature-2.webp',
    excerpt: 'Entenda os gargalos de performance, segurança e manutenção das plataformas tradicionais e por que código autoral em React e TypeScript garante autoridade digital superior.',
    content: [
      'O mercado digital mudou. Plataformas de arrastar e soltar e construtores baseados em WordPress dependem de dezenas de plugins de terceiros que tornam o site lento, vulnerável a invasões e difícil de posicionar no Google.',
      'Quando desenvolvemos em React, Vite e TypeScript, cada byte de código é controlado. Não há excesso de scripts desnecessários. O carregamento ocorre em frações de segundo.',
      'Empresas que buscam transmitir credibilidade e fechar negócios no ambiente digital não podem se dar ao luxo de ter um site que cai ou demora a abrir no celular do cliente. O código autoral é o padrão ouro da engenharia moderna.'
    ]
  },
  {
    id: 'seo-performance-conversion',
    title: 'O Impacto do SEO Técnico e Carregamento Sub-Segundo na Taxa de Conversão',
    category: 'Performance',
    date: '05/10/2026',
    readTime: '6 min de leitura',
    image: '/images/showcase-feature-3.webp',
    excerpt: 'Como cada milissegundo economizado no carregamento do seu site se traduz diretamente em mais leads qualificados e maior faturamento para o seu negócio.',
    content: [
      'Estudos de comportamento do consumidor mostram que cada segundo de atraso no carregamento de uma página reduz drasticamente as taxas de conversão. Usuários no celular abandonam sites lentos antes mesmo de verem a primeira dobra.',
      'O SEO técnico vai muito além de palavras-chave: envolve marcação estruturada Schema.org, imagens otimizadas em WebP, fontes locais e ausência de bloqueadores de renderização.',
      'Ao unir alta performance técnica a uma jornada de usuário sem fricção, sua empresa se posiciona como líder de mercado e atrai clientes que já chegam prontos para comprar.'
    ]
  }
];
