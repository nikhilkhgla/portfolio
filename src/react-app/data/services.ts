import type { LucideIcon } from 'lucide-react';
import {
  // Card icons
  Code2, ShoppingBag, Globe, CreditCard, Store, BarChart3, Search, LayoutTemplate,
  Users, Workflow, Bot, Brain, Network, Server, ShieldCheck, Cpu,
  // Workflow-step icons
  Compass, Palette, Smartphone, TrendingUp, Lightbulb, Layout, FileText, Gauge,
  Rocket, CalendarDays, Mail, Package, Megaphone, Plug, PieChart, Cog,
  ClipboardList, Database, Zap, GitBranch, MessageSquare, Activity, Target,
  Cable, Wifi, Boxes, Monitor, Shield, Filter, KeyRound,
} from 'lucide-react';
import type { WorkflowStep } from '@/react-app/data/projects';

export type ServiceWorkflowStyle =
  | 'pipeline'
  | 'stepper'
  | 'orbit'
  | 'journey'
  | 'stack'
  | 'shield'
  | 'robotic'
  | 'machine';

export type ServiceGroup =
  | 'Web & Commerce'
  | 'AI, Automation & Software'
  | 'Infrastructure & Networking';

export interface ServiceSample {
  name: string;
  style: string;
  desc: string;
  gradient: string;
}

export interface ServiceMetric {
  value: string;
  label: string;
}

export interface ServiceBenefit {
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  title: string;
  short: string; // card tagline
  group: ServiceGroup;
  Icon: LucideIcon;
  accent: string;
  accent2: string;
  gradient: string; // tailwind from-/via-/to-
  tagline: string; // hero tagline
  description: string;
  deliverables: string[];
  benefits: ServiceBenefit[];
  metrics: ServiceMetric[];
  tech?: string[];
  workflowStyle: ServiceWorkflowStyle;
  workflow: WorkflowStep[];
  samples?: ServiceSample[];
  badge?: string; // optional special label
}

