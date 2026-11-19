import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import type { Doctor } from "@/content/team";

export function DoctorCard({ doctor, priority = false }: { doctor: Doctor; priority?: boolean }) {
  return (
    <Link href={`/nas-tim/${doctor.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-ice to-ice-200 transition-colors duration-500">
        <div
          aria-hidden
          className="absolute left-1/2 top-[14%] aspect-square w-[88%] -translate-x-1/2 rounded-full border border-blue/20 transition-transform duration-700 ease-out-soft group-hover:scale-110"
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-[26%] aspect-square w-[62%] -translate-x-1/2 rounded-full border border-dashed border-blue/25 transition-transform duration-700 ease-out-soft group-hover:scale-125"
        />
        <Image
          src={doctor.image}
          alt={`${doctor.title} ${doctor.name}`}
          width={doctor.imageW}
          height={doctor.imageH}
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="absolute inset-x-0 top-[6%] mx-auto h-auto w-[82%] transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
        />
        <span className="absolute bottom-4 right-4 flex size-11 items-center justify-center rounded-full bg-white text-navy shadow-sm transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
          <ArrowUpRight aria-hidden className="size-5" />
        </span>
      </div>
      <div className="mt-5">
        <p className="inline-flex rounded-full bg-ice px-3 py-1 text-[0.8rem] font-semibold text-blue">{doctor.focus}</p>
        <h3 className="t-3 mt-3 text-navy">
          {doctor.title} {doctor.name}
        </h3>
        <p className="mt-1 text-sm text-muted">{doctor.role}</p>
      </div>
    </Link>
  );
}
