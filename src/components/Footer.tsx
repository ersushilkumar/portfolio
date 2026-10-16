"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import {
  ExternalLink,
  ShieldCheck,
  Building2,
  BookOpen,
  ArrowUpRight,
  FileText,
  Mail,
  MapPin,
  Lock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-sm relative z-10">
      {/* Decorative top border gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Identity & Positioning */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold text-sky-400 text-xs">
                  SK
                </div>
              </div>
              <div>
                <span className="font-semibold text-white tracking-wide block">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {siteConfig.role}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Architecting hyperlocal commerce platforms, financial risk governance models, and quantitative research in consumer behavior and regional markets.
            </p>

            {/* Verified Personal Handles */}
            <div className="pt-2 flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Verified Public Profiles
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-md"
                >
                  <Mail className="w-3 h-3" />
                  <span>{siteConfig.email}</span>
                </a>
                <a
                  href={siteConfig.social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition-colors bg-sky-950/40 border border-sky-800/40 px-2.5 py-1 rounded-md"
                >
                  <span>LinkedIn ({siteConfig.social.linkedin.handle})</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={siteConfig.social.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors bg-slate-900 border border-slate-700/60 px-2.5 py-1 rounded-md"
                >
                  <span>GitHub ({siteConfig.social.github.handle})</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Explore DealChowk (Official Venture Hub) */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white font-semibold text-xs tracking-wider uppercase">
              <Building2 className="w-4 h-4 text-rose-400" />
              <span>DealChowk Official</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-normal">
              Hyperlocal commerce platform connecting neighborhood stores with local buyers.
            </p>
            <ul className="flex flex-col gap-1.5 text-xs">
              <li>
                <a
                  href={siteConfig.dealchowkSocial.website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Public Portal (dealchowk.in)</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.dealchowkSocial.app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Live Web App (app.dealchowk.in)</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.dealchowkSocial.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Official YouTube</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.dealchowkSocial.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Official Instagram</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.dealchowkSocial.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>DealChowk Facebook</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic & Publishing Subsystem */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white font-semibold text-xs tracking-wider uppercase">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Research & Publishing</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-normal">
              Scholarly workflows, preprints, journal tracks, and manuscript editorial services.
            </p>
            <ul className="flex flex-col gap-1.5 text-xs">
              <li>
                <Link
                  href="/research-publishing"
                  className="text-amber-300 hover:text-amber-200 transition-colors inline-flex items-center gap-1"
                >
                  <span>Platform Overview & Rates</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                </Link>
              </li>
              <li>
                <Link
                  href="/research-publishing/repository"
                  className="hover:text-white transition-colors"
                >
                  Academic Repository (Free Deposit)
                </Link>
              </li>
              <li>
                <Link
                  href="/research-publishing/journals"
                  className="hover:text-white transition-colors"
                >
                  Journal Tracks & Peer Review
                </Link>
              </li>
              <li>
                <Link
                  href="/research-publishing/services"
                  className="hover:text-white transition-colors"
                >
                  Author Services (Editing & Formatting)
                </Link>
              </li>
              <li>
                <Link
                  href="/finance-and-research"
                  className="hover:text-white transition-colors"
                >
                  Management & Risk Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Portals & Documentation */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white font-semibold text-xs tracking-wider uppercase">
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Site Navigation</span>
            </div>
            <ul className="flex flex-col gap-1.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link href="/ventures" className="hover:text-white transition-colors">
                  Ventures (DealChowk, Siddhi, SkillPeHill)
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Product & Engineering Projects
                </Link>
              </li>
              <li>
                <Link href="/writing" className="hover:text-white transition-colors">
                  Essays & Technical Writing
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-white transition-colors">
                  Structured Resume
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Notice & Terms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Direct Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Disclaimers, and Privacy */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2025 {siteConfig.name}. All verified content protected.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 text-[11px] text-slate-400">
              <Lock className="w-3 h-3 text-emerald-400" />
              Zero DealChowk Backend Dependency
            </span>
            <span className="text-slate-700">|</span>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Data Privacy & Disclaimers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
