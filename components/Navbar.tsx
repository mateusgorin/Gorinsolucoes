import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScrollState = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScrollState, { passive: true });
    handleScrollState();

    // Dark sections: #home, #processo, #contato
    const checkDarkSection = () => {
      const darkSections = [
        document.getElementById('home'),
        document.getElementById('processo'),
        document.getElementById('contato')
      ].filter(Boolean) as HTMLElement[];

      let overDark = false;
      const navCenterY = 40; // approx navbar vertical center

      for (const el of darkSections) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= navCenterY && rect.bottom >= navCenterY) {
          overDark = true;
          break;
        }
      }

      setIsOverDark(overDark);
    };

    window.addEventListener('scroll', checkDarkSection, { passive: true });
    checkDarkSection();

    return () => {
      window.removeEventListener('scroll', handleScrollState);
      window.removeEventListener('scroll', checkDarkSection);
    };
  }, []);

  // Lock body scroll and Lenis when full-screen menu opens/closes
  useEffect(() => {
    const lenis = (window as any).__lenis;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    }

    return () => {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Serviços', href: '/servicos' },
    { name: 'Projetos', href: '/projetos' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        const lenis = (window as any).__lenis;
        if (lenis) {
          lenis.scrollTo(target, { offset: -20, duration: 1.1 });
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      window.location.href = href;
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (isOpen) setIsOpen(false);

    if (href === '/servicos') {
      if (window.location.pathname !== '/servicos') {
        window.history.pushState({}, '', '/servicos');
        window.dispatchEvent(new PopStateEvent('popstate'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href === '/projetos' || href === '/portfolio') {
      if (window.location.pathname !== '/projetos') {
        window.history.pushState({}, '', '/projetos');
        window.dispatchEvent(new PopStateEvent('popstate'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href === '/blog') {
      if (window.location.pathname !== '/blog') {
        window.history.pushState({}, '', '/blog');
        window.dispatchEvent(new PopStateEvent('popstate'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href === '/sobre') {
      if (window.location.pathname !== '/sobre') {
        window.history.pushState({}, '', '/sobre');
        window.dispatchEvent(new PopStateEvent('popstate'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href === '/contato' || href === '#contato') {
      if (window.location.pathname !== '/contato') {
        window.history.pushState({}, '', '/contato');
        window.dispatchEvent(new PopStateEvent('popstate'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href === '#home') {
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      setTimeout(() => {
        scrollToSection('#home');
      }, 100);
      return;
    }

    const isSubPage = window.location.pathname !== '/';
    if (isSubPage && href.startsWith('#')) {
      window.history.pushState({}, '', '/' + href);
      window.dispatchEvent(new PopStateEvent('popstate'));
      setTimeout(() => {
        scrollToSection(href);
      }, 150);
      return;
    }

    setTimeout(() => {
      scrollToSection(href);
    }, 120);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          hasScrolled
            ? isOverDark
              ? 'bg-[#0B0B0E]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
              : 'bg-[#F5F6FA]/90 backdrop-blur-md border-b border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
            : isOverDark
              ? 'bg-transparent text-[#F5F6FA]'
              : 'bg-transparent text-[#0B0B0E]'
        }`}
      >
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 py-4 md:py-5 flex items-center justify-between">
          
          {/* Logo: Pure Editorial Typography General Sans, Zero Mascot */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer select-none"
          >
            <div className="flex items-center font-display font-bold text-xl sm:text-2xl tracking-[-0.03em] select-none">
              <span className={`transition-colors ${
                isOverDark ? 'text-[#F5F6FA]' : 'text-[#0B0B0E]'
              }`}>
                GORIN
              </span>
              <span className="text-[#00D4FF] ml-0.5 font-bold">.</span>
            </div>
            <span className={`hidden sm:inline-block font-mono text-[10px] tracking-widest uppercase pl-2 border-l transition-colors ${
              isOverDark ? 'border-white/15 text-white/40' : 'border-black/15 text-black/40'
            }`}>
              BRASÍLIA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-sans text-sm font-medium tracking-normal transition-colors cursor-pointer relative group ${
                  isOverDark 
                    ? 'text-[#F5F6FA]/70 hover:text-[#F5F6FA]' 
                    : 'text-[#0B0B0E]/75 hover:text-[#0B0B0E]'
                }`}
              >
                <span>{link.name}</span>
                <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                  isOverDark ? 'bg-[#00D4FF]' : 'bg-[#0B0B0E]'
                }`} />
              </a>
            ))}

            {/* Solid Contact CTA Button */}
            <a 
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato')}
              className={`inline-flex items-center justify-center px-6 py-2.5 rounded-full font-display text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm ${
                isOverDark
                  ? 'bg-[#00D4FF] text-[#0B0B0E] hover:bg-[#3be0ff]'
                  : 'bg-[#0B0B0E] text-[#F5F6FA] hover:bg-[#1a1a20]'
              }`}
            >
              Fale com a gente
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-full border transition-colors cursor-pointer ${
                isOverDark 
                  ? 'border-white/15 text-[#F5F6FA] hover:bg-white/10' 
                  : 'border-black/10 text-[#0B0B0E] hover:bg-black/5'
              }`}
              aria-label="Abrir menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B0B0E] text-[#F5F6FA] flex flex-col justify-between px-6 pt-28 pb-10 md:hidden"
          >
            <div className="space-y-6">
              <p className="font-mono text-xs text-[#00D4FF] tracking-widest uppercase font-semibold">
                // Gorin Soluções · Navegação
              </p>
              <div className="flex flex-col space-y-5">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-display font-bold text-3xl text-[#F5F6FA] hover:text-[#00D4FF] transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="font-mono text-xs text-white/30">0{idx + 1}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <a
                href="#contato"
                onClick={(e) => handleNavClick(e, '#contato')}
                className="w-full inline-flex items-center justify-center py-4 rounded-full bg-[#00D4FF] text-[#0B0B0E] font-display font-bold text-sm tracking-wider uppercase shadow-md"
              >
                <span>Fale com a gente</span>
                <ArrowUpRight size={16} className="ml-1" />
              </a>
              <p className="font-mono text-xs text-center text-white/40">
                Brasília - DF · Desenvolvimento Web com IA
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
