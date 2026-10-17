import React from "react";
import ResumePrintButton from "@/components/ResumePrintButton";
import { siteConfig } from "@/data/siteConfig";
import { resumeData } from "@/data/resume";
import {
  FileText,
  GraduationCap,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Resume & Experience",
  description:
    "Curated curriculum vitae of Sushil Kumar: venture building, product architecture, education, skills, and empirical research.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Professional Resume — Sushil Kumar",
    description:
      "Curated curriculum vitae of Sushil Kumar: DealChowk founder, mobile/platform architecture, education, and research experience.",
    url: "/resume",
  },
};

export default function ResumePage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Action Header (Hidden in Print) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800 print:hidden">
        <div>
          <div className="inline-flex items-center gap-2 bg-sky-950/60 border border-sky-800/60 px-3 py-1 rounded-full text-xs font-semibold text-sky-300 mb-2">
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>Curriculum Vitae</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Resume
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <ResumePrintButton />
          <a
            href={siteConfig.social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors"
          >
            <span>LinkedIn Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Print-Ready Resume Container */}
      <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-12 print:bg-white print:text-black print:border-none print:p-0 print:shadow-none shadow-2xl">
        {/* Header Block */}
        <header className="pb-8 border-b border-slate-800 print:border-slate-300">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black tracking-tight">
                {siteConfig.name}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-sky-400 print:text-slate-800 mt-1">
                {siteConfig.role}
              </p>
            </div>
            <div className="text-xs text-slate-400 print:text-slate-600 flex flex-col sm:items-end gap-1 font-mono">
              <span className="text-emerald-400 font-semibold print:text-black">Email: {siteConfig.email}</span>
              <span>Location: {siteConfig.location}</span>
              <span>LinkedIn: {siteConfig.social.linkedin.handle}</span>
              <span>Portfolio: {siteConfig.siteUrl.replace("https://", "")}</span>
            </div>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-300 print:text-slate-700 leading-relaxed max-w-3xl">
            {resumeData.summary}
          </p>
        </header>

        {/* Section 1: Entrepreneurial Leadership & Experience */}
        <section className="py-8 border-b border-slate-800 print:border-slate-300">
          <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 print:text-slate-900 font-bold mb-6 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>Venture Leadership & Experience</span>
          </h3>

          <div className="flex flex-col gap-8">
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-base font-bold text-white print:text-black">
                      {exp.role} — <span className="text-sky-300 print:text-slate-800">{exp.company}</span>
                    </h4>
                  </div>
                  <span className="text-xs text-slate-400 print:text-slate-600 font-mono">
                    {exp.period} • {exp.location}
                  </span>
                </div>

                <p className="text-xs text-slate-300 print:text-slate-700 italic">
                  {exp.description}
                </p>

                <ul className="mt-2 flex flex-col gap-1.5 text-xs text-slate-300 print:text-slate-800">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-sky-400 print:text-black shrink-0 mt-0.5">•</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Education & Academic Preparation */}
        <section className="py-8 border-b border-slate-800 print:border-slate-300">
          <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 print:text-slate-900 font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>Education & Academic Preparation</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-200">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-sm font-bold text-white print:text-black">
                    {edu.degree}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400 print:text-slate-600">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs text-sky-300 print:text-slate-800 font-medium mb-1">
                  {edu.field}
                </p>
                <p className="text-[11px] text-slate-400 print:text-slate-600 mb-3">
                  {edu.institution}
                </p>

                {edu.details && (
                  <ul className="flex flex-col gap-1 text-[11px] text-slate-300 print:text-slate-700">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-sky-400 print:text-black mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Core Competencies & Skills */}
        <section className="py-8 border-b border-slate-800 print:border-slate-300">
          <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 print:text-slate-900 font-bold mb-6">
            Core Competencies & Functional Skills
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resumeData.skills.map((skillGroup, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <h4 className="text-xs font-semibold text-white print:text-black">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono text-slate-300 print:text-slate-800 bg-slate-950 print:bg-slate-100 border border-slate-800 print:border-slate-300 px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Academic Publishing & Research Links */}
        <section className="pt-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 print:text-slate-900 font-bold mb-4">
            Research & Platform Initiatives
          </h3>
          <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed mb-4">
            Principal investigator on working papers in digital transaction fraud risk governance, two-sided hyperlocal retail adoption, and consumer behavior in tier-2 Indian commercial corridors. Founder of an open academic research and manuscript publishing platform.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 print:text-slate-600">
            <span>• Research Papers: /finance-and-research</span>
            <span>• Academic Publishing: /research-publishing</span>
            <span>• Venture Case Study: /ventures/dealchowk</span>
          </div>
        </section>
      </div>

      {/* Print Instructions / Transparency Notice (Hidden in Print) */}
      <div className="mt-8 p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 flex items-center justify-between print:hidden">
        <span>
          Click &quot;Print / Save as PDF&quot; to export a pristine single-column black-and-white resume directly via your browser.
        </span>
        <ResumePrintButton />
      </div>
    </div>
  );
}
