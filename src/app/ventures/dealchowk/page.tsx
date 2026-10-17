import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ventures } from "@/data/ventures";
import {
  Building2,
  ExternalLink,
  CheckCircle2,
  Users,
  MapPin,
  TrendingUp,
  Cpu,
  ShoppingBag,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DealChowk Case Study — Hyperlocal Commerce Architecture",
  description:
    "In-depth venture case study of DealChowk: architecture, merchant onboarding, hyperlocal discovery algorithms, and go-to-market strategy by Sushil Kumar.",
  alternates: {
    canonical: "/ventures/dealchowk",
  },
  openGraph: {
    title: "DealChowk Case Study — Hyperlocal Commerce Architecture",
    description:
      "Cross-platform Flutter & TypeScript architecture, proximity discovery, and merchant onboarding for neighborhood retail.",
    url: "/ventures/dealchowk",
    images: [
      {
        url: "/images/dealchowk_field_onboarding.jpg",
        width: 1200,
        height: 750,
        alt: "Sushil Kumar with local merchant at DealChowk storefront onboarding stall",
      },
    ],
  },
};

export default function DealChowkPage() {
  const dealchowk = ventures.find((v) => v.slug === "dealchowk")!;

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-mono">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/ventures" className="hover:text-white transition-colors">
          Ventures
        </Link>
        <span>/</span>
        <span className="text-sky-400 font-semibold">DealChowk</span>
      </nav>

      {/* Hero Banner with Official Logo */}
      <div className="rounded-3xl bg-gradient-to-br from-rose-950/40 via-slate-900/90 to-slate-950 border border-rose-500/30 p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-950 border border-rose-500/30 p-3 flex items-center justify-center shadow-xl shrink-0">
              <Image
                src={dealchowk.logoUrl!}
                alt="DealChowk Official Brand Logo — 3D Red Location Pin with Shopping Bag and Rupee Symbol"
                width={72}
                height={72}
                className="object-contain"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-semibold text-rose-400 bg-rose-950/60 border border-rose-800/60 px-3 py-0.5 rounded-full">
                  {dealchowk.status}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {dealchowk.period}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {dealchowk.title}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-rose-200/90 font-medium max-w-2xl">
                {dealchowk.tagline}
              </p>
            </div>
          </div>

          {/* Direct Live Portals */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <a
              href={dealchowk.publicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-semibold text-xs shadow-lg shadow-rose-950/40 transition-all hover:scale-[1.02]"
            >
              <span>Visit dealchowk.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={dealchowk.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-xs transition-colors"
            >
              <span>Launch App Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Case Study Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content Column */}
        <div className="lg:col-span-8 flex flex-col gap-12 text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* Section 1: Problem & Intended Audience */}
          <section>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-rose-400" />
              <span>1. The Local Commerce Disconnect</span>
            </h2>
            <p>
              In regional urban and tier-2/3 commerce corridors, traditional brick-and-mortar merchants face acute operational challenges. While major national e-commerce conglomerates dominate digital search, nearby neighborhood consumers frequently remain unaware of real-time inventory, specialized products, and promotional bargains available merely streets away.
            </p>
            <p className="mt-3">
              Simultaneously, local consumers desire the speed, trust, and physical immediacy of neighborhood shopping—verifying goods in person or receiving same-day collection—without paying exorbitant delivery markups or waiting days for distant fulfillment hubs.
            </p>
          </section>

          {/* Section 2: Solution & Product Concept */}
          <section>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-sky-400" />
              <span>2. The Solution: Hyperlocal Discovery Engine</span>
            </h2>
            <p>
              DealChowk bridges this divide through an intuitive discovery and digital storefront platform designed specifically around geographic radius indexing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h3 className="font-semibold text-white text-sm mb-1">For Local Merchants</h3>
                <p className="text-xs text-slate-400">
                  A frictionless catalog and offer broadcast console allowing shop owners to showcase daily arrivals, clearance discounts, and verified store hours with minimal technical overhead.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h3 className="font-semibold text-white text-sm mb-1">For Nearby Buyers</h3>
                <p className="text-xs text-slate-400">
                  Instant location-aware catalog exploration, localized coupon redemption, direct merchant communication, and transparent neighborhood retail discovery.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Merchant Onboarding & Go-To-Market */}
          <section>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              <span>3. Grounded Go-To-Market & Merchant Onboarding</span>
            </h2>
            <p>
              Traditional SaaS onboarding paradigms fail in informal and semi-formal retail markets. Our field strategy relies on structured geographic clustering—onboarding high-density commercial markets (chowks and shopping complexes) market-by-market.
            </p>

            {/* Fieldwork Photo Feature */}
            <div className="my-6 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/dealchowk_field_onboarding.jpg"
                  alt="Sushil Kumar with local merchant at DealChowk storefront onboarding stall, reviewing mobile app on phone, laptop catalog, and merchant needs checklist"
                  fill
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <strong className="text-white block">Fieldwork & Live Merchant Onboarding</strong>
                  <span className="text-slate-400">Sushil Kumar demonstrating live catalog upload and discount validation to a neighborhood retailer.</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-full shrink-0">
                  Verified Fieldwork
                </span>
              </div>
            </div>

            <ul className="mt-4 flex flex-col gap-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span><strong>Zero Friction Cataloging:</strong> Enabling catalog setup through image-first uploads and simple pricing toggles rather than exhaustive complex SKU taxonomy.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span><strong>High-Density Clustering:</strong> Generating immediate consumer search density by onboarding at least 25+ merchants within a single commercial radius before launching consumer marketing.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span><strong>Offline-to-Online Trust:</strong> Utilizing in-store branded QR codes and physical touchpoints to convert walk-in customers into recurring digital followers.</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Architectural Integrity & Codebase Distribution */}
          <section>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-400" />
              <span>4. Technical Stack & Repository Breakdown</span>
            </h2>
            <p>
              The DealChowk platform (CityConnect) is engineered with a high-performance cross-platform mobile client and cloud backend. Dart and Flutter power 66.6% of the codebase, ensuring smooth 60fps animations and native device access across Android and iOS.
            </p>

            {/* Codebase Language Breakdown Card */}
            <div className="my-6 p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                  Verified GitHub Codebase (ersushilkumar/cityconnect)
                </span>
                <a
                  href="https://github.com/ersushilkumar/cityconnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 font-mono"
                >
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Stack Visual Bar */}
              <div className="w-full h-3 rounded-full overflow-hidden flex bg-slate-800 mb-4">
                <div style={{ width: "66.6%" }} className="bg-sky-500" title="Dart 66.6%" />
                <div style={{ width: "27.4%" }} className="bg-blue-600" title="TypeScript 27.4%" />
                <div style={{ width: "1.5%" }} className="bg-orange-500" title="HTML 1.5%" />
                <div style={{ width: "1.5%" }} className="bg-yellow-400" title="JavaScript 1.5%" />
                <div style={{ width: "0.9%" }} className="bg-pink-500" title="C++ 0.9%" />
                <div style={{ width: "0.8%" }} className="bg-blue-400" title="PowerShell 0.8%" />
                <div style={{ width: "1.3%" }} className="bg-emerald-400" title="Other 1.3%" />
              </div>

              {/* Language Tags Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                    <span>Dart (Flutter)</span>
                  </span>
                  <span className="font-bold text-white">66.6%</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <span>TypeScript</span>
                  </span>
                  <span className="font-bold text-white">27.4%</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                    <span>HTML / JS</span>
                  </span>
                  <span className="font-bold text-white">3.0%</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span>Firebase & Other</span>
                  </span>
                  <span className="font-bold text-white">3.0%</span>
                </div>
              </div>
            </div>

            <p className="mt-3">
              Crucially, financial and promotional state engines incorporate fraud risk rules—preventing fake redemption claims, repeated promotional exploits, and phantom merchant profiles through multi-factor validation and transaction audit trails.
            </p>
          </section>

          {/* Section 5: Learning & Roadmap */}
          <section>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span>5. Lessons Learned & Next Milestones</span>
            </h2>
            <p>
              Building in hyperlocal retail reinforces the axiom that technology adoption is fundamentally social rather than merely technical. Merchant loyalty requires tangible footfall evidence within the first two weeks of onboarding.
            </p>
            <p className="mt-3">
              Ongoing engineering focuses on expanding automated localized inventory reconciliation, enhanced merchant analytics, and regional language interfaces for non-English-speaking retail operators.
            </p>
          </section>
        </div>

        {/* Sidebar Column: Specifications & Verified Social Hub */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {/* Quick Facts Card */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
              Venture Specifications
            </h3>
            <dl className="flex flex-col gap-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <dt className="text-slate-400">Founded / Active</dt>
                <dd className="font-semibold text-white">2023 – Present</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <dt className="text-slate-400">Founder Role</dt>
                <dd className="font-semibold text-white">Founder & Product Lead</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <dt className="text-slate-400">Industry</dt>
                <dd className="font-semibold text-white">Hyperlocal E-Commerce</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <dt className="text-slate-400">Geographic Scope</dt>
                <dd className="font-semibold text-white">Regional Urban Corridors</dd>
              </div>
            </dl>
          </div>

          {/* Verified Official Social Presence Hub */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-3 flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              <span>DealChowk Official Channels</span>
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Verified corporate and community presence for DealChowk:
            </p>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <a
                  href={siteConfig.dealchowkSocial.website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 flex items-center justify-between text-slate-200 hover:text-white transition-colors"
                >
                  <span className="font-medium">Public Portal (dealchowk.in)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.dealchowkSocial.app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 flex items-center justify-between text-slate-200 hover:text-white transition-colors"
                >
                  <span className="font-medium">Web Application (app.dealchowk.in)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.dealchowkSocial.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 flex items-center justify-between text-slate-200 hover:text-white transition-colors"
                >
                  <span className="font-medium">YouTube (@dealchowk)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.dealchowkSocial.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 flex items-center justify-between text-slate-200 hover:text-white transition-colors"
                >
                  <span className="font-medium">Instagram (@dealchowk)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.dealchowkSocial.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 flex items-center justify-between text-slate-200 hover:text-white transition-colors"
                >
                  <span className="font-medium">Facebook (DealChowk)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Security & Isolation Notice */}
          <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-slate-300">
            <span className="font-semibold text-emerald-400 block mb-1">
              Zero Production Access Guarantee
            </span>
            This documentation is grounded exclusively in public architectural concepts. No customer data, live credentials, or production databases are connected to this personal portfolio.
          </div>
        </div>
      </div>
    </div>
  );
}
