import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">
          Sujith Ganeshuni
        </div>

        <div className="flex items-center gap-8 text-sm text-[#6E6E73]">
          <Link href="/projects" className="hover:text-black transition-colors">
            Projects
          </Link>
          <Link href="/about" className="hover:text-black transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}