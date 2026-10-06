import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GorinSite } from './components/GorinSite';
import { ScrollToTop } from './components/ScrollToTop';
import { Seo } from './components/Seo';

const ContactPage = lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));
const BriefingPage = lazy(() => import('./components/BriefingPage').then(m => ({ default: m.BriefingPage })));
const PrivacyPage = lazy(() => import('./components/PrivacyPage').then(m => ({ default: m.PrivacyPage })));

gsap.registerPlugin(ScrollTrigger);

const BriefingWrapper: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-white">
      <div className="p-4 bg-black text-white flex justify-between items-center">
        <span className="font-bold text-lg">Gorin Soluções // Briefing</span>
        <button
          onClick={() => navigate('/')}
          className="text-xs font-mono uppercase bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
        >
          ← Voltar ao Site
        </button>
      </div>
      <BriefingPage />
    </div>
  );
};

const PageFallback: React.FC = () => (
  <div className="min-h-screen bg-white" />
);

const App: React.FC = () => {
  const navigate = useNavigate();

  // Initialize Lenis smooth scroll and connect with ScrollTrigger
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.0,
      wheelMultiplier: 1.0,
    });

    lenis.on('scroll', ScrollTrigger.update);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Provide global access for anchor links
    (window as any).__lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Seo />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route
            path="/"
            element={
              <GorinSite
                onOpenBriefing={() => navigate('/briefing')}
                onOpenContact={() => navigate('/contato')}
              />
            }
          />
          <Route path="/contato" element={<ContactPage onBack={() => navigate('/')} />} />
          <Route path="/briefing" element={<BriefingWrapper />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPage onBack={() => navigate('/')} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
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
