// Categorías del stack tecnológico
const stackCategories = [
  {
    categoria: "Business Intelligence",
    color: "from-blue-600 to-cyan-500",
    items: [
      { nombre: "Power BI", nivel: 95, detalle: "DAX avanzado · Power Query · RLS · Dashboards ejecutivos" },
      { nombre: "Excel Avanzado", nivel: 90, detalle: "Power Pivot · Power Query · Tablas dinámicas · Segmentaciones" },
    ],
  },
  {
    categoria: "Datos & Backend",
    color: "from-violet-600 to-purple-500",
    items: [
      { nombre: "SQL", nivel: 85, detalle: "Joins complejos · CTEs · Subqueries · Optimización de performance" },
      { nombre: "VBA / Macros", nivel: 80, detalle: "Automatización · Formularios · Macros de Excel" },
      { nombre: ".NET", nivel: 65, detalle: "Integración y procesamiento de datos" },
    ],
  },
  {
    categoria: "Habilidades analíticas",
    color: "from-emerald-600 to-teal-500",
    items: [
      { nombre: "Diseño de KPIs", nivel: 90, detalle: "OEE · MTBF · MTTR · KPIs de producción y compras" },
      { nombre: "Modelado de datos", nivel: 88, detalle: "Estrella · Copo de nieve · Relaciones · Cardinalidad" },
      { nombre: "ETL / Power Query M", nivel: 85, detalle: "Transformación · Limpieza · Integración de fuentes" },
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="py-20 bg-surface/30">
      <div className="section">
        <h2 className="section-title">Stack Tecnológico</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stackCategories.map((cat) => (
            <div key={cat.categoria}>
              {/* Header de categoría */}
              <div className={`inline-block text-xs font-bold uppercase tracking-widest
                              bg-gradient-to-r ${cat.color} bg-clip-text text-transparent mb-6`}>
                {cat.categoria}
              </div>

              {/* Items */}
              <div className="flex flex-col gap-5">
                {cat.items.map((item) => (
                  <div key={item.nombre}>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <span className="text-white font-medium text-sm">{item.nombre}</span>
                      <span className="text-slate-500 text-xs">{item.nivel}%</span>
                    </div>

                    {/* Barra de progreso */}
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden mb-1.5">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color} transition-all duration-700`}
                        style={{ width: `${item.nivel}%` }}
                      />
                    </div>

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
