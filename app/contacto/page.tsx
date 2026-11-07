import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "../components/blocks";
import ContactForm from "../components/ContactForm";
import { site } from "../lib/content";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Agendá un diagnóstico: contanos cómo trabaja hoy tu equipo y te proponemos por dónde empezar.",
  alternates: { canonical: "/contacto" },
  openGraph: { url: "/contacto", images: [{ url: "/og/home.png", width: 1200, height: 630 }] },
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/contacto", label: "Contacto" }]}
        eyebrow="CONTACTO"
        title="Agendá un diagnóstico."
        text="Contanos cómo trabaja hoy tu equipo. En una primera reunión revisamos el proceso y te proponemos por dónde empezar."
      />
      <section className="wrap grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr]">
        <Suspense fallback={<div className="card h-96" aria-hidden="true" />}>
          <ContactForm />
        </Suspense>
        <aside className="flex flex-col gap-4">
          <div className="card">
            <p className="eyebrow">ESCRIBINOS DIRECTO</p>
            <a href={`mailto:${site.email}`} className="link mt-2 block break-all font-mono text-[15px]">
              {site.email}
            </a>
          </div>
          <div className="card">
            <p className="eyebrow">LINKEDIN</p>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link mt-2 block text-[15px]">
              {site.founder}
            </a>
          </div>
          <div className="card">
            <p className="eyebrow">DÓNDE</p>
            <p className="mt-2 text-[15px] text-steel">
              {site.location}. Trabajamos de forma presencial en la región y remota en el resto del país y el exterior.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
