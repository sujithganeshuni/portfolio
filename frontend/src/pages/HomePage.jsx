import React from 'react';
import Hero from '../components/Hero'; // Import the Hero component
import ProjectGallery from '../components/ProjectGallery'; // Import the ProjectGallery component
import TechStack from '../components/TechStack'; // Import the TechStack component (not used here)
const HomePage = () => {
  return (
    <>
      <Hero />
      <TechStack />
      <ProjectGallery />
    </>
  );
};

export default HomePage;