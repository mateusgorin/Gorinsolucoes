import { useEffect, useState } from 'react';

export interface MotionPreferences {
  isTouch: boolean;
  isReduced: boolean;
  isSmall: boolean;
  hasFinePointer: boolean;
  hasTouchInput: boolean;
}

export const getMotionCapabilities = () => {
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const noHover = window.matchMedia('(hover: none)').matches;
  const hasTouchInput = navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
  const hasFinePointer = window.matchMedia('(pointer: fine) and (hover: hover)').matches;

  return {
    hasTouchInput,
    hasFinePointer,
    isTouch: coarsePointer || noHover || hasTouchInput,
  };
};

const getPreferences = (): MotionPreferences => {
  const capabilities = getMotionCapabilities();

  return {
    ...capabilities,
    isReduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    isSmall: window.matchMedia('(max-width: 767px)').matches,
  };
};

export function useMotionPreferences(): MotionPreferences {
  const [preferences, setPreferences] = useState<MotionPreferences>(() =>
    typeof window === 'undefined'
      ? {
          isTouch: false,
          isReduced: false,
          isSmall: false,
          hasFinePointer: false,
          hasTouchInput: false,
        }
      : getPreferences()
  );

  useEffect(() => {
    const queries = [
      window.matchMedia('(pointer: coarse)'),
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(max-width: 767px)'),
    ];
    const update = () => setPreferences(getPreferences());
    queries.forEach((query) => query.addEventListener('change', update));
    window.addEventListener('orientationchange', update, { passive: true });
    return () => {
      queries.forEach((query) => query.removeEventListener('change', update));
      window.removeEventListener('orientationchange', update);
    };
  }, []);

  return preferences;
}

export const motionEase = [0.16, 1, 0.3, 1] as const;
