import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="py-14 border-t border-white/10 bg-[#0B0B0C] text-center relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 max-w-6xl"
      >
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
          <div className="p-3 bg-white/5 border border-white/10 rounded-[6px]">
            <img 
              src="https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto/v1785030520/file-000000004e8871f59ac147d0e448ca11_fj6qzn.webp" 
              alt="Gorin Logo" 
              className="h-12 md:h-14 w-auto object-contain" 
              referrerPolicy="no-referrer"
            />
          </div>
           
          <span className="font-archivo font-black text-xl tracking-tight text-[#FAFAF9] uppercase">
            GORIN <span className="text-[#00D4FF]">SOLUÇÕES</span>
          </span>
        </div>
        
        <div className="flex justify-center items-center gap-3 text-xs font-mono text-[#71717A] mb-4">
          <span>VER.SIS.2.0</span>
          <span>//</span>
          <span>CONEXÃO SEGURA</span>
          <span>//</span>
          <span>BRASÍLIA, DF</span>
        </div>

        <p className="text-[#52525B] text-xs font-mono">
          © 2026 TODOS OS DIREITOS RESERVADOS.
        </p>
      </motion.div>
    </footer>
  );
};