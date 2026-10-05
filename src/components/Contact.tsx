"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import { Copy, Check } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1380px] w-full mx-auto"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between pb-1 mb-4 sm:mb-5">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg border border-slate-200/90 shadow-2xs">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-700 font-bold">
            08
          </span>
          <span className="text-slate-300">/</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-900 font-bold">
            Contact
          </h2>
        </div>
        <span className="font-mono text-[10px] text-slate-500 hidden sm:inline bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded border border-slate-200/80">
          OPEN FOR INQUIRIES &amp; COLLABORATION
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
        {/* Left Column: Editorial Statement & Direct Links (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-5 sm:p-6 paper-texture rounded-xl border border-slate-200/90 shadow-2xs space-y-2.5 card-hover-lift">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-semibold leading-tight">
              Let&rsquo;s Connect.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              Whether it’s about mathematics, learning, collaboration, or simply exchanging ideas, I’d be happy to connect.
            </p>
          </div>

          {/* Email Card with Quick Copy */}
          <div className="p-4 sm:p-5 paper-texture border border-slate-200 rounded-lg shadow-2xs space-y-3 card-hover-lift">
            <div className="flex items-center justify-between pb-1">
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Primary Academic Email
              </span>
              <span className="font-mono text-[9px] text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-bold">
                Verified
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <a
                href={`mailto:${profileData.contactEmail}`}
                className="font-serif text-base xs:text-lg sm:text-xl font-medium text-slate-900 hover:text-blue-700 transition-colors break-all"
              >
                {profileData.contactEmail}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2 sm:py-1.5 min-h-[38px] sm:min-h-0 text-xs font-mono text-slate-700 bg-slate-50 border border-slate-200 hover:border-blue-600 rounded-md transition-all cursor-pointer interactive-tap shadow-2xs"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-blue-700" />
                    <span className="text-blue-700 font-bold text-[11px]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-[11px] font-medium">Copy</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-[11px] font-mono text-slate-500">
              Feel free to reach out regarding academic opportunities or study groups.
            </p>
          </div>

          {/* Social / Academic Channels */}
          <div className="space-y-2 pt-1">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold block">
              Scholarly Profiles &amp; Networks
            </span>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 sm:py-2 min-h-[42px] sm:min-h-0 paper-texture border border-slate-200 hover:border-blue-400 rounded-lg text-xs font-mono text-slate-800 transition-all shadow-2xs interactive-tap card-hover-lift"
              >
                <svg className="w-3.5 h-3.5 fill-blue-700" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span className="font-medium">LinkedIn Profile</span>
                <span className="text-slate-400 text-[10px]">↗</span>
              </a>

              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 sm:py-2 min-h-[42px] sm:min-h-0 paper-texture border border-slate-200 hover:border-blue-400 rounded-lg text-xs font-mono text-slate-800 transition-all shadow-2xs interactive-tap card-hover-lift"
              >
                <svg className="w-3.5 h-3.5 fill-slate-900" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span className="font-medium">GitHub Repositories</span>
                <span className="text-slate-400 text-[10px]">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form with Mathematical Transform CTA (6 cols) */}
        <div className="lg:col-span-6 paper-texture border border-slate-200 rounded-xl p-4 sm:p-5 shadow-2xs card-hover-lift">
          <div className="pb-2 mb-3">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold block">
              Direct Message
            </span>
            <h4 className="font-serif text-lg text-slate-900 font-semibold">
              Send an Academic Inquiry
            </h4>
          </div>

          {formSubmitted ? (
            <div className="p-6 text-center space-y-2 bg-blue-50/70 border border-blue-200 rounded-lg animate-fade-in">
              <div className="w-8 h-8 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                <Check className="w-4 h-4" />
              </div>
              <h5 className="font-serif text-lg text-slate-900 font-semibold">
                Message Received
              </h5>
              <p className="text-xs text-slate-600 font-sans">
                Thank you for reaching out! Sharmili will reply to your message shortly.
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="mt-2 text-xs font-mono text-blue-700 font-bold underline underline-offset-4 cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-[9px] uppercase tracking-wider text-slate-600 font-semibold"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="Your Name (e.g. Dr. A. Sharma / Colleague)"
                    className="w-full px-3 py-2 sm:py-1.5 min-h-[42px] sm:min-h-0 text-xs bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-blue-700 text-slate-900 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-[9px] uppercase tracking-wider text-slate-600 font-semibold"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="colleague@institution.edu"
                    className="w-full px-3 py-2 sm:py-1.5 min-h-[42px] sm:min-h-0 text-xs bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-blue-700 text-slate-900 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-[9px] uppercase tracking-wider text-slate-600 font-semibold"
                >
                  Topic / Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  placeholder="e.g. Mathematical Collaboration / Academic Research Opportunity"
                  className="w-full px-3 py-2 sm:py-1.5 min-h-[42px] sm:min-h-0 text-xs bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-blue-700 text-slate-900 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-[9px] uppercase tracking-wider text-slate-600 font-semibold"
                >
                  Inquiry Details
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Please share your inquiry, mathematical question, or ideas..."
                  className="w-full px-3 py-2 sm:py-1.5 text-xs bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-blue-700 text-slate-900 resize-none transition-colors"
                />
              </div>

              {/* Large CTA with Mathematical Transformation Effect & Gradient */}
              <button
                type="submit"
                className="group relative w-full inline-flex items-center justify-center gap-2 py-3 sm:py-2.5 min-h-[46px] bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-200 rounded-lg shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden interactive-tap"
              >
                <span>GET IN TOUCH</span>
                <span className="font-mono text-sm inline-block group-hover:translate-x-1.5 transition-transform duration-200">
                  <span className="group-hover:hidden">→</span>
                  <span className="hidden group-hover:inline">⟼</span>
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
