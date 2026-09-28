import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ElasticDividerProps {
  className?: string;
}

export const ElasticDivider: React.FC<ElasticDividerProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const deltaRef = useRef<number>(0);

  const getPathD = (cx?: number, cy?: number, totalW?: number) => {
    const w = totalW || (containerRef.current ? containerRef.current.offsetWidth : 1200);
    const x = cx !== undefined ? cx : w / 2;
    const y = cy !== undefined ? cy : 100;
    return `M0,100 Q${x},${y} ${w},100`;
  };

  useEffect(() => {
    const el = containerRef.current;
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!el || !path || !svg) return;

    // Initial shape
    path.setAttribute('d', getPathD());

    // Scroll entry animation matching original D09N7 script:
    // set svg transformOrigin: 'left center', from scaleX: 0, duration: 2.4, ease: 'expo.out'
    gsap.set(svg, { transformOrigin: 'left center' });
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top bottom-=50',
      onEnter: () => {
        gsap.fromTo(svg, { scaleX: 0 }, { scaleX: 1, duration: 2.2, ease: 'expo.out' });
      },
      once: true,
    });

    const handleResize = () => {
      path.setAttribute('d', getPathD());
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const i = e.clientX - rect.left;
      const a = e.clientY - rect.top;

      if (!deltaRef.current) {
        deltaRef.current = a < 100 ? 50 : -50;
      }

      const o = i;
      const s = a * 2 - 100 + deltaRef.current;

      gsap.to(path, {
        attr: { d: getPathD(o, s, rect.width) },
        duration: 0.2,
        overwrite: true,
      });
    };

    const handleMouseLeave = () => {
      deltaRef.current = 0;
      gsap.to(path, {
        attr: { d: getPathD() },
        duration: 2,
        ease: 'elastic.out(1, 0.2)',
      });
    };

    window.addEventListener('resize', handleResize);
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      trigger.kill();
      gsap.killTweensOf(path);
      gsap.killTweensOf(svg);
    };
  }, []);

  return (
    <div ref={containerRef} className={`Divider relative h-[1px] w-full ${className}`}>
      <svg ref={svgRef} className="pointer-events-none w-full h-[200px] absolute top-[-99px] left-0 right-0 overflow-visible">
        <path ref={pathRef} fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
};
