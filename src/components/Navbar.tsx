
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/programmes", label: "Programmes" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition ${
        scrolled ? "bg-white/90 backdrop-blur border-black/10" : "bg-white border-black/5"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          /
            UK Inbound Ground Transport
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
            {links.map(({ href, label }) => (
              {href}
                {label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden rounded-lg border border-black/10 px-3 py-2 text-sm"
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 rounded-xl bg-cloud p-3">
              {links.map(({ href, label }) => (
                {href} => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-steel hover:bg-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
