import { NextResponse } from "next/server";
import { siteConfig } from "@/data/siteConfig";
import { ventures } from "@/data/ventures";
import { publishingConfig } from "@/data/publishingConfig";

export async function GET() {
  const content = `# Sushil Kumar — Founder, Product Architect & Researcher
> Canonical Site: ${siteConfig.siteUrl}
> Professional Role: ${siteConfig.role}
> Verified LinkedIn: ${siteConfig.social.linkedin.url} (handle: ${siteConfig.social.linkedin.handle})
> Verified GitHub: ${siteConfig.social.github.url}

## Summary
Sushil Kumar is an entrepreneurial builder and researcher based in India. He is the founder of DealChowk, a hyperlocal commerce platform connecting neighborhood merchants and local buyers. He conducts academic and empirical research in consumer behavior, marketing strategies, and digital marketplace fraud risk governance. He also directs an open academic research and publishing platform.

## Key Ventures
- DealChowk (dealchowk.in / app.dealchowk.in): Hyperlocal discovery platform and lightweight merchant counter-side POS verification.
- Siddhi Technofab: Industrial fabrication, structural metal assemblies, and physical engineering operations.
- SkillPeHill: Regional vocational skills assessment and verification initiative.

## Academic Research & Publishing Platform (/research-publishing)
- Academic Repository: Open-access repository for preprints, theses, and monographs under Creative Commons (CC BY / CC BY-NC) licenses. Free deposit.
- Journal Tracks: Proposed introductory disciplinary tracks (Student Research: ₹199, Multidisciplinary: ₹299, Management & Finance: ₹299, Computer Science: ₹399, Education & Social Sciences: ₹249).
- Author Editorial Services: Precision APA/IEEE layout formatting (₹99), citation verification (₹99), academic proofreading (₹199), and copy editing (₹299).

## Integrity & Architectural Boundary
This portfolio is strictly decoupled from DealChowk commercial production databases, Firebase authentication, and payment infrastructure. All personal details and social accounts represent verified public profiles.
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
