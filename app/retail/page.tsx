import type { Metadata } from "next";
import VerticalTemplate from "../components/VerticalTemplate";
import { searchMeta, verticalBySlug } from "../lib/content";

const v = verticalBySlug("retail");

export const metadata: Metadata = {
  title: v.title,
  description: searchMeta[v.href]?.description ?? v.hero.text,
  keywords: searchMeta[v.href]?.keywords,
  alternates: { canonical: v.href },
  openGraph: {
    title: v.title,
    description: v.hero.text,
    url: v.href,
    images: [{ url: "/og/retail.png", width: 1200, height: 630, alt: v.title }],
  },
};

export default function Page() {
  return <VerticalTemplate v={v} />;
}
