import { useMemo, type CSSProperties } from 'react';
import { useParams, Link } from 'react-router';
import {
  ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Sparkles, Workflow, Compass,
} from 'lucide-react';
import { getProject, getAdjacent } from '@/react-app/data/projects';
import { useSectionNav } from '@/react-app/hooks/useSectionNav';
import Reveal from '@/react-app/components/Reveal';
import TiltCard from '@/react-app/components/TiltCard';
import ProjectWorkflow, { STYLE_LABEL } from '@/react-app/components/workflows/ProjectWorkflow';
import { useSEO, SITE_URL } from '@/react-app/hooks/useSEO';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  const goTo = useSectionNav();

  const jsonLd = useMemo(() => {
    if (!project) return undefined;
    const url = `${SITE_URL}/projects/${project.slug}`;
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CreativeWork',
          name: project.title,
          headline: project.title,
          description: project.description,
          url,
          image: `${SITE_URL}/nikhil-kh.png`,
          keywords: project.tech.join(', '),
          about: project.tagline,
          author: { '@type': 'Person', name: 'Nikhil Khandelwal', url: `${SITE_URL}/` },
          creator: { '@type': 'Person', name: 'Nikhil Khandelwal', url: `${SITE_URL}/` },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: project.title, item: url },
          ],
        },
      ],
    };
  }, [project]);

  useSEO({
    title: project ? `${project.title} — Nikhil Khandelwal` : 'Project Not Found — Nikhil Khandelwal',
    description: project
      ? project.summary
      : "This project couldn't be found. Explore Nikhil Khandelwal's portfolio of full-stack, Shopify, WordPress, fintech and IoT projects.",
    path: project ? `/projects/${project.slug}` : '/projects',
    jsonLd,
  });

  if (!project) {
    return (
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <Compass className="mb-5 h-14 w-14 text-violet-300" />
        <h1 className="font-display text-3xl font-bold text-white">Lost in space</h1>
        <p className="mt-3 text-indigo-200/70">This project drifted out of orbit or doesn't exist.</p>
        <Link
          to="/"
          className="mt-7 flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-semibold text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </div>
    );
  }

  const { Icon } = project;
  const { prev, next } = getAdjacent(project.slug);

  return (
    <div className="relative z-10" style={{ ['--accent']: project.accent } as CSSProperties}>
      {/* Per-project colour wash */}
      <div className="project-aura" />

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-30"
          style={{ background: `radial-gradient(60% 100% at 50% 0%, ${project.accent}, transparent 70%)` }}
        />
        <div className="relative mx-auto max-w-5xl">
          <button
            onClick={() => goTo('projects')}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-indigo-200/70 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </button>

          <Reveal>
            <div className="flex flex-col gap-7 md:flex-row md:items-center">
              <span
                className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl glass-strong"
                style={{ boxShadow: `0 16px 50px -16px ${project.accent}` }}
              >
                <Icon className="h-9 w-9 text-white" />
              </span>
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full glass px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    {project.category}
                  </span>
                  <span className="text-sm text-indigo-200/60">{project.period}</span>
                </div>
                <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-3 max-w-2xl text-lg text-indigo-200/75">{project.tagline}</p>
                <p className="mt-2 text-sm font-medium text-violet-300">{project.role}</p>
              </div>
            </div>
          </Reveal>

          {/* Tech + CTA */}
          <Reveal delay={120}>
            <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-indigo-100/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-glow transition-transform hover:scale-105"
                >
                  Visit Live Site <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </Reveal>

          {project.status && (
            <Reveal delay={160}>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-cyan-200">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" /> {project.status}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ===================== METRICS + OVERVIEW ===================== */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="grid grid-cols-3 gap-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl glass px-4 py-5 text-center">
                  <div className="font-display text-xl font-bold text-gradient md:text-2xl">{m.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-indigo-200/60">{m.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <TiltCard className="mt-8 rounded-3xl glass border-glow p-7 md:p-9" max={4}>
              <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-white">
                <Sparkles className="h-5 w-5 text-violet-300" /> Overview
              </h2>
              <p className="text-base leading-relaxed text-indigo-200/80">{project.description}</p>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* ===================== WORKFLOW STORY ===================== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-12 text-center">
            <span
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: project.accent }}
            >
              <Workflow className="h-4 w-4" /> {STYLE_LABEL[project.workflowStyle]}
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold md:text-4xl">
              <span className="text-gradient">How it comes together</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-indigo-200/70">
              It plays through on its own — or hover and tap any step to explore the build of {project.title} yourself.
            </p>
          </Reveal>

          <ProjectWorkflow project={project} />
        </div>
      </section>

      {/* ===================== FEATURES ===================== */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              <span className="text-gradient">Key Features</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.features.map((f, i) => (
              <Reveal key={f} delay={(i % 2) * 80}>
                <TiltCard className="rounded-2xl glass border-glow p-5" max={8}>
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg"
                      style={{ background: `${project.accent}22`, border: `1px solid ${project.accent}44` }}
                    >
                      <CheckCircle2 className="h-4 w-4" style={{ color: project.accent }} />
                    </span>
                    <span className="text-indigo-100/85">{f}</span>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PREV / NEXT ===================== */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          {prev && (
            <Link
              to={`/projects/${prev.slug}`}
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
              to={`/projects/${next.slug}`}
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
