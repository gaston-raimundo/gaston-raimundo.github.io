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

// =========================================================
// Enfoque consultivo por fases — evolución validada paso a paso
// =========================================================

interface Capability {
  titulo: string;
  descripcion: string;
  tags: string[];
  Ilustracion: React.FC;
}

interface Fase {
  numero: string;
  tituloCorto: string;
  titulo: string;
  pitch: string;
  objetivos: string[];
  entregables: string[];
  capacidades: Capability[];
  bgNumber: string; // clase tailwind para el fondo del número
  borderColor: string;
  accentText: string;
  labelText: string;
}

const fases: Fase[] = [
  {
    numero: "01",
    tituloCorto: "Saneamiento",
    titulo: "Saneamiento de Excels, reportes y flujos actuales",
    pitch:
      "Antes de automatizar nada, aclaramos el mapa. Revisamos los Excels críticos, las fórmulas, los orígenes de datos y los reportes que hoy sostienen la operación — para que el próximo paso se construya sobre algo confiable, no sobre planillas rotas.",
    objetivos: [
      "Relevamiento de procesos, líneas, protocolos y documentación existente",
      "Diagnóstico de Excels automatizados: fórmulas, dependencias y fuentes",
      "Mapa de flujo de datos desde papel/sistemas hasta el tablero gerencial",
      "Listado priorizado de fricciones, duplicaciones y puntos de falla",
    ],
    entregables: [
      "Excels saneados y versionados",
      "Documento de diagnóstico + flujograma del estado actual",
      "Recomendaciones de automatización priorizadas por impacto",
    ],
    capacidades: [
      {
        titulo: "Automatización Excel / VBA",
        descripcion:
          "Planillas manuales transformadas en sistemas de reporte con Power Query, tablas dinámicas, macros y KPIs calculados automáticamente.",
        tags: ["Excel", "VBA", "Power Query", "KPIs"],
        Ilustracion: IlustracionExcel,
      },
      {
        titulo: "Diagnóstico y consultoría BI",
        descripcion:
          "Evaluación del estado actual, diseño de roadmap analítico por fases y propuesta adaptada a la madurez de cada organización.",
        tags: ["Consultoría", "Diagnóstico", "Roadmap"],
        Ilustracion: IlustracionConsultoria,
      },
    ],
    bgNumber: "bg-industrial-500 text-white",
    borderColor: "border-industrial-500/40",
    accentText: "text-industrial-400",
    labelText: "Fase 1",
  },
  {
    numero: "02",
    tituloCorto: "Automatización",
    titulo: "Automatización y captación digital de datos",
    pitch:
      "Con el estado actual entendido, reemplazamos los procesos que duelen. Scripts en Python para las rutinas repetitivas, formularios web y móvil para sustituir el papel, y vistas diferenciadas por rol (operario, gerente, administración, dirección).",
    objetivos: [
      "Identificación de procesos automatizables con scripts y rutinas",
      "Herramientas administrativas para captación de datos",
      "Formularios web y apps móviles reemplazando planillas de papel",
      "Vistas por rol: operación, gerencia, administración, dirección",
    ],
    entregables: [
      "Scripts Python documentados y desplegados",
      "Formularios web + app móvil para captura de datos",
      "Dashboards Power BI conectados a los nuevos flujos",
      "Reportes programados y alertas por umbral",
    ],
    capacidades: [
      {
        titulo: "Dashboards Power BI",
        descripcion:
          "Reportes ejecutivos interactivos con modelado DAX, Power Query y Row-Level Security. Visibilidad gerencial en tiempo real.",
        tags: ["Power BI", "DAX", "Power Query", "RLS"],
        Ilustracion: IlustracionPowerBI,
      },
      {
        titulo: "Modelado y consultas SQL",
        descripcion:
          "Queries complejas, CTEs, joins y optimización de performance. Extracción y transformación de datos para análisis gerencial.",
        tags: ["SQL", "CTEs", "Joins", "Performance"],
        Ilustracion: IlustracionSQL,
      },
      {
        titulo: "KPIs industriales y de negocio",
        descripcion:
          "Diseño y automatización de indicadores clave: OEE, MTBF, MTTR, eficiencia por línea, rendimientos diarios/semanales/mensuales.",
        tags: ["OEE", "MTBF", "Producción", "Compras"],
        Ilustracion: IlustracionKPIs,
      },
    ],
    bgNumber: "bg-primary-600 text-white",
    borderColor: "border-primary-600/40",
    accentText: "text-primary-400",
    labelText: "Fase 2",
  },
  {
    numero: "03",
    tituloCorto: "Industria 4.0",
    titulo: "Integraciones y ecosistema industrial",
    pitch:
      "Sobre una base estable, escalamos hacia el ecosistema completo: ERP, SCADA, HMI y automatizaciones a medida. La pirámide ISA-95 deja de ser teoría y se vuelve el operativo cotidiano — datos en tiempo real desde planta a decisión ejecutiva.",
    objetivos: [
      "Integración bidireccional con ERP (gestión + finanzas)",
      "SCADA nuevo o integración con instalación existente",
      "HMI: aprovechamiento de los funcionales + incorporación de nuevos",
      "Automatizaciones a medida sobre el ecosistema consolidado",
    ],
    entregables: [
      "Capa de integración ERP ↔ piso de planta",
      "Arquitectura SCADA/HMI documentada",
      "Alertas, notificaciones y reportes sobre ecosistema integrado",
      "Roadmap de evolución hacia analítica predictiva",
    ],
    capacidades: [
      {
        titulo: "Integración de datos PLC / HMI",
        descripcion:
          "Extracción y aprovechamiento de datos operacionales generados por PLCs en planta. Centralización para análisis de eficiencia y mantenimiento predictivo.",
        tags: ["PLC", "HMI", "IoT Industrial", "ETL"],
        Ilustracion: IlustracionPLC,
      },
    ],
    bgNumber: "bg-slate-700 text-primary-400 border border-primary-500/50",
    borderColor: "border-slate-600",
    accentText: "text-primary-400",
    labelText: "Fase 3",
  },
];

