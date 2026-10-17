"use client";

import React, { useState } from "react";
import Link from "next/link";
import { publishingConfig, JournalTrack } from "@/data/publishingConfig";
import {
  BookOpen,
  CheckCircle2,
  ArrowUpRight,
  Send,
  AlertTriangle,
  Lock,
} from "lucide-react";

export default function JournalsPage() {
  const [selectedTrack, setSelectedTrack] = useState<JournalTrack>(
    publishingConfig.journals[0]
  );
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [manuscriptTitle, setManuscriptTitle] = useState("");
  const [wordCount, setWordCount] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleJournalSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!authorName.trim() || !authorEmail.trim() || !manuscriptTitle.trim()) {
      setErrorMessage("Please complete all required author and manuscript details.");
      return;
    }

    setErrorMessage("");
    setSubmissionSuccess(true);
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
        <span className="text-sky-400 font-semibold">Journal Tracks</span>
      </nav>

      {/* Hero */}
      <div className="max-w-4xl mb-12">
        <div className="inline-flex items-center gap-2 bg-sky-950/60 border border-sky-600/50 px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-300 mb-4">
          <BookOpen className="w-3.5 h-3.5 text-sky-400" />
          <span>Peer-Review Architecture • Proposed Disciplinary Tracks</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Journal Tracks & Editorial Screening
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Structured peer-review tracks serving academic disciplines across student inquiries, applied business studies, computer science, and social sciences. Built with strict ethical screening, transparent fee policies, and author-first copyright retention.
        </p>

        {/* Regulatory & Pricing Alert */}
        <div className="mt-6 p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 flex items-start gap-3 text-xs text-amber-200/90 leading-relaxed">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block mb-0.5">
              Transparent Introductory Status & Zero Advance Fees
            </strong>
            All fees listed are proposed introductory costs. <strong>Never pay any fee prior to formal editorial acceptance.</strong> Submissions will only be routed to voluntary peer referees when qualified subject specialists are confirmed.
          </div>
        </div>
      </div>

      {/* Disciplinary Journal Tracks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
        {/* Track Selector List */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
            Select Journal Track
          </span>
          {publishingConfig.journals.map((track) => {
            const isSelected = selectedTrack.id === track.id;
            return (
              <button
                key={track.id}
                type="button"
                onClick={() => setSelectedTrack(track)}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? "bg-sky-950/50 border-sky-500 shadow-lg shadow-sky-950/30 ring-1 ring-sky-500/30"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono font-medium text-slate-400">
                    {track.discipline}
                  </span>
                  <span className="text-xs font-bold text-sky-400 bg-sky-950 px-2.5 py-0.5 rounded-full border border-sky-800/60">
                    ₹{track.introductoryFeeINR} Intro
                  </span>
                </div>
                <h2 className="text-sm font-bold text-white mb-1.5 leading-snug">
                  {track.title}
                </h2>
                <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                  <span>Status: {track.status}</span>
                  <span>•</span>
                  <span>{track.frequency}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Track Detailed Profile */}
        <div className="lg:col-span-7 rounded-3xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold block">
                  {selectedTrack.discipline}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  {selectedTrack.title}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block font-mono">Proposed Fee</span>
                <span className="text-2xl font-extrabold text-sky-400">
                  ₹{selectedTrack.introductoryFeeINR}
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Aims & Disciplinary Scope
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedTrack.scope}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Intended Authors & Audience
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedTrack.targetAudience}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-semibold text-white block mb-1">
                  Screening Protocol
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Initial desk check for scope, citation integrity, and plagiarism within 3 business days.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-semibold text-white block mb-1">
                  Peer Review Model
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Double-blind peer review involving voluntary faculty referees across verified academic faculties.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Author retains 100% CC BY copyright.
            </span>
            <a
              href="#submit-manuscript"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors"
            >
              <span>Submit to This Track</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Editorial Process & Life-Cycle Flow */}
      <section className="mb-20">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
            Standard Operating Procedure
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Manuscript Editorial Lifecycle
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Transparent milestones from submission to peer evaluation, decision, and publication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center font-bold text-sky-400 text-xs font-mono">
              01
            </div>
            <h3 className="text-sm font-bold text-white">Desk Screening</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automated plagiarism scan and editorial review of formatting, methodology soundness, and disciplinary fit.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center font-bold text-sky-400 text-xs font-mono">
              02
            </div>
            <h3 className="text-sm font-bold text-white">Double-Blind Review</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Anonymized manuscript distributed to two independent academic referees for critical evaluation and commentary.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center font-bold text-sky-400 text-xs font-mono">
              03
            </div>
            <h3 className="text-sm font-bold text-white">Author Revisions</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Authors receive structured reviewer notes and an itemized revision request to clarify arguments or refine empirical data.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center font-bold text-sky-400 text-xs font-mono">
              04
            </div>
            <h3 className="text-sm font-bold text-white">Formal Acceptance</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Upon final editorial signoff, the manuscript receives official issue layout and permanent archive publication.
            </p>
          </div>
        </div>
      </section>

      {/* Manuscript Submission Portal */}
      <section id="submit-manuscript" className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 mb-16 shadow-2xl">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
            <Send className="w-4 h-4" />
            <span>Manuscript Submission Portal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Submit Paper for Editorial Screening
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Target Track: <strong>{selectedTrack.title}</strong> (Proposed Fee: ₹{selectedTrack.introductoryFeeINR} — payable strictly after acceptance).
          </p>
        </div>

        {submissionSuccess ? (
          <div className="p-8 rounded-2xl bg-sky-950/40 border border-sky-600/60 text-center flex flex-col items-center gap-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-sky-900/60 border border-sky-400/40 flex items-center justify-center text-sky-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Manuscript Registered in Editorial Queue
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg mx-auto">
                Thank you, <strong>{authorName}</strong>. Your paper &quot;<strong>{manuscriptTitle}</strong>&quot; has been logged for initial screening under {selectedTrack.title}. Our editorial team will review the initial abstract and email next steps to <strong>{authorEmail}</strong>.
              </p>
            </div>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSubmissionSuccess(false);
                  setManuscriptTitle("");
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-colors"
              >
                Submit Another Manuscript
              </button>
              <Link
                href="/research-publishing"
                className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-xs font-semibold text-white transition-colors"
              >
                Platform Overview
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleJournalSubmit} className="flex flex-col gap-6">
            {errorMessage && (
              <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-800/60 text-rose-300 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="journal-name" className="text-xs font-semibold text-slate-200">
                  Corresponding Author Name <span className="text-sky-400">*</span>
                </label>
                <input
                  type="text"
                  id="journal-name"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="e.g., Sushil Kumar"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="journal-email" className="text-xs font-semibold text-slate-200">
                  Corresponding Author Email <span className="text-sky-400">*</span>
                </label>
                <input
                  type="email"
                  id="journal-email"
                  required
                  value={authorEmail}
                  onChange={(e) => setAuthorEmail(e.target.value)}
                  placeholder="e.g., author@institution.edu"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="sm:col-span-2 flex flex-col gap-2">
                <label htmlFor="journal-title" className="text-xs font-semibold text-slate-200">
                  Full Manuscript Title <span className="text-sky-400">*</span>
                </label>
                <input
                  type="text"
                  id="journal-title"
                  required
                  value={manuscriptTitle}
                  onChange={(e) => setManuscriptTitle(e.target.value)}
                  placeholder="e.g., Transaction Fraud Governance in Hyperlocal Retail Networks"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="journal-words" className="text-xs font-semibold text-slate-200">
                  Approx. Word Count
                </label>
                <input
                  type="text"
                  id="journal-words"
                  value={wordCount}
                  onChange={(e) => setWordCount(e.target.value)}
                  placeholder="e.g., 4,500 words"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-start gap-2">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Confidentiality Assurance:</strong> Your manuscript file and draft text remain private to our editorial screening staff and assigned referees under strict non-disclosure obligations.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-slate-400">
                Fee of ₹{selectedTrack.introductoryFeeINR} is billed only upon final peer-review acceptance.
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-lg shadow-sky-950/40 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit to Editorial Review</span>
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
