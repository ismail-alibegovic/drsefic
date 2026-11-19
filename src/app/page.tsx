import { AppointmentCTA } from "@/components/AppointmentCTA";
import { ContactBlock } from "@/components/ContactBlock";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Optical } from "@/components/home/Optical";
import { Statement } from "@/components/home/Statement";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TeamSection } from "@/components/home/TeamSection";
import { Technology } from "@/components/home/Technology";
import { Tradition } from "@/components/home/Tradition";
import { Trust } from "@/components/home/Trust";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <Intro />
      <Tradition />
      <ServicesSection />
      <Technology />
      <TeamSection />
      <Trust />
      <Optical />
      <AppointmentCTA />
      <section aria-labelledby="kontakt-naslov" className="container-x pb-24 pt-6 md:pb-32 md:pt-10">
        <ContactBlock />
      </section>
    </>
  );
}
