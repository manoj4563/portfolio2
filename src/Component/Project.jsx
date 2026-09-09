"use client";
import React from "react";
import { Boxes } from "../Designed component/BackgroundBox";
import { cn } from "../lib/utils";
import BorderGlow from "../Designed component/BorderGlow";
const projects = [
  {
    name: "Communa",
    tag: "MERN · Conference platform",
    description:
      "A conference management platform built during my time at DataSpot Consultant Group — handling scheduling, attendees, and event workflows on the MERN stack.",
  },
  {
    name: "Wikibox AI",
    tag: "Python · Groq API · LangChain",
    description:
      "A multilingual LLM-powered chatbot with language detection, structured JSON prompt engineering, HTML translation, and difflib fuzzy Q&A matching — since refactored around a LangChain RAG pipeline.",
  },
  {
    name: "JSMS — Jewelry Shop Management System",
    tag: "PHP · MySQL",
    description:
      "A PHP/MySQL e-commerce platform for managing jewelry shop inventory, sales, and customers — built as a final year project.",
  },
  {
    name: "JSMS — Jewelry Shop Management System",
    tag: "PHP · MySQL",
    description:
      "A PHP/MySQL e-commerce platform for managing jewelry shop inventory, sales, and customers — built as a final year project.",
  },
  {
    name: "JSMS — Jewelry Shop Management System",
    tag: "PHP · MySQL",
    description:
      "A PHP/MySQL e-commerce platform for managing jewelry shop inventory, sales, and customers — built as a final year project.",
  },
  {
    name: "JSMS — Jewelry Shop Management System",
    tag: "PHP · MySQL",
    description:
      "A PHP/MySQL e-commerce platform for managing jewelry shop inventory, sales, and customers — built as a final year project.",
  }
];

export function BackgroundBoxesDemo() {
  return (
    <div
      className="h-72 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-xl">
      <div
        className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-3xl text-xl text-white relative z-20 font-semibold text-center px-4")}>
        Projects
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 max-w-md px-4">
        A few things I've built across full stack development and applied AI.
      </p>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="bg-neutral-950 px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <BackgroundBoxesDemo />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {projects.map((project) => (
            <BorderGlow
            className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 flex flex-col"
  edgeSensitivity={30}
  glowColor="40 80 80"
  backgroundColor="#120F17"
  borderRadius={28}
  glowRadius={40}
  glowIntensity={1}
  coneSpread={25}
  animated={false}
  colors={['#c084fc', '#f472b6', '#38bdf8']}
>
            <div
              key={project.name}
              
            >
              <p className="text-[#d4a24c] text-xs font-medium tracking-normal mb-2">
                {project.tag}
              </p>
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                {project.name}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </div>

  );
}
