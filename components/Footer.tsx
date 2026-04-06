import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  // Fix: Use casted motion to bypass environment-specific type errors
  const m = motion as any;

  return (
    <footer className="py-8 border-t border-cyber-primary/20 bg-cyber-black text-center relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-50" />
      
      <m.div 
        initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
           {/* Logo Section - Matching Navbar Style */}
           <div className="relative group cursor-pointer">
              <div className="relative border border-cyber-primary/30 p-4 bg-transparent clip-corner transition-colors hover:border-cyber-primary">
                <img 
                  src="https://i.ibb.co/bjmD8HqG/file-000000004e8871f59ac147d0e448ca11.png" 
                  alt="Gorin Logo" 
                  className="h-16 md:h-18 w-auto object-contain" 
                />
              </div>
           </div>
           
          <span className="font-mono font-bold text-xl tracking-tighter text-cyber-white relative group cursor-pointer">
            GORIN <span className="text-cyber-secondary">SOLUÇÕES</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyber-primary transition-all duration-300 group-hover:w-full" />
          </span>
        </div>
        
        <div className="flex justify-center items-center gap-4 text-xs font-mono text-cyber-gray mb-4">
          <span>VER.SIS.2.0</span>
          <span>//</span>
          <span>CONEXÃO_SEGURA</span>
        </div>

        <p className="text-gray-500 text-xs mt-2 font-mono">
          © 2025 TODOS OS DIREITOS RESERVADOS.
        </p>
      </m.div>
    </footer>
  );
};