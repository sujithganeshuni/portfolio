export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;

  media: {
    type: "image" | "video";
    src: string;
  };

  tech: string[];

  highlights?: string[];

  links: {
    github?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    id: "analytics",
    title: "Intelligent Analytics Platform",
    tagline: "Performance-focused data visualization system",

    description:
      "A scalable full-stack analytics platform designed to process and visualize structured datasets. The system emphasizes responsiveness, rendering efficiency, and clear interaction patterns.",

    media: {
      type: "image",
      src: "/projects/analytics.jpg",
    },

    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind"],

    highlights: [
      "Optimized rendering for large datasets",
      "Minimal UI interaction model",
      "Modular backend architecture",
    ],

    links: {
      github: "https://github.com/yourusername/project",
      demo: "https://demo-link.com",
    },
  },

  {
    id: "ai-web",
    title: "AI-Assisted Web Application",
    tagline: "Machine learning enhanced workflows",

    description:
      "A full-stack application integrating ML-driven logic to improve user decision flows. Designed with strong emphasis on clarity, latency minimization, and UX consistency.",

    media: {
      type: "image",
      src: "/projects/ai.jpg",
    },

    tech: ["React", "Express", "MongoDB", "Machine Learning"],

    highlights: [
      "Integrated ML inference pipeline",
      "Structured API layer",
      "Focus on usability & responsiveness",
    ],

    links: {
      github: "https://github.com/yourusername/project",
    },
  },

  {
    id: "system",
    title: "Scalable System Prototype",
    tagline: "Architecture & performance exploration",

    description:
      "An experimental system exploring modular architecture patterns, API orchestration, and frontend performance strategies in modern web applications.",

    media: {
      type: "image",
      src: "/projects/system.jpg",
    },

    tech: ["Next.js", "TypeScript", "API Design"],

    links: {
      github: "https://github.com/yourusername/project",
    },
  },
];