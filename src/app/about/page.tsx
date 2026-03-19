import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import Button from "@/components/Button";

export default function AboutPage() {
  return (
    <section className="py-20 bg-paper">
      <Container>
        <Reveal>
          <h1 className="text-4xl font-semibold text-ink">About Us</h1>

          <p className="mt-5 max-w-3xl text-muted leading-relaxed">
            UK Inbound Ground Transport provides structured, reliable and corporate‑grade touring
            logistics for inbound operators across England, Scotland, Wales and Ireland. Our mission
            is to deliver dependable, professional and precisely managed ground‑transport
            operations that strengthen your touring programmes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Our Mission",
              d: "To deliver dependable, high‑quality transport operations for inbound touring partners."
            },
            {
              t: "Our Approach",
              d: "Clear communication, structured routing, balanced pacing and reliable daily execution."
            },
            {
              t: "Coverage",
              d: "Nationwide UK operations with seamless touring continuity into Ireland."
            }
          ].map((item) => (
            <Reveal key={item.t}>
              <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-sm">
                <p className="text-steel font-semibold text-lg">{item.t}</p>
                <p className="mt-2 text-sm text-muted">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          /contact
            <Button>Contact Operations</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
