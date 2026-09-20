import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    // Detect if user has scrolled over the dark sections (#contact or #projects)
    const darkSections = [
      document.getElementById('projects'),
      document.getElementById('contact')
    ].filter(Boolean) as HTMLElement[];

    if (darkSections.length === 0) return;

    const intersectingSet = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingSet.add(entry.target.id);
          } else {
            intersectingSet.delete(entry.target.id);
          }
        });
        setIsOverDark(intersectingSet.size > 0);
      },
      {
        root: null,
        rootMargin: '-10% 0px -70% 0px',
        threshold: 0.05
      }
    );

    darkSections.forEach(section => observer.observe(section));

    const handleScroll = () => {
      let overDark = false;
      darkSections.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 60) {
          overDark = true;
        }
      });
      setIsOverDark(overDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Control body scroll and Lenis when full-screen menu opens/closes
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

  const navLinks = [
    { name: 'INÍCIO', href: '#home', number: '00' },
    { name: 'SOBRE NÓS', href: '#about', number: '01' },
    { name: 'SERVIÇOS', href: '#services', number: '02' },
    { name: 'PORTFÓLIO', href: '#projects', number: '03' },
    { name: 'DEPOIMENTOS', href: '#testimonials', number: '04' },
    { name: 'CONTATO', href: '#contact', number: '05' },
    { name: 'BRIEFING DE PROJETO', href: '/projetos', number: '06' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        if ((window as any).__lenis) {
          (window as any).__lenis.scrollTo(element, { offset: -80 });
        } else {
          const headerOffset = 90;
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

  // Stagger variants for fullscreen menu items
  const menuContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.15
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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      y: 40,
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      <header className="fixed top-4 md:top-6 left-0 right-0 z-[100] px-4 pointer-events-none flex justify-center">
        <nav 
          className={`pointer-events-auto w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 backdrop-blur-md border ${
            isOverDark 
              ? 'bg-[#0B0B0C]/90 border-white/15 text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
              : 'bg-white/85 border-black/10 text-[#0B0B0C] shadow-[0_8px_30px_rgba(0,0,0,0.04)]'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a 
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center p-0.5 border border-black/10 bg-white">
                <img 
                  src="/images/mascot.webp" 
                  alt="Logo Gorin" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-archivo font-extrabold tracking-tight text-sm uppercase">
                GORIN <span className="font-normal opacity-60">SOLUÇÕES</span>
              </span>
            </a>

            {/* Desktop Quick Nav Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.slice(0, 4).map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-mono text-xs tracking-wider transition-colors cursor-pointer ${
                    isOverDark 
                      ? 'text-white/70 hover:text-white' 
                      : 'text-[#0B0B0C]/70 hover:text-[#0B0B0C]'
                  }`}
                >
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            {/* Action buttons on right: Contato + Fullscreen Menu Button (mobile only) */}
            <div className="flex items-center gap-2.5">
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="hidden sm:inline-flex px-4 py-2 rounded-full bg-[#00D4FF] text-[#0B0B0C] font-archivo font-bold text-xs tracking-tight uppercase hover:opacity-90 transition-all hover:scale-[1.025] active:scale-[0.98]"
              >
                CONTATO
              </a>

              {/* Menu Button - só aparece no mobile */}
              <button 
                onClick={() => setIsOpen(true)}
                aria-label="Abrir Menu"
                className={`flex md:hidden items-center gap-2 px-4 py-2 rounded-full border font-archivo font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.025] active:scale-[0.98] cursor-pointer ${
                  isOverDark 
                    ? 'border-white/20 text-white bg-white/5 hover:bg-white/15' 
                    : 'border-black/15 text-[#0B0B0C] bg-black/[0.03] hover:bg-black/10'
                }`}
              >
                <Menu size={15} className="text-[#00D4FF]" />
                <span>MENU</span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-Screen Menu Overlay (Cuberto Style: 100vw x 100vh, #0B0B0C background, #FAFAF9 text) */}
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
                <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center p-0.5 border border-white/20 bg-white">
                  <img 
                    src="/images/mascot.webp" 
                    alt="Logo Gorin" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-archivo font-extrabold tracking-tight text-base uppercase text-[#FAFAF9]">
                  GORIN <span className="text-[#00D4FF]">SOLUÇÕES</span>
                </span>
              </a>

              {/* Status Indicator */}
              <div className="hidden lg:flex items-center gap-2.5 px-3.5 py-1.5 border border-white/15 rounded-full bg-white/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-mono text-xs text-white/80 uppercase tracking-wider">
                  Disponível para projetos
                </span>
              </div>

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

            {/* Overlay Navigation Links with Giant Archivo Typography (48px to 96px) */}
            <motion.div 
              variants={menuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="py-8 md:py-12 flex flex-col space-y-2 sm:space-y-3"
            >
              {navLinks.map((link) => (
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
