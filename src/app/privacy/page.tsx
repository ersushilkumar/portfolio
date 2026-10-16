import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ShieldCheck, Lock, ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice & Terms — Sushil Kumar Portfolio",
  description:
    "Privacy practices, data protection principles, and architectural boundaries for the personal portfolio of Sushil Kumar.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Transparency & Data Protection</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Privacy Notice & Operational Disclaimers
        </h1>
        <p className="mt-4 text-xs sm:text-sm text-slate-400 font-mono">
          Last Updated: October 2024
        </p>
      </div>

      <div className="flex flex-col gap-8 text-slate-300 text-xs sm:text-sm leading-relaxed">
        <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h2 className="text-base font-bold text-white mb-2 flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            1. Architectural Separation & Zero Commercial Data
          </h2>
          <p>
            This website is an independent personal, research, and portfolio platform for Sushil Kumar. It operates on an isolated hosting infrastructure completely disconnected from the production servers, customer databases, merchant accounts, payment gateways, and backend Firebase instances of DealChowk or any other commercial venture.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h2 className="text-base font-bold text-white mb-2">
            2. Information Collection & Form Handling
          </h2>
          <p>
            This website does not employ intrusive third-party tracking cookies, user profiling beacons, or behavioral advertising pixels. Inquiries submitted via the contact form trigger your local email client or clipboard copying—no message contents are persisted in any third-party marketing database.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h2 className="text-base font-bold text-white mb-2">
            3. Academic Research & Publishing Disclaimers
          </h2>
          <p>
            Descriptions of proposed journal tracks, manuscript formatting, and author services represent an introductory scholarly platform initiative. All fee structures are proposed introductory estimates subject to formal academic board establishment. No financial transactions are processed on this website.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h2 className="text-base font-bold text-white mb-2">
            4. External Links & Verified Third-Party Profiles
          </h2>
          <p>
            Links to external platforms (including LinkedIn, GitHub, DealChowk official domains, and academic literature DOIs) are provided for reference. We are not responsible for the privacy practices or contents of external third-party sites.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h2 className="text-base font-bold text-white mb-2">
            5. Contact for Privacy Inquiries
          </h2>
          <p>
            For questions regarding this privacy notice or personal data handling, you may communicate directly via LinkedIn or email:
          </p>
          <div className="mt-3 font-mono text-xs text-sky-400">
            LinkedIn: linkedin.com/in/{siteConfig.social.linkedin.handle}
          </div>
        </section>
      </div>
    </div>
  );
}
