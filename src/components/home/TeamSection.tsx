import { ArrowLink } from "@/components/Button";
import { DoctorCard } from "@/components/DoctorCard";
import { Reveal } from "@/components/Reveal";
import { doctors } from "@/content/team";

export function TeamSection() {
  return (
    <section aria-labelledby="tim-naslov" className="container-x py-24 md:py-36">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <Reveal>
          <p className="eyebrow">Naš tim</p>
          <h2 id="tim-naslov" className="display t-2 mt-6 max-w-3xl text-navy">
            Specijalisti oftalmologije <em className="text-blue">i optometrije.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ArrowLink href="/nas-tim">Upoznajte cijeli tim</ArrowLink>
        </Reveal>
      </div>
      <ul className="mt-14 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.map((d, i) => (
          <li key={d.slug}>
            <Reveal delay={i * 0.07}>
              <DoctorCard doctor={d} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