export default function Servicios() {
  const [modalCap, setModalCap] = useState<Capability | null>(null);

  return (
    <section id="servicios" className="py-14 bg-dark">
      <div className="section">
        <h2 className="section-title">Enfoque por fases</h2>
        <p className="text-slate-400 -mt-6 mb-8 text-base leading-relaxed max-w-3xl">
          Trabajo consultivo en tres etapas validables. Cada fase tiene entregables
          concretos y se cierra antes de avanzar — así se va construyendo confianza
          y el alcance crece sobre terreno firme, no sobre promesas.
        </p>

        <div className="flex flex-col gap-8">
          {fases.map((fase) => (
            <div
              key={fase.numero}
              className={`card border ${fase.borderColor} p-0 overflow-hidden`}
            >
              <div className="grid md:grid-cols-[auto_1fr] gap-0">
                {/* Columna izquierda — número + chip */}
                <div className="p-6 md:p-8 flex md:flex-col items-start md:items-center gap-4 md:border-r border-slate-800 md:min-w-[180px] bg-slate-900/30">
                  <div className={`phase-number ${fase.bgNumber}`}>
                    {fase.numero}
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className={`text-xs font-bold uppercase tracking-widest ${fase.accentText}`}>
                      {fase.labelText}
                    </span>
                    <span className="text-white font-semibold text-lg leading-tight">
                      {fase.tituloCorto}
                    </span>
                  </div>
                </div>

                {/* Columna derecha — contenido */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                    {fase.titulo}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6 text-base">
                    {fase.pitch}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${fase.accentText}`}>
                        Objetivos
                      </p>
                      <ul className="flex flex-col gap-2">
                        {fase.objetivos.map((o) => (
                          <li key={o} className="text-slate-300 text-sm flex gap-2 leading-relaxed">
                            <span className={fase.accentText}>&rarr;</span>
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-3 text-industrial-400">
                        Entregables
                      </p>
                      <ul className="flex flex-col gap-2">
                        {fase.entregables.map((e) => (
                          <li key={e} className="text-slate-300 text-sm flex gap-2 leading-relaxed">
                            <span className="text-industrial-400">&#10003;</span>
                            <span>{e}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {fase.capacidades.map((cap) => {
                      const Icono = cap.Ilustracion;
                      return (
                        <button
                          key={cap.titulo}
                          type="button"
                          onClick={() => setModalCap(cap)}
                          className="text-left rounded-lg border border-slate-800 bg-slate-900/40 p-3 hover:border-industrial-500/40 hover:bg-slate-900/70 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 shrink-0 rounded-md bg-slate-800/70 flex items-center justify-center">
                              <Icono />
                            </div>
                            <div>
                              <p className="text-white text-sm font-semibold leading-tight mb-1">
                                {cap.titulo}
                              </p>
                              <p className="text-slate-500 text-xs leading-snug line-clamp-2">
                                {cap.descripcion}
                              </p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal detalle capacidad */}
      {modalCap && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalCap(null)}
        >
          <div
            className="max-w-lg w-full rounded-xl bg-slate-900 border border-slate-700 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center">
                <modalCap.Ilustracion />
              </div>
              <button
                type="button"
                onClick={() => setModalCap(null)}
                aria-label="Cerrar"
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <h4 className="text-white text-xl font-bold mb-2">{modalCap.titulo}</h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">{modalCap.descripcion}</p>
            <div className="flex flex-wrap gap-2">
              {modalCap.tags.map((t) => (
                <span key={t} className="text-[10px] font-semibold uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
