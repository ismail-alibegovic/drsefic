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
    (_ctx, contextSafe) => {
      const root = ref.current;
      if (!root) return;

      // Dekorativne petlje (krugovi, lebdeća oznaka) ne rade van ekrana.
      const io = new IntersectionObserver(([e]) => root.classList.toggle("is-offscreen", !e.isIntersecting));
      io.observe(root);

      if (prefersReducedMotion()) {
        gsap.set("[data-hero-line],[data-hero-fade],[data-hero-photo],[data-hero-notch]", {
          clearProps: "all",
          autoAlpha: 1,
        });
        return () => io.disconnect();
      }

      const q = gsap.utils.selector(root);
      const play = contextSafe!(() =>
        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .fromTo(q("[data-hero-line]"), { y: 0, yPercent: 108, rotate: 2.5 }, { y: 0, yPercent: 0, rotate: 0, duration: 1.2, stagger: 0.1 }, 0.05)
          .fromTo(q("[data-hero-fade]"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1 }, 0.15)
          .fromTo(q("[data-hero-photo]"), { autoAlpha: 0, y: 70, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1, duration: 1.6 }, 0.2)
          .fromTo(q("[data-hero-notch]"), { autoAlpha: 0, xPercent: -8 }, { autoAlpha: 1, xPercent: 0, duration: 1.1 }, 0.6),
      );

      play();

      // Izlazak iz heroja na skrol (samo desktop): panel se blago povlači, fotografija i
      // krugovi idu različitim brzinama. Na mobitelu su tekst i slika jedno ispod drugog.
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const st = { trigger: root, start: "top top", end: "bottom top", scrub: true };
        gsap.to(root, { scale: 0.94, transformOrigin: "50% 0%", ease: "none", scrollTrigger: st });
        gsap.to(q("[data-hero-photo]"), { yPercent: -10, ease: "none", scrollTrigger: st });
        gsap.to(q("[data-rings-spin]"), { rotate: 50, ease: "none", scrollTrigger: st });
        gsap.to(q("[data-hero-copy]"), { yPercent: 18, autoAlpha: 0.2, ease: "none", scrollTrigger: st });
      });

      const cleanupBase = () => {
        mm.revert();
        io.disconnect();
      };
      const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
      if (!fine.matches) return cleanupBase;

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
        cleanupBase();
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
