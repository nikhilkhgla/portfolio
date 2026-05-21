import type { LucideIcon } from 'lucide-react';
import {
  Search, CalendarDays, CreditCard, Mail, LayoutDashboard,
  Lightbulb, Code2, ShoppingBag, Smartphone, TrendingUp,
  Plug, Server, PieChart, BarChart3, Users,
  ClipboardList, Layout, Database, Rocket,
  Cpu, Activity, ScanLine, Sprout,
  Globe, Calculator,
  Truck, FileText, Banknote, Wallet,
  Palette, Store, Package, Megaphone,
  Building2, Landmark, Leaf, Milk, ChefHat,
} from 'lucide-react';

export type WorkflowStyle = 'pipeline' | 'stepper' | 'orbit' | 'journey' | 'stack';

export interface WorkflowStep {
  title: string;
  desc: string;
  icon: LucideIcon;
  tag?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: 'Freelance' | 'Professional' | 'Client' | 'Product';
  period: string;
  role: string;
  summary: string;
  description: string;
  tech: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  status?: string;
  gradient: string; // tailwind gradient classes (from-/via-/to-)
  accent: string; // hex for glow
  accent2?: string; // secondary hex for two-tone theming
  Icon: LucideIcon;
  workflowStyle: WorkflowStyle;
  workflow: WorkflowStep[];
}

