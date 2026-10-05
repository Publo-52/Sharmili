import MathBackground from "@/components/MathBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Interests from "@/components/Interests";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import MathPlayground from "@/components/MathPlayground";
import PersonalInterests from "@/components/PersonalInterests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Atmospheric Cartesian Grid & Watermarks */}
      <MathBackground />

      {/* Main Structural Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main id="main-content" className="flex-1">
          {/* Section 00: Hero (Opens immediately when visiting the website) */}
          <Hero />

          {/* Section 01: About Me */}
          <About />

          {/* Section 02: Education & Academic Journey */}
          <Education />

          {/* Section 03: What Fascinates Me (Interests) */}
          <Interests />

          {/* Section 04: Capabilities & Academic Skills */}
          <Skills />

          {/* Section 05: Selected Work (Projects & Assignments) */}
          <Projects />

          {/* Section 06: Certifications & Workshops */}
          <Certificates />

          {/* Signature Interactive Element: Mathematical Coordinate Slate */}
          <MathPlayground />

          {/* Section 07: Beyond Mathematics */}
          <PersonalInterests />

          {/* Section 08: Let's Connect (Contact & Inquiries) */}
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
