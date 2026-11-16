import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="Dr. Sefić – početna stranica" className={`inline-flex shrink-0 ${className}`}>
      <Image
        src={light ? "/branding/logo-light.png" : "/branding/logo.png"}
        alt="Dr. Sefić – Očna poliklinika · Optički studio"
        width={360}
        height={94}
        priority={!light}
        quality={90}
        className="h-11 w-auto md:h-[3.25rem]"
      />
    </Link>
  );
}
