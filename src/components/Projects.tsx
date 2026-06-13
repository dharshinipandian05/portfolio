import { PROJECTS } from "../data";
import { Github, ExternalLink, Check, Calendar, Lock, Users, Activity, ShieldCheck, Cloud } from "lucide-react";
import { motion } from "motion/react";

export default function Projects() {
  const getProjectDetails = (id: string) => {
    switch (id) {
      case "proj-1":
        return {
          icon: <Calendar className="w-5 h-5 text-indigo-400" />,
          role: "Backend Developer",
          scope: "Group System",
          badgeColor: "bg-indigo-500/[0.08] text-indigo-300 border-indigo-500/20",
          glowGradient: "from-indigo-600/[0.08] to-violet-600/[0.02]",
          glowBorder: "group-hover:border-indigo-500/40"
        };
      case "proj-2":
        return {
          icon: <Activity className="w-5 h-5 text-emerald-400" />,
          role: "Backend Developer",
          scope: "Group System",
          badgeColor: "bg-emerald-500/[0.08] text-emerald-300 border-emerald-500/20",
          glowGradient: "from-emerald-600/[0.08] to-teal-600/[0.02]",
          glowBorder: "group-hover:border-emerald-500/40"
        };
      case "proj-3":
        return {
          icon: <Users className="w-5 h-5 text-sky-400" />,
          role: "Frontend & Backend Developer",
          scope: "Group System",
          badgeColor: "bg-sky-500/[0.08] text-sky-300 border-sky-500/20",
          glowGradient: "from-sky-600/[0.08] to-blue-600/[0.02]",
          glowBorder: "group-hover:border-sky-500/40"
        };
      case "proj-5":
        return {
          icon: <Cloud className="w-5 h-5 text-indigo-400" />,
          role: "Cloud Specialist",
          scope: "Enterprise System",
          badgeColor: "bg-indigo-500/[0.08] text-indigo-300 border-indigo-500/20",
          glowGradient: "from-indigo-600/[0.08] to-cyan-600/[0.02]",
          glowBorder: "group-hover:border-indigo-400/40"
        };
      case "proj-4":
      default:
        return {
          icon: <Lock className="w-5 h-5 text-amber-400" />,
          role: "Individual Creator",
          scope: "Individual Utility",
          badgeColor: "bg-amber-500/[0.08] text-amber-300 border-amber-500/20",
          glowGradient: "from-amber-600/[0.08] to-orange-600/[0.02]",
          glowBorder: "group-hover:border-amber-500/40"
        };
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#050a15]/30 border-y border-white/[0.04] relative overflow-hidden">
      {/* Decorative localized subtle backdrop lighting */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/[0.01] blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] rounded-full bg-emerald-500/[0.01] blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-[10px] tracking-widest text-indigo-400 uppercase font-semibold font-mono">05 / Work & Architecture</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white mt-1">Featured Solutions</h2>
          <p className="text-xs text-neutral-400 mt-2 max-w-xl">
            Clean relational models, calculation pipelines, and user-concentric responsive interfaces.
          </p>
        </div>

        {/* Overhauled, highly distinct visual 2x2 grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {PROJECTS.map((proj, idx) => {
            const config = getProjectDetails(proj.id);
            return (
              <motion.div
                key={proj.id}
                id={`portfolio-project-card-${proj.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${config.glowGradient} to-[#060b15]/90 border border-white/[0.05] ${config.glowBorder} hover:bg-gradient-to-br transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-indigo-500/[0.04]`}
              >
                {/* Visual dynamic gradient color highlight top bar */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent group-hover:via-indigo-400 transition-all duration-500" />
                
                <div className="space-y-6">
                  {/* Top line with Icon, Role Badge, and External Links */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-xl bg-[#081222] border border-white/[0.08] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
                        {config.icon}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight group-hover:text-indigo-200 transition-colors duration-300">
                          {proj.title}
                        </h3>
                        {/* Target Tag */}
                        <div className="flex gap-1.5 mt-1">
                          <span className={`text-[9px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full border ${config.badgeColor}`}>
                            {config.role}
                          </span>
                          <span className="text-[9px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full bg-white/[0.03] text-neutral-400 border border-white/[0.06]">
                            {config.scope}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quick navigation actions */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {proj.githubUrl && (
                        <a
                          id={`proj-github-btn-${proj.id}`}
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#070e1a] border border-white/[0.06] text-neutral-400 hover:text-white hover:bg-white/[0.08] transition-all"
                          title="View Codebase"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      
                      {proj.liveUrl && (
                        <a
                          id={`proj-live-btn-${proj.id}`}
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#070e1a] border border-white/[0.06] text-neutral-400 hover:text-indigo-400 hover:bg-indigo-950/20 transition-all"
                          title="Live Application Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Explanations */}
                  <div className="space-y-3">
                    <p className="text-xs sm:text-xs text-indigo-200/90 leading-relaxed font-semibold">
                      {proj.description}
                    </p>
                    <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                      {proj.overview}
                    </p>
                  </div>

                  {/* Contributions details list */}
                  <div className="space-y-2.5 pt-4 border-t border-white/[0.04]">
                    <h4 className="text-[9px] font-mono uppercase tracking-widest text-indigo-400/90 font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      Engineering Contributions
                    </h4>
                    <ul className="space-y-2 text-xs text-neutral-400 font-normal">
                      {proj.contributions.map((contr, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{contr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Badges Container with subtle highlights */}
                <div className="mt-8 pt-4 border-t border-white/[0.04] space-y-2">
                  <span className="text-[8px] font-mono uppercase tracking-wider text-neutral-500 font-bold block">
                    Technologies Utilized
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[9px] font-mono font-semibold bg-indigo-500/[0.05] border border-indigo-500/[0.12] text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
