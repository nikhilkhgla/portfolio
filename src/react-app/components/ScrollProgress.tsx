import { useEffect, useRef } from 'react';

/** Thin gradient bar at the very top that fills as the page scrolls. */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const el = ref.current;
      if (el) {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        const p = max > 0 ? h.scrollTop / max : 0;
        el.style.transform = `scaleX(${p})`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        ref={ref}
        className="h-full w-full origin-left bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
