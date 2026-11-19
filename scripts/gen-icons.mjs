// Generiše src/components/icons.tsx iz Solar seta (Iconify, @iconify-json/solar).
// Uključuje samo ikone koje sajt koristi, pa u bundle ne ulazi cijeli set.
// Pokretanje: node scripts/gen-icons.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { getIconData, iconToSVG } from "@iconify/utils";

const set = JSON.parse(readFileSync(new URL("../node_modules/@iconify-json/solar/icons.json", import.meta.url)));

// Ime komponente na sajtu → Solar ikona
const map = {
  ArrowLeft: "arrow-left-linear",
  ArrowRight: "arrow-right-linear",
  ArrowUpRight: "arrow-right-up-linear",
  Award: "medal-ribbon-linear",
  Check: "check-read-linear",
  ChevronRight: "alt-arrow-right-linear",
  CircleDot: "record-circle-linear",
  Clock: "clock-circle-linear",
  DoorOpen: "door-closed-linear",
  Eye: "eye-linear",
  Gauge: "speedometer-middle-linear",
  GraduationCap: "square-academic-cap-linear",
  House: "home-smile-linear",
  Info: "info-circle-linear",
  Mail: "letter-linear",
  MapPin: "map-point-linear",
  Menu: "hamburger-menu-linear",
  MessageCircle: "chat-round-dots-linear",
  Microscope: "microscope-linear",
  Navigation: "routing-2-linear",
  Phone: "phone-linear",
  Plus: "add-circle-linear",
  Ruler: "ruler-linear",
  ScanEye: "eye-scan-linear",
  ShieldCheck: "shield-check-linear",
  ShieldPlus: "shield-plus-linear",
  Sparkles: "magic-stick-3-linear",
  Target: "target-linear",
  X: "close-circle-linear",
};

let out = `// AUTOMATSKI GENERISANO (scripts/gen-icons.mjs) – ne uređivati ručno.
// Ikone: Solar icon set (480 Design, CC BY 4.0) preko Iconify-ja.
import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & { strokeWidth?: number | string };
export type IconComponent = (props: IconProps) => React.JSX.Element;

function make(body: string, viewBox: string): IconComponent {
  function Icon({ strokeWidth, ...props }: IconProps) {
    const b = strokeWidth ? body.replaceAll('stroke-width="1.5"', \`stroke-width="\${strokeWidth}"\`) : body;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox={viewBox} aria-hidden {...props} dangerouslySetInnerHTML={{ __html: b }} />
    );
  }
  return Icon;
}

`;
for (const [name, id] of Object.entries(map)) {
  const data = getIconData(set, id);
  if (!data) throw new Error("Nema ikone: " + id);
  const svg = iconToSVG(data);
  out += `export const ${name} = make(${JSON.stringify(svg.body)}, ${JSON.stringify(svg.attributes.viewBox)});\n`;
}
writeFileSync(new URL("../src/components/icons.tsx", import.meta.url), out);
console.log("icons:", Object.keys(map).length);
