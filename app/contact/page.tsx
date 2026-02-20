import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="py-24">
        <div className="max-w-3xl mx-auto space-y-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            Contact
          </h1>

          <p className="text-[#6E6E73] leading-relaxed">
            For opportunities, collaborations, or project discussions, feel free
            to reach out.
          </p>

          <div className="space-y-4 text-sm">
            <div>
              <span className="text-[#6E6E73]">Email</span>
              <div>
                <a
                  href="mailto:sujithganeshuni25@gmail.com"
                  className="hover:text-[#5B5FFF] transition-colors"
                >
                  sujithganeshuni25@gmail.com
                </a>
              </div>
            </div>

            <div>
              <span className="text-[#6E6E73]">GitHub</span>
              <div>
                <a
                  href="https://github.com/sujithganeshuni"
                  target="_blank"
                  className="hover:text-[#5B5FFF] transition-colors"
                >
                  github.com/sujithganeshuni
                </a>
              </div>
            </div>

            <div>
              <span className="text-[#6E6E73]">LinkedIn</span>
              <div>
                <a
                  href="https://linkedin.com/in/sujithganeshuni"
                  target="_blank"
                  className="hover:text-[#5B5FFF] transition-colors"
                >
                  linkedin.com/in/sujithganeshuni
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}