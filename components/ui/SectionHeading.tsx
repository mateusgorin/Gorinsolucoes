import React, { useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Split title into words or lines for masked text reveal
  const words = title.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.08,
        delayChildren: 0.05,
      }
    }
  };

  const wordVariants = {
    hidden: { 
      y: '110%', 
      opacity: 0 
    },
    visible: { 
      y: '0%', 
      opacity: 1, 
      transition: { 
        duration: isMobile ? 0.45 : 0.7, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  return (
    <div className={`mb-16 md:mb-20 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {/* Overline in JetBrains Mono */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: isMobile ? 0.35 : 0.5 }}
        className={`flex items-center gap-3 font-mono text-xs md:text-sm tracking-[0.25em] ${
          inverted ? 'text-white/60' : 'text-[#0B0B0C]/60'
        } uppercase mb-4 ${
          align === 'center' ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="w-2 h-2 bg-[#00D4FF]" />
        <span>{subtitle}</span>
      </motion.div>
      
      {/* Giant structural headline in Archivo with line-by-line / word reveal */}
      <motion.h2 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={`font-archivo font-black tracking-tighter ${
          inverted ? 'text-[#FAFAF9]' : 'text-[#0B0B0C]'
        } text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.95] uppercase`}
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden py-1 mr-[0.22em] align-top">
            <motion.span 
              variants={wordVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>

      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`mt-6 h-[1px] origin-left ${inverted ? 'bg-white/10' : 'bg-black/10'} w-full ${align === 'center' ? 'mx-auto' : ''}`} 
      />
    </div>
  );
};


