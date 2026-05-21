import { Link } from 'react-router';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import type { Project } from '@/react-app/data/projects';
import TiltCard from '@/react-app/components/TiltCard';

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const { Icon } = project;

  const openLive = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.liveUrl) window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <TiltCard className="rounded-3xl glass border-glow overflow-hidden">
      <Link to={`/projects/${project.slug}`} className="flex h-full flex-col">
        {/* Banner */}
        <div className="relative h-44 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_-10%,rgba(255,255,255,0.45),transparent_55%)]" />
          <div className="absolute inset-0 bg-space-950/35" />

          <div className="absolute left-5 top-5 flex items-center gap-2">
            <span className="rounded-full bg-space-950/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              {project.category}
            </span>
          </div>
          <span className="absolute right-5 top-4 font-display text-5xl font-bold text-white/25">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div
            className="absolute -bottom-7 left-5 grid h-16 w-16 place-items-center rounded-2xl glass-strong shadow-glow"
            style={{ boxShadow: `0 10px 40px -12px ${project.accent}` }}
          >
            <Icon className="h-7 w-7 text-white" />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col px-6 pb-6 pt-10">
          <h3 className="font-display text-xl font-bold text-white transition-colors group-hover/tilt:text-cyan-200">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-indigo-200/70">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-indigo-100/80"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="rounded-full px-2.5 py-1 text-[11px] font-medium text-indigo-300/70">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          <div className="mt-auto flex items-center justify-between pt-6">
            <span className="flex items-center gap-1.5 text-sm font-semibold text-cyan-300">
              Explore workflow
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/tilt:translate-x-0.5 group-hover/tilt:-translate-y-0.5" />
            </span>
            {project.liveUrl && (
              <button
                type="button"
                onClick={openLive}
                aria-label={`Open ${project.title} live site`}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-indigo-100 transition-colors hover:bg-white/15 hover:text-white"
              >
                <ExternalLink className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}
