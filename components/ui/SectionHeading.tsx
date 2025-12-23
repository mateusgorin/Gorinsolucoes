
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center' }) => {
  // Fix: Use casted motion to bypass environment-specific type errors
  const m = motion as any;

  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <m.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`inline-flex items-center gap-2 text-cyber-primary font-mono text-sm tracking-[0.2em] uppercase mb-2 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className="w-2 h-2 bg-cyber-primary animate-pulse" />
        {subtitle}
        <span className="w-8 h-[1px] bg-cyber-primary/50" />
      </m.div>
      
      <m.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white uppercase tracking-tighter text-glow"
      >
        {title}
      </m.h2>
      
      <m.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={`h-0.5 bg-gradient-to-r from-transparent via-cyber-secondary to-transparent mt-4 max-w-xs ${align === 'center' ? 'mx-auto' : ''}`} 
      />
    </div>
  );
};
