"use client";
import React from "react";
import { WobbleCard } from "../Designed component/WobbleCard";

export default function Education() {
  return (
    <div className="bg-neutral-950 px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-100 mb-2">Education</h2>
        <p className="text-neutral-400 mb-10 max-w-xl">
          The academic path that led into full stack development and applied AI.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 bg-indigo-900 min-h-[280px]"
          >
            <div className="max-w-md">
              <p className="text-[#d4a24c] text-sm font-medium mb-2">2021 — 2025</p>
              <h3 className="text-left text-balance text-xl md:text-2xl font-semibold text-white">
                B.E. Computer Science & Engineering
              </h3>
              <p className="mt-3 text-left text-neutral-200">
                Sona College of Technology. Graduated in 2025, with coursework and
                projects spanning full stack web development, databases, and
                applied machine learning.
              </p>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 bg-neutral-900 min-h-[280px]">
            <p className="text-[#d4a24c] text-sm font-medium mb-2">SSLC & HSC</p>
            <h3 className="text-left text-balance text-lg md:text-xl font-semibold text-white">
              SRK Matriculation Higher Secondary School
            </h3>
            <p className="mt-3 text-left text-neutral-300">
              Completed SSLC & HSC with 88%.
            </p>
          </WobbleCard>
        </div>
      </div>
    </div>
  );
}
