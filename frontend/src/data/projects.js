const placeholderImage = (width, height) => `https://placehold.co/${width}x${height}/1F2937/38BDF8?text=Project`;

const projects = [
  {
    id: 1,
    title: "Sequence Labeling Using Generative Adversarial Networks",
    description: "This work introduces a lightweight, adversarial sequence labeling framework that improves accuracy and consistency with minimal data and computation. It uses a tagger to predict labels and a checker to distinguish between true and predicted sequences, guiding the model through adversarial training. The approach achieves strong results on standard NLP benchmarks while being efficient and suitable for low-resource settings.",
    tags: ["Python", "PyTorch", "Natural Language Processing (NLP)", "Adversarial Training", "Sequence Labeling"],
    image: placeholderImage(600, 400),
  },
  {
    id: 2,
    title: "Restaurant Management System",
    description: "Developed a full-stack Restaurant Management System using the MERN stack that reduced order processing time by 40% through a real-time analytics dashboard. Implemented robust security with JWT-based authentication and role-based access control (RBAC) to protect application endpoints and ensure secure user access.",
    tags: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "JWT", "RBAC"],
    image: placeholderImage(600, 400),
  },
  {
    id: 3,
    title: "Online News Classification Using Machine Learning",
    description: "This project focuses on building a machine learning model to automatically classify online news articles into predefined categories based on their content. Using natural language processing techniques for text preprocessing and feature extraction, the system applies supervised learning algorithms to accurately predict the category of unseen news data. The project demonstrates the application of machine learning in automating content organization and enhancing information retrieval in digital news platforms.",
    tags: ["Python", "Scikit-learn", "Machine Learning", "Text Classification", "Natural Language Processing (NLP)"],
    image: placeholderImage(600, 400),
  },
];

export default projects;