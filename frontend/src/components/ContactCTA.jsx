import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './ContactCTA.module.css';

const ContactCTA = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className={styles.section} ref={ref}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p className={styles.eyebrow}>What's Next?</p>
        <h2 className={styles.title}>Let's Build Something Together</h2>
        <p className={styles.body}>
          Whether you have a job opportunity, a cool project idea, or just want to say hi — my inbox
          is always open. I'll do my best to get back to you!
        </p>
        <button className={styles.ctaBtn} onClick={() => navigate('/contact')}>
          Get In Touch
        </button>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
