import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import styles from './FeaturedProjects.module.css';

const FeaturedProjects = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const featured = projects.slice(0, 3);

  return (
    <section className={styles.section} ref={ref} id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className={styles.sectionLabel}>What I've Built</p>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.sectionSubtitle}>
          A selection of my most impactful work across full-stack development and AI/ML.
        </p>
      </motion.div>

      <motion.div
        className={styles.grid}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 * i }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className={styles.viewAllWrapper}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <button className={styles.viewAllBtn} onClick={() => navigate('/portfolio')}>
          View All Projects →
        </button>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
