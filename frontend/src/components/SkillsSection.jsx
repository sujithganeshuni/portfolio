import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './SkillsSection.module.css';

// Import all skill SVG icons
import axiosSvg from '../assets/icons/axios-plain-wordmark.svg';
import bootstrapSvg from '../assets/icons/bootstrap-original-wordmark.svg';
import cssSvg from '../assets/icons/css3-original-wordmark.svg';
import dockerSvg from '../assets/icons/docker-original-wordmark.svg';
import expressSvg from '../assets/icons/express-original-wordmark.svg';
import gitSvg from '../assets/icons/git-original-wordmark.svg';
import githubSvg from '../assets/icons/github-original-wordmark.svg';
import htmlSvg from '../assets/icons/html5-original-wordmark.svg';
import javaSvg from '../assets/icons/java-original-wordmark.svg';
import jsSvg from '../assets/icons/javascript-original.svg';
import jenkinsSvg from '../assets/icons/jenkins-original.svg';
import kubernetesSvg from '../assets/icons/kubernetes-original-wordmark.svg';
import mongodbSvg from '../assets/icons/mongodb-original-wordmark.svg';
import mongooseSvg from '../assets/icons/mongoose-original-wordmark.svg';
import mysqlSvg from '../assets/icons/mysql-original-wordmark.svg';
import nextjsSvg from '../assets/icons/nextjs-original-wordmark.svg';
import nodeSvg from '../assets/icons/nodejs-original-wordmark.svg';
import numpySvg from '../assets/icons/numpy-original-wordmark.svg';
import opencvSvg from '../assets/icons/opencv-original-wordmark.svg';
import pandasSvg from '../assets/icons/pandas-original-wordmark.svg';
import pythonSvg from '../assets/icons/python-original-wordmark.svg';
import pytorchSvg from '../assets/icons/pytorch-original-wordmark.svg';
import reactSvg from '../assets/icons/react-original-wordmark.svg';
import reduxSvg from '../assets/icons/redux-original.svg';
import tailwindSvg from '../assets/icons/tailwindcss-original-wordmark.svg';
import tensorflowSvg from '../assets/icons/tensorflow-original-wordmark.svg';
import vscodeSvg from '../assets/icons/vscode-original-wordmark.svg';

const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      { name: 'HTML5', icon: htmlSvg },
      { name: 'CSS3', icon: cssSvg },
      { name: 'JavaScript', icon: jsSvg },
      { name: 'React', icon: reactSvg },
      { name: 'Redux', icon: reduxSvg },
      { name: 'Next.js', icon: nextjsSvg },
      { name: 'Tailwind', icon: tailwindSvg },
      { name: 'Bootstrap', icon: bootstrapSvg },
      { name: 'Axios', icon: axiosSvg },
    ],
  },
  {
    label: 'Backend & DB',
    skills: [
      { name: 'Node.js', icon: nodeSvg },
      { name: 'Express', icon: expressSvg },
      { name: 'MongoDB', icon: mongodbSvg },
      { name: 'Mongoose', icon: mongooseSvg },
      { name: 'MySQL', icon: mysqlSvg },
      { name: 'Java', icon: javaSvg },
      { name: 'Python', icon: pythonSvg },
    ],
  },
  {
    label: 'AI / ML',
    skills: [
      { name: 'PyTorch', icon: pytorchSvg },
      { name: 'TensorFlow', icon: tensorflowSvg },
      { name: 'NumPy', icon: numpySvg },
      { name: 'Pandas', icon: pandasSvg },
      { name: 'OpenCV', icon: opencvSvg },
    ],
  },
  {
    label: 'DevOps & Tools',
    skills: [
      { name: 'Git', icon: gitSvg },
      { name: 'GitHub', icon: githubSvg },
      { name: 'Docker', icon: dockerSvg },
      { name: 'Kubernetes', icon: kubernetesSvg },
      { name: 'Jenkins', icon: jenkinsSvg },
      { name: 'VS Code', icon: vscodeSvg },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SkillsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className={styles.skillsSection} ref={ref} id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className={styles.sectionLabel}>What I Work With</p>
        <h2 className={styles.sectionTitle}>Skills &amp; Technologies</h2>
      </motion.div>

      {skillGroups.map((group, gi) => (
        <div key={group.label} className={styles.group}>
          <motion.h3
            className={styles.groupLabel}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
          >
            {group.label}
          </motion.h3>
          <motion.div
            className={styles.skillGrid}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {group.skills.map((skill) => (
              <motion.div
                key={skill.name}
                className={styles.skillCard}
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -4 }}
              >
                <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
                <span className={styles.skillName}>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
