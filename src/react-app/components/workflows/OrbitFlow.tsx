import { useFlowAutoplay } from '@/react-app/hooks/useFlowAutoplay';
import type { FlowProps } from './types';

/**
 * Radial hub — steps orbit a central core, with data-spokes pulsing inward to
 * the active node. Suited to data / sensor systems (analytics, IoT).
 */
export default function OrbitFlow({ steps, accent, accent2 = accent }: FlowProps) {
  const { active, setActive, setPaused } = useFlowAutoplay(steps.length);
  const n = steps.length;
  const Current = steps[active].icon;

  const pos = (i: number) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return { x: 50 + Math.cos(a) * 39, y: 50 + Math.sin(a) * 39 };
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="select-none"
    >
      <div className="relative mx-auto aspect-square w-full max-w-[440px]">
        {/* Rotating dashed orbit + spokes */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <circle cx="50" cy="50" r="39" fill="none" stroke={`${accent}33`} strokeWidth="0.5" strokeDasharray="2 3" className="orbit-spin" style={{ transformOrigin: 'center' }} />
          <circle cx="50" cy="50" r="30" fill="none" stroke={`${accent2}26`} strokeWidth="0.4" className="orbit-spin-rev" style={{ transformOrigin: 'center' }} />
          {steps.map((s, i) => {
            const { x, y } = pos(i);
            const on = i === active;
            return (
              <line
                key={s.title}
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke={on ? accent : `${accent}1f`}
                strokeWidth={on ? 0.9 : 0.4}
                strokeLinecap="round"
                className={on ? 'dash-march' : ''}
                style={on ? { strokeDasharray: '3 3' } : undefined}
              />
            );
          })}
        </svg>

        {/* Central hub */}
        <div className="absolute left-1/2 top-1/2 z-10 w-[34%] -translate-x-1/2 -translate-y-1/2">
          <div
            className="grid aspect-square place-items-center rounded-full glass-strong text-center"
            style={{ boxShadow: `0 0 50px -10px ${accent}`, border: `1px solid ${accent}55` }}
          >
            <div className="px-2">
              <Current className="mx-auto h-7 w-7" style={{ color: accent }} />
              <div className="mt-1 font-display text-[13px] font-bold leading-tight text-white">{steps[active].title}</div>
            </div>
          </div>
        </div>

        {/* Satellites */}
        {steps.map((s, i) => {
          const { x, y } = pos(i);
          const Icon = s.icon;
          const on = i === active;
          return (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              aria-label={s.title}
              className="absolute z-10 grid place-items-center"
              style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
            >
              {on && <span className="ping-soft absolute h-12 w-12 rounded-full" style={{ border: `2px solid ${accent}` }} />}
              <span
                className={`grid h-12 w-12 place-items-center rounded-full border transition-all duration-300 ${on ? 'node-pop' : 'opacity-75 hover:opacity-100'}`}
                style={{
                  background: on ? `${accent}2a` : 'rgba(10,9,33,0.92)',
                  borderColor: on ? accent : 'rgba(255,255,255,0.14)',
                  boxShadow: on ? `0 0 24px -4px ${accent}` : 'none',
                }}
              >
                <Icon className="h-5 w-5" style={{ color: on ? accent : '#c7d2fe' }} />
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail */}
      <div className="mx-auto mt-6 max-w-xl rounded-2xl glass border-glow p-5 text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: accent }}>
          {steps[active].tag ?? `Step ${active + 1}`}
        </span>
        <p className="mt-1.5 text-sm leading-relaxed text-indigo-200/80">{steps[active].desc}</p>
        <div className="mt-4 flex justify-center gap-1.5">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Step ${i + 1}`}
              className="h-1.5 rounded-full transition-all"
              style={{ width: i === active ? 24 : 8, background: i === active ? accent : 'rgba(255,255,255,0.18)' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
