import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './gorin-styles.css';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ElasticDivider } from './ElasticDivider';
import { projectsData, CaseStudy } from '../data/projects';
import { articlesData } from '../data/articles';
import { TextRevealHeading } from './TextRevealHeading';
import { MeshPanel } from './MeshPanel';
import { MeshStripes } from './MeshStripes';
import { MeshRings } from './MeshRings';
import { MeshDiagonal } from './MeshDiagonal';
import { CtaPrismArtwork } from './CtaPrismArtwork';

import { StatCounter } from './StatCounter';
import { ImageReveal } from './ImageReveal';
import { Instagram, MessageCircle, ArrowUpRight, X, Clock, Calendar, MapPin, ExternalLink, Award, ThumbsUp, Code2, Layers } from 'lucide-react';
import { WHATSAPP_DISPLAY, INSTAGRAM_URL, INSTAGRAM_HANDLE, whatsappLink } from '../lib/contact';

gsap.registerPlugin(ScrollTrigger);

interface GorinSiteProps {
  onOpenBriefing?: () => void;
  onOpenContact?: () => void;
  onOpenBlog?: () => void;
}

import { MagneticCta } from './MagneticCta';

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
  isOpen?: boolean;
  onClick?: () => void;
  whatsappUrl: string;
}> = ({ service, index, isOpen = false, onClick, whatsappUrl }) => {
  return (
    <article
      className="service-card"
      data-open={isOpen ? "true" : "false"}
      data-index={index}
      onClick={onClick}
    >
      <div className="service-fill" aria-hidden="true" />
      <div className="service-mesh" aria-hidden="true">
        {renderServiceMesh(index)}
      </div>

      <div className="service-card-header">
        <span className="service-number">
          {service.number}
        </span>

        <div className="service-title-wrap">
          <h3 className="service-title">
            {service.title}
          </h3>
        </div>
      </div>

      <div className="service-card-collapse">
        <div className="service-card-collapse-inner">
          <div className="service-card-content">
            <p className="service-desc">
              {service.desc}
            </p>

            <div className="service-card-action">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="MoreButton"
              >
                <span className="title">
                  <span data-text="Explorar escopo e iniciar projeto">
                    Explorar escopo e iniciar projeto
                  </span>
                </span>
                <span className="icon">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path fill="none" stroke="currentColor" strokeWidth="2" d="M3 13 13 3m0 8.65V3H4.35" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const renderBrandMark = (slug: string, name: string) => {
  switch (slug) {
    case 'brito-oliveira':
      return (
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-black shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
            <line x1="12" y1="22" x2="12" y2="15.5" />
            <line x1="22" y1="8.5" x2="12" y2="15.5" />
            <line x1="2" y1="8.5" x2="12" y2="15.5" />
          </svg>
          <span style={{ fontFamily: "'Cinzel', serif" }} className="font-bold text-base md:text-lg tracking-[0.14em] uppercase text-black">
            Brito Oliveira
          </span>
        </div>
      );
    case 'amorim-ergonomia':
      return (
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center shrink-0">
            <div className="w-2 h-2 rounded-full bg-black" />
          </div>
          <div className="flex flex-col text-left">
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-extrabold text-base md:text-lg tracking-tight leading-none text-black">
              AMORIM
            </span>
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.22em] text-black/60 mt-0.5">
              ERGONOMIA
            </span>
          </div>
        </div>
      );
    case 'brinca-movel':
      return (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-black shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6.4-4.8-6.4 4.8 2.4-7.2-6-4.8h7.6z" />
          </svg>
          <span style={{ fontFamily: "'Righteous', cursive" }} className="text-lg md:text-xl text-black tracking-wide">
            Brinca Móvel
          </span>
        </div>
      );
    case 'pc-gastronomia':
      return (
        <div className="flex items-baseline gap-2">
          <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl md:text-3xl font-bold tracking-normal text-black leading-none">
            P<span className="italic font-normal font-serif text-black/70">&amp;</span>C
          </span>
          <span className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase text-black/70">
            GASTRONOMIA
          </span>
        </div>
      );
    case 'maos-de-leide':
      return (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-black shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9a9 9 0 0 1-9-9 9 9 0 0 1 9-9z" />
            <path d="M12 7v5l3 3" />
          </svg>
          <span style={{ fontFamily: "'Caveat', cursive" }} className="text-2xl md:text-3xl font-bold text-black tracking-normal">
            Mãos de Leide
          </span>
        </div>
      );
    case 'logistico-controle-estoque':
      return (
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-black text-white px-1.5 py-0.5 font-bold rounded">▶▶</span>
          <span style={{ fontFamily: "'Oswald', sans-serif" }} className="font-bold text-lg md:text-xl tracking-wider uppercase text-black">
            LOGÍSTICO
          </span>
        </div>
      );
    case 'sgb-gestao-brigada':
      return (
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-black shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <div className="flex flex-col text-left">
            <span style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-extrabold text-base md:text-lg tracking-tight leading-none text-black">
              SGB
            </span>
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.18em] text-black/60 mt-0.5">
              BRIGADA &amp; GESTÃO
            </span>
          </div>
        </div>
      );
    case 'marmitaria-ventura':
      return (
        <div className="flex items-center gap-2">
          <div className="flex flex-col text-left">
            <span style={{ fontFamily: "'Abril Fatface', serif" }} className="text-xl md:text-2xl text-black leading-none">
              Ventura
            </span>
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.22em] text-black/60 mt-0.5">
              MARMITARIA
            </span>
          </div>
        </div>
      );
    default:
      return <span className="font-bold text-base tracking-wider text-black uppercase">{name}</span>;
  }
};

