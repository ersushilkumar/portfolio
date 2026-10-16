"use client";

import React, { useState } from "react";
import Link from "next/link";
import { publishingConfig } from "@/data/publishingConfig";
import {
  ScrollText,
  Search,
  Filter,
  UploadCloud,
  CheckCircle2,
  ShieldCheck,
  Lock,
  ArrowUpRight,
  AlertCircle,
  FileText,
  BookOpen,
} from "lucide-react";

export default function RepositoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Deposit Form State
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [discipline, setDiscipline] = useState("Management & Economics");
  const [license, setLicense] = useState("CC BY 4.0");
  const [abstract, setAbstract] = useState("");
  const [authorConsent, setAuthorConsent] = useState(false);
  const [plagiarismDeclaration, setPlagiarismDeclaration] = useState(false);
  const [isDeposited, setIsDeposited] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDepositSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !authors.trim() || !abstract.trim()) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    if (!authorConsent || !plagiarismDeclaration) {
      setErrorMessage("You must accept author consent and copyright declarations to deposit.");
      return;
    }

    // Process submission
    setErrorMessage("");
    setIsDeposited(true);
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-mono">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/research-publishing" className="hover:text-white transition-colors">
          Research & Publishing
        </Link>
        <span>/</span>
        <span className="text-emerald-400 font-semibold">Academic Repository</span>
      </nav>

      {/* Hero */}
      <div className="max-w-4xl mb-12">
        <div className="inline-flex items-center gap-2 bg-emerald-950/60 border border-emerald-600/50 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 mb-4">
          <ScrollText className="w-3.5 h-3.5 text-emerald-400" />
          <span>Open Scholarly Archive • Free Deposit</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Open Academic Repository
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Permanent open-access deposit of preprints, working papers, theses, and regional research monographs. Ensure early scholarly attribution while retaining 100% full copyright under Creative Commons licenses.
        </p>
      </div>

      {/* Repository Collections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {publishingConfig.repositoryCollections.map((col) => (
          <div
            key={col.id}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
          >
            <div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full mb-3 inline-block">
                {col.badge}
              </span>
              <h2 className="text-base font-bold text-white mb-2">{col.title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                {col.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
              {col.itemCount}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Manuscript Deposit Form */}
      <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 mb-20 shadow-2xl backdrop-blur-md">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
            <UploadCloud className="w-4 h-4" />
            <span>Deposit Manuscript or Working Paper</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Author Deposit & Licensing Portal
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Repository submission is completely <strong>Free</strong>. Submissions undergo immediate moderation for scope and plagiarism check before indexing in our public repository.
          </p>
        </div>

        {isDeposited ? (
          <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-600/60 text-center flex flex-col items-center gap-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-900/60 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Deposit Received for Moderation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg mx-auto">
                Your paper &quot;<strong>{title}</strong>&quot; has been recorded in our screening queue under the <strong>{license}</strong> license. An editorial moderator will verify academic decency and plagiarism screening within 24–48 hours.
              </p>
            </div>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsDeposited(false);
                  setTitle("");
                  setAbstract("");
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-colors"
              >
                Deposit Another Paper
              </button>
              <Link
                href="/research-publishing"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition-colors"
              >
                Return to Overview
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleDepositSubmit} className="flex flex-col gap-6">
            {errorMessage && (
              <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-800/60 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="repo-title" className="text-xs font-semibold text-slate-200">
                Manuscript / Preprint Title <span className="text-emerald-400">*</span>
              </label>
              <input
                type="text"
                id="repo-title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Empirical Evaluation of Spatial Consumer Heuristics in Tier-2 Indian Corridors"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="repo-authors" className="text-xs font-semibold text-slate-200">
                  Author Names & Credentials <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  id="repo-authors"
                  required
                  value={authors}
                  onChange={(e) => setAuthors(e.target.value)}
                  placeholder="e.g., Sushil Kumar, Prof. R. K. Sharma"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="repo-affiliation" className="text-xs font-semibold text-slate-200">
                  Institutional Affiliation (Optional for Independent Authors)
                </label>
                <input
                  type="text"
                  id="repo-affiliation"
                  value={affiliation}
                  onChange={(e) => setAffiliation(e.target.value)}
                  placeholder="e.g., Department of Commerce / Independent Researcher"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="repo-discipline" className="text-xs font-semibold text-slate-200">
                  Academic Discipline / Field <span className="text-emerald-400">*</span>
                </label>
                <select
                  id="repo-discipline"
                  value={discipline}
                  onChange={(e) => setDiscipline(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                >
                  <option value="Management & Economics">Management, Finance & Commerce</option>
                  <option value="Computer Science">Computer Science & Platform Engineering</option>
                  <option value="Multidisciplinary">Multidisciplinary Applied Sciences</option>
                  <option value="Education & Social Sciences">Education & Regional Development</option>
                  <option value="Student Capstone">Undergraduate / Graduate Student Capstone</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="repo-license" className="text-xs font-semibold text-slate-200">
                  Open-Access Copyright License <span className="text-emerald-400">*</span>
                </label>
                <select
                  id="repo-license"
                  value={license}
                  onChange={(e) => setLicense(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                >
                  <option value="CC BY 4.0">Creative Commons Attribution (CC BY 4.0) — Recommended</option>
                  <option value="CC BY-NC 4.0">Creative Commons Non-Commercial (CC BY-NC 4.0)</option>
                  <option value="All Rights Reserved">Author Retained Rights (Open Archive Read-Only)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="repo-abstract" className="text-xs font-semibold text-slate-200">
                Manuscript Abstract & Keywords <span className="text-emerald-400">*</span>
              </label>
              <textarea
                id="repo-abstract"
                required
                rows={5}
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
                placeholder="Include a comprehensive abstract (150–350 words) outlining research questions, methodology, and empirical or theoretical contributions..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-y"
              />
            </div>

            {/* Mandatory Author Declarations */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col gap-3">
              <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                Author Rights & Ethics Declarations
              </span>

              <label className="flex items-start gap-3 cursor-pointer text-xs text-slate-300">
                <input
                  type="checkbox"
                  required
                  checked={authorConsent}
                  onChange={(e) => setAuthorConsent(e.target.checked)}
                  className="mt-0.5 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-emerald-400"
                />
                <span>
                  I confirm that all named co-authors have consented to this repository deposit, and that the authors retain copyright under the selected Creative Commons license.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer text-xs text-slate-300">
                <input
                  type="checkbox"
                  required
                  checked={plagiarismDeclaration}
                  onChange={(e) => setPlagiarismDeclaration(e.target.checked)}
                  className="mt-0.5 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-emerald-400"
                />
                <span>
                  I declare that this work is original, free from unacknowledged AI generation or commercial paper-mill manipulation, and properly cites all previous publications.
                </span>
              </label>
            </div>

            {/* Submit Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero fees. Private manuscript storage during screening.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Submit Manuscript to Repository (Free)</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Distinction Reminder */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
        <p>
          Need formal double-blind peer review for academic appraisal? Consider submitting to our <strong>Journal Tracks</strong>.
        </p>
        <Link
          href="/research-publishing/journals"
          className="text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1 shrink-0 ml-4"
        >
          <span>View Journal Tracks</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
