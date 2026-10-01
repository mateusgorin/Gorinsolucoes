import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

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
        <span key={index} className="block overflow-hidden py-0.5">
          <motion.span
            className="block will-change-transform"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: index * 0.1,
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
