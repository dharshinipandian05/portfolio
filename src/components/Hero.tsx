import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeroProps {
  onViewProjects: () => void;
}

export default function Hero({ onViewProjects }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-stretch pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#070d19]/60 via-[#050912]/80 to-[#040810]"
    >
      {/* Background modern ambient details (no flashy color: subtle grayscale only) */}
      <div className="absolute inset-0 max-w-6xl mx-auto opacity-70 pointer-events-none">
        {/* Soft Indigo / Violet & Slate organic flows */}
        <div className="absolute top-[25%] left-[20%] w-[450px] h-[450px] rounded-full bg-indigo-500/[0.04] blur-[120px]" />
        <div className="absolute bottom-[30%] right-[15%] w-[400px] h-[400px] rounded-full bg-sky-500/[0.03] blur-[120px]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center flex-grow">
        {/* Available for Opportunities Badge */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center self-start px-3 py-1 rounded-full bg-indigo-500/[0.04] border border-indigo-500/[0.15] text-[10px] uppercase tracking-widest text-indigo-400 mb-6 font-semibold font-mono"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2 animate-pulse" />
          Associate Backend Developer at The Alter Office
        </motion.div>

        {/* Name */}
        <motion.h1
          id="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white font-sans leading-[0.95]"
        >
          Dharshini <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-sky-300">J</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          id="hero-role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-xl sm:text-3.5xl font-extrabold text-neutral-200 tracking-tight"
        >
          {PERSONAL_INFO.role}
        </motion.p>

        {/* Tagline */}
        <motion.p
          id="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          id="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-4 items-center"
        >
          <button
            id="cta-view-projects"
            onClick={onViewProjects}
            className="px-6 py-3 rounded-md bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 focus:outline-none flex items-center group cursor-pointer"
          >
            View Projects
            <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
          </button>

          <div className="flex items-center gap-3 border-l border-white/[0.08] pl-5 py-1">
            <a
              id="cta-github"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 w-9 h-9 flex items-center justify-center rounded-md bg-white/[0.03] border border-white/[0.08] text-neutral-400 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-950/20 transition-all duration-300"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="cta-linkedin"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 w-9 h-9 flex items-center justify-center rounded-md bg-white/[0.03] border border-white/[0.08] text-neutral-400 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-950/20 transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="cta-email"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 w-9 h-9 flex items-center justify-center rounded-md bg-white/[0.03] border border-white/[0.08] text-neutral-400 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-950/20 transition-all duration-300"
              title="Email Dharshini"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 animate-bounce">
        <span className="text-[9px] uppercase tracking-widest text-indigo-400 mb-1.5 font-semibold font-mono">SCROLL DOWN</span>
        <ArrowDown className="w-3.5 h-3.5 text-indigo-400" />
      </div>
    </section>
  );
}
