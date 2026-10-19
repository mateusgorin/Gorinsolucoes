import React from 'react';

interface CtaPrismArtworkProps {
  className?: string;
  intensity?: number;
}

export const CtaPrismArtwork: React.FC<CtaPrismArtworkProps> = ({
  className = '',
  intensity = 0.9,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute inset-0 w-full h-full overflow-hidden flex items-start justify-center ${className}`}
      style={{ zIndex: 0 }}
    >
      {/* Soft Top Fade-in Gradient to eliminate any harsh dividing line with the section above */}
      <div
        className="absolute top-0 left-0 right-0 h-48 md:h-72 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0.92) 25%, rgba(0, 0, 0, 0.5) 60%, transparent 100%)',
        }}
      />

      {/* Luminous Top Radial Glow Originating from the Peak */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 'min(1400px, 100vw)',
          height: '700px',
          background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(0, 212, 255, 0.22) 0%, rgba(2, 132, 199, 0.12) 35%, rgba(3, 21, 40, 0.05) 65%, transparent 85%)',
          filter: 'blur(35px)',
          opacity: intensity,
        }}
      />

      {/* Monumental 3D Faceted Prism SVG - Matches the exact peak-to-corners scale */}
      <svg
        className="w-full h-full pointer-events-none absolute top-0 left-0"
        viewBox="0 0 1600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ opacity: intensity }}
      >
        <defs>
          {/* Glow filter for the apex point */}
          <filter id="apexGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
          </filter>

          {/* Left Facet Gradient (Deep Atmospheric Tech Blue) */}
          <linearGradient id="prismLeftMajor" x1="800" y1="0" x2="0" y2="900" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.25" />
            <stop offset="30%" stopColor="#03203f" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#021020" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00050d" stopOpacity="0.8" />
          </linearGradient>

          {/* Right Facet Gradient (Specular Sheen) */}
          <linearGradient id="prismRightMajor" x1="800" y1="0" x2="1600" y2="900" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.35" />
            <stop offset="30%" stopColor="#073059" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#031526" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#010712" stopOpacity="0.85" />
          </linearGradient>

          {/* Inner Tier Gradients */}
          <linearGradient id="prismLeftTier2" x1="800" y1="120" x2="200" y2="900" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#052749" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#020e1a" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="prismRightTier2" x1="800" y1="120" x2="1400" y2="900" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#093866" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#031424" stopOpacity="0.55" />
          </linearGradient>

          <linearGradient id="prismLeftTier3" x1="800" y1="240" x2="400" y2="900" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#07315c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#021122" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="prismRightTier3" x1="800" y1="240" x2="1200" y2="900" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.28" />
            <stop offset="50%" stopColor="#0c437a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#041a33" stopOpacity="0.45" />
          </linearGradient>

          <linearGradient id="prismLeftTier4" x1="800" y1="360" x2="560" y2="900" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#083a6d" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#03162b" stopOpacity="0.35" />
          </linearGradient>

          <linearGradient id="prismRightTier4" x1="800" y1="360" x2="1040" y2="900" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.32" />
            <stop offset="60%" stopColor="#0f4e8e" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#051f3d" stopOpacity="0.4" />
          </linearGradient>

          {/* Stroke Beam Gradients */}
          <linearGradient id="strokeMajorBeam" x1="800" y1="0" x2="800" y2="900" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="15%" stopColor="#00D4FF" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#00D4FF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="strokeInnerBeam" x1="800" y1="120" x2="800" y2="900" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.05" />
          </linearGradient>

          {/* Central Ridge Highlight */}
          <linearGradient id="ridgeBeam" x1="800" y1="0" x2="800" y2="900" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="15%" stopColor="#00D4FF" stopOpacity="0.8" />
            <stop offset="55%" stopColor="#00D4FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* ==============================================================
            TIER 1 (OUTERMOST MONUMENTAL PYRAMID — MATCHES ORANGE LINES)
           ============================================================== */}
        <polygon
          points="800,0 0,900 800,900"
          fill="url(#prismLeftMajor)"
        />
        <polygon
          points="800,0 1600,900 800,900"
          fill="url(#prismRightMajor)"
        />

        {/* Outer Slope Boundary Strokes (the 2 prominent diagonal lines) */}
        <line
          x1="800"
          y1="0"
          x2="0"
          y2="900"
          stroke="url(#strokeMajorBeam)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="800"
          y1="0"
          x2="1600"
          y2="900"
          stroke="url(#strokeMajorBeam)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Soft Glow Halos along outer lines */}
        <line
          x1="800"
          y1="0"
          x2="0"
          y2="900"
          stroke="#00D4FF"
          strokeWidth="6"
          strokeOpacity="0.25"
        />
        <line
          x1="800"
          y1="0"
          x2="1600"
          y2="900"
          stroke="#00D4FF"
          strokeWidth="6"
          strokeOpacity="0.25"
        />

        {/* ==============================================================
            TIER 2 (INNER PRISM FACET 2)
           ============================================================== */}
        <polygon
          points="800,120 200,900 800,900"
          fill="url(#prismLeftTier2)"
        />
        <polygon
          points="800,120 1400,900 800,900"
          fill="url(#prismRightTier2)"
        />
        <line
          x1="800"
          y1="120"
          x2="200"
          y2="900"
          stroke="url(#strokeInnerBeam)"
          strokeWidth="1.6"
        />
        <line
          x1="800"
          y1="120"
          x2="1400"
          y2="900"
          stroke="url(#strokeInnerBeam)"
          strokeWidth="1.6"
        />

        {/* ==============================================================
            TIER 3 (INNER PRISM FACET 3)
           ============================================================== */}
        <polygon
          points="800,240 400,900 800,900"
          fill="url(#prismLeftTier3)"
        />
        <polygon
          points="800,240 1200,900 800,900"
          fill="url(#prismRightTier3)"
        />
        <line
          x1="800"
          y1="240"
          x2="400"
          y2="900"
          stroke="url(#strokeInnerBeam)"
          strokeWidth="1.4"
        />
        <line
          x1="800"
          y1="240"
          x2="1200"
          y2="900"
          stroke="url(#strokeInnerBeam)"
          strokeWidth="1.4"
        />

        {/* ==============================================================
            TIER 4 (INNER PRISM FACET 4)
           ============================================================== */}
        <polygon
          points="800,360 580,900 800,900"
          fill="url(#prismLeftTier4)"
        />
        <polygon
          points="800,360 1020,900 800,900"
          fill="url(#prismRightTier4)"
        />
        <line
          x1="800"
          y1="360"
          x2="580"
          y2="900"
          stroke="url(#strokeInnerBeam)"
          strokeWidth="1.2"
        />
        <line
          x1="800"
          y1="360"
          x2="1020"
          y2="900"
          stroke="url(#strokeInnerBeam)"
          strokeWidth="1.2"
        />

        {/* ==============================================================
            FACET LATTICE / CROSS STRUTS (3D Isometric Dimension)
           ============================================================== */}
        {/* Horizontal Tier Connecting Latitude Lines */}
        <line x1="160" y1="720" x2="1440" y2="720" stroke="#00D4FF" strokeWidth="0.8" strokeOpacity="0.18" />
        <line x1="320" y1="540" x2="1280" y2="540" stroke="#00D4FF" strokeWidth="0.8" strokeOpacity="0.22" />
        <line x1="480" y1="360" x2="1120" y2="360" stroke="#00D4FF" strokeWidth="0.8" strokeOpacity="0.26" />
        <line x1="640" y1="180" x2="960" y2="180" stroke="#00D4FF" strokeWidth="0.8" strokeOpacity="0.32" />

        {/* Diagonal Ray Connectors */}
        <line x1="800" y1="0" x2="200" y2="900" stroke="#00D4FF" strokeWidth="0.75" strokeOpacity="0.14" />
        <line x1="800" y1="0" x2="1400" y2="900" stroke="#00D4FF" strokeWidth="0.75" strokeOpacity="0.18" />
        <line x1="800" y1="0" x2="400" y2="900" stroke="#00D4FF" strokeWidth="0.75" strokeOpacity="0.14" />
        <line x1="800" y1="0" x2="1200" y2="900" stroke="#00D4FF" strokeWidth="0.75" strokeOpacity="0.18" />

        {/* ==============================================================
            CENTRAL VERTICAL RIDGE
           ============================================================== */}
        <line
          x1="800"
          y1="0"
          x2="800"
          y2="900"
          stroke="url(#ridgeBeam)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

      </svg>
    </div>
  );
};
