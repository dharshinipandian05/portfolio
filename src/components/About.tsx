import { PERSONAL_INFO } from "../data";
import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent border-b border-white/[0.04]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[10px] tracking-widest text-indigo-400 uppercase font-semibold font-mono">01 / Profile</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white mt-1">About Me</h2>
        </div>

        {/* Content Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div className="md:col-span-2 flex flex-col justify-between space-y-6">
            <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
              {PERSONAL_INFO.about}
            </p>

            {/* Quick structured facts to balance out empty space */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.04]">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.01] border border-white/[0.03]">
                <Briefcase className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">Current Role</span>
                  <span className="text-xs text-neutral-200 font-semibold">Associate Backend Dev</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.01] border border-white/[0.03]">
                <GraduationCap className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">Degree Program</span>
                  <span className="text-xs text-neutral-200 font-semibold">B.Tech AI & Data Science</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.01] border border-white/[0.03]">
                <MapPin className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">Location</span>
                  <span className="text-xs text-neutral-200 font-semibold">Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats sidebar cards */}
          <div className="p-5 rounded-lg bg-indigo-500/[0.02] border border-indigo-500/[0.12] space-y-4 flex flex-col justify-center">
            <h3 className="text-xs font-bold text-indigo-300 tracking-wider uppercase font-mono">Focus Areas</h3>
            <ul className="space-y-3 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Express JS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                SQL (PostgreSQL & MySQL)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Apache Kafka
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                BullMQ (Job Queues)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Redis (Caching)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                GitHub Actions (CI/CD)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
