import { Venture } from '@/types';

export const ventures: Venture[] = [
  {
    slug: 'dealchowk',
    title: 'DealChowk',
    tagline: 'Hyperlocal Commerce Platform Connecting Neighborhood Merchants with Nearby Shoppers',
    category: 'Hyperlocal Marketplace & Merchant OS',
    status: 'Active Venture',
    period: '2024 — Present',
    role: 'Founder & Product Lead',
    description: 'DealChowk is a dual-sided hyperlocal commerce ecosystem engineered to solve the acute visibility and footfall challenges faced by offline neighborhood retailers. Powered by Flutter, Dart, TypeScript, and Firebase, DealChowk connects high-street physical retail with digital consumer habits through proximity-based discovery, instant digital vouchers, and a lightweight merchant console.',
    keyHighlights: [
      'Engineered cross-platform mobile architecture with Flutter & Dart (66.6% codebase) and TypeScript (27.4%)',
      'Proximity-based discovery engine surfacing active retail promotions within 500m to 5km radius',
      'Dual-interface architecture: high-conversion shopper feed and lightweight merchant management console',
      'Frictionless digital coupon validation system with QR and OTP authentication preventing redemption fraud',
      'Low-barrier merchant onboarding requiring zero technical complexity or expensive POS hardware'
    ],
    metrics: [
      { label: 'Core Language', value: 'Dart (66.6%)', verified: true },
      { label: 'Cloud Services', value: 'TypeScript (27.4%)', verified: true },
      { label: 'Discovery Latency', value: '< 250ms', verified: true },
      { label: 'Target Proximity', value: '500m — 5km', verified: true },
      { label: 'Merchant Onboarding', value: '< 3 mins', verified: true },
      { label: 'Backend Stack', value: 'Firebase & Cloud', verified: true }
    ],
    technologies: ['Flutter', 'Dart (66.6%)', 'TypeScript (27.4%)', 'Firebase', 'Shell', 'C++', 'HTML/CSS', 'PowerShell', 'Geospatial Indexing'],
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
    tagline: 'Case Study: Skill Verification, Career Assessment & Regional Workforce Ecosystem',
    category: 'EdTech & Workforce Case Study',
    status: 'Case Study / Research Initiative',
    period: '2024 (Archived Case Study)',
    role: 'Initiative Lead & Systems Architect',
    description: 'SkillPeHill is an archived strategic case study and research framework investigating objective competency assessments, tamper-resistant skill badges, and workforce readiness for tier-2/3 student populations.',
    keyHighlights: [
      'Standardized skill assessment matrices calibrated against industry hiring benchmarks',
      'Tamper-resistant digital skill badges facilitating verifiable talent discovery for recruiters',
      'Modular curriculum mapping aligned with modern digital product, engineering, and commerce competencies',
      'Accessible, mobile-first student portal designed for low-bandwidth rural and semi-urban connectivity'
    ],
    metrics: [
      { label: 'Status', value: 'Archived Case Study', verified: true },
      { label: 'Assessment Paradigm', value: 'Competency-Based', verified: true },
      { label: 'Accessibility Target', value: 'Low-Bandwidth Optimized', verified: true }
    ],
    technologies: ['Case Study', 'Next.js', 'TypeScript', 'Assessment Engines', 'Micro-credentials'],
    colorTheme: {
      primary: '#10B981',
      accent: '#059669',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/30',
      badgeText: 'text-emerald-400'
    }
  }
];
