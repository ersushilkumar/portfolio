export interface SocialLink {
  platform: string;
  url: string;
  verified: boolean;
  label: string;
  handle?: string;
}

export interface Venture {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  status: 'Active Venture' | 'In Development' | 'Strategic Initiative' | 'Case Study / Research Initiative';
  period: string;
  role: string;
  description: string;
  keyHighlights: string[];
  metrics?: { label: string; value: string; verified: boolean }[];
  technologies: string[];
  publicUrl?: string;
  appUrl?: string;
  logoUrl?: string;
  featuredImage?: string;
  colorTheme: {
    primary: string;
    accent: string;
    badgeBg: string;
    badgeText: string;
  };
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: 'Platform' | 'Mobile & Platform' | 'Web Application' | 'Fintech & Risk' | 'AI & Analytics' | 'Hardware/Operations';
  status: 'Shipped' | 'In Progress' | 'Research Prototype' | 'In Development / Launching Soon';
  period: string;
  description: string;
  problem: string;
  solution: string;
  approach: string[];
  outcomes: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  topics: string[];
  status: 'Published Journal Paper' | 'Working Paper' | 'Conference Presentation' | 'Research Draft' | 'Monograph';
  journal?: string;
  year: string;
  citations: string[];
  keyFindings: string[];
  readTime: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  topic: string;
  tags: string[];
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  references?: string[];
}

export interface ResumeSection {
  summary: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    period: string;
    verified: boolean;
    details?: string[];
  }[];
  experience: {
    role: string;
    company: string;
    period: string;
    location: string;
    description: string;
    bullets: string[];
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
}
