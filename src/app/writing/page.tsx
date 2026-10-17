import React from "react";
import Link from "next/link";
import { articles } from "@/data/articles";
import { FileText, ArrowUpRight, Clock, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing, Fieldwork & Technical Essays",
  description:
    "Reflective essays and technical analyses on hyperlocal commerce, fintech fraud risk governance, and performant 3D web systems.",
  alternates: {
    canonical: "/writing",
  },
  openGraph: {
    title: "Writing, Fieldwork & Technical Essays — Sushil Kumar",
    description:
      "Essays and field analyses on Indian retail commerce, fintech risk governance, and web performance by Sushil Kumar.",
    url: "/writing",
  },
};

export default function WritingIndexPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 bg-sky-950/60 border border-sky-800/60 px-3 py-1 rounded-full text-xs font-semibold text-sky-300 mb-4">
          <FileText className="w-3.5 h-3.5 text-sky-400" />
          <span>Field Essays & Systems Thinking</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Writing, Fieldwork & Technical Essays
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          In-depth analyses examining the ground realities of Indian retail commerce, operational fraud governance, and modern web systems architecture.
        </p>
      </div>

      {/* Articles Index List */}
      <div className="flex flex-col gap-8 max-w-4xl mb-16">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-10 hover:border-slate-700 hover:bg-slate-900/80 transition-all group"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                <span className="text-sky-400 font-semibold bg-sky-950/60 border border-sky-800/60 px-2.5 py-0.5 rounded-full">
                  {article.topic}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.publishedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readingTime}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight">
                <Link href={`/writing/${article.slug}`}>
                  {article.title}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {article.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-slate-400 bg-slate-950 border border-slate-800 px-2.5 py-0.5 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 mt-2 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  By {article.author.name}
                </span>
                <Link
                  href={`/writing/${article.slug}`}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Full Essay</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
