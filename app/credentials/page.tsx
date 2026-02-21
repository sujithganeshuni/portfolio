import Navbar from "@/components/Navbar";
import { certifications, skills } from "@/lib/credentials";

export default function CredentialsPage() {
  return (
    <main>
      <Navbar />

      <section className="py-24">
        <div className="max-w-4xl mx-auto space-y-16 fade-up">

          <h1 className="text-3xl font-semibold tracking-tight">
            Credentials
          </h1>

          {/* Certifications */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold tracking-tight">
              Certifications
            </h2>

            <div className="space-y-3 text-sm">
              {certifications.map((cert) => (
                <div key={cert.title}>
                  <div>{cert.title}</div>
                  <div className="text-[#6E6E73]">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-10">
            <h2 className="text-xl font-semibold tracking-tight">
              Skills
            </h2>

            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-2">
                <div className="text-sm capitalize">{category}</div>
                <div className="text-sm text-[#6E6E73]">
                  {items.join(" • ")}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}