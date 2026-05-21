import { Link } from 'react-router';
import { Github, Linkedin, Mail, MapPin, Instagram, Phone, Orbit, ArrowUp } from 'lucide-react';
import { useSectionNav } from '@/react-app/hooks/useSectionNav';
import { projects } from '@/react-app/data/projects';

export default function Footer() {
  const year = new Date().getFullYear();
  const goTo = useSectionNav();

  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="glass-strong">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500">
                  <Orbit className="h-5 w-5 text-white" />
                </span>
                <span className="font-display text-lg font-bold text-white">Nikhil Khandelwal</span>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-indigo-200/70">
                Full-Stack Developer crafting fast, futuristic web products — from booking engines and
                fintech platforms to e-commerce brands. Always building, always learning.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm text-indigo-200/70">
                <MapPin className="h-4 w-4 text-cyan-300" />
                Noida, Uttar Pradesh, India
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Explore</h3>
              <ul className="space-y-2.5 text-sm">
                {projects.slice(0, 4).map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/projects/${p.slug}`}
                      className="text-indigo-200/70 transition-colors hover:text-cyan-300"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/services" className="font-medium text-cyan-300/90 transition-colors hover:text-cyan-200">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="font-medium text-cyan-300/90 transition-colors hover:text-cyan-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Connect</h3>
              <div className="mb-5 flex gap-3">
                {[
                  { Icon: Github, href: 'https://github.com/nikhilkhgla', label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/nikhil-khandelwal-3972a9217', label: 'LinkedIn' },
                  { Icon: Instagram, href: 'https://www.instagram.com/nikhil_khandelwal_02/', label: 'Instagram' },
                  { Icon: Mail, href: 'mailto:kosinikhilkhand@gmail.com', label: 'Email' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-indigo-100 transition-all hover:scale-110 hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <a
                href="tel:+918937879361"
                className="flex items-center gap-2 text-sm text-indigo-200/70 transition-colors hover:text-cyan-300"
              >
                <Phone className="h-4 w-4" />
                +91 89378 79361
              </a>
              <button
                onClick={() => goTo('contact')}
                className="mt-4 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
              >
                Let&apos;s work together →
              </button>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm text-indigo-200/60 md:flex-row">
            <span>© {year} Nikhil Khandelwal · Designed &amp; built across the cosmos.</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
            >
              Back to top <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
