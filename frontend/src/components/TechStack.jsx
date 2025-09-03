import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import styles from './TechStack.module.css';

// Import your top 8 skill icons
import reactIcon from '../assets/icons/react-original-wordmark.svg';
import nodejsIcon from '../assets/icons/nodejs-original-wordmark.svg';
import pythonIcon from '../assets/icons/python-original-wordmark.svg';
import tensorflowIcon from '../assets/icons/tensorflow-original-wordmark.svg';
import mongodbIcon from '../assets/icons/mongodb-original-wordmark.svg';
import dockerIcon from '../assets/icons/docker-original-wordmark.svg';
import gitIcon from '../assets/icons/git-original-wordmark.svg';
import jsIcon from '../assets/icons/javascript-original.svg';
import javaIcon from '../assets/icons/java-original-wordmark.svg';
import mysqlIcon from '../assets/icons/mysql-original-wordmark.svg';

const techStack = [
  { name: 'JavaScript', icon: jsIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'TensorFlow', icon: tensorflowIcon },
  { name: 'MongoDB', icon: mongodbIcon },
  { name: 'Docker', icon: dockerIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'Java', icon: javaIcon },
  { name: 'MySQL', icon: mysqlIcon },
];

// Animation variants for Framer Motion
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // This will make each child animate 0.1s after the previous one
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

// Tilt component options
const tiltOptions = {
  max: 25,
  scale: 1.05,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
};

const TechStack = () => {
  return (
    <motion.section 
      className={styles.techStackSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <h2 className={styles.title}>My Core Technologies</h2>
      <div className={styles.grid}>
        {techStack.map((tech) => (
          <motion.div key={tech.name} variants={itemVariants}>
            <Tilt options={tiltOptions} className={styles.techItem}>
              <img src={tech.icon} alt={tech.name} className={styles.techIcon} />
              <p className={styles.techName}>{tech.name}</p>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TechStack;