import React, { useState, useEffect } from 'react';
import styles from './PortfolioPage.module.css';
import projects from '../data/projects'; // Our mock data
import ProjectCard from '../components/ProjectCard'; // Reuse our card component

// Get a unique list of all tags/categories from the projects data
const allCategories = ['All', ...new Set(projects.flatMap(p => p.tags))];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // This effect runs whenever the activeFilter changes
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      const newFilteredProjects = projects.filter(project => 
        project.tags.includes(activeFilter)
      );
      setFilteredProjects(newFilteredProjects);
    }
  }, [activeFilter]);

  return (
    <div className={styles.portfolioContainer}>
      <h1 className={styles.title}>My Portfolio</h1>
      <p className={styles.subtitle}>
        A collection of my best work, showcasing my skills in web development, AI, and beyond.
      </p>

      {/* Filter Buttons */}
      <div className={styles.filterContainer}>
        {allCategories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`${styles.filterButton} ${activeFilter === category ? styles.active : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className={styles.grid}>
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;