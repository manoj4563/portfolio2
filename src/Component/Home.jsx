import React from "react";
import { BackgroundBeams } from "../Designed component/Homepage";

export default function Home() {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased px-4 pt-20">
      <div className="max-w-3xl mx-auto p-4 relative z-10">
        <p className="text-sm md:text-base tracking-normal text-[#d4a24c] mb-4 font-medium">
          Salem, Tamil Nadu
        </p>
        <h1 className="text-3xl md:text-6xl leading-tight font-semibold text-neutral-100 text-left">
          Manoj builds full stack products with AI woven in, not bolted on.
        </h1>
        <p className="text-neutral-400 max-w-xl my-6 text-base md:text-lg text-left leading-relaxed">
          Full Stack Developer & AI Integration Engineer working across the MERN
          stack, LLM-powered features, and AWS infrastructure. B.E. Computer
          Science graduate (2025) from Sona College of Technology, currently
          building conference tooling and studying for AWS Solutions Architect
          — Associate.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => goTo("projects")}
            className="rounded-md bg-[#d4a24c] text-[#0b0f14] font-medium px-6 py-3 text-sm hover:bg-[#e2b569] transition-colors"
          >
            See my work
          </button>
          <button
            onClick={() => goTo("contact")}
            className="rounded-md border border-neutral-700 text-neutral-200 font-medium px-6 py-3 text-sm hover:border-neutral-500 transition-colors"
          >
            Get in touch
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
