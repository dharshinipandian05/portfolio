import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const offset = 70; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = projectsSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="website-container" className="min-h-screen bg-[#070c18] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#070d19] to-[#040810] text-[#f3f4f6] selection:bg-indigo-500 selection:text-white antialiased font-sans flex flex-col justify-between">
      {/* Visual background structural lines with premium glowing accents */}
      <div className="fixed inset-0 pointer-events-none z-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
        <div className="w-px h-full bg-indigo-500/[0.03]" />
        <div className="w-px h-full bg-indigo-500/[0.03] hidden sm:block" />
        <div className="w-px h-full bg-indigo-500/[0.03] hidden md:block" />
        <div className="w-px h-full bg-indigo-500/[0.03]" />
      </div>

      {/* Decorative premium color glow blobs to make it feel vibrant yet professional */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[25%] -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/[0.04] blur-[150px]" />
        <div className="absolute bottom-[30%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.03] blur-[150px]" />
        <div className="absolute top-[60%] left-[5%] w-[400px] h-[400px] rounded-full bg-violet-600/[0.03] blur-[130px]" />
      </div>

      <div className="relative z-10 flex-grow flex flex-col items-stretch">
        {/* Navigation bar at top */}
        <Navbar />

        {/* Hero Section */}
        <Hero onViewProjects={scrollToProjects} />

        {/* Professional Summary */}
        <About />

        {/* Experience Timeline */}
        <Experience />

        {/* Academic Background */}
        <Education />

        {/* Skill Matrix */}
        <Skills />

        {/* Featured Code Projects */}
        <Projects />

        {/* Algorithmic Coding profiles */}
        <CodingProfiles />

        {/* Contact dispatch panel */}
        <Contact />

        {/* Standard simple copyright footer */}
        <Footer />
      </div>
    </div>
  );
}
