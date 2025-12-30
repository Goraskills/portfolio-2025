import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FlightPlan from "@/components/FlightPlan";
import TechArsenal from "@/components/TechArsenal";
import ProjectShowcase from "@/components/ProjectShowcase";
import Contact from "@/components/Contact";
// import Footer from "@/components/Footer"; // Supprimé

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050508]">
      <Navbar />
      <Hero />
      <About />
      <FlightPlan />
      <TechArsenal />
      <ProjectShowcase />
      <Contact />
      {/* Footer supprimé (intégré dans Contact) */}
    </main>
  );
}