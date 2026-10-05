"use client";

import { useState } from "react";
import { projectsData, ProjectItem } from "@/data/projects";
import MathVisual from "./MathVisuals";
import { ProjectModal } from "./Modals";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const featured = projectsData.find((p) => p.featured) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => p.id !== featured.id);

  const projectAccents = [
    "from-amber-500 via-orange-400 to-amber-600",
    "from-violet-600 via-purple-500 to-indigo-600",
    "from-teal-500 via-emerald-400 to-cyan-600",
  ];

  return (
    <section
      id="projects"
      className="relative py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1380px] w-full mx-auto"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between pb-1 mb-4 sm:mb-5">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg border border-slate-200/90 shadow-2xs">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-700 font-bold">
            05
          </span>
          <span className="text-slate-300">/</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-900 font-bold">
            Selected Work
          </h2>
        </div>
        <span className="font-mono text-[10px] text-slate-500 hidden sm:inline bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded border border-slate-200/80">
          COURSEWORK &amp; ACADEMIC STUDIES // ASYMMETRICAL EDITORIAL
        </span>
      </div>

      <div className="space-y-4 sm:space-y-5">
        {/* Large Featured Project: Asymmetric Compact Horizontal Editorial Composition */}
        <div
          onClick={() => setSelectedProject(featured)}
          className="group cursor-pointer paper-texture border border-slate-200 hover:border-blue-400 rounded-xl p-4 sm:p-5 shadow-2xs hover:shadow-lg transition-all duration-200 card-hover-lift interactive-tap relative overflow-hidden"
        >
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 opacity-90" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Left: Project Details (7 cols) */}
            <div className="lg:col-span-7 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-blue-700 font-bold group-hover:translate-x-0.5 transition-transform bg-blue-50/80 border border-blue-200/80 px-2 py-0.5 rounded">
                  FEATURED // {featured.number}
                </span>
                <span className="text-slate-300">•</span>
                <span className="font-mono text-xs uppercase text-slate-600 font-medium">
                  {featured.category}
                </span>
                <span className="text-slate-300">•</span>
                <span className="font-mono text-xs text-slate-500">
                  {featured.year}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-lg sm:text-xl text-slate-900 font-semibold leading-snug group-hover:text-blue-700 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-sans">
                  {featured.shortDescription}
                </p>
              </div>

              {/* Formula & Concepts Pill */}
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                <span className="font-mono text-xs text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded font-bold">
                  {featured.equationVisual}
                </span>
                {featured.toolsAndConcepts.slice(0, 3).map((concept, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[11px] text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-medium"
                  >
                    {concept}
                  </span>
                ))}
              </div>

              <div className="pt-0.5">
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-blue-700 link-editorial">
                  <span>{featured.linkText || "View Project Details →"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>

            {/* Right: Bespoke Mathematical Visual Diagram (5 cols) */}
            <div className="lg:col-span-5 h-40 sm:h-44 border border-slate-200 rounded-lg overflow-hidden bg-slate-50 group-hover:scale-[1.01] transition-transform duration-200">
              <MathVisual type={featured.visualType} />
            </div>
          </div>
        </div>

        {/* Secondary Projects: Compact Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {secondaryProjects.map((project, idx) => {
            const accent = projectAccents[idx % projectAccents.length];
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer paper-texture border border-slate-200 hover:border-slate-300 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between space-y-3 shadow-2xs hover:shadow-md transition-all duration-200 card-hover-lift interactive-tap relative overflow-hidden"
              >
                {/* Top colored accent line on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                />

                <div className="space-y-2.5">
                  {/* Visual Preview */}
                  <div className="h-28 sm:h-32 border border-slate-200 rounded-lg overflow-hidden bg-slate-50 group-hover:opacity-95 transition-opacity">
                    <MathVisual type={project.visualType} />
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span className="text-blue-700 font-bold group-hover:translate-x-0.5 transition-transform inline-block">
                      {project.number}
                    </span>
                    <span className="font-medium text-[11px] text-slate-600">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {project.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-base sm:text-lg text-slate-900 font-semibold leading-snug group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1 font-sans line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Footer row */}
                <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 font-medium">
                    {project.equationVisual}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-bold text-blue-700 group-hover:text-blue-800 transition-colors">
                    <span>View</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
