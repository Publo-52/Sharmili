"use client";

import { educationData } from "@/data/education";
import { Calendar, MapPin } from "lucide-react";

export default function Education() {
  const markerColors = [
    {
      marker: "text-blue-700 border-blue-300 bg-blue-50/80 group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700",
      status: "text-blue-700 bg-blue-50 border-blue-200/90",
      accent: "from-blue-600 to-indigo-600",
    },
    {
      marker: "text-amber-800 border-amber-300 bg-amber-50/80 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600",
      status: "text-amber-800 bg-amber-50 border-amber-200/90",
      accent: "from-amber-500 to-orange-500",
    },
    {
      marker: "text-teal-800 border-teal-300 bg-teal-50/80 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600",
      status: "text-teal-800 bg-teal-50 border-teal-200/90",
      accent: "from-teal-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1380px] w-full mx-auto"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between pb-1 mb-4 sm:mb-5">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 paper-texture rounded-lg border border-slate-200/90 shadow-2xs">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-700 font-bold">
            02
          </span>
          <span className="text-slate-300">/</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-900 font-bold">
            Academic Journey
          </h2>
        </div>
        <span className="font-mono text-[10px] text-slate-500 hidden sm:inline paper-texture px-2.5 py-1 rounded border border-slate-200/80">
          CONTINUOUS CURRICULUM // t ∈ [t₀, tₙ]
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
        {/* Left Column: Context / Concept Note (4 cols) */}
        <div className="lg:col-span-4 p-4 sm:p-5 paper-texture rounded-xl border border-slate-200/90 shadow-2xs space-y-3.5 card-hover-lift relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-400" />
          <h3 className="font-serif text-lg sm:text-xl text-slate-900 font-semibold leading-tight">
            Foundations of mathematical maturity.
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            Undergraduate mathematics is an evolution in how one reasons, formulates axiomatic definitions, and demands irrefutable proof.
          </p>

          <div className="p-3 bg-slate-50/80 border border-slate-200 rounded-lg text-xs font-mono text-slate-600 space-y-1">
            <div className="flex items-center justify-between text-blue-700 font-bold">
              <span>TIMELINE PARAMETER</span>
              <span className="text-amber-700">t ∈ ℝ</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-normal">
              Each term builds progressively on topological, algebraic, and analytical foundations.
            </p>
          </div>
        </div>

        {/* Right Column: Elegant Compact Timeline (8 cols) */}
        <div className="lg:col-span-8 relative">
          {/* Vertical axis line */}
          <div className="absolute top-2 bottom-4 left-4 sm:left-5 w-[1px] bg-slate-300" />

          <div className="space-y-4">
            {educationData.map((item, idx) => {
              const theme = markerColors[idx % markerColors.length];
              return (
                <div key={idx} className="relative pl-8 sm:pl-11 group">
                  {/* Mathematical Timeline Marker: t₀, t₁, t₂ */}
                  <div
                    className={`absolute left-4 sm:left-5 top-1 w-6 h-6 -translate-x-1/2 rounded-full border-2 flex items-center justify-center font-mono text-[9px] font-bold transition-all duration-200 shadow-2xs ${theme.marker}`}
                  >
                    {item.mathMarker}
                  </div>

                  <div className="space-y-2.5 paper-texture card-hover-lift p-3.5 sm:p-4 border border-slate-200/90 rounded-xl shadow-2xs relative overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${theme.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                    />

                    {/* Period & Status Strip */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-0.5">
                      <span className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold">
                        {item.period}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 font-mono text-[10px] px-2 py-0.5 rounded border font-semibold ${theme.status}`}
                      >
                        <span>Status:</span>
                        <span>{item.status}</span>
                      </span>
                    </div>

                    {/* Degree & Field */}
                    <div>
                      <h4 className="font-serif text-base sm:text-lg text-slate-900 font-semibold leading-tight">
                        {item.degree}
                      </h4>
                      <p className="text-xs font-medium text-slate-600 mt-0.5">
                        {item.field}
                      </p>
                    </div>

                    {/* Institution & Expected Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-mono text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-slate-800 font-medium">
                          {item.institution}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.expectedGraduation}</span>
                      </div>
                    </div>

                    {/* Key Coursework Tags */}
                    {item.keyCourses && (
                      <div className="pt-1.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                          Core Subjects:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {item.keyCourses.map((course, cIdx) => (
                            <span
                              key={cIdx}
                              className="font-mono text-[10px] bg-white border border-slate-200/90 px-2 py-0.5 text-slate-700 rounded font-medium shadow-2xs"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
