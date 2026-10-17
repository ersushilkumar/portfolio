import React from "react";
import Link from "next/link";
import { publishingConfig } from "@/data/publishingConfig";
import {
  BookOpen,
  FileCheck2,
  ScrollText,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle,
  Scale,
  AlertTriangle,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Research & Publishing Platform",
  description:
    "Open academic repository, multidisciplinary journal tracks, and manuscript editorial services for students, research scholars, faculty, and independent authors.",
  alternates: {
    canonical: "/research-publishing",
  },
  openGraph: {
    title: "Academic Research & Publishing Platform — Sushil Kumar",
    description:
      "Open-access scholarly repository, double-blind journal tracks, and manuscript editorial services directed by Sushil Kumar.",
    url: "/research-publishing",
  },
};

export default function ResearchPublishingPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-4xl mb-14">
        <div className="inline-flex items-center gap-2 bg-amber-950/60 border border-amber-600/50 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-300 mb-4">
          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
          <span>Academic Ecosystem • Scholarly Infrastructure</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Academic Research & Publishing Platform
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Democratizing scholarly dissemination for students, research scholars, faculty, and independent investigators. Providing an open academic preprint repository, structured journal tracks, and precision manuscript editorial services.
        </p>

        {/* Regulatory & Pricing Transparency Alert */}
        <div className="mt-6 p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 flex items-start gap-3 text-xs text-amber-200/90 leading-relaxed">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block mb-0.5">
              Transparent Introductory Pricing Notice
            </strong>
            {publishingConfig.institutionNotice}
          </div>
        </div>
      </div>

      {/* 3 Core System Pillars Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {/* Pillar 1: Open Academic Repository */}
        <div className="rounded-3xl bg-slate-900/70 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-colors relative overflow-hidden group">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <ScrollText className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                Open Access
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
                Free Deposit
              </span>
            </div>
            <h2 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
              Academic Repository
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Deposit preprints, working papers, theses, and regional research monographs under Creative Commons (CC BY / CC BY-NC) author copyright.
            </p>
            <ul className="flex flex-col gap-2 text-xs text-slate-400 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant citable scholarly record</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Author retains 100% full copyright</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero deposit or hosting fees</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <Link
              href="/research-publishing/repository"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-700/50 transition-colors"
            >
              <span>Explore Repository & Deposit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Pillar 2: Journal Tracks */}
        <div className="rounded-3xl bg-slate-900/70 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-colors relative overflow-hidden group">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-950/80 border border-sky-500/40 flex items-center justify-center text-sky-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
                Peer Review Tracks
              </span>
              <span className="text-xs font-bold text-sky-400 bg-sky-950/80 px-2.5 py-0.5 rounded-full border border-sky-800/60">
                From ₹199 Intro
              </span>
            </div>
            <h2 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
              Journal Tracks
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Disciplinary publications covering Student Research, Multidisciplinary Studies, Management & Finance, Computer Science, and Social Sciences.
            </p>
            <ul className="flex flex-col gap-2 text-xs text-slate-400 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                <span>Rigorous double-blind screening</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                <span>Constructive reviewer feedback</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                <span>Zero charge before acceptance</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <Link
              href="/research-publishing/journals"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-sky-300 bg-sky-950/40 hover:bg-sky-900/50 border border-sky-700/50 transition-colors"
            >
              <span>View Journals & Submit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Pillar 3: Author Editorial Services */}
        <div className="rounded-3xl bg-slate-900/70 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-colors relative overflow-hidden group">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                Editorial Precision
              </span>
              <span className="text-xs font-bold text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-800/60">
                From ₹99 Intro
              </span>
            </div>
            <h2 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
              Author Services
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Standardize your paper to APA/IEEE formatting guidelines, verify bibliography citations, and elevate academic prose clarity.
            </p>
            <ul className="flex flex-col gap-2 text-xs text-slate-400 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Formatting from ₹99 per manuscript</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Proofreading & Copy Editing tiers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Rapid 48–72 hour turnaround</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <Link
              href="/research-publishing/services"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-amber-300 bg-amber-950/40 hover:bg-amber-900/50 border border-amber-700/50 transition-colors"
            >
              <span>Explore Editorial Services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Complete Introductory Fee Matrix */}
      <section className="mb-20">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
            Configurable Pricing Reference
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Transparent Proposed Introductory Pricing
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Clear, upfront rates across all submission tracks and author assistance services.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950/80 text-slate-300 border-b border-slate-800 font-mono uppercase text-[11px]">
              <tr>
                <th className="py-4 px-6">Service / Track</th>
                <th className="py-4 px-6">Scope / Target Audience</th>
                <th className="py-4 px-6">Deliverable / Outcome</th>
                <th className="py-4 px-6">Introductory Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-6 font-semibold text-white">Repository Submission</td>
                <td className="py-3.5 px-6 text-slate-400">Preprints, Theses & Working Papers</td>
                <td className="py-3.5 px-6">Permanent open-access citable hosting</td>
                <td className="py-3.5 px-6 font-bold text-emerald-400">Free</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-6 font-semibold text-white">Student Research Journal</td>
                <td className="py-3.5 px-6 text-slate-400">Undergraduate & Graduate Scholars</td>
                <td className="py-3.5 px-6">Editorial screening & publication record</td>
                <td className="py-3.5 px-6 font-bold text-sky-400">₹199</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-6 font-semibold text-white">Multidisciplinary Journal</td>
                <td className="py-3.5 px-6 text-slate-400">Cross-Disciplinary Applied Studies</td>
                <td className="py-3.5 px-6">Double-blind peer evaluation</td>
                <td className="py-3.5 px-6 font-bold text-sky-400">₹299</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-6 font-semibold text-white">Management, Finance & Commerce</td>
                <td className="py-3.5 px-6 text-slate-400">Business, Fraud Risk & Retail Research</td>
                <td className="py-3.5 px-6">Specialist editorial peer review</td>
                <td className="py-3.5 px-6 font-bold text-sky-400">₹299</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-6 font-semibold text-white">Computer Science & Technology</td>
                <td className="py-3.5 px-6 text-slate-400">Platforms, Algorithms, Cloud & AI Systems</td>
                <td className="py-3.5 px-6">Technical review & archive hosting</td>
                <td className="py-3.5 px-6 font-bold text-sky-400">₹399</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-6 font-semibold text-white">Education & Social Sciences</td>
                <td className="py-3.5 px-6 text-slate-400">Pedagogy, Regional Skills & Sociology</td>
                <td className="py-3.5 px-6">Scholarly review & open publication</td>
                <td className="py-3.5 px-6 font-bold text-sky-400">₹249</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-6 font-semibold text-white">Manuscript Layout Formatting</td>
                <td className="py-3.5 px-6 text-slate-400">Up to 8,000 words per paper</td>
                <td className="py-3.5 px-6">Standardized APA/IEEE PDF & DOCX</td>
                <td className="py-3.5 px-6 font-bold text-amber-400">₹99</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-6 font-semibold text-white">Reference & Citation Verification</td>
                <td className="py-3.5 px-6 text-slate-400">Up to 60 references</td>
                <td className="py-3.5 px-6">DOI audit & style alignment</td>
                <td className="py-3.5 px-6 font-bold text-amber-400">₹99</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-6 font-semibold text-white">Basic Academic Proofreading</td>
                <td className="py-3.5 px-6 text-slate-400">Up to 5,000 words per paper</td>
                <td className="py-3.5 px-6">Grammar, syntax & punctuation correction</td>
                <td className="py-3.5 px-6 font-bold text-amber-400">₹199</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-6 font-semibold text-white">Academic Copy Editing</td>
                <td className="py-3.5 px-6 text-slate-400">Up to 6,000 words per paper</td>
                <td className="py-3.5 px-6">Structural sentence polish + editorial memo</td>
                <td className="py-3.5 px-6 font-bold text-amber-400">₹299</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-6 font-semibold text-white">Institutional Membership</td>
                <td className="py-3.5 px-6 text-slate-400">Universities, Colleges & Departments</td>
                <td className="py-3.5 px-6">Custom volume manuscript processing</td>
                <td className="py-3.5 px-6 font-bold text-slate-300">Contact for Pricing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Editorial Screening vs Formal Peer Review Clarification */}
      <section className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-10 mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
          <Scale className="w-5 h-5 text-sky-400" />
          <span>Clear Distinction: Repository Hosting vs. Formal Peer Review</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
            <h3 className="font-bold text-emerald-400 text-sm mb-2">
              Academic Repository (Preprint Dissemination)
            </h3>
            <p>
              Repository deposit is an open scholarly archive mechanism. Manuscripts undergo moderation exclusively for topic relevance, academic decency, and basic plagiarism screening. <strong>It does not constitute peer-reviewed journal endorsement.</strong> Authors retain copyright and are free to submit their preprint to any formal external journal.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
            <h3 className="font-bold text-sky-400 text-sm mb-2">
              Journal Tracks (Editorial & Peer Review)
            </h3>
            <p>
              Submissions to designated journal tracks enter a structured editorial screening process. Manuscripts passing screening are routed to voluntary academic referees in relevant disciplines. <strong>Reviewer assignment occurs only when qualified subject matter experts are available.</strong> Publication fees are only requested upon formal editorial acceptance.
            </p>
          </div>
        </div>
      </section>

      {/* Author Guidelines and Ethics */}
      <section className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 mb-16">
        <h2 className="text-xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>Ethics, Copyright & Withdrawal Standards</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
          <div>
            <h3 className="font-semibold text-white mb-1">Author Copyright Ownership</h3>
            <p className="text-slate-400 leading-relaxed">
              Authors retain all copyright under Creative Commons Attribution (CC BY 4.0) or Non-Commercial (CC BY-NC 4.0) licenses. You never surrender rights to your intellectual property.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Zero Plagiarism Policy</h3>
            <p className="text-slate-400 leading-relaxed">
              Submissions undergo string matching for academic integrity. Papers containing unacknowledged AI generation or commercial paper-mill signatures are automatically rejected.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Transparent Withdrawal & Errata</h3>
            <p className="text-slate-400 leading-relaxed">
              Authors may request paper withdrawal prior to publication decision with audit log transparency. Post-publication errata and author corrections are linked permanently to the article record.
            </p>
          </div>
        </div>
      </section>

      {/* Action Footer */}
      <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">Ready to Submit Your Research?</h3>
          <p className="text-xs text-slate-400">Choose between immediate free repository deposit or submit to a journal track.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/research-publishing/repository"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
          >
            <span>Deposit in Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/research-publishing/journals"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors"
          >
            <span>Submit to Journal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/research-publishing/services"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-colors"
          >
            <span>Order Formatting</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
