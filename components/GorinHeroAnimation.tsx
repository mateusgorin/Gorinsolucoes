import React from 'react';
import { motion } from 'framer-motion';

interface GorinHeroAnimationProps {
  mascotSrc?: string;
}

// Clean, minimal hero visual. One entrance animation, one subtle idle float —
// no HUD overlays, no glitch loops, no randomized particles. The mascot is
// the brand asset; it should read as a logo, not a screensaver.
const GorinHeroAnimation: React.FC<GorinHeroAnimationProps> = ({ mascotSrc }) => {
  const primary = '#00D4FF';
  const secondary = '#7B2FBE';

  const DefaultMascot = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect x="25" y="35" width="50" height="40" rx="12" fill="#0e1218" stroke={primary} strokeWidth="1.5" />
      <rect x="30" y="40" width="40" height="25" rx="6" fill={`${primary}18`} stroke={primary} strokeWidth="1" />
      <rect x="40" y="48" width="6" height="2" rx="1" fill={primary} />
      <rect x="54" y="48" width="6" height="2" rx="1" fill={primary} />
      <line x1="50" y1="35" x2="50" y2="27" stroke={primary} strokeWidth="1.5" />
      <circle cx="50" cy="25" r="2.5" fill={secondary} />
      <rect x="35" y="75" width="8" height="9" rx="2" fill={primary} />
      <rect x="57" y="75" width="8" height="9" rx="2" fill={primary} />
    </svg>
  );

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
        {/* Soft static backdrop glow — no motion, just depth */}
        <div
          className="absolute w-[70%] h-[70%] rounded-full blur-[80px] opacity-20"
          style={{ background: `radial-gradient(circle, ${primary}, transparent 70%)` }}
        />
        <div
          className="absolute w-[55%] h-[55%] rounded-full blur-[70px] opacity-20 translate-x-10 translate-y-6"
          style={{ background: `radial-gradient(circle, ${secondary}, transparent 70%)` }}
        />

        {/* One thin static ring for depth, no rotation */}
        <div className="absolute w-[78%] h-[78%] border border-white/5 rounded-full" />

        {/* Mascot: fades/scales in once on load, then a single gentle float */}
        <motion.div
          className="relative w-40 h-40 md:w-56 md:h-56 z-10"
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="w-full h-full"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            {mascotSrc ? (
              <img src={mascotSrc} alt="Gorin Soluções" className="w-full h-full object-contain" />
            ) : (
              <DefaultMascot />
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GorinHeroAnimation;
