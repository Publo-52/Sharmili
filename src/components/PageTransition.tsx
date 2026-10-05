"use client";

import { useEffect, useState } from "react";

export default function PageTransition() {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<"math" | "name" | "fadeout" | "done">("math");

  useEffect(() => {
    setMounted(true);
    try {
      if (sessionStorage.getItem("mili_portfolio_intro")) {
        setPhase("done");
        return;
      }
    } catch {
      // sessionStorage unavailable
    }

    const t1 = setTimeout(() => {
      setPhase("name");
    }, 600);

    const t2 = setTimeout(() => {
      setPhase("fadeout");
    }, 1300);

    const t3 = setTimeout(() => {
      setPhase("done");
      try {
        sessionStorage.setItem("mili_portfolio_intro", "true");
      } catch {}
    }, 1700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!mounted || phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#F8FAFC] transition-opacity duration-500 ease-out ${
        phase === "fadeout" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Mathematical grid background in loader */}
      <div className="absolute inset-0 math-grid-bg opacity-40 pointer-events-none" />

      <div className="relative text-center select-none px-6">
        <div className="h-16 flex items-center justify-center">
          {phase === "math" && (
            <div className="animate-fade-in font-serif text-3xl md:text-4xl text-[#0F172A] tracking-wide flex items-center gap-3">
              <span className="font-serif italic">∑</span>
              <span className="text-sm font-mono text-[#78716C]">→</span>
              <span className="font-serif text-4xl">∞</span>
            </div>
          )}

          {phase === "name" && (
            <div className="animate-fade-in text-center">
              <h1 className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-medium text-[#18181B] uppercase">
                Sharmili Mandal
              </h1>
              <p className="font-mono text-[11px] tracking-[0.25em] text-[#78716C] mt-1.5 uppercase">
                Mathematics • Undergraduate
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-center">
          <div className="w-12 h-[1px] bg-[#18181B]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#18181B] animate-[loading-bar_1.2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}
