import React, { useState, useEffect } from 'react';
import { MoreVertical, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const navLinks = [
    { name: 'INÍCIO_SISTEMA', href: '#home' },
    { name: 'DADOS_SOBRE', href: '#about' },
    { name: 'SERVIÇOS_CORE', href: '#services' },
    { name: 'LOGS_PROJETOS', href: '#projects' },
    { name: 'COMUNICAÇÃO', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Previne comportamento padrão que pode falhar
    setIsOpen(false); // Fecha o menu imediatamente
    
    // Pequeno timeout para garantir que o menu feche visualmente antes/durante o scroll
    setTimeout(() => {
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
    }, 10);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/5 ${scrolled ? 'bg-cyber-black/90 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3 group cursor-pointer" onClick={(e) => handleScroll(e, '#home')}>
            <div className="relative">
              <div className="absolute inset-0 bg-cyber-primary blur opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative border border-cyber-primary/50 p-1 bg-cyber-black clip-corner-sm">
                <img 
                  src="https://i.ibb.co/bjmD8HqG/file-000000004e8871f59ac147d0e448ca11.png" 
                  alt="Gorin Logo" 
                  className="w-10 h-10 object-contain" 
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-2xl tracking-tighter text-white leading-none group-hover:text-cyber-primary transition-colors">
                GORIN
              </span>
              <span className="font-mono text-[10px] text-cyber-secondary tracking-widest">
                SOLUÇÕES
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="px-4 py-2 text-xs font-mono font-bold text-gray-400 hover:text-cyber-primary transition-colors relative group overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-cyber-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="ml-4 px-6 py-2 border border-cyber-primary/50 text-cyber-primary font-mono text-xs hover:bg-cyber-primary hover:text-black transition-all clip-corner-sm cursor-pointer"
            >
              INICIAR_CONTATO
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyber-primary p-2 border border-cyber-primary/30 clip-corner-sm hover:bg-cyber-primary/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <MoreVertical size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-slate border-b border-cyber-primary/20 overflow-hidden absolute w-full left-0 top-full shadow-2xl z-50"
          >
            <div className="px-4 py-8 space-y-4 shadow-2xl bg-cyber-black/95 backdrop-blur-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="block font-mono text-sm text-gray-300 hover:text-cyber-primary hover:pl-2 transition-all border-l-2 border-transparent hover:border-cyber-primary pl-4 py-2 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="block mt-6 text-center w-full py-3 bg-cyber-primary/10 border border-cyber-primary text-cyber-primary font-mono text-sm clip-corner-sm hover:bg-cyber-primary hover:text-black transition-colors cursor-pointer"
              >
                EXECUTAR_CONTATO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};