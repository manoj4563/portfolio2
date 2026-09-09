import React from "react";
import "../App.css";
import GlowCursor from "../Designed component/GlowCursor";
const cards = [
  {
    id: 1,
    title: "B.E. CSE, Class of 2025",
    text: "Graduated from Sona College of Technology.",
  },
  {
    id: 2,
    title: "AWS SAA-C03 — In progress",
    text: "Studying toward AWS Certified Solutions Architect — Associate.",
  },
  {
    id: 3,
    title: "Wikibox AI RAG refactor",
    text: "Rebuilt the chatbot's retrieval layer with LangChain.",
  },
  {
    id: 4,
    title: "DataSpot Consultant Group",
    text: "Contributed to Communa, a conference management platform.",
  },
];

export function InfiniteCards() {
  return (
    <div className="bg-neutral-950 px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-100 mb-2">
          Achievements
        </h2>
        <p className="text-neutral-400 mb-8 max-w-xl">
          Milestones along the way — hover to pause and read.
        </p>
      </div>
      <div className="slider">
        <div className="track">
          {[...cards, ...cards].map((card, index) => (
            <div className="card" key={index}>
              <GlowCursor
                          color="#67E8F9"
                          secondaryColor="#A78BFA"
                          trailLength={28}
                          trailWidth={10}
                          trailTaper={0.75}
                          followSpeed={0.14}
                          glowIntensity={1.4}
                          glowSpread={1.3}
                          hotspot={0.5}
                          brightness={1.0}
                          opacity={0.55}
                          pulseSpeed={0.9}
                          noiseStrength={0.025}
                          idleFade
                          idleTimeout={600}
                          fadeDuration={1000}
                          blendMode="normal"
                          className="absolute inset-0"
                        />
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfiniteCards;
