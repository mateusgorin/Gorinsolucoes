import React from 'react';

interface CtaPrismArtworkProps {
  className?: string;
  intensity?: number;
}

export const CtaPrismArtwork: React.FC<CtaPrismArtworkProps> = ({
  className = '',
  intensity = 0.65,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute inset-0 w-full h-full overflow-hidden flex items-start justify-center ${className}`}
      style={{ zIndex: 0 }}
    >
      {/* Subtle Ambient Depth / Whisper of Cyan-Navy Atmosphere */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 'min(1250px, 100vw)',
          height: '600px',
          background: 'radial-gradient(ellipse 65% 50% at 50% 25%, rgba(0, 212, 255, 0.08) 0%, rgba(2, 100, 160, 0.04) 40%, rgba(2, 12, 25, 0.02) 65%, transparent 85%)',
          filter: 'blur(40px)',
          opacity: intensity,
        }}
      />

      {/* Main Faceted 3D Diamond / Pyramid Sculpture SVG — Expansive yet perfectly unclipped */}
      <svg
        className="w-full h-full pointer-events-none"
        viewBox="0 -35 1400 950"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
        style={{ opacity: intensity }}
      >
        <defs>
          {/* Subtle Linear Gradients for Left Facets (Darker / Ambient side) */}
          <linearGradient id="discLeft1" x1="700" y1="60" x2="160" y2="520" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.05" />
            <stop offset="40%" stopColor="#031528" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#010710" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="discLeft2" x1="700" y1="140" x2="260" y2="540" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.07" />
            <stop offset="45%" stopColor="#041b33" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#010914" stopOpacity="0.45" />
          </linearGradient>

          <linearGradient id="discLeft3" x1="700" y1="220" x2="360" y2="560" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.09" />
            <stop offset="50%" stopColor="#05213f" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#020b18" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="discLeft4" x1="700" y1="300" x2="470" y2="580" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.1" />
            <stop offset="55%" stopColor="#06274a" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#020d1c" stopOpacity="0.35" />
          </linearGradient>

          <linearGradient id="discLeft5" x1="700" y1="380" x2="580" y2="600" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#082d54" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#020e20" stopOpacity="0.3" />
          </linearGradient>

          {/* Subtle Linear Gradients for Right Facets (Soft Specular Sheen) */}
          <linearGradient id="discRight1" x1="700" y1="60" x2="1240" y2="520" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.1" />
            <stop offset="40%" stopColor="#05223e" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#010a17" stopOpacity="0.55" />
          </linearGradient>

          <linearGradient id="discRight2" x1="700" y1="140" x2="1140" y2="540" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.12" />
            <stop offset="45%" stopColor="#06294b" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#010c1c" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="discRight3" x1="700" y1="220" x2="1040" y2="560" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.14" />
            <stop offset="50%" stopColor="#083057" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#020f22" stopOpacity="0.45" />
          </linearGradient>

          <linearGradient id="discRight4" x1="700" y1="300" x2="930" y2="580" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.16" />
            <stop offset="55%" stopColor="#0a3763" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#021126" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="discRight5" x1="700" y1="380" x2="820" y2="600" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#0d3f70" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#03132c" stopOpacity="0.35" />
          </linearGradient>

          {/* Delicate Hairline Stroke Gradients */}
          <linearGradient id="strokeDiscreteOuter" x1="700" y1="60" x2="700" y2="920" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.35" />
            <stop offset="35%" stopColor="#00D4FF" stopOpacity="0.18" />
            <stop offset="70%" stopColor="#0284c7" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="strokeDiscreteMid" x1="700" y1="140" x2="700" y2="880" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
            <stop offset="40%" stopColor="#00D4FF" stopOpacity="0.14" />
            <stop offset="80%" stopColor="#0284c7" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="strokeDiscreteInner" x1="700" y1="220" x2="700" y2="820" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="25%" stopColor="#00D4FF" stopOpacity="0.22" />
            <stop offset="65%" stopColor="#00D4FF" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
          </linearGradient>

          {/* Central Vertical Spine / Seam Line */}
          <linearGradient id="ridgeDiscrete" x1="700" y1="60" x2="700" y2="920" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="15%" stopColor="#00D4FF" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.18" />
            <stop offset="80%" stopColor="#0284c7" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
          </linearGradient>

          {/* Soft Bottom Fadeout Mask */}
          <linearGradient id="bottomFadeMaskDiscrete" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <mask id="prismMaskDiscrete">
            <rect x="0" y="-50" width="1400" height="1050" fill="url(#bottomFadeMaskDiscrete)" />
          </mask>
        </defs>

        <g mask="url(#prismMaskDiscrete)">
          {/* ==============================================================
              TIER 1 (Outermost Facet Layer)
             ============================================================== */}
          <polygon
            points="700,60 160,520 700,920"
            fill="url(#discLeft1)"
          />
          <polygon
            points="700,60 1240,520 700,920"
            fill="url(#discRight1)"
          />
          <polygon
            points="700,60 160,520 700,920 1240,520"
            stroke="url(#strokeDiscreteOuter)"
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* ==============================================================
              TIER 2
             ============================================================== */}
          <polygon
            points="700,140 260,540 700,880"
            fill="url(#discLeft2)"
          />
          <polygon
            points="700,140 1140,540 700,880"
            fill="url(#discRight2)"
          />
          <polygon
            points="700,140 260,540 700,880 1140,540"
            stroke="url(#strokeDiscreteMid)"
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* Diagonal Struts Tier 1 - 2 */}
          <line x1="160" y1="520" x2="260" y2="540" stroke="#00D4FF" strokeOpacity="0.1" strokeWidth="0.8" />
          <line x1="1240" y1="520" x2="1140" y2="540" stroke="#00D4FF" strokeOpacity="0.14" strokeWidth="0.8" />

          {/* ==============================================================
              TIER 3
             ============================================================== */}
          <polygon
            points="700,220 360,560 700,840"
            fill="url(#discLeft3)"
          />
          <polygon
            points="700,220 1040,560 700,840"
            fill="url(#discRight3)"
          />
          <polygon
            points="700,220 360,560 700,840 1040,560"
            stroke="url(#strokeDiscreteMid)"
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* Diagonal Struts Tier 2 - 3 */}
          <line x1="260" y1="540" x2="360" y2="560" stroke="#00D4FF" strokeOpacity="0.11" strokeWidth="0.8" />
          <line x1="1140" y1="540" x2="1040" y2="560" stroke="#00D4FF" strokeOpacity="0.15" strokeWidth="0.8" />

          {/* ==============================================================
              TIER 4
             ============================================================== */}
          <polygon
            points="700,300 470,580 700,800"
            fill="url(#discLeft4)"
          />
          <polygon
            points="700,300 930,580 700,800"
            fill="url(#discRight4)"
          />
          <polygon
            points="700,300 470,580 700,800 930,580"
            stroke="url(#strokeDiscreteInner)"
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* Diagonal Struts Tier 3 - 4 */}
          <line x1="360" y1="560" x2="470" y2="580" stroke="#00D4FF" strokeOpacity="0.12" strokeWidth="0.8" />
          <line x1="1040" y1="560" x2="930" y2="580" stroke="#00D4FF" strokeOpacity="0.16" strokeWidth="0.8" />

          {/* ==============================================================
              TIER 5 (Inner Core)
             ============================================================== */}
          <polygon
            points="700,380 580,600 700,760"
            fill="url(#discLeft5)"
          />
          <polygon
            points="700,380 820,600 700,760"
            fill="url(#discRight5)"
          />
          <polygon
            points="700,380 580,600 700,760 820,600"
            stroke="url(#strokeDiscreteInner)"
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* Diagonal Struts Tier 4 - 5 */}
          <line x1="470" y1="580" x2="580" y2="600" stroke="#00D4FF" strokeOpacity="0.12" strokeWidth="0.8" />
          <line x1="930" y1="580" x2="820" y2="600" stroke="#00D4FF" strokeOpacity="0.16" strokeWidth="0.8" />

          {/* Subtle Accent Rays */}
          <line x1="700" y1="60" x2="360" y2="560" stroke="#00D4FF" strokeOpacity="0.06" strokeWidth="0.75" />
          <line x1="700" y1="60" x2="1040" y2="560" stroke="#00D4FF" strokeOpacity="0.08" strokeWidth="0.75" />
          <line x1="700" y1="60" x2="470" y2="580" stroke="#00D4FF" strokeOpacity="0.07" strokeWidth="0.75" />
          <line x1="700" y1="60" x2="930" y2="580" stroke="#00D4FF" strokeOpacity="0.09" strokeWidth="0.75" />

          {/* ==============================================================
              VERTICAL CENTRAL RIDGE
             ============================================================== */}
          <line
            x1="700"
            y1="60"
            x2="700"
            y2="920"
            stroke="url(#ridgeDiscrete)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Discreet Apex Tip */}
          <circle cx="700" cy="60" r="2" fill="#ffffff" fillOpacity="0.5" />
        </g>
      </svg>
    </div>
  );
};
