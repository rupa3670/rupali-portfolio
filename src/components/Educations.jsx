"use client";

import React from "react";
import { GraduationCap } from "lucide-react";

const educationList = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "Dhaka International University",
    duration: "2023 - Present",
    status: "Running",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Jamalpur Residential Model College",
    duration: "2019 - 2021",
    status: "Completed",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institute: "KawniarChar M.L High School",
    duration: "2017 - 2019",
    status: "Completed",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 max-w-5xl mx-auto bg-purple-50/30 dark:bg-neutral-950 text-zinc-900 dark:text-purple-100 transition-colors duration-300"
    >
      {/* Header Bar */}
      <div className="flex justify-between items-center mb-12 border-b border-purple-200/70 dark:border-purple-900/50 pb-4">
        <p className="text-xs tracking-widest text-purple-600/80 dark:text-purple-400/80 uppercase font-mono font-medium">
          MY ACADEMIC BACKGROUND
        </p>
        <span className="text-xs tracking-widest text-purple-600 dark:text-purple-400 font-mono uppercase font-bold">
          EDUCATION
        </span>
      </div>

      {/* Timeline */}
      <div className="relative max-w-2xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-2 bottom-2 w-px bg-purple-200 dark:bg-purple-900/50" />

        <div className="space-y-8">
          {educationList.map((edu, idx) => (
            <div key={idx} className="relative flex items-start gap-4">
              {/* Icon */}
              <div className="relative z-10 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/40 border-2 border-purple-50 dark:border-neutral-950 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>

              {/* Content card */}
              <div className="flex-1 bg-white/60 dark:bg-purple-950/10 border border-purple-200/60 dark:border-purple-900/40 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-purple-400 dark:hover:border-purple-700 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-base md:text-lg font-serif font-semibold text-zinc-800 dark:text-zinc-100">
                    {edu.degree}
                  </h3>
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full whitespace-nowrap ${
                      edu.status === "Running"
                        ? "bg-purple-600 text-white"
                        : "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                <p className="text-sm text-zinc-600 dark:text-purple-200/80 font-sans">
                  {edu.institute}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-purple-600/80 dark:text-purple-400/80 font-mono">
                  <span>{edu.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}