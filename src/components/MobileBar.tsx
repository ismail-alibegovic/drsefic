import Link from "next/link";
import { Calendar, Phone } from "@/components/icons";
import { site } from "@/content/site";

// Fiksna traka s dvije glavne radnje, samo na mobitelu. Odmiče se od home-indikatora
// (safe-area) i zasniva se na :active povratnoj informaciji, bez hovera.
export function MobileBar() {
  return (
    <nav
      aria-label="Brze radnje"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/90 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur-xl md:hidden"
    >
      <div className="grid grid-cols-2 gap-2.5 px-4 py-2.5">
        <a
          href={site.phoneHref}
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-ice font-semibold text-blue transition-transform duration-100 active:scale-[0.97]"
        >
          <Phone aria-hidden className="size-[1.15rem]" />
          Pozovite
        </a>
        <Link
          href="/kontakt#termin"
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-blue font-semibold text-white shadow-[0_8px_22px_-10px_rgba(0,119,204,0.8)] transition-transform duration-100 active:scale-[0.97]"
        >
          <Calendar aria-hidden className="size-[1.15rem]" />
          Zakažite
        </Link>
      </div>
    </nav>
  );
}
