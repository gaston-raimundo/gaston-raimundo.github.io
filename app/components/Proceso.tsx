// =========================================================
// Proceso consultivo — cómo trabajo con cada cliente
// =========================================================

const pasos = [
  {
    numero: "1",
    titulo: "Reunión de diagnóstico",
    detalle:
      "Sesión inicial (30–60 min, sin cargo) para entender el contexto, los dolores actuales y el estado del ecosistema de datos. No hay PowerPoint ni venta — sólo escucha estructurada.",
    icono: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    numero: "2",
    titulo: "Propuesta personalizada",
    detalle:
      "Documento consultivo a medida con alcance por fases, entregables verificables y recomendaciones específicas. Viene acompañado de una presentación visual y, cuando ayuda, un video explicativo.",
    icono: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    numero: "3",
    titulo: "Entrega por fases",
    detalle:
      "Cada fase se factura y se cierra contra entregables verificables antes de avanzar a la siguiente. No hay compromisos de años — hay evolución por pasos cortos y validados.",
    icono: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    numero: "4",
    titulo: "Documentación y transferencia",
    detalle:
      "Todo lo desarrollado queda documentado y transferido al cliente. Tu equipo no depende de mí para seguir operando — esa es la prueba de que el trabajo está bien hecho.",
    icono: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

const entregables = [
  {
    titulo: "Propuesta consultiva",
    items: ["Word formal", "Presentación (.pptx + PDF)", "Video explicativo opcional"],
    color: "bg-primary-900/30 border-primary-700/50 text-primary-300",
  },
  {
    titulo: "Trabajo técnico",
    items: ["Excels saneados", "Scripts Python", "Queries SQL", "Modelos Power BI", "Dashboards"],
    color: "bg-industrial-500/10 border-industrial-500/40 text-industrial-300",
  },
  {
    titulo: "Documentación",
    items: ["Diagramas de flujo", "Flujogramas de datos", "Guías de uso", "Manuales de operación"],
    color: "bg-slate-700/40 border-slate-600 text-slate-300",
  },
  {
    titulo: "Transferencia",
    items: ["Código comentado", "Repositorio versionado", "Capacitación al equipo", "Roadmap de continuidad"],
    color: "bg-emerald-900/20 border-emerald-700/40 text-emerald-300",
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="py-14">
      <div className="section">
        <h2 className="section-title">Cómo trabajo</h2>
        <p className="text-slate-400 -mt-6 mb-8 text-base leading-relaxed max-w-3xl">
          Un enfoque consultivo por fases cortas y validadas, con documentación
          y transferencia al equipo del cliente como parte del entregable. Sin
          dependencias eternas, sin cajas negras.
        </p>

        {/* Pasos del proceso */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {pasos.map((paso) => (
            <div
              key={paso.numero}
              className="relative card border-slate-700 bg-surface/60 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary-900/50 border border-primary-700 flex items-center justify-center text-primary-400 shrink-0">
                  {paso.icono}
                </span>
                <span className="text-industrial-400 font-black text-2xl leading-none">
                  {paso.numero}
                </span>
              </div>
              <h3 className="text-white font-semibold text-base leading-snug">
                {paso.titulo}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {paso.detalle}
              </p>
            </div>
          ))}
        </div>

        {/* Entregables — qué recibe el cliente */}
        <div className="card border-slate-700 bg-slate-900/40 p-6 md:p-8">
          <div className="mb-6">
            <span className="chip-accent mb-3">Qué recibe el cliente</span>
            <h3 className="text-white font-bold text-xl mt-3 mb-2">
              Entregables por tipo
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
              Cada engagement combina entregables de los 4 grupos. El volumen
              depende de la fase y del alcance acordado en la propuesta.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {entregables.map((grupo) => (
              <div
                key={grupo.titulo}
                className={`rounded-xl border p-4 ${grupo.color}`}
              >
                <p className="font-bold text-sm mb-3 uppercase tracking-wider opacity-90">
                  {grupo.titulo}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {grupo.items.map((item) => (
                    <li key={item} className="text-xs leading-relaxed flex gap-1.5">
                      <span className="opacity-60">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Propiedad intelectual */}
          <div className="mt-6 pt-6 border-t border-slate-700 flex flex-col md:flex-row gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-industrial-500/20 border border-industrial-500/40 flex items-center justify-center text-industrial-400 shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-1">
                Propiedad intelectual del cliente
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Todo el código, modelos, documentación, dashboards y scripts
                desarrollados son <span className="text-white font-medium">propiedad exclusiva del cliente</span>.
                Sin licencias, sin suscripciones atadas, sin dependencia del consultor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
