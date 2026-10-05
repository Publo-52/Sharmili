"use client";

import { profileData } from "@/data/profile";

export default function About() {
  const mindsetColors = [
    "text-emerald-700 bg-emerald-50 border-emerald-200/90",
    "text-sky-700 bg-sky-50 border-sky-200/90",
    "text-indigo-700 bg-indigo-50 border-indigo-200/90",
  ];

  return (
    <section
      id="about"
      className="relative py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1380px] w-full mx-auto"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between pb-1 mb-4 sm:mb-5">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg border border-amber-200/80 shadow-2xs">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-700 font-bold">
            01
          </span>
          <span className="text-slate-300">/</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-900 font-bold">
            About Me
          </h2>
        </div>
        <span className="font-mono text-[10px] text-slate-500 hidden sm:inline bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded border border-slate-200/80">
          AXIOMATIC PERSPECTIVE // MATHEMATICAL RIGOR
        </span>
      </div>

      {/* Two-Column Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
        {/* Left Column: Editorial Large Typography + Marginalia (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="p-4 sm:p-5 paper-texture rounded-xl border border-slate-200/90 shadow-2xs space-y-2 card-hover-lift relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 via-orange-400 to-amber-300" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-amber-700 font-bold block">
              Guiding Principle
            </span>
            <blockquote className="font-serif text-lg sm:text-xl text-slate-900 font-normal leading-snug">
              &ldquo;{profileData.aboutLead}&rdquo;
            </blockquote>
          </div>

          {/* Academic Margin Note */}
          <div className="p-4 paper-texture border border-slate-200/90 rounded-xl shadow-2xs space-y-1.5 border-l-4 border-l-amber-500 card-hover-lift bg-amber-50/20">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="font-bold text-amber-800 bg-amber-100/80 px-1.5 py-0.5 rounded border border-amber-300/70">
                LEMMA 1.1
              </span>
              <span className="text-blue-700 font-semibold">ℝ³ → Understanding</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Every complex mathematical truth is built from simpler axioms. When an analytical problem feels intractable, the key is not force, but finding the right angle of symmetry and continuous logical rigor.
            </p>
          </div>
        </div>

        {/* Right Column: Personal Narrative + Academic Metadata (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {/* Main Narrative Paragraphs */}
          <div className="p-4 sm:p-5 paper-texture rounded-xl border border-slate-200/90 shadow-2xs space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans card-hover-lift">
            {profileData.aboutParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="first-letter:font-serif first-letter:text-xl first-letter:font-bold first-letter:text-blue-900"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Editorial Structured Metadata Box */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 paper-texture p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-2xs card-hover-lift">
            {/* Currently */}
            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-bold block">
                Currently
              </span>
              <p className="text-xs font-semibold text-slate-900 leading-snug">
                {profileData.currently}
              </p>
            </div>

            {/* Focus */}
            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-bold block">
                Focus Areas
              </span>
              <p className="text-xs font-medium text-slate-700 leading-snug">
                {profileData.focus.join(" • ")}
              </p>
            </div>

            {/* Mindset */}
            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-bold block">
                Mindset
              </span>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {profileData.mindset.map((item, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center text-[10px] font-mono border px-2 py-0.5 rounded font-medium ${
                      mindsetColors[idx % mindsetColors.length]
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
