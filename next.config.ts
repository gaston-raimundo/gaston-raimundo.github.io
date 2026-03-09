import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático para GitHub Pages
  output: "export",

  // Si el repo NO es username.github.io, descomentá y ajustá el basePath:
  // basePath: "/institutional-web",
  // assetPrefix: "/institutional-web/",

  // Desactivar image optimization (no compatible con export estático)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
