export interface Project {
  title: string;
  category: string;
  desc: string;
  image: string;
  link: string;
  isFeatured?: boolean;
}

export const projects: Project[] = [
  {
    title: "BRINCA MÓVEL",
    category: "SITE INSTITUCIONAL",
    desc: "Plataforma completa de apresentação de serviços infantis com carregamento instantâneo e layout interativo.",
    link: "https://www.brincamoveloficial.com.br",
    image: "/images/brincamovel.jpg",
    isFeatured: true
  },
  {
    title: "MÃOS DE LEIDE",
    category: "SITE INSTITUCIONAL",
    desc: "Presença digital sofisticada e otimizada para agendamentos e conversão direta no WhatsApp.",
    link: "https://www.maosdeleide.com.br",
    image: "/images/maosdeleide.jpg"
  },
  {
    title: "AMORIM ERGONOMIA",
    category: "SITE INSTITUCIONAL",
    desc: "Portal corporativo robusto para consultoria técnica com arquitetura de alta performance.",
    link: "https://www.amorimergonomia.com.br",
    image: "/images/amorimergonomia.webp"
  },
  {
    title: "BRITO OLIVEIRA ASSESSORIA",
    category: "SITE INSTITUCIONAL",
    desc: "Website institucional e posicionamento digital para assessoria e consultoria especializada.",
    link: "https://www.britooliveira.com.br/",
    image: "/images/britooliveira.jpg"
  },
  {
    title: "MARMITARIA VENTURA",
    category: "SITE INSTITUCIONAL",
    desc: "Site institucional e cardápio online com canais diretos para pedidos via WhatsApp e redes sociais.",
    link: "https://www.marmitariaventura.com.br",
    image: "/images/marmitariaventura.webp"
  },
  {
    title: "PC GASTRONOMIA",
    category: "SITE INSTITUCIONAL",
    desc: "Presença online moderna para gastronomia com apresentação de cardápio e atendimento direto.",
    link: "https://www.pcgastronomia.com.br",
    image: "/images/pcgastronomia.webp"
  },
  {
    title: "MAJESTOSA ARTE",
    category: "E-COMMERCE",
    desc: "Plataforma de e-commerce e catálogo digital para apresentação de produtos artísticos exclusivos.",
    link: "#",
    image: "/images/majestosa.jpg"
  },
  {
    title: "SGB - SISTEMA DE GESTÃO DA BRIGADA",
    category: "SISTEMA WEB",
    desc: "Sistema web customizado para controle operacional, gestão de equipes e relatórios de brigada.",
    link: "internal",
    image: "/images/sgb.webp"
  },
  {
    title: "LOGÍSTICO - CONTROLE DE ESTOQUE",
    category: "SISTEMA WEB",
    desc: "Sistema web integrado para gerenciamento logístico, rastreamento e controle de estoque em tempo real.",
    link: "internal",
    image: "/images/logistico.jpg"
  }
];
