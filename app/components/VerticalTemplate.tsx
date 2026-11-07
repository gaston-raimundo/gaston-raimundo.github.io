import Link from "next/link";
import { serviceById, type Vertical } from "../lib/content";
import { CasesGrid, CtaBand, Faq, Flow, PageHero, SectionHead, WorkSteps } from "./blocks";

export default function VerticalTemplate({ v }: { v: Vertical }) {
  return (
    <>
      <PageHero
        eyebrow={v.hero.eyebrow}
        title={v.hero.title}
        text={v.hero.text}
        cta={{ href: "/contacto", label: "Agendar un diagnóstico" }}
        crumbs={[{ href: v.href, label: v.title }]}
        aside={
          <blockquote className="rounded-panel border border-ink-line bg-ink-2 p-7">
            <p className="text-2xl font-bold leading-snug tracking-[-0.02em] text-white">{v.pain}</p>
            <footer className="mt-4 text-sm text-onink">{v.audience}</footer>
          </blockquote>
        }
      />

      <section className="wrap flex flex-col gap-8 py-16">
        <SectionHead eyebrow="SOLUCIONES" title="Lo que implementamos para este rubro." />
        <div className="grid gap-5 md:grid-cols-2">
          {v.services.map(({ id, text, label }) => {
            const s = serviceById(id);
            return (
              <Link
                key={id + (label ?? "")}
                href={s.href}
                className="group flex flex-col gap-2.5 rounded-card border border-line bg-white p-6 text-ink no-underline transition-shadow hover:shadow-lg"
              >
                <span className="font-mono text-[13px] text-muted">
                  {id}
                  {label ? ` · ${s.title}` : ""}
                </span>
                <h3 className="text-xl font-bold">{label ?? s.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{text}</p>
                <span className="mt-auto text-[15px] font-semibold text-accent-ink group-hover:underline">
                  Ver solución →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {v.path && (
        <section className="border-y border-line bg-white">
          <div className="wrap flex flex-col gap-7 py-16">
            <SectionHead
              eyebrow={v.slug === "tecnologia" ? "FORMATO" : "RECORRIDO SUGERIDO"}
              title={v.slug === "tecnologia" ? "Dos formas de trabajar juntos." : "De un primer resultado visible al tiempo real."}
            />
            {v.slug === "tecnologia" ? (
              <div className="grid gap-5 md:grid-cols-2">
                {v.path.map((p) => (
                  <div key={p.title} className="card bg-paper">
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">{p.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <Flow steps={v.path.map((p) => p.title)} />
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {v.path.map((p, i) => (
                    <li key={p.title} className="text-[15px] leading-relaxed text-muted">
                      <span className="font-mono text-accent-ink">{i + 1}. </span>
                      <strong className="text-ink">{p.title}:</strong> {p.text}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>
      )}

      <section className="wrap flex flex-col gap-7 py-16">
        <SectionHead eyebrow="PRUEBA" title={v.proof.title} lead={v.proof.text} />
        <CasesGrid ids={v.caseIds} />
        <Link href="/casos" className="link self-start text-[15px]">
          Ver los casos completos →
        </Link>
      </section>

      <Faq items={v.faqs} />
      <WorkSteps />
      <CtaBand />
    </>
  );
}
