import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GorinSite } from './components/GorinSite';
import { BriefingPage } from './components/BriefingPage';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [path, setPath] = useState(window.location.pathname);
  const [showBriefing, setShowBriefing] = useState(false);

  // Initialize Lenis smooth scroll and connect with ScrollTrigger
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: isMobile ? 1.0 : 1.2,
      wheelMultiplier: 1.0,
      lerp: 0.1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Provide global access for anchor links
    (window as any).__lenis = lenis;

    return () => {
      lenis.destroy();
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

  const isBriefingPath = path === '/projetos' || path === '/projetos/' || showBriefing;

  if (isBriefingPath) {
    return (
      <div className="relative min-h-screen bg-white">
        <div className="p-4 bg-black text-white flex justify-between items-center">
          <span className="font-bold text-lg">Gorin Soluções // Briefing</span>
          <button
            onClick={() => {
              setShowBriefing(false);
              if (path.includes('/projetos')) {
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

  return (
    <GorinSite onOpenBriefing={() => setShowBriefing(true)} />
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