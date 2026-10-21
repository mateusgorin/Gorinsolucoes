import React, { useEffect, useRef, useState } from 'react';
import { loadGsap, runAfterFirstPaint } from '../lib/gsap-loader';

export const FluidCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  
  const [cursorState, setCursorState] = useState<string>('');
  const [cursorIcon, setCursorIcon] = useState<string | null>(null);
  const [cursorTextContent, setCursorTextContent] = useState<string | null>(null);

  // Target coordinates for smooth position interpolations
  const mouseRef = useRef({ x: -100, y: -100 });
  const posRef = useRef({ x: -100, y: -100 });
  const velRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Enable only on desktop pointer fine environments without reduced motion
    if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = cursorRef.current;
    const innerEl = innerRef.current;
    if (!el || !innerEl) return;

    let cancelled = false;
    let cleanup: (() => void) | null = null;

    const cancelSchedule = runAfterFirstPaint(async () => {
      if (cancelled) return;
      try {
        const { gsap } = await loadGsap();
        if (cancelled) return;

        // Fast quickSetters for high performance 60/120fps rendering
        const setX = gsap.quickSetter(el, 'x', 'px');
        const setY = gsap.quickSetter(el, 'y', 'px');
        const setRotation = gsap.quickSetter(el, 'rotation', 'deg');
        const setScaleX = gsap.quickSetter(el, 'scaleX');
        const setScaleY = gsap.quickSetter(el, 'scaleY');
        const setInnerRotation = gsap.quickSetter(innerEl, 'rotation', 'deg');

    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      let targetX = e.clientX;
      let targetY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        el.style.opacity = '1';
        posRef.current = { x: targetX, y: targetY };
      }

      const rawTarget = e.target as HTMLElement | null;
      if (!rawTarget) return;

      // Magnetic stick element check
      const stickTarget = rawTarget.closest('[data-cursor-stick]') as HTMLElement | null;
      if (stickTarget) {
        const rect = stickTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        targetX = targetX + (centerX - targetX) * 0.15;
        targetY = targetY + (centerY - targetY) * 0.15;
      }

      mouseRef.current = { x: targetX, y: targetY };

      // Smooth position lerp using gsap.to
      gsap.to(posRef.current, {
        x: targetX,
        y: targetY,
        duration: 0.55,
        ease: 'power4.out',
        overwrite: 'auto'
      });

      // Target type detection: icon, text, or interactive clickables
      const iconTarget = rawTarget.closest('[data-cursor-icon]') as HTMLElement | null;
      const textTarget = rawTarget.closest('[data-cursor-text]') as HTMLElement | null;
      const clickableTarget = rawTarget.closest('a, button, summary, .WorkCard, .service-card, .deck-card, .FeatureItem, .PreviewCard') as HTMLElement | null;

      if (iconTarget) {
        const icon = iconTarget.getAttribute('data-cursor-icon');
        setCursorState('-icon');
        setCursorIcon(icon);
        setCursorTextContent(null);
      } else if (textTarget) {
        const text = textTarget.getAttribute('data-cursor-text');
        setCursorState('-text');
        setCursorTextContent(text);
        setCursorIcon(null);
      } else if (clickableTarget) {
        setCursorState('-pointer');
        setCursorIcon(null);
        setCursorTextContent(null);
      } else {
        setCursorState('');
        setCursorIcon(null);
        setCursorTextContent(null);
      }
    };

    const handleMouseDown = () => {
      el.classList.add('-active');
    };

    const handleMouseUp = () => {
      el.classList.remove('-active');
    };

    const handleMouseLeave = () => {
      isVisible = false;
      el.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      isVisible = true;
      el.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    // Ticker Loop for Velocity Calculation and Skew Deformation
    const updateTicker = () => {
      const prevX = posRef.current.x;
      const prevY = posRef.current.y;

      const vx = mouseRef.current.x - prevX;
      const vy = mouseRef.current.y - prevY;

      velRef.current.x = vx;
      velRef.current.y = vy;

      const velocity = Math.min(Math.hypot(vx, vy) * 4, 150);
      const angle = (Math.atan2(vy, vx) * 180) / Math.PI;
      const skewing = 1.0;
      const scale = Math.min(velocity * 0.00075 * skewing, 0.5);

      setX(posRef.current.x);
      setY(posRef.current.y);
      setScaleX(1 + scale);
      setScaleY(1 - scale * 0.45);
      setRotation(angle);
      setInnerRotation(-angle);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    gsap.ticker.add(updateTicker);

    cleanup = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      gsap.ticker.remove(updateTicker);
    };
  } catch (err) {
    console.error('Failed to initialize fluid cursor', err);
  }
});

    return () => {
      cancelled = true;
      cancelSchedule();
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`Cursor fixed top-0 left-0 z-[9999] pointer-events-none opacity-0 transition-opacity duration-300 ${cursorState}`}
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    >
      <div ref={innerRef} className="inner">
        <div className="text flex items-center justify-center">
          {cursorIcon === 'play' && (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5 text-black">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
          {cursorIcon === 'times' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
          {cursorIcon === 'arrow-up-right' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
            </svg>
          )}
          {cursorTextContent && (
            <span className="text-black font-semibold text-xs uppercase tracking-wider">
              {cursorTextContent}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
