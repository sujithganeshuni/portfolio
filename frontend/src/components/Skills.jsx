import React from 'react';
import Marquee from 'react-fast-marquee';
import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';

// --- Importing all 28 of your skill icons ---
import pytorchIcon from '../assets/icons/pytorch-original-wordmark.svg';
import reactIcon from '../assets/icons/react-original-wordmark.svg';
import reduxIcon from '../assets/icons/redux-original.svg';
import tailwindcssIcon from '../assets/icons/tailwindcss-original-wordmark.svg';
import tensorflowIcon from '../assets/icons/tensorflow-original-wordmark.svg';
import vscodeIcon from '../assets/icons/vscode-original-wordmark.svg';
import axiosIcon from '../assets/icons/axios-plain-wordmark.svg';
import bootstrapIcon from '../assets/icons/bootstrap-original-wordmark.svg';
import cssIcon from '../assets/icons/css3-original-wordmark.svg';
import dockerIcon from '../assets/icons/docker-original-wordmark.svg';
import expressIcon from '../assets/icons/express-original-wordmark.svg';
import githubIcon from '../assets/icons/github-original-wordmark.svg';
import gitIcon from '../assets/icons/git-original-wordmark.svg';
import htmlIcon from '../assets/icons/html5-original-wordmark.svg';
import javaIcon from '../assets/icons/java-original-wordmark.svg';
import jsIcon from '../assets/icons/javascript-original.svg';
import jenkinsIcon from '../assets/icons/jenkins-original.svg';
import kubernetesIcon from '../assets/icons/kubernetes-original-wordmark.svg';
import mongodbIcon from '../assets/icons/mongodb-original-wordmark.svg';
import mongooseIcon from '../assets/icons/mongoose-original-wordmark.svg';
import mysqlIcon from '../assets/icons/mysql-original-wordmark.svg';
import nextjsIcon from '../assets/icons/nextjs-original-wordmark.svg';
import nodejsIcon from '../assets/icons/nodejs-original-wordmark.svg';
import numpyIcon from '../assets/icons/numpy-original-wordmark.svg';
import opencvIcon from '../assets/icons/opencv-original-wordmark.svg';
import pandasIcon from '../assets/icons/pandas-original-wordmark.svg';
import pythonIcon from '../assets/icons/python-original-wordmark.svg';

// Splitting skills into two rows for a more dynamic effect
const skillsRow1 = [
  { name: 'Python', icon: pythonIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'Java', icon: javaIcon },
  { name: 'HTML5', icon: htmlIcon },
  { name: 'CSS3', icon: cssIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Next.js', icon: nextjsIcon },
  { name: 'Redux', icon: reduxIcon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'Express', icon: expressIcon },
  { name: 'MongoDB', icon: mongodbIcon },
  { name: 'Mongoose', icon: mongooseIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'Tailwind CSS', icon: tailwindcssIcon },
];

const skillsRow2 = [
  { name: 'TensorFlow', icon: tensorflowIcon },
  { name: 'PyTorch', icon: pytorchIcon },
  { name: 'NumPy', icon: numpyIcon },
  { name: 'Pandas', icon: pandasIcon },
  { name: 'OpenCV', icon: opencvIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'Docker', icon: dockerIcon },
  { name: 'Kubernetes', icon: kubernetesIcon },
  { name: 'Jenkins', icon: jenkinsIcon },
  { name: 'Bootstrap', icon: bootstrapIcon },
  { name: 'Axios', icon: axiosIcon },
  { name: 'VS Code', icon: vscodeIcon },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const Skill = ({ name, icon }) => (
    <div className={styles.skillItem}>
      <img src={icon} alt={name} className={styles.skillIcon} />
      <span className={styles.skillName}>{name}</span>
    </div>
  );

  return (
    <section ref={ref} className={`${styles.skillsSection} ${inView ? styles.visible : ''}`}>
      <h2 className={styles.title}>My Technical Skills</h2>
      <div className={styles.marqueeContainer}>
        <Marquee gradient={false} speed={50}>
          {skillsRow1.map((skill) => <Skill key={skill.name} {...skill} />)}
        </Marquee>
        <Marquee gradient={false} speed={50} direction="right" className={styles.secondMarquee}>
          {skillsRow2.map((skill) => <Skill key={skill.name} {...skill} />)}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;