import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three'; // <-- 1. IMPORT THREE.JS
import NET from 'vanta/dist/vanta.net.min';
import styles from './Hero.module.css';

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(NET({
        el: vantaRef.current,
        THREE: THREE, // <-- 2. PASS THREE.JS TO VANTA
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: '#ffffff',
        backgroundColor: '#0a192f',
        points: 10.00,
        maxDistance: 25.00,
        spacing: 18.00
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section ref={vantaRef} className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Hi, I'm Sujith, a Software Engineer specializing in AI/ML & Full Stack Development.
        </h1>
        <p className={styles.subtitle}>
          I build intelligent and scalable web solutions that deliver exceptional user experiences.
        </p>
        <button className={styles.ctaButton}>
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;