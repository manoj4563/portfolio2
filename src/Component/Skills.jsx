import { Box, Button, LinearProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { StickyScroll } from "../Designed component/StickyScroll";

const content = [
  {
    title: "Full Stack Development",
    description:
      "Building end-to-end products on the MERN stack — React front ends, Node/Express APIs, and MongoDB data layers — most recently on Communa, a conference management platform.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white font-semibold text-lg text-center px-6">
        React · Node · Express · MongoDB
      </div>
    ),
  },
  {
    title: "AI / LLM Integration",
    description:
      "Wiring language models into real products — from Wikibox AI, a multilingual chatbot built on the Groq API with a LangChain RAG pipeline, to prompt engineering and structured JSON outputs.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] text-white font-semibold text-lg text-center px-6">
        LangChain · RAG · Groq API
      </div>
    ),
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Working with AWS services for deployment and scalability, and currently studying toward the AWS Certified Solutions Architect — Associate (SAA-C03) certification.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white font-semibold text-lg text-center px-6">
        AWS · SAA-C03 in progress
      </div>
    ),
  },
  {
    title: "Data & Automation",
    description:
      "Scripting data workflows in Python and pandas — merging and cleaning multi-file Excel datasets, groupby aggregations, and building relational spreadsheet structures.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white font-semibold text-lg text-center px-6">
        Python · pandas · Excel
      </div>
    ),
  },
  {
    title: "",
    description:
      "",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white font-semibold text-lg text-center px-6">
        Python · pandas · Excel
      </div>
    ),
  }
];

const skillset = [
  { name: "HTML", percent: 80 },
  { name: "CSS", percent: 75 },
  { name: "React", percent: 85 },
  { name: "Node.js", percent: 90 },
  { name: "Express.js", percent: 85 },
  { name: "Mongoose", percent: 75 },
  { name: "SQL", percent: 75 },
  { name: "Python", percent: 75 },
  { name: "Java", percent: 80 },
  { name: "AWS", percent: 60 },
  { name: "Excel", percent: 80 },
];

const Skillgraph = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, mt: 3 }}>
      {skillset.map((data) => (
        <Box key={data.name}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
            <Typography sx={{ color: "#f5f3ee", fontSize: "0.9rem" }}>{data.name}</Typography>
            <Typography sx={{ color: "#8f98a1", fontSize: "0.85rem" }}>{data.percent}%</Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={data.percent}
            sx={{
              height: 6,
              borderRadius: 3,
              backgroundColor: "rgba(245,243,238,0.08)",
              "& .MuiLinearProgress-bar": { backgroundColor: "#d4a24c", borderRadius: 3 },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

const Description = () => {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
};

export default function Skills() {
  const [view, setView] = useState("skill");

  const tabStyle = (active) => ({
    textTransform: "none",
    color: active ? "#0b0f14" : "#c7cdd3",
    backgroundColor: active ? "#d4a24c" : "transparent",
    border: "1px solid rgba(245,243,238,0.15)",
    borderRadius: "8px",
    px: 2.5,
    "&:hover": { backgroundColor: active ? "#e2b569" : "rgba(245,243,238,0.06)" },
  });

  return (
    <div className="bg-neutral-950 px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-100 mb-2">Skills</h2>
        <p className="text-neutral-400 mb-8 max-w-xl">
          A breakdown by proficiency, or the story behind how each area gets used.
        </p>
        <Box sx={{ display: "flex", gap: 1.5, mb: 2 }}>
          <Button onClick={() => setView("skill")} sx={tabStyle(view === "skill")}>
            Proficiency
          </Button>
          <Button onClick={() => setView("description")} sx={tabStyle(view === "description")}>
            In practice
          </Button>
        </Box>
        {view === "skill" ? <Skillgraph /> : <Description />}
      </div>
    </div>
  );
}
