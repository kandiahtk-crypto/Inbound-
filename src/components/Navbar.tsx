"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={header}>
      <div style={container}>
        <a href="/" style={logo}>
          UKIGT
        </a>

        <button
          onClick={() => setOpen(!open)}
          style={menuButton}
          aria-label="Open menu"
        >
          ☰
        </button>

        <nav style={desktopNav}>
          <a href="/" style={link}>Home</a>
          <a href="/about" style={link}>About</a>
          <a href="/services" style={link}>Services</a>
          <a href="/programmes" style={link}>Programmes</a>
          <a href="/contact" style={cta}>Contact</a>
        </nav>
      </div>

      {open && (
        <div style={mobileMenu}>
          <a href="/" style={mobileLink}>Home</a>
          <a href="/about" style={mobileLink}>About</a>
          <a href="/services" style={mobileLink}>Services</a>
          <a href="/programmes" style={mobileLink}>Programmes</a>
          <a href="/contact" style={mobileCta}>Contact</a>
        </div>
      )}
    </header>
  );
}

const header: React.CSSProperties = {
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000,
  background: "rgba(10, 15, 25, 0.92)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255,255,255,0.05)",
};

const container: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "18px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logo: React.CSSProperties = {
  color: "#D4AF37",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "18px",
  letterSpacing: "0.12em",
};

const menuButton: React.CSSProperties = {
  background: "transparent",
  border: "none",
  color: "#E6F0FA",
  fontSize: "28px",
  cursor: "pointer",
};

const desktopNav: React.CSSProperties = {
  display: "none",
};

const link: React.CSSProperties = {
  color: "#E6F0FA",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
};

const cta: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  textDecoration: "none",
  padding: "10px 18px",
  borderRadius: "999px",
  fontWeight: 700,
  fontSize: "14px",
};

const mobileMenu: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  padding: "18px 20px 22px",
  background: "rgba(10, 15, 25, 0.98)",
  borderTop: "1px solid rgba(255,255,255,0.05)",
};

const mobileLink: React.CSSProperties = {
  color: "#E6F0FA",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: 500,
};

const mobileCta: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  textDecoration: "none",
  padding: "12px 18px",
  borderRadius: "999px",
  fontWeight: 700,
  fontSize: "15px",
  textAlign: "center",
};
