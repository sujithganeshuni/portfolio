// src/data/projects.js

// Using a placeholder image service for now
const placeholderImage = (width, height) => `https://placehold.co/${width}x${height}/E000B3/eaeaea?text=Project`;

const projects = [
  {
    id: 1,
    title: "AI-Powered Recommendation Engine",
    description: "A deep learning model that provides personalized content recommendations, built with Python, TensorFlow, and integrated into a web app using a Flask API.",
    tags: ["Python", "TensorFlow", "Flask", "React"],
    image: placeholderImage(600, 400),
  },
  {
    id: 2,
    title: "E-commerce MERN Platform",
    description: "A full-stack e-commerce site featuring product listings, a shopping cart, user authentication, and a payment gateway, all built with the MERN stack.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    image: placeholderImage(600, 400),
  },
  {
    id: 3,
    title: "Real-time Data Visualization Dashboard",
    description: "A dashboard that visualizes live-streaming data using D3.js and WebSockets. The backend pushes data, and the frontend renders it in interactive charts.",
    tags: ["D3.js", "WebSockets", "Node.js", "CSS Grid"],
    image: placeholderImage(600, 400),
  },
];

export default projects;