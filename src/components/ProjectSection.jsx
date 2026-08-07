"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Chip, Card, Spinner } from "@heroui/react";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" });

        if (!res.ok) {
          throw new Error(`Server status: ${res.status}`);
        }

        const data = await res.json();
        if (Array.isArray(data)) {
          setProjects(data);
        }
      } catch (err) {
        console.error("Failed to load projects:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 min-h-[400px]">
        <Spinner size="lg" label="Loading Projects..." color="secondary" />
      </div>
    );
  }

  return (
    <section 
    id="project"
    className="relative min-h-screen py-20 px-6 max-w-6xl mx-auto bg-purple-50 dark:bg-zinc-950 text-zinc-900 dark:text-purple-100 transition-colors duration-300">
      {/* Header Bar */}
      <div className="flex justify-between items-end mb-16 border-b border-purple-200 dark:border-purple-900/50 pb-4">
        <div>
          <p className="text-xs tracking-widest text-purple-600/70 dark:text-purple-400/70 uppercase font-mono">
            RECENT PROJECTS
          </p>
        </div>
        <div>
          <span className="text-xs tracking-widest text-purple-600 dark:text-purple-400 font-mono uppercase font-bold">
            MY WORKS
          </span>
        </div>
      </div>

      {/* Project Item List */}
      <div className="flex flex-col">
        {projects.map((project) => {
          const projectId = project._id || project.id;
          const isHovered = hoveredProject === projectId;

          return (
            <motion.div
              key={projectId}
              onMouseEnter={() => setHoveredProject(projectId)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative border-b border-purple-200/70 dark:border-purple-900/40 py-10 transition-colors duration-300 hover:border-purple-500 dark:hover:border-purple-400"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Left Side: Title, Description, Skills */}
                <div className="space-y-4 max-w-xl">
                  {/* Word-by-Word Purple & Wave Effect */}
                  <h3 className="text-3xl md:text-5xl font-serif text-zinc-900 dark:text-zinc-100 flex flex-wrap gap-x-3 gap-y-1">
                    {project.title.split(" ").map((word, wordIdx) => (
                      <span
                        key={wordIdx}
                        className="inline-block transition-all duration-300 hover:text-purple-600 dark:hover:text-purple-400 hover:-translate-y-2 cursor-pointer"
                      >
                        {word}
                      </span>
                    ))}
                  </h3>

                  {/* Dark Mode Readable Description */}
                  <p className="text-sm text-zinc-600 dark:text-purple-200/70 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Purple Badges for Skills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {(project.tags || []).map((tag, idx) => (
                      <Chip
                        key={idx}
                        size="sm"
                        variant="flat"
                        className="text-xs font-mono rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/60 shadow-sm"
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </div>

                
                <div className="flex items-center gap-6 self-start lg:self-center">
                  
                
                  <div className="w-[340px] h-[220px] hidden sm:block relative">
                    <AnimatePresence mode="wait">
                      {isHovered && project.image && (
                        <motion.div
                          key={projectId}
                          initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
                          animate={{ opacity: 1, scale: 1, rotate: -3 }}
                          exit={{ opacity: 0, scale: 0.85, rotate: -3 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="absolute inset-0"
                        >
                          <Card className="relative w-full h-full shadow-2xl shadow-purple-950/20 dark:shadow-purple-900/40 border border-purple-300 dark:border-purple-800/60 overflow-hidden bg-purple-900/20 backdrop-blur-md">
                            <Image
                              src={project.image}
                              alt={project.title || "Project Preview"}
                              fill
                              sizes="340px"
                              className="object-cover"
                              priority
                              unoptimized
                            />
                          </Card>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Detail Link */}
                  <Link
                    href={project.liveUrl || "#"}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-sm font-medium text-purple-700 dark:text-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:text-purple-900 dark:hover:text-purple-100 whitespace-nowrap"
                  >
                    <span>Detail</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>

                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}