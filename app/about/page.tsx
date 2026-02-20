import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-3xl font-semibold tracking-tight">
            About
          </h1>

          <div className="space-y-6 text-[#6E6E73] leading-relaxed">
            <p>
              I’m a full stack developer focused on building clean, scalable, and
              performance-oriented web applications. My work emphasizes clarity,
              usability, and maintainable system design rather than unnecessary
              complexity.
            </p>

            <p>
              I enjoy working across the full development lifecycle — from designing
              intuitive user interfaces to structuring backend systems and APIs.
              I’m particularly interested in how thoughtful engineering decisions
              improve real-world product experience.
            </p>

            <p>
              Alongside full stack development, I have a strong interest in applied
              machine learning and intelligent systems. I explore ways to integrate
              data-driven and AI-assisted features into modern web applications
              where they provide meaningful value.
            </p>

            <p>
              My long-term direction is centered around building high-quality digital
              products, continuously improving engineering depth, and contributing
              to systems that prioritize both performance and user experience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}