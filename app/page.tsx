import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedProjects />
    </main>
  );
}