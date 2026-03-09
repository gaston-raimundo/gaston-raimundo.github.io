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
  "Dashboard Power BI",
  "Automatización Excel / VBA",
  "Modelado de datos SQL",
  "KPIs estratégicos",
  "Integración de datos PLC",
  "Otro",
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

  return (
    <section id="contacto" className="py-20 bg-surface/20">
      <div className="section">
        <h2 className="section-title">Contacto</h2>

        <div className="grid md:grid-cols-5 gap-10 items-start">
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
                automatizar tus reportes de producción en Excel hasta implementar
                dashboards Power BI conectados a tus datos de planta.
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
          <div className="md:col-span-3">
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
                    ¿Qué servicio necesitás?
                  </label>
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    className={inputClass + " cursor-pointer"}
                  >
                    <option value="">Seleccioná una opción...</option>
                    {serviciosOpciones.map((s) => (
                      <option key={s} value={s}>{s}</option>
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
                    rows={4}
                    placeholder="Contame brevemente tu situación actual y qué necesitás resolver..."
                    value={form.mensaje}
                    onChange={handleChange}
                    className={inputClass + " resize-none"}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary w-full justify-center mt-1"
                >
                  Enviar mensaje
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>

                <p className="text-slate-600 text-xs text-center">
                  Al enviar se abrirá tu cliente de correo con el mensaje pre-completado.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
