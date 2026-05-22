import {
  Mail, Phone, MapPin, Instagram, Github, Linkedin, Send, Clock, ChevronDown, MessageSquare,
} from 'lucide-react';
import Reveal from '@/react-app/components/Reveal';
import SectionTitle from '@/react-app/components/SectionTitle';
import TiltCard from '@/react-app/components/TiltCard';
import { useSEO, SITE_URL } from '@/react-app/hooks/useSEO';

const methods = [
  { Icon: Mail, label: 'Email', value: 'kosinikhilkhand@gmail.com', href: 'mailto:kosinikhilkhand@gmail.com' },
  { Icon: Phone, label: 'Phone / WhatsApp', value: '+91 89378 79361', href: 'tel:+918937879361' },
  { Icon: Instagram, label: 'Instagram', value: '@nikhil_khandelwal_02', href: 'https://www.instagram.com/nikhil_khandelwal_02/' },
  { Icon: MapPin, label: 'Location', value: 'Noida, Uttar Pradesh, 201303' },
];

const socials = [
  { Icon: Github, href: 'https://github.com/nikhilkhgla', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/nikhil-khandelwal-3972a9217', label: 'LinkedIn' },
  { Icon: Instagram, href: 'https://www.instagram.com/nikhil_khandelwal_02/', label: 'Instagram' },
  { Icon: Mail, href: 'mailto:kosinikhilkhand@gmail.com', label: 'Email' },
];

const faqs = [
  { q: 'What kind of projects do you take on?', a: 'Full-stack web apps, Shopify and WordPress sites, booking & payment systems, and e-commerce setups across Shopify, Amazon and Flipkart.' },
  { q: 'How do we get started?', a: 'Send a message with a few details about your idea. I’ll reply with questions, a suggested approach and a rough timeline.' },
  { q: 'Do you work with clients remotely?', a: 'Yes — I work with clients remotely and am based in Noida, India. I’m comfortable across time zones.' },
  { q: 'Can you maintain a site after launch?', a: 'Absolutely. I offer ongoing support, updates and improvements after a project goes live.' },
];

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
      ],
    },
    {
      '@type': 'ContactPage',
      name: 'Contact Nikhil Khandelwal',
      url: `${SITE_URL}/contact`,
      about: { '@type': 'Person', name: 'Nikhil Khandelwal', email: 'mailto:kosinikhilkhand@gmail.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function Contact() {
  useSEO({
    title: 'Contact Nikhil Khandelwal — Hire a Full-Stack Developer',
    description:
      'Get in touch with Nikhil Khandelwal — Full-Stack Developer & Software Engineer in Noida, India. Available for full-stack apps, Shopify & WordPress sites, booking systems and e-commerce. Send a message or connect on email, phone or social.',
    path: '/contact',
    jsonLd: contactJsonLd,
  });

  return (
    <div className="relative z-10">
      <section className="px-4 pb-10 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
              <MessageSquare className="h-4 w-4" /> Get In Touch
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
              Let&apos;s build something <span className="text-gradient-animate">great</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-indigo-200/75">
              Have a project, a role, or just an idea? Drop a message and I&apos;ll get back to you soon.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-cyan-200">
              <Clock className="h-4 w-4" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" /> Currently available for new work
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Methods + socials */}
          <Reveal>
            <div className="space-y-4">
              {methods.map(({ Icon, label, value, href }) => {
                const inner = (
                  <TiltCard className="rounded-2xl glass border-glow p-5" max={6}>
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-violet-600/30 ring-1 ring-white/10">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </span>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-indigo-200/50">{label}</div>
                        <div className="font-medium text-white">{value}</div>
                      </div>
                    </div>
                  </TiltCard>
                );
                return href ? (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}

              <div className="flex gap-3 pt-2">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-indigo-100 transition-all hover:scale-110 hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form action="https://formspree.io/f/mrblkpne" method="POST" className="rounded-3xl glass-strong border-glow p-7">
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-white">
                <Send className="h-5 w-5 text-cyan-300" /> Send a Message
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-indigo-200/40 outline-none transition-colors focus:border-cyan-400/60"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-indigo-200/40 outline-none transition-colors focus:border-cyan-400/60"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject (e.g. Shopify store, booking site…)"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-indigo-200/40 outline-none transition-colors focus:border-cyan-400/60"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project…"
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-indigo-200/40 outline-none transition-colors focus:border-cyan-400/60"
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 px-6 py-3.5 font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="Questions" title="Good to Know" />
          <div className="space-y-3">
            {faqs.map((f) => (
              <Reveal key={f.q}>
                <details className="group rounded-2xl glass border-glow p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-display font-semibold text-white">
                    {f.q}
                    <ChevronDown className="h-5 w-5 text-cyan-300 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-indigo-200/75">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
