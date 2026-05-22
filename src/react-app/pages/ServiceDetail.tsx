import { useMemo, type CSSProperties } from 'react';
import { useParams, Link } from 'react-router';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Workflow, Compass, ShieldCheck,
} from 'lucide-react';
import { getService, getAdjacentService } from '@/react-app/data/services';
import Reveal from '@/react-app/components/Reveal';
import TiltCard from '@/react-app/components/TiltCard';
import CountUp from '@/react-app/components/CountUp';
import ServiceWorkflow, { SERVICE_STYLE_LABEL } from '@/react-app/components/workflows/ServiceWorkflow';
import { useSEO, SITE_URL } from '@/react-app/hooks/useSEO';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;

  const jsonLd = useMemo(() => {
    if (!service) return undefined;
    const url = `${SITE_URL}/services/${service.slug}`;
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: service.title,
          serviceType: service.title,
          description: service.description,
          url,
          provider: { '@type': 'Person', name: 'Nikhil Khandelwal', url: `${SITE_URL}/` },
          areaServed: 'Worldwide',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
            { '@type': 'ListItem', position: 3, name: service.title, item: url },
          ],
        },
      ],
    };
  }, [service]);

  useSEO({
    title: service ? `${service.title} — Nikhil Khandelwal` : 'Service Not Found — Nikhil Khandelwal',
    description: service
      ? `${service.tagline} ${service.short}`
      : "This service couldn't be found. Explore the full range of web, AI, automation and infrastructure services by Nikhil Khandelwal.",
    path: service ? `/services/${service.slug}` : '/services',
    jsonLd,
  });

  if (!service) {
    return (
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <Compass className="mb-5 h-14 w-14 text-violet-300" />
        <h1 className="font-display text-3xl font-bold text-white">Service not found</h1>
        <p className="mt-3 text-indigo-200/70">This service drifted out of orbit or doesn't exist.</p>
        <Link
          to="/services"
          className="mt-7 flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-semibold text-white"
        >
          <ArrowLeft className="h-4 w-4" /> All services
        </Link>
      </div>
    );
  }

  const { Icon } = service;
  const { prev, next } = getAdjacentService(service.slug);

  return (
    <div className="relative z-10" style={{ ['--accent']: service.accent } as CSSProperties}>
      {/* Per-service colour wash */}
      <div className="project-aura" />

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-30"
          style={{ background: `radial-gradient(60% 100% at 50% 0%, ${service.accent}, transparent 70%)` }}
        />
        <div className="relative mx-auto max-w-5xl">
          <Link
            to="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-indigo-200/70 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>

          <Reveal>
            <div className="flex flex-col gap-7 md:flex-row md:items-center">
              <span
                className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl glass-strong"
                style={{ boxShadow: `0 16px 50px -16px ${service.accent}` }}
              >
                <Icon className="h-9 w-9 text-white" />
              </span>
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full glass px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    {service.group}
                  </span>
                  {service.badge && (
                    <span
                      className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
                      style={{ background: `${service.accent}1f`, color: service.accent, border: `1px solid ${service.accent}55` }}
                    >
                      <ShieldCheck className="h-3.5 w-3.5" /> {service.badge}
                    </span>
                  )}
                </div>
                <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-3 max-w-2xl text-lg text-indigo-200/75">{service.tagline}</p>
              </div>
            </div>
          </Reveal>

          {/* Tech + CTA */}
          <Reveal delay={120}>
            <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {(service.tech ?? []).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-indigo-100/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to="/contact"
                className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-glow transition-transform hover:scale-105"
              >
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== METRICS + OVERVIEW ===================== */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="grid grid-cols-3 gap-4">
              {service.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl glass px-4 py-5 text-center">
                  <CountUp value={m.value} className="inline-block font-display text-lg font-bold text-gradient md:text-2xl" />
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-indigo-200/60">{m.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <TiltCard className="mt-8 rounded-3xl glass border-glow p-7 md:p-9" max={4}>
              <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-white">
                <Sparkles className="h-5 w-5 text-violet-300" /> What you get
              </h2>
              <p className="text-base leading-relaxed text-indigo-200/80">{service.description}</p>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* ===================== WORKFLOW ===================== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-12 text-center">
            <span
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: service.accent }}
            >
              <Workflow className="h-4 w-4" /> {SERVICE_STYLE_LABEL[service.workflowStyle]}
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold md:text-4xl">
              <span className="text-gradient">How I build it</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-indigo-200/70">
              It plays through on its own — or hover and tap any step to explore how {service.title} comes together.
            </p>
          </Reveal>

          <ServiceWorkflow service={service} />
        </div>
      </section>

      {/* ===================== WHY IT WORKS ===================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              <span className="text-gradient">Why it works</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {service.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <TiltCard className="h-full rounded-3xl glass border-glow p-6" max={9}>
                  <span className="font-display text-3xl font-bold" style={{ color: service.accent, opacity: 0.4 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-white">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-indigo-200/70">{b.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== DELIVERABLES ===================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              <span className="text-gradient">What's included</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.deliverables.map((d, i) => (
              <Reveal key={d} delay={(i % 2) * 80}>
                <TiltCard className="rounded-2xl glass border-glow p-5" max={8}>
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg"
                      style={{ background: `${service.accent}22`, border: `1px solid ${service.accent}44` }}
                    >
                      <CheckCircle2 className="h-4 w-4" style={{ color: service.accent }} />
                    </span>
                    <span className="text-indigo-100/85">{d}</span>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SAMPLES (portfolio service) ===================== */}
      {service.samples && service.samples.length > 0 && (
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mb-10 text-center">
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                <span className="text-gradient">Sample styles</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-indigo-200/70">
                A few directions I can take your portfolio — more samples coming soon.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {service.samples.map((s, i) => (
                <Reveal key={s.name} delay={i * 90}>
                  <TiltCard className="h-full overflow-hidden rounded-3xl glass border-glow" max={9}>
                    <div className="relative h-32 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient}`} />
                      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_-10%,rgba(255,255,255,0.45),transparent_55%)]" />
                      <div className="absolute inset-0 bg-space-950/25" />
                      <span className="absolute bottom-3 left-4 rounded-full bg-space-950/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                        {s.style}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-white">{s.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-indigo-200/70">{s.desc}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== CTA ===================== */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl glass-strong border-glow p-10 text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Need <span className="text-gradient">{service.title}</span>?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-indigo-200/75">
              Tell me about your project — I'll get back with ideas, an approach and a rough timeline.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 px-8 py-3.5 font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ===================== PREV / NEXT ===================== */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          {prev && (
            <Link
              to={`/services/${prev.slug}`}
              className="group rounded-2xl glass border-glow p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 text-sm text-indigo-200/60">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Previous
              </div>
              <div className="mt-2 font-display text-lg font-semibold text-white group-hover:text-cyan-200">
                {prev.title}
              </div>
            </Link>
          )}
          {next && (
            <Link
              to={`/services/${next.slug}`}
              className="group rounded-2xl glass border-glow p-6 text-right transition-transform hover:-translate-y-1 sm:col-start-2"
            >
              <div className="flex items-center justify-end gap-2 text-sm text-indigo-200/60">
                Next <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="mt-2 font-display text-lg font-semibold text-white group-hover:text-cyan-200">
                {next.title}
              </div>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
