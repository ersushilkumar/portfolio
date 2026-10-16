"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, ArrowUpRight, BookOpen, Layers } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-slate-100 hover:text-white transition-colors"
            aria-label="Sushil Kumar — Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 p-[1px] shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300 text-sm">
                SK
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-wide text-slate-100 group-hover:text-sky-300 transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-tight hidden sm:inline-block">
                Founder & Platform Builder
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-sm"
          >
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              
              const isPublishing = item.href === "/research-publishing";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-150 ${
                    isActive
                      ? "text-sky-300 bg-sky-950/60 shadow-inner border border-sky-500/30 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  } ${isPublishing ? "text-amber-300 font-medium" : ""}`}
                >
                  {isPublishing && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mr-1.5 animate-pulse" />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/research-publishing"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-300 bg-amber-950/40 border border-amber-600/40 hover:border-amber-500 px-3 py-1.5 rounded-lg transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Publish Research</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 px-3.5 py-1.5 rounded-lg shadow-sm shadow-sky-900/30 transition-all hover:shadow-sky-500/20 hover:scale-[1.02]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              className="sm:hidden text-xs font-medium text-white bg-sky-600 hover:bg-sky-500 px-2.5 py-1 rounded-md"
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-800/90 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col gap-1.5">
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              const isPublishing = item.href === "/research-publishing";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors ${
                    isActive
                      ? "text-sky-300 bg-sky-950/50 font-semibold border-l-2 border-sky-400 pl-3.5"
                      : "text-slate-300 hover:text-white hover:bg-slate-900/80"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isPublishing && <BookOpen className="w-4 h-4 text-amber-400" />}
                    {item.name}
                  </span>
                  {isPublishing && (
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                      New
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
            <Link
              href="/research-publishing"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-xs font-semibold text-amber-300 bg-amber-950/40 border border-amber-600/50"
            >
              <BookOpen className="w-4 h-4" />
              Academic Research & Publishing Platform
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-sky-600 to-indigo-600"
            >
              Initiate Contact
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
