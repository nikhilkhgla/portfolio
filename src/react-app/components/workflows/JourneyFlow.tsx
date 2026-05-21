import { useFlowAutoplay } from '@/react-app/hooks/useFlowAutoplay';
import type { FlowProps } from './types';

/**
 * A flowing "journey" — cards alternate sides along a wavy connector that
 * streams with motion. Suited to brand / product narratives.
 */
export default function JourneyFlow({ steps, accent, accent2 = accent }: FlowProps) {
  const { active, setActive, setPaused } = useFlowAutoplay(steps.length);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative select-none"
    >
      {/* Wavy connector */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="journeyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} />
            <stop offset="100%" stopColor={accent2} />
          </linearGradient>
        </defs>
        <path
          d="M50,0 C82,11 18,27 50,40 C82,53 18,69 50,82 C70,90 45,96 50,100"
          fill="none"
          stroke="url(#journeyGrad)"
          strokeWidth={2}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="dash-march"
          opacity={0.55}
        />
      </svg>

      <div className="relative space-y-6">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const on = i === active;
          const left = i % 2 === 0;
          return (
            <div key={s.title} className={`flex ${left ? 'justify-start' : 'justify-end'}`}>
              <button
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`group w-full max-w-[46%] text-left transition-transform duration-300 sm:max-w-[44%] ${
                  on ? '-translate-y-0.5' : ''
                }`}
                style={{ minWidth: 240 }}
              >
                <div
                  className={`rounded-2xl border p-5 transition-all duration-300 ${on ? 'glass border-glow' : 'glass'}`}
                  style={{
                    borderColor: on ? accent : 'rgba(255,255,255,0.10)',
                    boxShadow: on ? `0 14px 50px -22px ${accent}` : 'none',
                  }}
                >
                  <div className="mb-2 flex items-center gap-3">
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-all ${on ? 'node-pop' : ''}`}
                      style={{
                        background: on ? `${accent}26` : `${accent}12`,
                        border: `1px solid ${on ? accent : accent + '33'}`,
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: accent }} />
                    </span>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-300/70">
                        {s.tag ?? `Stage ${i + 1}`}
                      </div>
                      <h4 className={`font-display font-semibold ${on ? 'text-white' : 'text-indigo-100/75'}`}>{s.title}</h4>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-indigo-200/70">{s.desc}</p>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
