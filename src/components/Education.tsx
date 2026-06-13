import { EDUCATION_DETAILS } from "../data";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

export default function Education() {
  const getIcon = (id: string) => {
    switch (id) {
      case "edu-1":
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      case "edu-2":
        return <BookOpen className="w-5 h-5 text-purple-400" />;
      default:
        return <Award className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="education" className="py-24 bg-transparent border-b border-white/[0.04]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-[10px] tracking-widest text-indigo-400 uppercase font-semibold font-mono">03 / Education</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white mt-1">Academic Background</h2>
          <p className="text-xs text-neutral-400 mt-2 max-w-xl">
            Focusing on Artificial Intelligence, Data Science, and algorithmic foundations.
          </p>
        </div>

        {/* Timeline representation or clean card grid */}
        <div className="space-y-8">
          {EDUCATION_DETAILS.map((edu) => (
            <div
              key={edu.id}
              id={`education-card-${edu.id}`}
              className="group relative p-6 sm:p-8 rounded-xl bg-[#09101d]/60 border border-white/[0.05] hover:border-indigo-500/30 hover:bg-[#0b1426]/80 transition-all duration-300 flex flex-col sm:flex-row sm:items-start justify-between gap-6"
            >
              {/* Highlight ribbon */}
              <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-indigo-500/20 to-transparent group-hover:from-indigo-500 transition-colors duration-300 rounded-l-xl" />

              <div className="flex items-start gap-4 flex-1">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-indigo-500/[0.06] border border-indigo-500/[0.12] flex items-center justify-center">
                  {getIcon(edu.id)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-sm font-semibold text-neutral-300 mt-1">
                    {edu.degree}
                  </p>
                  
                  {edu.details && edu.details.length > 0 && (
                    <ul className="mt-4 space-y-2 text-xs text-neutral-400 font-normal">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="flex items-baseline gap-2">
                          <span className="text-indigo-500 select-none">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Right panel: Timeline & Grade */}
              <div className="sm:text-right shrink-0 flex sm:flex-col justify-between sm:justify-start items-center sm:items-end gap-4 sm:gap-2">
                <div className="flex items-center text-xs text-neutral-400 gap-1.5 bg-white/[0.02] border border-white/[0.06] px-2.5 py-1 rounded-md font-mono">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{edu.period}</span>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-0.5">
                    {edu.scoreLabel}
                  </span>
                  <span className="text-sm sm:text-base font-black text-indigo-300 bg-indigo-500/[0.07] border border-indigo-500/[0.15] px-3 py-1 rounded">
                    {edu.scoreValue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
