"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Hero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col justify-between pt-16 md:pt-20 pb-4 md:pb-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1380px] w-full mx-auto overflow-hidden"
    >
      {/* Top Editorial Meta Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 sm:px-4 paper-texture rounded-xl border border-slate-200/90 shadow-2xs mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-700 font-semibold">
            {profileData.heroPills.join(" • ")}
          </span>
        </div>

        <div className="flex items-center gap-2.5 font-mono text-[10px] text-slate-500">
          <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-bold">GRID: 2mm CARTESIAN</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">COORD: [0, 0]</span>
          <span>|</span>
          <span className="text-slate-900 font-bold">B.Sc. MATHEMATICS</span>
        </div>
      </div>

      {/* Main Hero Composition: Compact Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch py-4 lg:py-6">
        {/* Left Column: Typography & Statement (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4 p-6 sm:p-8 paper-texture rounded-2xl border border-slate-200/90 shadow-2xs">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200 font-mono text-[10px] uppercase tracking-wider text-blue-700 font-semibold">
              <span>{profileData.role}</span>
              <span>•</span>
              <span>Undergraduate Scholar</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 font-normal leading-[1.1]">
              {profileData.name}
            </h1>
          </div>

          {/* Primary Statement */}
          <p className="font-serif text-xl sm:text-2xl text-slate-800 leading-snug italic max-w-xl">
            &ldquo;{profileData.heroStatement}&rdquo;
          </p>

          {/* Secondary Human Introduction */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg font-sans">
            {profileData.heroIntroduction}
          </p>

          {/* Call to Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white text-xs uppercase tracking-wider font-semibold transition-all duration-200 rounded-lg shadow-sm hover:shadow-md hover:shadow-blue-600/25 hover:-translate-y-0.5 cursor-pointer group interactive-tap w-full sm:w-auto"
            >
              <span>Explore My Journey</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3 sm:py-2.5 paper-texture border border-slate-300 text-slate-800 text-xs uppercase tracking-wider font-semibold hover:border-blue-600 hover:text-blue-700 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 rounded-lg cursor-pointer interactive-tap w-full sm:w-auto"
            >
              <span>View Selected Work</span>
            </button>
          </div>

          {/* Academic contact badge */}
          <div className="pt-1 flex flex-wrap items-center gap-2.5 text-[11px] font-mono text-slate-500">
            <span className="text-slate-400">Direct:</span>
            <a
              href={`mailto:${profileData.contactEmail}`}
              className="text-blue-700 font-semibold hover:underline break-all"
            >
              {profileData.contactEmail}
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 transition-colors"
            >
              <span>LinkedIn</span>
              <span className="text-[9px]">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Handcrafted Circular Academic Portrait & Mathematical Composition (5 cols) */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center py-4 sm:py-6">
          <div className="relative flex items-center justify-center">
            {/* Ambient Radial Gradient Glow */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-tr from-blue-600/15 via-sky-400/10 to-amber-500/15 blur-2xl pointer-events-none animate-pulse-glow" />

            {/* Slow Rotating Mathematical Coordinate Orbit Ring */}
            <div 
              aria-hidden="true" 
              className="absolute -inset-2.5 sm:-inset-4 rounded-full border-2 border-dashed border-blue-500/35 animate-spin-slow pointer-events-none" 
            />

            {/* Inner Precision Ring */}
            <div 
              aria-hidden="true" 
              className="absolute -inset-1 sm:-inset-1.5 rounded-full border border-blue-600/30 pointer-events-none" 
            />

            {/* Circular Portrait Image Container */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl ring-1 ring-slate-200/80 bg-slate-100 group">
              <Image
                src={profileData.profileImage}
                alt="Sharmili Mandal - Mathematics Student"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, 256px"
              />

              {/* Subtle curved vignette overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-14 sm:h-16 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end justify-center pb-2 sm:pb-2.5">
                <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-white font-bold bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/25">
                  B.Sc. Mathematics
                </span>
              </div>
            </div>

            {/* Parallax Floating Mathematical Badge 1: Top Right */}
            <div
              style={{
                transform: `translate3d(${mouseOffset.x * 12}px, ${
                  mouseOffset.y * 12
                }px, 0)`,
                transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="absolute -top-2 right-0 sm:-top-3 sm:-right-4 paper-texture border border-blue-200/90 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-md flex items-center gap-1.5 animate-float cursor-default origin-top-right scale-90 sm:scale-100"
            >
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="font-serif italic text-[11px] sm:text-xs font-bold text-blue-900">
                e^{"{iπ}"} + 1 = 0
              </span>
            </div>

            {/* Parallax Floating Mathematical Badge 2: Bottom Left */}
            <div
              style={{
                transform: `translate3d(${-mouseOffset.x * 14}px, ${
                  -mouseOffset.y * 14
                }px, 0)`,
                transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="absolute -bottom-2 left-0 sm:-bottom-3 sm:-left-4 paper-texture border border-amber-300/90 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-md flex items-center gap-1.5 animate-float-delayed cursor-default origin-bottom-left scale-90 sm:scale-100"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="font-mono text-[9px] sm:text-[10px] text-amber-800 font-bold">
                ∫₀^∞ e⁻ˣ dx = 1
              </span>
            </div>
          </div>

          {/* Under-portrait Academic Tag */}
          <div className="mt-4 paper-texture px-3 sm:px-3.5 py-1 rounded-full border border-slate-200 shadow-2xs flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="font-serif font-semibold text-xs text-slate-800">Sharmili Mandal</span>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-[9px] sm:text-[10px] text-blue-700 font-bold">Q.E.D. Verified</span>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="pt-6 flex items-center justify-between text-slate-500">
        <button
          type="button"
          onClick={() => scrollToSection("about")}
          className="group inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] hover:text-slate-900 transition-colors cursor-pointer"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform text-blue-700" />
        </button>

        <span className="font-mono text-[10px] text-slate-400 hidden sm:inline">
          SECTION 00 // ACADEMIC PRELUDE
        </span>
      </div>
    </section>
  );
}
