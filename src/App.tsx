import { useState, useEffect } from "react";
import IntroAnimation from "./components/IntroAnimation"; // You will create this
import Navbar from "./components/Navbar";
import AboutProfilewrapper from "./components/AboutProfilewrapper";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificateswithAnimatedBorders from "./components/CertificateswithAnimatedBorders";
import ContactSection from "./components/ContactSection";
import ThanksSection from "./components/ThanksSection";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 8000); // Intro duration in ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {showIntro ? (
        <IntroAnimation />
      ) : (
        <>
          <Navbar />
          <AboutProfilewrapper />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificateswithAnimatedBorders />
          <ContactSection />
          <ThanksSection />
        </>
      )}
    </div>
  );
}
