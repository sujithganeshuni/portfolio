// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import professionalPhoto from '../assets/professional-photo.jpg';
import styles from './AboutPage.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutPage = () => {
  const { ref: introRef, inView: introInView } = useInView({ threshold: 0.15, triggerOnce: true });
  const { ref: eduRef, inView: eduInView } = useInView({ threshold: 0.15, triggerOnce: true });
  const { ref: expRef, inView: expInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className={styles.aboutPage}>

      {/* ── Hero intro ── */}
      <section className={styles.introSection} ref={introRef}>
        <motion.div
          className={styles.photoWrap}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={introInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <img src={professionalPhoto} alt="Sujith Ganeshuni" className={styles.photo} />
        </motion.div>

        <motion.div
          className={styles.introCopy}
          variants={fadeUp}
          initial="hidden"
          animate={introInView ? 'visible' : 'hidden'}
        >
          <p className={styles.sectionLabel}>About Me</p>
          <h1 className={styles.name}>Sujith Ganeshuni</h1>
          <p className={styles.tagline}>
            Software Engineer &middot; AI/ML Enthusiast &middot; Full Stack Developer
          </p>
          <p className={styles.bio}>
            I'm a passionate software engineer with hands-on experience building intelligent,
            scalable web applications. I love the intersection of AI/ML and full-stack development —
            designing systems that are both technically sound and genuinely useful to real users.
          </p>
          <p className={styles.bio}>
            When I'm not coding, I'm exploring the latest research in NLP, contributing to
            open-source projects, or experimenting with new frameworks. I believe great software is
            built through curiosity, collaboration, and relentless iteration.
          </p>
          <a href="/Sujith_Ganeshuni_Resume.pdf" download className={styles.resumeBtn}>
            Download Resume
          </a>
        </motion.div>
      </section>

      {/* ── Education ── */}
      <section className={styles.section} ref={eduRef}>
        <motion.div variants={fadeUp} initial="hidden" animate={eduInView ? 'visible' : 'hidden'}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <h3>Master of Science — Computer Science</h3>
                <p className={styles.timelineMeta}>University · 2023 – 2025</p>
                <p>Specialization in Artificial Intelligence &amp; Machine Learning. Research focused on adversarial training for NLP sequence labeling tasks.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <h3>Bachelor of Engineering — Computer Science</h3>
                <p className={styles.timelineMeta}>University · 2019 – 2023</p>
                <p>Core CS fundamentals, data structures &amp; algorithms, database systems, and software engineering principles.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Experience ── */}
      <section className={styles.section} ref={expRef}>
        <motion.div variants={fadeUp} initial="hidden" animate={expInView ? 'visible' : 'hidden'}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <h3>Full Stack Developer — Restaurant Management System</h3>
                <p className={styles.timelineMeta}>Personal Project · 2024</p>
                <p>Built a MERN-stack application reducing order processing time by 40% with a real-time analytics dashboard, JWT auth, and RBAC.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <h3>AI/ML Research — Sequence Labeling with GANs</h3>
                <p className={styles.timelineMeta}>Academic Research · 2024</p>
                <p>Designed a lightweight adversarial training framework using PyTorch that improved accuracy on standard NLP benchmarks under low-resource settings.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default AboutPage;
