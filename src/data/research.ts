import { ResearchPaper } from '@/types';

export const researchPortfolioNote = {
  totalPublishedJournals: "40+",
  collaborationRole: "Author & Scholarly Ghostwriter for University Professors",
  flagshipPublication: "Fraud Risk Management: A Theoretical and Governance Review (Published in IJARESM)",
  disciplines: "Management, Finance, Computer Science, and Corporate Governance"
};

export const researchPapers: ResearchPaper[] = [
  {
    id: 'res-ijaresm-fraud-risk-review',
    title: 'Fraud Risk Management: A Theoretical and Governance Review',
    abstract: 'A peer-reviewed theoretical examination of corporate fraud risk management architectures, assessing internal control environments, forensic audit trails, and preventive governance frameworks in emerging financial and digital commerce ecosystems. Investigates the alignment between COSO internal control directives, forensic data telemetry, and fraud risk mitigation in high-velocity transaction platforms.',
    topics: ['Fraud Risk Management', 'IJARESM Published', 'Internal Financial Controls', 'Corporate Governance', 'Forensic Accounting'],
    status: 'Published Journal Paper',
    year: '2024',
    readTime: '15 min read',
    keyFindings: [
      'Published in the International Journal of All Research Education and Scientific Methods (IJARESM)',
      'Establishes an integrated theoretical framework synthesizing preventive, detective, and corrective anti-fraud controls',
      'Demonstrates that continuous forensic telemetry and multi-layered audit trails reduce fraud exposure by up to 70% in high-frequency transaction environments',
      'One of 40+ academic journal articles authored and ghostwritten in collaboration with university faculty and academic mentors'
    ],
    citations: [
      'Kumar, S. (2024). Fraud Risk Management: A Theoretical and Governance Review. International Journal of All Research Education and Scientific Methods (IJARESM).',
      'COSO (2016). Fraud Risk Management Guide. Committee of Sponsoring Organizations of the Treadway Commission.',
      'Association of Certified Fraud Examiners (ACFE, 2022). Report to the Nations on Occupational Fraud and Abuse.',
      'Basel Committee on Banking Supervision (2020). Sound Practices: Implications of fintech developments for financial supervisors.'
    ]
  },
  {
    id: 'res-fraud-risk-governance',
    title: 'Governance Mechanisms & Internal Controls in Mitigating Transaction Fraud in Emerging Market Platforms',
    abstract: 'This research paper investigates the structural vulnerabilities present in rapid-settlement digital marketplaces and outlines a holistic internal controls matrix. Analyzing transaction lifecycle risk points—from consumer onboarding to merchant settlement—we propose a dual-layer oversight mechanism combining algorithmic telemetry with operational governance checkpoints.',
    topics: ['Fraud Risk Management', 'Corporate Governance', 'Financial Controls', 'Marketplace Risk'],
    status: 'Research Draft',
    year: '2024',
    readTime: '12 min read',
    keyFindings: [
      'Velocity and geolocation mismatches account for the highest proportion of fraudulent promotional claims in retail marketplaces',
      'Fragmented merchant onboarding processes create compliance blind spots that cannot be solved by automated KYC alone',
      'A tiered escrow and micro-settlement schedule significantly disincentivizes coordinated synthetic chargeback attacks'
    ],
    citations: [
      'COSO (2016). Fraud Risk Management Guide: Executive Summary. Committee of Sponsoring Organizations of the Treadway Commission.',
      'Association of Certified Fraud Examiners (2022). Occupational Fraud: A Report to the Nations.',
      'Basel Committee on Banking Supervision (2020). Sound Practices: Implications of fintech developments for banks and bank supervisors.'
    ]
  },
  {
    id: 'res-hyperlocal-gtm-dynamics',
    title: 'Solving the Cold-Start Dilemma in Hyperlocal Retail Networks: A Merchant-Centric GTM Framework',
    abstract: 'Two-sided digital marketplaces frequently stall in high-density local markets due to asymmetric incentives between early merchant supply and consumer demand. This study analyzes the adoption dynamics of neighborhood shopkeepers, proposing a phased go-to-market methodology that establishes localized merchant critical mass before scaling consumer acquisition.',
    topics: ['Hyperlocal GTM', 'Two-Sided Marketplaces', 'Merchant Onboarding', 'Network Effects'],
    status: 'Working Paper',
    year: '2024',
    readTime: '14 min read',
    keyFindings: [
      'Hyperlocal liquidity is geography-bounded; achieving 25% merchant density within a 1km cluster yields 4x higher retention than diffuse regional presence',
      'Merchants value footfall certainty over digital vanity metrics; deal mechanics tied to physical walk-ins drive 68% higher merchant engagement',
      'Minimizing operational cognitive load during point-of-sale verification is the single most predictive factor for long-term merchant active retention'
    ],
    citations: [
      'Rochet, J. C., & Tirole, J. (2003). Platform Competition in Two-Sided Markets. Journal of the European Economic Association, 1(4), 990-1029.',
      'Eisenmann, T., Parker, G., & Van Alstyne, M. W. (2006). Strategies for Two-Sided Markets. Harvard Business Review, 84(10), 92-101.',
      'Evans, D. S., & Schmalensee, R. (2016). Matchmakers: The New Economics of Multisided Platforms. Harvard Business Review Press.'
    ]
  },
  {
    id: 'res-consumer-behavior-tier2',
    title: 'Psychological Drivers of Bargain Hunting and Digital Voucher Adoption in Tier-2 Indian Urban Clusters',
    abstract: 'An empirical exploration into consumer behavior across semi-urban commercial centers, examining how cultural norms around bargaining, proximity convenience, and smartphone interface fluency influence promotional voucher redemption.',
    topics: ['Consumer Behaviour', 'Marketing Strategy', 'Retail Psychology', 'Emerging Markets'],
    status: 'Research Draft',
    year: '2023 — 2024',
    readTime: '10 min read',
    keyFindings: [
      'The emotional satisfaction of "smart savings" (perceived agency in securing a deal) consistently outweighs the absolute rupee value of minor discounts',
      'Visual cues evoking physical coupon perforation and stamp validation build greater consumer trust than abstract digital wallet balances',
      'Word-of-mouth referral networks among neighborhood peers drive up to 3x higher voucher conversion compared to generic digital ad impressions'
    ],
    citations: [
      'Thaler, R. (1985). Mental Accounting and Consumer Choice. Marketing Science, 4(3), 199-214.',
      'Kotler, P., & Keller, K. L. (2016). Marketing Management (15th ed.). Pearson Education.',
      'Zeithaml, V. A. (1988). Consumer Perceptions of Price, Quality, and Value: A Means-End Model and Synthesis of Evidence. Journal of Marketing, 52(3), 2-22.'
    ]
  }
];
