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

  // Links otimizados para navegação clara e SEO
  const navLinks = [
    { name: 'INÍCIO', href: '#home' },
    { name: 'SOBRE NÓS', href: '#about' },
    { name: 'SERVIÇOS', href: '#services' },
    { name: 'PORTFÓLIO', href: '#projects' },
    { name: 'CONTATO', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-cyber-black/90 backdrop-blur-md border-cyber-primary/20 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a href="#" className="group flex items-center gap-3" aria-label="Gorin Soluções Home">
            {/* Logo Container */}
            <div className="relative w-12 h-12 flex items-center justify-center bg-cyber-primary/10 border border-cyber-primary/50 clip-corner-sm group-hover:bg-cyber-primary/20 transition-all p-1">
               <img 
                 src="https://i.ibb.co/bjmD8HqG/file-000000004e8871f59ac147d0e448ca11.png" 
                 alt="Logo Gorin Porquinho" 
                 className="w-full h-full object-contain"
               />
            </div>
            
            <span className="font-mono font-bold text-white tracking-widest text-lg group-hover:text-cyber-primary transition-colors">
              GORIN <span className="text-cyber-secondary">SOLUÇÕES</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-mono text-xs text-gray-400 hover:text-cyber-primary tracking-widest uppercase transition-colors relative group"
              >
                <span className="text-cyber-secondary opacity-0 group-hover:opacity-100 transition-opacity mr-1">&gt;</span>
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="px-4 py-2 bg-cyber-primary/10 border border-cyber-primary/50 text-cyber-primary font-mono text-xs hover:bg-cyber-primary hover:text-black transition-all clip-corner-sm"
            >
              SOLICITAR ORÇAMENTO
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cyber-primary p-2 hover:bg-cyber-primary/10 transition-colors"
            aria-label="Abrir Menu"
          >
            {isOpen ? <X size={24} /> : <MoreVertical size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-black border-b border-cyber-primary/20 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-mono text-sm text-gray-300 hover:text-cyber-primary border-l-2 border-transparent hover:border-cyber-primary pl-4 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};