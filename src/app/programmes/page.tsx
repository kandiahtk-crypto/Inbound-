import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const programmes = [
  {
    t: "United States",
    d: "Extended, comfort‑focused touring with balanced pacing and smooth regional transitions."
  },
  {
    t: "India",
    d: "High‑energy multi‑destination programmes with efficient daily flow and group‑friendly routing."
  },
  {
    t: "China",
    d: "Structured, photo‑friendly itineraries with precise daily timing."
  },
  {
    t: "Europe",
    d: "Flexible, short‑stay touring with multi‑region connectivity."
  }
];

export default function ProgrammesPage() {
  return (
    <section className="py-20 bg-paper">
      <Container>
        <Reveal>
          <h1 className="text-4xl font-semibold text-ink">Programmes</h1>

          <p className="mt-5 max-w-3xl text-muted leading-relaxed">
            Our programmes are built around the expectations of long‑haul inbound markets from the
            USA, India, China and Europe. We deliver structured routing, balanced pacing and
            reliable nationwide coverage.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programmes.map((item) => (
            <Reveal key={item.t}>
              <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-sm">
                <p className="font-semibold text-steel text-lg">{item.t}</p>
                <p className="mt-2 text-sm text-muted">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
