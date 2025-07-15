import { useState, useEffect } from "react";
import IntroAnimation from "./IntroAnimation";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

export default function PortfolioEntry() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 8000); // Total intro time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro ? (
        <IntroAnimation />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </>
      )}
    </>
  );
}
