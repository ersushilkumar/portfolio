import React from "react";
import Link from "next/link";
import { researchPapers } from "@/data/research";
import {
  TrendingUp,
  BookOpen,
  Scale,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Quote,
  FileText,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance, Risk Governance & Management Research — Sushil Kumar",
  description:
    "Empirical working papers and academic inquiries into digital marketplace fraud mitigation, consumer behavior heuristics, and hyperlocal retail network dynamics.",
};

export default function FinanceAndResearchPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 bg-sky-950/60 border border-sky-800/60 px-3 py-1 rounded-full text-xs font-semibold text-sky-300 mb-4">
          <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
          <span>Academic & Empirical Inquiry</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Finance, Risk Governance & Management Research
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Grounded quantitative studies and conceptual frameworks exploring transactional fraud vulnerabilities, behavioral consumer heuristics, and go-to-market dynamics in emerging retail ecosystems.
        </p>

        {/* Academic Integrity Notice */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <span>
            All items below reflect working papers, field research drafts, and empirical monographs. Research statuses are explicitly preserved to distinguish active working drafts from peer-reviewed publications.
          </span>
        </div>
      </div>

      {/* Research Papers Grid */}
      <div className="flex flex-col gap-10 mb-16">
        {researchPapers.map((paper) => (
          <article
            key={paper.id}
            className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-700 transition-colors"
          >
            <div className="flex flex-col gap-6">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/60 px-3 py-1 rounded-full">
                    {paper.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {paper.year}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  {paper.readTime}
                </span>
              </div>

              {/* Title & Abstract */}
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">
                  {paper.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  {paper.abstract}
                </p>
              </div>

              {/* Key Empirical Findings */}
              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
                <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Key Empirical & Theoretical Insights</span>
                </h3>
                <ul className="flex flex-col gap-2.5 text-xs text-slate-300">
                  {paper.keyFindings.map((finding, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-sky-400 font-bold font-mono">0{idx + 1}.</span>
                      <span className="leading-relaxed">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Academic References & Grounded Citations */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                  <Quote className="w-3.5 h-3.5 text-slate-400" />
                  <span>Foundational References & Literature</span>
                </h3>
                <ul className="flex flex-col gap-1.5 text-xs text-slate-400 font-mono">
                  {paper.citations.map((cite, idx) => (
                    <li key={idx} className="pl-3 border-l-2 border-slate-800">
                      {cite}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 pt-2">
                {paper.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-[11px] font-mono text-slate-400 bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-md"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Available for academic citations and peer discussion.
              </span>
              <div className="flex items-center gap-3">
                <Link
                  href="/research-publishing/repository"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                >
                  <span>Deposit Preprint in Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
                >
                  <span>Inquire for Collaboration</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
