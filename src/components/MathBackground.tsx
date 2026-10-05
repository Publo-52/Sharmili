"use client";

export default function MathBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Clean subtle canvas base */}
      <div className="absolute inset-0 bg-[#F9FAFC]" />

      {/* Ambient soft editorial color glows for warmth, depth and human elegance */}
      <div className="absolute -top-32 left-1/4 w-[32rem] h-[32rem] rounded-full bg-blue-500/[0.055] blur-3xl animate-pulse-glow" />
      <div
        className="absolute top-1/4 -right-24 w-[28rem] h-[28rem] rounded-full bg-indigo-500/[0.045] blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-[-10rem] w-[26rem] h-[26rem] rounded-full bg-amber-400/[0.04] blur-3xl animate-pulse-glow"
        style={{ animationDelay: "3.5s" }}
      />
      <div
        className="absolute top-2/3 right-1/4 w-[30rem] h-[30rem] rounded-full bg-teal-400/[0.04] blur-3xl animate-pulse-glow"
        style={{ animationDelay: "5s" }}
      />
      <div
        className="absolute -bottom-24 left-1/3 w-[32rem] h-[32rem] rounded-full bg-violet-400/[0.045] blur-3xl animate-pulse-glow"
        style={{ animationDelay: "6.5s" }}
      />

      {/* Primary Vertical Editorial Guide Lines pushed to outer periphery */}
      <div className="absolute top-0 bottom-0 left-2 sm:left-4 lg:left-6 w-[1px] bg-blue-900/[0.045]" />
      <div className="absolute top-0 bottom-0 right-2 sm:right-4 lg:right-6 w-[1px] bg-blue-900/[0.045]" />

      {/* Floating subtle mathematical watermarks with gentle drifting animations */}
      <div className="absolute top-[12%] left-[3%] sm:left-[4%] font-serif italic text-2xl sm:text-3xl text-blue-950/[0.07] select-none animate-drift-slow">
        ∂f/∂x
      </div>
      <div className="absolute top-[24%] right-[4%] sm:right-[5%] font-serif text-3xl sm:text-4xl text-indigo-950/[0.065] select-none animate-drift-slow-delayed">
        ∫
      </div>
      <div className="absolute top-[38%] left-[2%] sm:left-[3%] font-mono text-xs sm:text-sm tracking-widest text-slate-900/[0.06] select-none animate-drift-slow">
        x² + y² = r²
      </div>
      <div className="absolute top-[52%] right-[5%] sm:right-[6%] font-serif italic text-2xl sm:text-3xl text-amber-950/[0.07] select-none animate-drift-slow-delayed">
        λ
      </div>
      <div className="absolute top-[65%] left-[4%] sm:left-[5%] font-serif text-xl sm:text-2xl text-teal-950/[0.065] select-none animate-drift-slow">
        ∑ 1/n² = π²/6
      </div>
      <div className="absolute top-[78%] right-[3%] sm:right-[5%] font-serif text-3xl text-violet-950/[0.07] select-none animate-drift-slow-delayed">
        ∞
      </div>
      <div className="absolute top-[88%] left-[3%] sm:left-[4%] font-mono text-xs text-blue-950/[0.06] select-none animate-drift-slow">
        lim_{"{"}x→0{"}"}
      </div>
      <div className="absolute top-[72%] right-[2%] sm:right-[4%] font-mono text-xs text-indigo-950/[0.055] select-none animate-drift-slow-delayed">
        ∀ε &gt; 0, ∃δ &gt; 0
      </div>
    </div>
  );
}
