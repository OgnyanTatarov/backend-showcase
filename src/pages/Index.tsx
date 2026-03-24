import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="about"><AboutSection /></div>
      <div id="projects"><ProjectsSection /></div>
      <div id="stack"><TechStackSection /></div>
      <div id="contact"><ContactSection /></div>
    </div>
  );
};

export default Index;
