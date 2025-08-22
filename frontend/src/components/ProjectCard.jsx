import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <img src={project.image} alt={`${project.title} screenshot`} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <ul className={styles.tagList}>
          {project.tags.map((tag, index) => (
            <li key={index} className={styles.tag}>{tag}</li>
          ))}
        </ul>
        <a href="#" className={styles.caseStudyLink}>Explore Case Study &rarr;</a>
      </div>
    </div>
  );
};

export default ProjectCard;