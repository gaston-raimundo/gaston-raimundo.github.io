# BI Insights · www.biinsights.com.ar

Web comercial de BI Insights (y de su línea de producto Faktori). Next.js 15
(App Router, export estático) + Tailwind 3, publicada en GitHub Pages con
`.github/workflows/deploy.yml` (cada push a `main` despliega).

Specs: `../specs/fase-06-web.md` (web) y `../specs/fase-09-seo.md` (SEO).

## Estructura

```
app/
├── lib/content.ts          ← todo el texto: servicios, casos, verticales, nav
├── components/             ← Header, Footer, bloques, plantillas de servicio y vertical
├── page.tsx                ← inicio
├── faktori/                ← S1
├── soluciones/[slug]/      ← S2–S5 (estáticas)
├── industria/ tecnologia/ retail/
├── casos/ nosotros/ contacto/
└── sitemap.ts, robots.ts, not-found.tsx
public/
├── fonts/                  ← Inter y JetBrains Mono (OFL), WOFF2 latino (../marca/scripts/build-webfonts.py)
├── brand/                  ← logos SVG de ../marca
└── og/                     ← imágenes Open Graph (cd ../marca && npm run og)
```

## Comandos

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # genera out/
npm run lint
```

## Reglas de contenido

- Casos anonimizados; sin nombres de clientes.
- Nunca "Excel" ni "planillas" en texto visible: "hojas de cálculo". Solo se permiten en `searchMeta` (meta description/keywords).
- Casos sin estado: nada de "en producción", "piloto" o "aprobado".
- Voz de empresa: primera persona del plural ("implementamos"), nunca "yo"; sin precios.
- Antes de publicar: nombres de clientes en `out/` = 0; "Excel" solo dentro de `<meta>`.
