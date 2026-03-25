import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GorinHeroAnimationProps {
  mascotSrc?: string;
}

const GorinHeroAnimation: React.FC<GorinHeroAnimationProps> = ({ mascotSrc }) => {
  const [glitch, setGlitch] = useState(false);
  const [metricsVisible, setMetricsVisible] = useState(false);

  // Colors
  const primary = "#00D4FF";
  const secondary = "#7B2FBE";
  const bg = "#0a0a0a";

  useEffect(() => {
    // Glitch interval: every 5s, lasts 0.3s
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 300);
    }, 5000);

    // Fade-in metrics after load
    const timer = setTimeout(() => setMetricsVisible(true), 1000);

    return () => {
      clearInterval(glitchInterval);
      clearTimeout(timer);
    };
  }, []);

  // Default Mascot SVG (A tech-styled piggy/robot)
  const DefaultMascot = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Body */}
      <rect x="25" y="35" width="50" height="40" rx="10" fill={bg} stroke={primary} strokeWidth="2" filter="url(#glow)" />
      {/* Head/Screen */}
      <rect x="30" y="40" width="40" height="25" rx="4" fill={`${primary}22`} stroke={primary} strokeWidth="1" />
      {/* Eyes */}
      <motion.rect 
        x="40" y="48" width="6" height="2" fill={primary}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.rect 
        x="54" y="48" width="6" height="2" fill={primary}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
      />
      {/* Antenna */}
      <line x1="50" y1="35" x2="50" y2="25" stroke={primary} strokeWidth="2" />
      <circle cx="50" cy="25" r="3" fill={secondary} />
      {/* Legs */}
      <rect x="35" y="75" width="8" height="10" fill={primary} />
      <rect x="57" y="75" width="8" height="10" fill={primary} />
    </svg>
  );

  return (
    <div className="relative w-full h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden font-mono text-[#00D4FF] selection:bg-[#7B2FBE] selection:text-white">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(${primary} 1px, transparent 1px), linear-gradient(90deg, ${primary} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main HUD Container */}
      <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-8">
        
        {/* Scanner Corners [ ] */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left */}
          <motion.div 
            className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#00D4FF]"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* Top Right */}
          <motion.div 
            className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#00D4FF]"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          {/* Bottom Left */}
          <motion.div 
            className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#00D4FF]"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          {/* Bottom Right */}
          <motion.div 
            className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#00D4FF]"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />
        </div>

        {/* Concentric Orbiting Circles */}
        <motion.div 
          className="absolute w-[80%] h-[80%] border border-[#00D4FF22] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-[90%] h-[90%] border border-dashed border-[#7B2FBE44] rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Horizontal Scan Line */}
        <motion.div 
          className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00D4FF88] to-transparent z-10"
          animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Data Nodes and Connecting Lines */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00D4FF] rounded-full"
              initial={{ 
                x: Math.random() * 400, 
                y: Math.random() * 400,
                opacity: 0 
              }}
              animate={{ 
                x: [null, Math.random() * 400, Math.random() * 400],
                y: [null, Math.random() * 400, Math.random() * 400],
                opacity: [0, 0.8, 0]
              }}
              transition={{ 
                duration: 5 + Math.random() * 5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Connecting line to center */}
              <div 
                className="absolute w-[100px] h-[1px] bg-gradient-to-r from-[#00D4FF22] to-transparent origin-left"
                style={{ transform: `rotate(${Math.random() * 360}deg)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Metrics Display */}
        <AnimatePresence>
          {metricsVisible && (
            <div className="absolute inset-0 p-4 text-[10px] md:text-xs tracking-tighter pointer-events-none">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute top-6 left-6"
              >
                SYS_STATUS: <span className="text-green-400">ONLINE</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-6 right-6 text-right"
              >
                PERF: <span className="text-white">99/100</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-12 left-6"
              >
                SEO: <span className="text-white">ATIVO</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-12 right-6 text-right"
              >
                VER.SIS: <span className="text-white">2.0</span>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Mascot Centerpiece */}
        <motion.div 
          className="relative w-32 h-32 md:w-48 md:h-48 z-20"
          animate={{ 
            scale: [1, 1.02, 1],
            filter: glitch 
              ? [
                  `drop-shadow(0 0 10px ${primary})`,
                  `drop-shadow(5px 0 0 ${secondary})`,
                  `drop-shadow(-5px 0 0 ${primary})`,
                  `drop-shadow(0 0 10px ${primary})`
                ]
              : `drop-shadow(0 0 15px ${primary}44)`
          }}
          transition={{ 
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            filter: { duration: 0.3 }
          }}
        >
          {mascotSrc ? (
            <img src={mascotSrc} alt="Mascot" className="w-full h-full object-contain" />
          ) : (
            <DefaultMascot />
          )}
          
          {/* Glitch Overlay Effect */}
          {glitch && (
            <motion.div 
              className="absolute inset-0 bg-[#00D4FF22] mix-blend-overlay"
              initial={{ x: -2 }}
              animate={{ x: 2 }}
              transition={{ repeat: 5, duration: 0.05 }}
            />
          )}
        </motion.div>

        {/* Terminal Text */}
        <motion.div 
          className="absolute bottom-16 w-full text-center text-[10px] md:text-xs tracking-[0.3em] uppercase"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          SISTEMA INICIALIZADO
        </motion.div>

        {/* Progress Bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] max-w-[300px]">
          <div className="flex justify-between text-[8px] mb-1 uppercase tracking-widest">
            <span>Performance</span>
            <span>100%</span>
          </div>
          <div className="h-1 w-full bg-[#00D4FF11] rounded-full overflow-hidden border border-[#00D4FF22]">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#7B2FBE] to-[#00D4FF]"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>
        </div>

      </div>

      {/* Decorative HUD Elements outside main container */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 opacity-20 text-[8px] leading-tight">
          {`> LOAD_MODULE: CORE_AI\n> STATUS: OPTIMIZED\n> ENCRYPTION: AES-256`}
        </div>
        <div className="absolute bottom-10 right-10 opacity-20 text-[8px] text-right leading-tight">
          {`LATENCY: 12ms\nREGION: BR-DF\nUPTIME: 99.9%`}
        </div>
      </div>
    </div>
  );
};

export default GorinHeroAnimation;
