// Dekorativni motiv koncentričnih krugova – apstrakcija šarenice iz znaka «Dr. Sefić».
export function Rings({ className = "", tone = "blue" }: { className?: string; tone?: "blue" | "light" }) {
  const stroke = tone === "blue" ? "#087FBE" : "#FFFFFF";
  return (
    <svg viewBox="0 0 600 600" fill="none" aria-hidden className={className}>
      <g stroke={stroke} strokeLinecap="round">
        <circle cx="300" cy="300" r="298" strokeOpacity="0.14" />
        <circle cx="300" cy="300" r="246" strokeOpacity="0.2" strokeDasharray="2 10" strokeWidth="2" />
        <circle cx="300" cy="300" r="198" strokeOpacity="0.22" />
        <path d="M300 54a246 246 0 0 1 213 123" strokeOpacity="0.55" strokeWidth="2.5" />
        <path d="M102 300a198 198 0 0 1 99-171.5" strokeOpacity="0.6" strokeWidth="2.5" />
        <path d="M498 300a198 198 0 0 1-140 189" strokeOpacity="0.45" strokeWidth="2.5" />
        <circle cx="300" cy="300" r="146" strokeOpacity="0.3" strokeDasharray="1 7" strokeWidth="3" />
        <circle cx="300" cy="300" r="96" strokeOpacity="0.25" />
        <path d="M300 204a96 96 0 0 1 96 96" strokeOpacity="0.7" strokeWidth="2.5" />
      </g>
    </svg>
  );
}
