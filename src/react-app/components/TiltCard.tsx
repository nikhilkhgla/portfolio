import { type ReactNode } from 'react';
import { useTilt } from '@/react-app/hooks/useTilt';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}

/**
 * Wraps content in a perspective container and applies a mouse-driven 3D tilt
 * with an optional moving glare highlight.
 */
export default function TiltCard({
  children,
  className = '',
  max = 9,
  glare = true,
}: TiltCardProps) {
  const { ref, onMove, onLeave } = useTilt(max);

  return (
    <div className="perspective group/tilt h-full">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`preserve-3d relative h-full transition-transform duration-200 ease-out ${className}`}
      >
        {children}
        {glare && <span className="tilt-glare" />}
      </div>
    </div>
  );
}
