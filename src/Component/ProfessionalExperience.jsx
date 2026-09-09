import React from "react";
import GlowCursor from "../Designed component/GlowCursor";

const experience = [
  {
    role: "Debt Management",
    company: "HDFC",
    period: "jun 2026 — Present",
    description:
      "Currently working in debt management at HDFC.",
    tags: ["Python","Pandas","Excel"]
  },
  {
    role: "Full Stack Developer",
    company: "DataSpot Consultant Group",
    period: "Aug 2025 — Mar 2026",
    description:
      "Contributed to Wikki Box AI , Communa, a conference management platform, working across the MERN stack with LLM integration.",
    tags: ["React", "Node.js", "MongoDB", "LLM Integration"]
  },
  {
    role: "Full Stack Developer Intern",
    company: "ES Ethic Secure",
    period: "Mar 2025 — Jun 2025",
    description:
      "Internship focused on full stack development.",
    tags: ["React", "Node.js","Express.js","Framer Motion"]
  }
];

export default function ProfessionalExperience() {
  return (
    <section className="bg-neutral-950 px-4 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 backdrop-blur-sm">
          {/* Ambient glow background, contained to the card */}
          

          {/* Card content */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-8 bg-gradient-to-r from-cyan-300 to-violet-400" />
              <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-400">
                Experience
              </h2>
            </div>

            <div className="space-y-8">
              {experience.map((item, i) => (
                <div
                  key={i}
                  className="relative pl-6 border-l border-white/10"
                >
                  <span
                    className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #67E8F9, #A78BFA)"
                    }}
                  />

                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <span className="text-sm text-neutral-500 shrink-0">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-cyan-300 mb-2">
                    {item.company}
                  </p>

                  <p className="text-neutral-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-neutral-300 bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}