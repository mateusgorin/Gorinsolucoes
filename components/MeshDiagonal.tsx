import React from 'react';

export interface MeshDiagonalProps {
  intensity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const MeshDiagonal: React.FC<MeshDiagonalProps> = ({
  intensity = 1,
  className = '',
  style,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 350"
        preserveAspectRatio="none"
        style={{ opacity: intensity }}
      >
        <defs>
          <linearGradient id="meshDiagGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--accent-cyan-deep)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Three diagonal bands at 45 degrees crossing from bottom-left to top-right */}
        <polygon points="0,350 50,350 320,0 240,0" fill="url(#meshDiagGrad)" />
        <polygon points="100,350 180,350 450,0 370,0" fill="url(#meshDiagGrad)" />
        <polygon points="230,350 310,350 500,100 500,0 490,0" fill="url(#meshDiagGrad)" />
      </svg>
    </div>
  );
};
