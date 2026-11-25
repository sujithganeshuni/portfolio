import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.thumbnailLink}>
        <img src={project.image} alt={`${project.title} thumbnail`} className={styles.cardImage} />
        <div className={styles.thumbnailOverlay}>
          <FaGithub className={styles.overlayIcon} />
          <span>View on GitHub</span>
        </div>
      </a>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <ul className={styles.tagList}>
          {project.tags.map((tag, index) => (
            <li key={index} className={styles.tag}>{tag}</li>
          ))}
        </ul>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
          <FaGithub /> View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;