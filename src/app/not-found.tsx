import { Button } from "@/components/Button";
import { Rings } from "@/components/Rings";

export default function NotFound() {
  return (
    <section className="container-x pb-24 pt-2 md:pt-3">
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-ice px-6 py-24 text-center md:rounded-[2.5rem] md:py-36">
        <Rings className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[44rem] -translate-x-1/2 -translate-y-1/2 opacity-70" />
        <p className="eyebrow justify-center">Greška 404</p>
        <h1 className="display t-1 mx-auto mt-6 max-w-3xl text-navy">
          Ovu stranicu ne možemo izoštriti.
        </h1>
        <p className="lead mx-auto mt-6 max-w-xl">Stranica koju tražite ne postoji ili je premještena.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Nazad na početnu</Button>
          <Button href="/usluge" variant="ghost">
            Pogledajte usluge
          </Button>
        </div>
      </div>
    </section>
  );
}
