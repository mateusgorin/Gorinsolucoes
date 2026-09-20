import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState<string>('');
  const [isClicking, setIsClicking] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Position refs for lerp smoothing
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Check if device is touch or mobile
    const checkTouch = () => {
      const isMobileWidth = window.innerWidth < 768;
      const hasTouchPointer = window.matchMedia('(pointer: coarse)').matches;
      const hasTouchEvents = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouch(isMobileWidth || (hasTouchPointer && hasTouchEvents));
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    if (isTouch) return;

    // Track mouse movement
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        pos.current.x = e.clientX;
        pos.current.y = e.clientY;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Detect hover over interactive elements and extract dynamic cursor text
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const textElement = target.closest('[data-cursor-text]') as HTMLElement | null;
      if (textElement) {
        const text = textElement.getAttribute('data-cursor-text') || '';
        setCursorText(text);
      } else {
        setCursorText('');
      }

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover], .cursor-pointer, .clickable'
      );

      setIsHovered(!!interactive);
    };

    // Smooth inertia / lerp loop
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const loop = () => {
      // 0.16 gives the signature fluid Cuberto mouse lag
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.16);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.16);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, [isTouch, isVisible]);

  // Completely deactivate in mobile / touch environments
  if (isTouch || !isVisible) {
    return null;
  }

  const hasText = !!cursorText;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[999999] will-change-transform -translate-x-1/2 -translate-y-1/2"
      style={{
        transform: `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
      }}
    >
      <div
        className={`rounded-full transition-all duration-300 ease-out flex items-center justify-center -translate-x-1/2 -translate-y-1/2 text-center select-none ${
          hasText
            ? 'w-24 h-24 bg-[#00D4FF] text-[#0B0B0C] shadow-[0_10px_30px_rgba(0,212,255,0.45)] scale-100 p-2'
            : isHovered
            ? 'w-12 h-12 bg-[#00D4FF]/20 border-2 border-[#00D4FF] backdrop-blur-[1px] scale-100'
            : isClicking
            ? 'w-2.5 h-2.5 bg-[#00D4FF] border border-[#0B0B0C] scale-90'
            : 'w-3.5 h-3.5 bg-[#00D4FF] border border-[#0B0B0C]/40 shadow-[0_0_8px_rgba(0,212,255,0.4)]'
        }`}
      >
        {hasText ? (
          <span className="font-archivo font-black text-[11px] uppercase tracking-wider leading-none text-[#0B0B0C]">
            {cursorText}
          </span>
        ) : isHovered ? (
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
        ) : null}
      </div>
    </div>
  );
};
