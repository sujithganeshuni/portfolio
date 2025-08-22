// src/pages/AboutPage.jsx
import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.contentGrid}>
        <div className={styles.narrative}>
          <p>
            Hello! I'm [Your Name], a developer driven by a fascination with the intersection of data, artificial intelligence, and human-centric design. My journey into technology began not in a computer lab, but with a simple question: "How can we make things work better for people?"
          </p>
          <p>
            This question has led me down a path of continuous learning, from mastering the logical structures of full-stack development with the MERN stack to exploring the intricate patterns within data to train machine learning models. I don't just see code; I see a tool for storytelling, problem-solving, and creating seamless digital experiences.
          </p>
          <h3>My Philosophy</h3>
          <p>
            I believe the best technology is that which feels invisible. It should empower users, not intimidate them. My approach is rooted in clean, scalable code, a deep respect for the user experience, and a relentless pursuit of the most efficient solution. Whether it's architecting a backend API or fine-tuning the nuances of a front-end animation, I am dedicated to craftsmanship and quality.
          </p>
        </div>
        <div className={styles.skills}>
          <h3>Core Competencies</h3>
          <ul>
            <li>AI & Machine Learning</li>
            <li>Data Science & Analytics</li>
            <li>MERN Full Stack (MongoDB, Express, React, Node.js)</li>
            <li>Responsive Web Design</li>
            <li>API Design & Integration</li>
            <li>Agile Methodologies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;