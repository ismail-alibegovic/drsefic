"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { getLenis } from "./SmoothScroll";

// Uvodna animacija pri prvoj posjeti u sesiji: oko se otvara, trepne, brojač dolazi do
// «100 godina tradicije», a zatim se zjenica širi i kroz nju se otvara stranica.
// Prikazuje se samo kada je skripta u <head> postavila html.is-loading (JS radi, kretanje
// nije smanjeno, nije već viđeno u ovoj sesiji). Bez toga je element skriven CSS-om.

const r2d = (n: number) => Math.round(n * 100) / 100;
const FIBERS = Array.from({ length: 48 }, (_, i) => {
  const a = (i / 48) * Math.PI * 2;
  const r1 = 15 + (i % 3) * 1.5;
  const r2 = 33 - (i % 2) * 3;
  return {
    x1: r2d(100 + Math.cos(a) * r1),
    y1: r2d(60 + Math.sin(a) * r1),
    x2: r2d(100 + Math.cos(a) * r2),
    y2: r2d(60 + Math.sin(a) * r2),
  };
});

const ALMOND = "M8 60C38 18 162 18 192 60C162 102 38 102 8 60Z";
// zatvoreno oko već u HTML-u (scaleY 0.03 oko y = 60), da prvi kadar prije hidracije bude tačan
const CLOSED = "matrix(1 0 0 0.03 0 58.2)";

export function EyeLoader() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      const html = document.documentElement;
      if (!root || !html.classList.contains("is-loading")) return;

      getLenis()?.stop();
      const counter = { v: 0 };
      const num = root.querySelector<HTMLElement>("[data-count]");
      const finish = () => {
        html.classList.remove("is-loading");
        try {
          sessionStorage.setItem("sefic-intro", "1");
        } catch {}
        getLenis()?.start();
      };

      const tl = gsap.timeline({ defaults: { ease: "expo.out" }, onComplete: finish });
      tl.fromTo(".lid", { scaleY: 0.03, transformOrigin: "50% 50%" }, { scaleY: 0.03, duration: 0 }, 0)
        .fromTo("[data-outline]", { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.9, ease: "power2.inOut" }, 0.05)
        .to(".lid", { scaleY: 1, duration: 0.8, ease: "expo.inOut" }, 0.35)
        .fromTo("[data-fiber]", { opacity: 0, scale: 0.6, transformOrigin: "100px 60px" }, { opacity: 1, scale: 1, duration: 1, stagger: { each: 0.008, from: "random" } }, 0.6)
        .to(counter, { v: 100, duration: 1.6, ease: "power3.inOut", onUpdate: () => num && (num.textContent = String(Math.round(counter.v))) }, 0.3)
        .fromTo("[data-caption]", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.5)
        // treptaj
        .to(".lid", { scaleY: 0.06, duration: 0.14, ease: "power2.in" }, 1.35)
        .to(".lid", { scaleY: 1, duration: 0.32, ease: "power3.out" }, 1.49)
        // zjenica se širi i postaje prolaz u stranicu
        .to("[data-pupil]", { attr: { r: 26 }, duration: 0.5, ease: "power3.inOut" }, 1.85)
        .to("[data-caption]", { autoAlpha: 0, y: -8, duration: 0.4, ease: "power2.in" }, 1.9)
        .to("[data-eye]", { scale: 9, duration: 1.1, ease: "expo.in" }, 2.05)
        .fromTo(root, { "--r": "0vmax" }, { "--r": "150vmax", duration: 1.05, ease: "expo.inOut" }, 2.35)
        .add(() => window.dispatchEvent(new Event("sefic:intro-done")), 2.75);
    },
    { scope: ref },
  );

  return (
    <div ref={ref} aria-hidden data-loader className="eye-loader fixed inset-0 z-[200] flex items-center justify-center bg-navy text-white">
      <div className="relative flex flex-col items-center">
        <svg data-eye viewBox="0 0 200 120" className="w-[min(62vw,22rem)] origin-center overflow-visible" fill="none">
          <defs>
            <clipPath id="loader-almond">
              <path className="lid" d={ALMOND} transform={CLOSED} />
            </clipPath>
            <radialGradient id="loader-iris" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="55%" stopColor="#0077cc" />
              <stop offset="100%" stopColor="#004a80" />
            </radialGradient>
          </defs>
          <g clipPath="url(#loader-almond)">
            <rect width="200" height="120" fill="#0a2a5e" />
            <circle cx="100" cy="60" r="34" fill="url(#loader-iris)" />
            <g stroke="#bfe6fb" strokeWidth="0.6" strokeLinecap="round">
              {FIBERS.map((f, i) => (
                <line key={i} data-fiber {...f} strokeOpacity={0.35 + (i % 4) * 0.12} />
              ))}
            </g>
            <circle cx="100" cy="60" r="34" stroke="#7cc8f5" strokeOpacity="0.5" strokeWidth="1.2" />
            <circle data-pupil cx="100" cy="60" r="12" fill="#030f24" />
            <circle cx="91" cy="51" r="4" fill="#fff" fillOpacity="0.85" />
          </g>
          <path className="lid" data-outline d={ALMOND} transform={CLOSED} pathLength={1} strokeDasharray={1} stroke="#fff" strokeWidth="1.6" />
        </svg>
        <p data-caption className="invisible absolute left-1/2 top-full mt-10 flex -translate-x-1/2 whitespace-nowrap items-baseline gap-3 font-display">
          <span data-count className="w-[3ch] text-right text-5xl font-semibold tabular-nums tracking-tight">
            0
          </span>
          <span className="text-lg text-white/70">godina tradicije</span>
        </p>
      </div>
    </div>
  );
}
