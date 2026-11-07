import Link from "next/link";
import type { ReactNode } from "react";
import { caseById, site, type Service } from "../lib/content";
import { CaseDetail, CheckList, CtaBand, Flow, JsonLd, PageHero, SectionHead, WorkSteps } from "./blocks";

/** Plantilla de página de servicio (fase 6 §6.3). */
export default function ServiceTemplate({
  s,
  eyebrow,
  aside,
  children,
}: {
  s: Service;
  eyebrow?: ReactNode;
  aside?: ReactNode;
  /** Secciones propias del servicio (se insertan antes del caso). */
  children?: ReactNode;
}) {
  const contact = `/contacto?servicio=${s.id}`;
  const c = s.caseId ? caseById(s.caseId) : undefined;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.hero.text,
    url: `${site.url}${s.href}`,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: "AR",
  };

  return (
    <>
      <PageHero
        eyebrow={eyebrow ?? `${s.id} · ${s.title.toUpperCase()}`}
        title={s.hero.title}
        text={s.hero.text}
        cta={{ href: contact, label: "Agendar un diagnóstico" }}
        secondary={c ? { href: "#caso", label: "Ver el caso" } : undefined}
        aside={aside}
        crumbs={
          s.id === "S1"
            ? [{ href: s.href, label: "Faktori" }]
            : [
                { href: "/soluciones", label: "Soluciones" },
                { href: s.href, label: s.title },
              ]
        }
      />

      <section className="wrap flex flex-col gap-8 py-16">
        <SectionHead eyebrow="EL PROBLEMA" title="Si te pasa esto, esta solución es para vos." lead={s.forWho} />
        <div className="grid gap-5 md:grid-cols-3">
          {s.symptoms.map((x) => (
            <div key={x.title} className="card flex flex-col gap-2">
              <h3 className="text-lg font-bold">{x.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{x.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap flex flex-col gap-8 pb-16">
        <SectionHead eyebrow="QUÉ ENTREGAMOS" title="Lo que queda funcionando en tu operación." />
        <CheckList items={s.deliverables} />
      </section>

      <section className="border-y border-line bg-white">
        <div className="wrap flex flex-col gap-7 py-16">
          <SectionHead eyebrow="CÓMO FUNCIONA" title="Un flujo simple, de punta a punta." lead={s.flowNote} />
          <Flow steps={s.flow} />
          <details className="group rounded-card border border-line bg-paper p-5">
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between font-semibold">
              Detalle técnico
              <span aria-hidden="true" className="font-mono text-accent-ink transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-[15px] leading-relaxed text-steel">
              {s.technical.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </details>
          {s.limits && (
            <p className="rounded-card border-l-4 border-accent bg-paper p-5 text-[15px] leading-relaxed text-steel">
              <strong className="text-ink">Alcance: </strong>
              {s.limits}
            </p>
          )}
        </div>
      </section>

      {children}

      {c && (
        <section id="caso" className="wrap flex scroll-mt-24 flex-col gap-7 py-16">
          <SectionHead eyebrow="CASO" title="La solución, aplicada a un caso concreto." />
          <CaseDetail c={c} />
        </section>
      )}

      {s.extra && (
        <section className="wrap pb-16">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-panel border border-line bg-white p-7 sm:p-9">
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-2">
              <h2 className="text-2xl font-extrabold tracking-[-0.02em]">{s.extra.title}</h2>
              <p className="lead">{s.extra.text}</p>
            </div>
            {s.extra.href && (
              <Link href={s.extra.href} className="btn-outline text-ink">
                {s.extra.cta}
              </Link>
            )}
          </div>
        </section>
      )}

      <WorkSteps title="Cómo empezamos." />
      <CtaBand
        title={`¿Hablamos de ${s.title.toLowerCase()}?`}
        text="Contanos cómo trabaja hoy tu equipo. En la primera reunión revisamos el proceso y te proponemos por dónde empezar."
        href={contact}
      />
      <JsonLd data={serviceJsonLd} />
    </>
  );
}
