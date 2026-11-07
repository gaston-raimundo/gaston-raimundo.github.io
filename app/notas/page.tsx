import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "../components/blocks";
import { serviceById } from "../lib/content";
import { formatDate, notas } from "../lib/notas";

export const metadata: Metadata = {
  title: "Notas",
  description:
    "Notas cortas sobre programación de producción, captura de datos de planta, monitoreo en tiempo real y plataformas de datos.",
  alternates: { canonical: "/notas" },
  openGraph: { url: "/notas", images: [{ url: "/og/home.png", width: 1200, height: 630 }] },
};

export default function NotasPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/notas", label: "Notas" }]}
        eyebrow="NOTAS"
        title="Lo que aprendemos implementando sistemas de datos."
        text="Notas cortas sobre problemas concretos de planta, gestión y datos, y cómo los resolvemos."
      />
      <section className="wrap grid gap-5 py-16 md:grid-cols-2">
        {notas.map((n) => (
          <Link
            key={n.slug}
            href={`/notas/${n.slug}`}
            className="group flex flex-col gap-3 rounded-card border border-line bg-white p-6 text-ink no-underline transition-shadow hover:shadow-lg"
          >
            <p className="font-mono text-xs text-muted">
              {formatDate(n.date)} · {serviceById(n.service).title}
            </p>
            <h2 className="text-xl font-bold leading-snug">{n.title}</h2>
            <p className="text-[15px] leading-relaxed text-muted">{n.description}</p>
            <span className="mt-auto text-[15px] font-semibold text-accent-ink group-hover:underline">Leer →</span>
          </Link>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
