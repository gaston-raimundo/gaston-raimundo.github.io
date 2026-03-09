const experiencias = [
  {
    empresa: "ABSTI",
    cliente: "Cliente: Galicia Seguros",
    rol: "Data Analyst Senior",
    periodo: "Ago 2023 – Presente",
    ubicacion: "Argentina · Remoto",
    activo: true,
    puntos: [
      "Desarrollo y mantenimiento de dashboards Power BI para la operación de Galicia Seguros",
      "Modelado DAX avanzado con métricas de negocio y KPIs de siniestralidad y producción",
      "Implementación de Row-Level Security (RLS) para control granular de acceso por perfil",
      "Automatización de ETL mediante Power Query M para múltiples fuentes de datos",
    ],
  },
  {
    empresa: "IDONEO SA",
    cliente: "España · Remoto",
    rol: "Data Analyst Semi Senior",
    periodo: "Sep 2021 – Mar 2023",
    ubicacion: "España · Remoto",
    activo: false,
    puntos: [
      "Análisis de datos y elaboración de reportes de negocio para cliente europeo",
      "Desarrollo de consultas SQL complejas para extracción y procesamiento de datos",
      "Construcción de dashboards en Excel Avanzado con Power Pivot y Power Query",
      "Participación en definición de KPIs comerciales y operativos",
    ],
  },
  {
    empresa: "Compañía Baires SRL",
    cliente: "Argentina",
    rol: "Data Analyst Junior",
    periodo: "Sep 2019 – Abr 2022",
    ubicacion: "Argentina",
    activo: false,
    puntos: [
      "Construcción de reportes periódicos de ventas, stock y gestión comercial",
      "Desarrollo de macros VBA para automatización de procesos manuales recurrentes",
      "Creación de tablas dinámicas y segmentaciones para análisis exploratorio",
      "Primeros desarrollos en SQL para integración con sistema de gestión",
    ],
  },
];

export default function Experiencia() {
  return (
    <section id="experiencia" className="py-20 bg-dark">
      <div className="section">
        <h2 className="section-title">Experiencia</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary-600 via-primary-800 to-transparent hidden md:block" />

          <div className="flex flex-col gap-12">
            {experiencias.map((exp, i) => (
              <div key={i} className="md:pl-14 relative">
                {/* Dot en la línea */}
                <div
                  className={`absolute left-0 top-1 w-8 h-8 rounded-full border-2 hidden md:flex
                               items-center justify-center text-xs font-bold
                               ${exp.activo
                      ? "bg-primary-600 border-primary-400 text-white"
                      : "bg-surface border-slate-600 text-slate-400"
                    }`}
                >
                  {i + 1}
                </div>

                {/* Tarjeta */}
                <div className="card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-white font-bold text-lg">{exp.empresa}</h3>
                        {exp.activo && (
                          <span className="badge text-xs py-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Actual
                          </span>
                        )}
                      </div>
                      <p className="text-primary-400 font-medium">{exp.rol}</p>
                      <p className="text-slate-500 text-sm">{exp.cliente}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-slate-300 text-sm font-medium">{exp.periodo}</p>
                      <p className="text-slate-500 text-xs">{exp.ubicacion}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.puntos.map((punto, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-400">
                        <span className="text-primary-500 mt-0.5 shrink-0">›</span>
                        {punto}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
