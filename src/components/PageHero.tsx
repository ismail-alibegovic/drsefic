import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Rings } from "./Rings";

type Crumb = { href?: string; label: string };

export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="container-x pt-2 md:pt-3">
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-[linear-gradient(105deg,#cfe7fa_0%,#e3f1fc_42%,#f3f9fe_100%)] px-6 pb-14 pt-8 md:rounded-[2.5rem] md:px-14 md:pb-20 md:pt-10">
        <Rings className="pointer-events-none absolute -right-48 -top-56 -z-10 w-[46rem] opacity-70 max-md:opacity-25" />
        <nav aria-label="Putanja">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-blue">
                Početna
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <ChevronRight aria-hidden className="size-3.5" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-blue">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-ink">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="eyebrow mt-12 md:mt-16">{eyebrow}</p>
        <h1 className="display t-1 mt-5 max-w-5xl text-navy">{title}</h1>
        {lead && <p className="lead mt-6 max-w-2xl">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
