/**
 * Decorative, performance-cheap animated glow orbs for section backgrounds.
 * Pure CSS transform animation (GPU-friendly); sits behind section content.
 */
export default function FloatingOrbs({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ zIndex: -1 }}
    >
      <span className="orb-float absolute -left-12 top-8 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      <span
        className="orb-float absolute -right-8 top-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
        style={{ animationDelay: '-5s' }}
      />
      <span
        className="orb-float absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl"
        style={{ animationDelay: '-9s' }}
      />
    </div>
  );
}