export const projects: Project[] = [
  {
    slug: 'rentvilla',
    title: 'RentVilla Booking Engine',
    tagline: 'Vacation-rental bookings with end-to-end payments',
    category: 'Professional',
    period: 'Feb 2026 – Present',
    role: 'Full-Stack Developer · Braj Aggarwal, CPA, P.C.',
    summary:
      'A complete vacation-rental booking platform where guests browse villas, check real-time availability and pay securely, while owners run everything from one admin panel.',
    description:
      'RentVilla is a full booking engine with an integrated admin panel. Guests explore listings, select available dates, and complete secure checkout through Stripe with automated email confirmations. Owners manage listings, bookings and pricing from a single dashboard. Built with React, TypeScript, Tailwind CSS and Cloudflare Workers.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers', 'Stripe', 'REST APIs'],
    features: [
      'Property listings with rich media & filters',
      'Real-time availability calendar',
      'Secure Stripe payment gateway',
      'Automated booking & email confirmations',
      'Admin panel for listings, bookings & pricing',
    ],
    metrics: [
      { value: 'Stripe', label: 'Payments' },
      { value: 'Real-time', label: 'Availability' },
      { value: 'Admin', label: 'Dashboard' },
    ],
    liveUrl: 'https://rentvilla.us/',
    status: 'Live · full payment integration in progress',
    gradient: 'from-cyan-400 via-sky-500 to-violet-600',
    accent: '#22d3ee',
    accent2: '#8b5cf6',
    Icon: Building2,
    workflowStyle: 'pipeline',
    workflow: [
      { title: 'Browse & Search Villas', desc: 'Guests explore properties with rich media, filters and clear pricing.', icon: Search, tag: 'Discovery' },
      { title: 'Pick Dates & Availability', desc: 'A real-time availability calendar prevents double-bookings instantly.', icon: CalendarDays, tag: 'Calendar' },
      { title: 'Secure Stripe Checkout', desc: 'Integrated Stripe gateway processes payments safely and reliably.', icon: CreditCard, tag: 'Payments' },
      { title: 'Instant Confirmation', desc: 'REST APIs finalise the booking and fire off automated email confirmations.', icon: Mail, tag: 'Workflow' },
      { title: 'Admin Control Panel', desc: 'Owners manage listings, bookings, pricing and reports from one place.', icon: LayoutDashboard, tag: 'Admin' },
    ],
  },
  {
    slug: 'mortzee',
    title: 'Mortzee — Mortgage Broker',
    tagline: 'A full mortgage brokerage site for NY & NJ',
    category: 'Client',
    period: '2025',
    role: 'Web Developer & Designer',
    summary:
      'A complete mortgage-broker website for a New York & New Jersey brokerage — designed and built end-to-end on WordPress with loan journeys, a live calculator and a guided application funnel.',
    description:
      'Mortzee is a registered NY/NJ mortgage broker. I designed and built the entire website on WordPress (Elementor): six dedicated loan-program journeys — FHA, VA, HELOC, Jumbo, Conventional and Non-QM — an interactive mortgage calculator, a guided 6-step online loan process, plus blog, team and FAQ sections, all tuned for lead generation.',
    tech: ['WordPress', 'Elementor', 'PHP', 'HTML/CSS', 'JavaScript', 'SEO'],
    features: [
      'Six loan-program landing journeys',
      'Interactive monthly mortgage calculator',
      'Guided 6-step online loan process',
      'Lead-capture & application funnel',
      'Responsive, SEO-optimised build',
    ],
    metrics: [
      { value: '6', label: 'Loan Programs' },
      { value: 'NY / NJ', label: 'Markets' },
      { value: 'Calc', label: 'Mortgage Tool' },
    ],
    liveUrl: 'https://www.mortzee.com/',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    accent: '#2dd4bf',
    accent2: '#22d3ee',
    Icon: Landmark,
    workflowStyle: 'stepper',
    workflow: [
      { title: 'Discovery & Brand', desc: 'Mapped the brokerage, NY/NJ market and compliance needs into a clear site structure.', icon: Lightbulb, tag: 'Strategy' },
      { title: 'WordPress + Elementor Build', desc: 'Built the architecture and design system in WordPress with Elementor.', icon: Globe, tag: 'Build' },
      { title: 'Loan-Program Pages', desc: 'FHA, VA, HELOC, Jumbo, Conventional and Non-QM journeys, each with its own narrative.', icon: FileText, tag: 'Content' },
      { title: 'Mortgage Calculator', desc: 'An interactive tool estimating monthly payments from amount, rate and term.', icon: Calculator, tag: 'Feature' },
      { title: 'Funnel & Launch', desc: 'Connected the application portal, optimised for SEO and went live.', icon: Rocket, tag: 'Launch' },
    ],
  },
  {
    slug: 'myfactor',
    title: 'MyFactor LLC — Freight Factoring',
    tagline: 'Invoices to cash in 24 hours for truckers',
    category: 'Client',
    period: '2025 – 2026',
    role: 'Web Developer & Designer',
    summary:
      'A freight-factoring fintech site for trucking companies that turns unpaid invoices into cash within 24 hours, with a clean factoring flow, app links and payment integration.',
    description:
      'MyFactor LLC is a freight-factoring service for carriers and brokers across the USA. I designed and built the marketing site end-to-end, communicating the core promise — get paid within 24 hours — through a crisp "Deliver → Submit → Get Paid → We Collect" flow, links to the iOS & Android apps, and a Tank Payments integration for fast, transparent payouts.',
    tech: ['WordPress', 'Elementor', 'PHP', 'HTML/CSS', 'JavaScript', 'Tank Payments'],
    features: [
      'Carrier & broker factoring journeys',
      '24-hour quick-pay messaging',
      'Four-step factoring flow UX',
      'iOS & Android app integration',
      'Tank Payments & client-portal links',
    ],
    metrics: [
      { value: '24h', label: 'Payout' },
      { value: 'iOS+Android', label: 'Apps' },
      { value: 'Tank Pay', label: 'Integration' },
    ],
    liveUrl: 'https://www.myfactorllc.com/',
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
    accent: '#fb923c',
    accent2: '#f43f5e',
    Icon: Truck,
    workflowStyle: 'pipeline',
    workflow: [
      { title: 'Fintech Discovery', desc: 'Studied the freight-factoring model for carriers and brokers.', icon: Lightbulb, tag: 'Research' },
      { title: 'Marketing Site Build', desc: 'Designed and built the full WordPress experience and brand visuals.', icon: Layout, tag: 'Design' },
      { title: 'Factoring Flow UX', desc: 'Deliver the load → submit invoice → get paid in 24h → we collect.', icon: Banknote, tag: 'UX' },
      { title: 'App + Payments', desc: 'Linked the mobile apps and integrated Tank Payments for fast payouts.', icon: Wallet, tag: 'Integration' },
      { title: 'Launch & Portal', desc: 'Connected the client portal and shipped, with ongoing iteration.', icon: Rocket, tag: 'Launch' },
    ],
  },
  {
    slug: 'karpur',
    title: 'Karpur — Desi Ghee D2C',
    tagline: 'A pure-ghee brand, live across 3 marketplaces',
    category: 'Client',
    period: '2025 – Present',
    role: 'Shopify Developer & Designer',
    summary:
      'A direct-to-consumer Shopify brand for pure Bilona buffalo ghee — designed end-to-end and merchandised live across Shopify, Amazon and Flipkart.',
    description:
      'Karpur brings the wisdom of "Old Bharat" to modern tables with pure, preservative-free buffalo ghee made through slow Bilona churning. I designed the complete brand experience — the Shopify storefront, product pages with video, and brand story — and led merchandising live across Shopify, Amazon and Flipkart. Every design on the brand is mine, and I continue to manage the store.',
    tech: ['Shopify', 'Liquid', 'HTML/CSS', 'JavaScript', 'Amazon', 'Flipkart'],
    features: [
      'Full Shopify storefront & theme design',
      'Product pages with video & rich media',
      'Brand identity & story-driven UI',
      'Live across Shopify, Amazon & Flipkart',
      'Conversion-focused, mobile-first layout',
    ],
    metrics: [
      { value: '3', label: 'Sales Channels' },
      { value: 'Shopify', label: 'Storefront' },
      { value: 'D2C', label: 'Brand' },
    ],
    liveUrl: 'https://karpur.in/',
    gradient: 'from-yellow-400 via-amber-500 to-orange-600',
    accent: '#f59e0b',
    accent2: '#ea580c',
    Icon: Milk,
    workflowStyle: 'journey',
    workflow: [
      { title: 'Brand & Story', desc: 'Shaped the "Old Bharat" identity around purity, Bilona craft and trust.', icon: Palette, tag: 'Brand' },
      { title: 'Shopify Store Design', desc: 'Designed the full storefront, theme and immersive product video.', icon: Store, tag: 'Design' },
      { title: 'Catalog & Merchandising', desc: 'Built ghee listings, pricing, collections and trust badges.', icon: Package, tag: 'Catalog' },
      { title: 'Multi-Channel Listing', desc: 'Took the brand live across Shopify, Amazon and Flipkart.', icon: ShoppingBag, tag: 'Channels' },
      { title: 'Launch & Growth', desc: 'Conversion-tuned UI, launch offers and ongoing store management.', icon: Megaphone, tag: 'Growth' },
    ],
  },
  {
    slug: 'cinnamon-kitchen',
    title: 'The Cinnamon Kitchen',
    tagline: 'A premium Shopify store for a gourmet food brand',
    category: 'Freelance',
    period: 'Nov 2025 – Jan 2026',
    role: 'Freelance Shopify Developer',
    summary:
      'A freelance Shopify build for a premium food brand — custom Liquid theme, conversion-focused product pages and full mobile optimisation.',
    description:
      'As a freelance Shopify developer, I designed and customised the complete e-commerce store for The Cinnamon Kitchen, a premium food brand. Built with Shopify Liquid, HTML, CSS and JavaScript, the store features bespoke product and collection pages, a refined brand-led UI, and was optimised end-to-end for performance and conversions.',
    tech: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Custom Shopify theme in Liquid',
      'Bespoke product & collection pages',
      'Premium, brand-led UI/UX',
      'Mobile-responsive design',
      'Performance & conversion optimisation',
    ],
    metrics: [
      { value: 'Shopify', label: 'Platform' },
      { value: 'Custom', label: 'Liquid Theme' },
      { value: 'Freelance', label: 'Engagement' },
    ],
    liveUrl: 'https://cinnamon.kitchen/',
    gradient: 'from-rose-400 via-pink-500 to-orange-500',
    accent: '#fb7185',
    accent2: '#f97316',
    Icon: ChefHat,
    workflowStyle: 'stepper',
    workflow: [
      { title: 'Brand Discovery', desc: 'Understood the premium food brand, audience and goals as a freelancer.', icon: Lightbulb, tag: 'Discovery' },
      { title: 'Shopify Theme Build', desc: 'Customised the theme in Liquid with HTML, CSS and JavaScript.', icon: Code2, tag: 'Build' },
      { title: 'Products & Collections', desc: 'Crafted product and collection pages and merchandising.', icon: ShoppingBag, tag: 'Catalog' },
      { title: 'UI/UX + Mobile Polish', desc: 'Refined the layout and tuned speed across every device.', icon: Smartphone, tag: 'Polish' },
      { title: 'Conversion & Launch', desc: 'Optimised the UI for conversions and launched the store.', icon: TrendingUp, tag: 'Launch' },
    ],
  },
  {
    slug: 'sales-analytics',
    title: 'Sales Tracking & Analytics',
    tagline: 'One real-time view across every sales channel',
    category: 'Professional',
    period: 'Nov 2025 – Dec 2025',
    role: 'Backend & Dashboard Developer',
    summary:
      'A sales-intelligence dashboard that unifies Shopify, Meta Ads, Google Ads, organic and retention data into a single real-time view.',
    description:
      'A sales tracking and analytics system that brings every revenue channel together. A Node.js + Express backend fetches and processes Shopify order data through REST APIs, while the dashboard breaks revenue down by source, compares channel performance and surfaces customer-retention insights — all in real time.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'REST APIs'],
    features: [
      'Channel-wise sales tracking',
      'Shopify order data via REST APIs',
      'Revenue breakdown by source',
      'Meta / Google / Organic comparison',
      'Customer retention insights',
    ],
    metrics: [
      { value: '4+', label: 'Channels' },
      { value: 'Real-time', label: 'Dashboard' },
      { value: 'Node', label: 'Backend' },
    ],
    liveUrl: 'https://shopify-dashboard-rosy.vercel.app/',
    gradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
    accent: '#a855f7',
    accent2: '#d946ef',
    Icon: BarChart3,
    workflowStyle: 'orbit',
    workflow: [
      { title: 'Connect Data Sources', desc: 'Pulled data from Shopify, Meta Ads, Google Ads and organic channels.', icon: Plug, tag: 'Ingest' },
      { title: 'Process Orders via API', desc: 'Node/Express backend fetches and processes Shopify order data.', icon: Server, tag: 'Backend' },
      { title: 'Channel Attribution', desc: 'Revenue broken down and attributed by source and channel.', icon: PieChart, tag: 'Model' },
      { title: 'Real-Time Dashboard', desc: 'KPIs and performance comparisons visualised live.', icon: BarChart3, tag: 'Visualise' },
      { title: 'Retention Insights', desc: 'Surfaced customer-retention trends to guide decisions.', icon: Users, tag: 'Insight' },
    ],
  },
  {
    slug: 'eco-india',
    title: 'Eco India — Smart Farming',
    tagline: 'IoT + AI for real-time crop intelligence',
    category: 'Product',
    period: 'Sep 2024 – Apr 2025',
    role: 'Full-Stack & IoT Developer',
    summary:
      'A smart-agriculture platform fusing IoT sensors with AI to give farmers real-time crop monitoring, irrigation control and decision support.',
    description:
      'Eco India is a smart-farming platform that integrates IoT sensors with AI tools for real-time crop monitoring and irrigation. It adds a Smart Crop Calendar and an AI Farm Scanner that analyse field conditions to sharpen day-to-day farmer decisions, improving efficiency across the season. Built with React, Node.js, IoT and AI.',
    tech: ['React.js', 'Node.js', 'IoT', 'AI'],
    features: [
      'IoT sensors for crop & soil data',
      'Real-time monitoring & irrigation',
      'AI Farm Scanner for crop health',
      'Smart Crop Calendar',
      'Farmer decision-support dashboard',
    ],
    metrics: [
      { value: 'IoT', label: 'Sensors' },
      { value: 'AI', label: 'Farm Scanner' },
      { value: 'Real-time', label: 'Monitoring' },
    ],
    liveUrl: 'https://ecoindia.vercel.app/',
    gradient: 'from-green-400 via-emerald-500 to-teal-600',
    accent: '#34d399',
    accent2: '#14b8a6',
    Icon: Leaf,
    workflowStyle: 'orbit',
    workflow: [
      { title: 'Deploy IoT Sensors', desc: 'Field sensors capture soil moisture, crop and environment data.', icon: Cpu, tag: 'Hardware' },
      { title: 'Real-Time Monitoring', desc: 'Sensor streams power live crop and irrigation tracking.', icon: Activity, tag: 'Stream' },
      { title: 'AI Farm Scanner', desc: 'AI analyses field inputs to assess crop health.', icon: ScanLine, tag: 'AI' },
      { title: 'Smart Crop Calendar', desc: 'Guides sowing, watering and harvest decisions.', icon: CalendarDays, tag: 'Plan' },
      { title: 'Farmer Dashboard', desc: 'Actionable insights that improve decision-making efficiency.', icon: Sprout, tag: 'Insight' },
    ],
  },
  {
    slug: 'anava-computing',
    title: 'Anava Computing Website',
    tagline: 'A Java + Spring Boot corporate platform',
    category: 'Professional',
    period: 'May 2025 – Oct 2025',
    role: 'Java Developer',
    summary:
      'The corporate website for Anava Computing, built on a Java + Spring Boot + Thymeleaf stack with dynamic content management and MySQL-backed CRUD.',
    description:
      'I developed and maintained the company website for Anava Computing using Java, Spring Boot and Thymeleaf. The build pairs a responsive Bootstrap UI with dynamic content-management features, REST APIs and optimised MySQL CRUD operations, following Agile practices and deployed on a Tomcat server.',
    tech: ['Java', 'Spring Boot', 'Thymeleaf', 'Bootstrap', 'MySQL', 'Tomcat'],
    features: [
      'Server-rendered Thymeleaf UI',
      'Core Java + Spring Boot backend',
      'REST APIs & dynamic content management',
      'Optimised MySQL CRUD operations',
      'Agile workflow, Tomcat deployment',
    ],
    metrics: [
      { value: 'Spring Boot', label: 'Backend' },
      { value: 'MySQL', label: 'Database' },
      { value: 'Tomcat', label: 'Deploy' },
    ],
    liveUrl: 'https://anavacomputing.com/',
    gradient: 'from-blue-400 via-indigo-500 to-violet-600',
    accent: '#6366f1',
    accent2: '#8b5cf6',
    Icon: Code2,
    workflowStyle: 'stack',
    workflow: [
      { title: 'Requirements & Architecture', desc: 'Defined the site structure and content model with the team.', icon: ClipboardList, tag: 'Plan' },
      { title: 'Spring Boot Backend', desc: 'Built backend modules with Core Java, Spring Boot and REST APIs.', icon: Server, tag: 'Backend' },
      { title: 'Thymeleaf + Bootstrap UI', desc: 'Responsive server-rendered pages with a clean Bootstrap UI.', icon: Layout, tag: 'Frontend' },
      { title: 'MySQL Integration', desc: 'Integrated MySQL and optimised CRUD operations.', icon: Database, tag: 'Data' },
      { title: 'Deploy on Tomcat', desc: 'Agile builds deployed and maintained on a Tomcat server.', icon: Rocket, tag: 'Deploy' },
    ],
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getAdjacent = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: i > 0 ? projects[i - 1] : projects[projects.length - 1],
    next: i < projects.length - 1 ? projects[i + 1] : projects[0],
  };
};
