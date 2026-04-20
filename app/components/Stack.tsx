// =========================================================
// Stack — presentación compacta, secundaria al proceso/fases
// =========================================================

const stackCategories = [
  {
    categoria: "Business Intelligence",
    color: "from-blue-600 to-cyan-500",
    items: [
      { nombre: "Power BI", detalle: "DAX · Power Query · RLS · Dashboards ejecutivos" },
      { nombre: "Excel Avanzado", detalle: "Power Pivot · Power Query · Macros · Automatización" },
    ],
  },
  {
    categoria: "Datos & Backend",
    color: "from-violet-600 to-purple-500",
    items: [
      { nombre: "SQL", detalle: "Joins complejos · CTEs · Subqueries · Performance" },
      { nombre: "Python", detalle: "Automatización · ETL · APIs · Scripts productivos" },
      { nombre: "VBA / Macros", detalle: "Automatización de Excel · Formularios · Procesos" },
      { nombre: ".NET", detalle: "Integración y procesamiento de datos" },
    ],
  },
  {
    categoria: "Habilidades analíticas",
    color: "from-emerald-600 to-teal-500",
    items: [
      { nombre: "Diseño de KPIs", detalle: "OEE · MTBF · MTTR · Producción · Compras" },
      { nombre: "Modelado de datos", detalle: "Estrella · Copo de nieve · Cardinalidad" },
      { nombre: "ETL / Power Query M", detalle: "Transformación · Limpieza · Integración" },
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="py-14 bg-surface/30">
      <div className="section">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <h2 className="section-title !mb-0">Stack técnico</h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs text-right">
            Herramientas que uso en el día a día. Lo importante es el proceso — no el stack.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stackCategories.map((cat) => (
            <div key={cat.categoria}>
              <div className={`inline-block text-[10px] font-bold uppercase tracking-widest
                              bg-gradient-to-r ${cat.color} bg-clip-text text-transparent mb-4`}>
                {cat.categoria}
              </div>

              <div className="flex flex-col gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item.nombre}
                    className="rounded-lg border border-slate-800 bg-slate-900/40 p-3"
                  >
                    <p className="text-white font-medium text-sm mb-0.5">{item.nombre}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.detalle}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
