"use client";

import { useRef, type ReactNode } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

/**
 * Ulazna sekvenca heroja (GSAP), blaga dubina na pokazivač i pauziranje
 * dekorativnih CSS animacija kada hero nije na ekranu.
 */
export function HeroStage({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      // Dekorativne petlje (krugovi, lebdeća oznaka) ne rade van ekrana.
      const io = new IntersectionObserver(([e]) => root.classList.toggle("is-offscreen", !e.isIntersecting));
      io.observe(root);

      if (prefersReducedMotion()) {
        gsap.set("[data-hero-line],[data-hero-fade],[data-hero-photo],[data-hero-notch],[data-hero-chip]", {
          clearProps: "all",
          autoAlpha: 1,
        });
        return () => io.disconnect();
      }

      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .fromTo("[data-hero-line]", { y: 0, yPercent: 108, rotate: 2.5 }, { y: 0, yPercent: 0, rotate: 0, duration: 1.15, stagger: 0.09 }, 0.05)
        .fromTo("[data-hero-fade]", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.08 }, 0.12)
        .fromTo("[data-hero-photo]", { autoAlpha: 0, y: 56, scale: 0.97 }, { autoAlpha: 1, y: 0, scale: 1, duration: 1.5 }, 0.2)
        .fromTo("[data-hero-notch]", { autoAlpha: 0, xPercent: -8 }, { autoAlpha: 1, xPercent: 0, duration: 1.1 }, 0.55)
        .fromTo("[data-hero-chip]", { autoAlpha: 0, y: 12, scale: 0.92 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.8 }, 0.95);

      // Dubina na pokazivač: samo precizni pokazivači (miš), fotografija i krugovi idu suprotno.
      const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
      if (!fine.matches) return () => io.disconnect();

      const layers = gsap.utils.toArray<HTMLElement>("[data-depth]", root).map((el) => {
        const depth = Number(el.dataset.depth);
        return {
          depth,
          x: gsap.quickTo(el, "x", { duration: 1.1, ease: "power3.out" }),
          y: gsap.quickTo(el, "y", { duration: 1.1, ease: "power3.out" }),
        };
      });
      let frame = 0;
      const onMove = (e: PointerEvent) => {
        if (frame) return;
        frame = requestAnimationFrame(() => {
          frame = 0;
          const r = root.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width - 0.5;
          const ny = (e.clientY - r.top) / r.height - 0.5;
          layers.forEach((l) => {
            l.x(nx * l.depth);
            l.y(ny * l.depth);
          });
        });
      };
      const reset = () => layers.forEach((l) => (l.x(0), l.y(0)));
      const onVisibility = () => document.hidden && reset();

      root.addEventListener("pointermove", onMove);
      root.addEventListener("pointerleave", reset);
      window.addEventListener("blur", reset);
      document.addEventListener("visibilitychange", onVisibility);
      return () => {
        cancelAnimationFrame(frame);
        io.disconnect();
        root.removeEventListener("pointermove", onMove);
        root.removeEventListener("pointerleave", reset);
        window.removeEventListener("blur", reset);
        document.removeEventListener("visibilitychange", onVisibility);
      };
    },
    { scope: ref },
  );

  return (
    <div ref={ref} data-hero-stage className={className}>
      {children}
    </div>
  );
}
