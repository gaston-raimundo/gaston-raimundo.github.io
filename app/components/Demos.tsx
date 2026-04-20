const demos = [
  {
    id: "food-factory",
    titulo: "Fábrica de Alimentos — Analytics Demo",
    descripcion:
      "Solución analítica completa para una fábrica de productos alimenticios basados en frutas. Incluye dataset de producción real (694 registros), Excel automatizado con macros VBA, y dashboard interactivo estilo Power BI con 4 páginas de análisis.",
    tags: ["Power BI", "Excel + VBA", "Chart.js", "Python", "SQL"],
    metricas: [
      { valor: "694", label: "Registros de producción" },
      { valor: "4", label: "Líneas analizadas" },
      { valor: "6", label: "Hojas Excel automatizadas" },
      { valor: "12", label: "KPIs calculados" },
    ],
    linkDemo: "https://gaston-raimundo.github.io/food-factory-analytics/",
    linkRepo: "https://github.com/gaston-raimundo/food-factory-analytics",
    icono: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    color: "from-primary-900/40 to-surface",
    accentColor: "text-primary-400",
    borderColor: "border-primary-800",
  },
];

// Ícono de pantalla / browser mock para visualización
function BrowserMock({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl overflow-hidden border border-slate-700 hover:border-primary-600 transition-colors duration-300 group"
    >
      {/* Barra del navegador */}
      <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-2 border-b border-slate-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 bg-slate-700 rounded-md px-3 py-1 mx-2">
          <span className="text-slate-400 text-xs font-mono truncate block">
            gaston-raimundo.github.io/food-factory-analytics
          </span>
        </div>
        <svg
          className="w-3.5 h-3.5 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>

      {/* Contenido del dashboard simulado */}
      <div className="bg-[#0d1b2a] p-4 h-44 relative overflow-hidden">
        {/* Sidebar simulado */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#0a1520] border-r border-slate-800 flex flex-col items-center gap-2 pt-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`w-6 h-6 rounded-md ${i === 0 ? "bg-primary-600" : "bg-slate-700"}`} />
          ))}
        </div>

        {/* KPI cards simuladas */}
        <div className="ml-14 grid grid-cols-3 gap-1.5 mb-2">
          {[
            { label: "OEE", val: "82.4%" },
            { label: "Paros", val: "14" },
            { label: "Eficiencia", val: "91%" },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-[#152032] rounded-lg p-1.5 border border-slate-700 min-w-0">
              <p className="text-[8px] text-slate-500 mb-0.5 truncate">{kpi.label}</p>
              <p className="text-primary-400 font-bold text-xs truncate">{kpi.val}</p>
            </div>
          ))}
        </div>

        {/* Gráfico de barras simulado */}
        <div className="ml-14 bg-[#152032] rounded-lg p-2 border border-slate-700">
          <p className="text-[9px] text-slate-500 mb-2">Producción por Línea</p>
          <div className="flex items-end gap-1.5 h-12">
            {[75, 88, 62, 91, 70, 83, 55, 94, 68, 79].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: i % 3 === 0 ? "#2563eb" : i % 3 === 1 ? "#1c7293" : "#1e3a8a",
                  opacity: 0.85,
                }}
              />
            ))}
          </div>
        </div>

        {/* Overlay hover */}
        <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary-600 text-white text-xs font-semibold px-4 py-2 rounded-full">
            Ver demo en vivo →
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Demos() {
  return (
    <section id="demos" className="py-14">
      <div className="section">
        <h2 className="section-title">Demos</h2>
        <p className="text-slate-400 -mt-6 mb-8 text-base leading-relaxed max-w-2xl">
          Proyectos reales desplegados en producción. Hacé clic en cualquier demo
          para explorarlo en vivo.
        </p>

        {demos.map((demo) => (
          <div
            key={demo.id}
            className={`card ${demo.borderColor} bg-gradient-to-br ${demo.color} p-0 overflow-hidden`}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Columna izquierda — info */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                {/* Header */}
                <div>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-900/50 border border-primary-800 ${demo.accentColor} mb-5`}>
                    {demo.icono}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 leading-snug">
                    {demo.titulo}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {demo.descripcion}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {demo.tags.map((tag) => (
                      <span key={tag} className="badge text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Métricas */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {demo.metricas.map((m) => (
                    <div
                      key={m.label}
                      className="bg-slate-900/50 rounded-xl px-4 py-3 border border-slate-700"
                    >
                      <p className={`text-2xl font-bold ${demo.accentColor}`}>{m.valor}</p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-tight">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={demo.linkDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2.5 px-5 flex-1 sm:flex-none justify-center"
                  >
                    Ver demo en vivo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href={demo.linkRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2.5 px-5 flex-1 sm:flex-none justify-center"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Ver repositorio
                  </a>
                </div>
              </div>

              {/* Columna derecha — browser mock */}
              <div className="p-4 md:p-6 flex flex-col justify-center bg-slate-900/20 border-t md:border-t-0 md:border-l border-slate-800">
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-3 font-medium">
                  Preview interactivo
                </p>
                <BrowserMock href={demo.linkDemo} />
                <p className="text-slate-600 text-xs text-center mt-3">
                  Clic para abrir el dashboard completo
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Próximamente */}
        <div className="mt-8 card border-dashed border-slate-600 bg-transparent text-center py-10">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <h4 className="text-slate-400 font-semibold mb-1">Próximamente: Demo SQL + Power BI</h4>
          <p className="text-slate-600 text-sm">
            Schema de base de datos para industria, KPIs con CTEs y dashboard .pbix real.
          </p>
        </div>
      </div>
    </section>
  );
}
