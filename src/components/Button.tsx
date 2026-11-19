import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "soft" | "light" | "outline-light";

const styles: Record<Variant, string> = {
  primary:
    "bg-blue text-white hover:bg-blue-600 shadow-[0_10px_28px_-12px_rgba(0,119,204,0.75)]",
  ghost: "bg-white text-ink ring-1 ring-line hover:ring-blue hover:text-blue",
  soft: "bg-white/70 text-blue ring-1 ring-blue/15 backdrop-blur hover:bg-white hover:ring-blue/40",
  light: "bg-white text-navy hover:bg-ice",
  "outline-light": "text-white ring-1 ring-white/30 hover:ring-white hover:bg-white/5",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  arrow?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", icon, arrow = false, className = "" }: Props) {
  const cls = `group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold leading-none transition-[background-color,color,box-shadow,transform] duration-300 active:scale-[0.98] ${styles[variant]} ${className}`;
  const inner = (
    <>
      {icon}
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );
  const external = /^(tel:|mailto:|https?:)/.test(href);
  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} className={cls} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-2 font-semibold text-blue ${className}`}>
      <span className="link-underline">{children}</span>
      <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
