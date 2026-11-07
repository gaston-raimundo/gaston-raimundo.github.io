import type { Metadata } from "next";
import { CtaBand, PageHero, ServiceCard, WorkSteps } from "../components/blocks";
import { services } from "../lib/content";

export const metadata: Metadata = {
  title: "Soluciones",
  description:
    "Monitoreo de planta en tiempo real, programación de producción, captura de datos de planta, gestión de KPIs y plataformas de datos distribuidas.",
  alternates: { canonical: "/soluciones" },
  openGraph: { url: "/soluciones", images: [{ url: "/og/home.png", width: 1200, height: 630 }] },
};

export default function SolucionesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/soluciones", label: "Soluciones" }]}
        eyebrow="SOLUCIONES"
        title="Cinco soluciones para que tus datos trabajen solos."
        text="Cada una resuelve un problema concreto de planta, de gestión o de datos. La implementamos a medida de tu operación, con tus datos y en tus servidores."
        cta={{ href: "/contacto", label: "Agendar un diagnóstico" }}
      />
      <section className="wrap grid gap-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.id} s={s} />
        ))}
      </section>
      <WorkSteps />
      <CtaBand />
    </>
  );
}
