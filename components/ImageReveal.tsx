import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <div className={`relative overflow-hidden w-full h-full ${containerClassName}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        initial={{ scale: 1.22, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full h-full object-cover block will-change-transform ${className}`}
      />
      {children}
    </div>
  );
};
