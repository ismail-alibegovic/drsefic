"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { gsap, prefersReducedMotion, ScrollTrigger } from "@/lib/gsap";

let lenis: Lenis | null = null;
/** Jedina instanca glatkog skrola (ili null uz smanjeno kretanje). */
export const getLenis = () => lenis;

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Signal za sigurnosni mehanizam u <head>: JS animacije su se pokrenule.
    (window as Window & { __motionReady?: boolean }).__motionReady = true;
    document.documentElement.classList.add("motion-ready");
    if (prefersReducedMotion()) return;

    const instance = new Lenis({ lerp: 0.11, wheelMultiplier: 0.95, anchors: { offset: -96 } });
    lenis = instance;
    instance.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(tick);
      instance.destroy();
      lenis = null;
    };
  }, []);

  // Nova stranica: mjerenja se računaju ispočetka kada slike i fontovi stignu.
  useEffect(() => {
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
