import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Drives a workflow's "active step". Auto-advances on an interval, but pauses
 * while the user is interacting (hover/focus) and lets them pick a step.
 */
export function useFlowAutoplay(count: number, interval = 2600) {
  const [active, setActiveState] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (paused || reduce.current || count <= 1) return;
    const id = window.setInterval(() => {
      setActiveState((a) => (a + 1) % count);
    }, interval);
    return () => window.clearInterval(id);
  }, [paused, count, interval]);

  const setActive = useCallback((i: number) => setActiveState(i), []);

  return { active, setActive, paused, setPaused };
}
