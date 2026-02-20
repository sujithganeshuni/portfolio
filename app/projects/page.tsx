// import Navbar from "@/components/Navbar";
// import CaseStudy from "@/components/CaseStudy";
// import { projects } from "@/lib/projects";

// export default function ProjectsPage() {
//   return (
//     <main>
//       <Navbar />

//       <section className="py-24">
//         <div className="max-w-6xl mx-auto fade-up">
//           <h1 className="text-3xl font-semibold tracking-tight mb-16">
//             Selected Work
//           </h1>

//           <div className="space-y-24">
//             {projects.map((project) => (
//               <CaseStudy key={project.title} project={project} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import Navbar from "@/components/Navbar";
import Maintenance from "@/components/Maintenance";

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <Maintenance />
    </main>
  );
}