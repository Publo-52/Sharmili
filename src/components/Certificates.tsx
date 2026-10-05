"use client";

import { useState } from "react";
import { certificatesData, CertificateItem } from "@/data/certificates";
import { CertificateModal } from "./Modals";
import { Eye } from "lucide-react";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const getCategoryTheme = (category: string, idx: number) => {
    if (category.toLowerCase().includes("workshop")) {
      return {
        badge: "text-emerald-700 bg-emerald-50 border-emerald-200",
        topLine: "from-emerald-500 to-teal-500",
      };
    }
    if (category.toLowerCase().includes("seminar") || idx === 1) {
      return {
        badge: "text-amber-800 bg-amber-50 border-amber-200",
        topLine: "from-amber-500 to-orange-500",
      };
    }
    return {
      badge: "text-indigo-700 bg-indigo-50 border-indigo-200",
      topLine: "from-indigo-500 to-blue-500",
    };
  };

  return (
    <section
      id="certificates"
      className="relative py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1380px] w-full mx-auto"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between pb-1 mb-4 sm:mb-5">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg border border-emerald-200/80 shadow-2xs">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-700 font-bold">
            06
          </span>
          <span className="text-slate-300">/</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-900 font-bold">
            Certifications &amp; Workshops
          </h2>
        </div>
        <span className="font-mono text-[10px] text-slate-500 hidden sm:inline bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded border border-slate-200/80">
          ACADEMIC CREDENTIALS // CLICK TO EXAMINE
        </span>
      </div>

      {/* Certificate Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificatesData.map((cert, idx) => {
          const theme = getCategoryTheme(cert.category, idx);
          return (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer paper-texture border border-slate-200 hover:border-slate-300 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between space-y-3 shadow-2xs hover:shadow-md transition-all duration-200 card-hover-lift interactive-tap relative overflow-hidden"
            >
              {/* Top colored accent line on hover */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${theme.topLine} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
              />

              <div className="space-y-2.5">
                {/* Certificate Decorative Header */}
                <div className="flex items-center justify-between pb-0.5">
                  <span
                    className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-bold border ${theme.badge}`}
                  >
                    {cert.category}
                  </span>
                  <span className="font-serif italic text-xs text-slate-500 font-semibold">
                    {cert.accentSymbol}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-base sm:text-lg text-slate-900 font-semibold leading-snug group-hover:text-blue-700 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">
                    {cert.issuingOrganization}
                  </p>
                </div>

                <p className="text-xs text-slate-500 font-sans leading-relaxed line-clamp-2">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="font-medium text-[11px]">{cert.issueDate}</span>
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-blue-700 group-hover:text-blue-800 transition-colors">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Examine</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
