import { ResumeSection } from '@/types';

export const resumeData: ResumeSection = {
  summary: "Entrepreneurial builder, founder of DealChowk, MBA scholar in Finance & Marketing (AKNU), and B.Tech in CSE (Aditya University). Blends hands-on mobile and platform engineering (Flutter, Dart, TypeScript, Firebase) with corporate marketing experience at KreditBee, customer operations for Dream11 at ICCS, and authorship of 40+ academic journal publications on fraud risk governance and management strategies.",
  education: [
    {
      degree: "Master of Business Administration (MBA)",
      field: "Finance & Marketing",
      institution: "Adikavi Nannaya University (AKNU MSN PG Center, Kakinada — 533005)",
      period: "Aug 2025 — May 2027",
      verified: true,
      details: [
        "Advanced specialization in financial risk management, managerial economics, consumer behavior, and quantitative marketing strategy",
        "Applied research investigating transaction fraud governance, internal financial controls, and risk mitigation in digital commerce networks"
      ]
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering (CSE)",
      institution: "Aditya University (previously Aditya College of Engineering and Technology — ACET)",
      period: "2019 — 2023",
      verified: true,
      details: [
        "Core foundation in software architecture, distributed systems, algorithms, and full-stack development",
        "Architected mobile and web applications with cross-platform frameworks including Flutter, Dart, TypeScript, and Firebase"
      ]
    }
  ],
  experience: [
    {
      role: "Founder & Product Lead",
      company: "DealChowk",
      period: "2024 — Present",
      location: "India",
      description: "Leading overall product strategy, cross-platform engineering, and ground go-to-market execution for a dual-sided hyperlocal commerce marketplace.",
      bullets: [
        "Engineered the CityConnect mobile application and merchant console utilizing Flutter & Dart (66.6%), TypeScript (27.4%), Firebase, and Shell",
        "Formulated zero-hardware merchant onboarding framework, reducing store catalog and promotional setup time to under 3 minutes",
        "Engineered proximity-based discovery engine delivering sub-250ms query latency across neighborhood retail clusters (500m to 5km radius)",
        "Designed tamper-resistant QR and OTP voucher redemption protocol eradicating repeat promotional coupon fraud"
      ]
    },
    {
      role: "Operations & Customer Process Specialist (Dream11 Process)",
      company: "ICCS (Insight Customer Call Solutions)",
      period: "Nov 2024 — Aug 2025",
      location: "India",
      description: "Managed high-volume customer process workflows, account security verification, dispute resolution, and operational compliance for Dream11.",
      bullets: [
        "Handled end-to-end customer operations, user transaction verification, and account dispute escalations under strict SLA standards",
        "Collaborated with risk and compliance teams to identify transaction anomalies and suspicious account behavior during peak match windows",
        "Maintained top-tier quality scores and swift resolution metrics in a fast-paced 24/7 gaming platform environment"
      ]
    },
    {
      role: "Marketing Specialist",
      company: "KreditBee",
      period: "May 2024 — Nov 2024 (6 months)",
      location: "India",
      description: "Executed performance marketing campaigns, user acquisition funnels, and regulatory promotional compliance for digital consumer credit products.",
      bullets: [
        "Drove user acquisition initiatives and conversion rate optimization across credit product sign-up flows",
        "Monitored attribution metrics, drop-off points, and engagement analytics to refine marketing spend efficiency",
        "Ensured rigorous compliance of all advertising copy and promotional collateral with financial regulatory standards"
      ]
    },
    {
      role: "Academic Research Writer & Scholarly Consultant",
      company: "Academic Research & University Collaborations",
      period: "2023 — Present",
      location: "India",
      description: "Authored and ghostwrote 40+ research journal publications across management, finance, computer science, and fraud risk frameworks for university professors and academic scholars.",
      bullets: [
        "Authored and published peer-reviewed theoretical study: 'Fraud Risk Management: A Theoretical and Governance Review' in IJARESM",
        "Synthesized quantitative datasets, conducted extensive literature reviews, and formatted manuscripts adhering to APA, IEEE, and Harvard standards",
        "Provided expert guidance on double-blind review revisions, peer review rebuttal letters, and reference DOI validation"
      ]
    },
    {
      role: "Co-Founder & Technology Strategist",
      company: "Siddhi Technofab",
      period: "2023 — Present",
      location: "India",
      description: "Guiding digital transformation, modern workflow planning, and operational scheduling for precision industrial fabrication solutions.",
      bullets: [
        "Digitized client quoting, procurement tracking, and fabrication quality audit workflows",
        "Coordinated engineering specifications between CAD design models and fabrication floor assemblies"
      ]
    },
    {
      role: "Initiative Lead & Systems Architect (Archived Case Study)",
      company: "SkillPeHill",
      period: "2024",
      location: "India",
      description: "Directed the architectural design of an objective skill assessment and verified credentialing framework for regional talent (retained as an active case study).",
      bullets: [
        "Conceptualized competency-based assessment workflows benchmarked against modern industry standards",
        "Engineered accessible, low-bandwidth interfaces tailored for tier-2 and tier-3 student demographics"
      ]
    }
  ],
  skills: [
    {
      category: "Software & Mobile Engineering",
      items: [
        "Flutter & Dart (66.6% Core)",
        "TypeScript (27.4%) & Next.js",
        "Firebase (Auth, Firestore, Cloud)",
        "Shell & PowerShell Scripts",
        "HTML5 / CSS3 & Tailwind CSS",
        "C++ (Systems Basics)",
        "REST APIs & Geospatial Indexing",
        "Progressive Web Apps (PWA)"
      ]
    },
    {
      category: "Marketing & Operations",
      items: [
        "Performance Marketing & Funnels (KreditBee)",
        "Customer Process & Operations (ICCS Dream11)",
        "Hyperlocal Go-To-Market (DealChowk)",
        "Merchant Onboarding & Retention",
        "Conversion Rate Optimization (CRO)",
        "SLA Management & Dispute Escalations"
      ]
    },
    {
      category: "Finance & Governance Research",
      items: [
        "Transaction Fraud Risk Management",
        "Internal Financial Controls (COSO)",
        "Promotional Abuse Mitigation",
        "Escrow & Micro-Settlement Protocols",
        "Compliance Audits & Governance",
        "Quantitative Market Modeling"
      ]
    },
    {
      category: "Academic Publishing & Writing",
      items: [
        "40+ Journal Articles Authored / Ghostwritten",
        "Published in IJARESM (Fraud Risk Review)",
        "Academic Manuscript Preparation (APA / IEEE)",
        "Peer-Review Workflow Architecture",
        "Scholarly Repository Infrastructure"
      ]
    }
  ]
};
