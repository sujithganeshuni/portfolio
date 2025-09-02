import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import desired icons

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Automatically gets the current year

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
        {/* Add more social links here if you wish */}
      </div>
      <p className={styles.copyright}>
        © {currentYear} Sujith Ganeshuni. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;