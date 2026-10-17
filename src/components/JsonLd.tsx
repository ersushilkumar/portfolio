import React from "react";
import { siteConfig } from "@/data/siteConfig";

export default function JsonLd() {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.bio.short,
    url: baseUrl,
    image: `${baseUrl}${siteConfig.images.heroNavy}`,
    email: `mailto:${siteConfig.email}`,
    sameAs: [
      siteConfig.social.linkedin.url,
      siteConfig.social.github.url,
    ],
    knowsAbout: [
      "Hyperlocal Commerce",
      "Two-Sided Marketplaces",
      "Fraud Risk Mitigation",
      "Consumer Behavior",
      "Product Strategy",
      "Platform Engineering",
      "Academic Publishing",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sushil Kumar — Founder & Platform Builder Portfolio",
    url: siteConfig.siteUrl,
    description: siteConfig.headline,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DealChowk",
    url: siteConfig.dealchowkSocial.website.url,
    logo: `${siteConfig.siteUrl}${siteConfig.images.dealchowkLogo}`,
    founder: {
      "@type": "Person",
      name: siteConfig.name,
    },
    sameAs: [
      siteConfig.dealchowkSocial.app.url,
      siteConfig.dealchowkSocial.youtube.url,
      siteConfig.dealchowkSocial.instagram.url,
      siteConfig.dealchowkSocial.facebook.url,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </>
  );
}
