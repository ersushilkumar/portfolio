"use client";

import React, { useState } from "react";
import Link from "next/link";
import { publishingConfig, EditorialService } from "@/data/publishingConfig";
import {
  FileCheck2,
  CheckCircle2,
  Clock,
  FileText,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Send,
  Building,
} from "lucide-react";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string>("manuscript-formatting");
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [targetStyle, setTargetStyle] = useState("APA 7th Edition");
  const [notes, setNotes] = useState("");
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSubmitted(true);
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
        <span className="text-amber-400 font-semibold">Author Editorial Services</span>
      </nav>

      {/* Hero */}
      <div className="max-w-4xl mb-12">
        <div className="inline-flex items-center gap-2 bg-amber-950/60 border border-amber-600/50 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-300 mb-4">
          <FileCheck2 className="w-3.5 h-3.5 text-amber-400" />
          <span>Author Enablement • Editorial Precision</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Author Editorial & Formatting Services
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Ensure your research complies with stringent journal specifications. We provide template layout standardization, citation and DOI verification, linguistic proofreading, and in-depth academic copy editing at transparent introductory rates.
        </p>
      </div>

      {/* 4 Core Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {publishingConfig.editorialServices.map((service) => (
          <div
            key={service.id}
            className="rounded-3xl bg-slate-900/70 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-colors relative"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-amber-400">
                    Introductory Rate
                  </span>
                  <h2 className="text-xl font-bold text-white mt-1">
                    {service.title}
                  </h2>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-2xl font-extrabold text-amber-400">
                    ₹{service.introductoryPriceINR}
                  </span>
                  <span className="text-[11px] text-slate-400 block font-mono">
                    {service.pricingType}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px]">Word / Scope Limit</span>
                  <span className="font-semibold text-white">{service.wordLimit}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Estimated Turnaround</span>
                  <span className="font-semibold text-sky-400">{service.turnaroundTime}</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-200 block mb-2.5">
                  Included Deliverables:
                </span>
                <ul className="flex flex-col gap-2 text-xs text-slate-300">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <a
                href="#order-service"
                onClick={() => setSelectedService(service.id)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-amber-300 bg-amber-950/40 hover:bg-amber-900/50 border border-amber-700/50 transition-colors"
              >
                <span>Select {service.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Institutional Membership Section */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950/30 to-slate-900 border border-slate-800 p-8 sm:p-10 mb-20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
            <Building className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              Institutional & Departmental Packages
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Custom agreements for universities, departments, and research centers. Volume manuscript formatting, journal creation, and scholar workshops.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="shrink-0 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-xs transition-colors"
        >
          Contact for Institutional Pricing
        </Link>
      </div>

      {/* Order / Inquiry Intake Portal */}
      <section id="order-service" className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 mb-16 shadow-2xl">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
            <Send className="w-4 h-4" />
            <span>Service Request Intake</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Initiate Editorial Review Request
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Submit your manuscript metadata. Our editorial coordinator will review your word count and provide sample proof before payment.
          </p>
        </div>

        {requestSubmitted ? (
          <div className="p-8 rounded-2xl bg-amber-950/40 border border-amber-600/60 text-center flex flex-col items-center gap-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-amber-900/60 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Editorial Request Received
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg mx-auto">
                Thank you, <strong>{authorName}</strong>. Our editorial team will examine your target style ({targetStyle}) and email preliminary sample feedback and upload instructions to <strong>{authorEmail}</strong>.
              </p>
            </div>
            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setRequestSubmitted(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-colors"
              >
                Submit Another Request
              </button>
              <Link
                href="/research-publishing"
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors"
              >
                Return to Publishing Hub
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="service-select" className="text-xs font-semibold text-slate-200">
                  Selected Editorial Service <span className="text-amber-400">*</span>
                </label>
                <select
                  id="service-select"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                >
                  {publishingConfig.editorialServices.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} — ₹{s.introductoryPriceINR} ({s.wordLimit})
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="target-style" className="text-xs font-semibold text-slate-200">
                  Target Citation / Journal Style <span className="text-amber-400">*</span>
                </label>
                <select
                  id="target-style"
                  value={targetStyle}
                  onChange={(e) => setTargetStyle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                >
                  <option value="APA 7th Edition">APA 7th Edition</option>
                  <option value="IEEE Format">IEEE Format</option>
                  <option value="Harvard Style">Harvard Referencing</option>
                  <option value="Chicago / Turabian">Chicago / Turabian</option>
                  <option value="Custom Journal Template">Custom Target Journal Template</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="author-name" className="text-xs font-semibold text-slate-200">
                  Author Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  id="author-name"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="e.g., Sushil Kumar"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="author-email" className="text-xs font-semibold text-slate-200">
                  Email Address <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  id="author-email"
                  required
                  value={authorEmail}
                  onChange={(e) => setAuthorEmail(e.target.value)}
                  placeholder="e.g., author@institution.edu"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="notes" className="text-xs font-semibold text-slate-200">
                Specific Formatting Instructions or Target Journal URL
              </label>
              <textarea
                id="notes"
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention specific constraints (e.g., double column format, anonymized title page, or reference count)..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-y"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-slate-400">
                Transparent sample review prior to any billing.
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-950/40 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Service Request</span>
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
