"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Education", href: "#education", sectionId: "education" },
  { label: "Interests", href: "#interests", sectionId: "interests" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Certificates", href: "#certificates", sectionId: "certificates" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      const sections = navItems.map((item) => item.sectionId);
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("hero");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "paper-texture border-b border-slate-200/80 shadow-xs py-2 sm:py-2.5"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      {/* Dynamic Scroll Reading Progress Bar */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between">
        {/* Left: Brand / Name */}
        <Link
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="group flex items-baseline gap-2"
          aria-label="Sharmili Mandal - Return to top"
        >
          <span className="font-serif text-lg md:text-xl font-semibold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
            Sharmili Mandal
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] tracking-wider uppercase text-slate-500 border-l border-slate-300 pl-2 font-medium">
            Math Student • Undergraduate
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-5 lg:gap-7"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xs uppercase tracking-wider transition-all relative py-1 ${
                  isActive
                    ? "text-blue-700 font-bold"
                    : "text-slate-600 hover:text-slate-950 font-medium"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-blue-700 rounded-full"
                  />
                )}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden lg:inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 rounded-lg px-4 py-2 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button (Accessible 44x44px target) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer interactive-tap"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-blue-700" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown & Backdrop */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-[57px] bg-slate-950/20 backdrop-blur-xs md:hidden z-30 transition-opacity"
          />

          <div className="relative z-40 md:hidden paper-texture border-b border-slate-200/90 px-5 sm:px-6 py-4 shadow-xl animate-fade-in max-h-[calc(100vh-60px)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              <div className="pb-2 mb-1 flex items-center justify-between border-b border-slate-200/70">
                <span className="font-mono text-[10px] tracking-widest uppercase text-slate-500 font-bold">
                  Portfolio Navigation
                </span>
                <span className="font-mono text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-semibold">
                  7 Sections
                </span>
              </div>

              {navItems.map((item, idx) => {
                const isActive = activeSection === item.sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between text-xs uppercase tracking-wider px-3 py-2.5 rounded-lg transition-all duration-150 interactive-tap ${
                      isActive
                        ? "text-blue-700 font-bold bg-blue-50/80 border border-blue-200/60"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 font-medium"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="font-mono text-[10px] text-slate-400 font-semibold">
                        0{idx + 1}
                      </span>
                      <span>{item.label}</span>
                    </span>
                    {isActive ? (
                      <span className="font-mono text-xs text-blue-700">●</span>
                    ) : (
                      <span className="font-mono text-xs text-slate-300">→</span>
                    )}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-slate-200/70 mt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all interactive-tap"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
