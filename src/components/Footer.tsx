import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-16">
      <Container>
        <div className="py-10 text-sm text-muted flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} UK Inbound Ground Transport.</p>
          <p>
            Contact:{" "}
            <span className="text-steel font-medium">info@ukinboundgroundtransport.com</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
