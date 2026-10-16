import React from "react";
import Link from "next/link";
import { ventures } from "@/data/ventures";
import { GraduationCap, ArrowUpRight, CheckCircle2, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SkillPeHill Venture Profile — Regional Skills & Academic Infrastructure",
  description:
    "Venture profile of SkillPeHill: vocational enablement, academic curriculum frameworks, and skill verification infrastructure led by Sushil Kumar.",
};

export default function SkillPeHillPage() {
  const venture = ventures.find((v) => v.slug === "skillpehill")!;

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-mono">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/ventures" className="hover:text-white transition-colors">
          Ventures
        </Link>
        <span>/</span>
        <span className="text-sky-400 font-semibold">SkillPeHill</span>
      </nav>

      {/* Hero Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900/90 to-slate-950 border border-indigo-500/30 p-8 sm:p-12 mb-16 shadow-2xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono font-semibold text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 px-3 py-0.5 rounded-full">
            {venture.status}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {venture.period}
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {venture.title}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-indigo-200/90 font-medium max-w-2xl">
          {venture.tagline}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 flex flex-col gap-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              <span>Vocational Infrastructure & Purpose</span>
            </h2>
            <p>
              SkillPeHill is a strategic educational initiative focused on addressing structural employment mismatch in regional and tier-2/3 student populations. While theoretical graduation rates remain high, practical applied competence in digital workflows, small business financial accounting, and modern technical tooling requires focused bridge programs.
            </p>
            <p className="mt-3">
              The initiative aligns with our wider academic research in pedagogy and regional development, creating structured modules that combine verifiable skills with real micro-internship opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">
              Core Framework Pillars
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {venture.keyHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Connection to Academic Publishing */}
          <section className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30">
            <h3 className="text-base font-bold text-amber-300 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Synergy with Student Research Publishing
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              SkillPeHill integrates directly with our Student Research Journal track (offered at an introductory ₹199 rate), providing undergraduate scholars with an accessible pathway to publish their capstone projects, course dissertations, and applied field studies.
            </p>
            <div className="mt-4">
              <Link
                href="/research-publishing"
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
              >
                <span>Explore Student Journal Track</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
              Initiative Details
            </h3>
            <dl className="flex flex-col gap-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <dt className="text-slate-400">Category</dt>
                <dd className="font-semibold text-white">EdTech & Skill Verification</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <dt className="text-slate-400">Status</dt>
                <dd className="font-semibold text-indigo-300">Strategic Initiative</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <dt className="text-slate-400">Role</dt>
                <dd className="font-semibold text-white">Curriculum Architect</dd>
              </div>
            </dl>
          </div>

          <Link
            href="/contact"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            <span>Partner on Academic Outreach</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
