import Link from "next/link";
import { projectPreviews } from "@/lib/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto fade-up">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight">
            Selected Work
          </h2>
        </div>

        <div className="space-y-10">
          {projectPreviews.map((project) => (
            <Link
              key={project.title}
              href="/projects"
              className="block group"
            >
              <div className="space-y-1">
                <div className="text-lg font-medium group-hover:text-[#5B5FFF] transition-colors">
                  {project.title}
                </div>

                <div className="text-sm text-[#6E6E73]">
                  {project.summary}
                </div>

                <div className="text-sm text-[#6E6E73]">
                  {project.tech}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}