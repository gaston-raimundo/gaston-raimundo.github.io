import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, SectionHead, WorkSteps } from "../components/blocks";
import { site } from "../lib/content";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Quiénes somos: BI Insights implementa sistemas de datos para la industria, las empresas de tecnología y el retail, desde Corrientes. Fundada por Gastón P. Raimundo.",
  alternates: { canonical: "/nosotros" },
  openGraph: { url: "/nosotros", images: [{ url: "/og/home.png", width: 1200, height: 630 }] },
};

const principles = [
  {
    title: "El problema antes que la tecnología",
    text: "Empezamos por entender cómo trabaja tu equipo. La herramienta se elige después, y la más simple que resuelva gana.",
  },
  {
    title: "Lo que construimos es tuyo",
    text: "Código, datos, documentación e infraestructura quedan en manos del cliente. Sin licencias que renovar ni dependencia de un proveedor.",
  },
  {
    title: "Fases que se cierran",
    text: "Cada etapa termina con entregables que se pueden verificar. Recién entonces se decide la siguiente.",
  },
];

const lab = ["Proxmox", "Docker", "Kubernetes (k3s)", "Kafka", "Spark", "Cassandra", "Prometheus", "Grafana"];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/nosotros", label: "Nosotros" }]}
        eyebrow="QUIÉNES SOMOS"
        title="Una empresa que conoce la planta y el código."
        text="Desde Corrientes implementamos sistemas de datos para la industria, las empresas de tecnología y el retail."
        cta={{ href: "/contacto", label: "Contactanos" }}
      />

      <section className="wrap grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-5">
          <SectionHead eyebrow="EXPERIENCIA" title="De los reportes a los sistemas en tiempo real." />
          <p className="lead">
            BI Insights nace de la experiencia de su fundador, {site.founder}, que trabaja con datos desde
            2019: análisis, modelado y tableros para empresas de seguros, servicios y comercio en Argentina y
            España. Con los años el trabajo pasó de construir reportes a construir los sistemas que los alimentan.
          </p>
          <p className="lead">
            Hoy implementamos aplicaciones de programación de producción, servicios de captura de datos en plantas
            sin internet, plataformas de monitoreo en tiempo real y sistemas de seguimiento de KPIs, en Argentina y
            en Estados Unidos.
          </p>
          <p className="lead">
            Faktori es nuestra línea de producto para el monitoreo de planta: el mismo enfoque, empaquetado para
            llevar los datos de los equipos a la gerencia en tiempo real.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {principles.map((p) => (
            <div key={p.title} className="card">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="wrap flex flex-col gap-6 py-16">
          <SectionHead
            eyebrow="LABORATORIO"
            title="Cada arquitectura se prueba antes de llegar a un cliente."
            lead="Mantenemos un laboratorio propio donde probamos las arquitecturas de datos distribuidos, las versiones nuevas de cada herramienta y los procedimientos de despliegue."
          />
          <ul className="flex flex-wrap gap-2" aria-label="Herramientas del laboratorio">
            {lab.map((t) => (
              <li key={t} className="rounded-md border border-line bg-paper px-3 py-1.5 font-mono text-[13px] text-steel">
                {t}
              </li>
            ))}
          </ul>
          <Link href="/soluciones/plataforma-datos" className="link self-start text-[15px]">
            Ver la plataforma de datos distribuida →
          </Link>
        </div>
      </section>

      <WorkSteps />
      <CtaBand />
    </>
  );
}
