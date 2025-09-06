import React from 'react';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import styles from './Hero.module.css';
import particlesConfig from './particlesConfig';

const Hero = () => {
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
          I'm a Software Engineer specializing in AI/ML & Full Stack Development.
        </h2>
        <p className={styles.intro}>
          <b>I build intelligent and scalable web solutions that deliver exceptional user experiences.</b>
        </p>
        <button className={styles.ctaButton}>
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;