import About from "@/components/about-us";
import Hero from "@/components/hero";
import ServicesSection from "@/components/service-section";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="about">
        <About />
      </section>
    </main>
  );
}
