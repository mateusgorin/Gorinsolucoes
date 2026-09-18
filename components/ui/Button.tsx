import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  icon?: boolean;
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  fullWidth = false,
  href,
  className = '',
  ...props 
}) => {
  const m = motion as any;
  // Base styles for the cyber button
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3.5 font-archivo font-bold uppercase text-xs tracking-wider transition-all duration-200 group rounded-[4px] focus:outline-none cursor-pointer";

  const variants = {
    primary: "bg-[#00D4FF] text-[#0B0B0C] hover:bg-[#00D4FF]/90 shadow-sm",
    secondary: "bg-[#0B0B0C] text-[#FAFAF9] hover:bg-[#0B0B0C]/90 shadow-sm",
    outline: "bg-white border border-black/15 text-[#0B0B0C] hover:bg-black hover:text-white shadow-sm",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#25D366]/90 shadow-sm"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </span>
  );

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  if (href) {
    return (
      <m.a 
        href={href} 
        onClick={handleSmoothScroll}
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </m.a>
    );
  }

  return (
    <m.button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </m.button>
  );
};
