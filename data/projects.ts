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
    desc: "Plataforma completa de apresentação de serviços infantis com carregamento instantâneo e layout interativo.",
    image: "/images/brincamovel.jpg",
    gallery: [
      "/images/brincamovel.jpg",
      "/images/showcase-feature-3.webp",
      "/images/brincamovel.jpg"
    ],
    link: "https://www.brincamoveloficial.com.br",
    isFeatured: true,
    metrics: "0.7s Carregamento · +140% em Contatos",
    problem: "A empresa precisava de um site lúdico, porém com carregamento ultra-rápido no celular dos pais durante a busca por eventos, sem perder a interatividade visual.",
    solution: "Desenvolvimento de plataforma interativa em React 19 com otimização radical de imagens, navegação dinâmica dos pacotes e conexão direta com WhatsApp.",
    results: [
      "Carregamento sub-segundo mesmo com dezenas de fotos em alta resolução",
      "Crescimento de mais de 140% nos pedidos de orçamento via WhatsApp",
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
    desc: "Presença digital sofisticada e otimizada para agendamentos e conversão direta no WhatsApp.",
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
    desc: "Portal corporativo robusto para consultoria técnica com arquitetura de alta performance.",
    image: "/images/amorimergonomia.webp",
    gallery: [
      "/images/amorimergonomia.webp",
      "/images/amorimergonomia.jpg",
      "/images/showcase-feature-2.webp"
    ],
    link: "https://www.amorimergonomia.com.br",
    isFeatured: true,
    metrics: "Score 99+ Lighthouse · Autoridade B2B",
    problem: "Necessidade de transmitir credibilidade técnica e médica para fechar grandes contratos de laudos ergonômicos com multinacionais e órgãos governamentais.",
    solution: "Portal institucional desenvolvido em React e TypeScript puro, sem CMS lento, com organização semântica dos serviços técnicos e formulário corporativo.",
    results: [
      "Pontuação máxima de 99/100 nos Core Web Vitals do Google",
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
    desc: "Website institucional e posicionamento digital para assessoria e consultoria especializada.",
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
      "Responsividade perfeita para acesso em celulares e computadores"
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
    desc: "Site institucional e cardápio online com canais diretos para pedidos via WhatsApp e redes sociais.",
    image: "/images/marmitariaventura.webp",
    gallery: [
      "/images/marmitariaventura.webp",
      "/images/pcgastronomia.webp",
      "/images/marmitariaventura.webp"
    ],
    link: "https://www.marmitariaventura.com.br",
    isFeatured: true,
    metrics: "+90% em Pedidos Diretos sem Taxas",
    problem: "Taxas elevadas de aplicativos de terceiros consumiam grande fatia das margens de lucro dos pratos diários.",
    solution: "Desenvolvimento de cardápio digital próprio, ultrarrápido no 4G/5G, com seleção de itens e envio automático formatado para o WhatsApp da cozinha.",
    results: [
      "Migração em massa dos clientes para o canal direto do restaurante",
      "Economia substancial em comissões de marketplaces",
      "Aumento da taxa de recompra semanal"
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
    desc: "Presença online moderna para gastronomia com apresentação de cardápio e atendimento direto.",
    image: "/images/pcgastronomia.webp",
    gallery: [
      "/images/pcgastronomia.webp",
      "/images/showcase-feature-3.webp",
      "/images/pcgastronomia.webp"
    ],
    link: "https://www.pcgastronomia.com.br",
    isFeatured: true,
    metrics: "Cardápio Dinâmico · Fechamento Instantâneo",
    problem: "Cardápios em arquivos PDF pesados que demoravam para abrir nos celulares de clientes interessados em eventos sofisticados.",
    solution: "Plataforma visual com imagens em alta definição dos pratos, filtros intuitivos de menu e botão de orçamento direto com o chef.",
    results: [
      "Fim do envio de PDFs pesados por mensagem",
      "Apresentação premium condizente com a gastronomia autoral do chef",
      "Aumento na conversão de orçamentos para casamentos e eventos corporativos"
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
    desc: "Sistema web customizado para controle operacional, gestão de equipes e relatórios de brigada.",
    image: "/images/sgb.webp",
    gallery: [
      "/images/sgb.webp",
      "/images/logistico.jpg",
      "/images/showcase-feature-2.webp"
    ],
    link: "internal",
    isFeatured: true,
    metrics: "100% Digital · Relatórios em Segundos",
    problem: "Processos manuais de controle de rondas, inspeção de extintores e escalas de plantonistas em planilhas e formulários de papel.",
    solution: "Sistema web em nuvem com controle de permissões por perfil, registro instantâneo de ocorrências e geração automatizada de relatórios em PDF.",
    results: [
      "Eliminação completa do papel na rotina dos brigadistas",
      "Geração de relatórios de auditoria e conformidade em segundos",
      "Acompanhamento em tempo real da equipe em campo"
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
    desc: "Sistema web integrado para gerenciamento logístico, rastreamento e controle de estoque em tempo real.",
    image: "/images/logistico.jpg",
    gallery: [
      "/images/logistico.jpg",
      "/images/sgb.webp",
      "/images/showcase-feature-1.webp"
    ],
    link: "internal",
    isFeatured: true,
    metrics: "Precisão 99.9% · Controle de Entradas e Saídas",
    problem: "Divergências constantes entre estoque físico e planilhas descentralizadas, gerando atrasos na expedição e compras incorretas.",
    solution: "Aplicação web centralizada em nuvem com movimentações rastreadas por operador, leitura de código de barras e níveis mínimos automatizados.",
    results: [
      "Precisão de inventário superior a 99.9%",
      "Redução drástica no tempo gasto com contagens manuais",
      "Visibilidade em tempo real para múltiplos galpões"
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
