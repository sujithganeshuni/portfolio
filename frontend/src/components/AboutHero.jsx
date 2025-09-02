import React from 'react';
import styles from './AboutHero.module.css';
import myPhoto from '../assets/professional-photo.jpg';
import {useInView} from 'react-intersection-observer';

const AboutHero = () => {
  const { ref, inView } = useInView({
    triggerOnce:true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className={`${styles.hero} ${inView ? styles.visible : ''}`}>
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Hi, I'm Sujith</h1>
          <p className={styles.subtitle}>
            A passionate developer bridging the gap between data-driven insights and elegant user experiences.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={myPhoto} alt="A professional headshot" className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;