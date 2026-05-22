import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useFlowAutoplay } from '@/react-app/hooks/useFlowAutoplay';
import type { FlowProps } from './types';

/**
 * Robotic / circuit-board flow for IoT systems. Square "chip" nodes with pins
 * and status LEDs sit on a marching circuit trace, over a faint circuit grid.
 * Auto-plays and is fully interactive.
 */
export default function RoboticFlow({ steps, accent, accent2 = accent }: FlowProps) {
  const { active, setActive, setPaused } = useFlowAutoplay(steps.length);
  const Current = steps[active].icon;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="select-none"
    >
      <div
        className="relative overflow-hidden rounded-3xl border p-6 md:p-8"
        style={{
          borderColor: `${accent}33`,
          background: `radial-gradient(120% 120% at 50% 0%, ${accent}12, transparent 60%)`,
        }}
      >
        {/* Circuit grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(${accent2}66 1px, transparent 1px), linear-gradient(90deg, ${accent2}66 1px, transparent 1px)`,
            backgroundSize: '22px 22px',
          }}
        />

        {/* Chips on a marching trace */}
        <div className="relative">
          <div
            className="absolute left-5 right-5 top-8 h-[3px] -translate-y-1/2 overflow-hidden rounded-full"
            style={{ background: `${accent}26` }}
          >
            <span
              className="dash-flow absolute inset-y-0 left-0 w-full"
              style={{ background: `repeating-linear-gradient(90deg, ${accent} 0 8px, transparent 8px 18px)` }}
            />
          </div>

          {/* travelling data packets */}
          <div className="pointer-events-none absolute left-5 right-5 top-8 -translate-y-1/2">
            {[0, 0.8, 1.6].map((d, k) => (
              <span
                key={k}
                className="travel-x absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full"
                style={{ background: accent, boxShadow: `0 0 10px ${accent}`, animationDelay: `${d}s` }}
              />
            ))}
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
                    {/* chip pins */}
                    <span
                      className="absolute -top-1 h-1 w-3 rounded-full"
                      style={{ background: on || done ? accent : 'rgba(255,255,255,0.15)' }}
                    />
                    <span
                      className="absolute -bottom-1 h-1 w-3 rounded-full"
                      style={{ background: on || done ? accent : 'rgba(255,255,255,0.15)' }}
                    />
                    {on && (
                      <span
                        className="ping-soft absolute h-12 w-12 rounded-lg md:h-14 md:w-14"
                        style={{ border: `2px solid ${accent}` }}
                      />
                    )}
                    <span
                      className={`relative grid h-12 w-12 place-items-center rounded-lg border transition-all duration-300 md:h-14 md:w-14 ${
                        on ? 'node-pop' : 'opacity-70 group-hover:opacity-100'
                      }`}
                      style={{
                        background: on ? `${accent}26` : done ? `${accent}14` : 'rgba(8,12,20,0.85)',
                        borderColor: on || done ? accent : 'rgba(255,255,255,0.14)',
                        boxShadow: on ? `0 0 26px -4px ${accent}` : 'none',
                      }}
                    >
                      <Icon className="h-5 w-5 md:h-6 md:w-6" style={{ color: on || done ? accent : '#c7d2fe' }} />
                      {/* status LED */}
                      <span
                        className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full"
                        style={{
                          background: on ? accent : 'rgba(255,255,255,0.25)',
                          boxShadow: on ? `0 0 6px ${accent}` : 'none',
                        }}
                      />
                    </span>
                  </span>
                  <span
                    className={`mt-3 hidden text-center text-[11px] font-medium transition-colors sm:block ${
                      on ? 'text-white' : 'text-indigo-200/50'
                    }`}
                  >
                    {s.tag ?? `Node ${i + 1}`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail */}
        <div
          className="relative mt-8 rounded-2xl border p-5"
          style={{ borderColor: `${accent}33`, background: 'rgba(255,255,255,0.03)' }}
        >
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
                  Node {active + 1} / {steps.length}
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
                  aria-label={`Go to node ${i + 1}`}
                  className="h-1.5 rounded-full transition-all"
                  style={{ width: i === active ? 26 : 8, background: i === active ? accent : 'rgba(255,255,255,0.18)' }}
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
    </div>
  );
}
