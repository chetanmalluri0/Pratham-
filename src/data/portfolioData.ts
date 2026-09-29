import { Project, Service, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Pratham Handur',
  title: 'Freelance Web Designer & Frontend Engineer',
  phone: '+91 8310662724',
  phoneRaw: '+918310662724',
  whatsappUrl: 'https://wa.me/918310662724?text=Hi%20Pratham,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20collaborate%20on%20a%20project!',
  email: 'prathamhandur.design@gmail.com',
  location: 'Bangalore, India · Working Worldwide',
  availability: 'Available for Select Projects (Q3/Q4 2026)',
  bio: "Hi, I'm Pratham Handur — a passionate web designer focused on turning bold ideas into stunning, lightning-fast digital realities. I specialize in crafting bespoke user experiences, conversion-engineered landing pages, and production-ready web applications with exceptional attention to typography, micro-interactions, and performance.",
};

export const PROJECTS: Project[] = [
  {
    id: 'forge-web-app',
    name: 'Forge Web Application',
    category: 'Web Application',
    tagline: 'High-performance modern SaaS platform with real-time analytics',
    description: 'High-performance modern web application built with clean architecture and sleek UI. Features modular dashboard widgets, reactive telemetry views, and instant responsiveness engineered for power users.',
    url: 'https://forge-ncyc.vercel.app/',
    featured: true,
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Modular UI', 'Vercel Edge'],
    metrics: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Initial Load Time', value: '< 280ms' },
      { label: 'User Flow Steps', value: '-35% friction' },
    ],
    accentColor: '#38bdf8', // Cyan / Electric blue
    mockupType: 'forge',
  },
  {
    id: 'haven-horizon-realty',
    name: 'Haven Horizon Realty',
    category: 'Luxury Real Estate',
    tagline: 'Immersive architectural showcase for prime coastal & city residences',
    description: 'Premium real estate platform layout featuring elegant property presentation and immersive user flow. Highlights floor-to-ceiling visual assets, interactive estate filter models, and high-conversion consultation funnels.',
    url: 'https://haven-horizon-realty-2.vercel.app/',
    featured: true,
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'High Conversion', 'Mobile Responsive'],
    metrics: [
      { label: 'Inbound Inquiries', value: '+142%' },
      { label: 'Session Dwell Time', value: '4m 18s' },
      { label: 'Visual Fidelity', value: '4K Display Optimized' },
    ],
    accentColor: '#818cf8', // Indigo / Violet
    mockupType: 'haven',
  },
  {
    id: 'noir-kitchen-bar',
    name: 'Noir Kitchen & Bar',
    category: 'Hospitality & Dining',
    tagline: 'Moody, high-end culinary experience and bespoke reservation portal',
    description: 'Sophisticated hospitality and restaurant website design with a moody, high-end aesthetic. Combines dramatic typography, sensory cocktail and tasting menu curation, and effortless table reservation mechanics.',
    url: 'https://noirkitchenbar.vercel.app/',
    featured: true,
    tags: ['Sensory UI', 'Tailwind CSS', 'Responsive Layout', 'Direct Reservations', 'Gastronomy'],
    metrics: [
      { label: 'Table Bookings', value: '+88% direct' },
      { label: 'Mobile Bounce Rate', value: '< 22%' },
      { label: 'Menu Engagement', value: '3.4x average' },
    ],
    accentColor: '#f59e0b', // Amber / Gold
    mockupType: 'noir',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'service-ui-ux',
    number: '01',
    title: 'Custom Web Design & UI/UX',
    subtitle: 'Strategic digital interfaces that captivate and convert',
    description: 'From zero-to-one product interfaces to elevated brand websites. I design thoughtful user journeys, establish cohesive design systems, and sculpt every pixel to reflect authority and modern aesthetic distinction.',
    deliverables: [
      'Interactive Figma prototypes & wireframes',
      'Scalable design token system & typography scale',
      'Mobile-first responsive interface architecture',
      'Micro-interaction & animation specifications',
    ],
    idealFor: 'Startups, digital products, and established brands demanding a memorable, non-templated digital identity.',
  },
  {
    id: 'service-frontend',
    number: '02',
    title: 'Full-Stack Frontend Development',
    subtitle: 'Ultra-fast, production-grade code that scales effortlessly',
    description: 'Bridging high-end visual design with uncompromising engineering discipline. Built on clean React, Next.js, and TypeScript architectures that deliver sub-second response times and 99+ performance scores.',
    deliverables: [
      'Production-ready React / Next.js / TypeScript code',
      'Tailwind CSS architecture with zero style bloat',
      'Rigorous accessibility (WCAG AA) & SEO metadata',
      'API integrations, state management, and edge deployment',
    ],
    idealFor: 'Founders and product managers who require seamless designer-to-developer execution with zero friction.',
  },
  {
    id: 'service-optimization',
    number: '03',
    title: 'E-Commerce & Landing Page Optimization',
    subtitle: 'High-converting sales funnels built for peak ROI',
    description: 'Optimizing every element of the viewport to guide user psychology toward action. By eliminating visual noise and sharpening value propositions, your traffic turns into revenue.',
    deliverables: [
      'Data-informed hero & value proposition layouts',
      'Friction-free checkout & lead generation capture',
      'Core Web Vitals tuning & asset compression',
      'A/B test ready structural variants',
    ],
    idealFor: 'Direct-to-consumer brands, SaaS product launches, and service agencies aiming to scale paid and organic acquisition.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Vision',
    desc: 'Deep dive into your business goals, target audience, competitive landscape, and functional requirements.',
  },
  {
    step: '02',
    title: 'Architecture & UX Wireframes',
    desc: 'Mapping conversion funnels, information hierarchy, and content structures before touching visual styling.',
  },
  {
    step: '03',
    title: 'High-Fidelity Visual Craft',
    desc: 'Sculpting typography, dark/light themes, custom component aesthetics, and fluid micro-interactions.',
  },
  {
    step: '04',
    title: 'Engineering & Global Launch',
    desc: 'Writing clean, resilient code, running comprehensive browser testing, and deploying to high-speed CDN edges.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Pratham brought a level of visual finesse and speed that exceeded our highest expectations. The Forge application UI feels fluid, modern, and distinctly high-end.',
    author: 'Aarav Mehta',
    role: 'Co-founder & Head of Product',
    company: 'Forge Cloud Systems',
    project: 'Forge Web Application',
  },
  {
    id: '2',
    quote: 'Our real estate listings needed a luxury editorial touch that generic templates could never provide. Pratham delivered Haven Horizon with breathtaking visual clarity.',
    author: 'Elena Vance',
    role: 'Managing Principal',
    company: 'Haven Horizon Properties',
    project: 'Haven Horizon Realty',
  },
  {
    id: '3',
    quote: 'Noir Kitchen & Bar required a moody, atmospheric aesthetic that translated our Michelin-starred ambiance online. Direct table bookings increased within the first two weeks.',
    author: 'Marcus Sterling',
    role: 'Creative Director & Sommelier',
    company: 'Noir Hospitality Group',
    project: 'Noir Kitchen & Bar',
  },
];

export const TECH_STACK = [
  'React 19',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Figma',
  'Motion',
  'Vite',
  'Node.js',
  'Vercel Edge',
  'REST APIs',
  'Responsive Design',
  'SEO & Performance',
];
