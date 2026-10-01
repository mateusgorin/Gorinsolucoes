import React, { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface TextRevealHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'div';
  lines?: string[];
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TextRevealHeading: React.FC<TextRevealHeadingProps> = ({
  as = 'h2',
  lines,
  children,
  className = '',
  style,
}) => {
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(Boolean(reducedMotion));

  useEffect(() => {
    const fallback = window.setTimeout(() => setIsVisible(true), 1200);
    return () => window.clearTimeout(fallback);
  }, []);

  const displayLines = useMemo(() => {
    if (lines && lines.length > 0) return lines;
    if (typeof children === 'string') {
      return children.split(/<br\s*\/?>|\n/gi).map((s) => s.trim()).filter(Boolean);
    }
    if (Array.isArray(children)) {
      return children.map((c) => (typeof c === 'string' ? c : '')).filter(Boolean);
    }
    return children ? [String(children)] : [];
  }, [lines, children]);

  const Tag = as as any;

  return (
    <Tag className={className} style={style}>
      {displayLines.map((lineText, index) => (
        <span key={index} className="block py-0.5">
          <motion.span
            className="block text-reveal-line"
            initial={reducedMotion ? false : { y: 18, opacity: 0 }}
            animate={reducedMotion || isVisible ? { y: 0, opacity: 1 } : undefined}
            onViewportEnter={() => setIsVisible(true)}
            onAnimationStart={() => setIsVisible(true)}
            viewport={{ once: true, margin: '0px 0px -12% 0px' }}
            transition={{
              duration: 0.72,
              delay: index * 0.075,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {lineText}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};
