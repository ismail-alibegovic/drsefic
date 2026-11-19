import { ArrowLink } from "@/components/Button";
import { DoctorCard } from "@/components/DoctorCard";
import { Reveal } from "@/components/Reveal";
import { doctors } from "@/content/team";
import { SplitHeading } from "@/components/SplitHeading";

export function TeamSection() {
  return (
    <section aria-labelledby="tim-naslov" className="container-x py-16 md:py-36">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <Reveal>
          <p className="eyebrow">Naš tim</p>
          <h2 id="tim-naslov" className="display t-2 mt-6 max-w-3xl text-navy">
            <SplitHeading text="Specijalisti oftalmologije i optometrije." />
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ArrowLink href="/nas-tim">Upoznajte cijeli tim</ArrowLink>
        </Reveal>
      </div>
      {/* mobitel: horizontalni carousel s nativnim snap-om; od sm naviše mreža */}
      <ul className="-mx-[var(--gutter)] mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-[var(--gutter)] pb-2 [scrollbar-width:none] sm:mx-0 sm:mt-14 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-x-5 sm:gap-y-12 sm:overflow-visible sm:px-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
        {doctors.map((d, i) => (
          <li key={d.slug} className="w-[78%] shrink-0 snap-start scroll-ml-5 sm:w-auto">
            <Reveal delay={i * 0.07}>
              <DoctorCard doctor={d} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
