import { Clock, Mail, MapPin, Navigation, Phone } from "@/components/icons";
import { site } from "@/content/site";
import { Button } from "./Button";
import { SplitHeading } from "@/components/SplitHeading";

export function ContactBlock({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const H = headingLevel;
  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <div className="flex flex-col rounded-[1.5rem] bg-ice p-8 md:rounded-[2rem] md:p-12 lg:col-span-5">
        <p className="eyebrow">Kontakt</p>
        <H id="kontakt-naslov" className="display t-2 mt-6 text-navy">
          <SplitHeading text="U srcu Sarajeva, na Ferhadiji." />
        </H>
        <dl className="mt-10 space-y-6">
          <div className="flex gap-4">
            <dt className="mt-0.5">
              <MapPin aria-hidden className="size-5 text-blue" />
              <span className="sr-only">Adresa</span>
            </dt>
            <dd>
              <span className="font-semibold text-navy">{site.address.street}</span>
              <br />
              {site.address.city}, {site.address.country}
            </dd>
          </div>
          <div className="flex gap-4">
            <dt className="mt-0.5">
              <Phone aria-hidden className="size-5 text-blue" />
              <span className="sr-only">Telefon</span>
            </dt>
            <dd>
              <a href={site.phoneHref} className="link-underline font-semibold text-navy">
                {site.phone}
              </a>
            </dd>
          </div>
          <div className="flex gap-4">
            <dt className="mt-0.5">
              <Mail aria-hidden className="size-5 text-blue" />
              <span className="sr-only">E-mail</span>
            </dt>
            <dd>
              <a href={site.emailHref} className="link-underline font-semibold text-navy">
                {site.email}
              </a>
            </dd>
          </div>
          <div className="flex gap-4">
            <dt className="mt-0.5">
              <Clock aria-hidden className="size-5 text-blue" />
              <span className="sr-only">Radno vrijeme</span>
            </dt>
            <dd className="w-full max-w-xs">
              <table className="w-full">
                <caption className="sr-only">Radno vrijeme</caption>
                <tbody>
                  {site.hours.map((h) => (
                    <tr key={h.days}>
                      <th scope="row" className="py-0.5 pr-4 text-left font-normal">
                        {h.days}
                      </th>
                      <td className="whitespace-nowrap py-0.5 text-right font-semibold text-navy">{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </dd>
          </div>
        </dl>
        <div className="mt-auto pt-10">
          <Button href={site.mapLink} variant="primary" icon={<Navigation aria-hidden className="size-4" />}>
            Upute do poliklinike
          </Button>
        </div>
      </div>
      <div className="relative min-h-[22rem] overflow-hidden rounded-[1.5rem] bg-ice-200 md:rounded-[2rem] lg:col-span-7">
        <iframe
          src={site.mapEmbed}
          title="Mapa – Očna poliklinika Dr. Sefić, Ferhadija 5/1, Sarajevo"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0 grayscale-[0.35]"
        />
      </div>
    </div>
  );
}
