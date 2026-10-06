import React from 'react';

interface MeshPanelProps {
  intensity?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const MeshPanel: React.FC<MeshPanelProps> = ({
  intensity = 1,
  children,
  className = '',
  style,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, var(--accent-cyan-deep) 0%, transparent 70%)',
          opacity: 0.25 * intensity,
        }}
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMax slice"
        style={{ opacity: intensity }}
      >
        <defs>
          <linearGradient id="meshA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent-cyan-mid)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--bg-dark)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="meshB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent-cyan-deep)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--bg-dark)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="0,500 260,140 520,500" fill="url(#meshA)" />
        <polygon points="180,500 460,60 780,500" fill="url(#meshB)" />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
