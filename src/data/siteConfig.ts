export const siteConfig = {
  name: "Sushil Kumar",
  title: "Sushil Kumar — Founder, Product Builder & Management Researcher",
  role: "Founder & Entrepreneurial Builder",
  headline: "Architecting Hyperlocal Commerce, Scalable Platforms & Management Strategies",
  tagline: "Bridging physical retail and digital velocity through thoughtful product architecture, consumer psychology, and quantitative business strategy.",
  location: "India",
  email: "sushil.dealchowk@gmail.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://sushilkumar.dev",
  ogImage: "/images/sushil_executive_overview.jpg",
  
  images: {
    heroNavy: "/images/sushil_executive_overview.jpg",
    heroPoised: "/images/linkedin_profile_executive_navy_poised.jpg",
    charcoalBlazer: "/images/linkedin_profile_modern_charcoal.jpg",
    outdoorJourney: "/images/dealchowk_field_onboarding.jpg",
    dealchowkLogo: "/images/dealchowk_official_logo.png",
  },

  bio: {
    short: "Founder of DealChowk, builder of tech ventures, MBA scholar in Finance & Marketing (AKNU), B.Tech CSE (Aditya University), with experience at KreditBee, ICCS (Dream11), and author of 40+ academic journal papers.",
    full: "I am an entrepreneurial builder, product architect, and management researcher. I hold a B.Tech in Computer Science & Engineering from Aditya University (2019–2023) and am pursuing an MBA in Finance & Marketing at Adikavi Nannaya University (AKNU MSN PG Center Kakinada, 2025–2027). My professional experience spans marketing at KreditBee, customer process operations for Dream11 at ICCS, founding DealChowk (cross-platform hyperlocal commerce built with Flutter, Dart, TypeScript, and Firebase), and publishing 40+ academic journal papers in collaboration with university faculty.",
    values: [
      {
        title: "Grounded Value Creation",
        description: "Building technology that addresses tangible, operational friction for small businesses and everyday users, rather than chasing fleeting hype."
      },
      {
        title: "Systemic Integrity",
        description: "Architecting products with robust security, financial risk oversight, and transparent governance from day zero."
      },
      {
        title: "Empirical Rigor",
        description: "Informing product development and market expansion through deep research in consumer behavior, behavioral economics, and data-driven insights."
      }
    ]
  },

  social: {
    linkedin: {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/ersushilkr/",
      handle: "ersushilkr",
      verified: true,
      label: "Connect on LinkedIn"
    },
    github: {
      platform: "GitHub",
      url: "https://github.com/ersushilkumar/portfolio",
      handle: "ersushilkumar",
      verified: true,
      label: "View Source on GitHub"
    }
  },

  dealchowkSocial: {
    website: {
      platform: "Website",
      url: "https://dealchowk.in/",
      verified: true,
      label: "dealchowk.in"
    },
    app: {
      platform: "Web Application",
      url: "https://app.dealchowk.in/",
      verified: true,
      label: "app.dealchowk.in"
    },
    youtube: {
      platform: "YouTube",
      url: "https://www.youtube.com/@dealchowk",
      verified: true,
      label: "@dealchowk on YouTube"
    },
    instagram: {
      platform: "Instagram",
      url: "https://www.instagram.com/dealchowk",
      verified: true,
      label: "@dealchowk on Instagram"
    },
    facebook: {
      platform: "Facebook",
      url: "https://www.facebook.com/dealchowk",
      verified: true,
      label: "DealChowk on Facebook"
    }
  },

  navigation: [
    { name: "Overview", href: "/" },
    { name: "About", href: "/about" },
    { name: "Ventures", href: "/ventures" },
    { name: "Projects", href: "/projects" },
    { name: "Research & Publishing", href: "/research-publishing" },
    { name: "Research", href: "/finance-and-research" },
    { name: "Writing", href: "/writing" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" }
  ]
};
