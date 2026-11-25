import React from 'react';
import { useNavigate } from 'react-router-dom';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaDownload } from 'react-icons/fa';
import styles from './Hero.module.css';
import particlesConfig from './particlesConfig';

const Hero = () => {
  const navigate = useNavigate();

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const [nameText] = useTypewriter({
    words: ['Sujith Ganeshuni.'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className={styles.heroContainer}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className={styles.particles}
      />
      <div className={styles.heroContent}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.name}>
          {nameText}
          <Cursor cursorColor='var(--color-accent)' />
        </h1>
        <h2 className={styles.role}>
          I'm a Software Engineer specializing in AI/ML &amp; Full Stack Development.
        </h2>
        <p className={styles.intro}>
          <b>I build intelligent and scalable web solutions that deliver exceptional user experiences.</b>
        </p>
        <div className={styles.ctaGroup}>
          <button className={styles.ctaButton} onClick={() => navigate('/portfolio')}>
            View My Work
          </button>
          <a
            href="/Sujith_Ganeshuni_Resume.pdf"
            download
            className={styles.resumeButton}
          >
            <FaDownload /> Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;