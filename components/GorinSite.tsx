import React, { useState, useEffect, useRef } from 'react';
import './gorin-styles.css';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FluidCursor } from './FluidCursor';
import { ElasticDivider } from './ElasticDivider';
import { projects, Project } from '../data/projects';
import { TextRevealHeading } from './TextRevealHeading';
import { MeshPanel } from './MeshPanel';
import { MeshStripes } from './MeshStripes';
import { MeshRings } from './MeshRings';
import { MeshDiagonal } from './MeshDiagonal';

import { StatCounter } from './StatCounter';
import { ImageReveal } from './ImageReveal';
import { Instagram, MessageCircle, ArrowUpRight, X, Clock, MapPin, CheckCircle, ExternalLink, Award, ThumbsUp, Code2, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface GorinSiteProps {
  onOpenBriefing?: () => void;
  onOpenContact?: () => void;
}

// Cuberto Magnetic CTA Button with spring physics, liquid ripple fill, and text roll-over
const MagneticCta: React.FC<{
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children: string;
  variant?: 'fill' | 'outline' | 'inverse';
  className?: string;
  target?: string;
  rel?: string;
  dataCursorIcon?: string;
}> = ({ href, onClick, children, variant = 'fill', className = '', target, rel, dataCursorIcon }) => {
  const ref = useRef<any>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20 });
  const springY = useSpring(y, { stiffness: 260, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.24);
    y.set(relY * 0.24);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variantClass = variant === 'fill' ? '-fill' : variant === 'inverse' ? '-fill -inverse' : '-outline';

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        data-cursor-icon={dataCursorIcon}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        className={`CtaButton ${variantClass} ${className}`}
      >
        <span className="ripple">
          <span></span>
        </span>
        <span className="title">
          <span data-text={children}>{children}</span>
        </span>
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      data-cursor-icon={dataCursorIcon}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`CtaButton ${variantClass} ${className}`}
    >
      <span className="ripple">
        <span></span>
      </span>
      <span className="title">
        <span data-text={children}>{children}</span>
      </span>
    </motion.button>
  );
};

interface ServiceItemData {
  number: string;
  category: string;
  title: string;
  tagline: string;
  desc: string;
  deliverables?: string[];
  image: string;
}

const renderServiceMesh = (idx: number) => {
  switch (idx) {
    case 0:
      return <MeshPanel intensity={0.65} className="w-full h-full" />;
    case 1:
      return <MeshStripes intensity={1} className="w-full h-full" />;
    case 2:
      return <MeshRings radii={[60, 120, 180, 240]} intensity={1} className="w-full h-full" />;
    case 3:
      return <MeshDiagonal intensity={1} className="w-full h-full" />;
    case 4:
      return <MeshRings radii={[40, 90, 140]} intensity={1} className="w-full h-full" />;
    case 5:
    default:
      return <MeshStripes intensity={1} className="w-full h-full" />;
  }
};

