import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const FluidCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<string>('');
  const [cursorIcon, setCursorIcon] = useState<string | null>(null);

  const posRef = useRef({ x: -100, y: -100 });
  const mouseRef = useRef({ x: -100, y: -100 });
  const velRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only enable on desktop pointer fine
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const el = cursorRef.current;
    if (!el) return;

    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) {
        isVisible = true;
        el.style.opacity = '1';
      }

      // Target detection matching Cuberto's data-cursor-icon
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor-icon], a, button, .WorkCard, .PreviewCard, .FeatureItem, .deck-card') as HTMLElement | null;

      if (cursorTarget) {
        const icon = cursorTarget.getAttribute('data-cursor-icon');
        if (icon) {
          setCursorState('-icon');
          setCursorIcon(icon);
        } else {
          setCursorState('-pointer');
          setCursorIcon(null);
        }
      } else {
        setCursorState('');
        setCursorIcon(null);
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

    // Cuberto velocity skew calculation:
    // Angle = Math.atan2(vel.y, vel.x) * 180 / Math.PI
    // ScaleX = 1 + skew, ScaleY = 1 - skew
    const skewingDelta = 0.0012;
    const skewingDeltaMax = 0.22;
    const skewFactor = 1.6;

    const updateCursor = () => {
      const prevX = posRef.current.x;
      const prevY = posRef.current.y;

      posRef.current.x += (mouseRef.current.x - posRef.current.x) * 0.18;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * 0.18;

      velRef.current.x = posRef.current.x - prevX;
      velRef.current.y = posRef.current.y - prevY;

      const speed = Math.sqrt(velRef.current.x ** 2 + velRef.current.y ** 2);
      const skew = Math.min(speed * skewingDelta, skewingDeltaMax) * skewFactor;
      const angle = (Math.atan2(velRef.current.y, velRef.current.x) * 180) / Math.PI;

      if (el) {
        el.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) rotate(${angle}deg) scale(${1 + skew}, ${1 - skew})`;
      }
    };

    gsap.ticker.add(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      gsap.ticker.remove(updateCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`Cursor fixed top-0 left-0 z-[9999] pointer-events-none opacity-0 transition-opacity duration-300 ${cursorState}`}
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    >
      <div className="inner">
        <div className="text flex items-center justify-center">
          {cursorIcon === 'play' && (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
          {cursorIcon === 'times' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
          {cursorIcon === 'arrow-up-right' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};
