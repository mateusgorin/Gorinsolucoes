import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GorinSite } from './components/GorinSite';
import { ScrollToTop } from './components/ScrollToTop';
import { Seo } from './components/Seo';
import { FluidCursor } from './components/FluidCursor';

import { ContactPage } from './components/ContactPage';
import { BriefingPage } from './components/BriefingPage';
import { PrivacyPage } from './components/PrivacyPage';
import { BlogPage } from './components/BlogPage';

import { whatsappLink } from './lib/contact';

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
    // Do not initialize on touch devices (pointer: coarse) or with prefers-reduced-motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let cleanupLenis: (() => void) | null = null;

    if (!isTouch && !prefersReducedMotion) {
      const lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false,
      });

      lenis.on('scroll', ScrollTrigger.update);

      // Desktop: use GSAP ticker with lagSmoothing(0) instead of a separate requestAnimationFrame
      gsap.ticker.lagSmoothing(0);
      const updateLenis = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(updateLenis);

      // Provide global access for anchor links
      (window as any).__lenis = lenis;

      cleanupLenis = () => {
        gsap.ticker.remove(updateLenis);
        lenis.destroy();
        (window as any).__lenis = null;
      };
    } else {
      (window as any).__lenis = null;
    }

    // Anchor scrolling support for both cases (with and without Lenis)
    const handleAnchorClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          const navOffset = 80;
          const targetPosition = el.getBoundingClientRect().top + window.scrollY - navOffset;
          const lenisInstance = (window as any).__lenis;
          if (lenisInstance && typeof lenisInstance.scrollTo === 'function') {
            try {
              lenisInstance.scrollTo(targetPosition, { duration: 1.2 });
            } catch {
              window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
          } else {
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      if (cleanupLenis) {
        cleanupLenis();
      }
    };
  }, []);

  const whatsappUrl = whatsappLink("Olá, Mateus! Gostaria de conversar sobre um projeto digital com a Gorin Soluções.");

  return (
    <>
      <ScrollToTop />
      <Seo />
      <FluidCursor />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route
            path="/"
            element={
              <GorinSite
                onOpenBriefing={() => navigate('/briefing')}
                onOpenContact={() => navigate('/contato')}
                onOpenBlog={() => navigate('/blog')}
              />
            }
          />
          <Route path="/contato" element={<ContactPage onBack={() => navigate('/')} />} />
          <Route path="/briefing" element={<BriefingWrapper />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPage onBack={() => navigate('/')} />} />
          <Route path="/blog" element={<BlogPage onBack={() => navigate('/')} whatsappUrl={whatsappUrl} />} />
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
