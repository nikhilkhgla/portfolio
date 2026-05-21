import { Check } from 'lucide-react';
import { useFlowAutoplay } from '@/react-app/hooks/useFlowAutoplay';
import type { FlowProps } from './types';

/**
 * Vertical numbered stepper with a progress beam that fills down to the active
 * step. Good for guided, sequential processes (applications, store builds).
 */
export default function StepperFlow({ steps, accent, accent2 = accent }: FlowProps) {
  const { active, setActive, setPaused } = useFlowAutoplay(steps.length);
  const fill = steps.length > 1 ? (active / (steps.length - 1)) * 100 : 0;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative select-none pl-1"
    >
      {/* Rail */}
      <div className="absolute bottom-5 left-[26px] top-5 w-[3px] rounded-full bg-white/10" />
      <div
        className="absolute left-[26px] top-5 w-[3px] rounded-full transition-all duration-700 ease-out"
        style={{ height: `calc(${fill}% )`, background: `linear-gradient(${accent}, ${accent2})`, boxShadow: `0 0 16px ${accent}` }}
      />

      <div className="space-y-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const on = i === active;
          const done = i < active;
          return (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className="flex w-full items-start gap-5 text-left"
            >
              {/* Marker */}
              <span className="relative z-10 grid place-items-center">
                {on && (
                  <span className="ping-soft absolute h-[52px] w-[52px] rounded-full" style={{ border: `2px solid ${accent}` }} />
                )}
                <span
                  className={`grid h-[52px] w-[52px] place-items-center rounded-full border-2 font-display text-sm font-bold transition-all duration-300 ${on ? 'node-pop' : ''}`}
                  style={{
                    background: on ? `${accent}26` : done ? `${accent}1a` : 'rgba(10,9,33,0.9)',
                    borderColor: on || done ? accent : 'rgba(255,255,255,0.16)',
                    color: on || done ? accent : '#c7d2fe',
                    boxShadow: on ? `0 0 26px -4px ${accent}` : 'none',
                  }}
                >
                  {done ? <Check className="h-5 w-5" /> : String(i + 1).padStart(2, '0')}
                </span>
              </span>

              {/* Content */}
              <div
                className={`flex-1 rounded-2xl border p-5 transition-all duration-300 ${on ? 'glass border-glow' : 'border-transparent'}`}
                style={on ? { boxShadow: `0 10px 40px -20px ${accent}` } : undefined}
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" style={{ color: on || done ? accent : '#a5b4fc' }} />
                  {s.tag && (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-300/70">{s.tag}</span>
                  )}
                </div>
                <h4 className={`mt-1 font-display font-semibold transition-colors ${on ? 'text-white' : 'text-indigo-100/70'}`}>
                  {s.title}
                </h4>
                <div
                  className="grid transition-all duration-500"
                  style={{ gridTemplateRows: on ? '1fr' : '0fr', opacity: on ? 1 : 0 }}
                >
                  <p className="overflow-hidden text-sm leading-relaxed text-indigo-200/75">{s.desc}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
