import React from 'react';
import { motion } from 'framer-motion';

interface HeroAccentProps {
  mascotSrc?: string;
}

// Ambient background layer for the Hero — ~26 small elements (code symbols,
// framed numbers, the mascot) scattered around, each fading in/out on its
// own fast, staggered timeline. Delays are spread across ~30s total so the
// mix keeps changing before any obvious repeat, but each individual fade is
// quick and a bit larger/bolder than before, so the layer reads as busier.
const HeroAccent: React.FC<HeroAccentProps> = ({ mascotSrc }) => {
  const primary = '#00D4FF';
  const secondary = '#7B2FBE';

  type Item =
    | { type: 'text'; content: string; top: string; left: string; size: string; rotate?: number; color: string }
    | { type: 'diamond'; content: string; top: string; left: string; rotate?: number }
    | { type: 'mascot'; top: string; left: string };

  const items: Item[] = [
    { type: 'text', content: '</>', top: '14%', left: '10%', size: 'text-3xl', color: primary },
    { type: 'text', content: '{ }', top: '22%', left: '82%', size: 'text-2xl', color: secondary, rotate: -8 },
    { type: 'text', content: 'const x =>', top: '68%', left: '6%', size: 'text-base', color: '#8b96a5' },
    { type: 'text', content: 'npm run build', top: '78%', left: '72%', size: 'text-sm', color: '#8b96a5' },
    { type: 'text', content: '99.9%', top: '10%', left: '58%', size: 'text-xl', color: primary },
    { type: 'text', content: '[ ]', top: '40%', left: '92%', size: 'text-3xl', color: secondary },
    { type: 'text', content: 'SEO++', top: '85%', left: '30%', size: 'text-base', color: primary, rotate: 4 },
    { type: 'text', content: '<div>', top: '30%', left: '4%', size: 'text-base', color: '#8b96a5' },
    { type: 'text', content: 'git push', top: '55%', left: '85%', size: 'text-sm', color: '#8b96a5', rotate: -4 },
    { type: 'text', content: '#', top: '6%', left: '34%', size: 'text-4xl', color: secondary },
    { type: 'text', content: 'API', top: '48%', left: '4%', size: 'text-xl', color: primary, rotate: 6 },
    { type: 'text', content: 'deploy ✓', top: '88%', left: '55%', size: 'text-sm', color: '#8b96a5' },
    { type: 'text', content: 'useState()', top: '5%', left: '80%', size: 'text-sm', color: '#8b96a5', rotate: -3 },
    { type: 'text', content: 'GET /', top: '62%', left: '95%', size: 'text-lg', color: secondary },
    { type: 'text', content: '.tsx', top: '92%', left: '12%', size: 'text-lg', color: primary, rotate: 8 },
    { type: 'text', content: 'CI/CD', top: '35%', left: '48%', size: 'text-sm', color: '#8b96a5' },
    { type: 'diamond', content: '200', top: '20%', left: '20%', rotate: 12 },
    { type: 'diamond', content: '404', top: '72%', left: '88%', rotate: -10 },
    { type: 'diamond', content: '{ }', top: '48%', left: '14%', rotate: 8 },
    { type: 'diamond', content: 'ok', top: '15%', left: '72%', rotate: -6 },
    { type: 'diamond', content: 'v2', top: '58%', left: '40%', rotate: 5 },
    { type: 'diamond', content: '1.2s', top: '8%', left: '46%', rotate: -14 },
    { type: 'diamond', content: '100%', top: '80%', left: '82%', rotate: 10 },
    { type: 'mascot', top: '60%', left: '18%' },
    { type: 'mascot', top: '25%', left: '88%' },
    { type: 'mascot', top: '90%', left: '46%' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Slow-rotating wireframe diamond, centered, very subtle */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="20" y="20" width="60" height="60" stroke={primary} strokeWidth="0.5" fill="none" transform="rotate(45 50 50)" />
          <rect x="30" y="30" width="40" height="40" stroke={secondary} strokeWidth="0.5" fill="none" transform="rotate(45 50 50)" />
        </svg>
      </motion.div>

      {/* Fine sparkle particles — a bit bigger and quicker */}
      {[
        { top: '18%', left: '12%' }, { top: '30%', left: '85%' }, { top: '68%', left: '8%' },
        { top: '75%', left: '90%' }, { top: '12%', left: '55%' }, { top: '85%', left: '48%' },
        { top: '50%', left: '25%' }, { top: '42%', left: '70%' },
      ].map((p, i) => (
        <motion.span
          key={`spark-${i}`}
          className="absolute rounded-full bg-cyber-primary"
          style={{ top: p.top, left: p.left, width: 3, height: 3 }}
          animate={{ opacity: [0.15, 0.6, 0.15] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
        />
      ))}

      {/* Wandering symbols/numbers/mascot — quicker fades, staggered across ~30s */}
      {items.map((item, i) => {
        const duration = 4 + (i % 4) * 0.7; // 4s..6.1s per item — snappier than before
        const delay = i * 1.15; // 26 items * 1.15 ≈ 30s spread before the mix repeats
        const rotate = 'rotate' in item ? item.rotate ?? 0 : 0;

        if (item.type === 'mascot') {
          return (
            <motion.div
              key={`mascot-${i}`}
              className="absolute w-9 h-9"
              style={{ top: item.top, left: item.left }}
              animate={{ opacity: [0, 0.4, 0.4, 0], y: [0, -12, -12, -20] }}
              transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
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
              className="absolute w-12 h-12 border border-white/10 flex items-center justify-center font-mono text-[10px] text-cyber-gray"
              style={{ top: item.top, left: item.left, transform: `rotate(${rotate}deg)` }}
              animate={{ opacity: [0, 0.5, 0.5, 0] }}
              transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span style={{ transform: `rotate(${-rotate}deg)` }}>{item.content}</span>
            </motion.div>
          );
        }

        return (
          <motion.span
            key={`text-${i}`}
            className={`absolute font-mono ${item.size}`}
            style={{ top: item.top, left: item.left, color: item.color, transform: `rotate(${rotate}deg)` }}
            animate={{ opacity: [0, 0.6, 0.6, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            {item.content}
          </motion.span>
        );
      })}
    </div>
  );
};

export default HeroAccent;
