"use client";

import { ArrowUp } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative paper-texture py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 border-t border-slate-200/80">
      <div className="max-w-[1380px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        {/* Left: Copyright & Title */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 text-center sm:text-left">
          <span className="text-slate-900 font-semibold font-serif text-sm">
            © 2026 Sharmili Mandal
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="font-medium text-xs">B.Sc. Mathematics Undergraduate</span>
        </div>

        {/* Center: Subtle Mathematical Symbol & Editorial Motto */}
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg text-blue-700 select-none font-bold">
            ∞
          </span>
          <span className="italic font-sans text-xs text-slate-600 font-medium">
            &ldquo;Built with curiosity &amp; code.&rdquo;
          </span>
        </div>

        {/* Right: Quick Links & Back to Top */}
        <div className="flex items-center gap-5">
          <a
            href="#about"
            className="hover:text-blue-700 transition-colors uppercase tracking-wider text-[10px] font-bold"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-blue-700 transition-colors uppercase tracking-wider text-[10px] font-bold"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-blue-700 transition-colors uppercase tracking-wider text-[10px] font-bold"
          >
            Contact
          </a>
          <a
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors uppercase tracking-wider text-[10px] font-bold inline-flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <span className="text-[9px]">↗</span>
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 sm:p-1.5 border border-slate-200 hover:border-blue-600 hover:text-slate-900 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer paper-texture shadow-2xs interactive-tap hover:-translate-y-0.5"
          >
            <ArrowUp className="w-3.5 h-3.5 text-blue-700 animate-bounce" />
            <span className="text-[10px] uppercase font-bold text-slate-700">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
