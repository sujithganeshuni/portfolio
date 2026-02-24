import Navbar from "@/components/Navbar";
import { projects } from "@/lib/projects";
import ProjectMedia from "@/components/ProjectMedia";
import Link from "next/link";

export default function ProjectsPage() {
  const [featured, ...rest] = projects;

  return (
    <main className="pt-24">
      <Navbar />

      <section className="py-24">
        <div className="max-w-6xl mx-auto fade-up">

          <h1 className="text-3xl font-semibold tracking-tight mb-16">
            Selected Work
          </h1>

          <div className="grid grid-cols-2 gap-6">

            {/* Featured Tile */}
            <div
              className="
              col-span-2
              rounded-2xl
              p-8
              backdrop-blur-md
              bg-white/40
              border border-black/5
              hover:bg-white/60
              hover:border-black/10
              hover:-translate-y-[2px]
              transition-all
              duration-500
              "
            >
              <div className="space-y-6">

                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {featured.title}
                  </h2>

                  <p className="text-sm text-[#6E6E73]">
                    {featured.tagline}
                  </p>
                </div>

                <ProjectMedia media={featured.media} />

                <p className="text-sm text-[#6E6E73] leading-relaxed max-w-2xl">
                  {featured.description}
                </p>

                <div className="text-xs text-[#6E6E73]">
                  {featured.tech.join(" • ")}
                </div>

                <div className="flex gap-6 text-sm">
                  {featured.links.github && (
                    <Link href={featured.links.github} className="hover:text-[#5B5FFF] transition-colors">
                      GitHub
                    </Link>
                  )}

                  {featured.links.demo && (
                    <Link href={featured.links.demo} className="hover:text-[#5B5FFF] transition-colors">
                      Live Demo
                    </Link>
                  )}
                </div>

              </div>
            </div>

            {/* Secondary Tiles */}
            {rest.map((project) => (
              <div
                key={project.id}
                className="
                rounded-2xl
                p-6
                backdrop-blur-md
                bg-white/30
                border border-black/5
                hover:bg-white/55
                hover:border-black/10
                hover:-translate-y-[2px]
                transition-all
                duration-500
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
              </div>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}