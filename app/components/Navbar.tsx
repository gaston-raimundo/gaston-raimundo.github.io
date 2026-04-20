"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Fases", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Demos", href: "#demos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-md border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / nombre */}
        <a
          href="#hero"
          className="font-bold text-white text-lg tracking-tight hover:text-primary-400 transition-colors"
        >
          GR<span className="text-primary-500">.</span>
        </a>

        {/* Links — desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <a
          href="#contacto"
          className="hidden md:inline-flex btn-accent text-sm py-2 px-4"
        >
          Auditoría gratis
        </a>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-md border-b border-slate-800 px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-slate-300 hover:text-white font-medium py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="btn-accent text-sm py-2 w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Auditoría gratis
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
