export interface GsapBundle {
  gsap: any;
  ScrollTrigger: any;
}

let gsapPromise: Promise<GsapBundle> | null = null;

/**
 * Carrega dinamicamente GSAP e ScrollTrigger apenas quando necessário,
 * memoizando a Promise e registrando o plugin ScrollTrigger uma única vez.
 */
export function loadGsap(): Promise<GsapBundle> {
  if (!gsapPromise) {
    gsapPromise = Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]).then(([gsapModule, scrollTriggerModule]) => {
      const gsap = gsapModule.default || gsapModule;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default || scrollTriggerModule;
      gsap.registerPlugin(ScrollTrigger);
      if (typeof window !== 'undefined') {
        (window as any).gsap = gsap;
        (window as any).ScrollTrigger = ScrollTrigger;
      }
      return { gsap, ScrollTrigger };
    });
  }
  return gsapPromise;
}

/**
 * Executa uma função depois do primeiro paint da página usando
 * requestIdleCallback ou requestAnimationFrame duplo com fallback de setTimeout(1).
 * Retorna uma função de cancelamento para ser usada no cleanup do useEffect.
 */
export function runAfterFirstPaint(callback: () => void): () => void {
  let cancelled = false;
  if (typeof window === 'undefined') return () => {};

  if ('requestIdleCallback' in window) {
    const idleId = (window as any).requestIdleCallback(() => {
      if (!cancelled) callback();
    }, { timeout: 1000 });

    return () => {
      cancelled = true;
      (window as any).cancelIdleCallback(idleId);
    };
  }

  const raf1 = requestAnimationFrame(() => {
    const raf2 = requestAnimationFrame(() => {
      const timer = setTimeout(() => {
        if (!cancelled) callback();
      }, 1);
      if (cancelled) clearTimeout(timer);
    });
    if (cancelled) cancelAnimationFrame(raf2);
  });

  return () => {
    cancelled = true;
    cancelAnimationFrame(raf1);
  };
}
