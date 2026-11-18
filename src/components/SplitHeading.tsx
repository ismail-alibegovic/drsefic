"use client";

import { Fragment, useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

/**
 * Naslov koji se otkriva riječ po riječ. Čitači ekrana dobijaju nepodijeljen tekst (sr-only),
 * a podijeljene riječi su skrivene od pomoćnih tehnologija. Bez JS-a riječi su odmah vidljive.
 */
export function SplitHeading({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useGSAP(
    () => {
      const words = gsap.utils.toArray<HTMLElement>("[data-word]", ref.current);
      if (prefersReducedMotion()) {
        gsap.set(words, { y: 0, yPercent: 0 });
        return;
      }
      gsap.fromTo(
        words,
        { y: 0, yPercent: 110 },
        {
          y: 0,
          yPercent: 0,
          duration: 1.15,
          delay,
          stagger: 0.055,
          scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
        },
      );
    },
    { scope: ref },
  );
  const words = text.split(" ");
  return (
    <span ref={ref}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((w, i) => (
          <Fragment key={i}>
            <span className="split-w">
              <span data-word>{w}</span>
            </span>
            {i < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    </span>
  );
}
