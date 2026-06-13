import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent border-t border-white/[0.04]">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-[10px] tracking-widest text-indigo-400 uppercase font-semibold font-mono">07 / Network</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white mt-1">Get in Touch</h2>
          <p className="text-xs text-neutral-400 mt-2">
            Let's build something scalable. Feel free to reach out via any of my primary channels.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-[#09101d]/60 border border-white/[0.05] hover:border-indigo-500/30 transition-all duration-300 space-y-6">
          <h3 className="text-sm font-bold tracking-wide text-white uppercase font-sans">Primary Channels</h3>
          
          <div className="flex flex-col gap-3">
            <a
              id="contact-email-anchor"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center justify-between p-4 rounded-xl bg-[#0b1426]/80 border border-white/[0.05] hover:border-indigo-500/30 text-xs font-mono text-indigo-300 hover:text-white transition-all group"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                id="contact-github-anchor"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-[#0b1426]/80 border border-white/[0.05] hover:border-indigo-500/30 text-xs font-semibold text-neutral-300 hover:text-white transition-all"
              >
                <Github className="w-4 h-4 text-indigo-400" />
                <span>GitHub</span>
              </a>
              <a
                id="contact-linkedin-anchor"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-[#0b1426]/80 border border-white/[0.05] hover:border-indigo-500/30 text-xs font-semibold text-neutral-300 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4 text-indigo-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
