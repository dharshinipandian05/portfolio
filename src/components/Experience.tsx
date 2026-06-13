import { EXPERIENCES } from "../data";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-[10px] tracking-widest text-indigo-400 uppercase font-semibold font-mono">02 / Experience</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white mt-1">Professional Journey</h2>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-white/[0.08] ml-2 pl-6 sm:pl-8 space-y-12 py-2">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} id={`experience-${exp.id}`} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#070c18] border border-indigo-500/[0.25] flex items-center justify-center group-hover:border-indigo-400 transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors duration-300 animate-pulse" />
              </div>

              {/* Title & Organization */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2 group-hover:text-indigo-300 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-semibold text-neutral-300">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center text-xs text-neutral-400 gap-1 sm:self-start">
                  <Calendar className="w-3 h-3 text-indigo-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description Bullet points */}
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal list-none pl-0">
                {exp.description.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-indigo-500/80 select-none mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tags of tech stack used/learned */}
              {exp.skills && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-indigo-500/[0.04] border border-indigo-500/[0.12] text-indigo-300 tracking-tight"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
