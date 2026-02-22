import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl space-y-6 fade-up">
          <h1 className="text-5xl font-semibold tracking-tight">
            Hi, I&apos;m <span className="hero-name">Sujith</span>
          </h1>

          <p className="text-lg text-[#6E6E73] leading-relaxed">
            Full Stack Developer building scalable MERN applications with AIML depth.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-lg bg-[#5B5FFF] text-white text-sm font-medium hover:opacity-90 transition"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-black/5 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}