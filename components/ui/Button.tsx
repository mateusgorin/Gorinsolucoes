import React from 'react';
import { ArrowRight, Cpu } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glitch' | 'whatsapp';
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
  // Base styles for the cyber button
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-mono font-bold uppercase tracking-widest transition-all duration-200 group clip-corner focus:outline-none";
  
  const variants = {
    primary: "bg-cyber-primary text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]",
    secondary: "bg-cyber-secondary text-white hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(112,0,255,0.6)]",
    outline: "bg-transparent border border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]",
    glitch: "bg-cyber-accent text-white hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,0,60,0.6)]",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {icon && <Cpu className="w-4 h-4" />}
        {children}
        {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
      
      {/* Decorative corner accents */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white opacity-50 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white opacity-50 group-hover:opacity-100 transition-opacity" />
    </>
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
      <a 
        href={href} 
        onClick={handleSmoothScroll}
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} {...props}>
      {content}
    </button>
  );
};