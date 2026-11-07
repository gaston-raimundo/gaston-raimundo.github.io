"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { services, site } from "../lib/content";

/**
 * Formulario sin backend: arma un mail y lo abre en el cliente de correo del
 * visitante. No envía datos a ningún servidor.
 */
export default function ContactForm() {
  const params = useSearchParams();
  const pre = params.get("servicio") ?? "";
  const initial = services.some((s) => s.id === pre) ? pre : "";
  const [service, setService] = useState(initial);
  const [opened, setOpened] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("nombre") ?? "").trim();
    const company = String(data.get("empresa") ?? "").trim();
    const message = String(data.get("mensaje") ?? "").trim();
    const s = services.find((x) => x.id === service);
    const subject = `Diagnóstico${s ? ` · ${s.title}` : ""}${company ? ` · ${company}` : ""}`;
    const header = [`Nombre: ${name}`];
    if (company) header.push(`Empresa: ${company}`);
    if (s) header.push(`Solución de interés: ${s.title}`);
    const body = `${header.join("\n")}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  const field =
    "mt-1.5 block w-full min-h-[48px] rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base text-ink placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

  return (
    <form onSubmit={onSubmit} className="card flex flex-col gap-5 p-6 sm:p-8" aria-describedby="nota-form">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-[15px] font-semibold">
          Nombre
          <input name="nombre" required autoComplete="name" className={field} />
        </label>
        <label className="text-[15px] font-semibold">
          Empresa
          <input name="empresa" autoComplete="organization" className={field} />
        </label>
      </div>
      <label className="text-[15px] font-semibold">
        Solución de interés
        <select name="servicio" value={service} onChange={(e) => setService(e.target.value)} className={field}>
          <option value="">Todavía no sé / quiero un diagnóstico</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.id === "S1" ? `Faktori · ${s.title}` : s.title}
            </option>
          ))}
        </select>
      </label>
      <label className="text-[15px] font-semibold">
        ¿Cómo trabaja hoy tu equipo?
        <textarea
          name="mensaje"
          required
          rows={6}
          placeholder="Por ejemplo: programamos la producción en hojas de cálculo y comparamos lo real a mano todos los lunes."
          className={`${field} resize-y`}
        />
      </label>
      <button type="submit" className="btn self-start">
        Preparar el mail
      </button>
      <p id="nota-form" className="text-sm text-muted" aria-live="polite">
        {opened
          ? `Si no se abrió tu programa de correo, escribinos a ${site.email}.`
          : "El formulario abre tu programa de correo con el mensaje armado. No se guarda ningún dato en este sitio."}
      </p>
    </form>
  );
}
