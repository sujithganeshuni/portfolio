import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectMedia from "@/components/ProjectMedia";

export default function FeaturedProjects() {
  const previewProjects = projects.slice(0, 2);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto fade-up">

        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight">
            Selected Work
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6">

          {previewProjects.map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="
              rounded-2xl
              p-6
              backdrop-blur-md
              bg-white/35
              border border-black/5
              hover:bg-white/55
              hover:border-black/10
              hover:-translate-y-[2px]
              transition-all
              duration-500
              block
              "
            >
              <div className="space-y-4">

                <h3 className="text-lg font-medium">
                  {project.title}
                </h3>

                <ProjectMedia media={project.media} />

                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  {project.tagline}
                </p>

              </div>
            </Link>
          ))}

        </div>

        <div className="pt-10">
          <Link
            href="/projects"
            className="text-sm text-[#6E6E73] hover:text-black transition-colors"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}