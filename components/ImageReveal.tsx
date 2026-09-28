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
        initial={{ scale: 1.05, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${className}`}
      />
      {children}
    </div>
  );
};
