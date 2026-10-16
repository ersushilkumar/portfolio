"use client";

import React from "react";
import { Printer } from "lucide-react";

export default function ResumePrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-all shadow-sm cursor-pointer"
      title="Print or Save Resume as clean PDF"
    >
      <Printer className="w-4 h-4 text-sky-400" />
      <span>Print / Save as PDF</span>
    </button>
  );
}
