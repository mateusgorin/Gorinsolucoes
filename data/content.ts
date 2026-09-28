export interface ServiceItemData {
  number: string;
  category: string;
  title: string;
  desc: string;
  deliverables: string[];
  metrics: string;
}

export interface MethodologyStepData {
  step: string;
  tag: string;
  title: string;
  desc: string;
  time: string;
}

export interface StatisticData {
  value: string;
  label: string;
  desc: string;
}

export interface PillarData {
  title: string;
  desc: string;
}

export const siteContent = {
  brand: {
    name: "Gorin Soluções",
    shortName: "GORIN",
    locationShort: "BSB · DF",
    locationFull: "Brasília-DF — Atendimento Nacional",
    operationalBase: "Brasília, DF · Brasil",
    whatsappNumberRaw: "5561981290099",
    whatsappFormatted: "(61) 98129-0099",
    whatsappLabel: "WhatsApp (61) 98129-0099",
    instagramHandle: "@mateusgorin",
    instagramUrl: "https://www.instagram.com/mateusgorin",
    email: "contato@gorinsolucoes.com.br",
    whatsappDefaultMessage: "Olá! Gostaria de solicitar um orçamento grátis com a Gorin Soluções para o meu projeto.",
    get whatsappDefaultUrl() {
      return `https://wa.me/${this.whatsappNumberRaw}?text=${encodeURIComponent(this.whatsappDefaultMessage)}`;
    }
  },

  hero: {
    headlineLines: [
      "Especialistas em",
      "soluções digitais e",
      "criação de sites de",
      "alta conversão"
    ],
    headlineFull: "Especialistas em soluções digitais e criação de sites de alta conversão.",
    subtext: ">>> Desenvolvimento Web de Alta Performance. Ajudamos empresas e profissionais a fortalecer sua presença digital com sites rápidos, modernos e otimizados para o Google.",
    ctaPrimary: "Fale com a gente",
    ctaSecondary: "Ver projetos recentes",
    responseCommitment: "Resposta em até 30 minutos via WhatsApp",
    operationalStatus: "Status Operacional // Brasília",
    pillars: [
      {
        tag: "ENTREGA",
        value: "5 a 10 dias",
        desc: "Deploy ágil com pipeline acelerado por IA"
      },
      {
        tag: "PERFORMANCE",
        value: "Score 99+",
        desc: "Carregamento sub-segundo no Google"
      },
      {
        tag: "CÓDIGO PURO",
        value: "Zero Bloat",
        desc: "React 19, TypeScript e arquitetura customizada"
      }
    ]
  },

  founder: {
    name: "Mateus Gorin",
    role: "Fundador & Desenvolvedor Web",
    image: "/images/mateus-gorin.webp",
    alt: "Mateus Gorin — Fundador & Desenvolvedor Web",
    location: "Brasília, Distrito Federal",
    credentials: [
      "Engenharia Web & UX sob medida",
      "Stack moderna: React & TypeScript",
      "Atendimento direto e personalizado"
    ]
  },

  about: {
    tag: "Sobre a Gorin Soluções",
    headline: "Especialistas em soluções digitais e criação de sites de alta conversão.",
    subtext: "Unimos design refinado, engenharia moderna e estratégias de conversão para transformar negócios no ambiente digital com velocidade, autoridade e impacto mensurável.",
    institutionalLead: "Gorin Soluções é uma agência de tecnologia especialista em Web Design e UX, focada em criar experiências digitais que geram resultados.",
    institutionalBody: "Sediados em Brasília, desenvolvemos sites, landing pages e sistemas web com foco em design moderno, usabilidade e alta conversão. Utilizamos tecnologias de ponta (React, TypeScript) para garantir que sua empresa se destaque da concorrência com velocidade e segurança.",
    institutionalFull: "Gorin Soluções é uma agência de tecnologia especialista em Web Design e UX, focada em criar experiências digitais que geram resultados. Sediados em Brasília, desenvolvemos sites, landing pages e sistemas web com foco em design moderno, usabilidade e alta conversão. Utilizamos tecnologias de ponta (React, TypeScript) para garantir que sua empresa se destaque da concorrência com velocidade e segurança.",
    
    pillars: [
      {
        title: "Web Design & UX",
        desc: "Interfaces que atraem e conduzem o visitante diretamente ao fechamento."
      },
      {
        title: "Stack Moderna",
        desc: "React e TypeScript para páginas instantâneas, leves e blindadas."
      },
      {
        title: "Alta Conversão",
        desc: "Canais diretos para WhatsApp e captação de clientes sem atrito."
      }
    ],

    statistics: [
      {
        value: "10+",
        label: "Projetos entregues",
        desc: "Sites institucionais, e-commerces e sistemas web de alta performance em produção."
      },
      {
        value: "100%",
        label: "Satisfação garantida",
        desc: "Rigor técnico, atenção meticulosa a cada detalhe e relacionamento direto com o cliente."
      },
      {
        value: "BSB-DF",
        label: "Base operacional",
        desc: "Sediados em Brasília, atendendo empresas exigentes em todo o território nacional."
      }
    ],

    cta: {
      tag: "// Pronto para Começar?",
      title: "Pronto para evoluir a presença digital do seu negócio?",
      desc: "Fale diretamente com Mateus Gorin. Avaliamos seu cenário atual e entregamos uma proposta sob medida com prazo ágil e foco total em conversão.",
      buttonPrimary: "Conversar no WhatsApp",
      buttonSecondary: "Ver Portfólio"
    }
  },

  services: {
    tag: "02 // Serviços Especializados",
    headerTitle: "Serviços",
    homeTitle: "O que criamos para marcas que lideram.",
    subtext: "Desenvolvemos sites de alta conversão, sistemas web e identidades digitais que combinam design sofisticado com resultados mensuráveis.",
    
    items: [
      {
        number: "01",
        category: "PERFORMANCE // CARREGAMENTO SUB-SEGUNDO",
        title: "VELOCIDADE QUE CONVERTE",
        desc: "Um site lento perde clientes antes mesmo da primeira impressão. Desenvolvemos páginas ultra velozes que carregam instantaneamente, retêm visitantes e alcançam as melhores posições nas buscas do Google.",
        deliverables: [
          "Carregamento médio entre 0.6s e 0.9s no celular e desktop",
          "Otimização extrema de imagens em formato WebP de última geração",
          "Eliminação de códigos desnecessários e plugins pesados",
          "Garantia de pontuação 99+ nos Core Web Vitals do Google"
        ],
        metrics: "Tempo de carregamento: 0.7s · Score Lighthouse 99+"
      },
      {
        number: "02",
        category: "UX/UI // DESIGN SISTÊMICO & EDITORIAL",
        title: "DESIGN QUE GUIA O CLIENTE",
        desc: "Cada botão, espaçamento e tipografia tem um propósito: conduzir o visitante até a ação de compra ou contato. Unimos estética refinada internacional a fluxos de navegação testados para máxima conversão.",
        deliverables: [
          "Identidade visual autoral com tipografia 'General Sans'",
          "Hierarquia visual sem atritos cognitivos ou poluição gráfica",
          "Arquitetura de informação desenhada para decisão rápida",
          "Responsividade perfeita e fluida em smartphones e monitores ultra-wide"
        ],
        metrics: "Design 100% autoral · Zero templates genéricos"
      },
      {
        number: "03",
        category: "INTELIGÊNCIA ARTIFICIAL // ATENDIMENTO 24/7",
        title: "SEU SITE TRABALHA POR VOCÊ",
        desc: "Integramos inteligência artificial para atendimento automatizado, qualificação inteligente de leads e respostas instantâneas 24 horas por dia, 7 dias por semana.",
        deliverables: [
          "Triagem e respostas inteligentes conectadas aos seus canais",
          "Captura e qualificação de clientes enquanto sua equipe descansa",
          "Encaminhamento de propostas personalizadas automaticamente",
          "Sincronização em tempo real com planilhas ou sistemas de CRM"
        ],
        metrics: "Atendimento contínuo 24/7 · Resposta em segundos"
      },
      {
        number: "04",
        category: "SEO // INDEXAÇÃO SEMÂNTICA",
        title: "VISIBILIDADE NO GOOGLE",
        desc: "Arquitetura otimizada para os mecanismos de busca (SEO técnico), marcação de dados Schema.org e integração completa com Google Meu Negócio.",
        deliverables: [
          "Estrutura de dados Schema.org para exibição rica nos resultados",
          "Otimização semântica de títulos, meta tags e sitemap XML",
          "Integração e otimização para presença local no Google Meu Negócio",
          "Cartões OpenGraph perfeitos para compartilhamento no WhatsApp e redes"
        ],
        metrics: "Indexação técnica garantida · Visibilidade orgânica"
      },
      {
        number: "05",
        category: "ENGENHARIA // STACK MODERNA",
        title: "TECNOLOGIA DE PONTA & SEGURANÇA",
        desc: "Construído sobre stack moderna (React, TypeScript, Vite e Tailwind CSS). Rápido, seguro, escalável, com certificado SSL.",
        deliverables: [
          "Desenvolvido em React 19 e TypeScript sob medida",
          "Hospedagem em infraestrutura edge global de altíssima velocidade",
          "Certificado de segurança SSL HTTPS automático e inquebrável",
          "Código limpo, seguro contra vulnerabilidades e pronto para escalar"
        ],
        metrics: "Stack global de engenharia · Zero dependência de plugins"
      },
      {
        number: "06",
        category: "CONVERSÃO // WHATSAPP & CRM",
        title: "CONTATO DIRETO COM CLIENTES",
        desc: "Integração direta com WhatsApp, formulários interativos com validação instantânea e conexões com redes sociais.",
        deliverables: [
          "Botão flutuante inteligente de WhatsApp com mensagem pré-formatada",
          "Formulários dinâmicos com validação instantânea de dados em tempo real",
          "Rastreamento de conversões para mensurar retorno de campanhas",
          "Conexão direta com perfis oficiais de Instagram e redes corporativas"
        ],
        metrics: "Canal direto de fechamento · Zero perda de contatos"
      }
    ],

    methodologySteps: [
      {
        step: "01",
        tag: "DIAGNÓSTICO & BRIEFING",
        title: "Alinhamento Estratégico",
        desc: "Mapeamento rigoroso do seu modelo de negócio, persona do cliente ideal e definição clara das metas de conversão.",
        time: "Dia 1"
      },
      {
        step: "02",
        tag: "PROTOTIPAGEM COM IA",
        title: "Design System & Direção Visual",
        desc: "Geração acelerada de caminhos visuais com inteligência artificial e consolidação em uma interface autoral de alta precisão.",
        time: "Dias 2 a 3"
      },
      {
        step: "03",
        tag: "VALIDAÇÃO & CÓDIGO",
        title: "Engenharia Front-end Pura",
        desc: "Desenvolvimento semântico em React e TypeScript, eliminando qualquer CMS inchado e garantindo carregamento sub-segundo.",
        time: "Dias 4 a 7"
      },
      {
        step: "04",
        tag: "DEPLOY & ATIVAÇÃO",
        title: "Lançamento & Indexação no Google",
        desc: "Testes de performance Lighthouse 99+, configuração de DNS e ativação imediata dos canais de conversão.",
        time: "Dias 8 a 10"
      }
    ],

    cta: {
      title: "Pronto para evoluir sua presença digital?",
      desc: "Criamos soluções digitais completas, unindo design, tecnologia e performance para estruturar negócios no ambiente digital com segurança e eficiência.",
      buttonText: "Solicitar orçamento grátis"
    }
  },

  projectsHeader: {
    tag: "03 // Obras Recentes",
    title: "Projetos Entregues",
    subtext: "Projetos entregues com velocidade, precisão visual e foco total em geração de autoridade e faturamento.",
    counter: "10+ projetos entregues",
    bannerTitle: "Ver todos os 10+ projetos do portfólio",
    bannerDesc: "Apresentamos estudos de caso completos com problema, solução e resultados de cada cliente.",
    bannerCta: "Ver Portfólio Completo"
  },

  contact: {
    tag: "04 // Contato Direto",
    headerTitle: "Vamos conversar.",
    homeTitle: "Vamos conversar sobre o seu próximo projeto.",
    subtext: "Fale diretamente com Mateus Gorin. Atendimento sem intermediários e retorno em até 24 horas.",
    pageSubtext: "Tem uma demanda de site institucional, landing page ou sistema web com inteligência artificial? Fale diretamente com quem programa. Sem intermediários, com retorno técnico e estimativa clara em até 24 horas.",
    directCtaTitle: "Solicitar orçamento grátis agora",
    directBoxTitle: "Canais de Contato",
    directBoxDesc: "Prefere uma conversa imediata? Acione nossos canais prioritários.",
    whatsappCtaText: "Solicitar orçamento grátis agora",
    whatsappChannelLabel: "WhatsApp Comercial",
    emailChannelLabel: "E-mail Corporativo",
    instagramChannelLabel: "Redes Sociais",
    locationChannelLabel: "Base de Operações",
    formTitle: "Envie sua mensagem",
    formDesc: "Preencha os campos para receber uma análise técnica preliminar.",
    formatWhatsAppMessage: (name: string, phone: string, message: string, email?: string) => {
      let text = `*SOLICITAÇÃO DE ORÇAMENTO // GORIN SOLUÇÕES*\n\n` +
        `*Nome:* ${name || 'Não informado'}\n` +
        (email ? `*E-mail:* ${email}\n` : '') +
        `*WhatsApp:* ${phone || 'Não informado'}\n` +
        `*Mensagem:* ${message || 'Quero solicitar um orçamento grátis para meu site/sistema.'}\n\n` +
        `_Enviado pelo site oficial Gorin Soluções_`;
      return text;
    }
  }
};
