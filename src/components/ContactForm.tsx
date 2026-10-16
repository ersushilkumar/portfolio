"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import {
  Send,
  Mail,
  Copy,
  Check,
  AlertCircle,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Venture Inquiry",
    category: "General Inquiry",
    message: "",
    honeypot: "", // Spam prevention field
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMessage("");
  };

  const generateMailtoUrl = () => {
    const recipient = siteConfig.email || "sushil.dealchowk@gmail.com";
    const subject = encodeURIComponent(
      `[Portfolio Inquiry - ${formData.category}] ${formData.subject}`
    );
    const body = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n` +
        `Category: ${formData.category}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `Sent via Sushil Kumar Portfolio Contact Portal`
    );
    return `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const handleCopyFormatted = () => {
    const formatted =
      `To: Sushil Kumar (${siteConfig.email})\n` +
      `Category: ${formData.category}\n` +
      `Subject: ${formData.subject}\n` +
      `Sender: ${formData.name} (${formData.email})\n\n` +
      `Message:\n${formData.message}`;

    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (formData.honeypot) {
      setErrorMessage("Spam submission detected.");
      return;
    }

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (formData.message.trim().length < 15) {
      setErrorMessage("Message must be at least 15 characters.");
      return;
    }

    // Open mailto directly
    window.location.href = generateMailtoUrl();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
      {/* Header Info */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-emerald-950/60 border border-emerald-600/50 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 mb-3">
          <Mail className="w-3.5 h-3.5 text-emerald-400" />
          <span>Verified Direct Inbox: {siteConfig.email}</span>
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight">
          Send a Direct Inquiry
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
          For platform collaborations, research inquiries, manuscript editing, or advisory conversations. All inquiries route directly to Sushil Kumar at <strong className="text-slate-200">{siteConfig.email}</strong>.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-2xl bg-sky-950/40 border border-sky-800/60 p-6 text-center flex flex-col items-center gap-4 animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-sky-900/60 border border-sky-500/40 flex items-center justify-center text-sky-400">
            <Send className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">
              Email Client Triggered
            </h4>
            <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
              Your inquiry has been formatted and opened in your email application. You can also copy the formatted message to paste into LinkedIn or webmail below.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleCopyFormatted}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Message Text</span>
                </>
              )}
            </button>
            <a
              href={siteConfig.social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white transition-colors"
            >
              <span>Message on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Honeypot Spam Protection (Hidden from legitimate users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="honeypot">Leave blank</label>
            <input
              type="text"
              id="honeypot"
              name="honeypot"
              tabIndex={-1}
              value={formData.honeypot}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-800/60 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-xs font-medium text-slate-300"
              >
                Your Full Name <span className="text-sky-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Dr. Ananya Sharma"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-slate-300"
              >
                Your Email Address <span className="text-sky-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g., name@institution.edu"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Category */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="category"
                className="text-xs font-medium text-slate-300"
              >
                Inquiry Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
              >
                <option value="General Inquiry">General Professional Inquiry</option>
                <option value="DealChowk Partnership">DealChowk Retail / Partnership</option>
                <option value="Research & Publishing">Research & Manuscript Publishing</option>
                <option value="Academic Collaboration">Academic & Research Collaboration</option>
                <option value="Editorial Services">Author Formatting & Editorial Services</option>
              </select>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="subject"
                className="text-xs font-medium text-slate-300"
              >
                Subject Line <span className="text-sky-400">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g., Hyperlocal Distribution Discussion"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-xs font-medium text-slate-300"
            >
              Detailed Message <span className="text-sky-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Outline your background, project context, or question in detail..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-y"
            />
          </div>

          {/* Transparent Notice */}
          <div className="flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              Zero spam, zero third-party telemetry. This form routes directly into your default email client or allows one-click clipboard copying.
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-sky-900/30 transition-all hover:scale-[1.02]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Launch Email Client</span>
            </button>

            <button
              type="button"
              onClick={handleCopyFormatted}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs border border-slate-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied Text!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Message Draft</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
