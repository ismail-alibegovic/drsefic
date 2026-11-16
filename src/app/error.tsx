"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="container-x py-24 text-center md:py-36">
      <p className="eyebrow justify-center">Greška</p>
      <h1 className="display t-2 mx-auto mt-6 max-w-2xl text-navy">Nešto je pošlo po zlu.</h1>
      <p className="lead mx-auto mt-5 max-w-xl">Pokušajte ponovo učitati stranicu.</p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full bg-blue px-6 py-3.5 font-semibold text-white transition-colors hover:bg-blue-600"
      >
        Pokušaj ponovo
      </button>
    </section>
  );
}
