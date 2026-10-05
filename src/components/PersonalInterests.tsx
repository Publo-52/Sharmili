"use client";

import { personalInterests } from "@/data/personal";

export default function PersonalInterests() {
  const interestThemes = [
    {
      topLine: "from-rose-500 via-pink-400 to-rose-600",
      tagColor: "text-rose-700",
    },
    {
      topLine: "from-violet-600 via-indigo-500 to-purple-600",
      tagColor: "text-violet-700",
    },
    {
      topLine: "from-emerald-500 via-teal-400 to-cyan-600",
      tagColor: "text-emerald-700",
    },
    {
      topLine: "from-amber-500 via-orange-400 to-yellow-600",
      tagColor: "text-amber-800",
    },
  ];

  return (
    <section
      id="beyond"
      className="relative py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1380px] w-full mx-auto"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between pb-1 mb-4 sm:mb-5">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg border border-rose-200/80 shadow-2xs">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-rose-700 font-bold">
            07
          </span>
          <span className="text-slate-300">/</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-900 font-bold">
            Beyond Mathematics
          </h2>
        </div>
        <span className="font-mono text-[10px] text-slate-500 hidden sm:inline bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded border border-slate-200/80">
          HUMAN PERSPECTIVES &amp; CURIOSITIES
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {personalInterests.map((interest, idx) => {
          const theme = interestThemes[idx % interestThemes.length];
          return (
            <div
              key={idx}
              className="p-3.5 sm:p-4.5 paper-texture border border-slate-200 hover:border-slate-300 rounded-xl space-y-2 transition-all shadow-2xs card-hover-lift interactive-tap relative overflow-hidden"
            >
              {/* Top colored accent line on hover */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${theme.topLine} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
              />

              <div>
                <span
                  className={`font-mono text-[9px] font-bold uppercase tracking-wider block ${theme.tagColor}`}
                >
                  {interest.tagline}
                </span>
                <h3 className="font-serif text-base sm:text-lg text-slate-900 font-semibold leading-snug">
                  {interest.title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {interest.description}
              </p>

              <div className="pt-1.5 border-t border-slate-100">
                <p className="text-xs italic text-slate-500 font-serif">
                  &ldquo;{interest.reflection}&rdquo;
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