const ServiceCardItem: React.FC<{
  service: ServiceItemData;
  index: number;
  whatsappUrl: string;
}> = ({ service, index, whatsappUrl }) => {
  return (
    <article
      className="service-card"
      data-open={index === 0 ? "true" : "false"}
      data-index={index}
    >
      {/* Cabeçalho com min-height 76px (título e número na mesma linha) */}
      <div className="service-card-header">
        <div className="flex flex-col justify-center">
          <span className="service-category">
            {service.category}
          </span>
          <h3 className="service-title">
            {service.title}
          </h3>
        </div>

        <span className="service-number">
          {service.number}
        </span>
      </div>

      {/* Wrapper com display grid e grid-template-rows 0fr -> 1fr */}
      <div className="service-card-collapse">
        {/* Único filho direto com min-height 0 e overflow hidden */}
        <div className="service-card-collapse-inner">
          {/* Componente de malha do card (opacity 0 fechado, 1 aberto) */}
          <div className="service-mesh">
            {renderServiceMesh(index)}
          </div>

          {/* Conteúdo interno: descrição, checkmarks e Explorar */}
          <div className="service-card-content">
            <p className="service-desc">
              {service.desc}
            </p>

            {service.deliverables && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-white/90">
                    <CheckCircle size={15} className="text-[#00D4FF] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service-explore-link group/btn"
              >
                <span>Explorar</span>
                <span className="explore-circle">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const GorinSite: React.FC<GorinSiteProps> = ({ onOpenBriefing: _onOpenBriefing, onOpenContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const videoShowreelRef = useRef<HTMLDivElement>(null);
  const videoMediaRef = useRef<HTMLVideoElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navLinksRef = useRef<HTMLElement>(null);
  const headerActionRef = useRef<HTMLDivElement>(null);

  const phoneNumber = "5561981290099";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Olá, Mateus! Gostaria de conversar sobre um projeto digital com a Gorin Soluções.")}`;

  // Exact entrance animation for Navbar matching original B2sJen script:
  // logo scale: 0 -> 1, nav/action y: 20 -> 0, opacity: 0 -> 1, duration: 0.8, stagger: 0.1
  useEffect(() => {
    const logo = logoRef.current;
    const nav = navLinksRef.current ? Array.from(navLinksRef.current.children) : [];
    const action = headerActionRef.current;

    const tl = gsap.timeline({ delay: 0.15 });

    if (logo) {
      tl.fromTo(
        logo,
        { scale: 0, opacity: 0, transformOrigin: 'center center' },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' },
        0
      );
    }

    if (nav.length || action) {
      const elementsToAnimate = [...nav, action].filter(Boolean);
      gsap.set(elementsToAnimate, { willChange: 'transform, opacity' });
      tl.fromTo(
        elementsToAnimate,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out', clearProps: 'all' },
        0.1
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  // Exact Video Entrance & Parallax matching original XzcFP script:
  // tlEnter: clipPath inset(5% 10% round 2rem), scale: 0.9 -> inset(0% 0% round 2rem), scale: 1, ease: 'expo.out', duration: 2.5
  // tlParallax: media y from -10% to 10%, scrub: true, start: top bottom, end: bottom top
  useEffect(() => {
    const container = videoShowreelRef.current;
    const video = videoMediaRef.current;
    if (!container || !video) return;

    // 1. Entrance animation (clip-path unclip & scale expand with expo.out)
    gsap.set(container, { willChange: 'clip-path, transform' });
    const enterTween = gsap.fromTo(
      container,
      {
        clipPath: 'inset(6% 12% round 2rem)',
        scale: 0.88,
        opacity: 0,
      },
      {
        clipPath: 'inset(0% 0% round 2rem)',
        scale: 1,
        opacity: 1,
        ease: 'expo.out',
        duration: 2.5,
        delay: 0.2,
      }
    );

    // 2. Parallax scrub (video y -10% -> 10% inside overflow container)
    gsap.set(video, { scale: 1.12 });
    const parallaxTrigger = ScrollTrigger.create({
      trigger: container,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      animation: gsap.fromTo(video, { y: '-10%' }, { y: '10%', ease: 'none' }),
    });

    return () => {
      enterTween.kill();
      parallaxTrigger.kill();
      gsap.killTweensOf(video);
      gsap.killTweensOf(container);
    };
  }, []);

  // Scroll-driven accordion: cards open and close dynamically as user scrolls through each one
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('article.service-card'));
    if (!cards.length) return;

    let ticking = false;

    const updateAccordion = () => {
      ticking = false;
      const vh = window.innerHeight;
      const openThreshold = vh * 0.65; // Card opens when its top crosses into lower 35% of screen

      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();

        if (idx === 0) {
          // Card 01 starts open by default. It only closes if the user scrolls so far past or above
          // Keep open while user is exploring the services section
          const isAboveSection = rect.bottom < -100;
          card.setAttribute('data-open', isAboveSection ? 'false' : 'true');
        } else {
          // Cards 02..05 open when their own top edge reaches openThreshold
          // They automatically close when scrolled back up above openThreshold
          const shouldBeOpen = rect.top <= openThreshold;
          card.setAttribute('data-open', shouldBeOpen ? 'true' : 'false');
        }
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateAccordion);
      }
    };

    // Mobile click handler
    const clickHandlers: (() => void)[] = [];
    cards.forEach((card, idx) => {
      const handler = () => {
        if (window.innerWidth < 768) {
          const isOpen = card.getAttribute('data-open') === 'true';
          card.setAttribute('data-open', isOpen ? 'false' : 'true');
        }
      };
      clickHandlers[idx] = handler;
      card.addEventListener('click', handler);
    });

    // Run immediately
    updateAccordion();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.on('scroll', onScroll);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (lenis) {
        lenis.off('scroll', onScroll);
      }
      cards.forEach((card, idx) => {
        card.removeEventListener('click', clickHandlers[idx]);
      });
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isPastHero = currentScrollY > 60;
      setIsScrolled(isPastHero);

      // Smart navbar: show if scrolling up or at top; hide if scrolling down past header
      if (currentScrollY <= 60) {
        setIsNavVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 120) {
        // Scrolling down
        if (!isMenuOpen) {
          setIsNavVisible(false);
        }
      }
      lastScrollY = currentScrollY;

      const navCenterY = 45;
      const darkElements = [
        document.querySelector('.WorkSection'),
        document.getElementById('projects'),
        document.getElementById('faq'),
        document.getElementById('contact'),
        document.querySelector('.OutroCard'),
      ].filter(Boolean) as HTMLElement[];

      let overDark = false;
      for (const el of darkElements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= navCenterY && rect.bottom >= navCenterY) {
          overDark = true;
          break;
        }
      }
      setIsDarkBg(overDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Serviços', href: '#services' },
    { label: 'O Estúdio', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href === '#contact') {
      if (onOpenContact) {
        onOpenContact();
        return;
      }
    }

    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navOffset;

      if ((window as any).__lenis) {
        try {
          (window as any).__lenis.scrollTo(targetPosition, { duration: 1.2 });
        } catch {
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    }
  };

  // 6 Structured Editorial Services (Zero code-comment syntax)
  const servicesList = [
    {
      number: "01",
      category: "Performance & SEO",
      title: "Páginas Ultravelozes com Foco em Conversão",
      tagline: "Carregamento em menos de 1 segundo para reter cada visitante",
      desc: "Um segundo de atraso custa até 20% das suas vendas. Desenvolvemos interfaces leves em código puro, sem o peso excessivo de plugins, atingindo notas máximas no Google PageSpeed e posicionando sua marca na liderança das buscas.",
      deliverables: [
        "Pontuação 95+ no Google PageSpeed",
        "Otimização Core Web Vitals",
        "Arquitetura de conversão direta",
        "SEO técnico on-page completo"
      ],
      image: "/images/showcase-feature-1.webp",
    },
    {
      number: "02",
      category: "Estratégia Visual & UX/UI",
      title: "Design de Experiência que Conduz à Venda",
      tagline: "Estética refinada e hierarquia visual projetadas para gerar ação",
      desc: "Cada elemento, contraste e espaçamento tem um objetivo comercial claro. Criamos identidades digitais sofisticadas com tipografia internacional e fluxos intuitivos, garantindo que o visitante encontre respostas imediatas e avance para a contratação.",
      deliverables: [
        "Direção de arte sob medida (sem templates)",
        "Design 100% responsivo para todos os dispositivos",
        "Mapeamento de jornada do usuário",
        "Microinterações e animações elegantes"
      ],
      image: "/images/showcase-feature-2.webp",
    },
    {
      number: "03",
      category: "Inteligência Comercial",
      title: "Automação e Atendimento 24 Horas",
      tagline: "Seu website trabalhando ativamente mesmo fora do expediente",
      desc: "Conectamos sua presença digital a rotinas inteligentes de qualificação de leads, formulários dinâmicos com validação instantânea e canais automatizados, garantindo que nenhum potencial cliente fique sem resposta.",
      deliverables: [
        "Encaminhamento inteligente para WhatsApp",
        "Formulários interativos com feedback instantâneo",
        "Integração com CRMs e ferramentas de vendas",
        "Rastreamento de conversões e eventos"
      ],
      image: "/images/showcase-feature-3.webp",
    },
    {
      number: "04",
      category: "Presença Orgânica",
      title: "Visibilidade e Posicionamento no Google",
      tagline: "Sua empresa encontrada exatamente por quem está pronto para contratar",
      desc: "Estruturamos cada página segundo as melhores práticas mundiais de indexação orgânica, com marcação de dados Schema.org e integração ao ecossistema local do Google, atraindo tráfego qualificado e de alto valor.",
      deliverables: [
        "Marcação estruturada Schema.org",
        "Integração com Google Meu Negócio e Maps",
        "Sitemap dinâmico e robots.txt otimizado",
        "Otimização semântica para buscas por voz e IA"
      ],
      image: "/images/mascot-trimmed.webp",
    },
    {
      number: "05",
      category: "Engenharia de Elite",
      title: "Tecnologia Moderna em React e TypeScript",
      tagline: "A mesma infraestrutura de alta performance das maiores empresas globais",
      desc: "Construído sobre stack moderna (React, TypeScript, Vite e Tailwind CSS). Livre de vulnerabilidades de segurança, plugins desatualizados ou travamentos de plataformas legadas. Seu site é um ativo de valor permanente, seguro e preparado para escalar.",
      deliverables: [
        "Código 100% autoral e documentado",
        "Certificado SSL e criptografia de ponta a ponta",
        "Carregamento sob demanda (lazy loading)",
        "Hospedagem global em CDN de alta disponibilidade"
      ],
      image: "/images/sgb.webp",
    },
    {
      number: "06",
      category: "Canais Comerciais",
      title: "Contato Direto sem Fricção ou Intermediários",
      tagline: "A distância mais curta entre o interesse do cliente e o fechamento",
      desc: "Implementamos pontos estratégicos de contato ao longo de toda a navegação, permitindo que o visitante inicie uma conversa com seu time de vendas em um único toque, aumentando substancialmente a taxa de resposta.",
      deliverables: [
        "Gatilhos de WhatsApp contextuais por serviço",
        "Chamadas para ação visíveis e balanceadas",
        "Integração com Instagram e redes sociais",
        "Painel de métricas e suporte contínuo"
      ],
      image: "/images/pcgastronomia.webp",
    }
  ];

  const testimonials = [
    {
      name: "Laís",
      role: "Proprietária · Brinca Móvel",
      highlight: "Extremamente profissional e estética impecável",
      content: "Mateus Gorin, preciso deixar registrado o quanto fiquei impressionada com o seu trabalho. O site da BrincaMóvel ficou simplesmente incrível: extremamente profissional, completo, cheio de detalhes e com uma estética impecável. Dá pra ver que você não cria sites, você constrói experiências! Indico seu trabalho de olhos fechados.",
    },
    {
      name: "Thiago e Jéssica",
      role: "Proprietários · Brito Oliveira Assessoria",
      highlight: "Atendimento atencioso e site muito rápido",
      content: "Quero agradecer pelo excelente trabalho no desenvolvimento do nosso site. Desde o início, o atendimento foi muito profissional e atencioso, sempre entendendo exatamente o que precisávamos. O site ficou rápido e funcional, sem complicação desnecessária.",
    },
    {
      name: "Leide",
      role: "Proprietária · Mãos de Leide",
      highlight: "Traduziu com perfeição a essência da marca",
      content: "Confiei no trabalho do Mateus e fui surpreendida! O site ficou acolhedor, bem organizado, com informações claras e uma navegação super intuitiva. Ele conseguiu traduzir perfeitamente a essência da massagem: cuidado, bem-estar e leveza. Sou muito grata!",
    },
    {
      name: "Vanessa",
      role: "Proprietária · Amorim Ergonomia",
      highlight: "Obtive bastante resultados e muitos clientes",
      content: "Procurei a Gorin Soluções para criação do site, tinha uma ideia de como ficaria mas ao longo da criação o Mateus foi alinhando junto comigo as ideias. O site ficou perfeito, rápido e visualmente impecável. Após a criação do site obtive bastante resultados e muitos clientes.",
    },
    {
      name: "Larissa",
      role: "Proprietária · Marmitaria Ventura",
      highlight: "Moderno, organizado e muito funcional",
      content: "O site ficou simplesmente perfeito: moderno, organizado e, principalmente, muito funcional. O cliente encontra tudo de forma rápida como WhatsApp, pedidos e localização. O Gorin foi extremamente atencioso, paciente e cuidadoso em cada detalhe.",
    }
  ];

  // FAQ items with detailed, helpful business answers
  const faqs = [
    {
      q: "Qual a diferença entre um site desenvolvido pela Gorin e um feito em WordPress/Wix?",
      a: "Plataformas como WordPress ou Wix utilizam construtores pesados e dezenas de plugins de terceiros que deixam o site lento, vulnerável a invasões e dependente de atualizações que quebram o layout. A Gorin desenvolve código autoral moderno em React e TypeScript — a mesma tecnologia usada pelas maiores empresas do mundo. O resultado é um site que abre instantaneamente (menos de 1 segundo), tem nota máxima no Google e não trava."
    },
    {
      q: "Quanto tempo leva para o projeto ser entregue?",
      a: "Para Landing Pages e Websites Institucionais estratégicos, o prazo médio de entrega varia entre 7 e 20 dias úteis, dependendo da complexidade do projeto e da disponibilização das informações da sua empresa. Trabalhamos com etapas claras: alinhamento estratégico, criação do design exclusivo, desenvolvimento e homologação."
    },
    {
      q: "O site é otimizado para celulares e mecanismos de busca (Google)?",
      a: "Sim, 100%. Mais de 80% do tráfego atual provém de smartphones. Por isso, todos os nossos layouts são desenhados prioritariamente para mobile, com tempos de resposta imediatos e SEO técnico embutido (código semântico, metatags OpenGraph e estruturação de dados) para que sua empresa ganhe relevância orgânica no Google."
    },
    {
      q: "Como funciona a hospedagem e a manutenção após o lançamento?",
      a: "Auxiliamos na configuração do seu domínio próprio (.com.br) e conectamos seu site a uma infraestrutura de hospedagem em nuvem de alta disponibilidade com CDN global e certificado de segurança SSL gratuito. Você recebe um produto robusto que não requer manutenção técnica constante."
    },
    {
      q: "Como iniciamos o projeto e quais são as formas de pagamento?",
      a: "O primeiro passo é uma conversa inicial via WhatsApp ou pelo formulário do site para compreendermos seu modelo de negócio e objetivos. Apresentamos uma proposta detalhada com escopo, prazos e investimento. Facilitamos o pagamento via PIX com parcelamento ou cartão de crédito."
    }
  ];

  const col1Projects = projects.filter((_, idx) => idx % 2 === 0);
  const col2Projects = projects.filter((_, idx) => idx % 2 !== 0);

  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Velocity Skew Magnetic Cursor */}
      <FluidCursor />

      {/* Floating WhatsApp Action Pill with spring effect */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-icon="arrow-up-right"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-6 right-6 z-[400] flex items-center gap-3 bg-black text-white px-5 py-3.5 rounded-full shadow-2xl border border-white/20"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#00D4FF] animate-pulse"></span>
        <span className="font-semibold text-sm tracking-wide">Falar no WhatsApp</span>
      </motion.a>

      {/* Floating Pill Header */}
      <header ref={navbarRef} className={`Navbar ${isScrolled ? '-scrolled -fixed' : ''} ${isNavVisible ? '-visible' : ''} ${isDarkBg ? '-dark' : ''}`}>
        <div className="cuberto-container">
          <div className={`nav-pill ${isDarkBg ? '-dark' : ''}`}>
            {/* Logo */}
            <a ref={logoRef} href="#" className={`flex items-center gap-2.5 no-underline transition-colors duration-300 group ${isDarkBg ? 'text-white' : 'text-black'}`}>
              <img
                src="/images/mascot-trimmed.webp"
                alt="Gorin Soluções"
                loading="eager"
                className="w-5 h-5 md:w-[22px] md:h-[22px] object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className={`font-bold text-lg md:text-xl tracking-tighter uppercase transition-colors duration-300 ${isDarkBg ? 'text-white' : 'text-black'}`}>
                GORIN<span className="text-[#00D4FF]">.</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav ref={navLinksRef} className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`roll-text text-sm font-medium transition-colors duration-300 no-underline py-1 ${isDarkBg ? 'text-white/80 hover:text-white' : 'text-black/75 hover:text-black'}`}
                >
                  <span data-text={item.label}>{item.label}</span>
                </a>
              ))}
            </nav>

            {/* Header Actions */}
            <div ref={headerActionRef} className="flex items-center gap-3">
              <MagneticCta
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenContact) {
                    onOpenContact();
                  } else {
                    window.history.pushState({}, '', '/contato');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }
                }}
                variant={isDarkBg ? "inverse" : "fill"}
                className="!py-2.5 !px-5 !text-xs md:!text-sm cursor-pointer"
              >
                Iniciar Projeto
              </MagneticCta>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${isDarkBg ? 'bg-white/10 text-white' : 'bg-black/5 text-black'}`}
                aria-label="Abrir menu"
              >
                <div className="w-4 flex flex-col gap-1">
                  <span className={`block h-0.5 transition-all duration-300 ${isDarkBg ? 'bg-white' : 'bg-black'} ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block h-0.5 transition-all duration-300 ${isDarkBg ? 'bg-white' : 'bg-black'} ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block h-0.5 transition-all duration-300 ${isDarkBg ? 'bg-white' : 'bg-black'} ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`md:hidden mt-2 p-6 backdrop-blur-xl border rounded-3xl shadow-xl flex flex-col gap-4 ${isDarkBg ? 'bg-[#0B0A0F]/95 border-white/10 text-white' : 'bg-white/95 border-black/10 text-black'}`}
              >
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-lg font-semibold no-underline py-1.5 border-b ${isDarkBg ? 'text-white border-white/10' : 'text-black border-black/5'}`}
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (onOpenContact) {
                      onOpenContact();
                    } else {
                      window.history.pushState({}, '', '/contato');
                      window.dispatchEvent(new PopStateEvent('popstate'));
                    }
                  }}
                  className="mt-2 text-center py-3 bg-[#00D4FF] text-black rounded-full font-semibold text-sm cursor-pointer"
                >
                  Iniciar Projeto
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <main>
        {/* ==========================================================================
           1. HERO SECTION (Artisan Editorial Typography, No Gimmicks)
           ========================================================================== */}
        <section className="TopheadSection relative overflow-hidden" id="home">
          {/* Subtle Parallax Background Watermark */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
            aria-hidden="true"
          >
            <span className="font-bold text-[clamp(110px,22vw,320px)] tracking-tighter text-black/[0.025] uppercase leading-none">
              GORIN
            </span>
          </div>

          {/* MeshPanel positioned behind to give subtle depth with 0.6 intensity */}
          <MeshPanel intensity={0.6} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

          <div className="cuberto-container relative z-10">
            {/* Monumental Editorial Headline with Text Reveal */}
            <TextRevealHeading
              as="h1"
              className="hero-headline"
              lines={[
                "Criamos websites e",
                "soluções digitais que",
                "geram resultados reais."
              ]}
            />

            {/* Editorial Lead */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="hero-lead"
            >
              Unimos direção de arte refinada, arquitetura de conversão estratégica e engenharia em React para transformar empresas ambiciosas em referências no mercado digital.
            </motion.p>

            {/* Hero Featured Video (Showcase with parallax and smooth clip reveal) */}
            <div
              ref={videoShowreelRef}
              className="mt-12 md:mt-16 w-full max-w-5xl mx-auto overflow-hidden rounded-[24px] md:rounded-[36px]"
              style={{
                boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.22)',
              }}
            >
              <div
                className="relative w-full aspect-video md:aspect-[16/9] rounded-[24px] md:rounded-[36px] overflow-hidden bg-black"
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                }}
              >
                <video
                  ref={videoMediaRef}
                  onLoadedMetadata={(e) => {
                    e.currentTarget.playbackRate = 0.75;
                  }}
                  src="https://res.cloudinary.com/dw5b0vlbz/video/upload/gemini_generated_video_6c0b68ed_kmnt39.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover block will-change-transform"
                  aria-label="Vídeo de demonstração Gorin Soluções"
                />
              </div>
            </div>

            {/* Magnetic Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 md:mt-14 flex flex-wrap items-center justify-center gap-4"
            >
              <MagneticCta
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenContact) {
                    onOpenContact();
                  } else {
                    window.history.pushState({}, '', '/contato');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }
                }}
                variant="fill"
                className="!py-4 !px-8 !text-base cursor-pointer"
              >
                Solicitar orçamento sem compromisso
              </MagneticCta>

              <MagneticCta
                href="#projects"
                variant="outline"
                className="!py-4 !px-8 !text-base"
              >
                Conhecer projetos entregues
              </MagneticCta>
            </motion.div>
          </div>
        </section>



        {/* ==========================================================================
           2. FOUNDER & STUDIO EDITORIAL SPREAD (MATEUS GORIN & PHILOSOPHY)
           ========================================================================== */}
        <section className="py-20 md:py-32 bg-[#fafaf9] border-t border-b border-black/10 relative" id="about">
          <div className="cuberto-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Founder Editorial Portrait Card */}
               <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-full flex flex-col items-center lg:items-start"
                >
                  <div className="media-slot w-44 h-44 md:w-52 md:h-52 aspect-square" data-media-type="image">
                    <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-black/15 shadow-xl">
                      <ImageReveal 
                        src="/images/mateus-gorin.webp"
                        alt="Mateus Gorin - Fundador e Desenvolvedor Web" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-black uppercase">
                      MATEUS GORIN
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-black/60 mt-1">
                      Fundador &amp; Líder de Engenharia Web
                    </p>
                    
                    <div className="mt-4 flex items-center gap-3">
                      <a
                        href="https://www.instagram.com/mateusgorin?igsh=a3Rnc2p0ZzE4ZWFz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-black/70 hover:text-black flex items-center gap-1.5 transition-colors"
                      >
                        <Instagram size={14} />
                        <span>@mateusgorin</span>
                      </a>
                      <span className="text-black/20">·</span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-black/70 hover:text-black flex items-center gap-1.5 transition-colors"
                      >
                        <MessageCircle size={14} />
                        <span>(61) 98129-0099</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Editorial Text & Manifesto */}
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <span className="caption-label block mb-2 uppercase font-medium text-black">
                    01. O Estúdio &amp; Visão
                  </span>
                  <TextRevealHeading
                    as="h2"
                    className="font-medium tracking-tight text-black"
                    style={{
                      fontSize: 'clamp(2rem, 3.5vw + 1rem, 3.5rem)',
                      lineHeight: 1.1,
                    }}
                    lines={[
                      "Construímos ferramentas de",
                      "crescimento, não apenas sites."
                    ]}
                  />
                </motion.div>

                <div className="space-y-5 text-black/75 text-base md:text-lg leading-relaxed">
                  <p>
                    A <strong className="text-black font-semibold">Gorin Soluções</strong> nasceu da convicção de que empresas profissionais merecem mais do que templates genéricos do WordPress e páginas lentas que espantam clientes.
                  </p>
                  <p>
                    Com base operacional em Brasília e projetos em todo o Brasil, unimos o rigor técnico da engenharia de software à sensibilidade de design de ponta. Desenvolvemos cada linha de código com uma meta implacável: fazer sua empresa transmitir autoridade máxima, carregar em fração de segundo e converter visitantes em contratos fechados.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================================================
           3. SERVICES (CUBERTO INTERACTIVE ACCORDION & CHAPTERS)
           ========================================================================== */}
        <section className="FeatureSection" id="services">
          <div className="cuberto-container">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <span className="caption-label block mb-2">02. Competências &amp; Serviços</span>
              <TextRevealHeading
                as="h2"
                className="text-3xl md:text-6xl font-medium tracking-tight"
                lines={[
                  "Soluções Digitais Especializadas"
                ]}
              />
            </motion.div>

            <div className="services-items flex flex-col gap-6">
              {servicesList.map((service, index) => (
                <ServiceCardItem
                  key={service.number}
                  service={service}
                  index={index}
                  whatsappUrl={whatsappUrl}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
           4. CLIENT BRANDS REEL
           ========================================================================== */}
        <section className="py-16 md:py-20 border-t border-b border-black/10 overflow-hidden" id="brands">
          <div className="cuberto-container">
            <TextRevealHeading
              as="h2"
              className="text-center text-xs md:text-sm font-mono uppercase tracking-widest text-black/45 mb-10"
              lines={[
                "Empresas e marcas desenvolvidas pela Gorin Soluções"
              ]}
            />

            <div className="w-full max-w-4xl mx-auto">
              <div
                className="relative w-full aspect-video md:aspect-[16/9] rounded-[24px] md:rounded-[36px] overflow-hidden bg-black shadow-lg"
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                }}
              >
                <video
                  onLoadedMetadata={(e) => {
                    e.currentTarget.playbackRate = 0.75;
                  }}
                  src="https://res.cloudinary.com/dw5b0vlbz/video/upload/gemini_generated_video_5d1602a7_tlladz.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover block will-change-transform"
                  aria-label="Empresas e marcas desenvolvidas pela Gorin Soluções"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
           5. SELECTED WORK (CUBERTO ASYMMETRIC PORTFOLIO WITH MODAL & FILTER TABS)
           ========================================================================== */}
        <section className="WorkSection" id="projects">
          <div className="cuberto-container">
            <div className="mb-14 md:mb-20">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <span className="caption-label text-white/50 block mb-2">03. Projetos Selecionados</span>
                <TextRevealHeading
                  as="h2"
                  className="text-3xl md:text-6xl font-medium tracking-tight"
                  lines={[
                    "Trabalhos Recentes"
                  ]}
                />
              </motion.div>
            </div>

            {/* Two-Column Staggered Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start">
              {/* Left Column */}
              <div className="flex flex-col gap-12 md:gap-20">
                {col1Projects.map((p, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedProject(p)}
                    className="WorkCard group cursor-pointer"
                    data-cursor-icon="arrow-up-right"
                  >
                    <div
                      className="w-full aspect-[4/3] md:aspect-[16/11] relative overflow-hidden"
                      style={{
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        border: 'none',
                        boxShadow: 'none',
                      }}
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover block"
                        style={{
                          borderRadius: 'var(--radius-lg)',
                          transition: 'transform 400ms ease',
                        }}
                      />
                    </div>

                    {/* Bloco de texto abaixo da imagem */}
                    <div style={{ marginTop: 'var(--space-2)' }}>
                      <div
                        style={{
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontSize: '0.75rem',
                          color: 'var(--text-muted-dark)',
                        }}
                      >
                        {p.category}
                      </div>
                      <div
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 600,
                          color: 'var(--text-light)',
                        }}
                      >
                        {p.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column (Offset) */}
              <div className="flex flex-col gap-12 md:gap-20 md:pt-28">
                {col2Projects.map((p, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedProject(p)}
                    className="WorkCard group cursor-pointer"
                    data-cursor-icon="arrow-up-right"
                  >
                    <div
                      className="w-full aspect-[4/3] md:aspect-[16/11] relative overflow-hidden"
                      style={{
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        border: 'none',
                        boxShadow: 'none',
                      }}
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover block"
                        style={{
                          borderRadius: 'var(--radius-lg)',
                          transition: 'transform 400ms ease',
                        }}
                      />
                    </div>

                    {/* Bloco de texto abaixo da imagem */}
                    <div style={{ marginTop: 'var(--space-2)' }}>
                      <div
                        style={{
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontSize: '0.75rem',
                          color: 'var(--text-muted-dark)',
                        }}
                      >
                        {p.category}
                      </div>
                      <div
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 600,
                          color: 'var(--text-light)',
                        }}
                      >
                        {p.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 flex justify-center">
              <MagneticCta
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="inverse"
                className="!py-4 !px-8 !text-base"
              >
                Solicitar um projeto personalizado
              </MagneticCta>
            </div>
          </div>
        </section>

        {/* Project Quick View Modal Drawer */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-[#111113] border border-white/15 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl text-white max-h-[90vh] overflow-y-auto"
              >
                {/* Image Header */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent"></div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Fechar"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-10 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] uppercase tracking-wider mb-2">
                      <span>{selectedProject.category}</span>
                      <span>·</span>
                      <span>Entrega Garantida</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    {selectedProject.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4 border-t border-b border-white/10 py-6 text-sm">
                    <div>
                      <span className="text-xs font-mono text-white/40 block mb-1">TECNOLOGIA</span>
                      <span className="text-white font-medium">React + TypeScript</span>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-white/40 block mb-1">FOCO DO PROJETO</span>
                      <span className="text-white font-medium">Conversão &amp; Performance</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    {selectedProject.link && selectedProject.link !== '#' && selectedProject.link !== 'internal' ? (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="CtaButton -fill -inverse !py-3.5 !px-7 !text-sm flex items-center gap-2"
                      >
                        <span>Acessar Website Oficial</span>
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="CtaButton -fill -inverse !py-3.5 !px-7 !text-sm flex items-center gap-2"
                      >
                        <span>Solicitar Demonstração</span>
                        <ArrowUpRight size={16} />
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-xs font-mono text-white/60 hover:text-white transition-colors"
                    >
                      Fechar visualização
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ==========================================================================
           6. TESTIMONIALS (FANNED DECK WITH AUTHENTIC CLIENT REVIEWS)
           ========================================================================== */}
        <section className="py-24 md:py-36 bg-white relative z-10 rounded-t-[40px] md:rounded-t-[64px] -mt-10 md:-mt-16" id="testimonials">
          <div className="cuberto-container">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="caption-label block mb-2">04. Depoimentos &amp; Avaliações</span>
              <TextRevealHeading
                as="h2"
                className="text-3xl md:text-5xl font-medium tracking-tight"
                lines={[
                  "A Experiência de",
                  "Quem Já Contratou"
                ]}
              />
            </motion.div>

            <div className="TestimonialsDeck">
              {testimonials.map((item, idx) => {
                // Card 0 (top-center): cyan tint #E8F9FB
                // Card 1 (mid-left): clean white #FFFFFF
                // Card 2 (mid-right): clean white #FFFFFF
                // Card 3 (bottom-left): cyan tint #E8F9FB
                // Card 4 (bottom-right): cyan tint #E8F9FB
                const isCyanTint = idx === 0 || idx === 3 || idx === 4;
                const bgStyle = isCyanTint ? '#EBF7F9' : '#FFFFFF';

                return (
                  <div
                    key={idx}
                    className="deck-card border border-black/[0.08] rounded-3xl p-7 md:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden"
                    style={{
                      backgroundColor: bgStyle,
                    }}
                  >
                  {/* Decorative Quotation Mark Glyph */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none select-none"
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1.25rem',
                      fontSize: '4.5rem',
                      fontFamily: 'serif',
                      color: 'var(--accent-cyan-mid)',
                      opacity: 0.15,
                      lineHeight: 1,
                      zIndex: 0,
                    }}
                  >
                    "
                  </span>

                  {/* Paper Noise Texture (feTurbulence baseFrequency 0.9, numOctaves 2, opacity 0.025) */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-3xl"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      opacity: 0.025,
                      zIndex: 1,
                    }}
                  />

                  <div className="relative z-10">
                    <span className="text-xs font-mono text-black/50 uppercase tracking-widest block mb-4">
                      {item.highlight}
                    </span>
                    <p className="text-black/85 text-sm md:text-base leading-relaxed mb-8">
                      "{item.content}"
                    </p>
                  </div>

                  <div className="relative z-10 border-t border-black/10 pt-4">
                    <h4 className="font-bold text-base text-black uppercase tracking-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs font-mono text-black/60 uppercase">
                      {item.role}
                    </p>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </section>

        {/* ==========================================================================
           7. WHY GORIN & ELASTIC RUBBER-BAND DIVIDER
           ========================================================================== */}
        <section className="py-16 md:py-24" id="why">
          <div className="cuberto-container">
            {/* The interactive rubber-band line */}
            <div className="my-12">
              <ElasticDivider />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start mb-16">
              <div className="md:col-span-4 lg:col-span-3">
                <TextRevealHeading
                  as="h2"
                  className="caption-label"
                  lines={[
                    "Por Que a Gorin"
                  ]}
                />
              </div>
              <div className="md:col-span-8 lg:col-span-9">
                <p className="editorial-text">
                  Não entregamos apenas páginas na internet. Entregamos ativos de autoridade e ferramentas comerciais que continuam gerando leads e clientes todos os dias.
                </p>
              </div>
            </div>

            {/* Metric Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              <div className="MetricTile -highlight">
                <div>
                  <div style={{ marginBottom: 'var(--space-2)' }}>
                    <Award size={24} strokeWidth={1.5} className="text-black" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-black/60">
                    Track Record Comprovado
                  </div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold tracking-tight text-black mb-1">
                    <StatCounter value="10+" />
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-black/75">
                    Projetos Entregues
                  </div>
                </div>
              </div>

              <div className="MetricTile">
                <div>
                  <div style={{ marginBottom: 'var(--space-2)' }}>
                    <ThumbsUp size={24} strokeWidth={1.5} className="text-black" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-black/60">
                    Índice de Aprovação
                  </div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold tracking-tight text-black mb-1">
                    <StatCounter value="100%" />
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-black/75">
                    Clientes Satisfeitos
                  </div>
                </div>
              </div>

              <div className="MetricTile -highlight">
                <div>
                  <div style={{ marginBottom: 'var(--space-2)' }}>
                    <MapPin size={24} strokeWidth={1.5} className="text-black" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-black/60">
                    Base Operacional
                  </div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold tracking-tight text-black mb-1">
                    BSB
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-black/75">
                    Brasília - DF / Atendimento Brasil
                  </div>
                </div>
              </div>

              <div className="MetricTile">
                <div>
                  <div style={{ marginBottom: 'var(--space-2)' }}>
                    <Code2 size={24} strokeWidth={1.5} className="text-black" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-black/60">
                    Engenharia Autoral
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-2">
                    Código 100% Puro
                  </div>
                  <div className="text-sm text-black/70 leading-relaxed">
                    Sem Elementor ou construtores lentos. Velocidade máxima no Google e zero dependência técnica.
                  </div>
                </div>
              </div>

              <div className="MetricTile sm:col-span-2 lg:col-span-2">
                <div>
                  <div style={{ marginBottom: 'var(--space-2)' }}>
                    <Layers size={24} strokeWidth={1.5} className="text-black" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-black/60">
                    Metodologia Integrada
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-2">
                    Estratégia, UX/UI e Desenvolvimento Integrados
                  </div>
                  <div className="text-sm md:text-base text-black/70 leading-relaxed max-w-2xl">
                    Cuidamos de cada etapa: do conceito e pesquisa de mercado à arquitetura de conversão, redação persuasiva e suporte pós-lançamento.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
           8. FAQ SECTION (HIGH-CRAFT ACCORDION)
           ========================================================================== */}
        <section className="bg-black text-white py-20 md:py-32 rounded-t-[40px] md:rounded-t-[64px]" id="faq">
          <div className="cuberto-container">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <span className="caption-label text-white/50 block mb-2">Perguntas Frequentes</span>
              <TextRevealHeading
                as="h2"
                className="text-3xl md:text-6xl font-medium tracking-tight"
                lines={[
                  "Dúvidas Comuns"
                ]}
              />
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-2 text-center">
              {faqs.map((faq, idx) => (
                <div key={idx} className="FaqItem">
                  <details className="group">
                    <summary className="py-2 text-xl md:text-2xl font-medium cursor-pointer inline-flex items-center justify-center gap-4 w-full">
                      <span>{faq.q}</span>
                      <span className="plus-icon"></span>
                    </summary>
                    <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-center">
                      {faq.a}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
           9. CONTACT & INTERACTIVE INQUIRY ESTIMATOR (ZERO AI SLOP)
           ========================================================================== */}
        <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden" id="contact">
          {/* Overlaid MeshPanels behind all content */}
          <div
            className="absolute bottom-0 left-0 w-full pointer-events-none"
            style={{ height: '33.333%', zIndex: 0 }}
          >
            <MeshPanel intensity={1} className="w-full h-full" />
          </div>

          <div
            className="absolute top-0 right-0 pointer-events-none"
            style={{ width: '45%', height: '33.333%', zIndex: 0 }}
          >
            <MeshPanel intensity={0.5} className="w-full h-full" />
          </div>

          <div className="cuberto-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <span className="caption-label text-white/50 block mb-2">05. Iniciar um Projeto</span>
              <TextRevealHeading
                as="h2"
                className="font-medium tracking-tight"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw + 1rem, 5.5rem)',
                  lineHeight: 1.05,
                }}
                lines={[
                  "Vamos Criar Algo",
                  "Notável Juntos?"
                ]}
              />
            </motion.div>

            <div className="max-w-3xl mx-auto text-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                    Conte-nos sobre sua empresa e receba uma análise estratégica com estimativa de investimento e cronograma.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      if (onOpenContact) {
                        onOpenContact();
                      } else {
                        window.history.pushState({}, '', '/contato');
                        window.dispatchEvent(new PopStateEvent('popstate'));
                      }
                    }}
                    className="inline-flex items-center justify-center rounded-full bg-[#00D4FF] text-black font-semibold hover:bg-[#00bfe6] transition-colors shadow-lg cursor-pointer"
                    style={{
                      padding: '1.1rem 2.8rem',
                      fontSize: '1.05rem',
                    }}
                  >
                    Falar com o Gorin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
           10. FOOTER
           ========================================================================== */}
        <footer className="FooterBar bg-black text-white pt-20 pb-12 border-t border-white/10">
          <div className="cuberto-container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16">
              
              {/* Left Column: Contact List */}
              <div className="md:col-span-7 flex flex-col justify-start">

                <div className="max-w-2xl py-2 text-sm text-left space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                    <a 
                      href={whatsappUrl}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3.5 py-2.5 text-white/90 hover:text-white transition-colors"
                    >
                      <div
                        className="flex items-center justify-center rounded-full shrink-0"
                        style={{
                          width: '32px',
                          height: '32px',
                          background: 'rgba(255, 255, 255, 0.06)',
                        }}
                      >
                        <MessageCircle size={16} strokeWidth={1.5} style={{ color: 'var(--accent-cyan)', stroke: 'var(--accent-cyan)' }} />
                      </div>
                      <span>(61) 98129-0099 · WhatsApp Direto</span>
                    </a>

                    <a 
                      href="https://www.instagram.com/mateusgorin?igsh=a3Rnc2p0ZzE4ZWFz" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3.5 py-2.5 text-white/90 hover:text-white transition-colors"
                    >
                      <div
                        className="flex items-center justify-center rounded-full shrink-0"
                        style={{
                          width: '32px',
                          height: '32px',
                          background: 'rgba(255, 255, 255, 0.06)',
                        }}
                      >
                        <Instagram size={16} strokeWidth={1.5} style={{ color: 'var(--accent-cyan)', stroke: 'var(--accent-cyan)' }} />
                      </div>
                      <span>@mateusgorin · Instagram</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                    <div className="flex items-center gap-3 py-2.5 text-white/80">
                      <div
                        className="flex items-center justify-center rounded-full shrink-0"
                        style={{
                          width: '32px',
                          height: '32px',
                          background: 'rgba(255, 255, 255, 0.06)',
                        }}
                      >
                        <MapPin size={16} strokeWidth={1.5} style={{ color: 'var(--accent-cyan)', stroke: 'var(--accent-cyan)' }} />
                      </div>
                      <span>Brasília - Distrito Federal · Atendimento Nacional</span>
                    </div>

                    <div className="flex items-center gap-3 py-2.5 text-white/80">
                      <div
                        className="flex items-center justify-center rounded-full shrink-0"
                        style={{
                          width: '32px',
                          height: '32px',
                          background: 'rgba(255, 255, 255, 0.06)',
                        }}
                      >
                        <Clock size={16} strokeWidth={1.5} style={{ color: 'var(--accent-cyan)', stroke: 'var(--accent-cyan)' }} />
                      </div>
                      <span>Horário Comercial · Seg a Sex das 09h às 18h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Navigation Links in Columns */}
              <div className="md:col-span-5 grid grid-cols-2 gap-8 justify-start md:justify-end">
                <div className="flex flex-col space-y-3">
                  {navItems.slice(0, 3).map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-sm font-medium text-white/70 hover:text-white transition-colors no-underline"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col space-y-3">
                  {navItems.slice(3).map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-sm font-medium text-white/70 hover:text-white transition-colors no-underline"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="text-sm font-medium text-[#00D4FF] hover:underline transition-colors no-underline"
                  >
                    Iniciar Projeto
                  </a>
                </div>
              </div>

            </div>

            {/* Bottom Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-white/50">
              <div className="flex items-center gap-6">
                <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Gorin Soluções protege todos os dados estratégicos fornecidos por clientes.'); }} className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <span>2026, Gorin Soluções</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/mateusgorin?igsh=a3Rnc2p0ZzE4ZWFz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="RoundButton"
                  aria-label="Instagram de Mateus Gorin"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="RoundButton"
                  aria-label="WhatsApp da Gorin Soluções"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="RoundButton"
                  aria-label="GitHub"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};
