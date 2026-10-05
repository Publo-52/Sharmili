"use client";

import { useState } from "react";
import { interestAreas } from "@/data/interests";

export default function Interests() {
  const [activeId, setActiveId] = useState<string>(interestAreas[0].id);

  const interestPillColors: Record<string, string> = {
    "01": "text-blue-700 bg-blue-50 border-blue-200/80",
    "02": "text-violet-700 bg-violet-50 border-violet-200/80",
    "03": "text-amber-800 bg-amber-50 border-amber-200/80",
    "04": "text-teal-700 bg-teal-50 border-teal-200/80",
    "05": "text-indigo-700 bg-indigo-50 border-indigo-200/80",
    "06": "text-rose-700 bg-rose-50 border-rose-200/80",
  };

  return (
    <section
      id="interests"
      className="relative py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1380px] w-full mx-auto"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between pb-1 mb-4 sm:mb-5">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg border border-violet-200/80 shadow-2xs">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-violet-700 font-bold">
            03
          </span>
          <span className="text-slate-300">/</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-900 font-bold">
            What Fascinates Me
          </h2>
        </div>
        <span className="font-mono text-[10px] text-slate-500 hidden sm:inline bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded border border-slate-200/80">
          AREAS OF INQUIRY &amp; CURIOSITY
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
        {/* Left Column: Interactive Editorial List (7 cols on desktop, full width on mobile) */}
        <div className="lg:col-span-7 space-y-2.5">
          {interestAreas.map((area) => {
            const isSelected = activeId === area.id;
            return (
              <div
                key={area.id}
                onMouseEnter={() => setActiveId(area.id)}
                onClick={() => setActiveId(area.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveId(area.id);
                  }
                }}
                className={`py-3 sm:py-3 text-left cursor-pointer transition-all duration-200 group flex flex-col px-3.5 sm:px-4 rounded-xl border card-hover-lift interactive-tap ${
                  isSelected
                    ? "paper-texture border-violet-600 shadow-md ring-1 ring-violet-500/25 bg-violet-50/20"
                    : "paper-texture border-slate-200/90 shadow-2xs hover:border-slate-400"
                }`}
              >
                {/* Main clickable row */}
                <div className="flex items-start justify-between gap-3 w-full">
                  <div className="flex items-baseline gap-3 sm:gap-4">
                    <span
                      className={`font-mono text-xs transition-colors font-bold ${
                        isSelected
                          ? "text-violet-700"
                          : "text-slate-400 group-hover:text-slate-800"
                      }`}
                    >
                      {area.number}
                    </span>

                    <div>
                      <h3
                        className={`font-serif text-base sm:text-lg transition-colors ${
                          isSelected
                            ? "text-slate-900 font-semibold"
                            : "text-slate-700 group-hover:text-slate-900 font-medium"
                        }`}
                      >
                        {area.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-sans mt-0.5 line-clamp-1">
                        {area.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded border hidden sm:inline-block font-medium ${
                        interestPillColors[area.number] ||
                        "text-slate-600 bg-slate-100 border-slate-200"
                      }`}
                    >
                      {area.mathNotation}
                    </span>
                    <span
                      className={`font-mono text-xs transition-transform duration-200 ${
                        isSelected
                          ? "text-violet-700 translate-x-1 font-bold"
                          : "text-slate-400 group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </div>

                {/* Mobile Accordion Drawer: Expands right beneath the tapped item on phones and tablets */}
                {isSelected && (
                  <div className="lg:hidden mt-3 pt-3 border-t border-violet-200/70 space-y-2.5 animate-fade-in w-full">
                    <div className="p-3 bg-violet-50/60 border border-violet-200/80 rounded-lg text-center space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 block font-semibold">
                        Representative Formulation
                      </span>
                      <div className="font-serif italic text-base text-slate-900 py-0.5 font-medium">
                        {area.equationOrConcept}
                      </div>
                      <span className="font-mono text-[10px] text-violet-700 font-semibold">
                        {area.mathNotation}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-sans px-0.5">
                      {area.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Dynamic Concept Reveal Card (Desktop only, 5 cols) */}
        <div className="hidden lg:block lg:col-span-5 sticky top-20">
          {(() => {
            const current =
              interestAreas.find((a) => a.id === activeId) || interestAreas[0];
            return (
              <div className="p-4 sm:p-5 paper-texture border border-slate-200/90 rounded-xl shadow-md space-y-3.5 card-hover-lift relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500" />

                {/* Header of Preview */}
                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-violet-700 font-bold">
                      {current.number}
                    </span>
                    <span className="font-mono text-[11px] text-slate-400">
                      {"// CONCEPT FORMULATION"}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-violet-700 bg-violet-50 border border-violet-200 px-2 py-0.5 rounded font-bold">
                    Active
                  </span>
                </div>

                {/* Equation / Concept Callout */}
                <div className="p-3 bg-violet-50/40 border border-violet-100 rounded-lg text-center space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 block font-semibold">
                    Representative Formulation
                  </span>
                  <div className="font-serif italic text-base sm:text-lg text-slate-900 py-0.5 font-medium">
                    {current.equationOrConcept}
                  </div>
                  <span className="font-mono text-[10px] text-violet-700 font-semibold">
                    {current.mathNotation}
                  </span>
                </div>

                {/* Narrative Explanation */}
                <div className="space-y-1">
                  <h4 className="font-serif text-base text-slate-900 font-semibold">
                    {current.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {current.description}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
