import Link from "next/link";
import {
  CasesGrid,
  CtaBand,
  Flow,
  Pillars,
  SectionHead,
  ServiceCard,
  VerticalCard,
  WorkSteps,
} from "./components/blocks";
import FaktoriMock, { FaktoriMark } from "./components/FaktoriMock";
import type { Metadata } from "next";
import { searchMeta, serviceById, services, verticals } from "./lib/content";

// Solo description/keywords: Open Graph se hereda del layout (sin "Excel").
export const metadata: Metadata = {
  description: searchMeta["/"].description,
  keywords: searchMeta["/"].keywords,
};

export default function Home() {
  const faktori = serviceById("S1");
  return (
    <>
      <section className="on-ink bg-ink text-white">
        <div className="wrap flex flex-wrap items-center gap-12 pb-20 pt-14 sm:pb-24 sm:pt-16">
          <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-6">
            <p className="eyebrow">DATOS · AUTOMATIZACIÓN · TIEMPO REAL</p>
            <h1 className="h-display">
              Tus datos,
              <br />
              trabajando.
            </h1>
            <p className="lead max-w-xl">
              Implementamos sistemas que reemplazan hojas de cálculo y cargas manuales por información en
              tiempo real: en la planta, en la gerencia y en cada sucursal. Sobre infraestructura que es tuya.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contacto" className="btn">
                Agendar un diagnóstico
              </Link>
              <Link href="#soluciones" className="btn-outline text-white">
                Ver soluciones
              </Link>
            </div>
          </div>
          <div className="min-w-0 flex-[1_1_420px]">
            <FaktoriMock />
          </div>
        </div>
      </section>

      <Pillars />

      <section aria-labelledby="bi-home" className="wrap grid gap-8 pb-4 pt-16 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div className="flex flex-col gap-4">
          <p className="eyebrow">BUSINESS INTELLIGENCE</p>
          <h2 id="bi-home" className="h-section">
            Consultora de business intelligence y automatización de datos.
          </h2>
          <p className="lead">
            BI Insights es una consultora de business intelligence de Corrientes que trabaja con empresas del NEA y
            de toda Argentina. A diferencia de un proyecto de BI tradicional, no empezamos por el tablero: empezamos
            por automatizar la captura y la integración de los datos, para que los indicadores lleguen solos y sean
            confiables.
          </p>
        </div>
        <Link href="/business-intelligence" className="link self-start text-[17px] lg:self-end">
          Qué es business intelligence y cómo lo implementamos →
        </Link>
      </section>

      <section id="soluciones" className="wrap flex scroll-mt-20 flex-col gap-9 pb-10 pt-20">
        <SectionHead
          eyebrow="SOLUCIONES"
          title="Cinco soluciones para que tus datos trabajen solos."
          lead="Cada una resuelve un problema concreto de planta, de gestión o de datos. La implementamos a medida de tu operación, con tus datos y en tus servidores."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} s={s} />
          ))}
        </div>
      </section>

      <section className="wrap py-10">
        <div className="on-ink flex flex-wrap items-center gap-9 rounded-panel bg-ink p-7 text-white sm:p-11">
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
            <div className="flex items-center gap-3">
              <FaktoriMark size={40} stroke={6} />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold">Faktori</span>
                <span className="text-xs text-onink">de BI Insights</span>
              </div>
            </div>
            <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.025em] sm:text-[2.125rem]">
              Datos reales de tu fábrica.
            </h2>
            <p className="lead">
              Conectamos PLCs y sensores con un tablero web, una app móvil y pantallas de planta. Alertas
              automáticas e histórico para reportes. Lee los datos de tu SCADA: no lo reemplaza.
            </p>
            <Link href="/faktori" className="btn self-start">
              Conocer Faktori
            </Link>
          </div>
          <div className="min-w-0 flex-[1_1_380px]">
            <Flow steps={faktori.flow} dark />
          </div>
        </div>
      </section>

      <section className="wrap flex flex-col gap-8 pb-10 pt-16">
        <SectionHead eyebrow="PARA QUIÉN" title="Tres industrias, el mismo problema: los datos llegan tarde." />
        <div className="grid gap-5 md:grid-cols-3">
          {verticals.map((v) => (
            <VerticalCard key={v.slug} v={v} />
          ))}
        </div>
      </section>

      <section className="wrap flex flex-col gap-7 pb-16 pt-10">
        <SectionHead eyebrow="CASOS" title="Cada solución, aplicada a un caso concreto." />
        <CasesGrid ids={["C1", "C2", "C3", "C4"]} />
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
          <span>Los casos se publican sin nombrar al cliente.</span>
          <Link href="/casos" className="link">
            Ver los casos completos →
          </Link>
        </div>
      </section>

      <WorkSteps />
      <CtaBand />
    </>
  );
}
