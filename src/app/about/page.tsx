import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import {
  Compass,
  CheckCircle2,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Background, Principles & Journey",
  description:
    "Learn about Sushil Kumar: founder of DealChowk, builder of tech platforms, and researcher in management, consumer behavior, and fraud risk governance.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Sushil Kumar — Background, Principles & Journey",
    description:
      "Background, engineering principles, and management research journey of Sushil Kumar.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 bg-sky-950/60 border border-sky-800/60 px-3 py-1 rounded-full text-xs font-semibold text-sky-300 mb-4">
          <Compass className="w-3.5 h-3.5 text-sky-400" />
          <span>Foundational Background & Principles</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Building Grounded Systems from First Principles
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          I am an entrepreneurial builder and researcher focused on hyperlocal commerce, digital product development, and empirical financial risk governance.
        </p>
      </div>

      {/* Two-Column Grid: Narrative and Authentic Photographs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            My work is anchored in understanding and solving tangible economic friction. In developing <strong>DealChowk</strong>, our focus is squarely on empowering regional brick-and-mortar merchants with modern digital storefronts and instant nearby discovery—bridging the gap between physical retail intimacy and modern e-commerce velocity.
          </p>

          <p>
            Prior to digital platforms, working in industrial and operational contexts with <strong>Siddhi Technofab</strong> provided deep grounding in tangible operations, supply chains, fabrication requirements, and practical execution.
          </p>

          <p>
            Parallel to venture development, I pursue academic and empirical research in management, consumer psychology, and transaction risk governance. Digital marketplaces inevitably encounter systemic adversarial behavior—from promotion abuse to fraudulent fulfillment. Addressing these requires rigorous quantitative frameworks, transparent auditability, and algorithmic risk mitigation designed from day zero.
          </p>

          {/* Core Values Section */}
          <div className="pt-6">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-6">
              Core Guiding Principles
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {siteConfig.bio.values.map((v, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80"
                >
                  <h3 className="text-base font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    <span>{v.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Authentic Photographs */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Secondary Portrait: Charcoal Blazer & Light-Blue Shirt */}
          <div className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl relative group">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={siteConfig.images.charcoalBlazer}
                alt="Sushil Kumar — Charcoal blazer and light-blue shirt portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>
            <div className="p-4 bg-slate-950 border-t border-slate-800/80">
              <span className="text-xs font-semibold text-white block">
                Sushil Kumar
              </span>
              <span className="text-[11px] text-slate-400">
                Founder, DealChowk • Management & Risk Researcher
              </span>
            </div>
          </div>

          {/* Outdoor Groundwork & Merchant Onboarding Photograph */}
          <div className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl relative group">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={siteConfig.images.outdoorJourney}
                alt="Sushil Kumar with local merchant at DealChowk storefront counter reviewing mobile app, laptop catalog, and onboarding checklist"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>
            <div className="p-4 bg-slate-950 border-t border-slate-800/80">
              <span className="text-xs font-semibold text-white block">
                Ground Reality & Retailer Onboarding
              </span>
              <span className="text-[11px] text-slate-400">
                Sushil Kumar on the ground with local Kirana and retail merchants—verifying real-time mobile workflows, QR voucher redemption, and inventory needs.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-Link CTAs */}
      <div className="pt-10 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">Explore Further</h3>
          <p className="text-xs text-slate-400">Review venture profiles, academic working papers, or professional resume.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/ventures"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors"
          >
            <span>Review Ventures</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/research-publishing"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-950/60 border border-amber-600/40 text-amber-300 hover:text-white text-xs font-semibold transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Publishing Platform</span>
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-colors"
          >
            <span>Structured Resume</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
