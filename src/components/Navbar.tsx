"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={header}>
      <div style={container}>
        <span style={logo}>UKIGT</span>

        {/* DESKTOP */}
        <nav style={desktopNav}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/programmes">Programmes</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} style={menuBtn}>
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div style={mobileMenu}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/programmes">Programmes</a>
          <a href="/contact">Contact</a>
        </div>
      )}
    </header>
  );
}

/* STYLES */
const header = {
  position: "fixed",
  top: 0,
  width: "100%",
  background: "#0A0A0A",
  borderBottom: "1px solid #222",
  zIndex: 1000,
};

const container = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
};

const logo = { color: "#D4AF37" };

const desktopNav = {
  display: "flex",
  gap: "20px",
};

const menuBtn = {
  fontSize: "20px",
  background: "none",
  color: "white",
  border: "none",
};

const mobileMenu = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  background: "#111",
};
