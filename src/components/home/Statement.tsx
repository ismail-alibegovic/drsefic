"use client";

import Image from "next/image";
import { Fragment, useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { lineage } from "@/content/team";

// Izjava koja se «upisuje» riječ po riječ dok se skrola, s portretima generacija u rečenici.
// Čitačima ekrana se daje cijela rečenica; vizuelna verzija (riječi i portreti) je skrivena.
type Token = { w: string } | { img: number };

const text =
  "Sto godina tradicije i četiri generacije oftalmologa. Znanje koje se u porodici Sefić prenosi s koljena na koljeno danas je posvećeno vašem vidu.";

const tokens: Token[] = [
  { w: "Sto" },
  { w: "godina" },
  { img: 0 },
  { w: "tradicije" },
  { w: "i" },
  { w: "četiri" },
  { w: "generacije" },
  { img: 1 },
  { w: "oftalmologa." },
  { w: "Znanje" },
  { w: "koje" },
  { w: "se" },
  { w: "u" },
  { w: "porodici" },
  { w: "Sefić" },
  { img: 2 },
  { w: "prenosi" },
  { w: "s" },
  { w: "koljena" },
  { w: "na" },
  { w: "koljeno" },
  { img: 3 },
  { w: "danas" },
  { w: "je" },
  { w: "posvećeno" },
  { img: 4 },
  { w: "vašem" },
  { w: "vidu." },
];

// riječ s opcionalnim portretom ispred nje
const groups: { w: string; img?: number }[] = [];
for (let i = 0; i < tokens.length; i++) {
  const t = tokens[i];
  if ("img" in t) {
    const next = tokens[++i] as { w: string };
    groups.push({ w: next.w, img: t.img });
  } else groups.push({ w: t.w });
}

export function Statement() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        "[data-st-word]",
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: { trigger: "[data-st-text]", start: "top 78%", end: "bottom 50%", scrub: 0.6 },
        },
      );
      gsap.fromTo(
        "[data-st-img]",
        { scale: 0.4, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          ease: "back.out(2)",
          stagger: 0.5,
          scrollTrigger: { trigger: "[data-st-text]", start: "top 78%", end: "bottom 50%", scrub: 0.6 },
        },
      );
    },
    { scope: ref },
  );

  return (
    <section ref={ref} aria-label="Porodica Sefić" className="container-x py-14 md:py-40">
      <p className="sr-only">{text}</p>
      <p
        data-st-text
        aria-hidden
        className="max-w-[24ch] font-display text-[clamp(2rem,4.6vw,4.4rem)] font-medium leading-[1.12] tracking-[-0.035em] text-navy md:max-w-[27ch]"
      >
        {groups.map((g, i) => (
          <Fragment key={i}>
            {g.img === undefined ? (
              <span data-st-word>{g.w}</span>
            ) : (
              // portret i riječ iza njega su jedna nelomljiva cjelina
              <span className="whitespace-nowrap">
                <span
                  data-st-img
                  className="relative mx-[0.08em] inline-block h-[0.9em] w-[1.5em] translate-y-[0.1em] overflow-hidden rounded-full bg-ice align-baseline ring-2 ring-white"
                >
                  <Image
                    src={lineage[g.img].image}
                    alt=""
                    fill
                    sizes="96px"
                    className={`object-cover object-[50%_25%] ${g.img < 2 ? "grayscale" : ""}`}
                  />
                </span>{" "}
                <span data-st-word>{g.w}</span>
              </span>
            )}{" "}
          </Fragment>
        ))}
      </p>
    </section>
  );
}
