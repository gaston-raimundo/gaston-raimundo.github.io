import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Stack from "./components/Stack";
import Experiencia from "./components/Experiencia";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Stack />
        <Experiencia />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
