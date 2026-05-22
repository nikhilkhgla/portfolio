import { useFlowAutoplay } from '@/react-app/hooks/useFlowAutoplay';
import type { FlowProps } from './types';

/**
 * Security-themed flow for firewall / SonicWall work. Concentric shield
 * "defense layers" with a scanning beam, paired with an interactive layer
 * list. Visually distinct from the other workflow styles.
 */
const SHIELD = 'M50 4 L90 20 V54 C90 82 72 102 50 114 C28 102 10 82 10 54 V20 Z';

export default function ShieldFlow({ steps, accent, accent2 = accent }: FlowProps) {
  const { active, setActive, setPaused } = useFlowAutoplay(steps.length);
  const n = steps.length;
  const Current = steps[active].icon;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="select-none"
    >
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* Shield graphic */}
        <div className="relative mx-auto w-full max-w-[300px]">
          <svg viewBox="0 0 100 120" className="w-full">
            <defs>
              <clipPath id="shieldClip">
                <path d={SHIELD} />
              </clipPath>
              <linearGradient id="shieldScanGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor={accent} stopOpacity="0" />
                <stop offset="0.5" stopColor={accent} stopOpacity="0.6" />
                <stop offset="1" stopColor={accent} stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Concentric defense layers (outer → inner) */}
            {steps.map((s, i) => {
              const on = i === active;
              const scale = 1 - (i / n) * 0.62;
              return (
                <path
                  key={s.title}
                  d={SHIELD}
                  fill={on ? `${accent}1f` : 'transparent'}
                  stroke={on ? accent : `${accent2}40`}
                  strokeWidth={on ? 1.8 : 0.8}
                  style={{
                    transformOrigin: '50px 60px',
                    transform: `scale(${scale})`,
                    transition: 'all .35s ease',
                  }}
                />
              );
            })}

            {/* Scanning beam, clipped to the outer shield */}
            <g clipPath="url(#shieldClip)">
              <rect x="0" width="100" height="16" fill="url(#shieldScanGrad)" className="shield-scan" />
            </g>
          </svg>

          {/* Center active icon */}
          <div className="pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 text-center">
            <Current className="mx-auto h-8 w-8" style={{ color: accent }} />
          </div>
        </div>

        {/* Interactive layer list */}
        <div className="space-y-2.5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const on = i === active;
            return (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className="flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left transition-all"
                style={{
                  borderColor: on ? accent : 'rgba(255,255,255,0.1)',
                  background: on ? `${accent}14` : 'rgba(255,255,255,0.03)',
                  boxShadow: on ? `0 0 28px -10px ${accent}` : 'none',
                }}
                aria-label={s.title}
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-transform ${on ? 'node-pop' : ''}`}
                  style={{
                    background: on ? `${accent}26` : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${on ? accent : 'rgba(255,255,255,0.12)'}`,
                  }}
                >
                  <Icon className="h-5 w-5" style={{ color: on ? accent : '#c7d2fe' }} />
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: accent }}>
                      Layer {i + 1}
                    </span>
                    {s.tag && (
                      <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-indigo-200/70">{s.tag}</span>
                    )}
                  </div>
                  <div className="font-display text-sm font-bold text-white">{s.title}</div>
                  {on && <p className="mt-1 text-xs leading-relaxed text-indigo-200/75">{s.desc}</p>}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
