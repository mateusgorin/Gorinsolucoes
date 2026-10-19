import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export interface MagneticCtaProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: string;
  variant?: 'fill' | 'outline' | 'inverse';
  className?: string;
  target?: string;
  rel?: string;
  dataCursorIcon?: string;
}

export const MagneticCta: React.FC<MagneticCtaProps> = ({
  href,
  onClick,
  type,
  disabled,
  children,
  variant = 'fill',
  className = '',
  target,
  rel,
  dataCursorIcon,
}) => {
  const ref = useRef<any>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20 });
  const springY = useSpring(y, { stiffness: 260, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.24);
    y.set(relY * 0.24);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variantClass = variant === 'fill' ? '-fill' : variant === 'inverse' ? '-fill -inverse' : '-outline';

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        data-cursor-icon={dataCursorIcon}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        className={`CtaButton ${variantClass} ${className}`}
      >
        <span className="ripple">
          <span></span>
        </span>
        <span className="title">
          <span data-text={children}>{children}</span>
        </span>
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      data-cursor-icon={dataCursorIcon}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`CtaButton ${variantClass} ${className}`}
    >
      <span className="ripple">
        <span></span>
      </span>
      <span className="title">
        <span data-text={children}>{children}</span>
      </span>
    </motion.button>
  );
};
