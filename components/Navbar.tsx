import React, { useState, useEffect } from 'react';
import { MoreVertical, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const m = motion as any;

  useEffect(() => {
    const handleWindowScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const navLinks = [
    { name: 'INÍCIO', href: '#home' },
    { name: 'SOBRE NÓS', href: '#about' },
    { name: 'SERVIÇOS', href: '#services' },
    { name: 'PORTFÓLIO', href: '#projects' }
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
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

    // Pequeno delay para permitir o início do fechamento da animação
    setTimeout(() => {
      scrollToSection(href);
    }, 150);
  };

  // Variantes para animação em cascata dos itens do menu
  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 border-b ${scrolled ? 'bg-cyber-black/90 backdrop-blur-md border-cyber-primary/20 py-3' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <m.a 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            href="#home"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 cursor-pointer" 
          >
            <div className="relative w-10 h-10 flex items-center justify-center bg-cyber-primary/10 border border-cyber-primary/40 clip-corner-sm group-hover:bg-cyber-primary/20 transition-all p-1">
               <img 
                 src="https://i.ibb.co/bjmD8HqG/file-000000004e8871f59ac147d0e448ca11.png" 
                 alt="Logo Gorin" 
                 className="w-full h-full object-contain"
               />
            </div>
            
            <span className="font-mono font-bold text-white tracking-[0.15em] text-base group-hover:text-cyber-primary transition-colors">
              GORIN <span className="text-cyber-secondary">SOLUÇÕES</span>
            </span>
          </m.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, link.href)}
                className="font-mono text-[11px] text-gray-400 hover:text-cyber-primary tracking-widest uppercase transition-colors relative group cursor-pointer"
              >
                <span className="text-cyber-secondary opacity-0 group-hover:opacity-100 transition-opacity mr-1">&gt;</span>
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, '#contact')}
              className="px-5 py-2 bg-cyber-primary/10 border border-cyber-primary/50 text-cyber-primary font-mono text-[11px] hover:bg-cyber-primary hover:text-black transition-all clip-corner-sm font-bold tracking-widest"
            >
              CONTATO
            </a>
          </div>

          {/* Mobile Menu Button - Styled */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-cyber-primary border border-cyber-primary/20 bg-cyber-primary/5 hover:bg-cyber-primary/10 transition-colors z-[110] relative clip-corner-sm"
          >
            {isOpen ? <X size={20} /> : <MoreVertical size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Refined design */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101] md:hidden"
            />
            
            {/* Slide-in Menu Panel */}
            <m.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 w-[80%] max-w-sm h-screen bg-cyber-black border-l border-cyber-primary/20 z-[105] md:hidden shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col pt-24"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <div className="font-mono text-8xl text-cyber-primary select-none">GORIN</div>
              </div>

              <div className="flex flex-col px-6 space-y-2 relative z-10">
                {navLinks.map((link) => (
                  <m.a
                    key={link.name}
                    variants={itemVariants}
                    href={link.href}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between font-mono text-sm text-gray-400 hover:text-white py-4 border-b border-white/5 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-cyber-primary/30 rounded-full group-hover:bg-cyber-primary group-hover:animate-pulse" />
                      <span className="tracking-[0.2em]">{link.name}</span>
                    </div>
                    <ChevronRight size={14} className="text-cyber-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </m.a>
                ))}
                
                <m.div variants={itemVariants} className="pt-6">
                  <a 
                    href="#contact"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, '#contact')}
                    className="block w-full text-center py-4 bg-cyber-primary text-black font-mono font-bold text-xs clip-corner tracking-[0.2em] uppercase hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                  >
                    SOLICITAR ORÇAMENTO
                  </a>
                </m.div>
              </div>
              
              <div className="mt-auto p-8 font-mono space-y-4">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                   <span className="text-[10px] text-gray-500 uppercase tracking-widest">Servidores Online</span>
                </div>
                <div className="text-[10px] text-cyber-primary/30 leading-none">
                   AUTH_ID: GORIN-2025-BR<br/>
                   ESTADO: BRASÍLIA/DF
                </div>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};