import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Layers, AlertTriangle, Rocket } from "lucide-react";
import { LogoGithub } from "@gravity-ui/icons";
import { Chip } from "@heroui/react";
import { getProjectById } from "@/lib/projects";

export const dynamic = "force-dynamic";

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) notFound();

  return (
    <section className="min-h-screen bg-purple-50 dark:bg-neutral-950 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/#project"
          className="inline-flex items-center gap-1.5 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors mb-5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Card */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md shadow-purple-100 dark:shadow-none border border-purple-100 dark:border-neutral-800 overflow-hidden">
          {/* Hero image with title overlay */}
          {project.image && (
            <div className="relative w-full h-[200px] md:h-[320px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <h1 className="absolute bottom-5 left-6 right-6 text-xl md:text-3xl font-bold text-white">
                {project.title}
              </h1>
            </div>
          )}

          <div className="p-6 md:p-8">
            {!project.image && (
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                {project.title}
              </h1>
            )}

            {/* Tech Stack */}
            <div className="mb-6">
              <p className="text-xs tracking-widest text-purple-600/80 dark:text-purple-400/80 uppercase font-mono font-medium mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {(project.tags || []).map((tag, idx) => (
                  <Chip
                    key={idx}
                    size="sm"
                    variant="flat"
                    className="text-xs font-medium bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300"
                  >
                    {tag}
                  </Chip>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={project.liveUrl?.trim() || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors text-sm shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Site
              </a>

              <a
                href={project.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-50 dark:bg-neutral-800 text-purple-700 dark:text-gray-200 font-medium hover:bg-purple-100 dark:hover:bg-neutral-700 transition-colors text-sm"
              >
                <LogoGithub className="w-4 h-4" />
                GitHub
              </a>
            </div>

            {/* Content blocks */}
            <div className="space-y-6">
              <InfoBlock
                icon={Layers}
                title="About the Project"
                text={project.description}
              />
              <InfoBlock
                icon={AlertTriangle}
                title="Challenges Faced"
                text={project.challenges || "Details coming soon."}
              />
              <InfoBlock
                icon={Rocket}
                title="Future Improvements"
                text={project.futureImprovements || "Details coming soon."}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ icon: Icon, title, text }) {
  return (
    <div className="border-l-2 border-purple-200 dark:border-purple-900 pl-4">
      <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-1.5 flex items-center gap-1.5">
        <Icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        {title}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {text}
      </p>
    </div>
  );
}