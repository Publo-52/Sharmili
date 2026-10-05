"use client";

// Precalculated static vector field ticks to guarantee 100% deterministic SSR and zero hydration mismatch
const VECTOR_FIELD_TICKS = Array.from({ length: 9 }).flatMap((_, xi) => {
  const x = (xi - 4) * 0.8;
  const px = 200 + (xi - 4) * 36;
  return Array.from({ length: 6 }).map((__, yi) => {
    const y = (yi - 2.5) * 0.8;
    const py = 120 - (yi - 2.5) * 32;
    const slope = (x - y) * 0.6;
    const angle = Math.atan(slope);
    const len = 10;
    const dx = Math.round(Math.cos(angle) * len * 10) / 10;
    const dy = Math.round(Math.sin(angle) * len * 10) / 10;
    return {
      id: `${xi}-${yi}`,
      x1: Math.round((px - dx) * 10) / 10,
      y1: Math.round((py + dy) * 10) / 10,
      x2: Math.round((px + dx) * 10) / 10,
      y2: Math.round((py - dy) * 10) / 10,
    };
  });
});

interface MathVisualProps {
  type: "geometric-spiral" | "vector-field" | "normal-curve" | "fourier-wave";
  className?: string;
}

export default function MathVisual({ type, className = "" }: MathVisualProps) {
  switch (type) {
    case "geometric-spiral":
      // Golden Spiral / Logarithmic Spiral
      return (
        <svg
          viewBox="0 0 400 240"
          className={`w-full h-full bg-slate-50 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Golden Ratio Spiral Diagram"
        >
          {/* Subtle grid */}
          <line x1="0" y1="120" x2="400" y2="120" stroke="#0F172A" strokeOpacity="0.06" strokeDasharray="3 3" />
          <line x1="200" y1="0" x2="200" y2="240" stroke="#0F172A" strokeOpacity="0.06" strokeDasharray="3 3" />

          {/* Golden Rectangles */}
          <rect x="60" y="20" width="280" height="173" stroke="#0F172A" strokeOpacity="0.15" />
          <rect x="60" y="20" width="173" height="173" stroke="#0F172A" strokeOpacity="0.12" fill="#1D4ED8" fillOpacity="0.04" />
          <rect x="233" y="86" width="107" height="107" stroke="#0F172A" strokeOpacity="0.12" fill="#1D4ED8" fillOpacity="0.06" />
          <rect x="233" y="20" width="66" height="66" stroke="#0F172A" strokeOpacity="0.12" />
          <rect x="299" y="45" width="41" height="41" stroke="#0F172A" strokeOpacity="0.12" />

          {/* Golden Spiral Path */}
          <path
            d="M 60 193 A 173 173 0 0 1 233 20 A 107 107 0 0 1 340 127 A 66 66 0 0 1 274 193 A 41 41 0 0 1 233 152 A 25 25 0 0 1 258 127"
            stroke="#1D4ED8"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Annotations */}
          <text x="75" y="42" fill="#64748B" fontSize="10" fontFamily="monospace">φ = 1.618033...</text>
          <text x="245" y="180" fill="#1D4ED8" fontSize="9" fontFamily="monospace" fontWeight="bold">r = a e^(bθ)</text>
          <circle cx="258" cy="148" r="2.5" fill="#1D4ED8" />
        </svg>
      );

    case "vector-field":
      // Slope Field / Differential Equation Direction Field
      return (
        <svg
          viewBox="0 0 400 240"
          className={`w-full h-full bg-slate-50 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Direction Field for Differential Equations"
        >
          {/* Axes */}
          <line x1="30" y1="120" x2="370" y2="120" stroke="#0F172A" strokeOpacity="0.2" strokeWidth="1" />
          <line x1="200" y1="20" x2="200" y2="220" stroke="#0F172A" strokeOpacity="0.2" strokeWidth="1" />

          {/* Directional tick lines (Deterministic & Hydration-Safe) */}
          {VECTOR_FIELD_TICKS.map((tick) => (
            <line
              key={tick.id}
              x1={tick.x1}
              y1={tick.y1}
              x2={tick.x2}
              y2={tick.y2}
              stroke="#0F172A"
              strokeOpacity="0.22"
              strokeWidth="1.2"
            />
          ))}

          {/* Particular Solution Curve */}
          <path
            d="M 50 205 Q 120 180 180 120 T 350 45"
            stroke="#1D4ED8"
            strokeWidth="2.4"
            fill="none"
          />

          <text x="40" y="38" fill="#64748B" fontSize="10" fontFamily="monospace">dy/dx = f(x, y)</text>
          <text x="210" y="115" fill="#1D4ED8" fontSize="9" fontFamily="monospace" fontWeight="bold">Integral Curve y(x)</text>
        </svg>
      );

    case "normal-curve":
      // Gaussian Normal Distribution with Standard Deviations
      return (
        <svg
          viewBox="0 0 400 240"
          className={`w-full h-full bg-slate-50 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Gaussian Normal Distribution"
        >
          {/* Base Axis */}
          <line x1="40" y1="190" x2="360" y2="190" stroke="#0F172A" strokeOpacity="0.25" strokeWidth="1" />
          <line x1="200" y1="40" x2="200" y2="190" stroke="#0F172A" strokeOpacity="0.15" strokeDasharray="3 3" />

          {/* Shaded central region */}
          <path
            d="M 140 190 L 140 125 Q 170 60 200 50 Q 230 60 260 125 L 260 190 Z"
            fill="#1D4ED8"
            fillOpacity="0.08"
          />

          {/* Bell Curve */}
          <path
            d="M 40 189 C 100 188, 130 180, 150 145 C 170 100, 185 50, 200 50 C 215 50, 230 100, 250 145 C 270 180, 300 188, 360 189"
            stroke="#1D4ED8"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          {/* Markers */}
          <line x1="140" y1="185" x2="140" y2="195" stroke="#0F172A" strokeOpacity="0.4" />
          <line x1="200" y1="185" x2="200" y2="195" stroke="#0F172A" strokeOpacity="0.6" />
          <line x1="260" y1="185" x2="260" y2="195" stroke="#0F172A" strokeOpacity="0.4" />

          <text x="195" y="210" fill="#0F172A" fontSize="10" fontFamily="monospace" fontWeight="bold">μ</text>
          <text x="128" y="210" fill="#64748B" fontSize="10" fontFamily="monospace">μ - σ</text>
          <text x="248" y="210" fill="#64748B" fontSize="10" fontFamily="monospace">μ + σ</text>

          <text x="50" y="42" fill="#64748B" fontSize="10" fontFamily="monospace">f(x) = (1/σ√2π) e^(-(x-μ)²/2σ²)</text>
          <text x="180" y="115" fill="#1D4ED8" fontSize="9" fontFamily="monospace" fontWeight="bold">68.2%</text>
        </svg>
      );

    case "fourier-wave":
      // Fourier Harmonic Decomposition
      return (
        <svg
          viewBox="0 0 400 240"
          className={`w-full h-full bg-slate-50 ${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Harmonic Sine Waves"
        >
          {/* Base Axis */}
          <line x1="30" y1="120" x2="370" y2="120" stroke="#0F172A" strokeOpacity="0.2" strokeWidth="1" />

          {/* Fundamental frequency */}
          <path
            d="M 30 120 Q 115 40 200 120 T 370 120"
            stroke="#0F172A"
            strokeOpacity="0.2"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />

          {/* Third harmonic */}
          <path
            d="M 30 120 Q 58 95 86 120 T 142 120 T 198 120 T 254 120 T 310 120 T 366 120"
            stroke="#64748B"
            strokeOpacity="0.3"
            strokeWidth="1"
          />

          {/* Superposed approximation */}
          <path
            d="M 30 120 C 60 70 80 80 115 75 C 150 70 170 100 200 120 C 230 140 250 170 285 165 C 320 160 340 170 370 120"
            stroke="#1D4ED8"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          <text x="40" y="38" fill="#64748B" fontSize="10" fontFamily="monospace">f(t) = a₀ + ∑ (aₙ cos nωt + bₙ sin nωt)</text>
          <text x="250" y="105" fill="#1D4ED8" fontSize="9" fontFamily="monospace" fontWeight="bold">Synthesized Signal</text>
        </svg>
      );

    default:
      return null;
  }
}
