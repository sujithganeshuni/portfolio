export type ProjectPreview = {
  title: string;
  summary: string;
  tech: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  links?: {
    demo?: string;
    github?: string;
  };
};

/* ----------------------------- */
/* Homepage Project Previews     */
/* ----------------------------- */

export const projectPreviews: ProjectPreview[] = [
  {
    title: "Intelligent Analytics Platform",
    summary:
      "Scalable full-stack analytics system focused on performance and clarity.",
    tech: "Next.js • Node.js • MongoDB",
  },
  {
    title: "AI-Assisted Web Application",
    summary:
      "Full-stack application integrating ML-driven features for enhanced workflows.",
    tech: "React • Express • Machine Learning",
  },
];

/* ----------------------------- */
/* Full Case Studies (Projects)  */
/* ----------------------------- */

export const projects: Project[] = [
  {
    title: "Intelligent Analytics Platform",
    description:
      "Built a scalable full-stack analytics system designed to process and visualize large datasets. The platform emphasizes performance, real-time updates, and clean interaction patterns while maintaining a minimal and intuitive user experience.",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    links: {
      demo: "#",     // Replace with real URL
      github: "#",   // Replace with real URL
    },
  },
  {
    title: "AI-Assisted Web Application",
    description:
      "Developed a full-stack web application integrating machine learning-driven features to enhance user workflows. The system was designed with a strong focus on usability, responsiveness, and clear separation between frontend and backend responsibilities.",
    tech: ["React", "Express", "MongoDB", "Machine Learning"],
    links: {
      demo: "#",     // Replace with real URL
      github: "#",   // Replace with real URL
    },
  },
];