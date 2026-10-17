"use client";

import React from "react";
import dynamic from "next/dynamic";

// Client-only dynamic loader for Three.js WebGL scene to decouple it from initial SSR
const ThreeHeroScene = dynamic(() => import("@/components/ThreeHeroScene"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 opacity-60"
    />
  ),
});

export default function ThreeHeroSceneClient() {
  return <ThreeHeroScene />;
}
