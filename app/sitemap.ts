import type { MetadataRoute } from "next";
import { services, site, verticals } from "./lib/content";
import { notas } from "./lib/notas";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/soluciones",
    ...services.map((s) => s.href),
    ...verticals.map((v) => v.href),
    "/casos",
    "/nosotros",
    "/contacto",
    "/notas",
    ...notas.map((n) => `/notas/${n.slug}`),
  ];
  return paths.map((p) => ({
    url: `${site.url}${p === "/" ? "" : p}`,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : p === "/faktori" || p.startsWith("/soluciones") ? 0.8 : 0.6,
  }));
}
