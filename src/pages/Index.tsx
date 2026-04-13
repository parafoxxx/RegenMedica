import Navbar from "./_components/Navbar.tsx";
import HeroSection from "./_components/HeroSection.tsx";
import AboutSection from "./_components/AboutSection.tsx";
import InnovationsSection from "./_components/InnovationsSection.tsx";
import TechnologySection from "./_components/TechnologySection.tsx";
import ImpactSection from "./_components/ImpactSection.tsx";
import CollaborationSection from "./_components/CollaborationSection.tsx";
import Footer from "./_components/Footer.tsx";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <InnovationsSection />
      <TechnologySection />
      <ImpactSection />
      <CollaborationSection />
      <Footer />
    </div>
  );
}
