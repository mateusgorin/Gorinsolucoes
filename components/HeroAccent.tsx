import React from 'react';
import { motion } from 'framer-motion';

interface HeroAccentProps {
  mascotSrc?: string;
}

// Ambient background layer for the Hero — elements (code symbols, framed numbers,
// mascot) emerge continuously from behind the central headline, bursting fast
// from the center and then gliding smoothly/slowly toward the screen borders.
const HeroAccent: React.FC<HeroAccentProps> = ({ mascotSrc = 'https://res.cloudinary.com/dw5b0vlbz/image/upload/f_auto,q_auto/v1785030686/Picsart-26-03-23-23-16-05-033_fowe3s.webp' }) => {
  const primary = '#00D4FF';
  const secondary = '#7B2FBE';

  type Item =
    | { type: 'text'; content: string; size: string; color: string; angle: number; dist: number; duration: number; delay: number; rotate?: number }
    | { type: 'diamond'; content: string; angle: number; dist: number; duration: number; delay: number; rotate?: number }
    | { type: 'mascot'; angle: number; dist: number; duration: number; delay: number };

  const items: Item[] = [
    // Top-left quad
    { type: 'text', content: '</>', size: 'text-2xl md:text-3xl', color: primary, angle: 210, dist: 540, duration: 5.8, delay: 0 },
    { type: 'diamond', content: '200', angle: 225, dist: 480, duration: 6.4, delay: 0.8, rotate: 12 },
    { type: 'text', content: '<div>', size: 'text-base md:text-lg', color: '#8b96a5', angle: 195, dist: 600, duration: 5.5, delay: 1.8 },
    { type: 'text', content: 'API', size: 'text-xl md:text-2xl', color: primary, angle: 180, dist: 620, duration: 6.2, delay: 2.7, rotate: 6 },
    { type: 'mascot', angle: 240, dist: 520, duration: 6.8, delay: 3.6 },

    // Top quad
    { type: 'text', content: '99.9%', size: 'text-xl md:text-2xl', color: primary, angle: 270, dist: 440, duration: 5.6, delay: 0.5 },
    { type: 'diamond', content: '1.2s', angle: 285, dist: 470, duration: 6.1, delay: 1.9, rotate: -14 },
    { type: 'text', content: '#', size: 'text-3xl md:text-4xl', color: secondary, angle: 255, dist: 500, duration: 5.4, delay: 3.2 },
    { type: 'text', content: 'useState()', size: 'text-sm md:text-base', color: '#8b96a5', angle: 300, dist: 540, duration: 6.6, delay: 4.3, rotate: -3 },

    // Top-right quad
    { type: 'text', content: '{ }', size: 'text-2xl md:text-3xl', color: secondary, angle: 315, dist: 560, duration: 5.5, delay: 0.3, rotate: -8 },
    { type: 'diamond', content: 'ok', angle: 330, dist: 500, duration: 6.3, delay: 1.3, rotate: -6 },
    { type: 'text', content: '[ ]', size: 'text-2xl md:text-3xl', color: secondary, angle: 345, dist: 600, duration: 5.8, delay: 2.2 },
    { type: 'text', content: 'git push', size: 'text-sm md:text-base', color: '#8b96a5', angle: 15, dist: 640, duration: 6.9, delay: 3.3, rotate: -4 },
    { type: 'mascot', angle: 350, dist: 530, duration: 6.0, delay: 4.8 },

    // Bottom-right quad
    { type: 'text', content: 'npm run build', size: 'text-sm md:text-base', color: '#8b96a5', angle: 30, dist: 580, duration: 5.7, delay: 1.0 },
    { type: 'diamond', content: '404', angle: 45, dist: 520, duration: 6.5, delay: 2.4, rotate: -10 },
    { type: 'text', content: 'GET /', size: 'text-lg md:text-xl', color: secondary, angle: 60, dist: 550, duration: 5.5, delay: 3.8 },
    { type: 'diamond', content: '100%', angle: 75, dist: 500, duration: 6.2, delay: 1.6, rotate: 10 },

    // Bottom quad
    { type: 'text', content: 'SEO++', size: 'text-base md:text-lg', color: primary, angle: 90, dist: 460, duration: 5.8, delay: 0.6, rotate: 4 },
    { type: 'text', content: 'deploy ✓', size: 'text-sm md:text-base', color: '#8b96a5', angle: 105, dist: 480, duration: 6.1, delay: 2.9 },
    { type: 'mascot', angle: 120, dist: 490, duration: 6.6, delay: 2.1 },

    // Bottom-left quad
    { type: 'text', content: 'const x =>', size: 'text-base md:text-lg', color: '#8b96a5', angle: 135, dist: 560, duration: 5.6, delay: 0.8 },
    { type: 'diamond', content: '{ }', angle: 150, dist: 510, duration: 6.3, delay: 2.0, rotate: 8 },
    { type: 'text', content: '.tsx', size: 'text-lg md:text-xl', color: primary, angle: 165, dist: 590, duration: 5.4, delay: 3.5, rotate: 8 },
  ];

  // 2-stage cubic bezier: starts with a rapid burst out from center, then heavily decelerates to glide to the outer edges
  const twoStageEase = [0.08, 0.85, 0.15, 1.0] as const;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Central rotating wireframe diamond */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="20" y="20" width="60" height="60" stroke={primary} strokeWidth="0.5" fill="none" transform="rotate(45 50 50)" />
          <rect x="30" y="30" width="40" height="40" stroke={secondary} strokeWidth="0.5" fill="none" transform="rotate(45 50 50)" />
        </svg>
      </motion.div>

      {/* Dynamic outward-flying elements from center behind headline out to screen edges */}
      {items.map((item, i) => {
        const rad = (item.angle * Math.PI) / 180;
        const targetX = Math.cos(rad) * item.dist;
        const targetY = Math.sin(rad) * item.dist;
        const rotate = 'rotate' in item ? item.rotate ?? 0 : 0;

        if (item.type === 'mascot') {
          return (
            <motion.div
              key={`mascot-${i}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 z-0"
              animate={{
                x: [0, targetX],
                y: [0, targetY],
                opacity: [0, 0.75, 0.6, 0],
                scale: [0.4, 1, 1.1],
              }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: twoStageEase,
              }}
            >
              {mascotSrc ? (
                <img src={mascotSrc} alt="" className="w-full h-full object-contain" />
              ) : (
                <div className="w-full h-full rounded-md" style={{ background: `${primary}55` }} />
              )}
            </motion.div>
          );
        }

        if (item.type === 'diamond') {
          return (
            <motion.div
              key={`diamond-${i}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 md:w-13 md:h-13 border border-white/15 flex items-center justify-center font-mono text-[10px] md:text-xs text-cyber-gray z-0"
              style={{ transform: `rotate(${rotate}deg)` }}
              animate={{
                x: [0, targetX],
                y: [0, targetY],
                opacity: [0, 0.8, 0.6, 0],
                scale: [0.4, 1, 1.05],
              }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: twoStageEase,
              }}
            >
              <span style={{ transform: `rotate(${-rotate}deg)` }}>{item.content}</span>
            </motion.div>
          );
        }

        return (
          <motion.span
            key={`text-${i}`}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono ${item.size} whitespace-nowrap z-0`}
            style={{ color: item.color, transform: `rotate(${rotate}deg)` }}
            animate={{
              x: [0, targetX],
              y: [0, targetY],
              opacity: [0, 0.85, 0.65, 0],
              scale: [0.5, 1, 1.1],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: twoStageEase,
            }}
          >
            {item.content}
          </motion.span>
        );
      })}
    </div>
  );
};

export default HeroAccent;
