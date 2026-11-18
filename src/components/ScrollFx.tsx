"use client";

import { useRef, useState, type ReactNode } from "react";
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from "@/lib/gsap";

/** Blagi paralaks za fotografije: sadržaj se pomjera sporije od stranice unutar okvira koji ga odsijeca. */
export function Parallax({ children, amount = 7 }: { children: ReactNode; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        "[data-parallax-inner]",
        { yPercent: -amount },
        { yPercent: amount, ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true } },
      );
    },
    { scope: ref },
  );
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <div data-parallax-inner style={{ top: `-${amount}%`, bottom: `-${amount}%` }} className="absolute inset-x-0 will-change-transform">
        {children}
      </div>
    </div>
  );
}

/** Horizontalni pomak vezan za skrol (npr. veliki dekorativni broj). */
export function ScrollDrift({ children, className, from = 10, to = -10 }: { children: ReactNode; className?: string; from?: number; to?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.fromTo(
      ref.current,
      { xPercent: from },
      { xPercent: to, ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true } },
    );
  });
  return (
    <span ref={ref} aria-hidden className={className}>
      {children}
    </span>
  );
}

/** Linija koja se «iscrtava» slijeva nadesno kada uđe u vidno polje. */
export function DrawLine({ className }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set(ref.current, { scaleX: 1 });
      return;
    }
    gsap.fromTo(
      ref.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.8, ease: "expo.inOut", scrollTrigger: { trigger: ref.current, start: "top 85%", once: true } },
    );
  });
  return <span ref={ref} aria-hidden data-draw className={className} style={{ transformOrigin: "left" }} />;
}

/** Otkrivanje fotografije: maska se povlači odozdo, a slika se blago «smiruje» iz uvećanja. */
export function ImageReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) {
        gsap.set(el, { clipPath: "inset(0% 0% 0% 0%)" });
        return;
      }
      const tl = gsap.timeline({ delay, scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      tl.fromTo(el, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "expo.inOut" }).fromTo(
        "[data-reveal-img]",
        { scale: 1.15 },
        { scale: 1, duration: 1.8 },
        0,
      );
    },
    { scope: ref },
  );
  return (
    <div ref={ref} data-reveal-clip className={className}>
      <div data-reveal-img className="absolute inset-0">
        {children}
      </div>
    </div>
  );
}

/** Brojač koji odbrojava do vrijednosti kada postane vidljiv. Bez JS-a prikazuje konačnu vrijednost. */
export function CountUp({ value, duration = 1.6 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value);
  // Ručno grupisanje hiljada – isti rezultat na serveru i u pregledniku.
  const fmt = (v: number) => String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const counter = { v: 0 };
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 88%",
      once: true,
      onEnter: () => gsap.to(counter, { v: value, duration, ease: "expo.out", onUpdate: () => setN(counter.v) }),
    });
  });

  return (
    <span ref={ref} className="tabular-nums">
      {fmt(n)}
    </span>
  );
}

/** Tanka linija napretka čitanja ispod zaglavlja. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const set = gsap.quickSetter(ref.current, "scaleX");
    set(0);
    ScrollTrigger.create({ start: 0, end: "max", onUpdate: (self) => set(self.progress) });
  });
  return <div ref={ref} aria-hidden style={{ transformOrigin: "left", transform: "scaleX(0)" }} className="absolute inset-x-0 bottom-0 h-0.5 bg-blue" />;
}
