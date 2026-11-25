import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    id: 1,
    title: "Sequence Labeling Using Generative Adversarial Networks",
    description: "A lightweight adversarial sequence labeling framework using a tagger-checker GAN approach. Achieves strong results on NLP benchmarks with minimal data and computation.",
    tags: ["Python", "PyTorch", "NLP", "Adversarial Training", "Sequence Labeling"],
    image: project1,
    github: "https://github.com/sujithganeshuni",
  },
  {
    id: 2,
    title: "Restaurant Management System",
    description: "Full-stack MERN app that reduced order processing time by 40% via a real-time analytics dashboard. Secured with JWT authentication and role-based access control (RBAC).",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "RBAC"],
    image: project2,
    github: "https://github.com/sujithganeshuni",
  },
  {
    id: 3,
    title: "Online News Classification Using Machine Learning",
    description: "ML model that automatically classifies online news articles into categories using NLP preprocessing and supervised learning algorithms.",
    tags: ["Python", "Scikit-learn", "Machine Learning", "Text Classification", "NLP"],
    image: project3,
    github: "https://github.com/sujithganeshuni",
  },
];

export default projects;