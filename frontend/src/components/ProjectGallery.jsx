import React from 'react';
import styles from './ProjectGallery.module.css';
import projects from '../data/projects'; // Import our mock data
import ProjectCard from './ProjectCard'; // Import the card component

const ProjectGallery = () => {
  return (
    <section className={styles.gallery}>
      <h2 className={styles.title}>Featured Projects</h2>
      <div className={styles.grid}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;