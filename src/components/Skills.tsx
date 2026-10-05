"use client";

import { skillsData } from "@/data/skills";

export default function Skills() {
  const cardThemes = [
    {
      topLine: "from-blue-600 via-indigo-600 to-sky-500",
      tagColor: "text-blue-700",
      badgeColor: "text-blue-800 bg-blue-50 border-blue-200/90",
      focusBg: "text-blue-900/90 bg-blue-50/70 border-blue-100",
      levelBadge: "text-blue-700 bg-blue-50/90 border-blue-200/80",
      dot: "bg-blue-600",
    },
    {
      topLine: "from-amber-500 via-emerald-500 to-sky-500",
      tagColor: "text-amber-800",
      badgeColor: "text-amber-800 bg-amber-50 border-amber-200/90",
      focusBg: "text-amber-900/90 bg-amber-50/60 border-amber-100",
      levelBadge: "text-emerald-700 bg-emerald-50/90 border-emerald-200/80",
      dot: "bg-emerald-600",
    },
    {
      topLine: "from-violet-600 via-indigo-500 to-emerald-500",
      tagColor: "text-violet-700",
      badgeColor: "text-violet-800 bg-violet-50 border-violet-200/90",
      focusBg: "text-violet-900/90 bg-violet-50/60 border-violet-100",
      levelBadge: "text-violet-700 bg-violet-50/90 border-violet-200/80",
      dot: "bg-violet-600",
    },
  ];

  const getPillStyle = (topic: string) => {
    if (topic === "HTML5") return "text-orange-700 bg-orange-50 border-orange-200 font-semibold";
    if (topic === "CSS3") return "text-sky-700 bg-sky-50 border-sky-200 font-semibold";
    if (topic.includes("JavaScript")) return "text-amber-800 bg-amber-50 border-amber-200 font-semibold";
    if (topic.includes("LaTeX")) return "text-violet-700 bg-violet-50 border-violet-200 font-semibold";
    return "text-slate-700 bg-white/95 border-slate-200/90 font-medium";
  };

  return (
    <section
      id="skills"
      className="relative py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1380px] w-full mx-auto"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between pb-1 mb-4">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg border border-slate-200/90 shadow-2xs">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-700 font-bold">
            04
          </span>
          <span className="text-slate-300">/</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-900 font-bold">
            Capabilities &amp; Focus
          </h2>
        </div>
        <span className="font-mono text-[10px] text-slate-500 hidden sm:inline bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded border border-slate-200/80">
          CORE COMPETENCIES // 3 PILLARS
        </span>
      </div>

      {/* Compact 3-Pillar Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {skillsData.map((skill, idx) => {
          const theme = cardThemes[idx % cardThemes.length];
          return (
            <div
              key={skill.id}
              className="paper-texture hover:border-slate-300 border border-slate-200/90 rounded-xl transition-all duration-200 flex flex-col justify-between p-4 sm:p-5 shadow-2xs group card-hover-lift relative overflow-hidden"
            >
              {/* Top gradient highlight on hover */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${theme.topLine} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
              />

              <div className="space-y-2.5">
                {/* Card Meta: Tag and Math/Code Symbol */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-mono text-[9px] uppercase tracking-wider font-bold ${theme.tagColor}`}
                  >
                    {skill.categoryTag}
                  </span>
                  <span
                    className={`font-mono text-[11px] px-2 py-0.5 rounded border font-bold shadow-2xs ${theme.badgeColor}`}
                  >
                    {skill.mathSymbol}
                  </span>
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                    {skill.description}
                  </p>
                </div>

                {/* Compact Key Skills / Tags with customized colors */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {skill.keyTopics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className={`inline-flex items-center text-[10.5px] font-sans border rounded px-2 py-0.5 shadow-2xs ${getPillStyle(
                        topic
                      )}`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Compact Level Indicator */}
              <div className="pt-2.5 mt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                  Proficiency:
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-0.5 rounded-full font-bold border ${theme.levelBadge}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                  {skill.proficiencyLevel}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
