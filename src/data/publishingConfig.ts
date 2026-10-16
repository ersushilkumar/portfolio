export interface JournalTrack {
  id: string;
  title: string;
  discipline: string;
  introductoryFeeINR: number;
  scope: string;
  targetAudience: string;
  status: 'Proposed Track' | 'Accepting Pilot Submissions' | 'In Planning';
  frequency: string;
}

export interface EditorialService {
  id: string;
  title: string;
  introductoryPriceINR: number;
  pricingType: 'per-paper' | 'fixed';
  wordLimit: string;
  deliverables: string[];
  turnaroundTime: string;
  description: string;
}

export const publishingConfig = {
  institutionNotice: "Introductory platform initiative by Sushil Kumar. All journal titles and publication services are currently in structured launch phase. Pricing and fees listed below represent proposed introductory costs subject to formal board confirmation. No fees are collected for unverified services or before formal editorial approval.",
  
  pricing: {
    repositorySubmission: {
      priceINR: 0,
      label: "Free",
      description: "Open-access deposit of preprints, working papers, conference slides, and research monographs."
    },
    institutionalMembership: {
      priceINR: null,
      label: "Contact for Pricing",
      description: "Departmental and institutional deposit workflows, volume manuscript formatting, and researcher workshops."
    }
  },

  journals: [
    {
      id: "student-research",
      title: "Journal of Student Research & Undergraduate Inquiries",
      discipline: "Multidisciplinary Student Research",
      introductoryFeeINR: 199,
      scope: "Undergraduate and graduate course papers, capstone projects, and guided student inquiries across applied sciences, management, and humanities.",
      targetAudience: "Undergraduate, postgraduate students, and early-stage scholars",
      status: "Proposed Track",
      frequency: "Bi-annual (Planned)"
    },
    {
      id: "multidisciplinary",
      title: "Regional & Applied Multidisciplinary Research Journal",
      discipline: "Cross-Disciplinary Applied Studies",
      introductoryFeeINR: 299,
      scope: "Interdisciplinary manuscripts intersecting technology, rural development, grassroots commerce, and social innovation.",
      targetAudience: "Independent researchers, cross-functional scholars, and academic practitioners",
      status: "Proposed Track",
      frequency: "Quarterly (Planned)"
    },
    {
      id: "management-finance",
      title: "Review of Management, Finance & Hyperlocal Commerce",
      discipline: "Business Administration, Commerce & Applied Economics",
      introductoryFeeINR: 299,
      scope: "Corporate governance, transaction fraud mitigation, retail supply chains, two-sided marketplaces, fintech adoption, and SME financial management.",
      targetAudience: "Faculty, MBA scholars, finance professionals, and management researchers",
      status: "Proposed Track",
      frequency: "Quarterly (Planned)"
    },
    {
      id: "computer-science",
      title: "Advances in Computer Science & Digital Platform Engineering",
      discipline: "Computer Science, Software Architecture & AI Systems",
      introductoryFeeINR: 399,
      scope: "Cloud-native architectures, geospatial indexing, edge computing, consumer web technologies, distributed trust, and applied machine learning.",
      targetAudience: "Computer science scholars, platform architects, and tech innovators",
      status: "Proposed Track",
      frequency: "Bi-annual (Planned)"
    },
    {
      id: "education-social",
      title: "Perspectives in Education, Regional Development & Social Sciences",
      discipline: "Pedagogy, Sociology & Developmental Studies",
      introductoryFeeINR: 249,
      scope: "Skill verification ecosystems, vocational pedagogy, educational access in tier-2/3 regions, and socio-economic transformation.",
      targetAudience: "Educators, educational scholars, sociologists, and policy researchers",
      status: "Proposed Track",
      frequency: "Bi-annual (Planned)"
    }
  ] as JournalTrack[],

  editorialServices: [
    {
      id: "manuscript-formatting",
      title: "Manuscript Layout & Style Formatting",
      introductoryPriceINR: 99,
      pricingType: "per-paper",
      wordLimit: "Up to 8,000 words",
      deliverables: [
        "Standardization to APA 7th, IEEE, Harvard, or Chicago style specifications",
        "Layout alignment of margins, headers, pagination, and font families",
        "Table and figure positioning with uniform caption formatting",
        "Publication-ready PDF and clean editable DOCX outputs"
      ],
      turnaroundTime: "48 – 72 hours",
      description: "Ensure your research complies with rigorous academic template guidelines before submission to target journals or conferences."
    },
    {
      id: "citation-formatting",
      title: "Reference & Citation Verification",
      introductoryPriceINR: 99,
      pricingType: "per-paper",
      wordLimit: "Up to 60 references",
      deliverables: [
        "In-text citation matching against final bibliography",
        "Verification of available DOI strings and active author names",
        "Uniform punctuation and indentation per target reference style",
        "Flagging of missing years, incomplete journal names, or ambiguous citations"
      ],
      turnaroundTime: "24 – 48 hours",
      description: "Eliminate embarrassing reference discrepancies and ensure complete academic integrity across your bibliography."
    },
    {
      id: "basic-proofreading",
      title: "Academic Proofreading & Mechanics",
      introductoryPriceINR: 199,
      pricingType: "per-paper",
      wordLimit: "Up to 5,000 words (₹50 per additional 1,000 words)",
      deliverables: [
        "Correction of grammatical errors, typos, punctuation, and syntax slips",
        "Elimination of awkward sentence fragments and run-on constructions",
        "Ensuring consistent technical terminology and acronym definitions",
        "Tracked changes DOCX file plus clean submission-ready manuscript"
      ],
      turnaroundTime: "3 – 4 business days",
      description: "Thorough linguistic review for clear, error-free academic prose while preserving your original research voice."
    },
    {
      id: "copy-editing",
      title: "In-Depth Academic Copy Editing",
      introductoryPriceINR: 299,
      pricingType: "per-paper",
      wordLimit: "Up to 6,000 words (₹60 per additional 1,000 words)",
      deliverables: [
        "All Basic Proofreading inclusions (grammar, spelling, mechanics)",
        "Sentence-level restructuring for enhanced academic cadence and clarity",
        "Improvement of transitions between theoretical sections and empirical results",
        "Constructive marginal suggestions on argument flow and clarity of abstract",
        "Detailed editorial memo highlighting narrative strengths and focus areas"
      ],
      turnaroundTime: "4 – 6 business days",
      description: "Comprehensive structural and stylistic enhancement engineered to elevate academic impact and reviewer readability."
    }
  ] as EditorialService[],

  repositoryCollections: [
    {
      id: "preprints",
      title: "Preprints & Early Working Papers",
      description: "Immediate scholarly dissemination of initial findings prior to formal peer review.",
      itemCount: "Open for Submissions",
      badge: "CC BY / CC BY-NC"
    },
    {
      id: "theses",
      title: "Graduate Theses & Capstone Monographs",
      description: "Archived academic dissertations and capstone projects from universities and colleges.",
      itemCount: "Open for Submissions",
      badge: "Academic Archive"
    },
    {
      id: "conference-proceedings",
      title: "Conference Proceedings & Technical Slides",
      description: "Slide decks, extended abstracts, and poster presentations from regional symposia.",
      itemCount: "Open for Submissions",
      badge: "Symposia"
    },
    {
      id: "datasets-policy",
      title: "Regional Data Summaries & Policy Briefs",
      description: "Empirical surveys, local market datasets, and economic commentary on tier-2/3 retail dynamics.",
      itemCount: "Curated Collection",
      badge: "Open Data"
    }
  ],

  policies: {
    peerReview: "All submissions to proposed journal tracks undergo initial double-blind editorial screening for academic ethics, plagiarism, and technical suitability before assignment to qualified voluntary academic reviewers.",
    ethicsAndPlagiarism: "We strictly enforce zero tolerance for plagiarism, paper-mill submissions, and unacknowledged AI generation. Authors retain copyright under Creative Commons Attribution (CC BY 4.0) or non-commercial (CC BY-NC 4.0) licenses.",
    withdrawal: "Authors can withdraw preprints or submitted manuscripts prior to formal acceptance with a transparent notification record. Published corrections and errata are permanently appended to the manuscript record.",
    feeTransparency: "All prices are introductory and subject to official launch. Submissions will never be charged surprise processing fees or mandatory page charges."
  }
};
