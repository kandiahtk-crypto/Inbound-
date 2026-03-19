"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={header}>
      <div style={container}>
        {/* LOGO */}
        <a href="/" style={logo}>
          UKIGT
        </a>

        {/* DESKTOP MENU */}
        <nav style={desktopNav}>
          <a href="/" style={link}>Home</a>
          <a href="/about" style={link}>About</a>
          <a href="/services" style={link}>Services</a>
          <a href="/programmes" style={link}>Programmes</a>
          <a href="/contact" style={cta}>Contact</a>
        </nav>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} style={menuButton}>
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
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

/* STYLES */

const header: React.CSSProperties = {
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000,
  background: "rgba(10, 15, 25, 0.9)",
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

/* DESKTOP MENU (hidden on small screens) */
const desktopNav: React.CSSProperties = {
  display: "none",
  gap: "28px",
  alignItems: "center",
};

/* MOBILE BUTTON */
const menuButton: React.CSSProperties = {
  background: "none",
  border: "none",
  color: "#E6F0FA",
  fontSize: "26px",
  cursor: "pointer",
};

/* LINKS */
const link: React.CSSProperties = {
  color: "#E6F0FA",
  textDecoration: "none",
  fontSize: "14px",
};

const cta: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  padding: "10px 18px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: 700,
};

/* MOBILE MENU */
const mobileMenu: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  padding: "20px",
  background: "#0A0A0A",
};

const mobileLink: React.CSSProperties = {
  color: "#E6F0FA",
  textDecoration: "none",
  fontSize: "16px",
};

const mobileCta: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  padding: "12px",
  borderRadius: "999px",
  textAlign: "center",
  textDecoration: "none",
  fontWeight: 700,
};
