import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a
          href="https://github.com/sujithganeshuni"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={styles.socialLink}
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/sujithganeshuni"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={styles.socialLink}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:sujithganeshuni@gmail.com"
          aria-label="Email"
          className={styles.socialLink}
        >
          <FaEnvelope />
        </a>
      </div>
      <p className={styles.copyright}>
        &copy; {currentYear} Sujith Ganeshuni. All Rights Reserved.
      </p>
      <p className={styles.credit}>Designed &amp; Built by Sujith Ganeshuni</p>
    </footer>
  );
};

export default Footer;
