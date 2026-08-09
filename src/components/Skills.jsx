"use client";

import React from "react";
import { Code2, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "MongoDB", "REST API"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: ["Git & GitHub", "C++", "VS Code", "Figma"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 max-w-5xl mx-auto bg-purple-50/30 dark:bg-neutral-950 text-zinc-900 dark:text-purple-100 transition-colors duration-300"
    >
      {/* Header Bar */}
      <div className="flex justify-between items-center mb-12 border-b border-purple-200/70 dark:border-purple-900/50 pb-4">
        <p className="text-xs tracking-widest text-purple-600/80 dark:text-purple-400/80 uppercase font-mono font-medium">
          WHAT I KNOW
        </p>
        <span className="text-xs tracking-widest text-purple-600 dark:text-purple-400 font-mono uppercase font-bold">
          SKILLS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="bg-white/60 dark:bg-purple-950/10 border border-purple-200/60 dark:border-purple-900/40 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-purple-400 dark:hover:border-purple-700 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-9 h-9 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-zinc-800 dark:text-zinc-100">
                  {category.title}
                </h3>
              </div>

              {/* Skill List - no percentage */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg bg-purple-100/70 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200/70 dark:border-purple-800/50 hover:bg-purple-200 dark:hover:bg-purple-900/60 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}