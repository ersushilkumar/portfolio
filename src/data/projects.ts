import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'dealchowk-merchant-console',
    title: 'DealChowk Mobile & Merchant Platform (CityConnect)',
    tagline: 'Cross-platform mobile application and merchant discovery system connecting offline retailers with nearby shoppers',
    category: 'Mobile & Platform',
    status: 'Shipped',
    period: '2024',
    description: 'Designed and built the core CityConnect mobile application and merchant console for DealChowk. Built as a high-performance cross-platform application allowing store owners to broadcast live deals, manage catalog items, and verify customer voucher OTPs in under 5 seconds.',
    problem: 'Traditional retail POS systems and e-commerce dashboards are overburdened with enterprise complexity, making onboarding painfully slow for non-technical retail counter staff.',
    solution: 'Engineered a unified cross-platform mobile and web application with Flutter, Dart, TypeScript, and Firebase featuring sub-250ms proximity discovery, one-tap deal toggling, and instantaneous QR coupon redemptions.',
    approach: [
      'Engineered cross-platform mobile application in Flutter with Dart representing 66.6% of the codebase',
      'Developed cloud services and state management with TypeScript (27.4%) and Firebase',
      'Integrated native optimizations with C++ (0.9%), HTML (1.5%), JavaScript (1.5%), and deployment automation via Shell/PowerShell',
      'Implemented optimistic UI updates to ensure instant feedback even on intermittent 4G connections',
      'Engineered two-factor OTP and QR validation to eradicate duplicate voucher redemptions'
    ],
    outcomes: [
      'Voucher validation time reduced to under 5 seconds at the cash counter',
      'Zero training required for merchants to publish their first daily deal',
      'High operational reliability observed across pilot merchant testbeds',
      'Open-source repository verified: ersushilkumar/cityconnect'
    ],
    technologies: ['Flutter', 'Dart (66.6%)', 'TypeScript (27.4%)', 'Firebase', 'Shell', 'C++', 'HTML/JS', 'PowerShell'],
    liveUrl: 'https://app.dealchowk.in/',
    githubUrl: 'https://github.com/ersushilkumar/cityconnect',
    featured: true
  },
  {
    slug: 'ai-resume-builder',
    title: 'Dynamic AI Resume Builder Web Application',
    tagline: 'ATS-optimized professional resume generator with live interactive preview, modular styling, and PDF compilation',
    category: 'Web Application',
    status: 'In Development / Launching Soon',
    period: '2025',
    description: 'An interactive, modern resume builder web application designed for students, developers, and corporate professionals to generate ATS-compliant, beautifully styled resumes with real-time editing, modular templates, and instant PDF compilation. Hosted on Vercel.',
    problem: 'Job seekers struggle with subscription paywalls, broken layout formatting on PDF export, and non-ATS compliant designs that fail recruitment filters.',
    solution: 'Engineered an intuitive single-page resume studio supporting real-time typography customization, ATS score verification, modular section drag-and-drop, and clean one-click PDF generation.',
    approach: [
      'Modular React component architecture for live form-to-preview synchronization with zero lag',
      'Client-side PDF compilation eliminating server latency and maintaining complete user privacy',
      'Pre-calibrated typography and spacing tokens complying with international ATS scanning standards',
      'Continuous deployment pipeline configured for high-availability Vercel edge hosting'
    ],
    outcomes: [
      'Instant real-time resume rendering with sub-100ms preview updates',
      'Single-click export to high-resolution print-standard PDF',
      'Vercel deployment launching soon — link to be updated upon live cutover'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'PDF Generation Engine'],
    liveUrl: 'https://resumebuilder-sushilkumar.vercel.app',
    featured: true
  },
  {
    slug: 'fraud-risk-governance-engine',
    title: 'Digital Transaction Fraud Risk & Governance Model',
    tagline: 'Empirical risk scoring model detecting transaction anomalies in digital commerce',
    category: 'Fintech & Risk',
    status: 'Research Prototype',
    period: '2024',
    description: 'A conceptual and quantitative risk analysis framework designed to identify velocity anomalies, voucher abuse patterns, and payment settlement irregularities in high-frequency marketplace environments.',
    problem: 'Rapid growth in digital retail marketplaces often exposes merchants to promotional coupon arbitrage, phantom orders, and settlement delays caused by fraudulent claim velocity.',
    solution: 'Designed an algorithmic rule engine evaluating redemption geographical variance, device fingerprints, and time-delta thresholds to flag suspicious activity pre-settlement.',
    approach: [
      'Comprehensive study of financial fraud typologies in emerging market micro-transactions',
      'Formulated risk score weights across velocity, geospatial proximity, and merchant history',
      'Constructed simulation test suite benchmarking false-positive rates against baseline rules'
    ],
    outcomes: [
      'Simulated 85%+ detection rate of synthetic coupon farming behavior in benchmark datasets',
      'Maintained low friction for verified legitimate consumer checkouts'
    ],
    technologies: ['TypeScript', 'Statistical Modeling', 'Anomaly Detection Logic', 'Python Simulation'],
    featured: true
  },
  {
    slug: 'hyperlocal-consumer-lifestyle-analytics',
    title: 'Hyperlocal Consumer Behavior & Retail STP Framework',
    tagline: 'Segmentation, Targeting & Positioning research model for Indian retail markets',
    category: 'AI & Analytics',
    status: 'Shipped',
    period: '2023 — 2024',
    description: 'A synthesized market research framework analyzing consumer lifestyle factors, price sensitivity thresholds, and smartphone adoption patterns among tier-2 and tier-3 Indian shoppers.',
    problem: 'National e-commerce marketing models fail when transplanted to local neighborhood bazaars because regional shopping habits depend heavily on trust, immediate touch-and-feel, and verbal bargaining.',
    solution: 'Created an actionable 8-factor consumer lifestyle framework guiding merchant deal packaging, category timing, and localization strategies.',
    approach: [
      'Synthesized behavioral literature with empirical shopping patterns in regional Indian cities',
      'Segmented consumer demographics by lifestyle affinity, tech comfort, and deal urgency',
      'Created visual presentation deck and analytical dashboard for merchant onboarding workshops'
    ],
    outcomes: [
      'Utilized directly to structure DealChowk’s promotional category hierarchy and deal timing',
      'Provided validated foundation for merchant consultative sales collateral'
    ],
    technologies: ['Market Research', 'Consumer Psychology', 'STP Analysis', 'Data Visualization'],
    featured: false
  },
  {
    slug: 'cinematic-3d-web-experience',
    title: 'Cinematic 3D Web Engine & Performance Optimization',
    tagline: 'GPU-accelerated WebGL visual environments tailored for executive storytelling',
    category: 'Platform',
    status: 'Shipped',
    period: '2024',
    description: 'The architectural blueprint behind this personal portfolio: an interactive 3D WebGL engine combining particle fields, geometric lighting, perspective tilt cards, and accessibility fallbacks.',
    problem: 'Most 3D websites suffer from massive asset bloat (20MB+), sluggish mobile performance, lack of keyboard accessibility, and total failure when WebGL is unaccelerated.',
    solution: 'Engineered a modular Three.js engine with explicit vertex budgets, automatic frame rate throttling on idle, prefers-reduced-motion support, and full semantic HTML layering.',
    approach: [
      'Direct Three.js scene graph control avoiding heavy overhead',
      'Separation of rendering layers: semantic HTML content remains 100% crawlable and screen-reader accessible',
      'Progressive enhancement: gracefully renders elegant CSS depth cards when WebGL context fails'
    ],
    outcomes: [
      'Sub-second first contentful paint and zero layout shift on modern devices',
      'Fully responsive across mobile, tablet, and ultra-wide displays',
      'Zero compromise on search engine crawlability or assistive accessibility'
    ],
    technologies: ['Next.js 16', 'Three.js', 'TypeScript', 'Tailwind CSS v4', 'WebGL Shaders'],
    githubUrl: 'https://github.com/ersushilkumar/portfolio',
    featured: true
  }
];
