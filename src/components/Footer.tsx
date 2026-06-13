import { PERSONAL_INFO } from "../data";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="portfolio-footer" className="bg-transparent border-t border-white/[0.04] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase font-semibold">
            © {new Date().getFullYear()} DHARSHINI J. PORTFOLIO
          </p>
          <p className="text-[9px] text-neutral-500 font-normal mt-1 font-mono">
            Designed for scaling minds. Built with dynamic React & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            id="footer-github-link"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-400 hover:text-indigo-400 transition-colors"
          >
            GitHub
          </a>
          <a
            id="footer-linkedin-link"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-400 hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </a>
          
          <button
            id="footer-totop-btn"
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-[#09101d]/60 border border-white/[0.05] hover:border-indigo-500/30 text-indigo-400 hover:text-indigo-300 transition-all flex items-center justify-center cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
