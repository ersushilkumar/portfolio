"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { ShieldCheck, Building2, TrendingUp } from "lucide-react";

export default function Hero3DCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [sheenPosition, setSheenPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-10 to +10 deg)
    const rotX = ((y - centerY) / centerY) * -8;
    const rotY = ((x - centerX) / centerX) * 8;

    setRotateX(rotX);
    setRotateY(rotY);

    // Sheen coordinates in percentage
    setSheenPosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className="relative w-full max-w-md mx-auto py-4"
      style={{ perspective: "1000px" }}
    >
      {/* 3D Tilt Wrapper */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
          transition: isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
        className="relative group rounded-3xl p-1.5 bg-gradient-to-b from-sky-500/30 via-slate-800/40 to-indigo-500/20 shadow-2xl shadow-sky-950/40 border border-slate-700/50 backdrop-blur-md"
      >
        {/* Dynamic glossy sheen overlay */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 z-30"
          style={{
            opacity: isHovered ? 0.35 : 0,
            background: `radial-gradient(circle at ${sheenPosition.x}% ${sheenPosition.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
          }}
        />

        {/* Inner Card Container */}
        <div className="relative rounded-[22px] overflow-hidden bg-slate-950">
          {/* Authentic Portrait Image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-900">
            <Image
              src={siteConfig.images.heroNavy}
              alt="Sushil Kumar — Founder & Platform Builder in navy blazer and white shirt"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Elegant vignette and gradient backdrop for text overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          </div>

          {/* Floating Badges with Z-Depth */}
          {/* Badge 1: Top Left Verified Identity */}
          <div
            className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-full shadow-lg"
            style={{ transform: "translateZ(30px)" }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-medium text-slate-200">
              Founder & Builder
            </span>
          </div>

          {/* Badge 2: Top Right Verified Seal */}
          <div
            className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 px-2.5 py-1 rounded-full text-[11px] font-medium shadow-lg"
            style={{ transform: "translateZ(30px)" }}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified</span>
          </div>

          {/* Bottom Overlay Info with Z-Depth */}
          <div
            className="absolute bottom-0 left-0 right-0 p-5 z-20 flex flex-col gap-2.5"
            style={{ transform: "translateZ(40px)" }}
          >
            <div>
              <p className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                {siteConfig.name}
              </p>
              <p className="text-xs text-sky-300 font-medium tracking-wide">
                Hyperlocal Commerce • FinTech Risk • Empirical Research
              </p>
            </div>

            {/* Quick micro-badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 bg-slate-900/90 border border-slate-700 px-2.5 py-1 rounded-lg">
                <Building2 className="w-3 h-3 text-rose-400" />
                DealChowk
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 bg-slate-900/90 border border-slate-700 px-2.5 py-1 rounded-lg">
                <TrendingUp className="w-3 h-3 text-emerald-400" />
                Fraud Risk Governance
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
