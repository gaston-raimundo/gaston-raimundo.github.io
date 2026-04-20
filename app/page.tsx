import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Proceso from "./components/Proceso";
import Demos from "./components/Demos";
import Experiencia from "./components/Experiencia";
import Stack from "./components/Stack";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Proceso />
        <Demos />
        <Experiencia />
        <Stack />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
