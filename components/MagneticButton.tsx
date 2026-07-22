import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

// The button nudges a few pixels toward the cursor on hover, then springs
// back on leave — the "magnetic CTA" detail from premium reference sites.
const MagneticButton: React.FC<MagneticButtonProps> = ({ href, children, className = '' }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.25);
    y.set(relY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`relative inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-sans font-semibold text-sm bg-cyber-primary text-black transition-colors hover:opacity-90 ${className}`}
    >
      {children}
    </motion.a>
  );
};

export default MagneticButton;
