import React from "react";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/siteConfig";
import {
  Mail,
  ShieldCheck,
  ExternalLink,
  MessageSquare,
  Building2,
  BookOpen,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sushil Kumar — Inquiries, Ventures & Collaboration",
  description:
    "Direct contact options for Sushil Kumar: venture inquiries for DealChowk, academic collaboration, and manuscript publishing.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 bg-sky-950/60 border border-sky-800/60 px-3 py-1 rounded-full text-xs font-semibold text-sky-300 mb-4">
          <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
          <span>Direct Communication</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Initiate Direct Contact
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Open to discussions on hyperlocal marketplace expansion, management research collaboration, retail technology consulting, and academic publishing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Right: Verified Channels & Direct Social Links */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Channel 1: Direct Personal Email */}
          <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Primary Email Channel</span>
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                Verified
              </span>
            </div>
            <h2 className="text-lg font-bold text-white">Direct Email Inbox</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Reach out directly for venture discussions, platform engineering, research inquiries, or speaking opportunities.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Channel 2: Verified LinkedIn */}
          <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Professional Network</span>
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                Verified
              </span>
            </div>
            <h2 className="text-lg font-bold text-white">LinkedIn Direct Messaging</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              LinkedIn is monitored daily for founder conversations, academic inquiries, and venture partnerships. Connect directly with verified handle <strong>{siteConfig.social.linkedin.handle}</strong>.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Channel 3: Academic Publishing Inquiries */}
          <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Research & Publishing Office</span>
            </span>
            <h2 className="text-lg font-bold text-white">Scholarly & Journal Inquiries</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              For inquiries regarding repository deposits, student research journal tracks, volume manuscript formatting, or institutional memberships.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${siteConfig.email}?subject=[Publishing%20Inquiry]%20Academic%20Manuscript%20Questions`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-amber-300 bg-amber-950/40 hover:bg-amber-900/50 border border-amber-700/50 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Editorial Desk</span>
              </a>
            </div>
          </div>

          {/* Channel 3: DealChowk Merchant Office */}
          <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              <span>DealChowk Corporate Hub</span>
            </span>
            <h2 className="text-lg font-bold text-white">Retailer & Merchant Partnerships</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              For local store onboarding, commercial retail complexes, and regional consumer marketing in your area.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={siteConfig.dealchowkSocial.website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-medium text-slate-200 bg-slate-950 hover:bg-slate-800 border border-slate-800 transition-colors"
              >
                <span>Visit dealchowk.in</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
