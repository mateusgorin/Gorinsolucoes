import React, { useMemo } from 'react';
import { m } from 'framer-motion';

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

  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag className={className} style={style}>
      {displayLines.map((lineText, index) => (
        <span key={index} className="reveal-line block overflow-hidden py-[0.08em] pb-[0.22em] -mb-[0.22em]">
          <m.span
            className="reveal-line-inner block"
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.8,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {lineText}
          </m.span>
        </span>
      ))}
    </Tag>
  );
};
