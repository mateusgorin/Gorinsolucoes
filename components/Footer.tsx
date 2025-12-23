
import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  // Fix: Use casted motion to bypass environment-specific type errors
  const m = motion as any;

  return (
    <footer className="py-8 border-t border-cyber-primary/20 bg-cyber-black text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-50" />
      
      <m.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
           {/* Logo Section - Matching Navbar Style */}
           <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-cyber-primary blur opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative border border-cyber-primary/50 p-2 bg-cyber-black clip-corner-sm transition-colors hover:border-cyber-primary">
                <img 
                  src="https://i.ibb.co/bjmD8HqG/file-000000004e8871f59ac147d0e448ca11.png" 
                  alt="Gorin Logo" 
                  className="w-10 h-10 object-contain" 
                />
              </div>
           </div>
           
          <span className="font-mono font-bold text-xl tracking-tighter text-white">
            GORIN<span className="text-cyber-primary">_SOLUÇÕES</span>
          </span>
        </div>
        
        <div className="flex justify-center items-center gap-4 text-xs font-mono text-gray-600 mb-4">
          <span>VER.SIS.2.0</span>
          <span>//</span>
          <span>CONEXÃO_SEGURA</span>
        </div>

        <p className="text-gray-500 text-xs mt-2 font-mono">
          © {new Date().getFullYear()} TODOS OS DIREITOS RESERVADOS.
        </p>
      </m.div>
    </footer>
  );
};
