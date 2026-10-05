"use client";

import { useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { ProjectItem } from "@/data/projects";
import { CertificateItem } from "@/data/certificates";
import MathVisual from "./MathVisuals";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-950/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl paper-texture border border-gray-200 rounded-xl shadow-2xl p-5 sm:p-6 max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button with accessible tap target */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer interactive-tap"
        >
          <X className="w-5 h-5 sm:w-4 sm:h-4 text-slate-700" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 pb-2 pr-7">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-blue-700">
              PROJECT {project.number}
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-[11px] text-slate-500 uppercase font-medium">
              {project.category}
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-[11px] text-slate-500">{project.year}</span>
          </div>
          <h3
            id="modal-project-title"
            className="font-serif text-xl sm:text-2xl text-slate-900 font-semibold leading-snug"
          >
            {project.title}
          </h3>
        </div>

        {/* Visual Diagram */}
        <div className="my-4 border border-slate-200 rounded-lg overflow-hidden h-44 sm:h-52 bg-slate-50">
          <MathVisual type={project.visualType} />
        </div>

        {/* Formula Banner */}
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono text-xs text-center text-slate-900 space-y-0.5">
          <span className="text-[9px] text-slate-500 uppercase tracking-wider block font-bold">
            Mathematical Formulation
          </span>
          <div className="font-serif italic text-base text-blue-700 font-bold">
            {project.accentFormula}
          </div>
        </div>

        {/* Full Academic Writeup */}
        <div className="mt-4 space-y-2.5 font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold">
            Academic Scope &amp; Methodology
          </h4>
          <p>{project.fullDescription}</p>
        </div>

        {/* Concepts and Tags */}
        <div className="mt-4 pt-2 space-y-1.5">
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold block">
            Concepts &amp; Methodologies Applied:
          </span>
          <div className="flex flex-wrap gap-1">
            {project.toolsAndConcepts.map((tool, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono bg-slate-100 border border-slate-200 px-2 py-0.5 text-slate-800 rounded font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-4 pt-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span>Academic Assignment / Project Entry</span>
          <span className="text-blue-700 font-semibold">Editable in data/projects.ts</span>
        </div>
      </div>
    </div>
  );
}

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-cert-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg paper-texture border border-slate-200 rounded-xl shadow-2xl p-4 sm:p-6 max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close certificate lightbox"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer interactive-tap"
        >
          <X className="w-5 h-5 sm:w-4 sm:h-4 text-slate-700" />
        </button>

        {/* Certificate Mockup Frame */}
        <div className="p-6 sm:p-7 bg-slate-50/70 border-2 border-slate-200 rounded-lg shadow-2xs space-y-4 text-center relative overflow-hidden">
          <div className="relative space-y-1.5">
            <span className="font-mono text-[9px] tracking-[0.2em] text-slate-500 font-bold uppercase block">
              Certificate of Completion &amp; Study
            </span>
            <h3
              id="modal-cert-title"
              className="font-serif text-xl sm:text-2xl text-slate-900 font-semibold"
            >
              {certificate.title}
            </h3>
            <p className="font-mono text-xs text-blue-700 font-bold">
              Presented to Sharmili Mandal
            </p>
          </div>

          <div className="relative py-3 border-y border-slate-200 space-y-1.5">
            <p className="font-sans text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              {certificate.description}
            </p>
            <div className="font-serif italic text-xs text-slate-500 font-medium">
              {certificate.accentSymbol}
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-3 text-xs font-mono text-slate-600 pt-1 text-left">
            <div>
              <span className="text-slate-400 block text-[9px] uppercase font-bold">
                Issuing Organization:
              </span>
              <strong className="text-slate-900 font-semibold text-[11px]">
                {certificate.issuingOrganization}
              </strong>
            </div>

            <div>
              <span className="text-slate-400 block text-[9px] uppercase font-bold">
                Date Completed:
              </span>
              <span className="text-slate-900 font-semibold text-[11px]">
                {certificate.issueDate}
              </span>
            </div>

            {certificate.credentialId && (
              <div className="col-span-2 pt-2 flex items-center justify-between text-[11px]">
                <span>ID: {certificate.credentialId}</span>
                <span className="text-blue-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Coursework
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>Press ESC or click outside to dismiss</span>
          <button
            type="button"
            onClick={onClose}
            className="text-xs uppercase tracking-wider text-blue-700 font-bold hover:underline cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
