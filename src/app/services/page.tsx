import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import Button from "@/components/Button";

const services = [
  {
    t: "Fixed‑Departure Series Support",
    d: "Season‑long consistency with repeatable, structured touring flows."
  },
  {
    t: "Multi‑Region UK Touring",
    d: "Balanced itineraries across England, Scotland and Wales."
  },
  {
    t: "UK–Ireland Integrated Itineraries",
    d: "Unified touring standards across the entire British Isles."
  },
  {
    t: "Large Group Coordination",
    d: "Professional handling for multi‑coach and high‑volume movements."
  },
  {
    t: "Long‑Haul Market Alignment",
    d: "Optimised for USA, India, China and Europe inbound expectations."
  }
];

export default function ServicesPage() {
  return (
    <section className="py-20 bg-paper">
      <Container>
        <Reveal>
          <h1 className="text-4xl font-semibold text-ink">Services</h1>

          <p className="mt-5 max-w-3xl text-muted leading-relaxed">
            We provide dependable, corporate‑grade touring logistics built around clarity,
            consistency and reliable operational delivery for inbound operators.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((item) => (
            <Reveal key={item.t}>
              <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-sm">
                <p className="font-semibold text-steel text-lg">{item.t}</p>
                <p className="mt-2 text-sm text-muted">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          /contact
            <Button variant="outline">Enquire Now</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
