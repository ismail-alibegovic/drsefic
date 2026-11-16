export function DemoRibbon() {
  return (
    <div className="bg-navy text-white/80">
      <p className="container-x py-2 text-center text-[0.72rem] leading-snug tracking-wide md:text-xs">
        <span className="mr-2 inline-block rounded-full bg-white/10 px-2 py-0.5 font-semibold uppercase tracking-[0.14em] text-white">
          Demo koncept
        </span>
        Nezavisni prijedlog redizajna – ovo nije službena stranica poliklinike.{" "}
        <a href="https://www.sefic.ba" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
          Službena stranica: sefic.ba
        </a>
      </p>
    </div>
  );
}
