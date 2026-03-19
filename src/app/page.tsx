import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-paper">
        <div className="absolute inset-0 bg-grid opacity-[0.25]" />

        <Container>
          <div className="py-20 md:py-28">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em] text-muted">
                UK Inbound Ground Transport
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl md:text-6xl font-semibold tracking-tight text-ink leading-tight">
                Reliable Ground‑Transport Solutions for UK & Ireland Touring
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-muted leading-relaxed">
                Professional, structured and dependable touring logistics for international tour 
                operators, built around consistency, clear communication and nationwide coverage 
                across England, Scotland, Wales and Ireland.
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                /contact
                  <Button>Plan Your Programme</Button>
                </Link>

                /contact
                  <Button variant="outline">Speak With Operations</Button>
                </Link>
              </div>
            </Reveal>

            {/* HERO IMAGE / VISUAL */}
            <div className="mt-14 md:mt-0 md:absolute md:right-0 md:top-24 md:w-[40%]">
              <Reveal>
                <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-md">
                  <div className="h-64 md:h-80 rounded-xl bg-cloud grid place-items-center text-muted text-sm">
                    Hero Image Placeholder — Coach / UK Map
                  </div>
                  <p className="mt-3 text-xs text-muted">
                    Replace this placeholder with your branded hero image.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-20 bg-paper">
        <Container>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">Professional. Structured. Reliable.</h2>

            <p className="mt-5 max-w-3xl text-muted leading-relaxed">
              We provide corporate‑grade touring operations for inbound travel partners requiring 
              reliability, clarity and consistent delivery standards. Our transport model supports 
              long‑haul market expectations and ensures smooth day‑to‑day touring.
            </p>

            <div className="mt-6">
              /about
                <Button>Learn More</Button>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-paper">
        <Container>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              Our Core Services
            </p>
          </Reveal>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Fixed‑Departure Series",
                d: "Season‑long, repeatable touring operations with consistent timings and delivery."
              },
              {
                t: "Multi‑Region UK Touring",
                d: "Balanced itineraries across England, Scotland and Wales."
              },
              {
                t: "UK–Ireland Integrated Touring",
                d: "Seamless British Isles transport with cross‑country continuity."
              },
              {
                t: "Large Group Coordination",
                d: "Expert handling for high‑volume and multi‑coach touring programmes."
              }
            ].map((item) => (
              <Reveal key={item.t}>
                <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-sm hover:shadow-md transition">
                  <p className="font-semibold text-steel">{item.t}</p>
                  <p className="mt-2 text-sm text-muted">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            /services
              <Button variant="outline">Explore Services</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* MARKETS SECTION */}
      <section className="py-20 bg-cloud border-y border-black/5">
        <Container>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-muted">Markets We Serve</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">Built Around International Operator Requirements</h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { t: "United States", d: "Balanced pacing and smooth multi‑region touring." },
              { t: "India", d: "High‑energy multi‑destination flows with efficient timings." },
              { t: "China", d: "Precise scheduling and photo‑friendly pacing." },
              { t: "Europe", d: "Flexible routing and short‑stay travel support." },
            ].map((item) => (
              <Reveal key={item.t}>
                <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-sm hover:shadow-md transition">
                  <p className="font-semibold text-steel">{item.t}</p>
                  <p className="mt-2 text-sm text-muted">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA BOX */}
          <Reveal className="mt-14">
            <div className="rounded-2xl bg-white border border-black/10 p-8 shadow-sm flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <p className="text-lg font-semibold text-ink">
                Ready to plan your next touring programme?
              </p>

              /contact
                <Button>Contact Us</Button>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
