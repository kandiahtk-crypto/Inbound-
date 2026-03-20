export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#061220] text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
          Premium UK & Ireland Transport
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          UK Inbound Ground Transport
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
          Premium ground transport solutions for international tour operators,
          group travel, and structured touring across the UK and Ireland.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="rounded-full bg-yellow-400 px-6 py-3 font-medium text-black transition hover:bg-yellow-300"
          >
            Request a Quote
          </a>

          <a
            href="/services"
            className="rounded-full border border-white/30 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
