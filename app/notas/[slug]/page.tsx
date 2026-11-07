import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, CtaBand, JsonLd } from "../../components/blocks";
import { serviceById, site } from "../../lib/content";
import { formatDate, notaBySlug, notas } from "../../lib/notas";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return notas.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const n = notaBySlug(slug);
  if (!n) return {};
  const s = serviceById(n.service);
  return {
    title: n.title,
    description: n.description,
    alternates: { canonical: `/notas/${n.slug}` },
    openGraph: {
      type: "article",
      title: n.title,
      description: n.description,
      url: `/notas/${n.slug}`,
      publishedTime: n.date,
      authors: [site.name],
      images: [{ url: `/og/${s.slug}.png`, width: 1200, height: 630 }],
    },
  };
}

export default async function NotaPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const n = notaBySlug(slug);
  if (!n) notFound();
  const s = serviceById(n.service);
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: n.title,
    description: n.description,
    datePublished: n.date,
    inLanguage: "es-AR",
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/brand/icon-512.png` } },
    mainEntityOfPage: `${site.url}/notas/${n.slug}`,
  };

  return (
    <>
      <section className="on-ink bg-ink text-white">
        <div className="wrap max-w-3xl pb-14 pt-6">
          <Breadcrumbs
            items={[
              { href: "/notas", label: "Notas" },
              { href: `/notas/${n.slug}`, label: n.title },
            ]}
          />
          <p className="eyebrow mt-8">
            {formatDate(n.date)} · {site.name}
          </p>
          <h1 className="mt-4 text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[2.75rem]">{n.title}</h1>
          <p className="lead mt-5">{n.description}</p>
        </div>
      </section>

      <article className="wrap max-w-3xl py-14">
        <div className="flex flex-col gap-8">
          {n.sections.map((sec, i) => (
            <section key={i} className="flex flex-col gap-4">
              {sec.h && <h2 className="text-2xl font-extrabold tracking-[-0.02em]">{sec.h}</h2>}
              {sec.p.map((p, j) => (
                <p key={j} className="text-[17px] leading-[1.75] text-steel">
                  {p}
                </p>
              ))}
              {sec.list && (
                <ol className="flex list-decimal flex-col gap-2 pl-6 text-[17px] leading-[1.7] text-steel marker:font-mono marker:text-accent-ink">
                  {sec.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </div>
        <aside className="mt-12 rounded-panel border border-line bg-white p-6 sm:p-8">
          <p className="eyebrow">SOLUCIÓN RELACIONADA</p>
          <h2 className="mt-2 text-xl font-bold">{s.title}</h2>
          <p className="mt-1 text-[15px] leading-relaxed text-muted">{s.short}</p>
          <Link href={s.href} className="link mt-3 inline-block text-[15px]">
            Ver la solución →
          </Link>
        </aside>
      </article>

      <CtaBand href={`/contacto?servicio=${s.id}`} />
      <JsonLd data={article} />
    </>
  );
}
