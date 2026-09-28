import React from 'react';

export interface MeshStripesProps {
  intensity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const MeshStripes: React.FC<MeshStripesProps> = ({
  intensity = 1,
  className = '',
  style,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ opacity: intensity }}
      >
        <defs>
          <pattern id="meshStripesPattern" width="40" height="100" patternUnits="userSpaceOnUse">
            <line
              x1="20"
              y1="0"
              x2="20"
              y2="100"
              stroke="var(--accent-cyan-mid)"
              strokeWidth="2"
              opacity="0.15"
            />
          </pattern>
          <linearGradient id="stripesMaskGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>
          <mask id="meshStripesMask">
            <rect width="100%" height="100%" fill="url(#stripesMaskGrad)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#meshStripesPattern)"
          mask="url(#meshStripesMask)"
        />
      </svg>
    </div>
  );
};
