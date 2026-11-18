"use client";

import { useRef, type ReactNode } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

// Otkrivanje sadržaja pri skrolanju (GSAP ScrollTrigger). Početno skrivanje radi samo CSS
// pod klasom .js, pa je sadržaj bez JavaScripta i uz smanjeno kretanje odmah vidljiv.
export function Reveal({ children, delay = 0, y = 28, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) {
        gsap.set(el, { autoAlpha: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          delay,
          clearProps: "transform",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        },
      );
    },
    { scope: ref },
  );
  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  );
}
