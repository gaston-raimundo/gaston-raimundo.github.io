"use client";

import { useState } from "react";
import {
  IlustracionPowerBI,
  IlustracionExcel,
  IlustracionSQL,
  IlustracionKPIs,
  IlustracionPLC,
  IlustracionConsultoria,
} from "./Ilustraciones";

interface Servicio {
  icon: React.ReactNode;
  titulo: string;
  descripcion: string;
  tags: string[];
  Ilustracion: React.FC;
}

const servicios: Servicio[] = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    titulo: "Dashboards Power BI",
    descripcion:
      "Desarrollo de reportes ejecutivos interactivos con modelado DAX avanzado, Power Query y Row-Level Security. Visibilidad gerencial en tiempo real.",
    tags: ["Power BI", "DAX", "Power Query", "RLS"],
    Ilustracion: IlustracionPowerBI,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        />
      </svg>
    ),
    titulo: "Automatización en Excel",
    descripcion:
      "Transformo planillas manuales en sistemas de reporte automatizados con Power Query, tablas dinámicas, macros VBA y KPIs calculados automáticamente.",
    tags: ["Excel", "VBA", "Power Query", "KPIs"],
    Ilustracion: IlustracionExcel,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    titulo: "Modelado y Consultas SQL",
    descripcion:
      "Diseño de queries complejas, CTEs, joins avanzados y optimización de performance. Extracción y transformación de datos para análisis gerencial.",
    tags: ["SQL", "CTEs", "Joins", "Performance"],
    Ilustracion: IlustracionSQL,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    titulo: "KPIs de Producción",
    descripcion:
      "Diseño y automatización de indicadores clave: OEE, MTBF, MTTR, eficiencia por línea, rendimiento diario/semanal/mensual para gerencias industriales.",
    tags: ["OEE", "MTBF", "Producción", "Compras"],
    Ilustracion: IlustracionKPIs,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    titulo: "Integración de datos PLC",
    descripcion:
      "Extracción y aprovechamiento de datos operacionales generados por PLCs en planta. Centralización para análisis de eficiencia y mantenimiento predictivo.",
    tags: ["PLC", "IoT", "Industrial", "ETL"],
    Ilustracion: IlustracionPLC,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    titulo: "Propuestas y Consultoría BI",
    descripcion:
      "Diagnóstico del estado actual de datos, diseño de roadmap analítico y propuesta de soluciones escalables adaptadas a la madurez de cada organización.",
    tags: ["Consultoría", "Roadmap BI", "Estrategia"],
    Ilustracion: IlustracionConsultoria,
  },
];

export default function Servicios() {
  const [modalServicio, setModalServicio] = useState<Servicio | null>(null);

  return (
    <section id="servicios" className="py-20 bg-dark">
      <div className="section">
        <h2 className="section-title">Servicios</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <div key={i} className="card group animate-fade-in flex flex-col gap-4">

              {/* Ilustración SVG — clickeable */}
              <button
                onClick={() => setModalServicio(s)}
                className="w-full rounded-xl overflow-hidden border border-slate-800 bg-[#12122a]
                           cursor-zoom-in hover:border-primary-600 transition-colors duration-300
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                title="Ver imagen ampliada"
              >
                <s.Ilustracion />
              </button>

              {/* Ícono + título */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-900/50 border border-primary-800
                                flex items-center justify-center text-primary-400 shrink-0
                                group-hover:bg-primary-800/50 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-white font-semibold text-lg leading-tight pt-1">{s.titulo}</h3>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">{s.descripcion}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-medium
                               bg-slate-800 text-slate-400 border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalServicio && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setModalServicio(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-slate-700 bg-[#12122a] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-700">
              <span className="text-white font-semibold">{modalServicio.titulo}</span>
              <button
                onClick={() => setModalServicio(null)}
                className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-700"
                aria-label="Cerrar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* SVG ampliado */}
            <div className="w-full bg-[#12122a]">
              <modalServicio.Ilustracion />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
