import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
}

// Minimalist 2026 studio Magnetic CTA: solid cyan #00D4FF block, black text,
// subtle magnetic cursor attraction with spring physics.
const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  href, 
  onClick, 
  type = 'button', 
  children, 
  className = '' 
}) => {
  const ref = useRef<any>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    // Disable parallax/magnetic calculation on small screens (<768px)
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.22);
    y.set(relY * 0.28);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = `relative inline-flex items-center justify-center px-8 py-4 rounded-[6px] font-archivo font-bold text-sm tracking-tight bg-[#00D4FF] text-[#0B0B0C] transition-opacity hover:opacity-90 active:scale-[0.98] cursor-pointer ${className}`;

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        className={baseClasses}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;

