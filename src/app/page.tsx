import React from "react";
import Link from "next/link";
import Hero3DCard from "@/components/Hero3DCard";
import VentureCard3D from "@/components/VentureCard3D";
import ThreeHeroSceneClient from "@/components/ThreeHeroSceneClient";
import { siteConfig } from "@/data/siteConfig";
import { ventures } from "@/data/ventures";
import { researchPapers } from "@/data/research";
import { articles } from "@/data/articles";
import {
  ArrowUpRight,
  ShieldCheck,
  Building2,
  BookOpen,
  FileText,
  TrendingUp,
  CheckCircle,
  ExternalLink,
  Mail,
} from "lucide-react";

export default function HomePage() {
  const featuredVentures = ventures;
  const recentArticles = articles.slice(0, 3);
  const featuredResearch = researchPapers.slice(0, 2);

  return (
    <div className="relative overflow-hidden">
      {/* 1. CINEMATIC 3D HERO SECTION */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8"
        aria-label="Introduction and Founder Overview"
      >
        {/* 3D WebGL Background Scene */}
        <ThreeHeroSceneClient />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Column: Semantic Headline & Identity */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 self-start bg-slate-900/90 border border-slate-700/80 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg shadow-black/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-200">
                Founder & Platform Architect
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-[11px] font-mono text-sky-400">
                DealChowk • Research
              </span>
            </div>

            {/* Main Heading (H1 for SEO) */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Sushil Kumar
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-amber-300">
                {siteConfig.headline}
              </p>
            </div>

            {/* Positioning Statement */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {siteConfig.tagline}
            </p>

            {/* Key Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <span className="text-xs font-mono text-slate-400 block">Venture Focus</span>
                <span className="text-xs font-bold text-white mt-0.5 block">Hyperlocal Retail</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <span className="text-xs font-mono text-slate-400 block">Research Pillar</span>
                <span className="text-xs font-bold text-white mt-0.5 block">FinTech Fraud Risk</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <span className="text-xs font-mono text-slate-400 block">Publishing</span>
                <span className="text-xs font-bold text-amber-300 mt-0.5 block">Scholarly Hub</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/ventures/dealchowk"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-sky-900/30 transition-all hover:scale-[1.02]"
              >
                <span>Explore DealChowk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/research-publishing"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-950/40 hover:bg-amber-900/40 border border-amber-600/40 hover:border-amber-500 text-amber-300 font-semibold text-xs transition-all hover:scale-[1.02]"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Academic Publishing</span>
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-600/50 hover:border-emerald-400 text-emerald-300 hover:text-white font-medium text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>Email Sushil</span>
              </a>
              <a
                href={siteConfig.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-medium text-xs transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Perspective Hero Card (Authentic Executive Portrait) */}
          <div className="lg:col-span-5 flex justify-center">
            <Hero3DCard />
          </div>
        </div>
      </section>

      {/* 2. VENTURES SHOWCASE SECTION */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/60 relative z-10"
        aria-label="Ventures and Initiatives"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
                <Building2 className="w-4 h-4" />
                <span>Entrepreneurial Ventures</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Venture Architecture & Platforms
              </h2>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                Commercial systems engineered to solve tangible operational friction in regional retail, manufacturing, and skill infrastructure.
              </p>
            </div>
            <Link
              href="/ventures"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 self-start md:self-auto"
            >
              <span>View All Ventures & Case Studies</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredVentures.map((venture) => (
              <VentureCard3D key={venture.slug} venture={venture} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. RESEARCH & PUBLISHING PLATFORM SPOTLIGHT */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950 relative z-10"
        aria-label="Academic Research and Publishing Platform"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="rounded-3xl bg-gradient-to-r from-amber-950/30 via-slate-900/90 to-sky-950/30 border border-amber-500/30 p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 self-start bg-amber-950/60 border border-amber-600/50 px-3 py-1 rounded-full text-xs font-semibold text-amber-300">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Platform Announcement • Academic Services</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Academic Research & Publishing Platform
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                  A comprehensive publishing architecture serving students, research scholars, faculty, and independent authors across disciplines. Providing an open academic repository, planned double-blind journal tracks, and precision manuscript editorial services.
                </p>

                {/* Transparent Introductory Fee Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 block">Repository</span>
                    <span className="text-sm font-bold text-emerald-400 mt-0.5 block">Free Deposit</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 block">Student Journal</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">₹199 Intro</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 block">Multidisciplinary</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">₹299 Intro</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 block">Formatting</span>
                    <span className="text-sm font-bold text-amber-400 mt-0.5 block">₹99 / paper</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/research-publishing"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-950/40 transition-all hover:scale-[1.02]"
                  >
                    <span>Explore Publishing Platform</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/research-publishing/repository"
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    <span>Deposit Paper (Free)</span>
                  </Link>
                  <Link
                    href="/research-publishing/services"
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    <span>Editorial Services</span>
                  </Link>
                </div>
              </div>

              {/* Right preview box */}
              <div className="lg:col-span-4 bg-slate-950/90 rounded-2xl border border-slate-800 p-6 flex flex-col gap-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                  Platform Core Pillars
                </span>
                <ul className="flex flex-col gap-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Academic Repository:</strong> Permanent preprint & monograph hosting under Creative Commons licenses.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Editorial Screening:</strong> Plagiarism checks, ethics screening, and double-blind peer review assignment.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Author Support:</strong> APA/IEEE style formatting, citation cross-checking, and proofreading.</span>
                  </li>
                </ul>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                  Transparent introductory fees. Never pay before editorial acceptance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MANAGEMENT & RISK RESEARCH SECTION */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/80 relative z-10"
        aria-label="Finance and Research Studies"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>Quantitative & Academic Studies</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Finance, Risk Governance & Marketing Research
              </h2>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                Rigorous empirical investigations into marketplace fraud vulnerabilities, consumer heuristics, and spatial commerce adoption.
              </p>
            </div>
            <Link
              href="/finance-and-research"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 self-start md:self-auto"
            >
              <span>Explore All Research Papers</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredResearch.map((paper) => (
              <div
                key={paper.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 md:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-[11px] font-mono text-sky-400 bg-sky-950/60 border border-sky-800/50 px-2.5 py-0.5 rounded-full">
                      {paper.status} • {paper.year}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {paper.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                    {paper.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {paper.abstract}
                  </p>
                  <div className="flex flex-col gap-1.5 pt-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                      Core Empirical Finding:
                    </span>
                    <p className="text-xs text-slate-400 italic">
                      &quot;{paper.keyFindings[0]}&quot;
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {paper.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/finance-and-research"
                    className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
                  >
                    <span>Read Paper</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ARTICLES & TECHNICAL WRITING SECTION */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/60 relative z-10"
        aria-label="Editorial Writing and Technical Essays"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
                <FileText className="w-4 h-4" />
                <span>Editorial & Systems Essays</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Insights, Fieldwork & Systems Thinking
              </h2>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                Essays on building hyperlocal marketplaces, operational governance, and modern web architecture.
              </p>
            </div>
            <Link
              href="/writing"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 self-start md:self-auto"
            >
              <span>View All Articles</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/writing/${article.slug}`}
                className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/70 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                    <span>{article.topic}</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {article.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-sky-400 font-medium">
                  <span>{article.publishedAt}</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION & SOCIAL VERIFICATION */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-gradient-to-t from-slate-950 via-slate-900/50 to-slate-950 relative z-10"
        aria-label="Direct Inquiries and Collaboration"
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 bg-sky-950/60 border border-sky-800/60 px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Direct Inquiries Welcome</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate a Conversation or Collaboration
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
            Whether you are discussing retail partnerships for DealChowk, proposing an academic research inquiry, or seeking manuscript publication support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-sky-900/30 transition-all hover:scale-[1.02]"
            >
              <span>Send Message</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs transition-colors"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>View Structured Resume</span>
            </Link>
            <a
              href={siteConfig.social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-950/40 hover:bg-sky-900/40 border border-sky-700/60 text-sky-300 font-semibold text-xs transition-colors"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
