import { useFlowAutoplay } from '@/react-app/hooks/useFlowAutoplay';
import type { FlowProps } from './types';

/**
 * Layered architecture stack — full-width layers with a data pulse running
 * top→bottom. The active layer lifts and glows. Suited to engineering /
 * architecture builds.
 */
export default function StackFlow({ steps, accent, accent2 = accent }: FlowProps) {
  const { active, setActive, setPaused } = useFlowAutoplay(steps.length);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative select-none pl-7"
    >
      {/* Vertical data conduit */}
      <div className="absolute bottom-3 left-2 top-3 w-px overflow-hidden" style={{ background: `${accent}26` }}>
        <span
          className="flow-y absolute left-0 h-16 w-full"
          style={{ background: `linear-gradient(180deg, transparent, ${accent}, ${accent2}, transparent)` }}
        />
      </div>

      <div className="space-y-2.5">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const on = i === active;
          return (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className="block w-full text-left"
            >
              <div
                className="flex items-center gap-4 rounded-xl border p-4 transition-all duration-300"
                style={{
                  background: on ? `${accent}18` : 'rgba(255,255,255,0.03)',
                  borderColor: on ? accent : 'rgba(255,255,255,0.10)',
                  transform: on ? 'translateX(10px)' : 'translateX(0)',
                  boxShadow: on ? `0 12px 40px -18px ${accent}` : 'none',
                }}
              >
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg transition-all ${on ? 'node-pop' : ''}`}
                  style={{ background: on ? `${accent}2e` : `${accent}12`, border: `1px solid ${on ? accent : accent + '2e'}` }}
                >
                  <Icon className="h-5 w-5" style={{ color: accent }} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-xs font-bold" style={{ color: accent }}>
                      L{String(i + 1).padStart(2, '0')}
                    </span>
                    {s.tag && (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-300/70">{s.tag}</span>
                    )}
                  </div>
                  <h4 className={`font-display font-semibold ${on ? 'text-white' : 'text-indigo-100/75'}`}>{s.title}</h4>
                  <div
                    className="grid transition-all duration-500"
                    style={{ gridTemplateRows: on ? '1fr' : '0fr', opacity: on ? 1 : 0 }}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-indigo-200/75">{s.desc}</p>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
