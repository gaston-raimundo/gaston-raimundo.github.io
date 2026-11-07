import { PageHero } from "./components/blocks";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="ERROR 404"
      title="Esta página no existe."
      text="Puede que el enlace haya cambiado con la nueva versión del sitio."
      cta={{ href: "/", label: "Volver al inicio" }}
      secondary={{ href: "/contacto", label: "Contactar" }}
    />
  );
}
