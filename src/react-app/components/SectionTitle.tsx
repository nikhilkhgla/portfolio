import Reveal from '@/react-app/components/Reveal';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ eyebrow, title, subtitle, className = '' }: Props) {
  return (
    <Reveal className={`text-center max-w-2xl mx-auto mb-14 ${className}`}>
      {eyebrow && (
        <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.28em] uppercase text-cyan-300 glass">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
        <span className="text-gradient">{title}</span>
      </h2>
      <div className="mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-indigo-200/70 leading-relaxed">{subtitle}</p>
      )}
    </Reveal>
  );
}
