import { Link } from 'react-router';
import { ArrowUpRight, Sparkles, Compass, PenTool, Hammer, Rocket } from 'lucide-react';
import Reveal from '@/react-app/components/Reveal';
import SectionTitle from '@/react-app/components/SectionTitle';
import TiltCard from '@/react-app/components/TiltCard';
import ServiceCard from '@/react-app/components/ServiceCard';
import FloatingOrbs from '@/react-app/components/FloatingOrbs';
import { services, serviceGroups } from '@/react-app/data/services';
import { useSEO, SITE_URL } from '@/react-app/hooks/useSEO';

const steps = [
  { Icon: Compass, title: 'Discover', desc: 'We talk goals, audience and scope so the build solves the real problem.' },
  { Icon: PenTool, title: 'Design', desc: 'Clean, on-brand UI/UX mapped out before a line of code is written.' },
  { Icon: Hammer, title: 'Build', desc: 'Production-grade work, shipped in iterations you can see and steer.' },
  { Icon: Rocket, title: 'Launch', desc: 'Deploy, optimise and hand over — with support to keep growing.' },
];

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Services offered by Nikhil Khandelwal',
      itemListElement: services.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/services/${s.slug}`,
        name: s.title,
        item: {
          '@type': 'Service',
          name: s.title,
          description: s.short,
          url: `${SITE_URL}/services/${s.slug}`,
          provider: { '@type': 'Person', name: 'Nikhil Khandelwal', url: `${SITE_URL}/` },
        },
      })),
    },
  ],
};

export default function Services() {
  useSEO({
    title: 'Services — Web, AI, Automation, Networking & IoT | Nikhil Khandelwal',
    description:
      'Services by Nikhil Khandelwal: full-stack & Shopify/WordPress development, booking & payment systems, e-commerce, SEO, analytics, custom CRM, automation, AI chatbots & custom AI, networking, Hyper-V & Remote Desktop, SonicWall firewall and IoT setups — each with its own interactive workflow.',
    path: '/services',
    jsonLd: servicesJsonLd,
  });

  return (
    <div className="relative z-10">
      <section className="relative overflow-hidden px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <FloatingOrbs />
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
              <Sparkles className="h-4 w-4" /> What I Do
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
              <span className="text-gradient-animate">Services</span> that ship.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-indigo-200/75">
              From web apps and online stores to AI, automation, networking and IoT — tap any service to
              see exactly how I build it, step by step.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grouped by category */}
      {serviceGroups.map((group, gi) => {
        const list = services.filter((s) => s.group === group);
        return (
          <section key={group} className="px-4 pb-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <SectionTitle eyebrow={`0${gi + 1}`} title={group} />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {list.map((s, i) => (
                  <Reveal key={s.slug} delay={(i % 3) * 90}>
                    <ServiceCard service={s} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Process */}
      <section className="px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="How We Work" title="A Simple, Clear Process" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <TiltCard className="h-full rounded-2xl glass border-glow p-6" max={10}>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/25 to-violet-600/25 ring-1 ring-white/10">
                      <s.Icon className="h-6 w-6 text-cyan-300" />
                    </span>
                    <span className="font-display text-3xl font-bold text-white/10">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-display font-semibold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-indigo-200/70">{s.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl glass-strong border-glow p-10 text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Got something to <span className="text-gradient">build</span>?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-indigo-200/75">
              Tell me about your project — I'll get back with ideas and a plan.
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
    </div>
  );
}
