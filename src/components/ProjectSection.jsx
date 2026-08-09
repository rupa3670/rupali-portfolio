import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Chip } from "@heroui/react";
import { LogoGithub } from "@gravity-ui/icons";
import { getAllProjects } from "@/lib/projects";

export const dynamic = "force-dynamic";

export default async function ProjectsSection() {
  const projects = await getAllProjects();

  return (
    <section
      id="project"
      className="relative min-h-screen py-20 px-6 max-w-6xl mx-auto bg-purple-50 dark:bg-zinc-950 text-zinc-900 dark:text-purple-100 transition-colors duration-300"
    >
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

          return (
            <div
              key={projectId}
              className="group relative border-b border-purple-200/70 dark:border-purple-900/40 py-10 transition-colors duration-300 hover:border-purple-500 dark:hover:border-purple-400"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left Side: Title, Description, Skills */}
                <div className="space-y-4 max-w-xl">
                  <h3 className="text-3xl md:text-5xl font-serif text-zinc-900 dark:text-zinc-100 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-purple-200/70 leading-relaxed font-sans">
                    {project.description}
                  </p>

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

                  {/* Mobile: Image always visible below description */}
                  {project.image && (
                    <div className="sm:hidden relative w-full h-[200px] rounded-xl overflow-hidden border border-purple-300 dark:border-purple-800/60 mt-4">
                      <Image
                        src={project.image}
                        alt={project.title || "Project Preview"}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Mobile: Action links always visible */}
                  <div className="flex sm:hidden items-center gap-6 pt-2">
                    <Link
                      href={project.githubUrl || "#"}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-sm font-medium text-purple-700 dark:text-purple-300"
                    >
                      <LogoGithub className="w-4 h-4" />
                      <span>Github</span>
                    </Link>
                    <Link
                      href={`/projects/${projectId}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-purple-700 dark:text-purple-300"
                    >
                      <span>Detail</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Desktop image + links (CSS-only hover, no JS animation) */}
                <div className="hidden sm:flex items-center gap-6 self-start lg:self-center">
                  {project.image && (
                    <div className="w-[340px] h-[220px] relative rounded-lg overflow-hidden border border-purple-300 dark:border-purple-800/60 opacity-0 scale-95 -rotate-3 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 shadow-xl shadow-purple-950/10 dark:shadow-purple-900/30">
                      <Image
                        src={project.image}
                        alt={project.title || "Project Preview"}
                        fill
                        sizes="340px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Detail Link -> goes to dedicated detail page */}
                  <Link
                    href={`/projects/${projectId}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-purple-700 dark:text-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:text-purple-900 dark:hover:text-purple-100 whitespace-nowrap"
                  >
                    <span>Detail</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}