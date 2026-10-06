import React from 'react';

export interface MeshRingsProps {
  radii?: number[];
  intensity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const MeshRings: React.FC<MeshRingsProps> = ({
  radii = [60, 120, 180, 240],
  intensity = 1,
  className = '',
  style,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 350"
        preserveAspectRatio="xMaxYMax meet"
        style={{ opacity: intensity }}
      >
        {radii.map((r, i) => {
          const step = radii.length > 1 ? i / (radii.length - 1) : 0;
          const op = 0.4 - step * 0.3; // 0.4 down to 0.1
          return (
            <circle
              key={i}
              cx="500"
              cy="350"
              r={r}
              fill="none"
              stroke="var(--accent-cyan-mid)"
              strokeWidth="1.5"
              opacity={Math.max(op, 0.08)}
            />
          );
        })}
      </svg>
    </div>
  );
};
