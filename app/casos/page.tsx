import type { Metadata } from "next";
import { CaseDetail, CtaBand, PageHero } from "../components/blocks";
import { cases } from "../lib/content";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Programación de producción, captura de datos, monitoreo en tiempo real y gestión de KPIs aplicados a casos de plantas de Argentina y Estados Unidos.",
  alternates: { canonical: "/casos" },
  openGraph: { url: "/casos", images: [{ url: "/og/casos.png", width: 1200, height: 630 }] },
};

export default function CasosPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/casos", label: "Casos" }]}
        eyebrow="CASOS"
        title="Cada solución, aplicada a un caso concreto."
        text="Cada solución se muestra sobre un caso concreto de planta o de gestión. Los casos se publican sin nombrar al cliente ni mostrar sus datos."
      />
      <section className="wrap flex flex-col gap-6 py-16">
        {cases.map((c) => (
          <CaseDetail key={c.id} c={c} headingLevel={2} />
        ))}
      </section>
      <CtaBand
        title="¿Tu operación se parece a alguno de estos casos?"
        text="Contanos cómo trabaja hoy tu equipo y te decimos qué parte de estas soluciones aplica y por dónde conviene empezar."
      />
    </>
  );
}
