# Sushil Kumar — Cinematic 3D Personal Portfolio & Research Publishing Platform

A complete, production-grade personal portfolio and academic publishing platform for **Sushil Kumar**—Founder of **DealChowk**, platform architect, and researcher in management, consumer behavior, and financial fraud risk governance.

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-16.4.2-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-white?style=flat-square&logo=three.js)

---

## 1. Verified Identity & Venture Ecosystem

- **Full Name:** Sushil Kumar
- **Positioning:** Founder & Platform Builder | Management & Risk Researcher
- **Verified LinkedIn:** [linkedin.com/in/ersushilkr/](https://www.linkedin.com/in/ersushilkr/) (Handle: `ersushilkr`)
- **Verified GitHub:** [github.com/ersushilkumar/portfolio](https://github.com/ersushilkumar/portfolio) (Handle: `ersushilkumar`)

### Ventures:
1. **DealChowk** ([dealchowk.in](https://dealchowk.in/) | [app.dealchowk.in](https://app.dealchowk.in/)): Hyperlocal commerce discovery platform connecting local high-street merchants with nearby consumers. Official channels: YouTube (`@dealchowk`), Instagram (`@dealchowk`), Facebook (`DealChowk`).
2. **Siddhi Technofab:** Industrial fabrication, structural metal assemblies, and physical engineering operations.
3. **SkillPeHill:** Regional vocational skills assessment and verified academic credentialing framework.

---

## 2. Inspiration Research & Architectural Decisions

Following inspection of the curated community index [`emmabostian/developer-portfolios`](https://github.com/emmabostian/developer-portfolios), key architectural patterns were selected:
- **`ahamlett.com` Inspiration:** Direct, unpretentious founder positioning with immediate access to shipped platforms.
- **`amruthpillai.com` Inspiration:** Structured JSON-LD schema (Person, WebSite, Organization) and clean editorial typography.
- **`akashrajpurohit.com` Inspiration:** Machine-readable `llms.txt` discovery endpoint and accessible floating navigation.
- **Rejected Patterns:** Flashy neon styling, excessive spinning 3D text, auto-playing video/audio, and hidden content inside non-semantic canvases.

---

## 3. Technology Stack

- **Framework:** Next.js 16.4.2 (App Router, Server Components by default, Turbopack).
- **Language:** TypeScript in strict mode.
- **Styling:** Tailwind CSS v4 with custom dark luxury tokens (`#030712`, `#0f172a`, `#38bdf8`, `#f59e0b`).
- **3D Graphics:** Three.js WebGL (orbital rings, geometric polyhedra, constellation particles, pointer parallax, graceful static CSS fallback, `prefers-reduced-motion` compliance).
- **Icons:** `lucide-react`.
- **Hosting Target:** Vercel Hobby (Free Tier) & GitHub.

---

## 4. Platform Routes & Sitemap

| Route | Description |
|---|---|
| `/` | Cinematic 3D hero homepage with interactive Three.js scene, authentic portrait anchor, ventures, and publishing preview |
| `/about` | Grounded founder journey, core principles, and authentic outdoor/charcoal portraits |
| `/ventures` | Overview of DealChowk, Siddhi Technofab, and SkillPeHill |
| `/ventures/dealchowk` | In-depth venture case study, GTM clustering, and official brand channels |
| `/ventures/siddhi-technofab` | Industrial engineering and structural fabrication profile |
| `/ventures/skillpehill` | Skill verification and edtech ecosystem profile |
| `/projects` | Product engineering projects, fraud governance models, and PWA console |
| `/finance-and-research` | Academic working papers, fraud risk frameworks, and empirical citations |
| `/research-publishing` | Central Academic Research & Publishing Platform overview and pricing matrix |
| `/research-publishing/repository` | Open-access academic repository deposit portal (Free deposit, CC BY / CC BY-NC) |
| `/research-publishing/journals` | Proposed disciplinary journal tracks, double-blind peer review lifecycle, and intake form |
| `/research-publishing/services` | Author editorial assistance (Formatting ₹99, Citations ₹99, Proofreading ₹199, Copy Editing ₹299) |
| `/writing` | Editorial essays on hyperlocal GTM, fraud risk, and 3D web performance |
| `/writing/[slug]` | Individual essay reader with citations and reading time |
| `/resume` | Professional CV with print-to-PDF layout (`ResumePrintButton`) |
| `/contact` | Accessible contact form with honeypot spam protection and direct mailto fallback |
| `/privacy` | Data protection notice and zero-commercial-database architecture guarantees |
| `/sitemap.xml` | XML Sitemap with canonical URLs |
| `/robots.txt` | Crawler permissions |
| `/llms.txt` | Machine-readable summary for AI-assisted search and answer engines |

---

## 5. Research & Publishing Platform Pricing Architecture

All services feature transparent introductory pricing configured in `src/data/publishingConfig.ts`:
- **Repository Submission:** Free (Open Access preprint deposit)
- **Student Research Journal:** ₹199 (Introductory proposed fee)
- **Multidisciplinary Journal:** ₹299 (Introductory proposed fee)
- **Management, Finance & Commerce:** ₹299 (Introductory proposed fee)
- **Computer Science & Technology:** ₹399 (Introductory proposed fee)
- **Education & Social Sciences:** ₹249 (Introductory proposed fee)
- **Manuscript Layout Formatting:** ₹99 per paper (Up to 8,000 words)
- **Reference & Citation Formatting:** ₹99 per paper (Up to 60 references)
- **Basic Academic Proofreading:** ₹199 per paper (Up to 5,000 words)
- **Academic Copy Editing:** ₹299 per paper (Up to 6,000 words)
- **Institutional Membership:** Contact for pricing

> *Notice: Never pay any fee prior to formal editorial acceptance. All fees represent proposed introductory rates.*

---

## 6. Local Development & Build Commands

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Run production build and static export check
npm run build

# 4. Start production server locally
npm run start
```

---

## 7. Security & Separation Guarantees

- **No Production Secrets:** No `.env` files or API keys are committed.
- **Architectural Isolation:** Strictly independent from DealChowk production databases, Firebase instances, customer records, and payment infrastructure.
- **Zero Fabrication:** Educational fields, citations, and credentials are grounded in verified material or clearly marked editable fields.

---

## 8. Deployment to GitHub & Vercel

```bash
# Push to GitHub Remote:
git remote -v
# origin https://github.com/ersushilkumar/portfolio.git
git add .
git commit -m "feat: complete cinematic 3D portfolio and research publishing platform"
git push -u origin main
```

Deployable immediately to Vercel Hobby via Git import with default Next.js build settings.
