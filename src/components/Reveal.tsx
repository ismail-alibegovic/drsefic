"use client";

import { MotionConfig, motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

// Suptilno otkrivanje sadržaja pri skrolanju. Uz «prefers-reduced-motion» pomak se
// izostavlja (MotionConfig reducedMotion="user"), ostaje samo blagi prijelaz prozirnosti.
export function Reveal({ children, delay = 0, y = 28, className }: Props) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -8% 0px" }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
