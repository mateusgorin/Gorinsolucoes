import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Detect if page has scrolled past top
    const handleScrollState = () => {
      setHasScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScrollState, { passive: true });
    handleScrollState();

    // Detect if user is over dark sections (#projects or #contact)
    const darkSections = [
      document.getElementById('projects'),
      document.getElementById('contact')
    ].filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        let overDark = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            overDark = true;
          }
        });
        setIsOverDark(overDark);
      },
      {
        root: null,
        rootMargin: '-10% 0px -70% 0px',
        threshold: 0.05
      }
    );

    darkSections.forEach(section => observer.observe(section));

    const checkDarkByBoundingRect = () => {
      let overDark = false;
      darkSections.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 50) {
          overDark = true;
        }
      });
      setIsOverDark(overDark);
    };

    window.addEventListener('scroll', checkDarkByBoundingRect, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollState);
      window.removeEventListener('scroll', checkDarkByBoundingRect);
      observer.disconnect();
    };
  }, []);

  // Lock body scroll and Lenis when full-screen menu opens/closes
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if ((window as any).__lenis) {
        (window as any).__lenis.stop();
      }
    } else {
      document.body.style.overflow = '';
      if ((window as any).__lenis) {
        (window as any).__lenis.start();
      }
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      if ((window as any).__lenis) {
        (window as any).__lenis.start();
      }
    };
  }, [isOpen]);

  // Links mirroring the Cuberto design reference: Services, Projects, About, Testimonials, Briefing
  const navLinks = [
    { name: 'Serviços', href: '#services', number: '01' },
    { name: 'Projetos', href: '#projects', number: '02' },
    { name: 'Sobre', href: '#about', number: '03' },
    { name: 'Depoimentos', href: '#testimonials', number: '04' },
    { name: 'Briefing', href: '/projetos', number: '05' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        if ((window as any).__lenis) {
          (window as any).__lenis.scrollTo(element, { offset: -70 });
        } else {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    } else {
      window.location.href = href;
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (isOpen) setIsOpen(false);

    const isProjetosPage = window.location.pathname === '/projetos' || window.location.pathname === '/projetos/';

    if (isProjetosPage && href.startsWith('#')) {
      window.location.href = '/' + href;
      return;
    }

    setTimeout(() => {
      scrollToSection(href);
    }, 150);
  };

  // Stagger variants for fullscreen overlay menu
  const menuContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.12
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1
      }
    }
  };

  const menuItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      y: 30,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      {/* 
        Menu Fixo Topo (Referência Cuberto):
        - Fixo no topo absoluto da tela (fixed top-0 left-0 right-0 z-50)
        - Largura total com alinhamento refinado
        - Logo à esquerda, Links e botão pill 'Contato' à direita
      */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          hasScrolled
            ? isOverDark
              ? 'bg-[#0B0B0C]/85 backdrop-blur-md border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
              : 'bg-[#FAFAF9]/85 backdrop-blur-md border-b border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
            : isOverDark
              ? 'bg-transparent text-white'
              : 'bg-transparent text-[#0B0B0C]'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-14 py-4 md:py-5 flex items-center justify-between">
          
          {/* Logo estilo Cuberto: clean, tipografia forte e alinhamento milimétrico */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer select-none"
          >
            <img 
              src="/images/mascot-centered.webp" 
              alt="Logo Gorin" 
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:scale-105 transition-transform duration-200 shrink-0"
            />
            
            <div className="flex items-center gap-1.5 font-archivo font-black text-lg sm:text-xl leading-none tracking-tight uppercase select-none">
              <span className={`transition-colors ${
                isOverDark ? 'text-[#FAFAF9]' : 'text-[#0B0B0C]'
              }`}>
                GORIN
              </span>
              <span className={`transition-colors ${
                isOverDark ? 'text-[#00D4FF]' : 'text-[#00A3C4]'
              }`}>
                SOLUÇÕES
              </span>
            </div>
          </a>

          {/* Navegação Desktop: Links horizontais limpos no estilo Cuberto */}
          <div className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-sans text-sm lg:text-[15px] font-medium tracking-normal transition-colors cursor-pointer relative group ${
                  isOverDark 
                    ? 'text-white/70 hover:text-white' 
                    : 'text-[#0B0B0C]/75 hover:text-[#0B0B0C]'
                }`}
              >
                <span>{link.name}</span>
                <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                  isOverDark ? 'bg-white' : 'bg-[#0B0B0C]'
                }`} />
              </a>
            ))}

            {/* Botão Pill Sólido 'Contato' (Exatamente como o 'Contacts' do print de referência) */}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`inline-flex items-center justify-center px-6 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm ${
                isOverDark
                  ? 'bg-[#FAFAF9] text-[#0B0B0C] hover:bg-white'
                  : 'bg-[#0B0B0C] text-[#FAFAF9] hover:bg-[#1f1f23]'
              }`}
            >
              Contato
            </a>
          </div>

          {/* Mobile Actions: Botão 'Contato' + Menu Hamburguer */}
          <div className="flex md:hidden items-center gap-2.5">
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`px-4 py-1.5 rounded-full font-sans text-xs font-medium transition-all ${
                isOverDark
                  ? 'bg-white text-[#0B0B0C]'
                  : 'bg-[#0B0B0C] text-white'
              }`}
            >
              Contato
            </a>

            <button 
              onClick={() => setIsOpen(true)}
              aria-label="Abrir Menu"
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isOverDark 
                  ? 'border-white/20 text-white bg-white/5 hover:bg-white/15' 
                  : 'border-black/10 text-[#0B0B0C] bg-black/[0.03] hover:bg-black/[0.08]'
              }`}
            >
              <Menu size={18} />
            </button>
          </div>

        </div>
      </header>

      {/* Menu Fullscreen Overlay para Mobile e acesso completo */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-screen h-screen z-[9999] bg-[#0B0B0C] text-[#FAFAF9] flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-y-auto"
          >
            {/* Overlay Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <a 
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <img 
                  src="/images/mascot-centered.webp" 
                  alt="Logo Gorin" 
                  className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0"
                />
                <div className="flex items-center gap-1.5 font-archivo font-black leading-none tracking-tight text-xl uppercase">
                  <span className="text-[#FAFAF9]">
                    GORIN
                  </span>
                  <span className="text-[#00D4FF]">
                    SOLUÇÕES
                  </span>
                </div>
              </a>

              {/* Close Button "X" */}
              <button 
                onClick={() => setIsOpen(false)}
                aria-label="Fechar Menu"
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/20 hover:border-[#00D4FF] bg-white/5 hover:bg-[#00D4FF] hover:text-[#0B0B0C] text-[#FAFAF9] font-archivo font-bold text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer group"
              >
                <span>FECHAR</span>
                <X size={16} className="group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>

            {/* Overlay Navigation Links with Giant Archivo Typography */}
            <motion.div 
              variants={menuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="py-8 md:py-12 flex flex-col space-y-3 sm:space-y-4"
            >
              {[
                { name: 'Início', href: '#home' },
                { name: 'Serviços', href: '#services' },
                { name: 'Projetos', href: '#projects' },
                { name: 'Sobre Nós', href: '#about' },
                { name: 'Depoimentos', href: '#testimonials' },
                { name: 'Briefing de Projeto', href: '/projetos' },
                { name: 'Contato', href: '#contact' },
              ].map((link) => (
                <motion.div key={link.name} variants={menuItemVariants}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group flex items-baseline gap-4 sm:gap-6 py-1 cursor-pointer w-fit"
                  >
                    <span className="font-archivo font-black text-[clamp(2.25rem,6.5vw,5.5rem)] tracking-tight uppercase leading-[1.02] text-[#FAFAF9] group-hover:text-[#00D4FF] group-hover:translate-x-3 transition-all duration-200">
                      {link.name}
                    </span>
                    <ArrowUpRight 
                      className="opacity-0 group-hover:opacity-100 text-[#00D4FF] -translate-y-2 group-hover:translate-y-0 transition-all duration-200 self-center" 
                      size={32} 
                    />
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Overlay Bottom Footer */}
            <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-xs text-white/60">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div>
                  <span className="block text-[10px] uppercase text-[#00D4FF] tracking-wider mb-1">LOCALIZAÇÃO</span>
                  <span className="text-white">Brasília, Distrito Federal</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#00D4FF] tracking-wider mb-1">E-MAIL</span>
                  <a href="mailto:mateusmirandaamaral@gmail.com" className="text-white hover:text-[#00D4FF] transition-colors">
                    mateusmirandaamaral@gmail.com
                  </a>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#00D4FF] tracking-wider mb-1">WHATSAPP</span>
                  <a href="https://wa.me/5561993413642" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00D4FF] transition-colors">
                    (61) 99341-3642
                  </a>
                </div>
              </div>

              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-6 py-3 bg-[#00D4FF] text-[#0B0B0C] font-archivo font-bold text-xs uppercase tracking-wider rounded-full hover:opacity-90 hover:scale-[1.025] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <Sparkles size={14} /> SOLICITAR ORÇAMENTO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
