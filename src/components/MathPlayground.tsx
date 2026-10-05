"use client";

import { useRef, useEffect, useState } from "react";

export default function MathPlayground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [metric, setMetric] = useState<{ r: number; theta: number; val: number }>({
    r: 0,
    theta: 0,
    val: 0,
  });
  const [mode, setMode] = useState<"wave" | "lissajous" | "vectors">("wave");

  const coordsRef = useRef(coords);
  const modeRef = useRef(mode);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    coordsRef.current = coords;
  }, [coords]);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const updateCanvasDimensions = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        if (canvas.width !== Math.floor(rect.width) || canvas.height !== Math.floor(rect.height)) {
          canvas.width = Math.floor(rect.width);
          canvas.height = Math.floor(rect.height);
        }
      }
    };

    updateCanvasDimensions();
    window.addEventListener("resize", updateCanvasDimensions);

    // Performance optimization: only animate when canvas is visible in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && !animationFrameId) {
          animationFrameId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    const render = () => {
      if (!isVisibleRef.current) {
        animationFrameId = 0;
        return;
      }

      time += 0.02;
      const width = canvas.width;
      const height = canvas.height;
      const currentCoords = coordsRef.current;
      const currentMode = modeRef.current;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle coordinate axes
      ctx.strokeStyle = "rgba(15, 23, 42, 0.1)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.stroke();

      // Axis ticks
      ctx.fillStyle = "rgba(100, 116, 139, 0.75)";
      ctx.font = "9px monospace";
      ctx.fillText("-π", width * 0.15, height / 2 + 12);
      ctx.fillText("0", width / 2 + 5, height / 2 + 12);
      ctx.fillText("+π", width * 0.85, height / 2 + 12);
      ctx.fillText("+1", width / 2 + 5, height * 0.18);
      ctx.fillText("-1", width / 2 + 5, height * 0.82);

      const cx = width / 2;
      const cy = height / 2;
      const scaleX = width / 6;
      const scaleY = height / 6;

      if (currentMode === "wave") {
        // Dynamic continuous wave influenced by mouse coords
        ctx.strokeStyle = "#1D4ED8";
        ctx.lineWidth = 2;
        ctx.beginPath();

        for (let px = 0; px <= width; px += 2) {
          const x = (px - cx) / scaleX;
          const mouseInfluence = currentCoords.y * 0.8;
          const y =
            Math.sin(x * 1.5 + time + currentCoords.x * 2) * (1 + mouseInfluence * 0.5) +
            0.3 * Math.sin(x * 3.2 - time);

          const py = cy - y * scaleY;
          if (px === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Secondary harmonic curve
        ctx.strokeStyle = "rgba(59, 130, 246, 0.4)";
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        for (let px = 0; px <= width; px += 3) {
          const x = (px - cx) / scaleX;
          const y = Math.cos(x * 2 + time * 0.8) * 0.6;
          const py = cy - y * scaleY;
          if (px === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.setLineDash([]);
      } else if (currentMode === "lissajous") {
        // Lissajous Knot Figure
        ctx.strokeStyle = "#1D4ED8";
        ctx.lineWidth = 2;
        ctx.beginPath();
        const a = 3 + Math.floor(Math.abs(currentCoords.x) * 2);
        const b = 2 + Math.floor(Math.abs(currentCoords.y) * 2);
        const delta = time * 0.5;

        for (let t = 0; t <= Math.PI * 2 + 0.05; t += 0.04) {
          const x = Math.sin(a * t + delta) * (scaleX * 1.8);
          const y = Math.sin(b * t) * (scaleY * 1.8);
          if (t === 0) ctx.moveTo(cx + x, cy - y);
          else ctx.lineTo(cx + x, cy - y);
        }
        ctx.stroke();
      } else if (currentMode === "vectors") {
        // Vector grid pointing toward or around cursor point
        ctx.strokeStyle = "rgba(29, 78, 216, 0.45)";
        ctx.lineWidth = 1;

        const targetX = cx + currentCoords.x * scaleX * 2;
        const targetY = cy - currentCoords.y * scaleY * 2;

        const step = 28;
        for (let px = step; px < width; px += step) {
          for (let py = step; py < height; py += step) {
            const dx = targetX - px;
            const dy = targetY - py;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const angle = Math.atan2(dy, dx);
            const len = Math.min(12, 160 / (dist + 20));

            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px + Math.cos(angle) * len, py + Math.sin(angle) * len);
            ctx.stroke();
          }
        }
      }

      // Cursor tracking point marker
      const cursorPx = cx + currentCoords.x * scaleX * 2;
      const cursorPy = cy - currentCoords.y * scaleY * 2;
      ctx.fillStyle = "#1D4ED8";
      ctx.beginPath();
      ctx.arc(cursorPx, cursorPy, 3.5, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    return () => {
      window.removeEventListener("resize", updateCanvasDimensions);
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setCoords({ x: Number(nx.toFixed(2)), y: Number(ny.toFixed(2)) });

    const r = Number(Math.sqrt(nx * nx + ny * ny).toFixed(3));
    const theta = Number(Math.atan2(ny, nx).toFixed(3));
    const val = Number((Math.sin(3 * nx) * Math.cos(3 * ny)).toFixed(3));
    setMetric({ r, theta, val });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !e.touches[0]) return;
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const rawX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
    const rawY = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
    const nx = Math.max(-1, Math.min(1, rawX));
    const ny = Math.max(-1, Math.min(1, rawY));
    setCoords({ x: Number(nx.toFixed(2)), y: Number(ny.toFixed(2)) });

    const r = Number(Math.sqrt(nx * nx + ny * ny).toFixed(3));
    const theta = Number(Math.atan2(ny, nx).toFixed(3));
    const val = Number((Math.sin(3 * nx) * Math.cos(3 * ny)).toFixed(3));
    setMetric({ r, theta, val });
  };

  return (
    <section
      id="playground"
      className="relative py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1380px] w-full mx-auto"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between pb-1 mb-4 sm:mb-5">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg border border-indigo-200/80 shadow-2xs">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-700 font-bold">
            INTERACTIVE
          </span>
          <span className="text-slate-300">/</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-900 font-bold">
            Mathematical Coordinate Slate
          </h2>
        </div>
        <span className="font-mono text-[10px] text-indigo-700 font-medium italic bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded border border-indigo-200/80">
          &ldquo;Everything has a pattern.&rdquo;
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
        {/* Canvas Area (8 cols) */}
        <div
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchMove}
          className="lg:col-span-8 paper-texture border border-slate-200 rounded-xl p-3.5 sm:p-4 shadow-2xs relative overflow-hidden card-hover-lift"
        >
          {/* Canvas Header bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 mb-2 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <span className="font-medium text-slate-700 text-[10px] sm:text-[11px] truncate">
                PLANE: ℝ² [-3, +3] × [-3, +3]
              </span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              <button
                type="button"
                onClick={() => setMode("wave")}
                className={`min-h-[36px] sm:min-h-0 px-2.5 sm:px-2 py-1 sm:py-0.5 rounded text-[10px] uppercase font-bold transition-colors cursor-pointer whitespace-nowrap interactive-tap ${
                  mode === "wave"
                    ? "bg-blue-700 text-white shadow-2xs"
                    : "hover:bg-slate-100 text-slate-600 bg-slate-50 sm:bg-transparent"
                }`}
              >
                Wave
              </button>
              <button
                type="button"
                onClick={() => setMode("lissajous")}
                className={`min-h-[36px] sm:min-h-0 px-2.5 sm:px-2 py-1 sm:py-0.5 rounded text-[10px] uppercase font-bold transition-colors cursor-pointer whitespace-nowrap interactive-tap ${
                  mode === "lissajous"
                    ? "bg-blue-700 text-white shadow-2xs"
                    : "hover:bg-slate-100 text-slate-600 bg-slate-50 sm:bg-transparent"
                }`}
              >
                Lissajous
              </button>
              <button
                type="button"
                onClick={() => setMode("vectors")}
                className={`min-h-[36px] sm:min-h-0 px-2.5 sm:px-2 py-1 sm:py-0.5 rounded text-[10px] uppercase font-bold transition-colors cursor-pointer whitespace-nowrap interactive-tap ${
                  mode === "vectors"
                    ? "bg-blue-700 text-white shadow-2xs"
                    : "hover:bg-slate-100 text-slate-600 bg-slate-50 sm:bg-transparent"
                }`}
              >
                Vectors
              </button>
            </div>
          </div>

          <div className="w-full h-44 xs:h-48 sm:h-56 flex items-center justify-center bg-slate-50 rounded">
            <canvas
              ref={canvasRef}
              width={640}
              height={220}
              className="w-full h-full cursor-crosshair touch-none"
            />
          </div>

          <div className="pt-2 flex flex-col xs:flex-row xs:items-center justify-between gap-1 text-[10px] font-mono text-slate-500">
            <span>Move cursor or drag touch grid to perturb manifold parameters</span>
            <span className="text-blue-700 font-bold shrink-0">f(x, y) active</span>
          </div>
        </div>

        {/* Real-time Math Feedback Slate (4 cols) */}
        <div className="lg:col-span-4 p-3.5 sm:p-5 paper-texture border border-slate-200 rounded-xl space-y-3 shadow-2xs card-hover-lift">
          <div className="pb-1">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold block">
              Live Coordinate Metrics
            </span>
            <h3 className="font-serif text-base sm:text-lg text-slate-900 font-bold">
              Analytic Readout
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 font-mono text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded gap-0.5">
              <span className="text-slate-500 text-[10px] sm:text-[11px]">Point (x, y):</span>
              <span className="font-semibold text-slate-900 text-[10px] sm:text-[11px]">
                ({coords.x.toFixed(2)}, {coords.y.toFixed(2)})
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded gap-0.5">
              <span className="text-slate-500 text-[10px] sm:text-[11px]">Radius r:</span>
              <span className="font-bold text-blue-700 text-[10px] sm:text-[11px]">{metric.r}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded gap-0.5">
              <span className="text-slate-500 text-[10px] sm:text-[11px]">Angle θ (rad):</span>
              <span className="font-semibold text-slate-900 text-[10px] sm:text-[11px]">{metric.theta}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded gap-0.5">
              <span className="text-slate-500 text-[10px] sm:text-[11px]">f(x, y):</span>
              <span className="font-bold text-blue-800 text-[11px]">{metric.val}</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
            Visual symmetry arising directly from dynamic trigonometric coordinates.
          </p>
        </div>
      </div>
    </section>
  );
}
