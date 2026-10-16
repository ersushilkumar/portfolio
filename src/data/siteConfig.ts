export const siteConfig = {
  name: "Sushil Kumar",
  title: "Sushil Kumar — Founder, Product Builder & Management Researcher",
  role: "Founder & Entrepreneurial Builder",
  headline: "Architecting Hyperlocal Commerce, Scalable Platforms & Management Strategies",
  tagline: "Bridging physical retail and digital velocity through thoughtful product architecture, consumer psychology, and quantitative business strategy.",
  location: "India",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://sushilkumar.dev",
  ogImage: "/images/linkedin_profile_executive_navy.jpg",
  
  images: {
    heroNavy: "/images/linkedin_profile_executive_navy.jpg",
    heroPoised: "/images/linkedin_profile_executive_navy_poised.jpg",
    charcoalBlazer: "/images/linkedin_profile_modern_charcoal.jpg",
    outdoorJourney: "/images/IMG_28281.JPG",
    dealchowkLogo: "/images/dealchowk_official_logo.png",
  },

  bio: {
    short: "Founder of DealChowk, builder of tech ventures, and researcher in management, finance, fraud risk mitigation, and consumer behavior.",
    full: "I am an entrepreneurial builder and researcher focused on the intersection of local commerce systems, financial risk governance, and digital product strategy. As the founder of DealChowk, I lead the development of a hyperlocal marketplace connecting neighborhood merchants with nearby consumers. Alongside venture building, I investigate marketing models, consumer behavior, and financial fraud risk frameworks.",
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
