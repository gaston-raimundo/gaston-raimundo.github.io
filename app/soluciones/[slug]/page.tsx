import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceTemplate from "../../components/ServiceTemplate";
import { searchMeta, solutionServices } from "../../lib/content";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return solutionServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = solutionServices.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.title,
    description: searchMeta[s.href]?.description ?? s.hero.text,
    keywords: searchMeta[s.href]?.keywords,
    alternates: { canonical: s.href },
    openGraph: {
      title: s.title,
      description: s.hero.text,
      url: s.href,
      images: [{ url: `/og/${s.slug}.png`, width: 1200, height: 630, alt: s.title }],
    },
  };
}

export default async function SolutionPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = solutionServices.find((x) => x.slug === slug);
  if (!s) notFound();
  return <ServiceTemplate s={s} />;
}