export const services: Service[] = [
  /* ===================== WEB & COMMERCE ===================== */
  {
    slug: 'full-stack-development',
    title: 'Full-Stack Web Development',
    short: 'Fast, modern web apps from idea to production.',
    group: 'Web & Commerce',
    Icon: Code2,
    accent: '#22d3ee',
    accent2: '#8b5cf6',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    tagline: 'End-to-end web apps built with React, TypeScript, Node.js and the cloud.',
    description:
      'I design and build complete web applications — a polished React + TypeScript frontend, a solid API and backend, real databases and third-party integrations, all deployed and scaled on the cloud. From a single landing page to a full SaaS product, you get clean architecture, delightful UI and real business impact.',
    deliverables: [
      'React + TypeScript single-page apps',
      'REST APIs & backend services',
      'Database design & integrations',
      'Cloud deployment, CI & monitoring',
    ],
    benefits: [
      { title: 'One developer, full stack', desc: 'Frontend, backend, database and deploy — handled end to end by one person.' },
      { title: 'Built to scale', desc: 'Clean architecture that grows with your product instead of slowing it down.' },
      { title: 'Fast & modern', desc: 'Snappy, responsive apps using today’s best tools and practices.' },
    ],
    metrics: [
      { value: 'End-to-end', label: 'Delivery' },
      { value: 'React 19', label: 'Frontend' },
      { value: 'Cloud', label: 'Deploy' },
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Cloudflare Workers', 'REST APIs'],
    workflowStyle: 'stack',
    workflow: [
      { title: 'Discovery & Architecture', desc: 'We map goals, scope and the right stack before any code is written.', icon: Compass, tag: 'Plan' },
      { title: 'Frontend in React + TS', desc: 'A fast, responsive, accessible UI built with React and TypeScript.', icon: Code2, tag: 'Frontend' },
      { title: 'API & Backend', desc: 'Robust APIs and backend logic that power the product securely.', icon: Server, tag: 'Backend' },
      { title: 'Database & Integrations', desc: 'Clean data models plus payment, email and third-party integrations.', icon: Database, tag: 'Data' },
      { title: 'Deploy & Scale', desc: 'Shipped to the cloud with CI, monitoring and room to grow.', icon: Rocket, tag: 'Launch' },
    ],
  },
  {
    slug: 'shopify-development',
    title: 'Shopify Development',
    short: 'Custom Shopify stores tuned to convert.',
    group: 'Web & Commerce',
    Icon: ShoppingBag,
    accent: '#fb7185',
    accent2: '#f97316',
    gradient: 'from-rose-400 via-pink-500 to-orange-500',
    tagline: 'Bespoke Shopify storefronts in Liquid — designed to turn visitors into buyers.',
    description:
      'I build custom Shopify storefronts from scratch in Liquid — bespoke themes, rich product and collection pages, and a brand-led UI optimised end-to-end for speed and conversions. Whether it is a new D2C launch or a redesign, the store looks premium and sells.',
    deliverables: [
      'Custom Liquid theme & sections',
      'Product & collection page design',
      'Conversion & speed optimisation',
      'Mobile-first responsive build',
    ],
    benefits: [
      { title: 'Designed to convert', desc: 'Every section is built to turn visitors into paying customers.' },
      { title: 'Truly custom', desc: 'No cookie-cutter themes — a store that looks and feels like your brand.' },
      { title: 'Fast on mobile', desc: 'Most shoppers are on phones; your store will fly there.' },
    ],
    metrics: [
      { value: 'Custom', label: 'Liquid Theme' },
      { value: 'Mobile-first', label: 'Design' },
      { value: 'CRO', label: 'Optimised' },
    ],
    tech: ['Shopify', 'Liquid', 'HTML/CSS', 'JavaScript'],
    workflowStyle: 'journey',
    workflow: [
      { title: 'Brand & Goals', desc: 'Understand the brand, audience and what a winning store looks like.', icon: Palette, tag: 'Brand' },
      { title: 'Theme in Liquid', desc: 'Build a bespoke, fast theme with custom Liquid sections.', icon: Code2, tag: 'Build' },
      { title: 'Products & Collections', desc: 'Craft product pages, collections and merchandising that sell.', icon: ShoppingBag, tag: 'Catalog' },
      { title: 'Conversion & Mobile', desc: 'Tune layout, speed and checkout flow across every device.', icon: Smartphone, tag: 'Polish' },
      { title: 'Launch & Grow', desc: 'Go live with offers, tracking and ongoing improvements.', icon: TrendingUp, tag: 'Launch' },
    ],
  },
  {
    slug: 'wordpress-websites',
    title: 'WordPress Websites',
    short: 'Professional, SEO-ready business sites.',
    group: 'Web & Commerce',
    Icon: Globe,
    accent: '#2dd4bf',
    accent2: '#22d3ee',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    tagline: 'Polished WordPress + Elementor sites built for SEO and lead generation.',
    description:
      'I design and build professional business websites on WordPress with Elementor — responsive, fast and tuned for SEO and lead-gen. From service businesses to brokerages, you get a clean, on-brand site you can update yourself, with lead-capture funnels baked in.',
    deliverables: [
      'Elementor design & build',
      'On-page SEO & speed tuning',
      'Lead-capture & contact funnels',
      'Training & post-launch support',
    ],
    benefits: [
      { title: 'Edit it yourself', desc: 'Update text and images anytime — no developer needed.' },
      { title: 'Built for leads', desc: 'Lead-capture and contact funnels baked into the design.' },
      { title: 'SEO-ready', desc: 'Optimised structure and speed so Google can find you.' },
    ],
    metrics: [
      { value: 'Elementor', label: 'Builder' },
      { value: 'SEO', label: 'Ready' },
      { value: 'Self-edit', label: 'CMS' },
    ],
    tech: ['WordPress', 'Elementor', 'PHP', 'SEO'],
    workflowStyle: 'stepper',
    workflow: [
      { title: 'Discovery & Sitemap', desc: 'Plan the structure, pages and goals of the site together.', icon: Lightbulb, tag: 'Plan' },
      { title: 'Design in Elementor', desc: 'Build a polished, on-brand design system in WordPress.', icon: Layout, tag: 'Design' },
      { title: 'Pages & Content', desc: 'Lay out every page with clear, conversion-focused content.', icon: FileText, tag: 'Content' },
      { title: 'SEO & Speed', desc: 'Optimise on-page SEO, performance and responsiveness.', icon: Gauge, tag: 'Optimize' },
      { title: 'Launch & Handover', desc: 'Go live and hand over a site you can manage yourself.', icon: Rocket, tag: 'Launch' },
    ],
  },
  {
    slug: 'booking-payment-systems',
    title: 'Booking & Payment Systems',
    short: 'Bookings with Stripe, availability & admin.',
    group: 'Web & Commerce',
    Icon: CreditCard,
    accent: '#8b5cf6',
    accent2: '#d946ef',
    gradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
    tagline: 'End-to-end booking engines with Stripe payments, availability and an admin panel.',
    description:
      'I build complete booking platforms — guests browse, check real-time availability and pay securely through Stripe, while you run everything from one admin panel. Automated confirmations, double-booking prevention and reporting come standard.',
    deliverables: [
      'Real-time availability calendar',
      'Secure Stripe payment gateway',
      'Automated email confirmations',
      'Admin dashboard & reporting',
    ],
    benefits: [
      { title: 'Get paid securely', desc: 'Stripe-powered checkout your customers can trust.' },
      { title: 'No double-bookings', desc: 'Real-time availability keeps your calendar accurate.' },
      { title: 'Run it from one place', desc: 'Manage bookings, pricing and reports in a single panel.' },
    ],
    metrics: [
      { value: 'Stripe', label: 'Payments' },
      { value: 'Real-time', label: 'Availability' },
      { value: 'Admin', label: 'Dashboard' },
    ],
    tech: ['React', 'TypeScript', 'Stripe', 'REST APIs'],
    workflowStyle: 'pipeline',
    workflow: [
      { title: 'Browse & Search', desc: 'Customers explore listings with rich media and clear pricing.', icon: Search, tag: 'Discover' },
      { title: 'Pick Dates', desc: 'A real-time availability calendar prevents double-bookings.', icon: CalendarDays, tag: 'Calendar' },
      { title: 'Secure Stripe Pay', desc: 'Integrated Stripe checkout processes payments safely.', icon: CreditCard, tag: 'Payments' },
      { title: 'Instant Confirmation', desc: 'The booking is finalised and confirmation emails fire off.', icon: Mail, tag: 'Workflow' },
      { title: 'Admin Control Panel', desc: 'Manage listings, bookings, pricing and reports in one place.', icon: Layout, tag: 'Admin' },
    ],
  },
  {
    slug: 'ecommerce-marketplaces',
    title: 'E-commerce & Marketplaces',
    short: 'Sell across Shopify, Amazon & Flipkart.',
    group: 'Web & Commerce',
    Icon: Store,
    accent: '#f59e0b',
    accent2: '#ea580c',
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    tagline: 'Launch and run a brand across Shopify, Amazon and Flipkart — end to end.',
    description:
      'From store design to live listings, I help launch and run brands across Shopify, Amazon and Flipkart. Storefront design, catalog and merchandising, multi-channel listings and growth — managed as one connected operation.',
    deliverables: [
      'Multi-channel store setup',
      'Catalog, listings & merchandising',
      'Brand & store design',
      'Launch offers & growth support',
    ],
    benefits: [
      { title: 'Sell everywhere', desc: 'Shopify, Amazon and Flipkart — one brand, every channel.' },
      { title: 'Brand that stands out', desc: 'Store design and story that build trust and repeat buyers.' },
      { title: 'Managed for you', desc: 'Listings, merchandising and growth handled end to end.' },
    ],
    metrics: [
      { value: '3+', label: 'Channels' },
      { value: 'D2C', label: 'Brand' },
      { value: 'Live', label: 'Listings' },
    ],
    tech: ['Shopify', 'Amazon', 'Flipkart', 'Liquid'],
    workflowStyle: 'journey',
    workflow: [
      { title: 'Brand & Store', desc: 'Shape the brand identity and the story that sells it.', icon: Palette, tag: 'Brand' },
      { title: 'Storefront Design', desc: 'Design a conversion-focused storefront and theme.', icon: Store, tag: 'Design' },
      { title: 'Catalog & Listings', desc: 'Build product listings, pricing, collections and trust badges.', icon: Package, tag: 'Catalog' },
      { title: 'Multi-Channel', desc: 'Take the brand live across Shopify, Amazon and Flipkart.', icon: ShoppingBag, tag: 'Channels' },
      { title: 'Growth & Ads', desc: 'Drive traffic and conversions with launch and growth tactics.', icon: Megaphone, tag: 'Growth' },
    ],
  },
  {
    slug: 'analytics-dashboards',
    title: 'Analytics & Dashboards',
    short: 'Every channel in one real-time view.',
    group: 'Web & Commerce',
    Icon: BarChart3,
    accent: '#a855f7',
    accent2: '#d946ef',
    gradient: 'from-fuchsia-400 via-purple-500 to-violet-600',
    tagline: 'Bring sales data from every channel into one real-time, actionable dashboard.',
    description:
      'I build sales-intelligence dashboards that unify Shopify, Meta Ads, Google Ads, organic and retention data into a single real-time view. A Node backend processes your data through APIs; the dashboard breaks revenue down by source and surfaces the insights that drive decisions.',
    deliverables: [
      'Channel-wise sales tracking',
      'Revenue attribution by source',
      'Real-time KPI dashboards',
      'Customer retention insights',
    ],
    benefits: [
      { title: 'One source of truth', desc: 'Every channel’s revenue in a single live view.' },
      { title: 'Know what works', desc: 'See which source actually drives sales and retention.' },
      { title: 'Decide faster', desc: 'Clear KPIs that turn raw data into decisions.' },
    ],
    metrics: [
      { value: '4+', label: 'Channels' },
      { value: 'Real-time', label: 'Dashboard' },
      { value: 'Node', label: 'Backend' },
    ],
    tech: ['React', 'Node.js', 'Express.js', 'REST APIs'],
    workflowStyle: 'orbit',
    workflow: [
      { title: 'Connect Sources', desc: 'Pull data from Shopify, Meta, Google Ads and organic channels.', icon: Plug, tag: 'Ingest' },
      { title: 'Process Data', desc: 'A Node/Express backend fetches and processes the data.', icon: Server, tag: 'Backend' },
      { title: 'Attribution', desc: 'Revenue is broken down and attributed by source and channel.', icon: PieChart, tag: 'Model' },
      { title: 'Live Dashboard', desc: 'KPIs and comparisons visualised in real time.', icon: BarChart3, tag: 'Visualise' },
      { title: 'Insights', desc: 'Retention and performance trends that guide decisions.', icon: TrendingUp, tag: 'Insight' },
    ],
  },
  {
    slug: 'seo-optimization',
    title: 'SEO for Websites',
    short: 'Get found on Google for the right searches.',
    group: 'Web & Commerce',
    Icon: Search,
    accent: '#10b981',
    accent2: '#34d399',
    gradient: 'from-emerald-400 via-green-500 to-teal-600',
    tagline: 'Technical + on-page SEO that helps the right people find you on Google.',
    description:
      'I make websites genuinely discoverable — keyword and competitor research, on-page optimisation, technical SEO (speed, sitemaps, structured data), and content and link strategy. Whether it is a portfolio, a store or a business site, the goal is real ranking for the searches that bring you customers.',
    deliverables: [
      'Keyword & competitor research',
      'On-page & technical SEO',
      'Sitemaps, schema & Search Console',
      'Ongoing ranking tracking',
    ],
    benefits: [
      { title: 'Get found', desc: 'Rank for the searches that actually bring customers.' },
      { title: 'Technical + content', desc: 'Speed, structure and content tuned together.' },
      { title: 'Measurable growth', desc: 'Tracked in Search Console so you see progress.' },
    ],
    metrics: [
      { value: 'On-page', label: '+ Technical' },
      { value: 'Schema', label: 'Rich Results' },
      { value: 'Tracked', label: 'Rankings' },
    ],
    tech: ['SEO', 'Schema.org', 'Search Console', 'Analytics'],
    workflowStyle: 'orbit',
    workflow: [
      { title: 'Audit & Keywords', desc: 'Audit the site and research the keywords worth ranking for.', icon: Search, tag: 'Audit' },
      { title: 'On-Page SEO', desc: 'Optimise titles, meta, headings and content for intent.', icon: FileText, tag: 'On-Page' },
      { title: 'Technical SEO', desc: 'Speed, sitemaps, structured data and crawlability.', icon: Cog, tag: 'Technical' },
      { title: 'Content & Authority', desc: 'Build content and links that grow topical authority.', icon: Megaphone, tag: 'Authority' },
      { title: 'Track & Rank', desc: 'Monitor rankings in Search Console and keep improving.', icon: TrendingUp, tag: 'Grow' },
    ],
  },
  {
    slug: 'custom-portfolio',
    title: 'Custom Portfolio Websites',
    short: 'A standout personal site that gets you noticed.',
    group: 'Web & Commerce',
    Icon: LayoutTemplate,
    accent: '#f472b6',
    accent2: '#a855f7',
    gradient: 'from-pink-400 via-fuchsia-500 to-purple-600',
    tagline: 'A unique, fast, SEO-ready portfolio that makes you unforgettable.',
    description:
      'I design and build standout personal portfolios — from clean and minimal to fully animated 3D experiences like this very site. Each one is fast, responsive, SEO-optimised and built around your story, so recruiters and clients remember you. Pick a direction and I make it yours.',
    deliverables: [
      'Bespoke design (minimal to 3D)',
      'Smooth animations & interactions',
      'SEO & performance optimised',
      'Custom domain & deployment',
    ],
    benefits: [
      { title: 'Be unforgettable', desc: 'A site recruiters and clients actually remember.' },
      { title: 'Your story, your way', desc: 'From minimal to immersive 3D — built around you.' },
      { title: 'Found on Google', desc: 'SEO-ready so your name ranks for the right searches.' },
    ],
    metrics: [
      { value: 'Bespoke', label: 'Design' },
      { value: 'SEO', label: 'Optimised' },
      { value: 'Custom', label: 'Domain' },
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js'],
    workflowStyle: 'stepper',
    workflow: [
      { title: 'Discovery & Vibe', desc: 'Define your story, goals and the vibe that fits you.', icon: Compass, tag: 'Plan' },
      { title: 'Design & 3D UI', desc: 'Design a layout and visual style — from minimal to immersive 3D.', icon: Palette, tag: 'Design' },
      { title: 'Build & Animate', desc: 'Build it in React with smooth, tasteful animations.', icon: Code2, tag: 'Build' },
      { title: 'SEO & Speed', desc: 'Tune meta tags, structured data and load speed.', icon: Gauge, tag: 'Optimize' },
      { title: 'Deploy & Domain', desc: 'Ship it live on your own custom domain.', icon: Rocket, tag: 'Launch' },
    ],
    samples: [
      { name: 'Cosmic 3D', style: 'Immersive / Animated', desc: 'A futuristic 3D space theme with animated workflows — like this very site.', gradient: 'from-cyan-400 via-violet-500 to-fuchsia-500' },
      { name: 'Minimal Mono', style: 'Clean / Typographic', desc: 'A crisp, content-first layout that lets your work do the talking.', gradient: 'from-slate-300 via-slate-400 to-slate-600' },
      { name: 'Creative Studio', style: 'Bold / Colorful', desc: 'A vibrant, expressive design for creatives and designers.', gradient: 'from-amber-400 via-pink-500 to-purple-600' },
    ],
  },

  /* ===================== AI, AUTOMATION & SOFTWARE ===================== */
  {
    slug: 'custom-crm',
    title: 'Custom CRM Software',
    short: 'A CRM shaped around how you actually work.',
    group: 'AI, Automation & Software',
    Icon: Users,
    accent: '#0ea5e9',
    accent2: '#6366f1',
    gradient: 'from-sky-400 via-cyan-500 to-blue-600',
    tagline: 'Bespoke CRM software built around your exact process — not the other way around.',
    description:
      'Off-the-shelf CRMs force you to change how you work. I build custom CRM software around your real process — leads, deals, contacts, tasks and reports — with role-based access, automations and dashboards that fit your team perfectly.',
    deliverables: [
      'Custom data model & roles',
      'Leads, deals, tasks & pipelines',
      'Automations & notifications',
      'Reports & dashboards',
    ],
    benefits: [
      { title: 'Fits your process', desc: 'Built around how you work — not a rigid template.' },
      { title: 'Less manual work', desc: 'Automations handle follow-ups and updates for you.' },
      { title: 'Clear visibility', desc: 'Dashboards and reports across your whole pipeline.' },
    ],
    metrics: [
      { value: 'Tailored', label: 'To You' },
      { value: 'Roles', label: 'Access' },
      { value: 'Automated', label: 'Workflows' },
    ],
    tech: ['React', 'Node.js', 'Database', 'REST APIs'],
    workflowStyle: 'stack',
    workflow: [
      { title: 'Map Your Process', desc: 'Capture exactly how your team works today, step by step.', icon: ClipboardList, tag: 'Discover' },
      { title: 'Data Model & Roles', desc: 'Design the schema, records and role-based permissions.', icon: Database, tag: 'Schema' },
      { title: 'Modules & UI', desc: 'Build leads, deals, contacts and tasks with a clean UI.', icon: Layout, tag: 'Build' },
      { title: 'Automations & Reports', desc: 'Automate follow-ups and surface insights with dashboards.', icon: Zap, tag: 'Automate' },
      { title: 'Deploy & Train', desc: 'Roll it out, train the team and support it as you grow.', icon: Rocket, tag: 'Launch' },
    ],
  },
  {
    slug: 'automation',
    title: 'Workflow Automation',
    short: 'Automate the repetitive work away.',
    group: 'AI, Automation & Software',
    Icon: Workflow,
    accent: '#facc15',
    accent2: '#f59e0b',
    gradient: 'from-yellow-400 via-amber-500 to-orange-500',
    tagline: 'Connect your tools and let repetitive tasks run themselves.',
    description:
      'I find the repetitive, manual work eating your time and automate it — connecting your apps and APIs, building triggers and workflows that move data, send messages and update records automatically. Less busywork, fewer errors, more time for what matters.',
    deliverables: [
      'Workflow & process mapping',
      'Trigger-based automations',
      'App & API integrations',
      'Monitoring & alerts',
    ],
    benefits: [
      { title: 'Save hours', desc: 'Repetitive tasks run themselves, every single day.' },
      { title: 'Fewer errors', desc: 'Automated flows are consistent and reliable.' },
      { title: 'Tools that talk', desc: 'Your apps and APIs connected into one smooth flow.' },
    ],
    metrics: [
      { value: '24/7', label: 'Runs' },
      { value: 'APIs', label: 'Connected' },
      { value: 'Zero', label: 'Busywork' },
    ],
    tech: ['Node.js', 'REST APIs', 'Webhooks', 'Integrations'],
    workflowStyle: 'pipeline',
    workflow: [
      { title: 'Find the Bottleneck', desc: 'Spot the repetitive, manual tasks costing you time.', icon: Search, tag: 'Audit' },
      { title: 'Map the Workflow', desc: 'Design the logic and the path data should follow.', icon: GitBranch, tag: 'Design' },
      { title: 'Build Triggers', desc: 'Set up the triggers and actions that fire automatically.', icon: Zap, tag: 'Triggers' },
      { title: 'Connect Tools & APIs', desc: 'Wire your apps and APIs together so data flows.', icon: Plug, tag: 'Integrate' },
      { title: 'Run & Monitor', desc: 'Let it run reliably with monitoring and alerts.', icon: Gauge, tag: 'Run' },
    ],
  },
  {
    slug: 'ai-chatbot',
    title: 'Custom AI Chatbots',
    short: 'A 24/7 assistant trained on your data.',
    group: 'AI, Automation & Software',
    Icon: Bot,
    accent: '#a78bfa',
    accent2: '#22d3ee',
    gradient: 'from-violet-400 via-purple-500 to-indigo-600',
    tagline: 'AI chatbots trained on your business that answer customers around the clock.',
    description:
      'I build custom AI chatbots that actually know your business — trained on your content to answer customers, capture leads and support your team 24/7. Deploy them on your website, WhatsApp or app, with a tone and flow designed to feel on-brand.',
    deliverables: [
      'Chatbot trained on your data',
      'Natural conversation design',
      'Website / WhatsApp / app deploy',
      'Lead capture & analytics',
    ],
    benefits: [
      { title: 'Always on', desc: 'Answers customers around the clock, instantly.' },
      { title: 'Knows your business', desc: 'Trained on your content for accurate, on-brand replies.' },
      { title: 'Captures leads', desc: 'Turns conversations into real enquiries for you.' },
    ],
    metrics: [
      { value: '24/7', label: 'Support' },
      { value: 'Your data', label: 'Trained' },
      { value: 'Omni', label: 'Channel' },
    ],
    tech: ['AI', 'LLMs', 'Node.js', 'REST APIs'],
    workflowStyle: 'orbit',
    workflow: [
      { title: 'Define Use-Case', desc: 'Decide what the bot should do — support, sales or both.', icon: Lightbulb, tag: 'Scope' },
      { title: 'Train on Your Data', desc: 'Feed it your content so answers are accurate and on-brand.', icon: Database, tag: 'Train' },
      { title: 'Conversation Design', desc: 'Shape the tone, flows and fallbacks for a natural feel.', icon: MessageSquare, tag: 'Design' },
      { title: 'Integrate Channels', desc: 'Deploy on your website, WhatsApp or app.', icon: Plug, tag: 'Deploy' },
      { title: 'Improve & Learn', desc: 'Review conversations and keep sharpening responses.', icon: Activity, tag: 'Improve' },
    ],
  },
  {
    slug: 'custom-ai',
    title: 'Custom AI Solutions',
    short: 'AI built for your specific problem.',
    group: 'AI, Automation & Software',
    Icon: Brain,
    accent: '#c084fc',
    accent2: '#ec4899',
    gradient: 'from-fuchsia-400 via-pink-500 to-purple-600',
    tagline: 'Tailored AI — from smart features to full models built around your problem.',
    description:
      'Beyond chatbots, I build custom AI into products and workflows — document analysis, recommendations, scanners, classifiers and smart automations. We define the problem, choose the right models and data, integrate it cleanly via API, and refine it with you over time.',
    deliverables: [
      'AI feature & model design',
      'Data prep & fine-tuning',
      'Clean API integration',
      'Monitoring & refinement',
    ],
    benefits: [
      { title: 'AI that fits', desc: 'Built for your exact problem, not a generic tool.' },
      { title: 'Cleanly integrated', desc: 'Drops into your product or workflow via API.' },
      { title: 'Improves over time', desc: 'Monitored and refined as you scale.' },
    ],
    metrics: [
      { value: 'Tailored', label: 'Models' },
      { value: 'API', label: 'Integrated' },
      { value: 'Smart', label: 'Features' },
    ],
    tech: ['AI', 'LLMs', 'Python', 'APIs'],
    workflowStyle: 'orbit',
    workflow: [
      { title: 'Define the Problem', desc: 'Pin down exactly what the AI needs to solve and why.', icon: Target, tag: 'Scope' },
      { title: 'Data & Models', desc: 'Prepare data and choose the right models for the job.', icon: Database, tag: 'Data' },
      { title: 'Build & Fine-Tune', desc: 'Build, prompt and fine-tune for accuracy and reliability.', icon: Brain, tag: 'Model' },
      { title: 'Integrate via API', desc: 'Wire the AI into your product or workflow cleanly.', icon: Plug, tag: 'Integrate' },
      { title: 'Monitor & Refine', desc: 'Track results and refine the system over time.', icon: Gauge, tag: 'Refine' },
    ],
  },

  /* ===================== INFRASTRUCTURE & NETWORKING ===================== */
  {
    slug: 'networking',
    title: 'Networking Setup',
    short: 'Reliable, secure office & home networks.',
    group: 'Infrastructure & Networking',
    Icon: Network,
    accent: '#38bdf8',
    accent2: '#6366f1',
    gradient: 'from-sky-400 via-blue-500 to-indigo-600',
    tagline: 'Plan, cable, configure and secure networks that just work.',
    description:
      'I set up reliable, secure networks for offices and homes — from a site survey and design to cabling, switches, routers, Wi-Fi, VLANs and security. Everything is documented and monitored so it stays fast and stable.',
    deliverables: [
      'Network design & site survey',
      'Cabling, switches & routers',
      'Wi-Fi, VLANs & segmentation',
      'Security & monitoring',
    ],
    benefits: [
      { title: 'Rock-solid', desc: 'Reliable, fast connectivity that stays up.' },
      { title: 'Secure by design', desc: 'Segmentation and hardening built in from day one.' },
      { title: 'Documented', desc: 'A clear setup you (or any IT) can maintain.' },
    ],
    metrics: [
      { value: 'Designed', label: '+ Cabled' },
      { value: 'Secure', label: 'By Default' },
      { value: 'Monitored', label: 'Uptime' },
    ],
    tech: ['Networking', 'Routers', 'Switches', 'Wi-Fi'],
    workflowStyle: 'stack',
    workflow: [
      { title: 'Site Survey', desc: 'Assess the space, devices and bandwidth needs.', icon: Search, tag: 'Survey' },
      { title: 'Design the Network', desc: 'Plan topology, addressing and segmentation.', icon: Network, tag: 'Design' },
      { title: 'Cabling & Hardware', desc: 'Install structured cabling, switches and routers.', icon: Cable, tag: 'Install' },
      { title: 'Wi-Fi & VLANs', desc: 'Configure Wi-Fi coverage, VLANs and access.', icon: Wifi, tag: 'Configure' },
      { title: 'Secure & Monitor', desc: 'Harden the network and set up monitoring.', icon: ShieldCheck, tag: 'Secure' },
    ],
  },
  {
    slug: 'hyper-v-rdp',
    title: 'Hyper-V & Remote Desktop',
    short: 'Virtual machines & secure remote access.',
    group: 'Infrastructure & Networking',
    Icon: Server,
    accent: '#6366f1',
    accent2: '#8b5cf6',
    gradient: 'from-indigo-400 via-violet-500 to-purple-600',
    tagline: 'One super machine, many virtual machines — with secure Remote Desktop for your whole team.',
    description:
      'I turn a single powerful server into a fleet of virtual machines with Hyper-V, then stream them securely to your team over Remote Desktop. Think of one super machine pushing isolated, backed-up workspaces out to every device on your network — properly planned, secured and hardened, so it is fast, safe and reliable.',
    deliverables: [
      'Hyper-V host setup',
      'Virtual machine creation & config',
      'Secure Remote Desktop access',
      'Backups & hardening',
    ],
    benefits: [
      { title: 'More from one machine', desc: 'Run many isolated VMs on a single powerful host.' },
      { title: 'Work from anywhere', desc: 'Secure Remote Desktop streams workspaces to every device.' },
      { title: 'Safe & recoverable', desc: 'Backups and hardening keep your data protected.' },
    ],
    metrics: [
      { value: 'Hyper-V', label: 'Virtualized' },
      { value: 'Secure', label: 'Remote Access' },
      { value: 'Backed-up', label: '& Hardened' },
    ],
    tech: ['Hyper-V', 'Windows Server', 'RDP', 'Virtualization'],
    workflowStyle: 'machine',
    workflow: [
      { title: 'Plan Resources', desc: 'Size CPU, memory and storage on the host for your workloads.', icon: ClipboardList, tag: 'Plan' },
      { title: 'Set Up the Host', desc: 'Install and configure the Hyper-V super machine and networking.', icon: Server, tag: 'Host' },
      { title: 'Spin Up VMs', desc: 'Create isolated virtual machines that stream out to devices.', icon: Boxes, tag: 'Virtualize' },
      { title: 'Remote Desktop Access', desc: 'Securely deliver each VM to your team over RDP.', icon: Monitor, tag: 'Access' },
      { title: 'Secure & Backup', desc: 'Harden access and put reliable backups in place.', icon: ShieldCheck, tag: 'Secure' },
    ],
  },
  {
    slug: 'sonicwall-firewall',
    title: 'SonicWall Firewall Setup',
    short: 'Enterprise-grade network security.',
    group: 'Infrastructure & Networking',
    Icon: ShieldCheck,
    accent: '#ef4444',
    accent2: '#f97316',
    gradient: 'from-red-500 via-rose-500 to-orange-500',
    tagline: 'Full SonicWall deployment — firewall, VPN, policies and threat protection.',
    description:
      'I deploy and configure SonicWall firewalls end-to-end — from initial assessment to firewall rules, VPN and secure remote access, content and threat filtering, and continuous monitoring. Your network gets enterprise-grade protection that is properly configured, not just plugged in.',
    deliverables: [
      'SonicWall deployment & config',
      'Firewall rules & policies',
      'Site-to-site & remote VPN',
      'Threat protection & monitoring',
    ],
    benefits: [
      { title: 'Real protection', desc: 'Properly configured defense, not just plugged in.' },
      { title: 'Secure remote work', desc: 'Site-to-site and remote VPN done right.' },
      { title: 'Threats blocked', desc: 'Continuous monitoring and threat filtering.' },
    ],
    metrics: [
      { value: 'Enterprise', label: 'Grade' },
      { value: 'VPN', label: 'Secure Access' },
      { value: '24/7', label: 'Threat Watch' },
    ],
    tech: ['SonicWall', 'Firewall', 'VPN', 'Network Security'],
    workflowStyle: 'shield',
    badge: 'Security',
    workflow: [
      { title: 'Assess & Plan', desc: 'Review the network, risks and what needs protecting.', icon: Search, tag: 'Assess' },
      { title: 'Deploy Firewall', desc: 'Install and configure the SonicWall appliance.', icon: Shield, tag: 'Deploy' },
      { title: 'Rules & Policies', desc: 'Define firewall rules, zones and access policies.', icon: Filter, tag: 'Policy' },
      { title: 'VPN & Access', desc: 'Set up secure site-to-site and remote VPN access.', icon: KeyRound, tag: 'VPN' },
      { title: 'Threat Monitoring', desc: 'Enable threat protection and continuous monitoring.', icon: Activity, tag: 'Monitor' },
    ],
  },
  {
    slug: 'iot-setup',
    title: 'IoT Setup & Custom Apps',
    short: 'Connect devices and control them from an app.',
    group: 'Infrastructure & Networking',
    Icon: Cpu,
    accent: '#4ade80',
    accent2: '#22d3ee',
    gradient: 'from-green-400 via-emerald-500 to-cyan-600',
    tagline: 'Sensors, connectivity and a custom app — your devices, fully under your control.',
    description:
      'I build complete IoT systems end-to-end. It starts with the right sensors and hardware deployed in the field, connected reliably over Wi-Fi or cellular. Their readings stream into a real-time data pipeline, and a custom-built app lets you monitor and control everything from your phone or desktop. Add automation rules and alerts, and your hardware becomes a smart, self-running system — from smart farming and smart homes to industrial monitoring.',
    deliverables: [
      'Sensor & device setup',
      'Connectivity & real-time data pipeline',
      'Custom monitoring & control app',
      'Automation rules & alerts',
    ],
    benefits: [
      { title: 'Devices, connected', desc: 'Sensors and hardware working together as one system.' },
      { title: 'Control from your phone', desc: 'A custom app to monitor and command everything live.' },
      { title: 'Automated & scalable', desc: 'Rules, alerts and the room to grow to thousands of devices.' },
    ],
    metrics: [
      { value: 'Sensors', label: '+ Devices' },
      { value: 'Real-time', label: 'Data' },
      { value: 'Custom', label: 'Control App' },
    ],
    tech: ['IoT', 'React', 'Node.js', 'Sensors', 'MQTT'],
    workflowStyle: 'robotic',
    badge: 'Robotics',
    workflow: [
      { title: 'Sensors & Devices', desc: 'Select and deploy the right sensors and hardware in the field.', icon: Cpu, tag: 'Hardware' },
      { title: 'Connectivity', desc: 'Connect every device reliably over Wi-Fi or cellular.', icon: Wifi, tag: 'Connect' },
      { title: 'Data Pipeline', desc: 'Stream and store device readings in real time.', icon: Activity, tag: 'Stream' },
      { title: 'Custom App & Control', desc: 'Monitor and control everything from a custom-built app.', icon: Smartphone, tag: 'App' },
      { title: 'Automate & Scale', desc: 'Add rules, alerts and automation, then scale to more devices.', icon: Zap, tag: 'Automate' },
    ],
  },
];

export const serviceGroups: ServiceGroup[] = [
  'Web & Commerce',
  'AI, Automation & Software',
  'Infrastructure & Networking',
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const getAdjacentService = (slug: string) => {
  const i = services.findIndex((s) => s.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: i > 0 ? services[i - 1] : services[services.length - 1],
    next: i < services.length - 1 ? services[i + 1] : services[0],
  };
};
