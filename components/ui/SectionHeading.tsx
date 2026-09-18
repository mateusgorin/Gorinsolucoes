import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
  className?: string;
  inverted?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  align = 'left',
  className = '',
  inverted = false
}) => {
  return (
    <div className={`mb-16 md:mb-20 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {/* Overline in JetBrains Mono */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-3 font-mono text-xs md:text-sm tracking-[0.25em] ${
          inverted ? 'text-white/60' : 'text-[#0B0B0C]/60'
        } uppercase mb-4 ${
          align === 'center' ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="w-2 h-2 bg-[#00D4FF]" />
        <span>{subtitle}</span>
      </motion.div>
      
      {/* Giant structural headline in Archivo 800-900 */}
      <motion.h2 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-archivo font-black tracking-tighter ${
          inverted ? 'text-[#FAFAF9]' : 'text-[#0B0B0C]'
        } text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.95] uppercase`}
      >
        {title}
      </motion.h2>

      <div className={`mt-6 h-[1px] ${inverted ? 'bg-white/10' : 'bg-black/10'} w-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

