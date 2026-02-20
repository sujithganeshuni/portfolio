import { Project } from "@/lib/projects";

export default function CaseStudy({ project }: { project: Project }) {
  return (
    <div className="max-w-3xl space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">
        {project.title}
      </h2>

      <p className="text-[#6E6E73] leading-relaxed">
        {project.description}
      </p>

      <div className="text-sm text-[#6E6E73]">
        {project.tech.join(" • ")}
      </div>

      <div className="flex items-center gap-6 text-sm pt-2">
        {project.links?.demo && (
          <a
            href={project.links.demo}
            className="text-[#5B5FFF] hover:opacity-80 transition"
          >
            Live Demo
          </a>
        )}

        {project.links?.github && (
          <a
            href={project.links.github}
            className="hover:opacity-70 transition"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}