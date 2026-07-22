import React from 'react';
import { motion } from 'framer-motion';

interface HeroShowcaseProps {
  mascotSrc?: string;
}

// Hero visual: a browser mock-up that builds once on scroll-in, then plays a
// looping "product demo" — the mascot walks over to the CTA button, clicks
// it, the button confirms success, and it resets. Mascot is the actor inside
// the mini-site, not a badge floating outside it.
const HeroShowcase: React.FC<HeroShowcaseProps> = ({ mascotSrc }) => {
  const primary = '#00D4FF';
  const secondary = '#7B2FBE';
  const easing = [0.22, 1, 0.36, 1] as const;

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easing } },
  };

  const growBar = (target: string) => ({
    hidden: { width: '0%' },
    visible: { width: target, transition: { duration: 0.6, ease: easing } },
  });

  // Shared demo loop timing — every value below is keyed to these fractions
  // of the same 7s cycle, so the mascot, the button and the chart stay in sync.
  const CYCLE = 7;
  const T = [0, 0.28, 0.48, 0.56, 0.78, 1];

  const chartBars = [
    { h: '35%', c: primary },
    { h: '55%', c: primary },
    { h: '40%', c: primary },
    { h: '75%', c: secondary },
    { h: '95%', c: secondary },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div
        className="absolute -inset-10 rounded-full blur-[100px] opacity-25 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${primary}, transparent 70%)` }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container}
        className="relative bg-[#0e1218] border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]"
      >
        {/* Chrome bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <div className="ml-3 flex-1 max-w-[220px] px-3 py-1 rounded-md bg-white/[0.04] text-[10px] font-mono text-cyber-gray truncate">
            gorinsolucoes.com.br
          </div>
        </div>

        <div className="p-6 space-y-5">
          {/* Nav skeleton — builds once */}
          <motion.div variants={fadeUp} className="flex items-center justify-between">
            <span className="w-6 h-6 rounded-md" style={{ background: `${primary}33` }} />
            <div className="flex gap-2">
              <span className="w-10 h-2 rounded-full bg-white/10" />
              <span className="w-10 h-2 rounded-full bg-white/10" />
              <span className="w-10 h-2 rounded-full bg-white/10" />
            </div>
          </motion.div>

          {/* Heading skeleton — builds once */}
          <div className="space-y-2">
            <motion.div
              variants={growBar('78%')}
              className="h-4 rounded-full"
              style={{ background: `linear-gradient(90deg, ${primary}, ${secondary})` }}
            />
            <motion.div variants={growBar('55%')} className="h-4 rounded-full bg-white/10" />
          </div>

          {/* Growth chart — loops continuously as part of the live demo */}
          <motion.div variants={fadeUp} className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
            <div className="flex items-end justify-between gap-2 h-20">
              {chartBars.map((bar, idx) => (
                <motion.div
                  key={idx}
                  animate={{ height: ['0%', bar.h, bar.h, bar.h, bar.h, '0%'] }}
                  transition={{ duration: CYCLE, times: T, repeat: Infinity, ease: easing, delay: idx * 0.08 }}
                  className="flex-1 rounded-t-sm"
                  style={{ background: bar.c }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between mt-2 font-mono text-[9px] text-cyber-gray">
              <span>conversão</span>
              <span className="text-cyber-primary">+68%</span>
            </div>
          </motion.div>

          {/* CTA — the stage for the demo: mascot walks in, clicks, button confirms */}
          <motion.div variants={fadeUp} className="relative flex items-center gap-3 pt-1 pb-8">
            <motion.button
              type="button"
              animate={{ scale: [1, 1, 1, 0.93, 1, 1] }}
              transition={{ duration: CYCLE, times: T, repeat: Infinity, ease: easing }}
              className="relative px-5 py-2.5 rounded-lg text-[11px] font-semibold overflow-hidden"
              style={{ background: primary, color: '#06121a' }}
            >
              <motion.span
                animate={{ opacity: [1, 1, 1, 0, 0, 1] }}
                transition={{ duration: CYCLE, times: T, repeat: Infinity, ease: 'linear' }}
                className="block"
              >
                Solicitar orçamento
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
                transition={{ duration: CYCLE, times: T, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center gap-1"
                style={{ color: '#06121a' }}
              >
                ✓ Enviado
              </motion.span>
            </motion.button>
            <span className="w-16 h-2 rounded-full bg-white/10" />

            {/* Mascot as the demo's actor — walks in, presses the button, walks off */}
            <motion.div
              animate={{
                x: ['-14px', '-14px', '18px', '18px', '18px', '-14px'],
                y: ['0px', '0px', '-6px', '2px', '-6px', '0px'],
                opacity: [0, 0, 1, 1, 1, 0],
                scale: [0.85, 0.85, 1, 0.92, 1, 0.85],
              }}
              transition={{ duration: CYCLE, times: T, repeat: Infinity, ease: easing }}
              className="absolute left-0 bottom-full mb-1 w-9 h-9"
            >
              {mascotSrc ? (
                <img src={mascotSrc} alt="Gorin Soluções" className="w-full h-full object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]" />
              ) : (
                <div className="w-full h-full rounded-lg" style={{ background: `${primary}55` }} />
              )}
            </motion.div>
          </motion.div>

          {/* Status line — mirrors the demo phase */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-1.5 font-mono text-[10px] text-cyber-gray -mt-4"
          >
            <span className="text-cyber-primary">{'>'}</span>
            <motion.span
              animate={{ opacity: [1, 1, 1, 0, 0, 1] }}
              transition={{ duration: CYCLE, times: T, repeat: Infinity, ease: 'linear' }}
            >
              site em construção
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
              transition={{ duration: CYCLE, times: T, repeat: Infinity, ease: 'linear' }}
              className="absolute"
            >
              orçamento enviado com sucesso
            </motion.span>
            <motion.span
              className="w-1.5 h-3 bg-cyber-primary/70 inline-block"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroShowcase;
