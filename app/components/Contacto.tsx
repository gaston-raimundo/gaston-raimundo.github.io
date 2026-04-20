"use client";

import { useState } from "react";

const contactLinks = [
  {
    label: "Email",
    valor: "gaston.rai28@gmail.com",
    href: "mailto:gaston.rai28@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    valor: "gaston-raimundo-3a287a213",
    href: "https://linkedin.com/in/gaston-raimundo-3a287a213/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Ubicación",
    valor: "Corrientes, Argentina",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const serviciosOpciones = [
  "Auditoría gratuita de Excels / reportes (30 min)",
  "Fase 1 — Saneamiento de Excels y reportes",
  "Fase 2 — Automatización (Python + web/móvil)",
  "Fase 3 — Integraciones ERP / SCADA / HMI",
  "Dashboard Power BI puntual",
  "Consulta general",
];

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    servicio: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Consulta BI${form.empresa ? ` — ${form.empresa}` : ""}${form.servicio ? ` | ${form.servicio}` : ""}`
    );
    const body = encodeURIComponent(
      `Hola Gaston,\n\n` +
      `Me contacto desde el formulario de tu sitio web.\n\n` +
      `Nombre: ${form.nombre}\n` +
      `Empresa: ${form.empresa || "—"}\n` +
      `Email: ${form.email}\n` +
      `Servicio de interés: ${form.servicio || "—"}\n\n` +
      `Mensaje:\n${form.mensaje}\n\n` +
      `Saludos`
    );
    window.location.href = `mailto:gaston.rai28@gmail.com?subject=${subject}&body=${body}`;
    setEnviado(true);
    setForm({ nombre: "", empresa: "", email: "", servicio: "", mensaje: "" });
    setTimeout(() => setEnviado(false), 8000);
  };

  const inputClass =
    "w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3 text-white " +
    "placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500 " +
    "focus:ring-1 focus:ring-primary-500/40 transition-colors duration-200";

  const activarAuditoria = () => {
    setForm((prev) => ({
      ...prev,
      servicio: "Auditoría gratuita de Excels / reportes (30 min)",
      mensaje:
        prev.mensaje ||
        "Me interesa agendar la auditoría gratuita de 30 min. Contame brevemente los reportes o Excels que hoy nos generan más fricción y coordinemos un horario.",
    }));
    // Llevar al form
    setTimeout(() => {
      const form = document.getElementById("contacto-form");
      form?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <section id="contacto" className="py-14 bg-surface/20">
      <div className="section">
        <h2 className="section-title">Contacto</h2>

        {/* Lead magnet — auditoría gratuita */}
        <div className="mb-8 rounded-2xl border border-industrial-500/40 bg-gradient-to-br from-industrial-500/10 via-surface/60 to-surface p-6 md:p-8 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-industrial-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <div className="chip-accent mb-3">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Oferta sin compromiso
              </div>
              <h3 className="text-white font-bold text-xl md:text-2xl mb-2 leading-tight">
                Auditoría gratuita de Excels y reportes <span className="text-industrial-400">(30 min)</span>
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Agendamos una sesión corta, revisamos los reportes que más fricción
                generan y te devuelvo 2–3 recomendaciones concretas por escrito.
                <span className="text-slate-400"> Sin presentación comercial, sin obligación posterior.</span>
              </p>
            </div>
            <button
              type="button"
              onClick={activarAuditoria}
              className="btn-accent shrink-0 whitespace-nowrap"
            >
              Pedir auditoría gratuita
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Columna izquierda — info (2/5) */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                ¿Tenés datos sin explotar, reportes manuales o necesitás visibilidad
                gerencial centralizada?{" "}
                <span className="text-white font-semibold">Hablemos.</span>
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Puedo ayudarte a diseñar una solución analítica a medida — desde
                sanear los Excels que hoy sostienen la operación hasta un roadmap
                de evolución por fases hacia Industria 4.0.
              </p>
            </div>

            {/* Links de contacto */}
            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <div key={link.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-900/40 border border-primary-800
                                  flex items-center justify-center text-primary-400 shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                      {link.label}
                    </p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary-400 transition-colors font-medium text-sm"
                      >
                        {link.valor}
                      </a>
                    ) : (
                      <span className="text-white font-medium text-sm">{link.valor}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Tiempo de respuesta */}
            <div className="card border-primary-800 bg-primary-900/20 py-4 px-5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                <p className="text-slate-300 text-sm">
                  Respondo en menos de <span className="text-white font-semibold">24 horas</span>
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha — formulario (3/5) */}
          <div className="md:col-span-3" id="contacto-form">
            <div className="card border-slate-700 bg-surface/60 p-8">
              <h3 className="text-white font-bold text-lg mb-6">
                Contame sobre tu proyecto
              </h3>

              {enviado && (
                <div className="mb-5 p-4 rounded-xl bg-green-900/30 border border-green-700 flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-300 text-sm">
                    ¡Mensaje listo! Tu cliente de correo se abrió — revisá y presioná Enviar.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Nombre + Empresa */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder="Juan García"
                      value={form.nombre}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Nombre de tu empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="juan@empresa.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Servicio */}
                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5">
                    Servicio de inter&eacute;s
                  </label>
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Seleccion&aacute; una opci&oacute;n...</option>
                    {serviciosOpciones.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    rows={5}
                    placeholder="Contame brevemente tu situaci&oacute;n, los reportes o Excels con fricci&oacute;n, y qu&eacute; te gustar&iacute;a resolver..."
                    value={form.mensaje}
                    onChange={handleChange}
                    className={inputClass + " resize-none"}
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-accent w-full justify-center mt-2">
                  Enviar consulta
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>

                <p className="text-slate-500 text-xs text-center leading-relaxed mt-1">
                  Al enviar se abrir&aacute; tu cliente de correo con el mensaje precargado.
                  Nada se env&iacute;a autom&aacute;ticamente &mdash; ten&eacute;s el control total.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
