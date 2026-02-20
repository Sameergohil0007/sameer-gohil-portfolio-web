import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import LanguagesSection from "@/components/LanguagesSection";
import WhyHireMeSection from "@/components/WhyHireMeSection";
import { CTASection, Footer } from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TechStackSection />
        <ProjectsSection />
        <EducationSection />
        <LanguagesSection />
        <WhyHireMeSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
