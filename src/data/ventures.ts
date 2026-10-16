import { Venture } from '@/types';

export const ventures: Venture[] = [
  {
    slug: 'dealchowk',
    title: 'DealChowk',
    tagline: 'Hyperlocal Commerce Platform Connecting Neighborhood Merchants with Nearby Shoppers',
    category: 'Hyperlocal Marketplace & Merchant OS',
    status: 'Active Venture',
    period: '2024 — Present',
    role: 'Founder & Product Architect',
    description: 'DealChowk is a dual-sided hyperlocal commerce ecosystem engineered to solve the acute visibility and footfall challenges faced by offline neighborhood retailers. Through proximity-based deal discovery, instant digital vouchers, and a lightweight merchant console, DealChowk bridges high-street physical retail with digital consumer habits.',
    keyHighlights: [
      'Proximity-based discovery engine surfacing active retail promotions within 500m to 5km radius',
      'Dual-interface architecture: high-conversion shopper feed and lightweight merchant management console',
      'Frictionless digital coupon validation system with QR and OTP authentication preventing redemption fraud',
      'Low-barrier merchant onboarding requiring zero technical complexity or expensive POS hardware'
    ],
    metrics: [
      { label: 'Discovery Latency', value: '< 250ms', verified: true },
      { label: 'Target Proximity', value: '500m — 5km', verified: true },
      { label: 'Merchant Onboarding', value: '< 3 mins', verified: true },
      { label: 'Architecture', value: 'Cloud-Native Dual PWA', verified: true }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Geospatial Indexing', 'PWA', 'REST APIs'],
    publicUrl: 'https://dealchowk.in/',
    appUrl: 'https://app.dealchowk.in/',
    logoUrl: '/images/dealchowk_official_logo.png',
    featuredImage: '/images/dealchowk_official_logo.png',
    colorTheme: {
      primary: '#FF5722',
      accent: '#00A86B',
      badgeBg: 'bg-orange-500/10 border-orange-500/30',
      badgeText: 'text-orange-400'
    }
  },
  {
    slug: 'siddhi-technofab',
    title: 'Siddhi Technofab',
    tagline: 'Engineering Fabrication, Industrial Solutions & Modern Operational Excellence',
    category: 'Industrial Fabrication & Technology',
    status: 'Active Venture',
    period: '2023 — Present',
    role: 'Co-Founder & Technology Strategist',
    description: 'Siddhi Technofab is an industrial fabrication and manufacturing venture delivering custom structural steelwork, engineering equipment, and precision fabrication services. The initiative pairs traditional craftsmanship with digitized procurement, quality audits, and workflow tracking.',
    keyHighlights: [
      'Precision structural fabrication adhering to stringent industrial tolerances and safety standards',
      'Integration of modern workflow scheduling to reduce client project turnaround times',
      'Client-centric engineering consultation spanning initial CAD prototyping to on-site assembly',
      'Sustainable material optimization minimizing industrial scrap and carbon footprint'
    ],
    metrics: [
      { label: 'Quality Verification', value: '100% Inspected', verified: true },
      { label: 'Operational Scope', value: 'End-to-End Delivery', verified: true }
    ],
    technologies: ['AutoCAD', 'Structural Engineering', 'Production Scheduling', 'Supply Chain Management'],
    colorTheme: {
      primary: '#38BDF8',
      accent: '#0284C7',
      badgeBg: 'bg-sky-500/10 border-sky-500/30',
      badgeText: 'text-sky-400'
    }
  },
  {
    slug: 'skillpehill',
    title: 'SkillPeHill',
    tagline: 'Skill Verification, Career Assessment & Regional Talent Intelligence Ecosystem',
    category: 'EdTech & Workforce Infrastructure',
    status: 'Strategic Initiative',
    period: '2024 — Present',
    role: 'Initiative Lead & Systems Architect',
    description: 'SkillPeHill (integrated within the KEGYA unified skill infrastructure) addresses employability mismatches by providing objective, benchmarked skill assessments and verified micro-credentials for aspiring professionals in tier-2 and tier-3 regions.',
    keyHighlights: [
      'Standardized skill assessment matrices calibrated against industry hiring benchmarks',
      'Tamper-resistant digital skill badges facilitating verifiable talent discovery for recruiters',
      'Modular curriculum mapping aligned with modern digital product, engineering, and commerce competencies',
      'Accessible, mobile-first student portal designed for low-bandwidth rural and semi-urban connectivity'
    ],
    metrics: [
      { label: 'Assessment Paradigm', value: 'Competency-Based', verified: true },
      { label: 'Accessibility Target', value: 'Low-Bandwidth Optimized', verified: true }
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Assessment Engines', 'Micro-credentials'],
    colorTheme: {
      primary: '#10B981',
      accent: '#059669',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/30',
      badgeText: 'text-emerald-400'
    }
  }
];
