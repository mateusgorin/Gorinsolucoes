import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GorinSite } from './components/GorinSite';
import { BriefingPage } from './components/BriefingPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPage } from './components/PrivacyPage';
import { getMotionCapabilities } from './hooks/useMotionPreferences';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [path, setPath] = useState(window.location.pathname);
  const [showBriefing, setShowBriefing] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // Keep native touch scrolling intact; Lenis smooths wheel input on precise pointers.
  useEffect(() => {
    const { isTouch, hasFinePointer } = getMotionCapabilities();
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = new Lenis({
      duration: hasFinePointer && !isReduced ? 1.2 : 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Preserve native touch scrolling on phones and tablets, including hybrids.
      smoothWheel: !isReduced && hasFinePointer,
      syncTouch: false,
      touchMultiplier: 1,
      wheelMultiplier: 1,
      lerp: isReduced ? 1 : isTouch ? 0.14 : 0.1,
    });

    let refreshFrame = 0;
    let refreshTimer = 0;
    const scheduleRefresh = () => {
      window.clearTimeout(refreshTimer);
      window.cancelAnimationFrame(refreshFrame);
      refreshTimer = window.setTimeout(() => {
        refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
      }, 120);
    };

    lenis.on('scroll', ScrollTrigger.update);
    const updateLenis = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(1000, 16);
    (window as any).__lenis = lenis;

    const resizeObserver = new ResizeObserver(scheduleRefresh);
    resizeObserver.observe(document.body);
    window.addEventListener('load', scheduleRefresh, { once: true });
    window.addEventListener('resize', scheduleRefresh, { passive: true });
    window.addEventListener('orientationchange', scheduleRefresh, { passive: true });
    window.visualViewport?.addEventListener('resize', scheduleRefresh, { passive: true });
    document.fonts?.ready.then(scheduleRefresh);
    document.querySelectorAll('img').forEach((image) => {
      if (!image.complete) image.addEventListener('load', scheduleRefresh, { once: true });
    });
    scheduleRefresh();

    return () => {
      window.clearTimeout(refreshTimer);
      window.cancelAnimationFrame(refreshFrame);
      resizeObserver.disconnect();
      window.removeEventListener('load', scheduleRefresh);
      window.removeEventListener('resize', scheduleRefresh);
      window.removeEventListener('orientationchange', scheduleRefresh);
      window.visualViewport?.removeEventListener('resize', scheduleRefresh);
      lenis.destroy();
      delete (window as any).__lenis;
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const isBriefingPath = path === '/briefing' || path === '/briefing/' || showBriefing;
  const isContactPath = path === '/contato' || path === '/contato/' || showContact;
  const isPrivacyPath = path === '/politica-de-privacidade' || path === '/politica-de-privacidade/';

  if (isContactPath) {
    return (
      <ContactPage
        onBack={() => {
          setShowContact(false);
          if (path.includes('/contato')) {
            window.history.pushState({}, '', '/');
            setPath('/');
          }
        }}
      />
    );
  }

  if (isBriefingPath) {
    return (
      <div className="relative min-h-screen bg-white">
        <div className="p-4 bg-black text-white flex justify-between items-center">
          <span className="font-bold text-lg">Gorin Soluções // Briefing</span>
          <button
            onClick={() => {
              setShowBriefing(false);
              if (path.includes('/briefing')) {
                window.history.pushState({}, '', '/');
                setPath('/');
              }
            }}
            className="text-xs font-mono uppercase bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition-colors"
          >
            ← Voltar ao Site
          </button>
        </div>
        <BriefingPage />
      </div>
    );
  }

  if (isPrivacyPath) {
    return (
      <PrivacyPage
        onBack={() => {
          window.history.pushState({}, '', '/');
          setPath('/');
          window.scrollTo(0, 0);
        }}
      />
    );
  }

  return (
    <GorinSite
      onOpenBriefing={() => setShowBriefing(true)}
      onOpenContact={() => {
        window.history.pushState({}, '', '/contato');
        setPath('/contato');
        setShowContact(true);
      }}
    />
  );
};

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error Caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0b0b0c] text-white flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-2xl font-bold mb-3">Gorin Soluções</h2>
          <p className="text-white/70 text-sm mb-6 max-w-md">
            Ocorreu uma pequena oscilação temporária na interface.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 rounded-full bg-[#00d4ff] text-black font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Recarregar Página
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export const AppWrapper: React.FC = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

export default AppWrapper;
