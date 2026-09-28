import React, { useRef, useState, useEffect } from 'react';
import { useInView, animate } from 'framer-motion';

export interface StatCounterProps {
  value: string;
  className?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({ value, className = '' }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20px' });
  const [displayCount, setDisplayCount] = useState<number>(0);

  const numericMatch = value.match(/\d+/);
  if (!numericMatch) {
    return <span className={className}>{value}</span>;
  }

  const targetNumber = parseInt(numericMatch[0], 10);
  if (isNaN(targetNumber)) {
    return <span className={className}>{value}</span>;
  }

  const matchIndex = numericMatch.index ?? 0;
  const prefix = value.slice(0, matchIndex);
  const suffix = value.slice(matchIndex + numericMatch[0].length);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, targetNumber, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, targetNumber]);

  return (
    <span ref={containerRef} className={`inline-flex items-baseline ${className}`}>
      {prefix && <span>{prefix}</span>}
      <span>{isInView ? displayCount : 0}</span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
};