export const GorinSite: React.FC<GorinSiteProps> = ({ onOpenBriefing: onOpenBriefingProp, onOpenContact: onOpenContactProp, onOpenBlog: onOpenBlogProp }) => {
  const navigate = useNavigate();
  const onOpenContact = onOpenContactProp || (() => navigate('/contato'));
  const onOpenBriefing = onOpenBriefingProp || (() => navigate('/briefing'));
  const onOpenBlog = onOpenBlogProp || (() => navigate('/blog'));
  void onOpenBriefing;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false
  );
  const [openStates, setOpenStates] = useState<boolean[]>([true, false, false, false, false, false]);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);
  


  const loaderRef = useRef<HTMLDivElement>(null);
  const videoShowreelRef = useRef<HTMLDivElement>(null);
  const videoMediaRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const logoImgRef = useRef<HTMLImageElement>(null);
  const navLinksRef = useRef<HTMLElement>(null);
  const headerActionRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = whatsappLink("Olá, Mateus! Gostaria de conversar sobre um projeto digital com a Gorin Soluções.");

  // Page Loader Curtain animation on mount
  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;

    const ctx = gsap.context(() => {
      gsap.to(loader, {
        yPercent: -100,
        duration: 0.85,
        ease: 'expo.inOut',
        delay: 0.1,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // Exact entrance animation for Navbar matching original B2sJen script:
  // logo scale: 0 -> 1, nav/action y: 20 -> 0, opacity: 0 -> 1, duration: 0.8, stagger: 0.1
  useEffect(() => {
    if (logoImgRef.current) {
      logoImgRef.current.setAttribute('fetchpriority', 'high');
    }

    const ctx = gsap.context(() => {
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
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // Exact Video Entrance & Parallax matching original XzcFP script:
  // tlEnter: clipPath inset(5% 10% round 2rem), scale: 0.9 -> inset(0% 0% round 2rem), scale: 1, ease: 'expo.out', duration: 2.5
  // tlParallax: media y from -10% to 10%, scrub: true, start: top bottom, end: bottom top
  useEffect(() => {
    const container = videoShowreelRef.current;
    const video = videoMediaRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    const ctx = gsap.context(() => {
      // 1. Entrance animation (clip-path unclip & scale expand with expo.out)
      gsap.set(container, { willChange: 'clip-path, transform' });
      gsap.fromTo(
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
      ScrollTrigger.create({
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        animation: gsap.fromTo(video, { y: '-10%' }, { y: '10%', ease: 'none' }),
      });
    });

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  // Scroll-driven accordion using ScrollTrigger scrub (Gorin model)
  useEffect(() => {
    const main = document.querySelector<HTMLElement>('.services-main');
    const items = document.querySelector<HTMLElement>('.services-items');
    const cards = Array.from(document.querySelectorAll<HTMLElement>('article.service-card'));
    if (!main || !items || !cards.length) return;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const offsets: { top: number; bottom: number }[] = [];
      const tls: gsap.core.Timeline[] = [];
      const luz = getComputedStyle(document.documentElement).getPropertyValue('--text-light').trim() || '#ffffff';

      const computeLayout = () => {
        // Expand all collapses to measure the "full" height
        cards.forEach((card) => {
          const collapse = card.querySelector<HTMLElement>('.service-card-collapse');
          if (collapse) collapse.style.gridTemplateRows = '1fr';
        });

        const r = items.getBoundingClientRect();
        cards.forEach((card, i) => {
          const b = card.getBoundingClientRect();
          offsets[i] = {
            top: b.top - r.top,
            bottom: b.bottom - r.top
          };
        });
        
        main.style.height = r.height + 'px';
      };

      const measure = () => {
        const progressoSalvo = tls.map(tl => tl.progress());
        tls.forEach(tl => tl.revert({ kill: false }));
        computeLayout();
        tls.forEach((tl, i) => {
          const prog = progressoSalvo[i] ?? 0;
          tl.render(tl.duration() * prog, true, true);
        });
      };

      ScrollTrigger.addEventListener('refreshInit', measure);
      computeLayout();

      cards.forEach((card, i) => {
        // Card 01 is always open
        if (i === 0) return;

        const title = card.querySelector<HTMLElement>('.service-title');
        const number = card.querySelector<HTMLElement>('.service-number');
        const fill = card.querySelector<HTMLElement>('.service-fill');
        const mesh = card.querySelector<HTMLElement>('.service-mesh');
        const collapse = card.querySelector<HTMLElement>('.service-card-collapse');
        const content = card.querySelector<HTMLElement>('.service-card-content');

        if (!title || !number || !fill || !mesh || !collapse || !content) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: main,
            start: () => `top+=${offsets[i]?.top ?? 0} center+=20%`,
            end: () => `top+=${offsets[i]?.bottom ?? 0} center+=30%`,
            scrub: 1
          }
        });

        tl.fromTo(title, { color: '#000000' }, { color: luz, duration: 1 }, 0)
          .fromTo(number, { color: '#000000', opacity: 0.2 }, { color: luz, opacity: 0.5, duration: 1 }, 0)
          .fromTo(fill, { opacity: 0 }, { opacity: 1, duration: 1 }, 0)
          .fromTo(mesh, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'none' }, 0)
          .fromTo(collapse, { gridTemplateRows: '0fr' }, { gridTemplateRows: '1fr', duration: 1, ease: 'none' }, 0)
          .fromTo(content, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.4);

        tls.push(tl);
      });

      const handleTransitionEnd = (e: TransitionEvent) => {
        if (e.target === e.currentTarget && e.propertyName === 'grid-template-rows') {
          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });
        }
      };

      cards.forEach(card => {
        const collapse = card.querySelector<HTMLElement>('.service-card-collapse');
        collapse?.addEventListener('transitionend', handleTransitionEnd as any);
      });

      return () => {
        ScrollTrigger.removeEventListener('refreshInit', measure);
        main.style.removeProperty('height');
        cards.forEach(card => {
           const collapse = card.querySelector<HTMLElement>('.service-card-collapse');
           const animEls = card.querySelectorAll('.service-title, .service-number, .service-fill, .service-mesh, .service-card-collapse, .service-card-content');
           gsap.set(animEls, { clearProps: "all" });
           if (collapse) {
             collapse.style.removeProperty('grid-template-rows');
             collapse.removeEventListener('transitionend', handleTransitionEnd as any);
           }
        });
      };
    });

    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      mm.revert();
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.stop === 'function') {
        lenis.stop();
      }
      document.documentElement.style.overflow = "hidden";
    } else {
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.start === 'function') {
        lenis.start();
      }
      document.documentElement.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.start === 'function') {
        lenis.start();
      }
      document.documentElement.style.overflow = "";
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      ticking = false;
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

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ];

  const clientBrands = [
    { name: "Brito Oliveira", slug: "brito-oliveira" },
    { name: "Amorim Ergonomia", slug: "amorim-ergonomia" },
    { name: "Brinca Móvel", slug: "brinca-movel" },
    { name: "P&C Gastronomia", slug: "pc-gastronomia" },
    { name: "Mãos de Leide", slug: "maos-de-leide" },
    { name: "Logístico", slug: "logistico-controle-estoque" },
    { name: "SGB", slug: "sgb-gestao-brigada" },
    { name: "Marmitaria Ventura", slug: "marmitaria-ventura" },
  ];

  const handleBrandClick = (slug: string) => {
    const matched = projectsData.find((p) => p.slug === slug);
    if (matched) {
      setSelectedProject(matched);
    }
    const target = document.querySelector('#projects');
    if (target) {
      const navOffset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href === '/blog') {
      navigate('/blog');
      return;
    }

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
      category: "Velocidade",
      title: "Um site leve, que abre rápido no celular",
      tagline: "Quem espera demais fecha a página.",
      desc: "Faço sites leves, com código próprio e sem plugins pesados. Penso na velocidade desde o começo, para o seu cliente abrir a página sem esperar e o Google entender melhor o seu site.",
      deliverables: [
        "Código limpo e leve",
        "Imagens e fontes otimizadas",
        "Caminho curto até o WhatsApp",
        "SEO técnico básico"
      ],
      image: "/images/showcase-feature-1.webp",
    },
    {
      number: "02",
      category: "Design",
      title: "Design pensado para o seu cliente",
      tagline: "Bonito, mas principalmente claro.",
      desc: "Cuido de cada detalhe para o visitante entender rápido o que você faz e saber qual é o próximo passo. Escolho tipografia, cores e espaçamento de acordo com a sua marca, sem usar modelos prontos.",
      deliverables: [
        "Design sob medida, sem templates",
        "Funciona bem em celular, tablet e computador",
        "Navegação simples e intuitiva",
        "Animações leves, sem exagero"
      ],
      image: "/images/showcase-feature-2.webp",
    },
    {
      number: "03",
      category: "Atendimento",
      title: "Atendimento direto, sem complicação",
      tagline: "O site recebe o contato, mesmo quando você não está.",
      desc: "Ligo o seu site ao WhatsApp e a formulários simples, para quem se interessa conseguir falar com você em poucos toques.",
      deliverables: [
        "Encaminhamento prático para WhatsApp",
        "Formulários simples, com aviso de envio",
        "Integração com ferramentas de atendimento",
        "Rastreamento de conversões e eventos"
      ],
      image: "/images/showcase-feature-3.webp",
    },
    {
      number: "04",
      category: "Google",
      title: "Para o Google entender o seu site",
      tagline: "Quem procura o que você faz, encontra você.",
      desc: "Organizo cada página seguindo as boas práticas de SEO e marco os dados do seu negócio (Schema.org) para o Google entender quem você é e onde atende.",
      deliverables: [
        "Marcação estruturada Schema.org",
        "Integração com Google Meu Negócio e Maps",
        "Sitemap e robots.txt configurados",
        "Código organizado para o Google ler"
      ],
      image: "/images/mascot-trimmed.webp",
    },
    {
      number: "05",
      category: "Código sob medida",
      title: "Feito em React e TypeScript",
      tagline: "Um site estável e fácil de crescer.",
      desc: "Construo com React, TypeScript, Vite e Tailwind CSS, sem WordPress e sem plugins que ficam desatualizados. O site fica seguro, estável e pronto para crescer quando o seu negócio precisar.",
      deliverables: [
        "Código limpo e organizado",
        "Certificado SSL e navegação segura",
        "Carregamento sob demanda (lazy loading)",
        "Hospedagem em nuvem estável, com CDN"
      ],
      image: "/images/sgb.webp",
    },
    {
      number: "06",
      category: "Contato",
      title: "Contato direto, sem intermediários",
      tagline: "Do interesse à conversa em um toque.",
      desc: "Coloco pontos de contato em todo o site para o visitante chamar você no WhatsApp em um toque, sem passar por formulários longos.",
      deliverables: [
        "Botões de WhatsApp com mensagem pronta por serviço",
        "Botões de contato bem visíveis",
        "Integração com Instagram e redes sociais",
        "Acompanhamento e suporte próximo"
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
      a: "Plataformas como WordPress ou Wix costumam usar construtores pesados e muitos plugins que deixam o site lento e difícil de manter. Eu desenvolvo em código próprio com React e TypeScript. O resultado é um site leve, rápido para carregar, seguro e sem depender de plugins pesados."
    },
    {
      q: "Quanto tempo leva para o projeto ser entregue?",
      a: "Para Landing Pages e Websites Institucionais, o prazo é a partir de 7 dias úteis, dependendo da complexidade e da rapidez com que as informações chegam. Trabalho com etapas claras: alinhamento inicial, criação do design, desenvolvimento e publicação."
    },
    {
      q: "O site é otimizado para celulares e mecanismos de busca (Google)?",
      a: "Sim. A maior parte dos acessos hoje vem do celular, então o site é pensado primeiro para mobile e com SEO técnico básico, incluindo código semântico e metatags para ajudar no posicionamento do seu negócio no Google."
    },
    {
      q: "Como funciona a hospedagem e a manutenção após o lançamento?",
      a: "Ajudo você a configurar o domínio próprio (.com.br) e conecto o site a uma hospedagem em nuvem estável, com certificado de segurança SSL. Depois da publicação continuo à disposição pelo WhatsApp para dúvidas e pequenos ajustes. Se você precisar de manutenção contínua ou de mudanças maiores, combinamos isso na proposta."
    },
    {
      q: "Como eu inicio o projeto e quais são as formas de pagamento?",
      a: "O primeiro passo é uma conversa inicial pelo WhatsApp ou pelo formulário para entender seu negócio e o que você precisa. Envio uma proposta com o escopo, prazos e investimento. O pagamento pode ser feito via PIX ou cartão de crédito."
    }
  ];

  const col1Projects = projectsData.filter((_, idx) => idx % 2 === 0);
  const col2Projects = projectsData.filter((_, idx) => idx % 2 !== 0);

  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Page Loader Curtain */}
      <div ref={loaderRef} className="Loader" aria-hidden="true" />


      {/* Floating Pill Header */}
      <header ref={navbarRef} className={`Navbar ${isScrolled ? '-scrolled -fixed' : ''} ${isNavVisible || isMenuOpen ? '-visible' : ''} ${isDarkBg ? '-dark' : ''} ${isMenuOpen ? '-menu-open' : ''}`}>
        <div className="gorin-container">
          <div className={`nav-pill ${isDarkBg ? '-dark' : ''}`}>
            {/* Logo */}
            <a ref={logoRef} href="#" className={`flex items-center gap-2.5 no-underline transition-colors duration-300 group ${isDarkBg ? 'text-white' : 'text-black'}`}>
              <img
                ref={logoImgRef}
                src="/images/mascot-trimmed.webp"
                alt="Logotipo Gorin Soluções"
                loading="eager"
                className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className={`font-bold text-xl md:text-[1.38rem] tracking-tighter uppercase transition-colors duration-300 ${isDarkBg ? 'text-white' : 'text-black'}`}>
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
              <div className="hidden md:block">
                <MagneticCta
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenContact();
                  }}
                  variant={isDarkBg ? "inverse" : "fill"}
                  className="!py-2.5 !px-5 !text-xs md:!text-sm cursor-pointer"
                >
                  Iniciar Projeto
                </MagneticCta>
              </div>

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

          {/* Mobile Menu Expanded Card */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
                initial={{ opacity: 0, scale: 0.96, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -8 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className={`md:hidden absolute left-[0.75rem] right-[0.75rem] top-[20px] z-[200] overflow-hidden rounded-[28px] nav-glass-menu will-change-transform ${isDarkBg ? '-dark text-white' : 'text-black'}`}
                style={{
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  paddingTop: '12px',
                  paddingBottom: '28px',
                  transformOrigin: 'top center',
                }}
              >
                {/* Top Row */}
                <div className="flex items-center justify-between h-[44px]">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`flex items-center gap-2.5 no-underline transition-colors duration-300 group ${isDarkBg ? 'text-white' : 'text-black'}`}
                  >
                    <img
                      src="/images/mascot-trimmed.webp"
                      alt="Logotipo Gorin Soluções"
                      loading="eager"
                      className="w-[22px] h-[22px] object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className={`font-bold text-xl tracking-tighter uppercase transition-colors duration-300 ${isDarkBg ? 'text-white' : 'text-black'}`}>
                      GORIN<span className="text-[#00D4FF]">.</span>
                    </span>
                  </a>

                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-[44px] h-[44px] flex items-center justify-center rounded-full transition-colors ${isDarkBg ? 'hover:bg-white/10 text-white' : 'hover:bg-black/5 text-black'}`}
                    aria-label="Fechar menu"
                  >
                    <X size={26} strokeWidth={1.5} />
                  </button>
                </div>

                {/* Menu Label & Divider */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="text-[16px] opacity-60 font-medium mt-[44px]">
                    Menu
                  </div>
                  <div
                    className="w-full h-[1px] mt-[16px]"
                    style={{
                      backgroundColor: isDarkBg ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)'
                    }}
                  />
                </motion.div>

                {/* Navigation Links with Immediate Smooth Entrance */}
                <nav className="mt-[24px] flex flex-col gap-[10px]">
                  {navItems.map((item, idx) => (
                    <div key={item.label} className="overflow-hidden">
                      <motion.a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        initial={{ y: "80%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.28, delay: 0.04 + idx * 0.03, ease: [0.16, 1, 0.3, 1] }}
                        className={`block text-[2.25rem] leading-[1.1] tracking-[-0.03em] font-medium no-underline transition-colors ${isDarkBg ? 'text-white hover:text-[#00D4FF]' : 'text-black hover:text-[#0E7490]'}`}
                      >
                        {item.label}
                      </motion.a>
                    </div>
                  ))}
                </nav>

                {/* Contact Pill CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-[32px] flex justify-start"
                >
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenContact();
                    }}
                    className={`inline-flex items-center justify-center rounded-full font-semibold transition-colors cursor-pointer ${isDarkBg ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'}`}
                    style={{
                      padding: '14px 32px',
                      fontSize: '1.0625rem',
                    }}
                  >
                    Iniciar Projeto
                  </button>
                </motion.div>
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

          <div className="gorin-container relative z-10">
            {/* Monumental Editorial Headline with Text Reveal */}
            <TextRevealHeading
              as="h1"
              className="hero-headline"
              lines={[
                "Desenvolvo sites e",
                "soluções digitais."
              ]}
            />

            {/* Editorial Lead */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="hero-lead"
            >
              Crio sites e sistemas web sob medida para empresas que querem ser encontradas, passar confiança e receber mais contatos pelo WhatsApp.
            </motion.p>

            {/* Hero Featured Video (Showcase with parallax and smooth clip reveal) */}
            <div className="PreviewSection mt-8 md:mt-12">
              <div
                ref={videoShowreelRef}
                className="preview-main max-w-5xl mx-auto overflow-hidden rounded-[20px] md:rounded-[36px]"
              >
                <video
                  ref={videoMediaRef}
                  onLoadedMetadata={(e) => {
                    e.currentTarget.playbackRate = 0.52;
                    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                      e.currentTarget.pause();
                    }
                  }}
                  src="https://res.cloudinary.com/dw5b0vlbz/video/upload/f_auto,q_auto/v1/GORIN_SOLU%C3%87%C3%95ES_digital_ad_video_20261001005806_lpre24.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover block will-change-transform"
                  aria-label="Vídeo de demonstração Gorin Soluções"
                />
              </div>
            </div>

            {/* Magnetic Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-3.5 md:gap-4 w-full px-4 md:px-0"
            >
              <MagneticCta
                onClick={(e) => {
                  e.preventDefault();
                  onOpenContact();
                }}
                variant="fill"
                className="!w-full md:!w-auto !max-w-[360px] md:!max-w-none !min-h-[72px] md:!min-h-0 !py-4 !px-6 md:!px-8 !text-base !leading-snug cursor-pointer flex items-center justify-center text-center"
              >
                Solicitar orçamento sem compromisso
              </MagneticCta>

              <MagneticCta
                href="#projects"
                variant="outline"
                className="!w-full md:!w-auto !max-w-[360px] md:!max-w-none !min-h-[72px] md:!min-h-0 !py-4 !px-6 md:!px-8 !text-base !leading-snug flex items-center justify-center text-center"
              >
                Conhecer projetos entregues
              </MagneticCta>
            </motion.div>
          </div>
        </section>

        {/* Fullscreen Showreel Modal with Audio */}
        <AnimatePresence>
          {isShowreelOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsShowreelOpen(false)}
              className="ShowreelModal fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-pointer"
              data-cursor-icon="times"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
              >
                <video
                  ref={modalVideoRef}
                  src="https://res.cloudinary.com/dw5b0vlbz/video/upload/f_auto,q_auto/v1/GORIN_SOLU%C3%87%C3%95ES_digital_ad_video_20261001005806_lpre24.mp4"
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setIsShowreelOpen(false)}
                  className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                  aria-label="Fechar vídeo"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>



        {/* ==========================================================================
           2. FOUNDER & STUDIO EDITORIAL SPREAD (MATEUS GORIN & PHILOSOPHY)
           ========================================================================== */}
        <section className="pt-10 pb-4 md:py-28 bg-white relative" id="about">
          <div className="gorin-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
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
                      Fundador &amp; Desenvolvedor Web
                    </p>
                    
                    <div className="mt-4 flex items-center gap-3">
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-black/70 hover:text-black flex items-center gap-1.5 transition-colors"
                      >
                        <Instagram size={14} />
                        <span>{INSTAGRAM_HANDLE}</span>
                      </a>
                      <span className="text-black/20">·</span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-black/70 hover:text-black flex items-center gap-1.5 transition-colors"
                      >
                        <MessageCircle size={14} />
                        <span>{WHATSAPP_DISPLAY}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Editorial Text & Manifesto */}
              <div className="lg:col-span-8 pt-4 lg:pt-0">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4"
                >
                  <TextRevealHeading
                    as="h2"
                    className="font-medium tracking-tight text-black"
                    style={{
                      fontSize: 'clamp(1.75rem, 2.6vw + 0.5rem, 2.5rem)',
                      lineHeight: 1.15,
                    }}
                    lines={[
                      "Sou o Mateus, e faço",
                      "sites que trazem contato."
                    ]}
                  />
                </motion.div>

                <div className="space-y-3.5 text-black/75 text-base md:text-[1.05rem] leading-relaxed">
                  <p>
                    Sou desenvolvedor em Brasília e atendo empresas de todo o Brasil. Faço sites e sistemas web sob medida pela <strong className="text-black font-semibold">Gorin Soluções</strong>, e você fala direto comigo, do primeiro contato até a publicação.
                  </p>
                  <p>
                    Meus clientes são clínicas, restaurantes, consultorias e outros negócios que precisam de um site claro, rápido no celular e com um caminho curto até o WhatsApp. Cada projeto é feito do zero, sem WordPress e sem plugins pesados. Respondo em até 24 horas.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================================================
           3. SERVICES (GORIN INTERACTIVE ACCORDION & CHAPTERS)
           ========================================================================== */}
        <section className="FeatureSection" id="services">
          <div className="gorin-container">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mb-4 md:mb-16"
            >
              <TextRevealHeading
                as="h2"
                className="text-3xl md:text-6xl font-medium tracking-tight"
                lines={[
                  "Soluções Digitais Especializadas"
                ]}
              />
            </motion.div>

            <div className="services-main" style={{ position: 'relative' }}>
              <div className="services-items flex flex-col">
                {servicesList.map((service, index) => (
                  <ServiceCardItem
                    key={service.number}
                    service={service}
                    index={index}
                    isOpen={isMobile ? openStates[index] : (index === 0 ? true : false)}
                    onClick={() => {
                      if (isMobile) {
                        setOpenStates(prev => {
                          const next = [...prev];
                          next[index] = !next[index];
                          return next;
                        });
                      }
                    }}
                    whatsappUrl={whatsappUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
           4. CLIENT BRANDS REEL (#brands)
           ========================================================================== */}
        <section className="LogoreelSection bg-white relative z-10" id="brands">
          <div className="gorin-container">
            <h2 className="text-center text-xs md:text-sm font-mono uppercase tracking-widest text-black font-bold mb-12 md:mb-16 select-none">
              Empresas e marcas desenvolvidas pela Gorin Soluções
            </h2>

            <div className="brands-grid grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-16 gap-x-6 md:gap-x-12 items-center justify-items-center">
              {clientBrands.map((brand, idx) => (
                <div
                  key={idx}
                  onClick={() => handleBrandClick(brand.slug)}
                  className="brand-item cursor-pointer w-full py-2 flex items-center justify-center select-none"
                >
                  <div className="brand-item-inner flex items-center justify-center">
                    {renderBrandMark(brand.slug, brand.name)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
           5. SELECTED WORK (GORIN ASYMMETRIC PORTFOLIO WITH MODAL)
           ========================================================================== */}
        <section className="WorkSection bg-black text-white py-20 md:py-32 rounded-t-[2.5rem] md:rounded-t-[5rem] relative overflow-hidden" id="projects">
          <div className="gorin-container">
            <div className="mb-14 md:mb-20">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <TextRevealHeading
                  as="h2"
                  className="text-3xl md:text-6xl font-medium tracking-tight text-white"
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
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setSelectedProject(p)}
                    className="WorkCard group cursor-pointer"
                    data-cursor-text="Ver"
                  >
                    <div className="work-card-media w-full aspect-[4/3] md:aspect-[16/11] relative overflow-hidden rounded-2xl md:rounded-3xl">
                      <img
                        src={p.image}
                        alt={`Imagem em destaque do projeto ${p.title}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover block"
                      />
                    </div>

                    <div className="mt-4 flex flex-col gap-1">
                      <span className="text-[0.75rem] font-mono uppercase tracking-widest text-white/50">
                        {p.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight group-hover:text-[#00D4FF] transition-colors">
                        {p.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column (Offset) */}
              <div className="flex flex-col gap-12 md:gap-20 md:mt-36">
                {col2Projects.map((p, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    onClick={() => setSelectedProject(p)}
                    className="WorkCard group cursor-pointer"
                    data-cursor-text="Ver"
                  >
                    <div className="work-card-media w-full aspect-[4/3] md:aspect-[16/11] relative overflow-hidden rounded-2xl md:rounded-3xl">
                      <img
                        src={p.image}
                        alt={`Imagem em destaque do projeto ${p.title}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover block"
                      />
                    </div>

                    <div className="mt-4 flex flex-col gap-1">
                      <span className="text-[0.75rem] font-mono uppercase tracking-widest text-white/50">
                        {p.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight group-hover:text-[#00D4FF] transition-colors">
                        {p.title}
                      </h3>
                    </div>
                  </motion.div>
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
                    alt={`Imagem detalhada do projeto ${selectedProject.title}`}
                    decoding="async"
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
                      <span>Projeto Entregue</span>
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
                      <span className="text-white font-medium">{selectedProject.stack?.join(" · ") || "React + TypeScript"}</span>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-white/40 block mb-1">FOCO DO PROJETO</span>
                      <span className="text-white font-medium">{selectedProject.metrics || "Conversão & Performance"}</span>
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
        <section className="py-20 md:py-28 bg-white relative z-10 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-10 md:-mt-16" id="testimonials">
          <div className="gorin-container">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
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
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="deck-card p-7 md:p-8 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Decorative Quotation Mark Glyph */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none select-none text-black/10 text-6xl font-serif absolute top-4 left-5 leading-none"
                  >
                    "
                  </span>

                  <div className="relative z-10">
                    <span className="text-xs font-mono text-black/50 uppercase tracking-widest block mb-3">
                      {item.highlight}
                    </span>
                    <p className="text-black/85 text-sm md:text-base leading-relaxed mb-6 font-medium">
                      "{item.content}"
                    </p>
                  </div>

                  <div className="relative z-10 border-t border-black/10 pt-4 mt-auto">
                    <h4 className="font-bold text-base text-black uppercase tracking-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs font-mono text-black/60 uppercase mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
           7. WHY GORIN & ELASTIC RUBBER-BAND DIVIDER (#why)
           ========================================================================== */}
        <section className="py-20 md:py-28 bg-white" id="why">
          <div className="gorin-container">
            {/* The interactive rubber-band line */}
            <div className="mb-14">
              <ElasticDivider />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start mb-16">
              <div className="md:col-span-4 lg:col-span-3">
                <TextRevealHeading
                  as="h2"
                  className="caption-label text-black block"
                  lines={[
                    "Por Que a Gorin"
                  ]}
                />
              </div>
              <div className="md:col-span-8 lg:col-span-9">
                <p className="text-xl md:text-3xl font-medium tracking-tight text-black leading-snug">
                  Não entrego só uma página na internet. Faço um site pensado para o seu cliente encontrar você e chamar no WhatsApp.
                </p>
              </div>
            </div>

            {/* Bento Grid (12 Columns) */}
            <div className="gorin-tiles-grid grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
              {/* Tile 1: 10+ Projetos (span 4, cyan) */}
              <div className="MetricTile -bg-cyan lg:col-span-4">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-black/60">
                    Experiência
                  </span>
                  <Award size={22} strokeWidth={1.5} className="text-black/70" />
                </div>
                <div>
                  <div className="stat-number text-black mb-1" style={{ fontSize: 'clamp(3.75rem, 5vw, 5rem)', fontWeight: 600, lineHeight: 1 }}>
                    <StatCounter value="10+" />
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-black/80">
                    Projetos Entregues
                  </div>
                </div>
              </div>

              {/* Tile 2: 24h Resposta (span 4, grey) */}
              <div className="MetricTile -bg-grey lg:col-span-4">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-black/60">
                    Tempo de Resposta
                  </span>
                  <ThumbsUp size={22} strokeWidth={1.5} className="text-black/70" />
                </div>
                <div>
                  <div className="stat-number text-black mb-1" style={{ fontSize: 'clamp(3.75rem, 5vw, 5rem)', fontWeight: 600, lineHeight: 1 }}>
                    <StatCounter value="24h" />
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-black/80">
                    Resposta em até 24 horas
                  </div>
                </div>
              </div>

              {/* Tile 3: BSB Brasília (span 4, cyan) */}
              <div className="MetricTile -bg-cyan lg:col-span-4">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-black/60">
                    Onde estou
                  </span>
                  <MapPin size={22} strokeWidth={1.5} className="text-black/70" />
                </div>
                <div>
                  <div className="stat-number text-black mb-1" style={{ fontSize: 'clamp(3.75rem, 5vw, 5rem)', fontWeight: 600, lineHeight: 1 }}>
                    BSB
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-black/80">
                    Brasília, DF · Atendo todo o Brasil
                  </div>
                </div>
              </div>

              {/* Tile 4: Código do Zero (span 6, grey) */}
              <div className="MetricTile -bg-grey lg:col-span-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-black/60">
                    Código sob medida
                  </span>
                  <Code2 size={22} strokeWidth={1.5} className="text-black/70" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-2">
                    Código feito do zero
                  </h3>
                  <p className="text-sm md:text-base text-black/70 leading-relaxed">
                    Sem WordPress e sem plugins pesados. Uso React e TypeScript para o site ficar leve, seguro e fácil de o Google entender.
                  </p>
                </div>
              </div>

              {/* Tile 5: Estratégia, Design e Desenvolvimento (span 6, grey) */}
              <div className="MetricTile -bg-grey lg:col-span-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-black/60">
                    Processo Completo
                  </span>
                  <Layers size={22} strokeWidth={1.5} className="text-black/70" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-2">
                    Do primeiro contato à publicação
                  </h3>
                  <p className="text-sm md:text-base text-black/70 leading-relaxed">
                    Você fala direto comigo em todas as etapas: conversa inicial, design, desenvolvimento e publicação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
           8. BLOG INSIGHTS & FAQ SECTION (INSIDE BLACK BACKGROUND)
           ========================================================================== */}
        <section className="FaqSection bg-black text-white py-20 md:py-32 rounded-t-[2.5rem] md:rounded-t-[5rem] relative" id="insights">
          <div className="gorin-container">
            {/* Blog Insights Subsection */}
            <div className="mb-24 md:mb-36">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="flex flex-row items-center justify-between gap-6 mb-12 md:mb-16"
              >
                <TextRevealHeading
                  as="h2"
                  className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white"
                  lines={[
                    "Blog"
                  ]}
                />

                <MagneticCta
                  onClick={onOpenBlog}
                  variant="outline"
                  className="!text-white !border-white/30 hover:!border-white hover:!bg-white hover:!text-black transition-all cursor-pointer !py-3.5 !px-8 !text-sm sm:!text-base font-normal shrink-0"
                >
                  Ler o blog
                </MagneticCta>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
                {articlesData.slice(0, 3).map((article) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                    onClick={onOpenBlog}
                    className="group cursor-pointer flex flex-col bg-[#111111] rounded-3xl overflow-hidden border border-white/10 hover:border-[#00D4FF]/40 hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                        {article.category}
                      </div>
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex items-center gap-3 text-xs font-mono text-white/50 mb-3">
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

                        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#00D4FF] transition-colors mb-3 leading-snug">
                          {article.title}
                        </h3>

                        <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* FAQ Subsection */}
            <div id="faq">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14 md:mb-20"
              >
                <TextRevealHeading
                  as="h2"
                  className="text-3xl md:text-6xl font-medium tracking-tight text-white"
                  lines={[
                    "Dúvidas Comuns"
                  ]}
                />
              </motion.div>

              <div className="max-w-4xl mx-auto">
                {faqs.map((faq, idx) => (
                  <React.Fragment key={idx}>
                    <div className="faq-divider opacity-20 text-white my-3">
                      <ElasticDivider />
                    </div>
                    <div className="FaqItem py-2">
                      <details className="group">
                        <summary className="py-4 text-lg md:text-2xl font-medium cursor-pointer flex items-center justify-between gap-6 w-full text-left list-none select-none">
                          <span className="text-white group-hover:text-[#00D4FF] transition-colors">{faq.q}</span>
                          <span className="plus-icon">
                            +
                          </span>
                        </summary>
                        <p className="pb-6 pt-2 text-white/70 text-base md:text-lg leading-relaxed text-left max-w-3xl">
                          {faq.a}
                        </p>
                      </details>
                    </div>
                  </React.Fragment>
                ))}
                <div className="faq-divider opacity-20 text-white my-3">
                  <ElasticDivider />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
           9. CONTACT & INTERACTIVE INQUIRY ESTIMATOR (ZERO AI SLOP)
           ========================================================================== */}
        <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden" id="contact">
          {/* 3D Isometric Diamond Prism Sculpture (Gorin style, Gorin brand colors) */}
          <CtaPrismArtwork />

          <div className="gorin-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
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
                    Conte-me sobre sua empresa e receba uma análise do seu projeto com estimativa de prazo e investimento.
                  </p>
                </div>

                <div className="pt-2 flex justify-center">
                  <MagneticCta
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenContact();
                    }}
                    variant="inverse"
                    className="!py-4 !px-8 !text-base cursor-pointer font-medium"
                  >
                    Falar com o Mateus
                  </MagneticCta>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
           10. FOOTER
           ========================================================================== */}
        <footer className="FooterBar bg-black text-white pt-20 pb-28 md:pb-32 border-t border-white/10">
          <div className="gorin-container">
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
                      <span>{WHATSAPP_DISPLAY} · WhatsApp Direto</span>
                    </a>

                    <a 
                      href={INSTAGRAM_URL} 
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
                      <span>{INSTAGRAM_HANDLE} · Instagram</span>
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
                      <span>Brasília, DF · Atendo todo o Brasil</span>
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

              {/* Right Column: Navigation Links in Columns with roll-text */}
              <div className="md:col-span-5 grid grid-cols-2 gap-8 justify-start md:justify-end">
                <div className="flex flex-col space-y-3">
                  {navItems.slice(0, 3).map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="roll-text text-sm font-medium text-white/70 hover:text-white transition-colors no-underline group"
                    >
                      <span data-text={item.label}>{item.label}</span>
                    </a>
                  ))}
                </div>
                <div className="flex flex-col space-y-3">
                  {navItems.slice(3).map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="roll-text text-sm font-medium text-white/70 hover:text-white transition-colors no-underline group"
                    >
                      <span data-text={item.label}>{item.label}</span>
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="roll-text text-sm font-medium text-[#00D4FF] transition-colors no-underline group"
                  >
                    <span data-text="Iniciar Projeto">Iniciar Projeto</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Bottom Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-white/50">
              <div className="flex items-center gap-6">
                <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
                <span>© 2026 Gorin Soluções</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="RoundButton"
                  data-cursor-stick
                  aria-label="Instagram de Mateus Gorin"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="RoundButton"
                  data-cursor-stick
                  aria-label="WhatsApp da Gorin Soluções"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="RoundButton"
                  data-cursor-stick
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
