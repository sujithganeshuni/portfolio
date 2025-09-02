import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './PersonalDetails.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons

const PersonalDetails = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`${styles.container} ${inView ? styles.visible : ''}`}>
      {/* Section 1: Personal Touch */}
      <section className={styles.section}>
        <h2 className={styles.title}>Personal Touch</h2>
        <p className={styles.content}>
          Beyond the code, I'm passionate about landscape photography and enjoy exploring hiking trails. I believe that creativity from hobbies like these often inspires innovative solutions in my technical work. My core values are continuous learning, integrity, and making a positive impact.
        </p>
      </section>

      {/* Section 2: Career Goals */}
      <section className={styles.section}>
        <h2 className={styles.title}>My Mission</h2>
        <p className={styles.content}>
          My goal is to work on products that solve real-world problems at scale. I am driven to be part of a team that pushes the boundaries of technology and is passionate about creating software that is not only powerful but also intuitive and accessible to everyone.
        </p>
      </section>

      {/* Section 3: Get in Touch */}
      <section className={styles.section}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.content}>
          I'm always open to connecting with like-minded professionals and exploring new opportunities. Feel free to reach out!
        </p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/sujithganeshuni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/sujithganeshuni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          {/* Add other links as needed */}
        </div>
      </section>
    </div>
  );
};

export default PersonalDetails;