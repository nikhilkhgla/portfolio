import { ArrowLeft, ArrowRight, Server } from 'lucide-react';
import { useFlowAutoplay } from '@/react-app/hooks/useFlowAutoplay';
import type { FlowProps } from './types';

/**
 * "Super machine → network" flow for Hyper-V / virtualization. A glowing
 * central host streams animated data packets out to device/VM nodes along
 * connecting lines. Auto-plays and is fully interactive.
 */
export default function MachineFlow({ steps, accent, accent2 = accent }: FlowProps) {
  const { active, setActive, setPaused } = useFlowAutoplay(steps.length);
  const n = steps.length;
  const Current = steps[active].icon;

  const mx = 15;
  const my = 50;
  const nodePos = (i: number) => ({ x: 83, y: n === 1 ? 50 : 14 + i * (72 / (n - 1)) });
  const act = nodePos(active);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="select-none"
    >
      <div className="relative mx-auto w-full max-w-[640px]">
        <div className="relative aspect-[5/4] w-full sm:aspect-[16/9]">
          {/* Connecting lines + data packets */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            {steps.map((s, i) => {
              const { x, y } = nodePos(i);
              const on = i === active;
              const done = i < active;
              return (
                <line
                  key={s.title}
                  x1={mx}
                  y1={my}
                  x2={x}
                  y2={y}
                  stroke={on ? accent : done ? `${accent}55` : `${accent}22`}
                  strokeWidth={on ? 0.7 : 0.4}
                  strokeLinecap="round"
                />
              );
            })}

            {/* packets travelling along the active line */}
            {[0, 0.5, 1].map((d, k) => (
              <circle key={k} r="1.4" fill={accent}>
                <animate attributeName="cx" from={mx} to={act.x} dur="1.5s" begin={`${d}s`} repeatCount="indefinite" />
                <animate attributeName="cy" from={my} to={act.y} dur="1.5s" begin={`${d}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0" dur="1.5s" begin={`${d}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </svg>

          {/* Super machine */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${mx}%`, top: `${my}%` }}>
            <div className="relative grid place-items-center">
              <span className="ping-soft absolute h-20 w-20 rounded-2xl" style={{ border: `2px solid ${accent}` }} />
              <div
                className="relative grid h-20 w-16 place-items-center rounded-2xl glass-strong"
                style={{ border: `1px solid ${accent}66`, boxShadow: `0 0 44px -8px ${accent}` }}
              >
                <Server className="h-7 w-7" style={{ color: accent }} />
                <span className="absolute bottom-2 flex gap-1">
                  <span className="h-1 w-1 animate-pulse rounded-full" style={{ background: accent }} />
                  <span className="h-1 w-1 animate-pulse rounded-full" style={{ background: accent2 }} />
                  <span className="h-1 w-1 animate-pulse rounded-full" style={{ background: accent }} />
                </span>
              </div>
              <span className="mt-2 whitespace-nowrap text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-indigo-200/70">
                Super Machine
              </span>
            </div>
          </div>

          {/* Device / VM nodes */}
          {steps.map((s, i) => {
            const { x, y } = nodePos(i);
            const Icon = s.icon;
            const on = i === active;
            return (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
                aria-label={s.title}
              >
                {on && (
                  <span
                    className="ping-soft absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-xl"
                    style={{ border: `2px solid ${accent}` }}
                  />
                )}
                <span
                  className={`relative grid h-11 w-11 place-items-center rounded-xl border transition-all duration-300 ${
                    on ? 'node-pop' : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    background: on ? `${accent}26` : 'rgba(8,12,20,0.9)',
                    borderColor: on ? accent : 'rgba(255,255,255,0.14)',
                    boxShadow: on ? `0 0 22px -4px ${accent}` : 'none',
                  }}
                >
                  <Icon className="h-5 w-5" style={{ color: on ? accent : '#c7d2fe' }} />
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail */}
        <div className="mt-6 rounded-2xl glass border-glow p-5">
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
                  Stage {active + 1} / {steps.length}
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
              aria-label="Previous stage"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-1.5">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to stage ${i + 1}`}
                  className="h-1.5 rounded-full transition-all"
                  style={{ width: i === active ? 26 : 8, background: i === active ? accent : 'rgba(255,255,255,0.18)' }}
                />
              ))}
            </div>
            <button
              onClick={() => setActive((active + 1) % steps.length)}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-indigo-100 transition-colors hover:bg-white/15"
              aria-label="Next stage"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
