import React from "react";
import Link from "next/link";
import { ventures } from "@/data/ventures";
import VentureCard3D from "@/components/VentureCard3D";
import { Building2, ShieldCheck, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ventures & Initiatives — DealChowk, Siddhi Technofab, SkillPeHill",
  description:
    "Explore the entrepreneurial initiatives led by Sushil Kumar, including DealChowk hyperlocal marketplace, Siddhi Technofab industrial fabrication, and SkillPeHill skill infrastructure.",
  alternates: {
    canonical: "/ventures",
  },
  openGraph: {
    title: "Ventures & Commercial Initiatives — Sushil Kumar",
    description:
      "Commercial platforms and ventures engineered by Sushil Kumar: DealChowk, Siddhi Technofab, and SkillPeHill.",
    url: "/ventures",
  },
};

export default function VenturesPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 bg-sky-950/60 border border-sky-800/60 px-3 py-1 rounded-full text-xs font-semibold text-sky-300 mb-4">
          <Building2 className="w-3.5 h-3.5 text-sky-400" />
          <span>Commercial & Strategic Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Ventures, Platforms & Initiatives
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Ground-up entrepreneurial projects focused on bridging digital access and physical operations across hyperlocal commerce, engineering fabrication, and regional skills.
        </p>
      </div>

      {/* Grid of Ventures */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {ventures.map((venture) => (
          <VentureCard3D key={venture.slug} venture={venture} />
        ))}
      </div>

      {/* Venture Independence & Security Disclosure */}
      <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-white">
              System Boundary & Information Security
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              This portfolio maintains complete architectural isolation from DealChowk production databases, Firebase authentication, customer records, and payment infrastructure.
            </p>
          </div>
        </div>
        <Link
          href="/privacy"
          className="text-xs font-semibold text-sky-400 hover:text-sky-300 shrink-0 inline-flex items-center gap-1"
        >
          <span>Security Notice</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
