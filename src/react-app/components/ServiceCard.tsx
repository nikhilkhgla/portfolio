import { Link } from 'react-router';
import { ArrowUpRight, Check } from 'lucide-react';
import type { Service } from '@/react-app/data/services';
import TiltCard from '@/react-app/components/TiltCard';

export default function ServiceCard({ service }: { service: Service }) {
  const { Icon } = service;

  return (
    <TiltCard className="h-full rounded-3xl glass border-glow overflow-hidden">
      <Link to={`/services/${service.slug}`} className="flex h-full flex-col">
        {/* Banner */}
        <div className="relative h-28 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_-10%,rgba(255,255,255,0.4),transparent_55%)]" />
          <div className="absolute inset-0 bg-space-950/35" />

          {service.badge && (
            <span className="absolute right-4 top-4 rounded-full bg-space-950/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              {service.badge}
            </span>
          )}

          <div
            className="absolute -bottom-6 left-5 grid h-14 w-14 place-items-center rounded-2xl glass-strong shadow-glow"
            style={{ boxShadow: `0 10px 36px -12px ${service.accent}` }}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col px-6 pb-6 pt-9">
          <h3 className="font-display text-lg font-bold text-white transition-colors group-hover/tilt:text-cyan-200">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-indigo-200/70">{service.short}</p>

          <ul className="mt-4 space-y-1.5">
            {service.deliverables.slice(0, 3).map((d) => (
              <li key={d} className="flex items-center gap-2 text-[13px] text-indigo-100/75">
                <Check className="h-3.5 w-3.5 shrink-0" style={{ color: service.accent }} />
                {d}
              </li>
            ))}
          </ul>

          <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold" style={{ color: service.accent }}>
            See the workflow
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/tilt:translate-x-0.5 group-hover/tilt:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}
