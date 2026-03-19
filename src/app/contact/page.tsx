import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

export default function ContactPage() {
  return (
    <section className="py-20 bg-paper">
      <Container>
        <Reveal>
          <h1 className="text-4xl font-semibold text-ink">Contact</h1>

          <p className="mt-5 max-w-3xl text-muted leading-relaxed">
            Contact our operations team with your programme details. We respond promptly with
            structured planning and clear operational support.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">

          {/* LEFT: DIRECT CONTACT */}
          <Reveal>
            <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-sm">
              <p className="font-semibold text-steel text-lg">Direct Contact</p>

              <p className="mt-4 text-sm text-muted">
                Email: <span className="font-medium text-steel">info@ukinboundgroundtransport.com</span><br />
                Landline: <span className="font-medium text-steel">020 8629 2776</span><br />
                Mobile / WhatsApp: <span className="font-medium text-steel">+44 7957 776 778</span>
              </p>

              <div className="mt-6 flex gap-3">
                info@ukinboundgroundtransport.com
                  <Button>Email Us</Button>
                </a>

                tel:+447957776778
                  <Button variant="outline">Call Us</Button>
                </a>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: ENQUIRY FORM */}
          <Reveal>
            info@ukinboundgroundtransport.com
              <p className="font-semibold text-steel text-lg">Enquiry Form</p>

              <div className="mt-4 grid gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm"
                />
                <textarea
                  name="message"
                  placeholder="Programme details (dates, group size, routing)"
                  required
                  className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm min-h-[120px]"
                />
              </div>

              <div className="mt-6">
                <Button type="submit">Send Enquiry</Button>
              </div>

              <p className="mt-3 text-xs text-muted">
                Your email application will handle delivery.
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
