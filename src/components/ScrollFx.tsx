"use client";

import { animate, motion, useInView, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

function useReducedRef() {
  const ref = useRef(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => (ref.current = mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);
  return ref;
}

/** Blagi paralaks za fotografije: sadržaj se pomjera sporije od stranice unutar okvira koji ga odsijeca. */
export function Parallax({ children, amount = 7 }: { children: ReactNode; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, (v) => (reduced.current ? "0%" : `${(v - 0.5) * 2 * amount}%`));
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y, top: `-${amount}%`, bottom: `-${amount}%` }} className="absolute inset-x-0 will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

/** Horizontalni pomak vezan za skrol (npr. veliki dekorativni broj). */
export function ScrollDrift({ children, className, from = 10, to = -10 }: { children: ReactNode; className?: string; from?: number; to?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, (v) => (reduced.current ? "0%" : `${from + (to - from) * v}%`));
  return (
    <motion.span ref={ref} aria-hidden style={{ x }} className={className}>
      {children}
    </motion.span>
  );
}

/** Linija koja se «iscrtava» slijeva nadesno kada uđe u vidno polje. */
export function DrawLine({ className }: { className?: string }) {
  return (
    <motion.span
      aria-hidden
      className={className}
      style={{ transformOrigin: "left" }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

/** Otkrivanje fotografije: maska se povlači odozdo, a slika se blago «smiruje» iz uvećanja. */
export function ImageReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0% 0% 100% 0% round 1.5rem)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 1.5rem)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Brojač koji odbrojava do vrijednosti kada postane vidljiv. Bez JS-a prikazuje konačnu vrijednost. */
export function CountUp({ value, duration = 1.6 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const [n, setN] = useState(value);
  // Ručno grupisanje hiljada – isti rezultat na serveru i u pregledniku.
  const fmt = (v: number) => String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");

  useEffect(() => {
    if (!inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const controls = animate(0, value, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: setN });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {fmt(n)}
    </span>
  );
}

/** Tanka linija napretka čitanja ispod zaglavlja. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });
  return <motion.div aria-hidden style={{ scaleX, transformOrigin: "left" }} className="absolute inset-x-0 bottom-0 h-0.5 bg-blue" />;
}
