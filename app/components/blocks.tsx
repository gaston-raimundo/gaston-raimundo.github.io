import Link from "next/link";
import type { ReactNode } from "react";
import {
  caseById,
  pillars,
  serviceById,
  site,
  workSteps,
  type Case,
  type CaseId,
  type Service,
  type Vertical,
} from "../lib/content";

export function SectionHead({
  eyebrow,
  title,
  lead,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h-section">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export type Crumb = { href: string; label: string };

/** Migas de pan visibles + BreadcrumbList. El último elemento es la página actual. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ href: "/", label: "Inicio" }, ...items];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.url}${c.href === "/" ? "" : c.href}`,
    })),
  };
  return (
    <nav aria-label="Ruta de navegación" className="text-sm text-slate-400">
      <ol className="flex flex-wrap items-center gap-1.5">
        {all.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1.5">
            {i < all.length - 1 ? (
              <>
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
                <span aria-hidden="true">/</span>
              </>
            ) : (
              <span aria-current="page" className="text-onink">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
      <JsonLd data={data} />
    </nav>
  );
}

/** Preguntas frecuentes visibles + FAQPage. */
export function Faq({ items, title = "Preguntas frecuentes." }: { items: { q: string; a: string }[]; title?: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="wrap flex flex-col gap-7 py-16">
      <SectionHead eyebrow="PREGUNTAS FRECUENTES" title={title} />
      <div className="flex flex-col gap-3">
        {items.map((f) => (
          <details key={f.q} className="group rounded-card border border-line bg-white p-5">
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-bold">
              {f.q}
              <span aria-hidden="true" className="shrink-0 font-mono text-accent-ink transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-2 text-[15px] leading-relaxed text-steel">{f.a}</p>
          </details>
        ))}
      </div>
      <JsonLd data={data} />
    </section>
  );
}

/** Banda oscura de encabezado para páginas interiores. */
export function PageHero({
  eyebrow,
  title,
  text,
  cta,
  secondary,
  aside,
  crumbs,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  text: ReactNode;
  cta?: { href: string; label: string };
  secondary?: { href: string; label: string };
  aside?: ReactNode;
  crumbs?: Crumb[];
}) {
  return (
    <section className="on-ink bg-ink text-white">
      {crumbs && (
        <div className="wrap pt-6">
          <Breadcrumbs items={crumbs} />
        </div>
      )}
      <div className={`wrap flex flex-wrap items-center gap-12 pb-20 ${crumbs ? "pt-8 sm:pt-10" : "pt-14 sm:pt-16"}`}>
        <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-6">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="h-display">{title}</h1>
          <p className="lead max-w-2xl">{text}</p>
          {(cta || secondary) && (
            <div className="flex flex-wrap gap-3">
              {cta && (
                <Link href={cta.href} className="btn">
                  {cta.label}
                </Link>
              )}
              {secondary && (
                <Link href={secondary.href} className="btn-outline text-white">
                  {secondary.label}
                </Link>
              )}
            </div>
          )}
        </div>
        {aside && <div className="min-w-0 flex-[1_1_380px]">{aside}</div>}
      </div>
    </section>
  );
}

export function Pillars() {
  return (
    <section aria-label="Pilares" className="border-b border-line bg-white">
      <div className="wrap grid gap-7 py-9 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.n} className="flex items-start gap-3.5">
            <span className="pt-0.5 font-mono text-sm text-accent-ink">{p.n}</span>
            <div className="flex flex-col gap-1">
              <h3 className="text-[17px] font-bold">{p.title}</h3>
              <p className="text-[15px] leading-normal text-muted">{p.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServiceCard({ s }: { s: Service }) {
  const featured = s.id === "S1";
  return (
    <Link
      href={s.href}
      className={`group flex flex-col gap-3.5 rounded-card bg-white p-6 text-ink no-underline transition-shadow hover:shadow-lg ${
        featured ? "border-2 border-accent" : "border border-line"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[13px] text-muted">{s.id}</span>
        {s.tag && <span className="text-xs font-bold text-accent-ink">{s.tag}</span>}
      </div>
      <h3 className="text-[21px] font-bold leading-snug tracking-[-0.015em]">{s.title}</h3>
      <p className="text-[15px] leading-relaxed text-muted">{s.short}</p>
      <span className="mt-auto text-[15px] font-semibold text-accent-ink group-hover:underline">
        Ver solución →
      </span>
    </Link>
  );
}

export function CaseCard({ c }: { c: Case }) {
  return (
    <article className="flex flex-col gap-2.5 rounded-xl border border-line border-t-4 border-t-ink bg-white p-5">
      <p className="font-mono text-xs text-muted">{c.where}</p>
      <h3 className="text-[17px] font-bold leading-snug">{c.title}</h3>
      <p className="text-sm leading-relaxed text-muted">{c.short}</p>
    </article>
  );
}

/** Caso completo: Contexto · Desafío · Solución · Resultado · Stack. */
export function CaseDetail({ c, headingLevel = 3 }: { c: Case; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const service = serviceById(c.service);
  const rows: [string, string][] = [
    ["Contexto", c.context],
    ["Desafío", c.challenge],
    ["Solución", c.solution],
    ["Resultado", c.result],
  ];
  return (
    <article id={c.id.toLowerCase()} className="scroll-mt-24 rounded-panel border border-line bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-mono text-xs text-muted">
          {c.id} · {c.where}
        </p>
        <Link href={service.href} className="link text-sm">
          {service.title}
        </Link>
      </div>
      <H className="mt-2 text-2xl font-extrabold tracking-[-0.02em]">{c.title}</H>
      <dl className="mt-6 grid gap-5 md:grid-cols-2">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt className="eyebrow mb-1">{k}</dt>
            <dd className="text-[15px] leading-relaxed text-steel">{v}</dd>
          </div>
        ))}
      </dl>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
        {c.stack.map((t) => (
          <li key={t} className="rounded-md border border-line bg-paper px-2.5 py-1 font-mono text-xs text-steel">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function CasesGrid({ ids }: { ids: CaseId[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {ids.map((id) => (
        <CaseCard key={id} c={caseById(id)} />
      ))}
    </div>
  );
}

export function WorkSteps({ title = "Por fases, cada una cerrada antes de seguir." }: { title?: string }) {
  return (
    <section className="border-y border-line bg-white">
      <div className="wrap flex flex-col gap-8 py-16">
        <SectionHead eyebrow="CÓMO TRABAJAMOS" title={title} />
        <ol className="grid gap-6 md:grid-cols-3">
          {workSteps.map((st) => (
            <li key={st.n} className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-mono text-[15px] text-white">
                  {st.n}
                </span>
                <h3 className="text-[19px] font-bold">{st.title}</h3>
              </div>
              <p className="text-[15px] leading-relaxed text-muted">{st.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "¿Tus datos todavía viven en hojas de cálculo?",
  text = "Contanos cómo trabaja hoy tu equipo. En una primera reunión revisamos el proceso y te proponemos por dónde empezar.",
  href = "/contacto",
  label = "Agendar un diagnóstico",
}: {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="on-ink bg-ink text-white">
      <div className="wrap flex flex-wrap items-center justify-between gap-8 py-16">
        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-3">
          <h2 className="h-section">{title}</h2>
          <p className="lead">{text}</p>
        </div>
        <Link href={href} className="btn min-h-[52px] px-6 text-[17px]">
          {label}
        </Link>
      </div>
    </section>
  );
}

/** Diagrama de flujo simple: cajas con flechas, apila en móvil. */
export function Flow({ steps, dark = false }: { steps: string[]; dark?: boolean }) {
  return (
    <ol
      className="flex flex-col items-stretch gap-2 font-mono text-[13px] sm:flex-row sm:flex-wrap sm:items-center"
      aria-label="Flujo de datos"
    >
      {steps.map((s, i) => (
        <li key={s} className="flex flex-col items-center gap-2 sm:flex-row">
          <span
            className={`w-full rounded-lg border px-3 py-2.5 text-center sm:w-auto ${
              dark ? "border-ink-line bg-ink-2 text-line" : "border-line bg-white text-steel"
            }`}
          >
            {s}
          </span>
          {i < steps.length - 1 && (
            <span aria-hidden="true" className={dark ? "text-accent-soft" : "text-accent-ink"}>
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

export function VerticalCard({ v }: { v: Vertical }) {
  return (
    <div className="flex flex-col gap-3 rounded-card border border-line bg-white p-6">
      <h3 className="text-xl font-bold">{v.title}</h3>
      <p className="text-[15px] italic text-steel">{v.pain}</p>
      <p className="text-sm leading-relaxed text-muted">{v.short}</p>
      <Link href={v.href} className="link mt-auto text-[15px]">
        Ver más →
      </Link>
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((it) => (
        <li key={it} className="flex gap-3 rounded-xl border border-line bg-white p-4 text-[15px] leading-relaxed text-steel">
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 shrink-0">
            <circle cx="10" cy="10" r="9" fill="#FDBA74" fillOpacity=".35" />
            <path d="m6 10.2 2.7 2.6L14 7.5" fill="none" stroke="#B4560F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
