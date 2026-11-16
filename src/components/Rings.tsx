// Dekorativni motiv koncentričnih krugova – apstrakcija šarenice iz znaka «Dr. Sefić».
// animated: krugovi se polako okreću, lukovi se iscrtavaju, a jedan prsten povremeno «pulsira».
import type { CSSProperties } from "react";

export function Rings({
  className = "",
  tone = "blue",
  animated = false,
}: {
  className?: string;
  tone?: "blue" | "light";
  animated?: boolean;
}) {
  const stroke = tone === "blue" ? "#087FBE" : "#FFFFFF";
  const i = (n: number) => ({ "--i": n }) as CSSProperties;
  return (
    <svg viewBox="0 0 600 600" fill="none" aria-hidden className={`${className} ${animated ? "rings-animated" : ""}`}>
      <g stroke={stroke} strokeLinecap="round">
        <circle cx="300" cy="300" r="298" strokeOpacity="0.14" />
        {animated && <circle className="ring-pulse" cx="300" cy="300" r="290" strokeWidth="1.5" />}
        <g className="ring-cw">
          <circle cx="300" cy="300" r="246" strokeOpacity="0.2" strokeDasharray="2 10" strokeWidth="2" />
          <path className="ring-arc" style={i(0)} pathLength={1} d="M300 54a246 246 0 0 1 213 123" strokeOpacity="0.55" strokeWidth="2.5" />
        </g>
        <g className="ring-ccw">
          <circle cx="300" cy="300" r="198" strokeOpacity="0.22" />
          <path className="ring-arc" style={i(1)} pathLength={1} d="M102 300a198 198 0 0 1 99-171.5" strokeOpacity="0.6" strokeWidth="2.5" />
          <path className="ring-arc" style={i(2)} pathLength={1} d="M498 300a198 198 0 0 1-140 189" strokeOpacity="0.45" strokeWidth="2.5" />
        </g>
        <g className="ring-cw">
          <circle cx="300" cy="300" r="146" strokeOpacity="0.3" strokeDasharray="1 7" strokeWidth="3" />
        </g>
        <g className="ring-ccw">
          <circle cx="300" cy="300" r="96" strokeOpacity="0.25" />
          <path className="ring-arc" style={i(3)} pathLength={1} d="M300 204a96 96 0 0 1 96 96" strokeOpacity="0.7" strokeWidth="2.5" />
        </g>
      </g>
    </svg>
  );
}
