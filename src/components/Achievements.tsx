"use client";

import { achievementsData } from "@/data/achievements";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1380px] mx-auto"
    >
      {/* Section Header */}
      <div className="flex items-baseline justify-between pb-3.5 mb-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
            06
          </span>
          <span className="text-slate-300">/</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-[#0F172A] font-bold">
            Milestones &amp; Achievements
          </h2>
        </div>
        <span className="font-mono text-[11px] text-slate-500 hidden sm:inline">
          ACADEMIC RECOGNITION // VERIFIABLE ENTRIES
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Context (4 cols) */}
        <div className="lg:col-span-4 space-y-5">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#0F172A] font-medium leading-tight">
            Academic milestones and scholarly engagement.
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-sans">
            A chronological record of competitions, departmental seminars, workshops, and milestones completed during undergraduate studies.
          </p>
          <div className="p-4 bg-white border border-slate-200 rounded-lg text-xs font-mono text-slate-600 shadow-xs">
            <span className="text-[#1E3A8A] block font-bold mb-1">
              NOTE FOR REVIEWERS
            </span>
            Entries are maintained with full academic integrity and updated each term.
          </div>
        </div>

        {/* Right Column: Vertical List / Timeline (8 cols) */}
        <div className="lg:col-span-8 space-y-3">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="py-6 sm:py-7 group hover:bg-white transition-all rounded-lg px-4 -mx-4 hover:shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#1E3A8A] bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded">
                    {item.year}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                    {item.category}
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-500 font-medium">
                  {item.organization}
                </span>
              </div>

              <div className="mt-3 space-y-1.5">
                <h4 className="font-serif text-xl text-[#0F172A] font-semibold group-hover:text-[#1E3A8A] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
