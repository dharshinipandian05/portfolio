import { SKILL_CATEGORIES } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent border-b border-white/[0.04]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-[10px] tracking-widest text-indigo-400 uppercase font-semibold font-mono">04 / Competence</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white mt-1">Tech Stack & Skillset</h2>
        </div>

        {/* Skill categories hierarchy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              id={`skill-category-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="p-6 rounded-xl bg-[#09101d]/60 border border-white/[0.05] hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Title */}
                <h3 className="text-xs font-bold tracking-widest text-indigo-300 uppercase mb-4 border-b border-indigo-500/[0.12] pb-2 font-mono">
                  {category.title}
                </h3>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded bg-indigo-500/[0.03] border border-indigo-500/[0.12] text-xs font-semibold text-indigo-200 hover:text-white hover:border-indigo-400 hover:bg-indigo-500/[0.08] transition-all duration-350 select-none cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
