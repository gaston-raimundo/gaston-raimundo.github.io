import type { MetadataRoute } from "next";
import { services, site, verticals } from "./lib/content";
import { notas } from "./lib/notas";

export const dynamic = "force-static";

/** Fecha de la última actualización de las páginas fijas. Actualizar al cambiar contenido. */
const SITE_UPDATED = "2026-11-13";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/business-intelligence",
    "/soluciones",
    ...services.map((s) => s.href),
    ...verticals.map((v) => v.href),
    "/casos",
    "/nosotros",
    "/contacto",
    "/notas",
    ...notas.map((n) => `/notas/${n.slug}`),
  ];
  const notaDates = new Map(notas.map((n) => [`/notas/${n.slug}`, n.date]));
  const lastNota = notas.map((n) => n.date).sort().at(-1) ?? SITE_UPDATED;
  return paths.map((p) => ({
    url: `${site.url}${p === "/" ? "" : p}`,
    lastModified: notaDates.get(p) ?? (p === "/notas" ? lastNota : SITE_UPDATED),
    changeFrequency: p.startsWith("/notas") ? "weekly" : "monthly",
    priority:
      p === "/"
        ? 1
        : p === "/business-intelligence"
          ? 0.9
          : p === "/faktori" || p.startsWith("/soluciones")
            ? 0.8
            : 0.6,
  }));
}
