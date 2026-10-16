import React from "react";
import Link from "next/link";
import { ventures } from "@/data/ventures";
import { Factory, ShieldCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siddhi Technofab Venture Profile — Industrial Engineering & Fabrication",
  description:
    "Venture profile of Siddhi Technofab: industrial fabrication, manufacturing operations, and physical engineering initiatives by Sushil Kumar.",
};

export default function SiddhiTechnofabPage() {
  const venture = ventures.find((v) => v.slug === "siddhi-technofab")!;

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
        <span className="text-sky-400 font-semibold">Siddhi Technofab</span>
      </nav>

      {/* Hero Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-amber-950/30 via-slate-900/90 to-slate-950 border border-amber-500/30 p-8 sm:p-12 mb-16 shadow-2xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono font-semibold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-0.5 rounded-full">
            {venture.status}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {venture.period}
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {venture.title}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-amber-200/90 font-medium max-w-2xl">
          {venture.tagline}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 flex flex-col gap-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
              <Factory className="w-5 h-5 text-amber-400" />
              <span>Operational Grounding & Industrial Scope</span>
            </h2>
            <p>
              Siddhi Technofab represents foundational experience in physical manufacturing, structural metal fabrication, and industrial engineering workflows. Operating in physical fabrication provides critical exposure to supply chain realities, raw material sourcing dynamics, quality assurance standards, and labor management.
            </p>
            <p className="mt-3">
              This industrial grounding directly informs our philosophy towards digital platforms—reinforcing the understanding that real economic value lies in streamlining physical execution and production pipelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">
              Key Capabilities & Focus Areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {venture.keyHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Editable Field Notice */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400">
            <span className="font-semibold text-slate-300 block mb-1">
              Grounded Profile Notice
            </span>
            Specific customer rosters, plant machinery specifications, and fabrication capacity metrics are maintained as verified editable parameters. Full catalog details can be requested directly.
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
              Venture Information
            </h3>
            <dl className="flex flex-col gap-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <dt className="text-slate-400">Category</dt>
                <dd className="font-semibold text-white">Industrial Fabrication</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <dt className="text-slate-400">Status</dt>
                <dd className="font-semibold text-amber-300">Active Business</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <dt className="text-slate-400">Role</dt>
                <dd className="font-semibold text-white">Operational & Strategy</dd>
              </div>
            </dl>
          </div>

          <Link
            href="/contact"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            <span>Inquire About Fabrication</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
