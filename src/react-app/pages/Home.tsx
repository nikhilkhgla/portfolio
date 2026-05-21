import { useEffect } from 'react';
import { useLocation } from 'react-router';
import {
  ArrowDown, ArrowUpRight, Download, MapPin, Calendar, Award, GraduationCap,
  Code2, Server, Database, Wrench, Mail, Instagram, Github, Linkedin,
  Phone, Sparkles, Zap, Send, CheckCircle2, Briefcase, BookOpen, Rocket,
} from 'lucide-react';
import Reveal from '@/react-app/components/Reveal';
import SectionTitle from '@/react-app/components/SectionTitle';
import TiltCard from '@/react-app/components/TiltCard';
import ProjectCard from '@/react-app/components/ProjectCard';
import CountUp from '@/react-app/components/CountUp';
import { projects } from '@/react-app/data/projects';
import { useSectionNav } from '@/react-app/hooks/useSectionNav';

const heroStats = [
  { value: '8+', label: 'Projects Shipped' },
  { value: '6+', label: 'Live Products' },
  { value: '3', label: 'Companies' },
];

const techMarquee = [
  'React', 'TypeScript', 'Node.js', 'Cloudflare Workers', 'Stripe', 'Tailwind CSS',
  'Java', 'Spring Boot', 'Python', 'Shopify', 'Liquid', 'WordPress', 'MySQL',
  'Express.js', 'REST APIs', 'IoT', 'AI',
];

