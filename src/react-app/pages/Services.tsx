import { Link } from 'react-router';
import {
  Code2, ShoppingBag, Globe, CreditCard, Store, BarChart3,
  ArrowUpRight, Sparkles, Compass, PenTool, Hammer, Rocket, Check,
} from 'lucide-react';
import Reveal from '@/react-app/components/Reveal';
import SectionTitle from '@/react-app/components/SectionTitle';
import TiltCard from '@/react-app/components/TiltCard';

const services = [
  {
    Icon: Code2,
    title: 'Full-Stack Web Development',
    desc: 'Fast, modern web apps built with React, TypeScript, Node.js and Cloudflare Workers — from idea to production.',
    points: ['React + TypeScript SPAs', 'REST APIs & backends', 'Cloud deployment & CI'],
    accent: '#22d3ee',
    grad: 'from-cyan-400 to-blue-500',
  },
  {
    Icon: ShoppingBag,
    title: 'Shopify Development',
    desc: 'Custom Shopify storefronts in Liquid — themes, product pages and a UI tuned to convert visitors into buyers.',
    points: ['Custom Liquid themes', 'Product & collection pages', 'Conversion optimisation'],
    accent: '#fb7185',
    grad: 'from-rose-400 to-orange-500',
  },
  {
    Icon: Globe,
    title: 'WordPress Websites',
    desc: 'Professional business sites on WordPress + Elementor — polished, responsive and built for SEO and lead-gen.',
    points: ['Elementor design', 'On-page SEO', 'Lead-capture funnels'],
    accent: '#2dd4bf',
    grad: 'from-emerald-400 to-teal-500',
  },
  {
    Icon: CreditCard,
    title: 'Booking & Payment Systems',
    desc: 'End-to-end booking engines with Stripe payments, availability, confirmations and an admin panel.',
    points: ['Stripe integration', 'Availability & bookings', 'Admin dashboards'],
    accent: '#8b5cf6',
    grad: 'from-violet-400 to-purple-600',
  },
  {
    Icon: Store,
    title: 'E-commerce & Marketplaces',
    desc: 'Launch and run a brand across Shopify, Amazon and Flipkart — store design, listings and merchandising.',
    points: ['Multi-channel setup', 'Catalog & listings', 'Brand & store design'],
    accent: '#f59e0b',
    grad: 'from-yellow-400 to-orange-600',
  },
  {
    Icon: BarChart3,
    title: 'Analytics & Dashboards',
    desc: 'Bring sales data from every channel into one real-time dashboard with clear, actionable insights.',
    points: ['Channel attribution', 'Real-time dashboards', 'Retention insights'],
    accent: '#a855f7',
    grad: 'from-fuchsia-400 to-purple-500',
  },
];

const steps = [
  { Icon: Compass, title: 'Discover', desc: 'We talk goals, audience and scope so the build solves the real problem.' },
  { Icon: PenTool, title: 'Design', desc: 'Clean, on-brand UI/UX mapped out before a line of code is written.' },
  { Icon: Hammer, title: 'Build', desc: 'Production-grade code, shipped in iterations you can see and steer.' },
  { Icon: Rocket, title: 'Launch', desc: 'Deploy, optimise and hand over — with support to keep growing.' },
];

export default function Services() {
  return (
    <div className="relative z-10">
      <section className="px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
              <Sparkles className="h-4 w-4" /> What I Do
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
              <span className="text-gradient-animate">Services</span> that ship.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-indigo-200/75">
              From a single landing page to a full booking platform or a brand selling across marketplaces —
              I design and build it end-to-end.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <TiltCard className="h-full rounded-3xl glass border-glow p-7" max={9}>
                <div
                  className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.grad}`}
                  style={{ boxShadow: `0 14px 40px -16px ${s.accent}` }}
                >
                  <s.Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-indigo-200/70">{s.desc}</p>
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-indigo-100/80">
                      <Check className="h-4 w-4 shrink-0" style={{ color: s.accent }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
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
