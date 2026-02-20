import Link from "next/link";

export default function Maintenance() {
  return (
    <section className="py-32 relative">
      
      {/* Soft ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto fade-up relative">
        <div className="max-w-xl mx-auto text-center space-y-6">

          {/* Upgraded indicator */}
          <div className="flex justify-center">
            <div className="w-3 h-3 rounded-full bg-[#5B5FFF] glow-pulse" />
          </div>

          <h1 className="text-3xl font-semibold tracking-tight">
            Page Under Refinement
          </h1>

          <p className="text-[#6E6E73] leading-relaxed">
            This section is currently being crafted and will be available soon.
          </p>

          <div className="pt-4">
            <Link
              href="/"
              className="text-sm hover:text-[#5B5FFF] transition-colors"
            >
              Return Home
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}