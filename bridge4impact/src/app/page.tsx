import Navbar from "@/components/ui/Layout/NavBar";
import Footer from "@/components/ui/Layout/Footer";
import Hero from "@/components/ui/Layout/Hero";
import Services from "@/components/Services/Services";
import ReadinessCheck from "@/components/Services/ReadinessCheck";
import About from "@/components/ui/Layout/About";
import Packages from "@/components/Services/Packages";
import FAQ from "@/components/Services/Faqs";
import Contact from "@/components/ui/Layout/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <ReadinessCheck />
      <About />
      <Packages />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}