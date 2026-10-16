import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import {
  FileText,
  Calendar,
  Clock,
  ArrowLeft,
  Quote,
  Share2,
  BookOpen,
} from "lucide-react";
import type { Metadata } from "next";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} — Sushil Kumar`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      tags: article.tags,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Back to Writing */}
      <div className="mb-8">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Essays & Writing</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-12 pb-8 border-b border-slate-800">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono mb-4">
          <span className="text-sky-400 font-semibold bg-sky-950/60 border border-sky-800/60 px-3 py-0.5 rounded-full">
            {article.topic}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.publishedAt}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readingTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
          {article.title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          {article.description}
        </p>

        {/* Author Metadata */}
        <div className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-800/80">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-700 bg-slate-900 shrink-0">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-bold text-white block">
              {article.author.name}
            </span>
            <span className="text-xs text-slate-400">
              {article.author.role}
            </span>
          </div>
        </div>
      </header>

      {/* Main Editorial Content */}
      <div className="prose prose-invert prose-slate max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
        {article.content.split("\n\n").map((paragraph, idx) => {
          const trimmed = paragraph.trim();
          if (!trimmed) return null;

          if (trimmed.startsWith("### ")) {
            return (
              <h2
                key={idx}
                className="text-2xl font-bold text-white tracking-tight pt-6 pb-2 border-b border-slate-800/80"
              >
                {trimmed.replace("### ", "")}
              </h2>
            );
          }

          if (trimmed.startsWith("- ") || trimmed.startsWith("1. ")) {
            const lines = trimmed.split("\n");
            return (
              <ul key={idx} className="list-disc pl-5 space-y-2 text-slate-300">
                {lines.map((line, lIdx) => (
                  <li key={lIdx} className="leading-relaxed">
                    {line.replace(/^[-*]|\d+\.\s*/, "").trim()}
                  </li>
                ))}
              </ul>
            );
          }

          return (
            <p key={idx} className="leading-relaxed text-slate-300">
              {trimmed}
            </p>
          );
        })}
      </div>

      {/* References Section */}
      {article.references && article.references.length > 0 && (
        <section className="mt-16 pt-8 border-t border-slate-800">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4 flex items-center gap-2">
            <Quote className="w-4 h-4 text-sky-400" />
            <span>References & Literature Citations</span>
          </h2>
          <ul className="flex flex-col gap-2 text-xs text-slate-400 font-mono">
            {article.references.map((ref, idx) => (
              <li key={idx} className="pl-3 border-l-2 border-slate-800">
                {ref}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Cross-Link CTA */}
      <div className="mt-16 p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-base font-bold text-white">
            Interested in Research & Academic Publishing?
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Explore our open academic repository and student/multidisciplinary journal tracks.
          </p>
        </div>
        <Link
          href="/research-publishing"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          <span>Publishing Platform</span>
        </Link>
      </div>
    </article>
  );
}
