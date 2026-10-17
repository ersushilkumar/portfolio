"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import {
  Layers,
  ExternalLink,
  CheckCircle2,
  Code2,
} from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Mobile & Platform",
    "Web Application",
    "Platform",
    "Fintech & Risk",
    "AI & Analytics",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 bg-sky-950/60 border border-sky-800/60 px-3 py-1 rounded-full text-xs font-semibold text-sky-300 mb-4">
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          <span>Product Engineering & Prototypes</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Selected Projects & Technical Work
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Tangible systems, research prototypes, and digital tools engineered to address friction in retail operations, transactional risk governance, and interactive web graphics.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-12" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={selectedCategory === cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === cat
                ? "bg-sky-600 text-white shadow-md shadow-sky-900/30"
                : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards List */}
      <div className="flex flex-col gap-8 mb-16">
        {filteredProjects.map((project) => (
          <article
            key={project.slug}
            className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-700 transition-colors"
          >
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/60 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.period}
                  </span>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    project.status === "Shipped"
                      ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300"
                      : "bg-amber-950/60 border-amber-500/40 text-amber-300"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm font-medium text-sky-300/90 mt-1">
                  {project.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-1">
                    The Problem
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                    The Engineered Solution
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Outcomes and Key Deliverables */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Verified Outcomes & Capabilities
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {project.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono text-slate-400 bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links Footer */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white transition-colors"
                  >
                    <span>View Live Deployment</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
