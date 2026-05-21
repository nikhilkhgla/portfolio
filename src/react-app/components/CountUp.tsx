import { useEffect, useRef, useState } from 'react';

/**
 * Animates a numeric value up from 0 when it scrolls into view.
 * Accepts strings like "8+", "24h", "6" — animates the leading number and
 * keeps any suffix. Non-numeric strings render unchanged.
 */
export default function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const firstMatch = value.match(/^(\d+)(.*)$/);
  const [display, setDisplay] = useState<string>(firstMatch ? `0${firstMatch[2]}` : value);

  // Depend ONLY on `value` (a stable string) so the effect doesn't tear down
  // on every animation frame.
  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let started = false;

    const animate = () => {
      const dur = 1100;
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(p < 1 ? `${Math.round(eased * target)}${suffix}` : value);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            animate();
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
