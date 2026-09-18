import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    // Detect if user has scrolled over the dark #contact section
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverDark(entry.isIntersecting);
      },
      {
        root: null,
        // Trigger when the top of the viewport reaches contact section
        rootMargin: '-10% 0px -70% 0px',
        threshold: 0.05
      }
    );

    observer.observe(contactSection);

    // Fallback scroll listener in case IntersectionObserver has threshold delays
    const handleScroll = () => {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        // If the contact section is covering the top navbar area
        if (rect.top <= 100 && rect.bottom >= 60) {
          setIsOverDark(true);
        } else if (rect.top > 100) {
          setIsOverDark(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'INÍCIO', href: '#home', number: '00' },
    { name: 'SOBRE NÓS', href: '#about', number: '01' },
    { name: 'SERVIÇOS', href: '#services', number: '02' },
    { name: 'PORTFÓLIO', href: '#projects', number: '03' }
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (isOpen) setIsOpen(false);

    const isProjetosPage = window.location.pathname === '/projetos' || window.location.pathname === '/projetos/';

    if (isProjetosPage) {
      window.location.href = '/' + href;
      return;
    }

    setTimeout(() => {
      scrollToSection(href);
    }, 100);
  };

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-[100] px-4 pointer-events-none flex justify-center">
      <nav 
        className={`pointer-events-auto w-full max-w-4xl rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 backdrop-blur-md border ${
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
                src="https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto/v1785030686/Picsart-26-03-23-23-16-05-033_fowe3s.webp" 
                alt="Logo Gorin" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-archivo font-extrabold tracking-tight text-sm uppercase">
              GORIN <span className="font-normal opacity-60">SOLUÇÕES</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-mono text-xs tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
                  isOverDark 
                    ? 'text-white/70 hover:text-white' 
                    : 'text-[#0B0B0C]/70 hover:text-[#0B0B0C]'
                }`}
              >
                <span className="text-[10px] text-[#00D4FF] font-semibold">{link.number}</span>
                <span>{link.name}</span>
              </a>
            ))}

            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2 rounded-full bg-[#00D4FF] text-[#0B0B0C] font-archivo font-bold text-xs tracking-tight uppercase hover:opacity-90 transition-opacity"
            >
              CONTATO
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
            className={`md:hidden flex items-center justify-center w-9 h-9 rounded-full border transition-colors ${
              isOverDark 
                ? 'border-white/20 text-white hover:bg-white/10' 
                : 'border-black/10 text-[#0B0B0C] hover:bg-black/5'
            }`}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[101] md:hidden pointer-events-auto"
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 inset-x-4 max-w-sm mx-auto bg-white border border-black/10 rounded-2xl p-6 shadow-2xl z-[105] md:hidden pointer-events-auto text-[#0B0B0C]"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between font-mono text-sm py-2.5 border-b border-black/5 text-[#0B0B0C] hover:text-[#00D4FF] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xs text-[#00D4FF]">{link.number}</span>
                      <span className="font-archivo font-bold tracking-tight">{link.name}</span>
                    </span>
                    <ArrowUpRight size={16} className="opacity-40" />
                  </a>
                ))}

                <div className="pt-2">
                  <a 
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="block w-full text-center py-3.5 rounded-lg bg-[#00D4FF] text-[#0B0B0C] font-archivo font-bold text-xs tracking-tight uppercase"
                  >
                    SOLICITAR ORÇAMENTO
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
