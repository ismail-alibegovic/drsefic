"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { Logo } from "./Logo";
import { Button } from "./Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-white/90 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-xl" : "bg-white"
      }`}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
        <Logo />

        <nav aria-label="Glavna navigacija" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-full px-4 py-2.5 text-[0.95rem] font-medium transition-colors hover:bg-ice hover:text-blue ${
                    isActive(item.href) ? "text-blue" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-[0.95rem] font-semibold text-ink transition-colors hover:text-blue md:inline-flex"
          >
            <Phone aria-hidden className="size-4 text-blue" />
            {site.phoneLocal}
          </a>
          <Button href="/kontakt#termin" className="whitespace-nowrap max-sm:hidden">
            Zakažite pregled
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobilni-meni"
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            className="inline-flex size-12 items-center justify-center rounded-full bg-ice text-navy transition-colors hover:bg-ice-200 xl:hidden"
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobilni-meni"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-100%)] overflow-y-auto bg-white xl:hidden"
          >
            <nav aria-label="Mobilna navigacija" className="container-x flex min-h-full flex-col pb-8 pt-4">
              <ul className="border-t border-line">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                    className="border-b border-line"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-4 font-display text-[1.75rem] font-medium tracking-tight text-navy"
                    >
                      {item.label}
                      <span className="font-sans text-xs font-semibold tracking-widest text-muted">0{i + 1}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto grid gap-3 pt-8">
                <Button href="/kontakt#termin">
                  Zakažite pregled
                </Button>
                <Button href={site.phoneHref} variant="ghost" icon={<Phone aria-hidden className="size-4 text-blue" />}>
                  {site.phone}
                </Button>
                <p className="pt-2 text-center text-sm text-muted">
                  {site.address.street}, Sarajevo · {site.hours[0].short} {site.hours[0].time}
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
