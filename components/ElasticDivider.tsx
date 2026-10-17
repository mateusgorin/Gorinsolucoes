import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface ElasticDividerProps {
  className?: string;
}

export const ElasticDivider: React.FC<ElasticDividerProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  
  const pointRef = useRef({ x: 0, y: 100 });
  const isGrabbedRef = useRef(false);

  const getPathD = (x: number, y: number, width: number) => {
    return `M 0,100 C ${width * 0.25},100 ${x - width * 0.2},${y} ${x},${y} C ${x + width * 0.2},${y} ${width * 0.75},100 ${width},100`;
  };

  useEffect(() => {
    const el = containerRef.current;
    const path = pathRef.current;
    if (!el || !path) return;

    const updatePath = () => {
      const width = el.offsetWidth || 1200;
      path.setAttribute('d', getPathD(pointRef.current.x || width / 2, pointRef.current.y, width));
    };

    const initialWidth = el.offsetWidth || 1200;
    pointRef.current.x = initialWidth / 2;
    pointRef.current.y = 100;
    updatePath();

    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const width = rect.width || 1200;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const svgY = mouseY + 100;
      const deltaY = svgY - 100;

      if (!isGrabbedRef.current && Math.abs(deltaY) > 10) {
        isGrabbedRef.current = true;
      }

      if (isGrabbedRef.current) {
        // Clamp maximum vertical deflection to ±65px (y between 35 and 165)
        const clampedY = Math.max(35, Math.min(165, svgY));
        pointRef.current.x = Math.max(0, Math.min(width, mouseX));
        pointRef.current.y = clampedY;

        updatePath();

        // Release string if pulled beyond maximum amplitude (±65px)
        if (Math.abs(clampedY - 100) >= 65) {
          releaseString(width);
        }
      }
    };

    const releaseString = (currentWidth: number) => {
      if (!isGrabbedRef.current) return;
      isGrabbedRef.current = false;

      gsap.to(pointRef.current, {
        y: 100,
        duration: 1.5,
        ease: 'elastic.out(1, 0.1)',
        onUpdate: () => {
          path.setAttribute('d', getPathD(pointRef.current.x, pointRef.current.y, currentWidth));
        },
      });
    };

    const handlePointerLeave = () => {
      const width = el.offsetWidth || 1200;
      releaseString(width);
    };

    const handleResize = () => {
      const width = el.offsetWidth || 1200;
      if (!isGrabbedRef.current) {
        pointRef.current.x = width / 2;
      }
      updatePath();
    };

    window.addEventListener('resize', handleResize);
    el.addEventListener('pointermove', handlePointerMove);
    el.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      el.removeEventListener('pointermove', handlePointerMove);
      el.removeEventListener('pointerleave', handlePointerLeave);
      gsap.killTweensOf(pointRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={`Divider relative h-[1px] w-full ${className}`}>
      <svg className="pointer-events-none absolute top-[-99px] left-0 right-0 w-full h-[200px] overflow-visible">
        <path ref={pathRef} fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
};
