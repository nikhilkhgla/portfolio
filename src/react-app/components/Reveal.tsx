import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** delay before the reveal transition starts, in ms */
  delay?: number;
  /** if false, re-animates each time it enters the viewport */
  once?: boolean;
  style?: CSSProperties;
}

/**
 * Scroll-reveal wrapper. Adds `.is-visible` (see index.css) when the element
 * scrolls into view, producing a soft 3D fade-up.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  once = true,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            if (once) io.unobserve(el);
          } else if (!once) {
            el.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
