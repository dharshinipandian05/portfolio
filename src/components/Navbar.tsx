import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Profiles", href: "#profiles", id: "profiles" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 70; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header id="nav-header" className="fixed top-0 left-0 w-full z-50 bg-[#070c18]/80 backdrop-blur-md border-b border-indigo-500/[0.08] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <div className="flex-shrink-0">
            <button
              id="nav-logo-btn"
              onClick={() => scrollToSection("home")}
              className="text-base font-bold tracking-wider text-white hover:text-indigo-400 transition-colors uppercase font-mono cursor-pointer"
            >
              Dharshini J.
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 text-xs font-semibold transition-colors duration-150 cursor-pointer ${
                  activeSection === item.id
                    ? "text-indigo-400"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Socials Shortcut (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              id="nav-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="nav-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="nav-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-neutral-400 hover:text-white transition-colors p-1"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-white/[0.05] focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu-container"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-indigo-500/[0.12] bg-[#070c18] ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-item-${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-2.5 text-sm font-semibold transition-colors duration-150 ${
                activeSection === item.id
                  ? "text-indigo-400"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center space-x-4 px-4 pt-4 border-t border-indigo-500/[0.08] mt-2">
            <a
              id="mobile-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs text-neutral-400 hover:text-indigo-400 font-semibold"
            >
              <Github className="w-4 h-4 mr-1.5 text-indigo-400" /> GitHub
            </a>
            <a
              id="mobile-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs text-neutral-400 hover:text-indigo-400 font-semibold"
            >
              <Linkedin className="w-4 h-4 mr-1.5 text-indigo-400" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
