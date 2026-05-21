import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useFlowAutoplay } from '@/react-app/hooks/useFlowAutoplay';
import type { FlowProps } from './types';

/**
 * Horizontal animated pipeline — circular nodes on a track with a pulse of
 * energy travelling along it. Active node glows; a detail panel sits below.
 * Suited to transactional flows (booking, payments).
 */
export default function PipelineFlow({ steps, accent, accent2 = accent }: FlowProps) {
  const { active, setActive, setPaused } = useFlowAutoplay(steps.length);
  const Current = steps[active].icon;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="select-none"
    >
      {/* Track + nodes */}
      <div className="relative px-2">
        <div
          className="absolute left-3 right-3 top-7 h-1 -translate-y-1/2 overflow-hidden rounded-full"
          style={{ background: `${accent}26` }}
        >
          <span
            className="flow-x absolute top-0 h-full w-24 rounded-full"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}, ${accent2}, transparent)` }}
          />
        </div>

        <div className="relative flex items-start justify-between gap-1">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const on = i === active;
            const done = i < active;
            return (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className="group flex flex-1 flex-col items-center"
                aria-label={s.title}
              >
                <span className="relative grid place-items-center">
                  {on && (
                    <span
                      className="ping-soft absolute h-12 w-12 rounded-full md:h-14 md:w-14"
                      style={{ border: `2px solid ${accent}` }}
                    />
                  )}
                  <span
                    className={`relative grid h-12 w-12 place-items-center rounded-full border transition-all duration-300 md:h-14 md:w-14 ${
                      on ? 'node-pop scale-105' : 'scale-90 opacity-70 group-hover:opacity-100'
                    }`}
                    style={{
                      background: on ? `${accent}26` : done ? `${accent}14` : 'rgba(255,255,255,0.04)',
                      borderColor: on || done ? accent : 'rgba(255,255,255,0.12)',
                      boxShadow: on ? `0 0 26px -4px ${accent}` : 'none',
                    }}
                  >
                    <Icon className="h-5 w-5 md:h-6 md:w-6" style={{ color: on || done ? accent : '#c7d2fe' }} />
                  </span>
                </span>
                <span
                  className={`mt-3 hidden text-center text-[11px] font-medium transition-colors sm:block ${
                    on ? 'text-white' : 'text-indigo-200/50'
                  }`}
                >
                  {s.tag ?? `Step ${i + 1}`}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail */}
      <div className="mt-9 rounded-2xl glass border-glow p-6">
        <div className="flex items-start gap-4">
          <span
            className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
            style={{ background: `${accent}22`, border: `1px solid ${accent}55` }}
          >
            <Current className="h-6 w-6" style={{ color: accent }} />
          </span>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Step {active + 1} / {steps.length}
              </span>
              {steps[active].tag && (
                <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-indigo-200/70">
                  {steps[active].tag}
                </span>
              )}
            </div>
            <h4 className="mt-1 font-display text-lg font-bold text-white">{steps[active].title}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-indigo-200/75">{steps[active].desc}</p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={() => setActive((active - 1 + steps.length) % steps.length)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-indigo-100 transition-colors hover:bg-white/15"
            aria-label="Previous step"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-1.5">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to step ${i + 1}`}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === active ? 26 : 8,
                  background: i === active ? accent : 'rgba(255,255,255,0.18)',
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setActive((active + 1) % steps.length)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-indigo-100 transition-colors hover:bg-white/15"
            aria-label="Next step"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
