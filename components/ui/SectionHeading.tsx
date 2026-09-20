import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  title: string | string[];
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
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Extract visual lines: if already an array, or split by <br /> or \n if present, otherwise single complete line
  const lines: string[] = Array.isArray(title)
    ? title
    : typeof title === 'string'
    ? title.split(/<br\s*\/?>|\n/gi)
    : [String(title)];

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const lineSpans = el.querySelectorAll('.section-title-line');
      if (lineSpans.length > 0) {
        gsap.fromTo(
          lineSpans,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [title]);

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
      
      {/* Giant structural headline in Archivo with line-by-line reveal via GSAP */}
      <h2 
        ref={headingRef}
        className={`font-archivo font-black tracking-tighter ${
          inverted ? 'text-[#FAFAF9]' : 'text-[#0B0B0C]'
        } text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.95] uppercase`}
      >
        {lines.map((line, index) => (
          <div key={index} className="overflow-hidden py-1">
            <span className="block section-title-line">
              {line}
            </span>
          </div>
        ))}
      </h2>

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


