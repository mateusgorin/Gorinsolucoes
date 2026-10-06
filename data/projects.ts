export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: "Site Institucional" | "Sistema Web" | "E-commerce";
  tag: string;
  desc: string;
  image: string;
  gallery: string[];
  link: string;
  isFeatured?: boolean;
  metrics: string;
  problem: string;
  solution: string;
  results: string[];
  stack: string[];
  year: string;
}

export const projectsData: CaseStudy[] = [
  {
    slug: "brinca-movel",
    title: "BRINCA MÓVEL",
    client: "Brinca Móvel Oficial",
    category: "Site Institucional",
    tag: "INTERATIVO // ALTA VELOCIDADE",
    desc: "Site para uma empresa de brincadeiras e eventos infantis. Leve, colorido e com pedido de orçamento direto no WhatsApp.",
    image: "/images/brincamovel.jpg",
    gallery: [
      "/images/brincamovel.jpg",
      "/images/showcase-feature-3.webp",
      "/images/brincamovel.jpg"
    ],
    link: "https://www.brincamoveloficial.com.br",
    isFeatured: true,
    metrics: "Carregamento Rápido · Contato Direto",
    problem: "A empresa precisava de um site leve e colorido, com abertura rápida no celular dos pais durante a busca por eventos, sem perder a interatividade visual.",
    solution: "Desenvolvimento de plataforma interativa em React 19 com fotos otimizadas, navegação dinâmica dos pacotes e conexão direta com WhatsApp.",
    results: [
      "Carregamento ágil no celular mesmo com várias fotos dos eventos",
      "Aumento expressivo no envio de pedidos de orçamento pelo WhatsApp",
      "Posicionamento consolidado no mercado de eventos infantis no DF"
    ],
    stack: ["React 19", "TypeScript", "Tailwind CSS", "GSAP", "WhatsApp API"],
    year: "2025"
  },
  {
    slug: "maos-de-leide",
    title: "MÃOS DE LEIDE",
    client: "Clínica Mãos de Leide",
    category: "Site Institucional",
    tag: "SAÚDE & BEM-ESTAR // CONVERSÃO",
    desc: "Site de uma clínica de massagem e bem-estar. Explica cada tratamento com calma e leva ao agendamento pelo WhatsApp.",
    image: "/images/maosdeleide.jpg",
    gallery: [
      "/images/maosdeleide.jpg",
      "/images/showcase-feature-2.webp",
      "/images/maosdeleide.jpg"
    ],
    link: "https://www.maosdeleide.com.br",
    isFeatured: true,
    metrics: "Agendamentos Ágeis · Design Acolhedor",
    problem: "Apresentação dos tratamentos de forma estática e dispersa em redes sociais, sem um canal que explicasse as terapias com autoridade e conduzisse ao agendamento.",
    solution: "Criação de um site refinado com paleta cromática equilibrada, detalhamento de cada especialidade terapêutica e botão de agendamento prioritário.",
    results: [
      "Pacientes chegam ao WhatsApp já sabendo como funciona o tratamento e valores",
      "Aumento constante na ocupação da agenda semanal",
      "Autoridade visual condizente com a excelência do atendimento"
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "WhatsApp Integration"],
    year: "2025"
  },
  {
    slug: "amorim-ergonomia",
    title: "AMORIM ERGONOMIA",
    client: "Amorim Ergonomia & Saúde Ocupacional",
    category: "Site Institucional",
    tag: "CONSULTORIA CORPORATIVA // B2B",
    desc: "Site de uma consultoria de ergonomia e saúde ocupacional. Sério, claro e feito para passar confiança a empresas.",
    image: "/images/amorimergonomia.webp",
    gallery: [
      "/images/amorimergonomia.webp",
      "/images/amorimergonomia.jpg",
      "/images/showcase-feature-2.webp"
    ],
    link: "https://www.amorimergonomia.com.br",
    isFeatured: true,
    metrics: "Estrutura Rápida · Autoridade B2B",
    problem: "Necessidade de transmitir credibilidade técnica para fechar contratos de laudos ergonômicos com empresas e instituições.",
    solution: "Portal institucional desenvolvido em React e TypeScript próprio, sem CMS lento, com organização semântica dos serviços técnicos e formulário corporativo.",
    results: [
      "Estrutura leve e navegação rápida em computadores e celulares",
      "Credibilidade técnica reforçada para propostas de grande porte",
      "Indexação nos mecanismos de busca com marcação Schema.org"
    ],
    stack: ["React 19", "TypeScript", "Tailwind CSS", "SEO Semântico", "Schema.org"],
    year: "2025"
  },
  {
    slug: "brito-oliveira",
    title: "BRITO OLIVEIRA ASSESSORIA",
    client: "Brito Oliveira Consultoria Contábil",
    category: "Site Institucional",
    tag: "ASSESSORIA CORPORATIVA // B2B",
    desc: "Site de uma assessoria contábil. Visual sóbrio, informação clara e contato direto com os sócios.",
    image: "/images/britooliveira.jpg",
    gallery: [
      "/images/britooliveira.jpg",
      "/images/amorimergonomia.webp",
      "/images/britooliveira.jpg"
    ],
    link: "https://www.britooliveira.com.br/",
    isFeatured: true,
    metrics: "Credibilidade B2B · Captação de CNPJs",
    problem: "A consultoria precisava de uma presença web sóbria e moderna para atender empresas em expansão e investidores institucionais.",
    solution: "Estruturação institucional limpa, com foco em clareza tributária, velocidade de resposta e canais de contato direto com sócios.",
    results: [
      "Percepção imediata de solidez e governança corporativa",
      "Navegação ágil sem plugins pesados ou lentidão de carregamento",
      "Responsividade fluida para acesso em celulares e computadores"
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    year: "2025"
  },
  {
    slug: "marmitaria-ventura",
    title: "MARMITARIA VENTURA",
    client: "Marmitaria Ventura Gastronomia",
    category: "Site Institucional",
    tag: "DELIVERY & ALIMENTAÇÃO // DIRETO",
    desc: "Site e cardápio online de uma marmitaria, com pedido direto pelo WhatsApp da cozinha, sem depender de aplicativo.",
    image: "/images/marmitariaventura.webp",
    gallery: [
      "/images/marmitariaventura.webp",
      "/images/pcgastronomia.webp",
      "/images/marmitariaventura.webp"
    ],
    link: "https://www.marmitariaventura.com.br",
    isFeatured: true,
    metrics: "Pedidos Diretos · Canal Sem Comissões",
    problem: "Taxas elevadas de aplicativos de terceiros consumiam grande fatia das margens de lucro dos pratos diários.",
    solution: "Desenvolvimento de cardápio digital próprio, rápido no celular, com seleção de itens e envio automático formatado para o WhatsApp da cozinha.",
    results: [
      "Migração dos clientes fiéis para o canal direto do restaurante",
      "Economia expressiva em comissões de marketplaces",
      "Facilidade para o cliente pedir no dia a dia"
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "WhatsApp Ordering"],
    year: "2025"
  },
  {
    slug: "pc-gastronomia",
    title: "PC GASTRONOMIA",
    client: "Chef PC & Buffet de Eventos",
    category: "Site Institucional",
    tag: "ALTA CULINÁRIA // CARDÁPIO DIGITAL",
    desc: "Site de um chef e buffet de eventos. Cardápio com fotos e pedido de orçamento direto com o chef, sem PDF pesado.",
    image: "/images/pcgastronomia.webp",
    gallery: [
      "/images/pcgastronomia.webp",
      "/images/showcase-feature-3.webp",
      "/images/pcgastronomia.webp"
    ],
    link: "https://www.pcgastronomia.com.br",
    isFeatured: true,
    metrics: "Cardápio Dinâmico · Contato Direto",
    problem: "Cardápios em arquivos PDF pesados que demoravam para abrir nos celulares de clientes interessados em eventos sofisticados.",
    solution: "Plataforma visual com fotos dos pratos, filtros intuitivos de menu e botão de orçamento direto com o chef.",
    results: [
      "Substituição de PDFs pesados por navegação rápida",
      "Apresentação condizente com a gastronomia do chef",
      "Mais facilidade na solicitação de orçamentos para eventos"
    ],
    stack: ["React", "TypeScript", "Design Editorial", "WhatsApp API", "Vite"],
    year: "2025"
  },
  {
    slug: "sgb-gestao-brigada",
    title: "SGB (Sistema de Gestão da Brigada)",
    client: "Brigada de Emergência & Segurança",
    category: "Sistema Web",
    tag: "GESTÃO OPERACIONAL // ESCALAS & RONDAS",
    desc: "Sistema web para brigadas de emergência: escalas, rondas, inspeção de extintores, ocorrências e relatórios em PDF.",
    image: "/images/sgb.webp",
    gallery: [
      "/images/sgb.webp",
      "/images/logistico.jpg",
      "/images/showcase-feature-2.webp"
    ],
    link: "internal",
    isFeatured: true,
    metrics: "Operação Digital · Relatórios em PDF",
    problem: "Processos manuais de controle de rondas, inspeção de extintores e escalas de plantonistas em planilhas e formulários de papel.",
    solution: "Sistema web em nuvem com controle de permissões por perfil, registro rápido de ocorrências e geração automatizada de relatórios em PDF.",
    results: [
      "Fim do uso de papel na rotina diária dos brigadistas",
      "Geração prática de relatórios para vistorias e auditorias",
      "Acompanhamento organizado da equipe em campo"
    ],
    stack: ["React 19", "TypeScript", "Controle RBAC", "Exportação PDF", "Cloud Storage"],
    year: "2025"
  },
  {
    slug: "logistico-controle-estoque",
    title: "LOGÍSTICO",
    client: "Operação Logística & Distribuição",
    category: "Sistema Web",
    tag: "GESTÃO DE ESTOQUE // EM NUVEM",
    desc: "Sistema web de controle de estoque: entradas, saídas e níveis mínimos em um só lugar.",
    image: "/images/logistico.jpg",
    gallery: [
      "/images/logistico.jpg",
      "/images/sgb.webp",
      "/images/showcase-feature-1.webp"
    ],
    link: "internal",
    isFeatured: true,
    metrics: "Controle de Estoque · Rastreamento de Itens",
    problem: "Divergências constantes entre estoque físico e planilhas descentralizadas, gerando atrasos na expedição e compras incorretas.",
    solution: "Aplicação web centralizada em nuvem com movimentações rastreadas por operador, leitura de código de barras e níveis mínimos automatizados.",
    results: [
      "Controle confiável de entradas, saídas e saldos",
      "Economia de tempo na checagem diária dos itens",
      "Visualização clara para operadores e supervisores"
    ],
    stack: ["React", "TypeScript", "Cloud Database", "Dashboards em Tempo Real"],
    year: "2025"
  }
];

export interface Project {
  title: string;
  category: string;
  desc: string;
  image: string;
  link: string;
  isFeatured?: boolean;
}

export const projects: Project[] = projectsData.map(p => ({
  title: p.title,
  category: p.category,
  desc: p.desc,
  image: p.image,
  link: p.link,
  isFeatured: p.isFeatured
}));
