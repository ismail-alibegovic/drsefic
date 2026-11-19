import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { SmoothScroll } from "@/components/SmoothScroll";

// Prije prvog iscrtavanja označava da JS radi (početna stanja animacija). Ako se animacije
// iz bilo kojeg razloga ne pokrenu u 4 s, oznaka se uklanja i sadržaj ostaje vidljiv.
const motionBoot = `document.documentElement.classList.add("js");setTimeout(function(){if(!window.__motionReady)document.documentElement.classList.remove("js")},4000);`;

export const metadata: Metadata = {
  metadataBase: new URL("https://dr-sefic-demo.local"),
  title: {
    default: "Dr. Sefić – Očna poliklinika i Optički studio, Sarajevo (demo koncept)",
    template: "%s · Dr. Sefić – demo koncept",
  },
  description:
    "Očna poliklinika i Optički studio «Dr. Sefić», Ferhadija 5/1, Sarajevo. 100 godina tradicije i četvrta generacija oftalmologa: pregledi, lasersko skidanje dioptrije, operacija mrene, glaukom, mrežnica i okuloplastika. Nezavisni demo koncept redizajna.",
  // Demo koncept ne smije konkurisati službenoj stranici u pretraživačima.
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "bs_BA",
    siteName: "Dr. Sefić – demo koncept redizajna",
    title: "Generacije posvećene vašem vidu – Očna poliklinika Dr. Sefić",
    description:
      "100 godina tradicije. Četiri generacije oftalmologa. Nezavisni demo koncept redizajna stranice sefic.ba.",
    images: [{ url: "/images/clinic/recepcija.jpg", width: 2200, height: 1467, alt: "Recepcija Očne poliklinike Dr. Sefić" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  // edge-to-edge ispod zareza/Dynamic Islanda; sadržaj se odmiče preko env(safe-area-inset-*)
  viewportFit: "cover",
  // tastatura smanjuje layout viewport i na Androidu, kao na iOS-u
  interactiveWidget: "resizes-content",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06204A" },
    { media: "(prefers-color-scheme: dark)", color: "#06204A" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bs" className="antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#sadrzaj"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-white"
        >
          Preskoči na sadržaj
        </a>
        <SmoothScroll />
        <Header />
        <main id="sadrzaj" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