const skillGroups = [
  { title: 'Languages', icon: Code2, items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS'], grad: 'from-cyan-400 to-blue-500' },
  { title: 'Frameworks', icon: Server, items: ['React', 'Node.js', 'Express.js', 'Spring Boot', 'Tailwind CSS', 'Angular / Ionic', 'Bootstrap'], grad: 'from-violet-400 to-purple-600' },
  { title: 'Databases & Cloud', icon: Database, items: ['MySQL', 'MongoDB', 'Firebase', 'Cloudflare Workers', 'Vercel', 'REST APIs'], grad: 'from-emerald-400 to-teal-500' },
  { title: 'Platforms & Tools', icon: Wrench, items: ['Shopify', 'Liquid', 'WordPress', 'Stripe', 'Git / GitLab', 'Canva'], grad: 'from-fuchsia-400 to-pink-500' },
];

const experience = [
  {
    title: 'Software Engineer',
    company: 'Braj Aggarwal, CPA, P.C.',
    period: 'Sep 2025 – Present',
    points: [
      'Developing the RentVilla booking platform with booking & payment integration',
      'Built a Fintech Admin Portal for transactions, reports & user management',
      'Worked across React, TypeScript, APIs & Cloudflare Workers',
      'Managed deployment, server setup & office networking',
    ],
  },
  {
    title: 'Java Developer',
    company: 'Anava Computing Technology Pvt. Ltd.',
    period: 'May 2025 – Sep 2025',
    points: [
      'Built dynamic web apps using Spring MVC, Thymeleaf and Bootstrap',
      'Developed backend modules with Core Java, Spring Boot and REST APIs',
      'Integrated MySQL and optimised CRUD operations',
      'Followed Agile practices, deployed builds on Tomcat',
    ],
  },
  {
    title: 'Associate Intern',
    company: 'Spundan Consultancy & IT Solutions Pvt. Ltd.',
    period: 'Jun 2023 – Jul 2023',
    points: [
      'Developed a dynamic HR Payroll app using Angular, Ionic and TypeScript',
      'Enhanced application performance and UI/UX',
      'Collaborated with Agile teams for smooth feature deployment',
      'Gained hands-on experience in API integration & mobile optimisation',
    ],
  },
];

const certifications = [
  { name: 'Big Data Technology', org: 'FutureSkills Prime · IT-ITeS SSC', year: 'Certified' },
  { name: 'Head Designer', org: 'NGO Shiksha Kayakalp, GLA', year: 'Mar 2024' },
  { name: 'React JS Course', org: 'Ducat, Delhi', year: '2023' },
  { name: 'Data Structures & Algorithms', org: 'Apna College', year: '2023' },
];

export default function Home() {
  const location = useLocation();
  const goTo = useSectionNav();

  // Scroll to a section if navigated here with a target.
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      const t = window.setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return () => window.clearTimeout(t);
    }
  }, [location.state]);

  return (
    <div className="relative">
      {/* ===================== HERO ===================== */}
      <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Reveal>
            {/* Avatar */}
            <div className="relative mx-auto mb-9 h-36 w-36">
              <span className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 blur-[2px]" />
              <span className="absolute -inset-3 rounded-full border border-white/10" />
              <span className="absolute -inset-6 rounded-full border border-white/5" />
              <div className="absolute inset-1.5 overflow-hidden rounded-full bg-space-900">
                <img src="/nikhil-kh.png" alt="Nikhil Khandelwal" className="h-full w-full object-cover" />
              </div>
              <span className="absolute right-1 top-2 grid h-8 w-8 place-items-center rounded-full bg-green-500 ring-4 ring-space-950">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Available for work & collaborations
            </span>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl">
              <span className="text-gradient-animate">Nikhil</span> Khandelwal
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-indigo-100/80 md:text-2xl">
              Full-Stack Developer building <span className="text-cyan-300">fast</span>,{' '}
              <span className="text-violet-300">futuristic</span> web products.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-indigo-200/60 md:text-base">
              Booking engines, fintech platforms, e-commerce brands and smart-farming systems —
              from React &amp; Cloudflare to Shopify, Stripe and beyond.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => goTo('projects')}
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 px-8 py-3.5 font-semibold text-white shadow-glow transition-transform hover:scale-105"
              >
                <Zap className="h-5 w-5" />
                Explore My Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 rounded-full border border-white/15 glass px-8 py-3.5 font-semibold text-white transition-all hover:scale-105 hover:border-cyan-400/40"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center justify-center gap-3">
              {[
                { Icon: Github, href: 'https://github.com/nikhilkhgla', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/nikhil-khandelwal-3972a9217/?originalSubdomain=in', label: 'LinkedIn' },
                { Icon: Instagram, href: 'https://www.instagram.com/nikhil_khandelwal_02/', label: 'Instagram' },
                { Icon: Mail, href: 'mailto:kosinikhilkhand@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 glass text-indigo-100 transition-all hover:scale-110 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-center gap-2 text-sm text-indigo-200/60">
              <MapPin className="h-4 w-4" /> Noida, Uttar Pradesh, India
            </div>

            {/* Stats */}
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-3">
              {heroStats.map((s) => (
                <div key={s.label} className="rounded-2xl glass px-3 py-4">
                  <CountUp value={s.value} className="inline-block font-display text-2xl font-bold text-gradient md:text-3xl" />
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-indigo-200/60">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <button
          onClick={() => goTo('about')}
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </section>

      {/* ===================== TECH MARQUEE ===================== */}
      <div className="relative z-10 overflow-hidden border-y border-white/10 py-5 glass">
        <div className="marquee-track">
          {[...techMarquee, ...techMarquee].map((t, i) => (
            <span key={i} className="mx-6 inline-flex items-center gap-3 font-display text-lg font-medium text-indigo-100/50">
              {t} <span className="text-cyan-400/50">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ===================== ABOUT ===================== */}
      <section id="about" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Who I Am" title="About Me" />
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <TiltCard className="rounded-3xl glass border-glow p-8" max={6}>
                <h3 className="mb-4 flex items-center gap-3 font-display text-2xl font-bold text-white">
                  <Sparkles className="h-6 w-6 text-violet-300" /> Crafting the future, one build at a time
                </h3>
                <p className="leading-relaxed text-indigo-200/75">
                  I'm a Computer Science graduate and full-stack developer who loves turning ideas into
                  polished, production-ready products. My work spans booking engines, fintech platforms,
                  e-commerce brands and IoT + AI systems.
                </p>
                <p className="mt-4 leading-relaxed text-indigo-200/75">
                  From React, TypeScript and Cloudflare Workers to Shopify, Stripe and Spring Boot — I focus
                  on clean architecture, delightful UI and real business impact. Whether it's a Stripe-powered
                  booking flow or a brand selling across Amazon, Flipkart and Shopify, I design and ship it
                  end-to-end.
                </p>
              </TiltCard>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {[
                { Icon: Briefcase, label: 'Software Engineer', sub: 'Braj Aggarwal, CPA' },
                { Icon: Rocket, label: 'Ships Live Products', sub: 'Used by real users' },
                { Icon: Award, label: 'Head Designer', sub: 'Shiksha Kayakalp' },
                { Icon: GraduationCap, label: 'B.Tech CSE', sub: 'GLA University' },
              ].map(({ Icon, label, sub }, i) => (
                <Reveal key={label} delay={i * 90}>
                  <TiltCard className="rounded-2xl glass border-glow p-5" max={10}>
                    <Icon className="mb-3 h-8 w-8 text-cyan-300" />
                    <div className="font-display font-semibold text-white">{label}</div>
                    <div className="text-sm text-indigo-200/60">{sub}</div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SKILLS ===================== */}
      <section id="skills" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Toolbox" title="Technical Skills" subtitle="The stack I reach for to design, build and ship." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 90}>
                <TiltCard className="h-full rounded-3xl glass border-glow p-6" max={10}>
                  <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${g.grad}`}>
                    <g.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-4 font-display text-lg font-bold text-white">{g.title}</h3>
                  <ul className="space-y-2.5">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-indigo-200/75">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROJECTS ===================== */}
      <section id="projects" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Featured Work"
            title="Projects & Workflows"
            subtitle="Tap any project to step through its 3D workflow — how it was built, end to end."
          />
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== EXPERIENCE ===================== */}
      <section id="experience" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionTitle eyebrow="Journey" title="Experience" />
          <div className="relative">
            <div className="pointer-events-none absolute bottom-0 left-4 top-0 w-px flow-line md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <Reveal key={exp.company} delay={i * 80}>
                  <div className={`relative flex gap-5 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <span className="absolute left-4 top-7 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-cyan-400 ring-4 ring-space-950 md:left-1/2" />
                    <div className={`w-full pl-12 md:w-1/2 md:pl-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <TiltCard className="rounded-2xl glass border-glow p-6" max={5}>
                        <div className="mb-1 flex items-center gap-2 text-xs font-medium text-cyan-300">
                          <Calendar className="h-3.5 w-3.5" /> {exp.period}
                        </div>
                        <h3 className="font-display text-xl font-bold text-white">{exp.title}</h3>
                        <p className="mb-4 text-sm font-medium text-violet-300">{exp.company}</p>
                        <ul className="space-y-2">
                          {exp.points.map((pt) => (
                            <li key={pt} className="flex items-start gap-2 text-sm text-indigo-200/70">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400/80" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </TiltCard>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== EDUCATION & CERTS ===================== */}
      <section id="education" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Foundations" title="Education & Certifications" />
          <Reveal>
            <TiltCard className="mb-8 rounded-3xl glass border-glow p-7" max={5}>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-600">
                    <GraduationCap className="h-7 w-7 text-white" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      B.Tech — Computer Science &amp; Engineering
                    </h3>
                    <p className="text-indigo-200/70">GLA University, Mathura</p>
                  </div>
                </div>
                <span className="flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-cyan-200">
                  <Calendar className="h-4 w-4" /> Sep 2021 – Jul 2025
                </span>
              </div>
            </TiltCard>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <TiltCard className="rounded-2xl glass border-glow p-5" max={9}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <BookOpen className="mt-0.5 h-5 w-5 text-violet-300" />
                      <div>
                        <div className="font-semibold text-white">{c.name}</div>
                        <div className="text-sm text-indigo-200/60">{c.org}</div>
                      </div>
                    </div>
                    <span className="shrink-0 text-sm font-medium text-cyan-300">{c.year}</span>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Say Hello"
            title="Let's Build Something"
            subtitle="Have a project, a role, or an idea? I'd love to hear about it."
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact info */}
            <Reveal>
              <div className="space-y-4">
                {[
                  { Icon: Mail, label: 'Email', value: 'kosinikhilkhand@gmail.com', href: 'mailto:kosinikhilkhand@gmail.com' },
                  { Icon: Phone, label: 'Phone', value: '+91 89378 79361', href: 'tel:+918937879361' },
                  { Icon: Instagram, label: 'Instagram', value: '@nikhil_khandelwal_02', href: 'https://www.instagram.com/nikhil_khandelwal_02/' },
                  { Icon: MapPin, label: 'Location', value: 'Noida, Uttar Pradesh, 201303' },
                ].map(({ Icon, label, value, href }) => {
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
              </div>
            </Reveal>

            {/* Form (Formspree) */}
            <Reveal delay={120}>
              <form
                action="https://formspree.io/f/mrblkpne"
                method="POST"
                className="rounded-3xl glass-strong border-glow p-7"
              >
                <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-white">
                  <Send className="h-5 w-5 text-cyan-300" /> Send a Message
                </h3>
                <div className="space-y-4">
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
                  <textarea
                    name="message"
                    rows={4}
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
        </div>
      </section>
    </div>
  );
}
