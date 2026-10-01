import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  children?: React.ReactNode;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  loading = 'lazy',
  decoding = 'async',
  children,
}) => {
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(Boolean(reducedMotion));

  useEffect(() => {
    const fallback = window.setTimeout(() => setIsVisible(true), 1400);
    return () => window.clearTimeout(fallback);
  }, []);

  return (
    <div className={`relative overflow-hidden w-full h-full image-reveal ${containerClassName}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        initial={reducedMotion ? false : { scale: 1.04, opacity: 0.86 }}
        animate={reducedMotion || isVisible ? { scale: 1, opacity: 1 } : undefined}
        onViewportEnter={() => setIsVisible(true)}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`image-reveal-media w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] ${className}`}
      />
      {children}
    </div>
  );
};
