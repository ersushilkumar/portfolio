import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, BookOpen, Layers } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div className="max-w-md mx-auto flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-sky-950 border border-sky-800 flex items-center justify-center font-mono font-bold text-sky-400 text-2xl shadow-xl">
          404
        </div>

        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            The page you are looking for does not exist or may have been relocated. Use the links below to return to the active portfolio routes.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/ventures"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white font-medium text-xs transition-colors"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Ventures</span>
          </Link>
          <Link
            href="/research-publishing"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-950/40 border border-amber-600/40 text-amber-300 hover:text-white font-medium text-xs transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Publishing Hub</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
