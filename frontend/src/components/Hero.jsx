import React from 'react';
import styles from './Hero.module.css'; // Import our CSS Module

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Sujith Dev</h1>
        <p className={styles.subtitle}>
          An aspiring AI/ML, Data Science, and MERN Full Stack Developer passionate 
          about building innovative and user-centric solutions.
        </p>
        <button className={styles.ctaButton}>
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;