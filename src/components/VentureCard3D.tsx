"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Venture } from "@/types";
import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";

interface VentureCard3DProps {
  venture: Venture;
}

export default function VentureCard3D({ venture }: VentureCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -5;
    const rotY = ((x - centerX) / centerX) * 5;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  return (
    <div
      style={{ perspective: "1000px" }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setRotateX(0);
          setRotateY(0);
        }}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
          transition: isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
        className="relative h-full flex flex-col justify-between rounded-2xl bg-slate-900/70 border border-slate-800/80 p-6 md:p-8 hover:border-slate-700 hover:shadow-2xl hover:shadow-sky-950/20 backdrop-blur-sm transition-all duration-300 group"
      >
        {/* Subtle accent corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-tr-2xl blur-xl pointer-events-none" />

        <div className="flex flex-col gap-5">
          {/* Header: Logo / Category & Status */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {venture.logoUrl ? (
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 p-2 flex items-center justify-center shadow-md">
                  <Image
                    src={venture.logoUrl}
                    alt={`${venture.title} official logo`}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center font-bold text-sky-400 text-base">
                  {venture.title.slice(0, 2).toUpperCase()}
                </div>
              )}
              <div>
                <span className="text-xs font-mono text-slate-400">
                  {venture.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {venture.title}
                </h3>
              </div>
            </div>

            <span
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${venture.colorTheme.badgeBg} ${venture.colorTheme.badgeText}`}
            >
              {venture.status}
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm font-medium text-sky-200/90 leading-snug">
            {venture.tagline}
          </p>

          {/* Description */}
          <p className="text-xs text-slate-400 leading-relaxed">
            {venture.description}
          </p>

          {/* Key Highlights */}
          <div className="flex flex-col gap-2 pt-1">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-300">
              Key Architecture & Strategy
            </span>
            <ul className="flex flex-col gap-1.5 text-xs text-slate-300">
              {venture.keyHighlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {venture.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono text-slate-400 bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Link Footer */}
        <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between">
          <Link
            href={`/ventures/${venture.slug}`}
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
          >
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {venture.publicUrl && (
            <a
              href={venture.publicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              <span>Visit Portal</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
