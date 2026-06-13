import { CODING_PROFILES } from "../data";
import { ArrowUpRight, Terminal } from "lucide-react";

export default function CodingProfiles() {
  return (
    <section id="profiles" className="py-24 bg-transparent border-b border-white/[0.04]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-[10px] tracking-widest text-indigo-400 uppercase font-semibold font-mono">06 / Evaluation</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white mt-1">Algorithmic Profiles</h2>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CODING_PROFILES.map((profile) => (
            <a
              key={profile.name}
              id={`profile-card-${profile.name.toLowerCase()}`}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl bg-[#09101d]/60 border border-white/[0.05] hover:border-indigo-500/30 hover:bg-[#0b1426]/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-1.5 rounded bg-indigo-500/[0.04] border border-indigo-500/[0.12] group-hover:bg-indigo-500/[0.12] transition-colors">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-indigo-300 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-indigo-300 transition-all">{profile.name}</h3>
                  <p className="text-[10px] font-mono text-indigo-300/80 mt-0.5 truncate">{profile.username}</p>
                </div>
              </div>

              {/* Badges and metric highlights */}
              <div className="mt-6 pt-3 border-t border-white/[0.04] flex flex-col gap-1">
                {profile.badge && (
                  <span className="text-[10px] font-semibold text-neutral-300 font-sans">
                    {profile.badge}
                  </span>
                )}
                {profile.score && (
                  <span className="text-[9px] font-mono text-neutral-400">
                    {profile.score}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
