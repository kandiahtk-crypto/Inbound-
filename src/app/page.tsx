import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main style={{ fontFamily: "Arial, sans-serif", paddingTop: "80px" }}>
        
        {/* HERO */}
        <section
          style={{
            padding: "100px 20px",
            textAlign: "center",
            background: "#0A0A0A",
            color: "white",
          }}
        >
          <h1 style={{ fontSize: "40px", color: "#D4AF37" }}>
            Reliable UK & Ireland Ground-Transport Solutions
          </h1>

          <p style={{ maxWidth: "700px", margin: "20px auto", color: "#ccc" }}>
            Premium touring logistics for international operators across England,
            Scotland, Wales and Ireland. Structured, reliable and professionally
            delivered.
          </p>
        </section>

        {/* SERVICES */}
        <section style={{ padding: "80px 20px", background: "#E6F0FA" }}>
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
            Our Core Services
          </h2>

          <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gap: "20px" }}>
            <Card title="Fixed-Departure Series" />
            <Card title="Multi-Region UK Touring" />
            <Card title="UK–Ireland Integration" />
          </div>
        </section>

        {/* WHY US */}
        <section style={{ padding: "80px 20px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
            Why Operators Choose Us
          </h2>

          <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gap: "20px" }}>
            <Card title="Structured Operations" />
            <Card title="Reliable Delivery" />
            <Card title="International Market Alignment" />
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            padding: "80px 20px",
            background: "#0A0A0A",
            color: "white",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#D4AF37" }}>
            Ready to plan your next touring programme?
          </h2>

          <a
            href="/contact"
            style={{
              display: "inline-block",
              marginTop: "20px",
              background: "#D4AF37",
              color: "#0A0A0A",
              padding: "12px 20px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Contact Us
          </a>
        </section>

      </main>
    </>
  );
}

function Card({ title }: { title: string }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        borderLeft: "5px solid #D4AF37",
      }}
    >
      <h3>{title}</h3>
    </div>
  );
}
