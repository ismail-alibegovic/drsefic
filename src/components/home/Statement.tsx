"use client";

import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

// Izjava čije se riječi «pune» bojom dok se skrola. Čitači ekrana dobijaju cijelu rečenicu;
// vizuelna verzija (podijeljene riječi) je skrivena. Bez JS-a i uz smanjeno kretanje tekst je odmah pun.
const text =
  "Sto godina tradicije i četiri generacije oftalmologa. Znanje koje se u porodici Sefić prenosi s koljena na koljeno danas je posvećeno vašem vidu.";

export function Statement() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        "[data-st-word]",
        { opacity: 0.16 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.12,
          scrollTrigger: { trigger: "[data-st-text]", start: "top 82%", end: "bottom 55%", scrub: 0.6 },
        },
      );
    },
    { scope: ref },
  );

  return (
    <section ref={ref} aria-label="Porodica Sefić" className="container-x py-16 md:py-28 xl:py-36">
      <p className="sr-only">{text}</p>
      <p
        data-st-text
        aria-hidden
        className="max-w-[26ch] font-display text-[clamp(1.85rem,3.9vw,3.9rem)] font-medium leading-[1.1] tracking-[-0.035em] text-navy md:max-w-[30ch]"
      >
        {text.split(" ").map((w, i) => (
          <span key={i}>
            <span data-st-word>{w}</span>{" "}
          </span>
        ))}
      </p>
    </section>
  );
}
