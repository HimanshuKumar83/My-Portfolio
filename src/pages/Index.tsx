import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import StarBackground from "@/components/StarBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <StarBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <EducationSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
