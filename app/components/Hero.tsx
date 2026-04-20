"use client";

import { useState } from "react";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con gradiente y grilla */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-surface to-dark" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow central */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-industrial-500/10 rounded-full blur-3xl" />

      {/* Contenido */}
      <div className="relative z-10 section text-center animate-fade-in">
        <span className="badge mb-6 inline-flex">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Disponible para proyectos consultivos
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight leading-none">
          Gaston
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-industrial-400">
            Raimundo
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 font-medium mb-3">
          Data Analyst Senior &middot; Consultor en automatizacion de datos
        </p>
        <p className="text-slate-500 mb-8 flex items-center justify-center gap-2 text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          Corrientes, Argentina &middot; Remoto &middot; Industria &amp;
          Servicios
        </p>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Diseño ecosistemas de datos para áreas productivas y administrativas{" "}
          <span className="text-white font-semibold">
            integrando reportes, automatizaciones y dashboards en una capa
            única,
          </span>{" "} escalable hacia BI e Industria 4.0 por fases.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#servicios" className="btn-primary">
            Ver enfoque por fases
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="btn-accent"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Ver video (60s)
          </button>
          <a
            href="https://linkedin.com/in/gaston-raimundo-3a287a213/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Modal video */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            aria-label="Cerrar"
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="w-[95vw] max-w-[1600px] aspect-video rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/Qa-txWclDG8?autoplay=1&rel=0&vq=hd1080&hd=1"
              title="Gaston Raimundo - Consultor en automatizacion de datos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
